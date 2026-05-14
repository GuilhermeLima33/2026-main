import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const configuracoesFirebase = {
  apiKey: "AIzaSyB16hATLWXDSKsc0oEAS-gg8iVfauT1JMU",
  authDomain: "autenticar-tds2-gw.firebaseapp.com",
  projectId: "autenticar-tds2-gw",
  storageBucket: "autenticar-tds2-gw.firebasestorage.app",
  messagingSenderId: "864258419254",
  appId: "1:864258419254:web:fe4e7cc0145c8f9f5d4697",
  measurementId: "G-7579KSXH77"
};

const app = initializeApp(configuracoesFirebase);
export const autenticacao = getAuth(app);
