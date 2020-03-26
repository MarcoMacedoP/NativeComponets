import React from 'react';
import { Backup, FullscreenModal } from '@lomelidev/react-native-toopago-ui';

export default () => {
  const [email, setEmail] = React.useState('');
  const [isShowed, setIsShowed] = React.useState(false);

  function handleSubmit() {
    setIsShowed(true);
  }

  return (
    <>
      <Backup
        email={email}
        onEmailChange={setEmail}
        onSubmit={handleSubmit}
        onClose={handleSubmit}
      />
      <FullscreenModal isShowed={isShowed} onClose={() => setIsShowed(false)} />
    </>
  );
};
