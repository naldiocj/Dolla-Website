import React from 'react';
import GlobalStyles from './styles/GlobalStyles';
import { BrowserRouter as Routes, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';

function App() {
  return (
    <>
      <Routes>
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
      </Routes>
      <GlobalStyles />
    </>
  );
}

export default App;
