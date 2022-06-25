import {Route, Switch} from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import Home from './components/Home'
import Contact from './components/Contact'
import About from './components/About'
import NotFound from './components/NotFound'

const App = () => (
  <>
    <div className="my-card">
      <div>
        <Header />
        <div>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/contact" component={Contact} />
            <Route component={NotFound} />
          </Switch>
        </div>
      </div>
    </div>
  </>
)

export default App
