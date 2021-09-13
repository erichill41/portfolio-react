import React from "react";
import headshot from "../images/headshot.jpg";
import forester from "../images/forester_camping.jpeg";
import keystone from "../images/keystone_landscape.jpeg";

function Dashboard() {

  return (
    <>
      <div className="container-fluid row align-items-center mb-5">
          <div className="col">
              <h3 className="display-6 p-3">Hello! My name is Eric Hill</h3>
              <p className="lead">
                  I am a recent graduate of Thinkful's Software Engineering program living near Denver, Colorado. I want to introduce myself so you
                  can get a glance at who I am; both on professional level, and to show some
                  of what I like to do outside of working with code! On my webpage you'll find more information about me, a glance at some of
                  the projects I have been working on, and several ways to reach me.
              </p>
              <p className="lead mb-4">
                  I haven't always been passionate about writing code, I have several friends close to me who are developers now but I didn't
                  know much about what they did. Working in sales at Dell Technologies was a great opportunity for me to learn more about the 
                  technical side of the equipment we use. This fueled my newfound passion for engineering, leading to the career change I am going
                  through, and I couldn't be happier with my decision!
              </p>
          </div>
          <div className="col-auto">
            <img src={headshot} className="img-fluid rounded" alt="2021 Headshot" />
          </div>
      </div>
      <div className="container-fluid row align-items-center">
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

         
    </>
  );

};

export default Dashboard;