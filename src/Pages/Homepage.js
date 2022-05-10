import '../Styles/Style.css';
import header from '../Images/header.png';
import ScrollToTop from "react-scroll-to-top";
import reactjscss from '../Images/homepage/reactjscss.png';
import css from '../Images/homepage/css.png';
import nodejs from '../Images/homepage/nodejs.png';
import port from '../Images/homepage/port.png';



const Homepage = () => {
    return (
        <>
            <div>
                <img className="jumbotron-image" src={header} alt="cv"></img>
            </div>
            <div>
                <p className="lead">Full Stack Developer Intern</p>
            </div>
            <div className="container-fluid text-center mt-5">
                <h1 className="quote-text">“A journey of a thousand miles begins with a single step.”</h1>
            </div>
            <div className="row">
                <div className="col-6 offset-3">
                    <div className="jumbotron pt-2">
                        <h1 className="jumbotron-name pt-5 mt-5">Sean is</h1>
                        <h3 className="jumbotron-text">passionate about being a web developer someday, but due to unseen circumstances, I had to work in a call center before due to financial problems. Being a working student really drains me physically and mentally and it really slows me down on being the web developer I dreamt, but right now, being a full stack developer intern at TELUS makes it easier for me to pursue my dream being a developer.</h3>
                    </div>
                </div>
            </div>
            <div className="project-title text-center" data-aos="zoom-in-down">
                <h1>Project Samples</h1>
            </div>
            <div className="row">
                <div className="col" data-aos="fade-right">
                    <div className="card card-portfolio1">
                        <img className="card-img-top" src={ reactjscss } alt="weekend" />
                        <div className="card-body">
                            <h5 className="card-title">React JS CSS</h5>
                            <p className="card-text">This is my sample project wherein I used React, Bootstrap, JavaScript and CSS</p>
                            <a href="./Projects" className="nav-link" aria-current="page" class="btn btn-primary">Weekend Summary Sample</a>
                        </div>
                    </div>
                </div>
                <div className="col" data-aos="fade-up">
                    <div className="card card-portfolio1">
                        <img className="card-img-top" src={ css } alt="weekend" />
                        <div className="card-body">
                            <h5 className="card-title ">CSS Fundamentals</h5>
                            <p className="card-text ">In this project, I used the basics of CSS Fundamentals</p>
                            <a href="./Projects" className="nav-link" aria-current="page" class="btn btn-primary">CSS Fundamentals Sample</a>
                        </div>
                    </div>
                </div>
                <div className="col" data-aos="fade-up">
                    <div className="card card-portfolio1">
                        <img className="card-img-top" src={ nodejs } alt="weekend" />
                        <div className="card-body">
                            <h5 className="card-title ">NodeJS</h5>
                            <p className="card-text ">In this project, I used the basics of NodeJS to create a simple blog site</p>
                            <a href="./Projects" className="nav-link" aria-current="page" class="btn btn-primary">NodeJS Sample</a>
                        </div>
                    </div>
                </div>
                <div className="col" data-aos="fade-left">
                    <div className="card card-portfolio1">
                        <img className="card-img-top" src={ port } alt="weekend" />
                        <div className="card-body">
                            <h5 className="card-title ">Portfolio</h5>
                            <p className="card-text ">This is the current project that I've created which you can navigate all throughout the contents.</p>
                            <a href="./Projects" className="nav-link" aria-current="page" class="btn btn-primary">Portfolio Sample</a>
                        </div>
                    </div>
                </div>
            </div>
            <ScrollToTop
                smooth
                viewBox="0 0 24 24"
                svgPath="M9 19c-4.286 1.35-4.286-2.55-6-3m12 5v-3.5c0-1 .099-1.405-.5-2 2.791-.3 5.5-1.366 5.5-6.04a4.567 4.567 0 0 0 -1.333 -3.21 4.192 4.192 0 00-.08-3.227s-1.05-.3-3.476 1.267a12.334 12.334 0 0 0 -6.222 0C6.462 2.723 5.413 3.023 5.413 3.023a4.192 4.192 0 0 0 -.08 3.227A4.566 4.566 0 004 9.486c0 4.64 2.709 5.68 5.5 6.014-.591.589-.56 1.183-.5 2V21"
            />

        </>
    )
}
export default Homepage;