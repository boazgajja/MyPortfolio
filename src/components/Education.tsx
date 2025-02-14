import React from 'react';

const education = [
  {
    degree: 'B.Tech in Computer Science Engineering',
    school: 'SRM University, AP, Amaravati',
    period: '2022 - 2026',
    score: 'Current CGPA: 8.6/10.0',
  },
  {
    degree: 'Class 12th',
    school: 'Narayana College, Patancheru, Telangana',
    period: '2020 - 2022',
    score: 'Percentage: 96%',
  },
  {
    degree: 'Class 10th',
    school: 'Indus International School, Kurnool, Andhra Pradesh',
    period: '2019 - 2020',
    score: 'GPA: 10/10',
  },
];

const certifications = [
  'Computing in Python - Gold NPTEL Certification',
  'AWS Fundamentals - Coursera Certification',
];

const Education = () => {
  return (
    <section id="education" className="max-w-4xl mx-auto py-20">
      <h2 className="section-heading">Education</h2>
      <div className="space-y-6">
        {education.map((edu) => (
          <div key={edu.degree} className="card">
            <h3 className="text-xl font-semibold text-emerald-400">{edu.degree}</h3>
            <p className="text-lg font-medium text-gray-300">{edu.school}</p>
            <div className="flex justify-between text-gray-400 mt-2">
              <span>{edu.period}</span>
              <span>{edu.score}</span>
            </div>
          </div>
        ))}
      </div>

      <h3 className="text-2xl font-bold mt-12 mb-6 text-center text-emerald-400">Certifications</h3>
      <div className="card">
        <ul className="list-disc list-inside space-y-2 text-gray-300">
          {certifications.map((cert, index) => (
            <li key={index}>{cert}</li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Education;