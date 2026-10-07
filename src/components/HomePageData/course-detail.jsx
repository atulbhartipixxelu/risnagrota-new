import React from "react";

const data = [
  {
    title: "What Is the Integrated Coaching Model?",
    points: [
      "Board syllabus + NEET / JEE / CUET preparation together",
      "All academic support within school hours",
      "Planned timetable balancing school and competition exams",
      "Sufficient time for self-study and home revision",
    ],
  },
  {
    title: "How the Model Works in Our School",
    points: [
      "NCERT-focused teaching aligned with entrance exams",
      "Extra problem-solving and doubt-clearing sessions",
      "Regular assessments and feedback",
      "Guided self-study and revision support",
    ],
  },
  {
    title: "Faculty & Academic Support",
    points: [
      "Experienced subject teachers",
      "Expert guidance from Kota, IIT, IIM, & Delhi",
      "Academic mentoring and performance analysis",
      "Career guidance and counselling",
    ],
  },
];

const IntegratedModel = () => {
  return (
    <div className="model-container">
      {data.map((item, index) => (
        <div className="model-box" key={index}>
          <h2>{item.title}</h2>

          <ul>
            {item.points.map((point, i) => (
              <li key={i}>{point}</li>
            ))}
          </ul>

          <div className="box-design"></div>
        </div>
      ))}
    </div>
  );
};

export default IntegratedModel;