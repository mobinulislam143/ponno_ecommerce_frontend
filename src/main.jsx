import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { Provider } from 'react-redux';
import store from './redux/store/store.js';
import 'aos/dist/aos.css'; 
import 'react-toastify/dist/ReactToastify.css';
import AnimatedCursor from "react-animated-cursor"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
      {/* <AnimatedCursor
        innerSize={8}
        outerSize={8}
        color='0,51,115'  // RGB equivalent of #003373
        outerAlpha={0.2}
        innerScale={0.7}
        outerScale={5}
        clickables={[
          'a',
          'input[type="text"]',
          'input[type="email"]',
          'input[type="number"]',
          'input[type="submit"]',
          'input[type="image"]',
          'label[for]',
          'select',
          'textarea',
          'button',
          '.link'
        ]}
      /> */}

    </Provider>
  </React.StrictMode>
);
