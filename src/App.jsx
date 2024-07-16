import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Students from './Students';



const App = () => {
  // Define student data
  const students = [
    { name: 'John Nicole', department: 'Science', finalGrade: 85, status: 'Pass' },
    { name: 'Rerax', department: 'Arts', finalGrade: 76, status: 'Pass' },
    { name: 'Rodel', department: 'Commerce', finalGrade: 92, status: 'Pass' },
    { name: 'Ardon', department: 'Science', status: 'Fail' },
    { name: 'Jei', department: 'Arts', finalGrade: 63, status: 'Pass' },
    { name: 'Japhzel', department: 'Commerce', finalGrade: 79, status: 'Pass' },
    { name: 'Rexy', department: 'Science', finalGrade: 88, status: 'Pass' },
    { name: 'Bolen', department: 'Arts', finalGrade: 71, status: 'Pass' },
    { name: 'Mike', department: 'Commerce', status: 'Fail' },
    { name: 'Jack', department: 'Science', finalGrade: 79, status: 'Pass' }
  ];

  return (
    <div className="App">
      <Students students={students} />
    </div>
  );
};

export default App;