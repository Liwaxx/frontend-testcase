import React from 'react';
import {Button} from 'reactstrap'

const Todo = ({title, id}) => {
  return (
      <tr>
        <td>Dummy</td>
        <td className='w-25'>
          <Button color='success' className='mx-2'>Complete</Button>
          <Button color='warning' className='mx-2'>Edit</Button>
          <Button color='danger' className='mx-2'>Delete</Button>
        </td>
      </tr>
  );
};

export default Todo;