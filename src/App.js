import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout';
import Signin from './components/Signin';

function App() {
  return (
    <Routes>
      <Route path='/' element= {<Layout />}>
        <Route path='signin' element= {<Signin />}>
        </Route>
      </Route>
    </Routes>

  );
}

export default App;
