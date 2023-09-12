
import { useLocation } from "react-router-dom"

function Homepage() {
const location = useLocation();
console.log(location);
    return (
        <>
        {location.state!=null?
        <div className="App">
        <header className="App-header">
            <label>Hello {location.state.firstName}</label>
        <h1>Welcome to CATSPETS</h1>
        </header>
      </div>:<div className="App">
        <header className="App-header">
        <label>Hello User!</label>    
        <h1>Welcome to CATSPETS</h1>
        </header>
      </div>
        }
        </>
    )
}

export default Homepage