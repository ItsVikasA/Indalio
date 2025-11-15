"use client";
import { useState } from "react";

const DealerInquiryForm = () => {
  const [formData, setFormData] = useState({
    businessName: "",
    contactPerson: "",
    email: "",
    phone: "",
    businessType: "",
    location: "",
    experience: "",
    estimatedVolume: "",
    message: ""
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log("Dealer inquiry submitted:", formData);
    alert("Thank you for your interest! Our team will contact you within 24 hours.");
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section className="dealer-inquiry-section section-padding">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className="section-title text-center">
              <span className="sub-content wow fadeInUp">
                <img src="assets/img/bale.png" alt="img" />
                Partnership Opportunities
              </span>
              <h2 className="wow fadeInUp" data-wow-delay=".3s">
                Become an Indalio Dealer / Distributor
              </h2>
              <p className="mt-3 wow fadeInUp" data-wow-delay=".5s">
                Join our growing network of dealers and distributors across India. <br />
                Exclusive pricing, marketing support, and premium quality products.
              </p>
            </div>

            {/* Benefits Section */}
            <div className="row g-4 mb-5">
              <div className="col-md-3 col-6 wow fadeInUp" data-wow-delay=".3s">
                <div className="benefit-card text-center" style={{ padding: '20px', background: '#f8f9fa', borderRadius: '10px' }}>
                  <div style={{ fontSize: '36px', color: '#667eea', marginBottom: '10px' }}>
                    <i className="fas fa-tags"></i>
                  </div>
                  <h5 style={{ fontSize: '16px', marginBottom: '5px' }}>Competitive Pricing</h5>
                  <p style={{ fontSize: '13px', color: '#666', marginBottom: '0' }}>Best wholesale rates</p>
                </div>
              </div>
              <div className="col-md-3 col-6 wow fadeInUp" data-wow-delay=".4s">
                <div className="benefit-card text-center" style={{ padding: '20px', background: '#f8f9fa', borderRadius: '10px' }}>
                  <div style={{ fontSize: '36px', color: '#667eea', marginBottom: '10px' }}>
                    <i className="fas fa-handshake"></i>
                  </div>
                  <h5 style={{ fontSize: '16px', marginBottom: '5px' }}>Dedicated Support</h5>
                  <p style={{ fontSize: '13px', color: '#666', marginBottom: '0' }}>24/7 partner assistance</p>
                </div>
              </div>
              <div className="col-md-3 col-6 wow fadeInUp" data-wow-delay=".5s">
                <div className="benefit-card text-center" style={{ padding: '20px', background: '#f8f9fa', borderRadius: '10px' }}>
                  <div style={{ fontSize: '36px', color: '#667eea', marginBottom: '10px' }}>
                    <i className="fas fa-chart-line"></i>
                  </div>
                  <h5 style={{ fontSize: '16px', marginBottom: '5px' }}>Marketing Materials</h5>
                  <p style={{ fontSize: '13px', color: '#666', marginBottom: '0' }}>Free catalogs & demos</p>
                </div>
              </div>
              <div className="col-md-3 col-6 wow fadeInUp" data-wow-delay=".6s">
                <div className="benefit-card text-center" style={{ padding: '20px', background: '#f8f9fa', borderRadius: '10px' }}>
                  <div style={{ fontSize: '36px', color: '#667eea', marginBottom: '10px' }}>
                    <i className="fas fa-trophy"></i>
                  </div>
                  <h5 style={{ fontSize: '16px', marginBottom: '5px' }}>Quality Products</h5>
                  <p style={{ fontSize: '13px', color: '#666', marginBottom: '0' }}>Made in India excellence</p>
                </div>
              </div>
            </div>

            {/* Inquiry Form */}
            <div 
              className="dealer-form-wrapper wow fadeInUp" 
              data-wow-delay=".7s"
              style={{
                background: 'white',
                padding: '40px',
                borderRadius: '15px',
                boxShadow: '0 10px 40px rgba(0,0,0,0.1)'
              }}
            >
              <form onSubmit={handleSubmit}>
                <div className="row g-4">
                  <div className="col-lg-6">
                    <label style={{ display: 'block', marginBottom: '8px', fontWeight: '600', color: '#1a1d2e' }}>
                      Business Name *
                    </label>
                    <input
                      type="text"
                      name="businessName"
                      value={formData.businessName}
                      onChange={handleChange}
                      placeholder="Your Company/Shop Name"
                      required
                      style={{
                        width: '100%',
                        padding: '12px 15px',
                        border: '1px solid #e0e0e0',
                        borderRadius: '8px',
                        fontSize: '15px'
                      }}
                    />
                  </div>

                  <div className="col-lg-6">
                    <label style={{ display: 'block', marginBottom: '8px', fontWeight: '600', color: '#1a1d2e' }}>
                      Contact Person *
                    </label>
                    <input
                      type="text"
                      name="contactPerson"
                      value={formData.contactPerson}
                      onChange={handleChange}
                      placeholder="Your Full Name"
                      required
                      style={{
                        width: '100%',
                        padding: '12px 15px',
                        border: '1px solid #e0e0e0',
                        borderRadius: '8px',
                        fontSize: '15px'
                      }}
                    />
                  </div>

                  <div className="col-lg-6">
                    <label style={{ display: 'block', marginBottom: '8px', fontWeight: '600', color: '#1a1d2e' }}>
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="youremail@example.com"
                      required
                      style={{
                        width: '100%',
                        padding: '12px 15px',
                        border: '1px solid #e0e0e0',
                        borderRadius: '8px',
                        fontSize: '15px'
                      }}
                    />
                  </div>

                  <div className="col-lg-6">
                    <label style={{ display: 'block', marginBottom: '8px', fontWeight: '600', color: '#1a1d2e' }}>
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+91 XXXXXXXXXX"
                      required
                      style={{
                        width: '100%',
                        padding: '12px 15px',
                        border: '1px solid #e0e0e0',
                        borderRadius: '8px',
                        fontSize: '15px'
                      }}
                    />
                  </div>

                  <div className="col-lg-6">
                    <label style={{ display: 'block', marginBottom: '8px', fontWeight: '600', color: '#1a1d2e' }}>
                      Business Type *
                    </label>
                    <select
                      name="businessType"
                      value={formData.businessType}
                      onChange={handleChange}
                      required
                      style={{
                        width: '100%',
                        padding: '12px 15px',
                        border: '1px solid #e0e0e0',
                        borderRadius: '8px',
                        fontSize: '15px'
                      }}
                    >
                      <option value="">Select Business Type</option>
                      <option value="office-furniture">Office Furniture Dealer</option>
                      <option value="electronics">Electronics Retailer</option>
                      <option value="online-seller">Online Seller / E-commerce</option>
                      <option value="furniture-manufacturer">Furniture Manufacturer</option>
                      <option value="corporate-supplier">Corporate Supplier</option>
                      <option value="distributor">Distributor</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div className="col-lg-6">
                    <label style={{ display: 'block', marginBottom: '8px', fontWeight: '600', color: '#1a1d2e' }}>
                      Location / City *
                    </label>
                    <input
                      type="text"
                      name="location"
                      value={formData.location}
                      onChange={handleChange}
                      placeholder="Your City, State"
                      required
                      style={{
                        width: '100%',
                        padding: '12px 15px',
                        border: '1px solid #e0e0e0',
                        borderRadius: '8px',
                        fontSize: '15px'
                      }}
                    />
                  </div>

                  <div className="col-lg-6">
                    <label style={{ display: 'block', marginBottom: '8px', fontWeight: '600', color: '#1a1d2e' }}>
                      Years in Business
                    </label>
                    <select
                      name="experience"
                      value={formData.experience}
                      onChange={handleChange}
                      style={{
                        width: '100%',
                        padding: '12px 15px',
                        border: '1px solid #e0e0e0',
                        borderRadius: '8px',
                        fontSize: '15px'
                      }}
                    >
                      <option value="">Select Experience</option>
                      <option value="startup">New Business</option>
                      <option value="1-3">1-3 Years</option>
                      <option value="3-5">3-5 Years</option>
                      <option value="5-10">5-10 Years</option>
                      <option value="10+">10+ Years</option>
                    </select>
                  </div>

                  <div className="col-lg-6">
                    <label style={{ display: 'block', marginBottom: '8px', fontWeight: '600', color: '#1a1d2e' }}>
                      Estimated Monthly Volume
                    </label>
                    <select
                      name="estimatedVolume"
                      value={formData.estimatedVolume}
                      onChange={handleChange}
                      style={{
                        width: '100%',
                        padding: '12px 15px',
                        border: '1px solid #e0e0e0',
                        borderRadius: '8px',
                        fontSize: '15px'
                      }}
                    >
                      <option value="">Select Expected Volume</option>
                      <option value="10-50">10-50 units/month</option>
                      <option value="50-100">50-100 units/month</option>
                      <option value="100-500">100-500 units/month</option>
                      <option value="500+">500+ units/month</option>
                    </select>
                  </div>

                  <div className="col-lg-12">
                    <label style={{ display: 'block', marginBottom: '8px', fontWeight: '600', color: '#1a1d2e' }}>
                      Additional Information / Questions
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your business, customer base, or any specific requirements..."
                      rows={5}
                      style={{
                        width: '100%',
                        padding: '12px 15px',
                        border: '1px solid #e0e0e0',
                        borderRadius: '8px',
                        fontSize: '15px',
                        resize: 'vertical'
                      }}
                    />
                  </div>

                  <div className="col-lg-12">
                    <button 
                      type="submit"
                      className="theme-btn w-100"
                      style={{ padding: '15px', fontSize: '16px' }}
                    >
                      Submit Partnership Inquiry <i className="far fa-arrow-right ms-2"></i>
                    </button>
                  </div>
                </div>
              </form>

              <div 
                className="contact-info mt-4 text-center"
                style={{
                  padding: '20px',
                  background: '#f8f9fa',
                  borderRadius: '10px'
                }}
              >
                <p style={{ marginBottom: '10px', color: '#666' }}>
                  For immediate assistance, contact our Partnership Manager:
                </p>
                <p style={{ marginBottom: '0', fontSize: '18px', fontWeight: '600', color: '#667eea' }}>
                  <i className="fas fa-phone me-2"></i>
                  Namanpreet Kaur: <a href="tel:+917317300024" style={{ color: '#667eea' }}>7317300024</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DealerInquiryForm;
