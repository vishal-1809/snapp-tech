import React, { useState } from 'react';

const UserForm = ({ addUser }) => {
  const [formData, setFormData] = useState({
    name: '',
    countryCode: '',
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addUser(formData);
    setFormData({
      name: '',
      countryCode: '',
      email: '',
      password: '',
    });
  };

  return (
    <form autoComplete='off' onSubmit={handleSubmit} className="max-w-sm mx-auto mt-6 shadow-md p-6 rounded-lg bg-violet-950 text-black">
      <div className="mb-4">
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Name"
          className="border p-2 w-full"
          required
        />
      </div>
      <div className="mb-4">
        <input
          type="text"
          name="countryCode"
          value={formData.countryCode}
          onChange={handleChange}
          placeholder="Country Code"
          className="border p-2 w-full"
        />
      </div>
      <div className="mb-4">
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email"
          className="border p-2 w-full"
          required
        />
      </div>
      <div className="mb-4">
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="Password"
          className="border p-2 w-full"
          required
        />
      </div>
      <button type="submit" className="bg-yellow-400 text-black p-2 rounded w-full">
        Save
      </button>
    </form>
  );
};

export default UserForm;
