import ReactDOM from 'react-dom/client';
import App from './App';
import Router from './Routers/Router';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  <Router>
    <App />
  </Router>
  // </React.StrictMode>
)
