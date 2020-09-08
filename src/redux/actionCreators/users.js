import { domain, jsonHeaders, handleJsonResponse } from "./constants";
import { CREATEUSER, GETONEUSER, PICTURE } from "../actionTypes";


const url = domain + "/users";

export const createUser = userData => dispatch => {
  dispatch({
    type: CREATEUSER.START
  });  

  return fetch(url, {
    method: "POST",
    headers: jsonHeaders,
    body: JSON.stringify(userData)
  })
    .then(handleJsonResponse)
    .then(result => {
      return dispatch({
        type: CREATEUSER.SUCCESS,
        payload: result
      });
    })
    .catch(err => {
      return Promise.reject(dispatch({ type: CREATEUSER.FAIL, payload: err }));
    });
};

export const getOneUser = userData => dispatch => {
  dispatch({
    type: GETONEUSER.START
  });

  return fetch(url+"/"+userData, {
    method: "GET",
    headers: jsonHeaders
  })
    .then(handleJsonResponse)
    .then(result => {
      console.log(result)
      return dispatch({
        type: GETONEUSER.SUCCESS,
        payload: result
      });
    })
    .catch(err => {
      return Promise.reject(dispatch({ type: GETONEUSER.FAIL, payload: err }));
    });
}

// export const getUser = userData => dispatch => {
//   //userData is an object {userId:useruserId}
//   dispatch({
//     type: GET_USER
//   });
//   return fetch(url+"/"+userData.userId)
//     .then(handleJsonResponse)
//     .then(result => {
//       return dispatch({
//         type: GET_USER_SUCCESS,
//         payload: result
//       });
//     })
//     .catch(err => {
//       return Promise.reject(
//         dispatch({ type: GET_USER_FAIL, payload: err.message })
//       );
//     });
// };
// const getUsers = (userData = {}) => dispatch => {
//   //userData is an object {limit, offset}
//   dispatch({
//     type: GET_USERS
//   });
//   let constructedURL
//   let optionalParams = new URLSearchParams()
//   if(!Object.entries(userData).length === 0 && userData.constructor === Object){
//     const keys = userData.keys()
//     const values = userData.values()
//     for(let i = 0; i < keys.length-1; i++){
//       optionalParams.append(keys[i], values[i])
//     }
//     constructedURL = url+"?"+optionalParams 
//   } else {
//     constructedURL = url
//   }
// ​
//   return fetch(constructedURL)
//     .then(handleJsonResponse)
//     .then(result => {
//       return dispatch({
//         type: GET_USERS_SUCCESS,
//         payload: result
//       });
//     })
//     .catch(err => {
//       return Promise.reject(
//         dispatch({ type: GET_USERS_FAIL, payload: err.message })
//       );
//     });
//   }
export const picture = (userData, username) => dispatch => {
  dispatch({
    type: PICTURE.START
  });
  

  return fetch(url + `/${username}/picture`,  {
    method: "PUT",
    headers: {...jsonHeaders, Authorization: "Bearer " + JSON.parse(localStorage.login).result.token},
    body: JSON.stringify(userData)
  })
    .then(handleJsonResponse)
    .then(result => {
      return dispatch({
        type: PICTURE.SUCCESS,
        payload: result
      });
    })
    .catch(err => {
      return Promise.reject(dispatch({ type: PICTURE.FAIL, payload: err }));
    });
};