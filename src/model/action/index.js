export const LOGIN_LOADING = 'LOGIN_LOADING';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';

export function loginLoading(loading) {
  return {
    type: LOGIN_LOADING,
    payload: loading,
  }
}
export function loginSuccess(data) {
  return {
    type: LOGIN_SUCCESS,
    payload: data
  }
}
export function loginFailure(error) {  
  return {
    type: LOGIN_FAILURE,
    payload: error
  }
}

export function login() {
  return function (dispatch) {
    dispatch(loginLoading(true));
    fetch('http://localhost:3000/login.do')
      .then((response) => {
        dispatch(loginLoading(true));
      })
      .catch((error) => {
        dispatch(loginLoading(false));
        dispatch(loginFailure(error));
      })
  }
}