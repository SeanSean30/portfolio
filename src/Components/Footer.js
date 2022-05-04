import React from 'react'
import '../Styles/Style.css';

const Footer = () => {
    return (
        <>
            <footer className="page-footer font-small cyan darken-3 pb-4 pt-4 sticky-bottom">
                <div className="footer-copyright text-center">
                    <div className="col-icons">
                        <a className="fb" href="https://www.facebook.com/Tusheeeeey" target="_blank">
                            <i className="fa-brands fa-facebook-f ml-4"></i>
                        </a>
                        <a className="instagram" href="https://www.instagram.com/seancoleee/" target="_blank">
                            <i className="fa-brands fa-instagram ml-4"></i>
                        </a>
                        <a className="github" href="https://github.com/SeanSean30" target="_blank">
                            <i className="fa-brands fa-github ml-4"></i>
                        </a>
                        <a className="gmail" href="https://mail.google.com/mail/u/0/#inbox/WhctKKXPhlSjkHCknmGwMpqxBJbGRBlVmzGFCQshmkGrxsmBQQHkVbkFFZmHdVKsGzBPfbG?compose=new" target="_blank">
                            <i className="fa-solid fa-at ml-4"></i>
                        </a>
                        <a className="linkedin" href="https://www.linkedin.com/in/sean-touchette-637736237/" target="_blank">
                            <i class="fa-brands fa-linkedin ml-4 mr-3"></i>
                        </a>
                        <span className="text mr-2"> | </span>
                        <span className="text mr-2"> Sean Touchette </span>
                    </div>
                </div>
            </footer>
        </>
    )
}
export default Footer;