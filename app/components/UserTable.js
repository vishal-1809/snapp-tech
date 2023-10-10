import React, { useState } from 'react';

const UserTable = ({ users, deleteUser }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [data, setData] = useState([]);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSortByEmail = () => {
    const sorted = [...users].sort((a, b) => a.email.localeCompare(b.email));
    setData(sorted);
};

  const filteredUsers = users.filter(user =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase())
  );


  return (
    <div className="p-4 bg-violet-950 m-4 text-black">
      <input
        type="text"
        placeholder="Search by name"
        value={searchTerm}
        onChange={handleSearch}
        className="border p-2 mb-4 w-50 m-2"
      />
      <button
        onClick={handleSortByEmail}
        className="bg-yellow-400 text-white py-2 px-4 mb-4 rounded text-black"
      >
        Sort by Email
      </button>
      <div className="overflow-x-auto">
        <table className="min-w-full border">
          <thead>
            <tr className="bg-gray-100">
              <th className="py-2 px-4 border-b bg-yellow-400">Name</th>
              <th className="py-2 px-4 border-b bg-yellow-400">Country Code</th>
              <th className="py-2 px-4 border-b bg-yellow-400">Email</th>
            </tr>
          </thead>
          <tbody>
            {
              (data.length > 0) ?
                (data.map(user => (
                  <tr key={user.id} className="border-b">
                    <td className="py-2 px-4 text-center text-white">{user.name}</td>
                    <td className="py-2 px-4 text-center text-white">{user.countryCode}</td>
                    <td className="py-2 px-4 text-center text-white">{user.email}</td>
                  </tr>
                ))) : 
                (filteredUsers.map(user => (
                  <tr key={user.id} className="border-b">
                    <td className="py-2 px-4 text-center text-white">{user.name}</td>
                    <td className="py-2 px-4 text-center text-white">{user.countryCode}</td>
                    <td className="py-2 px-4 text-center text-white">{user.email}</td>
                  </tr>
                )))
            }

          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserTable;
