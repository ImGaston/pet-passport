import Image from 'next/image';
import React from 'react';

const imageStyle = {
  borderRadius: '0.75rem',
};

const Profile = ({ picture }) => {
  return <Image src={picture} width={200} height={200} alt='pet picture' style={imageStyle} />;
};

export default Profile;
