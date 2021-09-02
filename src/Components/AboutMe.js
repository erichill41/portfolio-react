import React from "react";

import forester from "../images/forester_camping.jpeg";
import keystone from "../images/keystone_landscape.jpeg";
// import headshot from "../images/headshot.jpg";
import gusZoe from "../images/gus_zoe_car.jpeg";

function AboutMe () {
  return (
    <>
    <div className="container-fluid row align-items-center mb-4" id="About-Me">
        <h3 className="display-6 mb-3"> Life away from the office </h3>
      <div className="card col">
          <img src={forester} className="card-img-top" alt="..."/>
          <div className="card-body">
              <p className="card-text">
                  After moving back to Colorado in 2020, I wanted to take more advantage of what the area has to offer. 
                  In my free time I try get outside as much as possible; camping, cycling, golf, and rock climbing are 
                  just a few ways I enjoy what Colorado has to offer during the summer.
              </p>
          </div>
      </div>
      <div className="card col" >
          <img src={keystone} className="card-img-top" alt="..." />
          <div className="card-body">
              <p className="card-text">
                  Winter is just as special to me in the mountains. I have skied for most of my life but this 
                  year I decided to teach myself how to snowboard. Another winter sport that has been a big influencer in
                  my life is hockey; giving me a strong base for character and teamwork. 
              </p>
          </div>
      </div>
    </div>

    <div className="container-fluid align-items-center row justify-content-around">
      <div className="card w-50 mr-3">
          <img src={gusZoe} className="card-img-top" alt="..."/>
          <div className="card-body">
              <p className="card-text">
                  This spring, my girlfriend (Zoe) and I started taking care of Gus, our Golden Retriever. I have never met a more
                  well behaved puppy but we got very lucky! Gus loves exploring Colorado as well, going on hikes and hanging out at
                  the reservoir on a paddleboard.
              </p>
          </div>
      </div>
      <div className="card w-50" >
          <img className="card-img-top" alt="..." />
          <div className="card-body">
              <p className="card-text">
                  Make new card.
              </p>
          </div>
      </div>
    </div>
    
    </>
  );
};

export default AboutMe;