import './App.css';
import {
    BrowserRouter as Router,
    Routes,
    Route
} from "react-router-dom";
import WelcomePage from "./screen/welcomePage/welcomePage";
import Service from "./screen/servicePage/service";
import LogIn from "./screen/logInPAge/logIn";
import Details from "./screen/details/details";

function App() {
  return (
   <Router>
       <Routes>
           <Route path={'/'} element={<LogIn/>}/>
           <Route path={'/Welcome'} element={<WelcomePage/>}/>
           <Route path={'/Service'} element={<Service/>}/>
           <Route path={'/Details'} element={<Details/>}/>
       </Routes>
   </Router>
  );
}

export default App;
