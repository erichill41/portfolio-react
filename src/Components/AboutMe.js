import React from "react";

import forester from "../images/forester_camping.jpeg";
import keystone from "../images/keystone_landscape.jpeg";
// import headshot from "../images/headshot.jpg";
import gusInYard from "../images/gus_in_yard.jpeg";
import gusZoe from "../images/gus_zoe_car.jpeg";

function AboutMe () {
  return (
    <>
    <div className="row justify-content-around mb-4">
      <div className="card w-50 mr-3">
          <img src={forester} className="card-img-top" alt="..."/>
          <div className="card-body">
              <p className="card-text">
                  After moving back to Colorado in 2020, I wanted to take more advantage of what the area has to offer. 
                  In my free time I try get outside as much as possible; camping, cycling, golf, and rock climbing are 
                  just a few ways I enjoy what Colorado has to offer during the summer.
              </p>
          </div>
      </div>
      <div className="card w-50" >
          <img src={keystone} className="card-img-top" alt="..." />
          <div className="card-body">
              <p className="card-text">
                  Winter sports are just as big a part of my love for Colorado. I have skied for most of my life but this 
                  year I decided to teach myself how to snowboard; I sought to bridge the gap between snowboarders and skiers.
                  Another winter sport that has been a big influencer in my life is hockey; giving me a strong base for character
                  and teamwork. 
              </p>
          </div>
      </div>
    </div>

    <div className="row justify-content-around">
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
          <img src={gusInYard} className="card-img-top" alt="..." />
          <div className="card-body">
              <p className="card-text">
                  Winter sports are just as big a part of my love for Colorado. I have skied for most of my life but this 
                  year I decided to teach myself how to snowboard; I sought to bridge the gap between snowboarders and skiers.
                  Another winter sport that has been a big influencer in my life is hockey; giving me a strong base for character
                  and teamwork. 
              </p>
          </div>
      </div>
    </div>
    
    </>
  );
};

export default AboutMe;