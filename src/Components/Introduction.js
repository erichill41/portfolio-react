import React from "react";
import headshot from "../images/headshot.jpg";

function Dashboard() {

  return (
    <>
      <div className="container-fluid row align-items-center mb-3">
          <div className="col-9">
              <h3 className="display-6 mb-3">Hello! My name is Eric Hill</h3>
              <p className="lead">
                  I am a recent graduate of Thinkful's Software Engineering program living near Denver, Colorado. I want to introduce myself so you
                  can get a glance at who I am; both on professional level, and to show some
                  of what I like to do outside of working with code! On my webpage you'll find more information about me, a glance at some of
                  the projects I have been working on, and several different ways to reach me.
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

      <hr />   
    </>
  );

};

export default Dashboard;