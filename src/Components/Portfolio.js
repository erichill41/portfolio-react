import React from "react";
import pomodoro from "../images/pomodoro.jpeg";
import reservations from "../images/reservations.jpeg";

function Portfolio() {
  return (
    <div className="container-fluid bg-dark mb-3 rounded" id="Portfolio">
      <h2 className="text-light display-6 p-3 text-center"> Sample projects </h2>
      <p className="text-white p-3 text-center lead">
        Over the course of the Thinkful program I developed a few applications to gain knowledge
        in JavaScript, React, RESTful API's and other tools. Below are a few of those projects I 
        was exposed to during Thinkful's curriculum. Source code for the rest of the applications
        can be found on my GitHub profile.
      
      </p>

        <div className="card-deck row p-3">
        <div className="card col bg-light border-dark">
          <div className="mt-2">
            <h4 className="card-title text-center"> Restaurant Reservation System </h4>  
          </div>
            <div className="col card-body">
              <p className="card-text text-center">
                This Restaurant Reservation system will allow for dining venues to book, track,
                seat, and finish reservations. Features include creating and editing reservations and tables,
                seating or cancelling reservations, and clearing any occupied tables
                once the guests have finished their meal. This application could be easily modified  and 
                scaled to fit any scheduling/reservation client needs.
              </p>
              <hr/>
              <p className="card-text text-center">
                Developed Using: React, Node.js, Javascript, SQL, KNEX, GIT/GitHub, Bootstrap
              </p>
            </div>

            <img className="card-img" src={reservations} alt="Project Tile"/>

            <div className="card-footer row">
              <a
                href="https://github.com/erichill41/Capstone_Project"
                target="_blank"
                rel="noreferrer"
                className="btn btn-outline-dark bg-info col"
                type="button"
              >
                View Source Code on GitHub
              </a>
            </div>
          </div>
          <div className="card col bg-light border-dark">
          <div className="mt-2">
            <h4 className="card-title text-center"> Pomodoro Timer </h4>  
          </div>
            <div className="col card-body">
              <p className="card-text text-center">
                The Pomodoro Timer application will allow users to set a timeframe for focus and the subsequent break.
                This is especially useful for people who require short breaks between work periods to avoid 
                overworking themselves. The goal of this application is to improve user productivity in daily tasks.
              </p>
              <hr/>
              <p className="card-text text-center">
                Developed Using: React, Node.js, Javascript, Bootstrap
              </p>
            </div>

            <img className="card-img" src={pomodoro} alt="Project Tile"/>

            <div className="card-footer row">
              <a
                href="https://github.com/erichill41/Project_Pomodoro_Timer"
                target="_blank"
                rel="noreferrer"
                className="btn btn-outline-dark bg-info col"
                type="button"
              >
                View Source Code on GitHub
              </a>
              <a
                href="https://pomodoro-timer-green.vercel.app/" 
                target="_blank"
                rel="noreferrer"
                className="btn btn-outline-dark bg-info  col"
                type="button"
              >
                  Link to Live Deployment of project
              </a>
            </div>
          </div>
          
        </div>

        <div className="row p-3">
          <div className="card col bg-light border-dark">
          <div className="mt-2">
            <h4 className="card-title text-center"> What am I currently working on? </h4>  
          </div>
            <div className="col card-body">
              <p className="card-text text-center">
                I will keep this page updated with my most recent applications along 
                with descriptions of the current projects I am working on in my free
                time. My full portfolio can be found on my GitHub page.
              </p>
              <div className="row">
                <a
                  href="https://github.com/erichill41"
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-outline-dark bg-info col"
                  type="button"
                >
                  Personal GitHub
                </a>
              </div>

              <hr/>

              <h5 className="card-title text-center"> Re-Factoring Old Projects </h5>
              <p className="card-text text-center">
                Because it has been several years since I focused on React projects I am currently
                working through some of my projects from bootcamp to re-factor with principles I
                have learned with professional experience.
              </p>

              <hr/>
              
              <h5 className="card-title text-center"> Personal Webpage Updates </h5>
              <p className="card-text text-center">
                I will be continuously updating this personal webpage with new tools I learn and applications
                I complete; any suggestions for improvement or features are always welcome. You can reach out 
                to me via email on the <a href="/contact" className="link"> Contact Page</a>.
              </p>
            </div>
          </div>
        </div>
      </div>
  );
}

export default Portfolio;