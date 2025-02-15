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
    <section id="experience" className="max-w-4xl mx-auto py-20">
      <h2 className="section-heading">Work Experience</h2>
      <div className="space-y-6">
        {experiences.map((exp) => (
          <div key={exp.title} className="card">
            <h3 className="text-xl font-semibold text-blue-400 mb-2">{exp.title}</h3>
            <p className="text-lg font-medium text-gray-300 mb-2">{exp.company}</p>
            <p className="text-gray-400 mb-4">{exp.period}</p>
            <ul className="space-y-2 text-gray-300">
              {exp.responsibilities.map((resp, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-blue-400 mr-2">•</span>
                  {resp}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
