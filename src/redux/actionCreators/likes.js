import { domain, jsonHeaders, handleJsonResponse } from "./constants";
import { ADDLIKE, DELETELIKE } from "../actionTypes";
import { getAllMess } from ".";

const url = domain + "/likes";

export const toggleLike = messageId => (dispatch, getState) =>{
  const username = getState().auth.login.result.username;
  const messages = getState().messages.getAllMess.result.messages;
  const message = messages.find(message =>{
    return message.id === messageId;
  });
  if(!message){
    throw new Error({"error": "Expected to find message with id of " +
      messageId + "but it did not exist"  })
    }
  const like = message.likes.find(like => {
    return like.username === username;
  });
  if(like){
    return dispatch(deleteLike(like.id))
  }
  return dispatch(addLike(messageId));
};




const _addLike = messageId => (dispatch, getState) => {
  dispatch({
    type: ADDLIKE.START
  });

  const token = getState().auth.login.result.token;

  return fetch(url, {
    method: "POST",
    headers: { Authorization: "Bearer " + token, ...jsonHeaders },
    body: JSON.stringify({ messageId })
  })
    .then(handleJsonResponse)
    .then(result => {
      return dispatch({
        type: ADDLIKE.SUCCESS,
        payload: result
      });
    })
    .catch(err => {
      return Promise.reject(dispatch({ type: ADDLIKE.FAIL, payload: err }));
    });
};

const addLike = messageId => (dispatch, getState) => {
  return dispatch(_addLike(messageId)).then(() => {
    const pathname = getState().router.location.pathname;
    if (pathname === "/messagefeed") {
      return dispatch(getAllMess(100,0));
    }
    return dispatch(getAllMess(100,0));
  });
};

const _deleteLike = likeId => (dispatch, getState) => {
  dispatch({
    type: DELETELIKE.START
  });

  const token = getState().auth.login.result.token;

  return fetch(url + "/" + likeId, {
    method: "DELETE",
    headers: { Authorization: "Bearer " + token, ...jsonHeaders }
  })
    .then(handleJsonResponse)
    .then(result => {
      return dispatch({
        type: DELETELIKE.SUCCESS,
        payload: result
      });
    })
    .catch(err => {
      return Promise.reject(dispatch({ type: DELETELIKE.FAIL, payload: err }));
    });
};

const deleteLike = (likeId) => (dispatch, getState) => {
  dispatch(_deleteLike(likeId)).then(() => {
    const pathname = getState().router.location.pathname;
    if (pathname === "/messagefeed") {
      dispatch(getAllMess(100,0));
    }
    return dispatch(getAllMess(100,0));
  });
};
