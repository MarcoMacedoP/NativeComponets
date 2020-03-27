import React from 'react';
import { Backup } from '@lomelidev/react-native-toopago-ui';

export default () => {
  const [email, setEmail] = React.useState('');
  const [isShowed, setIsShowed] = React.useState(false);

  function handleSubmit() {
    setIsShowed(true);
  }
  function closeModal() {
    setIsShowed(false);
  }

  return (
    <>
      <Backup
        email={email}
        onEmailChange={setEmail}
        onSubmit={handleSubmit}
        onCloseModal={closeModal}
        isModalShowed={isShowed}
      />
    </>
  );
};
