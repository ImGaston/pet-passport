import React from 'react';
import astor from '../../../public/astor.jpg';
import Profile from '../components/Profile';
import Detail from '../components/Detail';
import Contact from '../components/Contact';
import Form from '../components/Form';

const Astor = () => {
  return (
    <main className='flex flex-col justify-center h-screen items-center '>
      <Profile picture={astor} />
      <h1 className='text-2xl font-bold text-center py-4'>Astor</h1>
      <Detail />
      <Form />
      <Contact />
    </main>
  );
};

export default Astor;
