import Image from 'next/image';
import React from 'react';

const Profile = ({ picture }) => {
  return (
    <div>
      <Image src={picture} width={400} height={400} alt='pet picture' />
    </div>
  );
};

export default Profile;
