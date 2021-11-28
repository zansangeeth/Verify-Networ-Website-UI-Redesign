import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from "./components/home";
import SignIn from "./components/sign-in";
import SignUpIndivdual from "./components/sign-up-indivdual";
import SignUpOrganization from "./components/sign-up-organization";

function App() {
  return (
    <Router>

    
    <div className="App">


    <nav>
        <div class="container">

            <img src={require('./assets/logo.png').default}/>
            <div class="primary-menu">

                <Link to="/">Home</Link>
                <a href="#">Product</a>
                <a href="#">Prices</a>
                <Link to="/sign-in" class="primary-button">Sign In</Link>                
            </div>
        </div>
    </nav>


    <Switch>
          
          <Route path="/users">
            
          </Route>

          <Route path="/" exact>
            <Home/>
          </Route>

          <Route path="/sign-in" exact>
            <SignIn/>
          </Route>

          <Route path="/indivdual/sign-up" exact>
            <SignUpIndivdual/>
          </Route>

          <Route path="/organization/sign-up" exact>
            <SignUpOrganization/>
          </Route>

          
    </Switch>


    <footer>

<div class="container">

    <div class="content">
        <div class="half-m">
            <h4>Ready to get started?</h4>
            <a href="#" class="primary-button">SIGN UP</a>
        </div>
        <div class="half">
            <a href="#">Services</a>
            <a href="#">Email Marketing</a>
            <a href="#">Campaigns</a>
            <a href="#">Branding</a>
            <a href="#">Offline</a>
        </div>

        <div class="half">
            <a href="#">About</a>
            <a href="#">Our Story</a>
            <a href="#">Benefits</a>
            <a href="#">Team</a>
            <a href="#">Careers</a>

        </div>

        <div class="half">
            <a href="#">Help</a>
            <a href="#">FAQs</a>
            <a href="#">Contact Us</a>
            

        </div>
    </div>

    <div class="f-bottom">
    
        <div class="lf">
            <a href="#">Terms & conditions</a>
            <a href="#">Privacy policy</a>
        </div>


        <div class="lf">
            <a href="#"><i class="fab fa-facebook"></i></a>
            <a href="#"><i class="fab fa-linkedin-in"></i></a>
            <a href="#"><i class="fab fa-twitter"></i></a>
            <a href="#"><i class="fab fa-instagram"></i></a>
        </div>
    </div>
</div>

</footer>
      




    </div>

    </Router>
  );
}

export default App;
