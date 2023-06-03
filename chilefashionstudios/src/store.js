import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './redux/reducers';
import thunk from 'redux-thunk';

const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware => getDefaultMiddleware().prepend(thunk)
});
export default store;