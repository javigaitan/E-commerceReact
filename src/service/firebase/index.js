import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyAc2X1FGxGxK-7mlk__HJvkD1dqnG9Bze0',
  authDomain: 'stock-aikidostore.firebaseapp.com',
  projectId: 'stock-aikidostore',
  storageBucket: 'stock-aikidostore.appspot.com',
  messagingSenderId: '351501973617',
  appId: '351501973617:web:3c8d71a88a6561f1dfc3d0'
};


const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)

export const collectionsName = {
  products: 'products',
  orders: 'orders'
}
