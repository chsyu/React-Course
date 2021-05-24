import './App.css';
import './theme.css'
import {
  BrowserRouter as Router,
  Link,
  Switch,
  Route,
  Redirect,
  useLocation,
  useParams
} from 'react-router-dom'
import { TransitionGroup, CSSTransition } from 'react-transition-group'


const RGB = () => {
  const { r, g, b } = useParams()

  return (
    <div 
      className='fill rgb' 
      style={{background: `rgb(${r}, ${g}, ${b})`}}>
        rgb({r}, {g}, {b})
    </div>
  )
}

const HSL = () => {
  const { h, s, l } = useParams()

  return (
    <div 
      className='fill hsl' 
      style={{background: `hsl(${h}, ${s}%, ${l}%)`}}>
        hsl({h}, {s}%, {l}%)
    </div>
  )
}
function Content () {
  const location = useLocation()

  return (
    <div className='fill content'>
      <TransitionGroup>
        <CSSTransition
          timeout={300}
          classNames='fade'
          key={location.key}
        >
          <Switch location={location}>
            <Route exact path="/hsl/:h/:s/:l">
              <HSL />
            </Route>
            <Route exact path="/rgb/:r/:g/:b">
              <RGB />
            </Route>
            <Route path='*'>
              <div>Not Found</div>
            </Route>
          </Switch>
        </CSSTransition>
      </TransitionGroup>
    </div>
  )
}

export default function App () {
  return (
    <Router>
      <div className='fill'>
        <Route exact path='/'>
          <Redirect to="/hsl/0/89/55" />
        </Route>

        <ul className='nav'>
          <Link to="/hsl/0/89/55">Red</Link>
          <Link to="/hsl/278/81/54">Purple</Link>
          <Link to="/hsl/214/82/55">Blue</Link>
          <Link to="/rgb/244/247/62">Yellow</Link>
          <Link to="/rgb/235/48/193">Pink</Link>
          <Link to="/rgb/47/235/210">Aqua</Link>
        </ul>

        <Content />
      </div>
    </Router>
  )
}