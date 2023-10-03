import React from 'react';

function Todotable({deleteTodo, todos}) {
  
    return (
      <div className="todotable">
        <table>
          <tbody>
            <tr>
              <th>Date</th>
              <th>Description</th>
            </tr>
            {todos.map((todo, i) =>
            <tr key={i}>
              <td>{todo.date}</td>
              <td>{todo.description}</td>
              <td><button onClick={() => deleteTodo(i)}>Delete</button></td>
            </tr>
            )}
          </tbody>
        </table>
      </div>
    );
  }
  
  export default Todotable;
  