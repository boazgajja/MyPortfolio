import React from 'react';

const experiences = [
  {
    title: 'Data Engineer Intern',
    company: 'Edubot Software and Services',
    period: 'June 2024 - July 2024',
    responsibilities: [
      'Engineered data pipelines to collect, process, and analyze large-scale data efficiently',
      'Utilized AWS for storage, computation, and visualization of datasets',
      'Developed dynamic dashboards using Tableau to present key insights',
      'Optimized data workflows to enhance overall efficiency and performance',
    ],
  },
  {
    title: 'Coding Club Member',
    company: 'SRM University, AP',
    period: 'Aug 2023 - Present',
    responsibilities: [
      'Regularly participate in weekly coding challenges to refine problem-solving skills',
      'Collaborate with peers on software development projects and hackathons',
      'Explore advanced algorithms and data structures through hands-on projects',
    ],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold mb-8 text-center">Work Experience</h2>
      <div className="space-y-6">
        {experiences.map((exp) => (
          <div key={exp.title} className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-semibold text-blue-600">{exp.title}</h3>
            <p className="text-lg font-medium text-gray-700 mb-2">{exp.company}</p>
            <p className="text-gray-600 mb-4">{exp.period}</p>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              {exp.responsibilities.map((resp, index) => (
                <li key={index}>{resp}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;