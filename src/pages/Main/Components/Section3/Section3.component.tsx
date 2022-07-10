import React from "react";
import "./Section3.style.scss";
import taskTrackingImg from "../../../../assets/images/task-tracking-img.jpg";
import projectTrackImg from "../../../../assets/images/project-tracking-img.jpg";
import comCollabImg from "../../../../assets/images/communication-collaboration-img.jpg";

type Props = {};

const Section3 = (props: Props) => {
  return (
    <section className="section3">
      <h2>
        What Ttrack <span>Offers</span>
      </h2>
      <span>
        Ttrack is dedicated to the planning, scheduling, tracking and
        collaboration of team to help individual, organization, businesses
        organized while planning and running projects, in a way that is
        accurate, predictable and profitable.
      </span>
      <div className="track-offers">
        <div className="track-offer">
          <h4>Task Tracking</h4>
          <img src={taskTrackingImg} alt="task tracking" />
          <p>
            Easily plan tasks while taking your past performance into account.
            Take into account people's work schedules and allow for simple time
            registration on job items. ensuring that employees are working on
            the appropriate tasks at the appropriate time.
          </p>
        </div>
        <div className="track-offer">
          <h4>Project tracking</h4>
          <img src={projectTrackImg} alt="project tracking" />
          <p>
            If enterprises have learned anything from years of managing
            projects, it’s that most of the time spent project planning goes to
            waste. But it doesn’t have to be this wayTtrack has moved forward to
            get you accurate AI predictions of when projects can be completed,
            capturing constraints like cost, scope, and schedule.
          </p>
        </div>
        <div className="track-offer">
          <h4>Communication and Collaboration</h4>
          <img src={comCollabImg} alt="communication and collaborations" />
          <p>
            In addition to various resource management benefits of Ttrack, It is
            designed with a purpose to improve team collaboration. It gives
            employees a method to collaborate on projects by discussing tasks,
            timelines, dependencies, outstanding work, etc.
          </p>
        </div>
      </div>
      <button>Get Started For Free</button>
    </section>
  );
};

export default Section3;
