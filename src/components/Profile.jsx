import React, { useEffect, useState } from 'react';
import { TextField, Container } from '@mui/material';

const Profile = ({ user }) => {
  const [profile, setProfile] = useState({});

  useEffect(() => {
    if (user) {
      // Fetch user profile from the backend
      fetchUserProfile();
    }
  }, [user]);

  const fetchUserProfile = async () => {
    try {
      const response = await fetch(`http://localhost:5000/api/auth/profile/${user.id}`);
      const data = await response.json();
      setProfile(data);
    } catch (error) {
      console.error('Error fetching profile:', error);
    }
  };

  return (
    <Container>
      <h2>Profile</h2>
      <TextField label="Name" value={profile.name || ''} fullWidth />
      <TextField label="Email" value={profile.email || ''} fullWidth />
    </Container>
  );
};

export default Profile;
