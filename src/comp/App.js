import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import '../styles/App.scss';
import CounterWidget from "./CounterWidget"
import GreetingToggle from "./GreetingToggle";
import ShowHide from "./ShowHide";
import FontSizerSlider from "./FontSizerSlider";
import FontSizerButtons from "./FontSizerButtons";
import TextAlignButtons from './TextAlignButtons';
import LifecycleClock from './LifecycleClock';
import ColorChanger from './ColorChanger';
import RGBSliders from './RGBSliders';
import Navbar from './Navbar';
import Home from './Home';

export default function App() {
  return (
    <div className="App">
      <Router>

        <Route component={Navbar} />

        <Switch>
        
        <Route 
        exact path="/"
        component={Home}
        />

        <Route 
        exact path="/counter" 
        component={CounterWidget} 
        />


        <Route 
        exact path="/greeting" 
        component={GreetingToggle} 
        />

        <Route 
        exact path="/show-hide" 
        component={ShowHide}
        />
                
        <Route 
        exact path="/fontsizerb" 
        component={FontSizerButtons} 
        />
        <Route 
        exact path="/fontsizers" 
        component={FontSizerSlider} 
        />

        <Route 
        exact path="/align" 
        component={TextAlignButtons} 
        />

        <Route 
        exact path="/clock" 
        component={LifecycleClock} 
        />
        
        <Route 
        exact path="/color" 
        component={ColorChanger} 
        />
        
        <Route 
        exact path="/rgb" 
        component={RGBSliders} 
        />

        <Route
            render={(routeProps) => (
              <div>
                <h1>
                  404
                </h1>
                <p>
                  {routeProps.location.pathname.slice(1)} is not a valid resource
                </p>
              </div>
            )}
          />

        </Switch>
      </Router>
    </div>
  );
}

