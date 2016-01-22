export function selectConcert(idInfo) {
  return (dispatch, getState) => {
    const { firebase, auth } = getState();
    const userId = auth.id;
    const ref = firebase.child(`info/${idInfo}/users/${userId}`);
    ref.once('value', function(snapshot){
      let data=snapshot.val();
      if (data===null){data={assist: false};}
      firebase.child(`info/${idInfo}/users/${userId}`).update({assist: !data.assist});

    });

  };
}


export function addInfo(title, date, price, band) {
  return (dispatch, getState) => {
    const { firebase, auth } = getState();
    const userId = auth.id;
    const ref = firebase.child(`bands/${band}/title`);
    ref.once('value', function(snapshot){
      let bandName=snapshot.val();
      firebase.child('info').push({title, date, price, band, creator: userId, bandName, users:{[userId]:{assist:false}}});
    });
  };
}