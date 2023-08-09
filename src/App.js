import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/index'; 
import User1 from './components/User1';
import User2 from './components/User2';

const App = () => {
  
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/User-1" element={<User1 />} />
          <Route path="/User-2" element={<User2 />} />
        </Routes>
      </Router>
    </Provider>
  );
};

export default App;
