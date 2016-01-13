import React, { Component, PropTypes } from 'react';
export default class ConcertsSelected extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    let selecteds=[];
    let band;
    const { fullinfo, fullbands } = this.props;
    for (var i = fullinfo.length - 1; i >= 0; i--) {
      if (fullinfo[i].asistir){
        for (var y = fullbands.length - 1; y >= 0; y--) {
          if(fullbands[y].id===fullinfo[i].idBand){
            band = fullbands[y].title;
            selecteds.push({band: band, place: fullinfo[i].title});
          }
        };
      }
    };

    return (
     
      <div>
        <div>
        <h3>Concerts Selected</h3>
        </div>
        <ul className="col-lg-12 hero">
          {selecteds.length===0? <li>none</li> :
            selecteds.map( (concert, index) =>  <li key={index}><h7>{concert.band} {concert.place}</h7></li> )
          }
         </ul>
      </div>
    );
  }
}

ConcertsSelected.propTypes = {
  fullinfo: PropTypes.array,
  fullbands: PropTypes.array
};

