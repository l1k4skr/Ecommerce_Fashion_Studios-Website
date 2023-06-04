import { Provider } from 'react-redux';
import store from './store';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/containers/Home';
import Error404 from './components/containers/errors/error404';

export default function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          {/*Error Display*/}
          <Route path="*" element={<Error404 />}/>

          <Route exact path='/' element={<Home/>}/>

        </Routes>
      </Router>
    </Provider>
  )
}