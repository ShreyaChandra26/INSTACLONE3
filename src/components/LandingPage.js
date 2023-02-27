import { Link } from "react-router-dom";
import heroImage from './image/landingPage.JPG'
import '../App.css'

function LandingPage(){
    return <div className="landing-page">
        <div className="image">
            <img src={heroImage} alt="heroImage" />
        </div>
        <div className="click-button">
            <span>10x Team 04</span>
            <div className="button">
                <button>
                    <Link to='/postview'>Enter</Link>
                </button>
            </div>
        </div>
    </div>
}

export default LandingPage