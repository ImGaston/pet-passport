import React from 'react';
import roma from '../../../public/roma.jpeg';
import Profile from '@/components/Profile/profile';

const Roma = () => {
  return (
    <main>
      <Profile picture={roma} />
      <h1>Roma</h1>
    </main>
  );
};

export default Roma;
