import React from 'react';

const Form = () => {
  return (
    <div className='w-4/5 py-2'>
      <p className='py-2'>1. Compartí tu ubicación</p>
      <button className='border py-2 px-4 rounded-lg mb-2 font-bold'>Ubicación</button>
      <input placeholder='Lat' className='w-full py-2 px-4 mb-2 rounded-lg'></input>
      <input placeholder='Long' className='w-full py-2 px-4 rounded-lg'></input>
    </div>
  );
};

export default Form;
