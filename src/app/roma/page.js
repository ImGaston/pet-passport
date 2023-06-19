import React from 'react';
import roma from '../../../public/roma.jpeg';
import Profile from '../components/Profile';

const Roma = () => {
  return (
    <main className='flex flex-col justify-center h-screen items-center'>
      <Profile picture={roma} />
      <h1 className='text-2xl font-bold text-center py-4'>Roma</h1>
    </main>
  );
};

export default Roma;
