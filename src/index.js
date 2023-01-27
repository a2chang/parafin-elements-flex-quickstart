import React from 'react';
import ReactDOM from 'react-dom';

// import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import 'bootstrap/dist/css/bootstrap.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import './index.css';
import App from './App';

// import UserProvider from './components/UserProvider';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   // <React.StrictMode>
//     // <UserProvider>
//     // <React>
//       <App />
//     // </React>      
//     // </UserProvider>    
//   // </React.StrictMode>
// );

ReactDOM.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>,
  document.getElementById('root')
);