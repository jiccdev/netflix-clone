import { BrowserRouter, Routes, Route } from 'react-router-dom';

import HomeScreen from './components/screens/HomeScreen';
import YourAccount from './components/YourAccount';
import LoginScreen from './components/screens/LoginScreen';

import './App.css';

function App() {
  const user = null;
  return (
    <div>
      {!user ? (
        <LoginScreen />
      ) : (
        <BrowserRouter>
          <Routes>
            <Route path="/">
              <Route index element={<HomeScreen />}></Route>
              <Route path="youraccount" element={<YourAccount />}></Route>
            </Route>
          </Routes>
        </BrowserRouter>
      )}
    </div>
  );
}

export default App;
