import '../Styles/Style.css';

const Homepage = () => {
    return (
        <>
            <div className="row pt-5">
                <div className="col" data-flip-key="photo-1">
                    <img className="jumbotron-image offset-7" src="https://scontent.fmnl9-2.fna.fbcdn.net/v/t39.30808-6/261290155_4920607164651272_1130504226740339462_n.jpg?_nc_cat=103&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=lLlz988dELIAX-UFCMa&_nc_ht=scontent.fmnl9-2.fna&oh=00_AT8Dgu-dY3MEuy8JrxlK_e2qohr2i2JvWal-OM3095OZCw&oe=623CDC23" alt="CV" />
                </div>
                <div className="col">
                    <div className="jumbotron pt-1">
                        <h1 className="jumbotron-name1">Sean Cole</h1>
                        <h1 className="jumbotron-name1">Touchette</h1>
                        <p className="lead">Full Stack Developer Intern</p>
                    </div>
                </div>
            </div>
            <div className="container-fluid text-center mt-5">
                <h1 className="quote-text mb-5 p">“A journey of a thousand miles begins with a single step.”</h1>
            </div>
            <div className="row pt-5">
                <div className="col-6 offset-3">
                    <div className="jumbotron pt-2">
                        <h1 className="jumbotron-name pt-5 mt-5">Sean is</h1>
                        <h3 className="jumbotron-text">passionate about being a web developer someday, but due to unseen circumstances, I had to work in a call center before due to financial problems. Being a working student really drains me physically and mentally and it really slows me down on being the web developer I dreamt, but right now, being a full stack developer intern at Telus makes it easier for me to pursue my dream being a developer.</h3>
                    </div>
                </div>
            </div>
            <div className="portfolio-title text-center" data-aos="flip-up">
                <h1>Portfolio Sample</h1>
            </div>
            <div className="row">
                <div className="col" data-aos="fade-right">
                    <div class="card card-portfolio1 offset-7 mt-5 mb-5" style={{ width: "40%" }}>
                        <img className="card-img-top" src="https://www.wishesmsg.com/wp-content/uploads/Happy-Weekend-Images.jpg" alt="weekend" />
                        <div className="card-body">
                            <h5 className="card-title">React JS CSS</h5>
                            <p className="card-text">This is my sample project wherein I used React Bootstrap, JavaScript and CSS</p>
                            <a href="/Projects" className="nav-link" aria-current="page" class="btn btn-primary">Weekend Summary Sample</a>
                        </div>
                    </div>
                </div>
                <div className="col" data-aos="fade-left">
                    <div class="card card-portfolio1 ml-5 mt-5 mb-5" style={{ width: "40%" }}>
                        <img className="card-img-top" src="https://www.wishesmsg.com/wp-content/uploads/Happy-Weekend-Images.jpg" alt="weekend" />
                        <div className="card-body">
                            <h5 className="card-title ">CSS Fundamentals</h5>
                            <p className="card-text ">In this project, I used the basic CSS Fundamentals</p>
                            <a href="/Projects" className="nav-link" aria-current="page" class="btn btn-primary">CSS Fundamentals Sample</a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Homepage;