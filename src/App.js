import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout';
import SignIn from './components/Signin';

function App() {
  return (
    <Routes>
      <Route path='/' element= {<Layout />}>
        <Route path='SignIn' element= {<SignIn />}>
        </Route>
      </Route>
    </Routes>

  );
}

export default App;
