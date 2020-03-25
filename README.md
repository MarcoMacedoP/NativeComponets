# react-native-toopago-ui

Paquete de componentes ui para Toopago.

## Instalacion

Primero necesitas instalar el paquete principal

```sh
npm install @lomelidev/react-native-toopago-ui
```

Despues de eso agregar `react-native-svg` para que los svg se muestren correctamente en los componentes, de lo contrario dara un error.

```sh
npm install react-native-svg
```

## Uso

```js
import ToopagoUi from 'react-native-toopago-ui';

// ...

const deviceName = await ToopagoUi.getDeviceName();
```

## License

MIT
