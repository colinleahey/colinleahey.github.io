// src/CareerTimeline.js
import React from 'react';

// Your career and education data
const timelineData = [
  {
    title: 'MS in Applied Data Science',
    subtitle: 'University of Southern California',
    date: 'Expected 2026',
    type: 'education'
  },
  {
    title: 'BS in Economics & Data Science',
    subtitle: 'University of Southern California',
    date: 'Expected 2025',
    type: 'education'
  },
  {
    title: 'USC Athletics',
    subtitle: 'Student Worker',
    date: '2023 - Current',
    type: 'work'
  },
  {
    title: 'Incontro Ristorante',
    subtitle: 'Busser',
    date: '2022 - 2024',
    type: 'work'
  },
  {
    title: 'High School Graduation',
    subtitle: 'Monte Vista High School',
    date: '2022',
    type: 'education'
  },
];

const CareerTimeline = () => {
  return (
    <div className="timeline-container">
      {timelineData.map((item, index) => (
        <div className="timeline-item" key={index}>
          <div className="timeline-content">
            <h3>{item.title}</h3>
            <h4 className="text-muted">{item.subtitle}</h4>
            <span className="timeline-date">{item.date}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CareerTimeline;