
import { Header } from '../components/header/Header'
import Home from '../components/home/Home'
import Footer from '../components/footer/Footer'
import OnlineCourse from '../components/online-course/OnlineCourse';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  
  return (
   
     <Router>
      <div>
      <Header />
        <Switch>
          <Route path="/project-school/online_course" component={OnlineCourse} />
          <Route exact path="/project-school/"  component={Home} />
        </Switch>
      </div>
      <Footer />
    </Router>
   
  
  )
}

export default App
