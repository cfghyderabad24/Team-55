import React from 'react';
import EventCard from './Events/EventCard';
import 'bootstrap/dist/css/bootstrap.min.css';

const events = [
    {
        title: 'Event 1',
        description: 'This is a description for event 1.',
        date: '2024-06-20',
        image: 'https://via.placeholder.com/150',
        link: '#'
    },
    {
        title: 'Event 2',
        description: 'This is a description for event 2.',
        date: '2024-07-15',
        image: 'https://via.placeholder.com/150',
        link: '#'
    },
    {
        title: 'Event 3',
        description: 'This is a description for event 3.',
        date: '2024-08-10',
        image: 'https://via.placeholder.com/150',
        link: '#'
    },
    {
        title: 'Event 4',
        description: 'This is a description for event 4.',
        date: '2024-08-10',
        image: 'https://via.placeholder.com/150',
        link: '#'
    }
];

const EventList = () => {
    return (
        <div className="container mt-5">
            <div className="row d-flex justify-content-evenly">
                {events.map((event, index) => (
                    <EventCard key={index} event={event} />
                ))}
            </div>
        </div>
    );
};

export default EventList;
