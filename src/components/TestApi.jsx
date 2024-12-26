import React, { useState, useEffect } from 'react';
import api from '../api';

// this func call api and return the json response {"message":"Welcome to my Go API! 🚀"} in a compoennt

export default function TestApi() {
  const [message, setMessage] = useState('Loading...');

  useEffect(() => {
    api.get('/').then((response) => {
      setMessage(response.data.message);
    });
  }, []);

  return (
    <div>
      <h1>{message}</h1>
    </div>
  );
}