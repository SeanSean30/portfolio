import '../Styles/Style.css';
import Gmail from '../Images/Gmail.png';
import Info from '../Images/Info.png';
import Call from '../Images/Call.png';
import emailjs from "emailjs-com";

const Contact = () => {
    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm('service_26z7qpt', 'template_2gzdfz9', e.target, 'WR7AqON6nK3W9tb2n')
            .then((result) => {
                console.log(result.text);
                alert("Thank you for filling up the form, you can also send me a personal email or you can contact me on the number provided.");
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset()
    }
    return (
        <>
            <div class="contact-jumbotron jumbotron jumbotron-fluid">
                <div class="container">
                    <h1 class="display-4">Contact me</h1>
                    <p class="lead-2">If you have any questions, comments or suggestions, feel free to contact me using the form below. Thank you!</p>
                </div>
            </div>
            <div className="contact-row row mb-5 pb-5">
                <div className="contact-col1 col d-flex justify-content-end">
                    <form onSubmit={sendEmail}>
                        <div className="contact-form ml-5">
                            <div className="form-group col-lg-5">
                                <label for="input" className="input-text">Name *</label>
                                <input type="text" className="name" id="name" name="name" placeholder="Name" required />
                            </div>
                            <div className="form-group col-lg-5">
                                <label for="input" className="input-text">Email *</label>
                                <input type="text" className="email" id="email" name="email" placeholder="Email" required />
                            </div>
                            <div className="form-group col-lg-5">
                                <label for="input" className="input-text">Subject *</label>
                                <input type="text" className="subject" id="subject" name="subject" placeholder="Subject" required />
                            </div>
                            <div className="form-group col-lg-5">
                                <label for="input" className="input-text">Message</label>
                                <textarea type="text" className="message" id="message" name="message" placeholder="Message" />
                                <button type="submit" className="btn btn-primary mt-3 mb-5">Submit

                                </button>
                            </div>
                        </div>
                    </form>
                </div>
                <div className="contact-col2 col">
                    <div className="contact-items">
                        <div className="contact-details text-center mt-4 mb-4">
                            <img src={Call} alt="" />
                            <div>
                                <span className="contact-text">Call: 0961-229-2992</span>
                            </div>
                        </div>
                        <div className="phone-number text-center mt-4 mb-4">
                            <img  src={Gmail} alt="" />
                            <div>
                                <span className="contact-text">Email: seancole029@gmail.com</span>
                            </div>
                        </div>
                        <div className="phone-number text-center mt-4 mb-4">
                            <img  src={Info} alt="" />
                            <div className="icons mt-3">
                                <a className="fb" href="https://www.facebook.com/Tusheeeeey" target="_blank">
                                    <i className="fa-brands fa-facebook-f ml-4"></i>
                                </a>
                                <a className="instagram" href="https://www.instagram.com/seancoleee/" target="_blank">
                                    <i className="fa-brands fa-instagram ml-4"></i>
                                </a>
                                <a className="linkedin" href="https://www.linkedin.com/in/sean-touchette-637736237/" target="_blank">
                                    <i class="fa-brands fa-linkedin ml-4 mr-3"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        </>
    )
}
export default Contact;