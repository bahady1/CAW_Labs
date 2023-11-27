import React, { useState } from 'react';
import './App.css';


const UserList = ({ users, onDelete }) => {
  return (
    <ul>
      {users.map((user, index) => (
        <li key={index}>
          {user.username} - {user.password}
          <button onClick={() => onDelete(index)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

const AuthenticationForm = ({ onFormSubmit }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onFormSubmit({ username, password });
    setUsername('');
    setPassword('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Username:
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </label>
      <br />
      <label>
        Password:
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </label>
      <br />
      <button type="submit">Submit</button>
    </form>
  );
};

function App() {
  const [users, setUsers] = useState([]);

  const handleFormSubmit = (user) => {
    setUsers([...users, user]);
  };

  const handleDelete = (index) => {
    const updatedUsers = [...users];
    updatedUsers.splice(index, 1);
    setUsers(updatedUsers);
  };

  return (
    <div>
      <h1>User Authentication and List</h1>
      <AuthenticationForm onFormSubmit={handleFormSubmit} />
      <UserList users={users} onDelete={handleDelete} />
    </div>
  );
}

export default App;
