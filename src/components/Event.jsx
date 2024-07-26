import React from 'react';
import './Event.css';
import paintingCompetitionImage from '../images/painting.png';
import conferenceImage from '../images/conference.png';

const Events = () => {
  return (
    <div className="events">
      <h1>Upcoming Events</h1>
      <div className="event">
        <img src={paintingCompetitionImage} alt="Painting Competition" />
        <div className="event-details">
          <h2>Painting Competition</h2>
          <p>Join us for a day of creativity and fun at our annual painting competition. Open to all students and staff.</p>
        </div>
      </div>
      <div className="event">
        <img src={conferenceImage} alt="Conference" />
        <div className="event-details">
          <h2>Annual Science Conference</h2>
          <p>Attend our annual science conference to learn about the latest research and advancements in various fields.</p>
        </div>
      </div>
    </div>
  );
}

export default Events;