import React, {useReducer} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import EventForm from './EventForm'
import Events from './Events'
import Appcontext from '../contexts/AppContext'
import reducer from '../reducers'

console.log({Appcontext})

const App = () => {
  const [state, dispatch] = useReducer(reducer, [])
  // console.log(state, 'in App.js')

  return (
    <Appcontext.Provider value={'Hello, I am a Provider!'}>
      <div className="container-fluid">
        <EventForm state={state} dispatch={dispatch} />
        <Events state={state} dispatch={dispatch} />
      </div>
    </Appcontext.Provider>
  );
}

export default App;
