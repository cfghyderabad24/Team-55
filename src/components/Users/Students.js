import React, { useState } from 'react';

// Mock Data
const learningModules = [
  { id: 1, title: 'Introduction to Programming', content: 'Learn the basics of programming...' },
  { id: 2, title: 'Advanced JavaScript', content: 'Dive deeper into JavaScript...' },
];

const codingChallenges = [
  { id: 1, title: 'FizzBuzz Challenge', description: 'Write a program that prints the numbers...' },
  { id: 2, title: 'Palindrome Checker', description: 'Create a function that checks if a string is a palindrome...' },
];

const tutorials = [
  { id: 1, title: 'React Basics', content: 'Learn the fundamentals of React...' },
  { id: 2, title: 'State and Props in React', content: 'Understand state and props in React...' },
];

const StudentDashboard = () => {
  const [selectedModule, setSelectedModule] = useState(null);
  const [selectedChallenge, setSelectedChallenge] = useState(null);
  const [selectedTutorial, setSelectedTutorial] = useState(null);
  const [currentView, setCurrentView] = useState('modules');

  const handleModuleClick = (module) => {
    setSelectedModule(module);
  };

  const handleChallengeClick = (challenge) => {
    setSelectedChallenge(challenge);
  };

  const handleTutorialClick = (tutorial) => {
    setSelectedTutorial(tutorial);
  };

  return (
    <div className="dashboard">
      <nav>
        <ul>
          <li onClick={() => setCurrentView('modules')}>Learning Modules</li>
          <li onClick={() => setCurrentView('challenges')}>Coding Challenges</li>
          <li onClick={() => setCurrentView('tutorials')}>Tutorials</li>
        </ul>
      </nav>
      
      {currentView === 'modules' && (
        <div className="modules">
          <h2>Interactive Learning Modules</h2>
          <ul>
            {learningModules.map((module) => (
              <li key={module.id} onClick={() => handleModuleClick(module)}>
                {module.title}
              </li>
            ))}
          </ul>
          {selectedModule && (
            <div className="module-content">
              <h3>{selectedModule.title}</h3>
              <p>{selectedModule.content}</p>
            </div>
          )}
        </div>
      )}

      {currentView === 'challenges' && (
        <div className="challenges">
          <h2>Coding Challenges</h2>
          <ul>
            {codingChallenges.map((challenge) => (
              <li key={challenge.id} onClick={() => handleChallengeClick(challenge)}>
                {challenge.title}
              </li>
            ))}
          </ul>
          {selectedChallenge && (
            <div className="challenge-content">
              <h3>{selectedChallenge.title}</h3>
              <p>{selectedChallenge.description}</p>
            </div>
          )}
        </div>
      )}

      {currentView === 'tutorials' && (
        <div className="tutorials">
          <h2>Tutorials</h2>
          <ul>
            {tutorials.map((tutorial) => (
              <li key={tutorial.id} onClick={() => handleTutorialClick(tutorial)}>
                {tutorial.title}
              </li>
            ))}
          </ul>
          {selectedTutorial && (
            <div className="tutorial-content">
              <h3>{selectedTutorial.title}</h3>
              <p>{selectedTutorial.content}</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default StudentDashboard;
