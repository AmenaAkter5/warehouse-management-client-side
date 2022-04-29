import { Route, Routes } from 'react-router-dom';
import './App.css';
// import Footer from './Pages/Shared/Footer/Footer';
import Header from './Pages/Shared/Header/Header';
import SignIn from './Pages/SignIn/SignIn/SignIn';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/signin' element={<SignIn></SignIn>}></Route>
      </Routes>
      {/* <Footer></Footer> */}
    </div>
  );
}

export default App;
