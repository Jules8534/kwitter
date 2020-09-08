import { domain, jsonHeaders, handleJsonResponse } from "./constants";
import { GETALLMESS, POSTMESS,DELETEMESS,GETUSERMESS, SEARCHALLMESS } from "../actionTypes";


const url = domain +"/messages";

export const getAllMess = (limit, offset, user) => dispatch => {
  dispatch({
    type: GETALLMESS.START
  });
  let urlString = url+`?limit=${limit}&offset=${offset}&username=${user}`
  if(user===null||user===undefined){
    urlString = url+`?limit=${limit}&offset=${offset}`
  }

  return fetch(urlString, {
    method: "GET",
    headers: jsonHeaders,
  })
    .then(handleJsonResponse)
    .then(result => {
      return dispatch({
        type: GETALLMESS.SUCCESS,
        payload: result
      });
    })
    .catch(err => {
      return Promise.reject(dispatch({ type: GETALLMESS.FAIL, payload: err }));
    });
};

export const postMess = postMessData => dispatch => {
  dispatch({
    type: POSTMESS.START
  });
  const newMessagePayload = {
    method: "POST",
    headers: {...jsonHeaders, Authorization: "Bearer " + JSON.parse(localStorage.login).result.token},
    body: JSON.stringify(postMessData)
  }
  console.log(newMessagePayload)
  return fetch(url, newMessagePayload
  //   {
  //   method: "POST",
  //   headers: {...jsonHeaders, Authorization: "Bearer " + JSON.parse(localStorage.login).result.token},
  //   body: JSON.stringify(postMessData)
  // }
  )
    .then(handleJsonResponse)
    .then(result => {
      return dispatch({
        type: POSTMESS.SUCCESS,
        payload: result
      });
    })
    .catch(err => {
      return Promise.reject(dispatch({ type: POSTMESS.FAIL, payload: err }));
    });
};

export const deleteMess = deleteMessData => dispatch => {
  dispatch({
    type: DELETEMESS.START
});
  

  return fetch(url+"/"+deleteMessData.id, {
    method: "DELETE",
    headers: {...jsonHeaders, Authorization: "Bearer " + JSON.parse(localStorage.login).result.token}
  })
    .then(handleJsonResponse)
    .then(result => {
      return dispatch({
        type: DELETEMESS.SUCCESS,
        payload: result
      });
    })
    .catch(err => {
      return Promise.reject(dispatch({ type: DELETEMESS.FAIL, payload: err }));
    });
};

export const getUserMess = (limit, offset, user) => dispatch => {
  dispatch({
    type: GETUSERMESS.START
  });
  let urlString = url+`?limit=${limit}&offset=${offset}&username=${user}`
  if(user===null||user===undefined){
    urlString = url+`?limit=${limit}&offset=${offset}`
  }

  return fetch(urlString, {
    method: "GET",
    headers: jsonHeaders,
  })
    .then(handleJsonResponse)
    .then(result => {
      return dispatch({
        type: GETUSERMESS.SUCCESS,
        payload: result
      });
    })
    .catch(err => {
      return Promise.reject(dispatch({ type: GETUSERMESS.FAIL, payload: err }));
    });
};

export const searchAllMess = (offset) => dispatch => {
  dispatch({
    type: SEARCHALLMESS.START
  });
  let urlString = url+`?limit=1&offset=${offset}`


  return fetch(urlString, {
    method: "GET",
    headers: jsonHeaders,
  })
    .then(handleJsonResponse)
    .then(result => {
      return dispatch({
        type: SEARCHALLMESS.SUCCESS,
        payload: result
      });
    })
    .catch(err => {
      return Promise.reject(dispatch({ type: SEARCHALLMESS.FAIL, payload: err }));
    });
};