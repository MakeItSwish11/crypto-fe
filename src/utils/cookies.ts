import Cookies from 'js-cookie';

export const setBrowserIdCookie = (browserId: string): void => {
  localStorage.setItem('browserId', browserId);
};

export const getBrowserIdCookie = (): string | null => {
  return localStorage.getItem('browserId');
};

export const setSession = (session: string): void => {
  const sessionExp = new Date();
  sessionExp.setMonth(sessionExp.getMonth() + 1);
  Cookies.set('session', session, { expires: sessionExp });
};

export const getSession = (): string | null => {
  return Cookies.get('session') ?? null;
};

export const setRefreshToken = (refreshToken: string): void => {
  const refreshExp = new Date();
  refreshExp.setDate(refreshExp.getDate() + 1);
  localStorage.setItem('refresh', refreshToken);
};

export const getRefreshToken = (): string | null => {
  return localStorage.getItem('refresh');
};

export const setToken = (token: string): void => {
  localStorage.setItem('token', token);
};

export const getToken = (): string | null => {
  return localStorage.getItem('token');
};

export const setU = (u: string): void => {
  const tokenExp = new Date();
  tokenExp.setDate(tokenExp.getDate() + 1);
  Cookies.set('_u', u, { expires: tokenExp });
};

export const getU = (): string | null => {
  return Cookies.get('_u') ?? null;
};

export const logout = () => {
  localStorage.removeItem('browserId');
  Cookies.remove('_u');
  Cookies.remove('session');
  localStorage.removeItem('refresh');
  localStorage.removeItem('token');
};
