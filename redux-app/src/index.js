import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import { Provider } from 'react-redux'

import App from './Components/App'
import tasks from './reducers'

const store = createStore(tasks)



ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,document.getElementById('root'))
