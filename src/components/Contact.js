import { FaPhoneAlt, FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";
const Contact = () => {
    return (
       <section id="contact">
            <h2 className="text-2xl font-bold mb-4">Contact</h2>
            <div className="contact-section">
                <a
                    className="contact-item contact-btn"
                    href="tel:+971559706878"
                >
                    <FaPhoneAlt className="contact-icon" />
                    <span className="contact-value">+971 559706878</span>
                </a>
                <a
                    className="contact-item contact-btn"
                    href="mailto:rachelandrade592@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <FaEnvelope className="contact-icon" />
                    <span className="contact-value">rachelandrade592@gmail.com</span>
                </a>
                <a
                    className="contact-item contact-btn"
                    href="https://www.linkedin.com/in/rachel-andrade-a29a3376"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <FaLinkedin className="contact-icon" />
                    <span className="contact-value">/rachel-prima-andrade</span>
                </a>
                  <a
                    className="contact-item contact-btn"
                    href="https://github.com/rachelandrade"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <FaGithub className="contact-icon" />
                    <span className="contact-value">github.com/rachelandrade</span>
                </a>
            </div>
        </section>
    );
};

export default Contact;