"use client";

const DownloadSection = () => {
  const resources = [
    {
      icon: "fas fa-file-pdf",
      title: "Product Catalog 2025",
      description: "Complete range of monitor arms with specifications",
      size: "2.5 MB",
      format: "PDF",
      color: "#e74c3c"
    },
    {
      icon: "fas fa-file-alt",
      title: "Company Profile",
      description: "Learn about Indalio's manufacturing excellence",
      size: "1.8 MB",
      format: "PDF",
      color: "#667eea"
    },
    {
      icon: "fas fa-tools",
      title: "Installation Manual",
      description: "Step-by-step installation guide for all products",
      size: "3.2 MB",
      format: "PDF",
      color: "#3498db"
    },
    {
      icon: "fas fa-file-invoice",
      title: "Bulk Order Form",
      description: "Fill and submit for corporate/dealer inquiries",
      size: "500 KB",
      format: "PDF",
      color: "#f39c12"
    },
    {
      icon: "fas fa-file-image",
      title: "Technical Drawings",
      description: "Detailed CAD drawings and dimensions",
      size: "4.1 MB",
      format: "ZIP",
      color: "#9b59b6"
    },
    {
      icon: "fas fa-certificate",
      title: "Warranty Certificate",
      description: "Sample warranty document and terms",
      size: "800 KB",
      format: "PDF",
      color: "#27ae60"
    }
  ];

  return (
    <section className="download-section section-padding" style={{ background: '#f8f9fa' }}>
      <div className="container">
        <div className="section-title text-center">
          <span className="sub-content wow fadeInUp">
            <img src="assets/img/bale.png" alt="img" />
            Resources
          </span>
          <h2 className="wow fadeInUp" data-wow-delay=".3s">
            Download Brochures & Documents
          </h2>
          <p className="mt-3 wow fadeInUp" data-wow-delay=".5s">
            Access all product information, technical specifications, and installation guides
          </p>
        </div>

        <div className="row g-4">
          {resources.map((resource, index) => (
            <div 
              key={index}
              className="col-lg-4 col-md-6 wow fadeInUp" 
              data-wow-delay={`.${index + 3}s`}
            >
              <div 
                className="download-card"
                style={{
                  background: 'white',
                  padding: '30px',
                  borderRadius: '12px',
                  boxShadow: '0 5px 20px rgba(0,0,0,0.08)',
                  height: '100%',
                  transition: 'all 0.3s',
                  position: 'relative',
                  overflow: 'hidden'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-5px)';
                  e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,0,0,0.12)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 5px 20px rgba(0,0,0,0.08)';
                }}
              >
                <div 
                  style={{
                    width: '70px',
                    height: '70px',
                    borderRadius: '12px',
                    background: `${resource.color}15`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '20px'
                  }}
                >
                  <i 
                    className={resource.icon}
                    style={{ 
                      fontSize: '32px',
                      color: resource.color
                    }}
                  ></i>
                </div>

                <h4 style={{ 
                  fontSize: '18px',
                  marginBottom: '10px',
                  color: '#1a1d2e'
                }}>
                  {resource.title}
                </h4>

                <p style={{ 
                  fontSize: '14px',
                  color: '#666',
                  marginBottom: '15px',
                  lineHeight: '1.6'
                }}>
                  {resource.description}
                </p>

                <div 
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '15px',
                    marginBottom: '20px',
                    paddingTop: '15px',
                    borderTop: '1px solid #f0f0f0'
                  }}
                >
                  <span style={{ 
                    fontSize: '13px',
                    color: '#999',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '5px'
                  }}>
                    <i className="far fa-file"></i>
                    {resource.format}
                  </span>
                  <span style={{ 
                    fontSize: '13px',
                    color: '#999',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '5px'
                  }}>
                    <i className="fas fa-download"></i>
                    {resource.size}
                  </span>
                </div>

                <button 
                  className="theme-btn w-100"
                  style={{ 
                    padding: '12px',
                    fontSize: '14px'
                  }}
                >
                  <i className="fas fa-download me-2"></i>
                  Download Now
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Email Download Section */}
        <div 
          className="email-download-section mt-5 wow fadeInUp" 
          data-wow-delay=".8s"
          style={{
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            padding: '50px',
            borderRadius: '15px',
            textAlign: 'center',
            color: 'white'
          }}
        >
          <h3 style={{ marginBottom: '15px' }}>
            Get All Resources via Email
          </h3>
          <p style={{ marginBottom: '30px', fontSize: '16px', opacity: '0.9' }}>
            Enter your email to receive complete product catalog, installation guides, and pricing information
          </p>
          <form 
            style={{
              maxWidth: '600px',
              margin: '0 auto',
              display: 'flex',
              gap: '10px',
              flexWrap: 'wrap',
              justifyContent: 'center'
            }}
          >
            <input
              type="email"
              placeholder="Your Email Address"
              required
              style={{
                flex: '1',
                minWidth: '250px',
                padding: '15px 20px',
                border: 'none',
                borderRadius: '8px',
                fontSize: '16px'
              }}
            />
            <button 
              type="submit"
              className="theme-btn white-border"
              style={{
                padding: '15px 30px',
                fontSize: '16px',
                background: 'white',
                color: '#667eea'
              }}
            >
              Send Me Resources
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default DownloadSection;
