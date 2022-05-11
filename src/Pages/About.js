import sean from '../Images/sean.png';
import first from '../Images/MOAS PIC/first.jpg';
import second from '../Images/MOAS PIC/second.jpg';
import third from '../Images/MOAS PIC/third.jpg';
import fourth from '../Images/MOAS PIC/fourth.jpg';
import fifth from '../Images/MOAS PIC/fifth.jpg';
import sixth from '../Images/MOAS PIC/sixth.jpg';
import seventh from '../Images/MOAS PIC/seventh.jpg';
import eighth from '../Images/MOAS PIC/eighth.jpg';
import nineth from '../Images/MOAS PIC/nineth.jpg';
import tenth from '../Images/MOAS PIC/tenth.jpg';
import eleventh from '../Images/MOAS PIC/eleventh.jpg';
import ScrollToTop from "react-scroll-to-top";
import html from '../Images/skills/html.png';
import css from '../Images/skills/css.png';
import js from '../Images/skills/js.png';
import bootstrap from '../Images/skills/bootstrap.png';
import mongodb from '../Images/skills/mongodb.png';
import java from '../Images/skills/java.png';
import react from '../Images/skills/react.png';
import node from '../Images/skills/node.png';

const About = () => {

    return (
        <>
            <img className="sean-sitting mb-0" src={sean} />
            <article className="article mb-5">
                <div className="accordion-open accordion-flush" id="accordionFlushExample">
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="flush-headingOne">
                            <button className="accordion-button1 collapsed" type="button" data-toggle="collapse" data-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                ABOUT SEAN
                            </button>
                        </h2>
                        <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-parent="#accordionFlushExample">
                            <div className="accordion-body">
                                <div className="card-1 card text-white mb-3">
                                    <div className="card-body cb-1">

                                        <div className="about-text ml-5 mr-5 mt-3">
                                            <h2 className="info-text">Hi! I'm <a className="sean-info" href="https://www.facebook.com/Tusheeeeey" target="_blank">Sean Cole P. Touchette</a>, 22 years old, taking Bachelor of Science in Information Technology at <a className="UE" href="https://www.ue.edu.ph/mla/" target="_blank">University of the East Manila.</a> I'm currently an intern at <a className="telus" href="https://www.telusinternational.com/" target="_blank">TELUS International Philippines</a> as a Full Stack Developer. I've been an intern for quite a while now and I've learned a lot, but am still in the process to solidify my programming skills.</h2><br />
                                            <h2 className="info-text">That doesn't stop there, outside work and school, I'm also a member of <a className="sean-info" href="https://www.facebook.com/aranzazualtarservers" target="_blank">Ministry of Altar Server</a> for almost 12 years now. Since I was a kid, I've been in the organization which became my second home and my second family. You can see some pictures from the time that I became part of the organization up until present.</h2>
                                        </div>
                                        <button type="button" className="btn btn-primary ml-5 mt-3" data-toggle="modal" data-target="#exampleModalCenter">
                                            MOAS Pictures
                                        </button>
                                        <div className="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                                            <div className="modal-dialog modal-dialog-centered" role="document">
                                                <div className="modal-content">
                                                    <div className="modal-header">
                                                        <h5 className="modal-title" id="exampleModalLongTitle">2010th-Present</h5>
                                                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                                            <span aria-hidden="true">&times;</span>
                                                        </button>
                                                    </div>
                                                    <div className="modal-body">
                                                        <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                                                            <ol className="carousel-indicators">
                                                                <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                                                                <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                                                                <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                                                                <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
                                                                <li data-target="#carouselExampleIndicators" data-slide-to="4"></li>
                                                                <li data-target="#carouselExampleIndicators" data-slide-to="5"></li>
                                                                <li data-target="#carouselExampleIndicators" data-slide-to="6"></li>
                                                                <li data-target="#carouselExampleIndicators" data-slide-to="7"></li>
                                                                <li data-target="#carouselExampleIndicators" data-slide-to="8"></li>
                                                                <li data-target="#carouselExampleIndicators" data-slide-to="9"></li>
                                                                <li data-target="#carouselExampleIndicators" data-slide-to="10"></li>
                                                            </ol>
                                                            <div class="carousel-inner">
                                                                <div class="carousel-item active">
                                                                    <img className="d-block w-100" src={first} alt="First slide" />
                                                                </div>
                                                                <div class="carousel-item">
                                                                    <img className="d-block w-100" src={second} alt="Second slide" />
                                                                </div>
                                                                <div class="carousel-item">
                                                                    <img className="d-block w-100" src={third} alt="Third slide" />
                                                                </div>
                                                                <div class="carousel-item">
                                                                    <img className="d-block w-100" src={fourth} alt="Third slide" />
                                                                </div>
                                                                <div class="carousel-item">
                                                                    <img className="d-block w-100" src={fifth} alt="Third slide" />
                                                                </div>
                                                                <div class="carousel-item">
                                                                    <img className="d-block w-100" src={sixth} alt="Third slide" />
                                                                </div>
                                                                <div class="carousel-item">
                                                                    <img className="d-block w-100" src={seventh} alt="Third slide" />
                                                                </div>
                                                                <div class="carousel-item">
                                                                    <img className="d-block w-100" src={eighth} alt="Third slide" />
                                                                </div>
                                                                <div class="carousel-item">
                                                                    <img className="d-block w-100" src={nineth} alt="Third slide" />
                                                                </div>
                                                                <div class="carousel-item">
                                                                    <img className="d-block w-100" src={tenth} alt="Third slide" />
                                                                </div>
                                                                <div class="carousel-item">
                                                                    <img className="d-block w-100" src={eleventh} alt="Third slide" />
                                                                </div>
                                                            </div>
                                                            <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                                                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                                                <span className="sr-only">Previous</span>
                                                            </a>
                                                            <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                                                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                                                <span className="sr-only">Next</span>
                                                            </a>
                                                        </div>
                                                    </div>
                                                    <div className="modal-footer">
                                                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="flush-headingTwo">
                            <button class="accordion-button2 collapsed" type="button" data-toggle="collapse" data-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                                SEAN'S HOBBIES
                            </button>
                        </h2>
                        <div id="flush-collapseTwo" class="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-parent="#accordionFlushExample">
                            <div className="accordion-body">
                                <div className="card-2 card text-white mb-3">
                                    <div className="card-body cb-2">

                                        <div className="hobbies-text ml-5 mr-5 mt-3">
                                            <h2 className="info-text">I actually have some hobbies, playing basketball, playing computer games like <a className="valorant" href="https://playvalorant.com/en-us/" target="_blank">Valorant</a>,<a className="dota2" href="https://www.dota2.com/home" target="_blank"> Dota 2</a> and <a className="axie" href="https://axieinfinity.com/" target="_blank"> Axie Infinity</a>. I'm not just playing them, I actually streams sometimes when I want to interact with my friends and to my community but I only stream when I feel like it.</h2><br />
                                            <h2 className="info-text">I also love riding my motorcycle, It actually belongs to my dad but since he's an OFW, I'm the one who's using it and taking care of it. Her name was Vee since her model was <a className="vega" href="https://www.yamaha-motor.com.ph/product/vegaforcei/vegaforce-i.html" target="_blank">Vega Force i</a>. She's taken me to some beautiful places and gave the peace of mind that I've been wanting to. </h2>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="flush-headingThree">
                            <button className="accordion-button3 collapsed" type="button" data-toggle="collapse" data-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                                SEAN'S ASPIRATIONS
                            </button>
                        </h2>
                        <div id="flush-collapseThree" className="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                            <div className="accordion-body">
                                <div className="card-3 card text-white mb-3">
                                    <div className="card-body cb-3">

                                        <div className="aspirations-text">
                                            <h2 className="info-text mt-3">When I was a kid,looking at the stars at night really amaze me. It makes me wonder what else is there. Do I just see the stars? Do they move? Where are they exactly located? I really have so many things on my mind back then. I actually aspired to be an astronaut when I was a kid. As time passes by, I decided that I wanted to be a pilot instead. I don't know why I feel so calm and so attached to the sky It's like it was my happy pill.</h2><br /> 
                                            <h2 className="info-text">When I entered college, I actually didn't know what course should I take, I'm still undecided on what to do until I became an IT student and pursue being a Web Developer someday and right now I am a full stack developer which was the correct path on pursuing my dream. I learned that, <i>"Sometimes, the thing we always wanted, doesn't end up exactly what we want to be."</i> </h2>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="career mt-5 mb-5">
                    <h1><i>Career </i><i className="career-highlights">Highlights</i></h1>
                </div>
                <div className="row">
                    <div className="col">
                        <div className="card">
                            <div className="career-body card-body">
                                <h1 className="card-title">Sales Agent Representative</h1>
                                <h3 className="card-text">Sykes Asia INC, Mandaluyong City</h3>
                                <h3 className="card-text">December 2017 - March 2018</h3>
                                <h5>I've been a sales agent representative for a few months which really helps me to build my confidence talking to people especially to different nationalities. After some time, I realized that being a sales representative was not really for me so I was transferred in being a customer service representative.</h5>
                            </div>
                        </div>
                    <div classNameName="col">
                        <div className="card">
                            <div className="career-body card-body">
                                <h1 className="card-title">Customer Service Representative</h1>
                                <h3 className="card-text">Sykes Asia INC, Makati City</h3>
                                <h3 className="card-text">March 2018 - August 2021</h3>
                                <h5>After being transferred to CSR, at first I was shocked as most of my calls were complaints and most of the customers are angry. It took me some time to realize that you really need to build a connection to people to understand why they behave that way. By doing that, It also improves my communication skills. Without that kind of path, I don't see myself the person that I am today.</h5>
                            </div>
                        </div>
                    </div>
                    <div classNameName="col">
                        <div className="card">
                            <div className="career-body card-body ">
                                <h1 className="card-title">Full Stack Developer Intern</h1>
                                <h3 className="card-text">TELUS International Philippines, Pasig City</h3>
                                <h3 className="card-text">February 2022 - Present</h3>
                                <h5>This is actually my first job to the IT industry, I considered this a job as it prepares us for the obstacles that we are about to tackle in our future. I've been in the BPO industry for quite a while and being here really makes me happy as the path leads to my dream being a developer. My weakness is coding and I really want to overcome my weakness I also believe that <i>"What doesn't kill you, makes you stronger"</i>. So I'm pusing myself to overcome the weakness that I have.</h5>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="skills">
                    <h1 className="skills-text mt-5 mb-5"><b className="s">S</b><b className="k">K</b><b className="i">I</b><b className="l">L</b><b className="l1">L</b><b className="s1">S</b></h1>
                    <div className="row row-skills1">
                        <div className="col col-skills1" data-aos="fade-right">
                            <div className="card card-about">
                                <img className="card-img-top" src={html} alt="Card image cap" />
                                <div className="card-body">
                                </div>
                            </div>
                        </div>
                        <div className="col col-skills2" data-aos="zoom-in">
                            <div className="card card-about">
                                <img className="card-img-top" src={css} alt="Card image cap" />
                                <div className="card-body">
                                </div>
                            </div>
                        </div>
                        <div className="col col-skills3" data-aos="zoom-in">
                            <div className="card card-about">
                                <img className="card-img-top" src={js} alt="Card image cap" />
                                <div className="card-body">
                                </div>
                            </div>
                        </div>
                        <div className="col col-skills4" data-aos="fade-left">
                            <div className="card card-about">
                                <img className="card-img-top" src={bootstrap} alt="Card image cap" />
                                <div className="card-body">
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row row-skills2">
                        <div className="col col-skills5" data-aos="fade-right">
                            <div className="card card-about">
                                <img className="card-img-top" src={mongodb} alt="Card image cap" />
                                <div className="card-body">
                                </div>
                            </div></div>
                        <div className="col col-skills6" data-aos="zoom-in">
                            <div className="card card-about">
                                <img className="card-img-top" src={java} alt="Card image cap" />
                                <div className="card-body">
                                </div>
                            </div></div>
                        <div className="col col-skills7" data-aos="zoom-in">
                            <div className="card card-about">
                                <img className="card-img-top" src={react} alt="Card image cap" />
                                <div className="card-body">
                                </div>
                            </div>
                        </div>
                        <div className="col col-skills8" data-aos="fade-left">
                            <div className="card card-about">
                                <img className="card-img-top" src={node} alt="Card image cap" />
                                <div className="card-body">
                                </div>
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
            </article>

        </>
    )
}
export default About;