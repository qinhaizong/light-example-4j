import React from 'react';
import ReactDOM from 'react-dom';
import Pets from './components/Pets';
import Home from './components/Home';
import { BrowserRouter, Route } from 'react-router-dom';
import { unregister } from './registerServiceWorker';
import { CookiesProvider } from 'react-cookie';

const Root = () => {
  return (
    <CookiesProvider>
    <div className="container">
      <BrowserRouter>
        <div>
          <Route path="/" component={Home}/>
          <Route path="/special" component={Pets}/>
          <Route path="/login" component={() => window.location = 'https://localhost:6881/oauth2/code?response_type=code&client_id=f7d42348-c647-4efb-a52d-4c5787421e72&redirect_uri=http://localhost:3000/v1/authorization'}/>
        </div>
      </BrowserRouter>
    </div>
    </CookiesProvider>
  )
}

unregister();

ReactDOM.render(<Root />, document.getElementById('root'));
// registerServiceWorker();
