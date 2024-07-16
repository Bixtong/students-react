// src/Students.js
import React from 'react';
import Student from './Student';

const Students = ({ students }) => {
    return (
        <div>
            <h2>Student List</h2>
            <table>
                <thead>
                    <tr>
                        <th>No.</th>
                        <th>Student Names</th>
                        <th>Department</th>
                        <th>Final Grade</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {students.map((student, index) => (
                        <Student key={index} index={index + 1} student={student} />
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Students;
