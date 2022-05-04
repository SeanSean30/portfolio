import react1 from '../Images/Projects/react1.PNG';
import react2 from '../Images/Projects/react2.PNG';
import react3 from '../Images/Projects/react3.PNG';
import css1 from '../Images/Projects/css1.PNG';
import css2 from '../Images/Projects/css2.PNG';
import css3 from '../Images/Projects/css3.PNG';
import ScrollToTop from "react-scroll-to-top";


const Projects = () => {
    return (
        <>
            <div className="row justify-content-center">
                <div class="col-6 col-md-4">
                    <div className="card-react text-center">
                        <div className="card-header">
                            React JS CSS
                        </div>
                        <div className="card-body">
                            <h3 className="card-text-react pt-3">For my React project, I created as simple website that narrates what I did during my weekend. It consists of 3 pages which is the homepage, saturday and sunday page. The tools that I've used is React, Bootstrap, Javascript and CSS.</h3>
                            <h3 className="card-text-react pt-3">Here is the sample screenshot of the project I created.</h3>
                            <div id="carousel-1" className="carousel slide mt-5" data-ride="carousel">
                                <ol className="carousel-indicators">
                                    <li data-target="#carousel-1" data-slide-to="0" className="active"></li>
                                    <li data-target="#carousel-1" data-slide-to="1"></li>
                                    <li data-target="#carousel-1" data-slide-to="2"></li>
                                </ol>
                                <div className="carousel-inner">
                                    <div className="carousel-item active">
                                        <img className="d-block w-100" src={react1} alt="First slide" />
                                    </div>
                                    <div className="carousel-item">
                                        <img className="d-block w-100" src={react2} alt="Second slide" />
                                    </div>
                                    <div className="carousel-item">
                                        <img className="d-block w-100" src={react3} alt="Third slide" />
                                    </div>
                                </div>
                                <a className="carousel-control-prev" href="#carousel-1" role="button" data-slide="prev">
                                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span className="sr-only">Previous</span>
                                </a>
                                <a className="carousel-control-next" href="#carousel-1" role="button" data-slide="next">
                                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span className="sr-only">Next</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row justify-content-center pt-5">
                <div class="col-6 col-md-4">
                    <div className="card-css text-center">
                        <div className="card-header">
                            CSS Fundamentals
                        </div>
                        <div className="card-body">
                            <h3 className="card-css-text pt-3">For my CSS Fundamentals project, I created a simple website that narrates what I did during my weekend. It consists of basics HTML semantics which allows us to be familiarize on the basics structure of creating a simple website. The tools that I've used was HTML and CSS</h3>
                            <h3 className="card-css-text pt-3">Here is the sample screenshot of the project I created.</h3>
                            <div id="carousel-2" className="carousel slide mt-5" data-ride="carousel">
                                <ol className="carousel-indicators">
                                    <li data-target="#carousel-2" data-slide-to="0" className="active"></li>
                                    <li data-target="#carousel-2" data-slide-to="1"></li>
                                    <li data-target="#carousel-2" data-slide-to="2"></li>
                                </ol>
                                <div className="carousel-inner">
                                    <div className="carousel-item active">
                                        <img className="d-block w-100" src={css1} alt="First slide" />
                                    </div>
                                    <div className="carousel-item">
                                        <img className="d-block w-100" src={css2} alt="Second slide" />
                                    </div>
                                    <div className="carousel-item">
                                        <img className="d-block w-100" src={css3} alt="Third slide" />
                                    </div>
                                </div>
                                <a className="carousel-control-prev" href="#carousel-2" role="button" data-slide="prev">
                                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span className="sr-only">Previous</span>
                                </a>
                                <a className="carousel-control-next" href="#carousel-2" role="button" data-slide="next">
                                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span className="sr-only">Next</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row justify-content-center pt-5">
                <div className="col-6 col-md-4">
                    <div className="card-node text-center">
                        <div className="card-header">
                            NodeJS
                        </div>
                        <div className="card-body">
                        <h3 className="card-node-text pt-3">For my NodeJS project, I created a simple blog site that can create, read, update and delete some data</h3>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row justify-content-center pt-5 mb-5">
                <div className="col-6 col-md-4">
                    <div className="card-portfolio text-center">
                        <div className="card-header">
                            Portfolio
                        </div>
                        <div className="card-body">
                        <h3 className="card-portfolio-text pt-3">For my Porfolio project, this is the project that I've created which you can see the contents and the pages. The tools that I've used in this project are React, Bootstrap, Javascript, HTML and CSS. </h3>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <ScrollToTop
                    smooth
                    viewBox="0 0 24 24"
                    svgPath="M9 19c-4.286 1.35-4.286-2.55-6-3m12 5v-3.5c0-1 .099-1.405-.5-2 2.791-.3 5.5-1.366 5.5-6.04a4.567 4.567 0 0 0 -1.333 -3.21 4.192 4.192 0 00-.08-3.227s-1.05-.3-3.476 1.267a12.334 12.334 0 0 0 -6.222 0C6.462 2.723 5.413 3.023 5.413 3.023a4.192 4.192 0 0 0 -.08 3.227A4.566 4.566 0 004 9.486c0 4.64 2.709 5.68 5.5 6.014-.591.589-.56 1.183-.5 2V21"
                />
            </div>
        </>
    )
}
export default Projects;