import React from 'react';

const projects = [
  {
    title: 'E-Commerce Data Pipeline & Analytics Platform',
    tech: 'AWS, Python, SQL, Tableau',
    description: [
      'Designed a scalable data pipeline to extract insights from e-commerce data',
      'Implemented AWS cloud services for seamless data integration and processing',
      'Created an interactive Tableau dashboard to visualize sales trends and inventory management',
    ],
  },
  {
    title: 'Educational Platform',
    tech: 'MERN Stack (MongoDB, Express.js, React.js, Node.js)',
    description: [
      'Built a community-driven learning platform with user-generated content',
      'Implemented a gamified reward system to enhance user engagement',
      'Optimized UI/UX for an intuitive and interactive learning experience',
    ],
  },
  {
    title: 'Task Management System',
    tech: 'HTML, CSS, JavaScript, Flask',
    description: [
      'Developed a feature-rich task management web app with real-time updates',
      'Integrated category-based task organization and a color-coded priority system',
      'Ensured a smooth user experience through responsive design and efficient workflows',
    ],
  },
  {
    title: 'ATM System',
    tech: 'C',
    description: [
      'Developed an ATM system with functionalities such as account management and fund transfers',
      'Utilized file handling for data persistence to ensure secure transactions',
      'Implemented user authentication and validation mechanisms for security',
    ],
  },
  {
    title: 'Employee Tracking System',
    tech: 'C++',
    description: [
      'Created a system to track employee attendance and calculate salaries',
      'Implemented features for time tracking and accurate payroll processing',
      'Designed automated monthly report generation for management review',
    ],
  },
  {
    title: 'Sudoku Solver',
    tech: 'C',
    description: [
      'Developed a program capable of solving Sudoku puzzles efficiently',
      'Implemented algorithms to handle various levels of puzzle complexity',
      'Designed quick solutions to aid users in understanding puzzle-solving techniques',
    ],
  },
];

const Projects = () => {
  return (
    <section id="projects" className="max-w-7xl mx-auto px-4 py-20">
      <h2 className="section-heading">Projects</h2>
      <div className="project-grid">
        {projects.map((project) => (
          <div key={project.title} className="card group">
            <h3 className="text-xl font-semibold text-blue-400 mb-2">{project.title}</h3>
            <p className="text-gray-400 mb-4">
              <span className="font-medium text-gray-300">Technologies:</span> {project.tech}
            </p>
            <ul className="space-y-2 text-gray-300">
              {project.description.map((desc, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-blue-400 mr-2">•</span>
                  {desc}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;