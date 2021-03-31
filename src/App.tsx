import Header from '@app/components/Header';
import Home from '@app/screens/Home';
import ViewPokemon from '@app/screens/ViewPokemon';
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.less';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/pokemon" exact component={ViewPokemon} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
