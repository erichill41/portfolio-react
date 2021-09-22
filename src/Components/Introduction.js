import React from "react";
import headshot from "../images/headshot.jpg";
import forester from "../images/forester_camping.jpeg";
import keystone from "../images/keystone_landscape.jpeg";
import hockey from "../images/hockey.jpeg";

function Dashboard() {

  return (
    <>
      <div className="container-fluid row align-items-center mb-5">
          <div className="col">
              <p className="lead">
                  Hello there! My name is Eric and I am a recent graduate of Thinkful's Software Engineering program.
                  I want to introduce myself so you can get a glance at who I am; both on professional level, and to show some
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

        <div className="row text-center">
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
    </>
  );

};

export default Dashboard;