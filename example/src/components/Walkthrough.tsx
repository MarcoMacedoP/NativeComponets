import React from 'react';
import { Walkthrough } from 'react-native-toopago-ui';
const walkthroughImage = require('../assets/walkthrough-one.png');
const data = [
  {
    desc:
      'Crea tu cuenta ¡Puedes acceder usando tu cuenta de Facebook también!',
    image: walkthroughImage,
    title: 'Bienvenido a Toopago',
  },
  {
    desc:
      'Crea tu cuenta ¡Puedes acceder usando tu cuenta de Facebook también!',
    image: walkthroughImage,
    title: 'Bienvenido a Toopago',
  },
  {
    desc:
      'Crea tu cuenta ¡Puedes acceder usando tu cuenta de Facebook también!',
    image: walkthroughImage,
    title: 'Bienvenido a Toopago',
  },
];

export default () => (
  <Walkthrough data={data} onFinish={() => console.log('hello')} />
);
