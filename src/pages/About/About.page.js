import About from "../../components/About/About.component"
import './About.style.css';

const AboutPage = () => {
    return (
        <div style={{ backgroundColor: "#266382", height: "100vh" }}>
            <div className="about-container">
            <About />
            </div>
        </div>
    )
}

export default AboutPage;