import React from 'react';
import { Backup } from '@lomelidev/react-native-toopago-ui';
export default () => {
  const [email, setEmail] = React.useState('');
  function handleSubmit() {
    console.log('handle submit');
  }

  return (
    <Backup
      email={email}
      onEmailChange={setEmail}
      onSubmit={handleSubmit}
      onClose={handleSubmit}
    />
  );
};
