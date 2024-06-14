import React from 'react';
import { useMemberstackModal } from '@memberstack/react';

function SignupButton() {
  const { openModal } = useMemberstackModal();

  const handleSignupClick = () => {
    openModal({ type: 'SIGNUP' })
      .then(({ data, type }) => {
        console.log('data', data);
        console.log('type: ', type);
      })
      .catch((error) => {
        console.error('Error opening modal:', error);
      });
  };

  return (
    <button onClick={handleSignupClick}>
      Sign Up
    </button>
  );
}

export default SignupButton;
