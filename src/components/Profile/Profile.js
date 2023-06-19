import Image from 'next/image';
import React from 'react';

const Profile = ({ picture }) => {
  return <Image src={picture} width={200} height={200} alt='pet picture' />;
};

export default Profile;
