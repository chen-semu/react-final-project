import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import{createStore,compose} from 'redux'
import{Provider} from 'react-redux'
import combinedReducers from './store/reducers' 
import CssBaseline from '@mui/material/CssBaseline';
const enhancers = compose(
  window.REDUX_DEVTOOLS_EXTENSTION&&
  window.REDUX_DEVTOOLS_EXTENSTION()
);

const projectStore = createStore(combinedReducers,{users:[]},enhancers)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.Fragment>
  <CssBaseline />
  <Provider store={projectStore}>
  {/* <React.StrictMode> */}
    <App />
  {/* </React.StrictMode> */}
  </Provider>
  </React.Fragment>
)
