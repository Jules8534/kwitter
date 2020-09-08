
const createActionTypes = actionName => {
  const ACTIONNAME = actionName.toUpperCase();
  return {
    START: ACTIONNAME + ".START",
    SUCCESS: ACTIONNAME + ".SUCCESS",
    FAIL: ACTIONNAME + ".FAIL"
  };
};

export const LOGIN = createActionTypes("LOGIN");
export const LOGOUT = createActionTypes("LOGOUT");
export const POSTMESS = createActionTypes("POSTMESSAGE")
export const GETUSERMESS = createActionTypes("GETUSERMESS")
export const GETALLMESS = createActionTypes("GETALLMESS")
export const DELETEMESS = createActionTypes("DELETEMESS")
export const ADDLIKE = createActionTypes ("ADDLIKE")
export const DELETELIKE = createActionTypes ("DELETELIKE")
export const TOGGLELIKE = createActionTypes ("TOGGLELIKE")
export const CREATEUSER = createActionTypes ("CREATEUSER")
export const GETONEUSER = createActionTypes ("GETONEUSER")
export const PICTURE =  createActionTypes ("PICTURE")
export const SEARCHALLMESS = createActionTypes("SEARCHALLMESS")