import React from 'react';
import { useMemberstackModal } from '@memberstack/react';

function LoginButton() {
  const { openModal } = useMemberstackModal();

  const handleLoginClick = () => {
    openModal({ type: 'LOGIN' })
      .then(({ data, type }) => {
        console.log('data', data);
        console.log('type: ', type);
      })
      .catch((error) => {
        console.error('Error opening modal:', error);
      });
  };

  return (
    <button onClick={handleLoginClick}>
      Log In
    </button>
  );
}

export default LoginButton;