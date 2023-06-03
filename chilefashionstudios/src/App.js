import { Provider } from 'react-redux';
import store from './store';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/containers/Home';
import Error404 from './components/containers/errors/error404';

export default function App() {
  return (
    <Provider store={store}>
      <Router>
        
    </Provider>
  )
}