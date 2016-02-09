

export function sendMessage(msg, id) {
  return (dispatch, getState) => {
    const { firebase, auth } = getState();
    const userId = auth.id;
    const time = Date.now();
    let obj = {time: time, msg: msg}; 
    let obj2 = {time: time, msg: msg, read:false}; 
      firebase.child(`messages/${id}/${userId}/recived`).push(obj2);
      firebase.child(`messages/${userId}/${id}/sent`).push(obj);
  };
}



export function readed(id) {
      const { firebase, auth } = getState();
      const userId = auth.id; 

      firebase.child(`messages/${userId}/${id}/recived/*`).update({read: true});
  
}