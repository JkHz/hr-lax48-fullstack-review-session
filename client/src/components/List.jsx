import React from 'react';
import ListElement from './ListElement.jsx';

const List = ({ studentList, getStudents }) =>
  <div>
    {studentList.map(student => (
      <ListElement student={student} key={student._id} getStudents={getStudents}/>
    ))}
  </div>

export default List;