"use client";
import { useState } from "react";
import Breadcrumb from "@/components/Breadcrumb";
import NextLayout from "@/layouts/NextLayout";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    inquiry_type: '',
    quantity: '',
    message: ''
  });
  const [submitStatus, setSubmitStatus] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitStatus('sending');
    
    // Simulate form submission - Replace with actual API call
    setTimeout(() => {
      console.log('Form Data:', formData);
      alert('Thank you! Your quote request has been received. We will contact you shortly.');
      setSubmitStatus('success');
      // Reset form
      setFormData({
        name: '',
        phone: '',
        email: '',
        inquiry_type: '',
        quantity: '',
        message: ''
      });
      setTimeout(() => setSubmitStatus(''), 3000);
    }, 1000);
  };

  const scrollToForm = () => {
    document.getElementById('contact-form')?.scrollIntoView({behavior: 'smooth'});
  };

  return (
    <NextLayout>
      <Breadcrumb pageName="Contact Us" />
      {/* Contact Section Section Start */}
      <section className="contact-section section-padding">
        <div className="container">
          <div className="contact-wrapper">
            <div className="row g-4">
              <div className="col-lg-6">
                <div className="contact-content">
                  <div className="section-title">
                    <span className="sub-content wow fadeInUp">
                      <img src="assets/img/bale.png" alt="img" />
                      Get In Touch
                    </span>
                    <h2 className="wow fadeInUp" data-wow-delay=".3s">
                      Contact Us for Bulk Orders <br />
                      & Dealer Partnerships
                    </h2>
                  </div>
                  <p className="mt-3 mt-md-0 wow fadeInUp" data-wow-delay=".5s">
                    Whether you need corporate bulk orders, dealer partnerships, or custom <br />
                    solutions, our team is here to help. Reach out today!
                  </p>
                  <ul
                    className="contact-list wow fadeInUp"
                    data-wow-delay=".3s"
                  >
                    <li>
                      <strong>Sales & Bulk Orders:</strong> <a href="tel:+919988092664">+91 9988092664</a> / <a href="tel:+917517500024">7517500024</a>
                    </li>
                    <li>
                      <strong>Dealer & Distributor:</strong> <a href="tel:+917317300024">+91 7317300024</a> (Namanpreet Kaur)
                    </li>
                    <li>
                      <strong>Address:</strong> Jaspal Bangar, Ind Area C, Ludhiana 141122
                    </li>
                    <li>
                      <strong>Website:</strong> <a href="https://www.indalio.com" target="_blank" rel="noopener noreferrer">www.indalio.com</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-6">
                <div
                  className="contact-right wow fadeInUp"
                  data-wow-delay=".4s"
                >
                  <h3>Request a Quote</h3>
                  <form
                    onSubmit={handleSubmit}
                    id="contact-form"
                    className="contact-form-items"
                  >
                    <div className="row g-4">
                      <div className="col-lg-6">
                        <div className="form-clt">
                          <input
                            type="text"
                            name="name"
                            id="name"
                            placeholder="Full Name / Company Name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                          />
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="form-clt">
                          <input
                            type="tel"
                            name="phone"
                            id="phone"
                            placeholder="Phone Number"
                            value={formData.phone}
                            onChange={handleChange}
                            required
                          />
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="form-clt">
                          <input
                            type="email"
                            name="email"
                            id="email2"
                            placeholder="Your Email Address"
                            value={formData.email}
                            onChange={handleChange}
                            required
                          />
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="form-clt">
                          <select 
                            name="inquiry_type" 
                            id="inquiry_type" 
                            style={{width: '100%', padding: '15px', border: '1px solid #e0e0e0', borderRadius: '5px'}} 
                            value={formData.inquiry_type} 
                            onChange={handleChange} 
                            required
                          >
                            <option value="">Select Inquiry Type</option>
                            <option value="bulk-order">Bulk / Corporate Order</option>
                            <option value="oem-partnership">OEM / Furniture Manufacturer Partnership</option>
                            <option value="dealer">Become a Dealer / Distributor</option>
                            <option value="custom">Custom Solutions</option>
                            <option value="general">General Inquiry</option>
                          </select>
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="form-clt">
                          <input
                            type="text"
                            name="quantity"
                            id="quantity"
                            placeholder="Estimated Quantity (if applicable)"
                            value={formData.quantity}
                            onChange={handleChange}
                          />
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="form-clt">
                          <textarea
                            name="message"
                            id="message"
                            placeholder="Your Requirements / Message"
                            value={formData.message}
                            onChange={handleChange}
                            rows={4}
                            required
                          />
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <button type="submit" className="theme-btn" disabled={submitStatus === 'sending'}>
                          {submitStatus === 'sending' ? 'Sending...' : submitStatus === 'success' ? 'Sent Successfully!' : 'Submit Quote Request'} <i className="far fa-arrow-right" />
                        </button>
                        {submitStatus === 'success' && (
                          <p style={{color: 'green', marginTop: '10px', fontWeight: 'bold'}}>Thank you! We'll contact you shortly.</p>
                        )}
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Quick Actions Section Start */}
      <section className="quick-actions-section fix section-padding pt-0">
        <div className="container">
          <div className="section-title text-center mb-5">
            <span className="sub-content wow fadeInUp">
              <img src="assets/img/bale.png" alt="img" />
              Quick Actions
            </span>
            <h2 className="wow fadeInUp" data-wow-delay=".3s">
              Choose Your Preferred Way to Connect
            </h2>
          </div>
          <div className="row g-4">
            <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay=".3s">
              <div className="action-card text-center" style={{background: '#f8f9fa', padding: '30px', borderRadius: '10px', height: '100%'}}>
                <div className="icon mb-3">
                  <i className="fas fa-shopping-cart" style={{fontSize: '48px', color: '#667eea'}} />
                </div>
                <h4>Bulk Orders</h4>
                <p className="mb-3">Corporate offices, IT companies, traders</p>
                <a href="tel:+919988092664" className="theme-btn" style={{fontSize: '14px'}}>
                  Call Sales Team
                </a>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay=".4s">
              <div className="action-card text-center" style={{background: '#f8f9fa', padding: '30px', borderRadius: '10px', height: '100%'}}>
                <div className="icon mb-3">
                  <i className="fas fa-handshake" style={{fontSize: '48px', color: '#764ba2'}} />
                </div>
                <h4>OEM Partnership</h4>
                <p className="mb-3">Furniture manufacturers & dealers</p>
                <a href="tel:+917317300024" className="theme-btn" style={{fontSize: '14px'}}>
                  Contact Partnerships
                </a>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay=".5s">
              <div className="action-card text-center" style={{background: '#f8f9fa', padding: '30px', borderRadius: '10px', height: '100%'}}>
                <div className="icon mb-3">
                  <i className="fas fa-file-invoice" style={{fontSize: '48px', color: '#667eea'}} />
                </div>
                <h4>Request Quote</h4>
                <p className="mb-3">Get custom pricing for your needs</p>
                <button 
                  type="button"
                  className="theme-btn" 
                  style={{fontSize: '14px'}}
                  onClick={scrollToForm}
                >
                  Fill Quote Form
                </button>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay=".6s">
              <div className="action-card text-center" style={{background: '#f8f9fa', padding: '30px', borderRadius: '10px', height: '100%'}}>
                <div className="icon mb-3">
                  <i className="fas fa-download" style={{fontSize: '48px', color: '#764ba2'}} />
                </div>
                <h4>Download Catalog</h4>
                <p className="mb-3">Product specs & pricing info</p>
                <button type="button" className="theme-btn" style={{fontSize: '14px'}}>
                  Get Catalog
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Map Section Start */}
      <div className="map-section">
        <div className="map-items">
          <div className="googpemap">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.6764647474754!2d144.9537353156738!3d-37.81752797975143!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d4c2b349649%3A0xb6899234e561db11!2s55%20Main%20St%2C%20Melbourne%20VIC%203000%2C%20Australia!5e0!3m2!1sen!2sin!4v1647856234567!5m2!1sen!2sin"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </NextLayout>
  );
};

export default ContactPage;
