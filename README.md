# E-comerce Aikido Store
E-commerce project for practice of course of React js in CoderHouse

## _Clone repository_
```sh
git clone https://github.com/javigaitan/E-commerceReact.git
cd aikidostore
npm install
npm start
```
## _Environment Variables_

Ver ['.env.example']

En Firebase se deberia generar una coleccion con el nombre products que posea el siguiente formato:

- name: nameProduc - Tipo de Dato: String
- price: priceProduc - Tipo de Dato: number
- category: categoryProduc - Tipo de Dato: String
- stock: stockProduc - Tipo de Dato: Number
- img: imgProduc - Tipo de Dato: String
- description: descriptionProduc - Tipo de Dato: String

Esto les data los datos necesario para completar en el archivo ['.env.example'] como lo indica.

//FirebaseConfig:

- REACT_APP_apiKey=
- REACT_APP_authDomain=
- REACT_APP_projectId=
- REACT_APP_storageBucket=
- REACT_APP_messagingSenderId=
- REACT_APP_appId=


Esto les permitira navegar por la lista de producto, ver su valor y descripcion, y al ingresar en ella podran ver mas informacion del producto con la posibilidad de sumarlo a su carrito de compras, pueden volver clikeando la imagen del Navbar o finalizar compra en ese momento. Completar el formulario de datos y este generar uan Orden de Compra. 



## _languages ​​used_

- HTML
- CSS
- JavaScript	

## _Libraries_
| Library | Version 
| ------ | ------ |
| React | 17.0.2 
| React-router-dom | 6.1.1 
| Firebase | 9.6.1 | 



## _Instalación de React JS_

This project initialise with [Create React App](https://github.com/facebook/create-react-app).



## _Deploy_
```sh
https://e-commerce-react-topaz.vercel.app/
```
