import React from 'react';

export default function Skills() {
  return (
    <div>
      <div className="card">
        <div className="card-content">
          <h6>
            <strong>PORTFOLIOS</strong>
          </h6>
          <div className="row mt">
            <br></br>
            <div className="col s6">
              <a href='https://www.asperio.id' target="blank" style={{color : 'black'}} >Asperio</a>
            </div>
            <div className="col s6">
            <a href='http://www.sanjayaperdanamulia.com/' target="blank" style={{color : 'black'}} >Sanjaya Perdana Mulia</a>
            </div>
          </div>
          <div className="row">
            <div className="col s6">
            <a href='https://www.beraniberencana.com/' target="blank" style={{color : 'black'}} >Berani Berencana</a>
            </div>
            <div className="col s6">
            <a href='http://www.moth3rs.com/' target="blank" style={{color : 'black'}} >Mothers</a>          
            </div>
          </div>
          <div className="row">
            <div className="col s6">
            <a href='http://www.tundakehamilan.com/' target="blank" style={{color : 'black'}} >Tunda Kehamilan</a>         
            </div>
            <div className="col s6">
              <p>Motul</p>            
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
