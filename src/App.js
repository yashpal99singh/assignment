import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './components/Redux/reducers';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import LoginPage from './components/loginpage';
import AppCalendar from './components/Calendar';
import './App.css';
// import SignInSignUpForm from './components/SignInSignUpForm';
import calendarReducer from './components/Redux/calendarReducer';
import Calendar from 'react-calendar';

const store = createStore(rootReducer);

function App() {
  return (
    <Provider store={store}>
      <Router>
        <AppCalendar/>
       
    {/* <LoginPage/> */}
        <Routes>
          {/* <Route path="/" exact element={<LoginPage></LoginPage>} /> */}
          <Route path="/calendar" element={<AppCalendar></AppCalendar>} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
