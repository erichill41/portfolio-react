import React from "react";
import pomodoro from "../images/pomodoro.jpeg";
import reservations from "../images/reservations.jpeg";
import flashcards from "../images/flashcards.jpeg";

function Portfolio() {
  return (
    <div className="container-fluid bg-dark mb-3 rounded" id="Portfolio">
      <h2 className="text-light display-6 p-3"> Sample projects </h2>
      <p className="text-white p-3">
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
              <p className="card-text">
                This Restaurant Reservation system will allow for dining venues to book, track,
                seat, and finish reservations. Features include creating and editing reservations and tables,
                seating or cancelling reservations, and clearing any occupied tables
                once the guests have finished their meal. This application could be easily modified  and 
                scaled to fit any scheduling/reservation client needs.
              </p>
              <hr/>
              <p className="card-text">
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
            <h4 className="card-title text-center"> Flashcard Study Tool </h4>  
          </div>
            <div className="col card-body">
              <p className="card-text">
                The Flashcard Study application will allow users to create, store, and study 
                decks of flashcards. This will be especially useful for students, or anybody
                who needs to be studying definitions on the go. 
              </p>
              <hr/>
              <p className="card-text">
                Developed Using: React, Node.js, Javascript, GIT/GitHub, Bootstrap
              </p>
            </div>

            <img className="card-img" src={flashcards} alt="Project Tile"/>

            <div className="card-footer row">
              <a
                href="https://github.com/erichill41/Project_Flashcards"
                target="_blank"
                rel="noreferrer"
                className="btn btn-outline-dark bg-info col"
                type="button"
              >
                View Source Code on GitHub
              </a>
            </div>
          </div>
        </div>

        <div className="card-deck row p-3">
        <div className="card col bg-light border-dark">
          <div className="mt-2">
            <h4 className="card-title text-center"> Pomodoro Timer </h4>  
          </div>
            <div className="col card-body">
              <p className="card-text">
                The Pomodoro Timer application will allow users to set a timeframe for focus and the subsequent break.
                This is especially useful for people who require short breaks between work periods to avoid 
                overworking themselves. The goal of this application is to improve user productivity in daily tasks.
              </p>
              <hr/>
              <p className="card-text">
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
          

          <div className="card col bg-light border-dark">
          <div className="mt-2">
            <h4 className="card-title text-center"> View Other Work On GitHub </h4>  
          </div>
            <div className="col card-body">
              <p className="card-text">
                My full portfolio can be found on my GitHub page.
                I will keep this page updated with my most recent and relevant applications.
              </p>
              <hr/>
            </div>
            <div className="card-footer row">
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
          </div>
        </div>
      </div>
  );
}

export default Portfolio;