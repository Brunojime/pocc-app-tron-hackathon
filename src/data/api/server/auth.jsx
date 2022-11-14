import decode from 'jwt-decode'
import cookies from 'next-cookies';

const auth = {};

const deleteCookie = (name) => {
  document.cookie =  name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/"
};

auth.clearToken = () => {
  deleteCookie('authtoken')
  deleteCookie('role')
}

auth.getToken = () => {
  const allCookies = cookies();
  if (allCookies.authtoken === undefined || allCookies.authtoken === "''") {
    return false
  } else {
    return allCookies.authtoken;
  }
}

auth.getRole = () => {
  const allCookies = cookies();
  if (allCookies.role === undefined || allCookies.role === "''") {
    return false
  } else {
    return allCookies.role;
  }
}

auth.logout = () => {
  auth.clearToken()
}

const getTokenExpirationDate = (encodedToken) => {
  try {
    const token = decode(encodedToken);
    // const token = { exp: 1588431980 }
    if (!token.exp) { return null; }

    const date = new Date(0);
    date.setUTCSeconds(token.exp);

    return date;
  } catch (error) {
    auth.clearToken()
    return false
  }
}

const decodeToken = (encodedToken) => {
  try {
    const token = decode(encodedToken);
    return token;
  } catch (error) {
    auth.clearToken()
    return false
  }
}

const isTokenExpired = (token) => {
  const expirationDate = getTokenExpirationDate(token);
  return expirationDate < new Date();
}

auth.isLoggedIn = () => {
  const token = auth.getToken();
  if(token){
    if(!isTokenExpired(token)){
      return true
    } else {
      auth.clearToken()
      return false
    }
  } else {
    return false
  }
}

auth.getDecodeToken = (tokenParam) => {
  if(tokenParam){
    const decode = decodeToken(token);
    return decode;
  } else {
    return null
  }
}

export default auth;
