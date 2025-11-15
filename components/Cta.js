"use client";
import Link from "next/link";

const Cta = ({ sectionPadding = false }) => {
  return (
    <section
      className={`cta-marketing-section fix ${
        sectionPadding ? "section-padding" : ""
      }`}
    >
      <div className="container">
        <div className="cta-marketing-wrapper">
          <div className="content">
            <h2 className="text-white wow fadeInUp" data-wow-delay=".3s" style={{fontSize: '1.5rem', lineHeight: '1.2', marginBottom: '0.8rem'}}>
              Ready to Upgrade Your Workspace Setup?
            </h2>
            <p className="text-white wow fadeInUp" data-wow-delay=".5s" style={{fontSize: '0.85rem', marginBottom: '1rem'}}>
              Get in touch for bulk orders, dealer partnerships, or custom solutions. Transform your workspace with Indalio today.
            </p>
            <div className="cta-buttons mt-2 d-flex flex-wrap gap-2">
              <Link
                href="contact"
                className="theme-btn bg-white wow fadeInUp"
                data-wow-delay=".5s"
                style={{padding: '10px 20px', fontSize: '0.9rem'}}
              >
                Request Quote <i className="far fa-arrow-right" />
              </Link>
              <Link
                href="tel:+919988092664"
                className="theme-btn white-border wow fadeInUp"
                data-wow-delay=".6s"
                style={{padding: '10px 20px', fontSize: '0.9rem'}}
              >
                Call: 9988092664 <i className="far fa-phone" />
              </Link>
              <button
                className="theme-btn white-border wow fadeInUp"
                data-wow-delay=".7s"
                onClick={() => window.open('#', '_blank')}
                style={{padding: '10px 20px', fontSize: '0.9rem'}}
              >
                Download Catalog <i className="far fa-download" />
              </button>
            </div>
          </div>
          <div className="thumb wow fadeInUp" data-wow-delay=".6s">
            <img src="assets/img/cta/cta-marketing.png" alt="img" />
            <div className="circle-shape">
              <img src="assets/img/cta/circle-shape.png" alt="shape-img" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Cta;
