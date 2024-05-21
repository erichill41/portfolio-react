import React from "react";
import headshot from "../images/headshot.jpeg";
import forester from "../images/forester_camping.jpeg";
import keystone from "../images/keystone_landscape.jpeg";
import hockey from "../images/hockey.jpeg";


function Dashboard() {

  return (
    <>
      <div className="container-fluid row align-items-center mb-5" id="Introduction">
          <div className="col">
              <p className="lead">
                  It's crazy to see the differences in my skills from the time I created this website to now, 
                  after graduating from Thinkful's Software Engineering bootcamp in 2021 I was able to start work
                  with BillGO helping Americans manage their bills and payments.
              </p>
              <p className="lead mb-4">
                  Making the shift from technology sales to engineering has been one of the better decisions
                  of my life. I truly enjoy the problem solving aspects of my daily tasks now, and really strive
                  for an outstanding user experience.
              </p>
          </div>

          <div className="col-auto">
            <img src={headshot} className="img-fluid rounded" alt="2021 Headshot" />
          </div>

      </div>
      
      <div className="container-fluid rounded bg-dark text-light">
        <div className="row p-2">
          <h2 className="display-6 text-center"> Life Away From the Keyboard </h2>

        </div>
        
        <div className="row align-items-center">
          <figure className="figure col">
              <img src={forester} className="figure-img img-fluid rounded" alt="..."/>
          </figure>
          
          <figure className="figure col">
              <img src={hockey} className="figure-img img-fluid rounded" alt="..." />
          </figure>

          <figure className="figure col">
              <img src={keystone} className="figure-img img-fluid rounded" alt="..." />
          </figure>
        </div>

        <div className="row text-center mb-5">
          <p className="lead">
              After moving back to Colorado in 2020, I wanted to take more advantage of what the area has to offer. 
              In my free time I try to be as active as possible; camping, cycling, golf, and rock climbing are 
              just a few ways I enjoy what Colorado has to offer during the summer.
              Winter is just as special to me in the mountains. I have skied for most of my life but this 
              year I decided to teach myself how to snowboard. Another winter sport that has been a big influencer in
              my life is hockey; giving me a strong base for character and teamwork. I continue to play in a league
              each week as a way to stay around the game and fuel my competitive spirit.
          </p>
        </div>
      </div>
      <hr/>
    </>
  );

};

export default Dashboard;