import { setLoginData } from '@/helper/helper';
import {
  BaseQueryFn,
  FetchArgs,
  FetchBaseQueryError,
  fetchBaseQuery,
} from '@reduxjs/toolkit/query';

import {
  getBrowserIdCookie,
  getRefreshToken,
  getSession,
  getToken,
  logout,
} from '@/utils/cookies';

import { mutex } from '../store';
import { BASE_API_V1 } from '@/constant/api';

const baseQuery = fetchBaseQuery({
  baseUrl: BASE_API_V1,
  prepareHeaders: (headers) => {
    const browserId = getBrowserIdCookie();
    const token = getToken();
    const session = getSession();
    if (browserId) {
      headers.set('x-browser-id', browserId);
    }

    if (token) {
      headers.set('Authorization', token);
    }

    if (session) {
      headers.set('session', session);
    }
    headers.set('Content-Type', 'application/json');

    return headers;
  },
});

const customFetchBase: BaseQueryFn<
  string | FetchArgs,
  unknown,
  FetchBaseQueryError
> = async (args, api, extraOptions: any) => {
  await mutex.waitForUnlock();
  let result: any = await baseQuery(args, api, extraOptions);
  if (result.error && result.error.status === 401) {
    //   // checking whether the mutex is locked
    if (!mutex.isLocked()) {
      const release = await mutex.acquire();
      try {
        const refresh = getRefreshToken();
        if (refresh && refresh !== 'null') {
          const refreshResult: any = await baseQuery(
            {
              url: 'auth/refresh/token',
              method: 'GET',
              headers: {
                refresh: refresh,
              },
            },
            api,
            extraOptions
          );

          if (refreshResult.data && refreshResult.data.success) {
            const headers = refreshResult.meta.response.headers;
            const token = refreshResult.data.data.token.replace('Bearer ', '');
            const session = headers.get('x-session')!;

            setLoginData(session, headers.get('x-refresh')!, token);
            // retry the initial query
            result = await baseQuery(args, api, extraOptions);
          } else {
            logout();
            window.location.href = '/';
          }
        } else {
          logout();
          window.location.href = '/';
        }
      } finally {
        //     // release must be called once the mutex should be released again.
        release();
      }
    } else {
      // wait until the mutex is available without locking it
      await mutex.waitForUnlock();
      result = await baseQuery(args, api, extraOptions);
    }
  }
  return result;
};

export default customFetchBase;
