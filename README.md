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
Antes de usar los componentes es necesario usar el HOC provider
```
import { ThemeProvider } from '@lomelidev/react-native-toopago-ui';
import App from "./your/route";


export default = () => (
    <ThemeProvider>
        <App />
    </ThemeProvider>
)
```

## Input Component
Un componente que hace mas facil el manejo de inputs. Recibe todas las props del TextInput de React Native y agrega unas cuantas:

 * error (optional) Una string para ser mostrada dentro de la caja input.
 * children (optional) Render prop que manda en sus props el color actual del input.
 * containerStyle (optional) Estilos para el contenedor (View)
 * icon? (optional)  Render prop para mostrar un icono dentro del Input.

 ### Ejemplo
 ```
import React, {useEffect} from "react";
import { Input, LockIcon } from '@lomelidev/react-native-toopago-ui';
import { Animated } from "react-native";

const Component = ()=> {
    const [error, setError] = useState('Campo invalido');
    //Activa el focus del input en el primer render.
    const inputRef = useRef();
    useEffect(()=> {
        inputRef && inputRef.current.getNode().focus()
    }, [])
    return ( 
        <Input
            placeholder="Some value"
            ref={inputRef}
            error={error}
            icon={({ color }) => <LockIcon color={color} />}
        >
              {({ color }) => (
                <Animated.Text style={[{ color }]}>Hello there</Animated.Text>
              )}
        </Input>
)}
 ```
 - Input con error 
 - ![Image] (https://user-images.githubusercontent.com/45505161/82934843-c553eb00-9f51-11ea-811b-977b049f520b.png)
- Input sin foco
  ![Image] (https://user-images.githubusercontent.com/45505161/82934967-f92f1080-9f51-11ea-8f61-51b1403e01f1.png)
- Input con foco
![!Image] (https://user-images.githubusercontent.com/45505161/82935039-1237c180-9f52-11ea-81b0-94935ab559c9.png)