import React from 'react';

const skillCategories = [
  {
    title: 'Programming Languages',
    skills: ['C', 'C++', 'Java', 'Python', 'PHP'],
  },
  {
    title: 'Software Development',
    skills: ['Data Structures', 'Algorithms', 'Web Development'],
  },
  {
    title: 'Frameworks & Tools',
    skills: ['React.js', 'Node.js', 'Flask', 'SQL'],
  },
  {
    title: 'Cloud & Data',
    skills: ['AWS', 'Tableau', 'Power BI', 'MongoDB Atlas'],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="max-w-4xl mx-auto px-4 py-20">
      <h2 className="section-heading">Technical Skills</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {skillCategories.map((category) => (
          <div key={category.title} className="card">
            <h3 className="text-xl font-semibold mb-4 text-blue-400">{category.title}</h3>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill) => (
                <span key={skill} className="skill-tag">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;