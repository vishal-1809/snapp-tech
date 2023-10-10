'use client'
import React, { useState } from 'react';
import UserForm from './components/UserForm';
import UserTable from './components/UserTable';

const Home = () => {
  const [users, setUsers] = useState([]);

  const addUser = (user) => {
    setUsers([...users, { ...user, id: Date.now() }]);
  };

  const deleteUser = (id) => {
    setUsers(users.filter(user => user.id !== id));
  };

  return (
    <div className="container mx-auto h-screen p-4 bg-purple-900 text-white">
      <h1 className="text-2xl mb-4 text-center">User Management</h1>
      <UserForm addUser={addUser} />
      {
        users.length > 0 ? 
        (
          <UserTable users={users} deleteUser={deleteUser} />
        ):(
          <></>
        )
      }
      
    </div>
  );
};

export default Home;
