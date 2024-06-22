import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import './Card.css'
const EventCard = ({ event }) => {
    return (
        <div className="col-md-auto mb-3 ">
            <div className="card shadow">
                <img src={event.image} className="card-img-top" alt={event.title} />
                <div className="card-body">
                    <h5 className="card-title">{event.title}</h5>
                    <p className="card-text">{event.description}</p>
                    <p className="card-text"><small className="text-muted">{event.date}</small></p>
                    <Link href={event.link} className="btn btn-primary">Learn More</Link>
                </div>
            </div>
        </div>
    );
};

export default EventCard;
