import React from "react";
import dashboardImg from "../../../../assets/images/ttrak_dashboard.png";
import myTaskImg from "../../../../assets/images/mytask.png";
import taskActivityImg from "../../../../assets/images/taskactivity.png";
import "./Section2.style.scss";

export default function Section2() {
  return (
    <section className="section2">
      <h2>Discover Ttrak Features</h2>
      <div className="track-dashboard">
        <img src={dashboardImg} alt="dashboard" />
        <div>
          <h3>Ttrak Dashboard</h3>
          <span>
            If enterprises have learned anything from years of managing
            projects, it’s that most of the time spent project planning goes to
            waste. But it doesn’t have to be this way Ttrack has moved forward
            to get you accurate AI predictions of when projects can be
            completed, capturing constraints like cost, scope, and schedule.
          </span>
          <button>Discover More</button>
        </div>
      </div>
      <div className="task-activities">
        <div className="images-container">
          <img src={myTaskImg} alt="my task tracker" className="img1" />
          <img
            src={taskActivityImg}
            alt="task activity tracker"
            className="img2"
          />
        </div>
        <div>
          <h3>Project Analysis</h3>
          <span>
            If enterprises have learned anything from years of managing
            projects, it’s that most of the time spent project planning goes to
            waste. But it doesn’t have to be this way Ttrack has moved forward
            to get you accurate AI predictions of when projects can be
            completed, capturing constraints like cost, scope, and schedule.
          </span>
          <button>Discover More</button>
        </div>
      </div>
    </section>
  );
}
