import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';

import App from './Components/App'
import tasks from './reducers'

const store = createStore(tasks)



ReactDOM.render(<App />,document.getElementById('root'))
