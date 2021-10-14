import React, {Fragment} from 'react'
import { Route, Switch, BrowserRouter } from 'react-router-dom'
import { Header, Footer } from './Layouts'
import { Home, Products, Cabinet} from './Pages'
import { Login, Register } from './Auth';


function App() {
  return (
    <BrowserRouter>
      <Fragment>
        <Header />
          <div className="container py-5">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/products" component={Products} />
              <Route path="/cabinet" component={Cabinet} />

              <Route exact path="/login" component={Login} />
              <Route exact path="/register" component={Register} />
            </Switch>
          </div>
        <Footer />
      </Fragment>
    </BrowserRouter>
  );
}

export default App;
