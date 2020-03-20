import React from 'react';
import { Item } from 'react-native-toopago-ui';
const walkthroughImage = require('../assets/walkthrough-one.png');
export default () => (
  <Item
    image={walkthroughImage}
    title="Bienvenido a Toopago"
    desc="Crea tu cuenta ¡Puedes acceder usando tu cuenta de Facebook también!"
  />
);
