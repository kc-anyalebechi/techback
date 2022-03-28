import logo from "./logo.svg";
import "./App.css";
import TechUser from "./Components/TechUsers/techUser";

function App() {
  return (
    <div className="App">
      <header className="App-header">we are live</header>
      <div>
        {/* Home page: 
        Header  - There will be a TechBack - it  will link to the homepage
        Body - tagline "Where Engineers and the communities intersect"
        Main section - I am currently ... 
        There will be two buttons 
        1) In Tech
        2) In the Community

        There will be section on the bottom that says

        "Just Browsing" - This will link to the get all page of engineers and community leaders
     */}
      </div>
      <div>
        <TechUser />
      </div>
    </div>
  );
}

export default App;
