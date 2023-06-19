import React from 'react';
import astor from '../../../public/astor.jpg';
import Profile from '@/components/Profile/profile';

const Astor = () => {
  return (
    <main>
      <Profile picture={astor} />
      <h1>Astor</h1>
    </main>
  );
};

export default Astor;
