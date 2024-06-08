
const Footer = () => {
    return (
        <footer className="footer px-20 py-20 bg-black text-base-content">
            <nav className="text-white">              
                <h6 className="footer-title">Services</h6>
                <a className="link link-hover">About Us</a>
                <a className="link link-hover">Career</a>
                <a className="link link-hover">Editorial Team</a>
                <a className="link link-hover">Protection</a>
            </nav>
            <nav className="text-white">
                <h6 className="footer-title">Terms & Condition</h6>
                <a className="link link-hover">Privacy</a>
                <a className="link link-hover">Advertise</a>
                <a className="link link-hover">Jobs</a>
                <a className="link link-hover">Join as Doctors</a>
            </nav>
            <nav className="text-white">
                <h6 className="footer-title">Legal</h6>
                <a className="link link-hover">Terms of use</a>
                <a className="link link-hover">Privacy policy</a>
                <a className="link link-hover">Cookie policy</a>
            </nav>
            <form className="text-white">
                <h6 className="footer-title">Newsletter</h6>
                <fieldset className="form-control w-80">
                    <label className="label">
                        <span className="label-text text-white">Enter your email address</span>
                    </label>
                    <div className="join">
                        <input type="text" placeholder="username@site.com" className="input input-bordered join-item"/>
                        <button className="btn btn-primary join-item">Subscribe</button>
                    </div>
                </fieldset>
            </form>
        </footer>

    );
};

export default Footer;