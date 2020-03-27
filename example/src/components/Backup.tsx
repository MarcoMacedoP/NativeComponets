import React from 'react';
import {
  Backup,
  FullscreenModal,
  EmailIcon,
} from '@lomelidev/react-native-toopago-ui';

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
      <FullscreenModal
        isSecondaryDark
        isShowed={isShowed}
        icon={EmailIcon}
        onClose={() => setIsShowed(false)}
      />
    </>
  );
};
