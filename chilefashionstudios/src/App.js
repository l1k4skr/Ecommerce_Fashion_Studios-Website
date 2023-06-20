import { Provider } from 'react-redux';
import store from './store';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/containers/Home';
import Error404 from './components/containers/errors/error404';

import  Singup  from './containers/auth/Singup';
import Login from './containers/auth/Login';
import Activate from './containers/auth/Activate';


export default function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          {/*Error Display*/}
          <Route path="*" element={<Error404 />}/>

          <Route exact path='/' element={<Home/>}/>

          {/*Authentication Routes*/}
          <Route exact path='/singup' element={<Singup/>}/>
          <Route exact path='/login' element={<Login/>}/>
          <Route exact path='/activate/:uid/:token' element={<Activate/>}/>

        </Routes>
      </Router>
    </Provider>
  )
}