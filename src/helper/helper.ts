import { setRefreshToken, setSession, setToken } from '@/utils/cookies';

export function setLoginData(session: string, refresh: string, token: string) {
  setSession(session);
  setRefreshToken(refresh);
  setToken(token);
}
