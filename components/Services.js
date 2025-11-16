import Link from "next/link";

const Services = () => {
  return (
    <section
      className="service-section-4 fix bg-cover section-padding"
      style={{
        backgroundImage: 'url("assets/img/service/service-bg-min.jpg")',
      }}
      id="services"
    >
      <div className="container">
        <div className="section-title text-center">
          <span className="sub-content bg-color-3 wow fadeInUp">
            <img src="assets/img/bale.png" alt="img" />
            Our Products
          </span>
          <h2 className="text-white wow fadeInUp" data-wow-delay=".3s">
            High-Quality Ergonomic Workspace <br />
            Accessories Designed to Improve <br /> Comfort & Productivity
          </h2>
        </div>
        <div className="row justify-content-center">
          <div
            className="col-xl-3 col-lg-3 col-md-6 wow fadeInUp"
            data-wow-delay=".3s"
          >
            <div className="service-box-items" style={{background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', borderRadius: '15px', padding: '30px', height: '100%', position: 'relative', overflow: 'hidden'}}>
              <div className="product-image" style={{marginBottom: '20px', borderRadius: '12px', overflow: 'hidden', boxShadow: '0 10px 30px rgba(0,0,0,0.3)'}}>
                <img src="/assets/img/products/monitor-arm-1.jpg" alt="Gas Spring Single Monitor Arm" style={{width: '100%', height: '200px', objectFit: 'cover', display: 'block'}} />
              </div>
              <div className="content" style={{color: 'white'}}>
                <h3 style={{fontSize: '20px', marginBottom: '12px'}}>
                  <Link href="service-details" style={{color: 'white'}}>Gas Spring Single Monitor Arm</Link>
                </h3>
                <p style={{fontSize: '14px', lineHeight: '1.6', color: 'rgba(255,255,255,0.9)'}}>
                  A premium height-adjustable monitor arm engineered for smooth movement, precise positioning, and maximum desk space optimization.
                </p>
                <div style={{marginTop: '15px', fontSize: '13px', fontWeight: '600'}}>
                  <strong>Technical:</strong> Premium gas-spring technology with effortless height adjustment, tilt, swivel, and rotation. Compatible with 17-32" monitors.
                </div>
              </div>
            </div>
          </div>
          <div
            className="col-xl-3 col-lg-3 col-md-6 wow fadeInUp"
            data-wow-delay=".5s"
          >
            <div className="service-box-items" style={{background: 'linear-gradient(135deg, #2c3e50 0%, #34495e 100%)', borderRadius: '15px', padding: '30px', height: '100%', position: 'relative', overflow: 'hidden'}}>
              <div className="product-image" style={{marginBottom: '20px', borderRadius: '12px', overflow: 'hidden', boxShadow: '0 10px 30px rgba(0,0,0,0.3)'}}>
                <img src="/assets/img/products/monitor-arm-2.jpg" alt="Gas Spring Dual Monitor Arm" style={{width: '100%', height: '200px', objectFit: 'cover', display: 'block'}} />
              </div>
              <div className="content" style={{color: 'white'}}>
                <h3 style={{fontSize: '20px', marginBottom: '12px'}}>
                  <Link href="service-details" style={{color: 'white'}}>Gas Spring Dual Monitor Arm</Link>
                </h3>
                <p style={{fontSize: '14px', lineHeight: '1.6', color: 'rgba(255,255,255,0.9)'}}>
                  A heavy-duty dual-screen mounting solution that supports two monitors simultaneously. Designed for professionals who need more viewing flexibility.
                </p>
                <div style={{marginTop: '15px', fontSize: '13px', fontWeight: '600'}}>
                  <strong>Technical:</strong> Both arms move independently, offering full adjustability for 2 displays up to 32". Built with strong steel and VESA 75/100 compatibility.
                </div>
              </div>
            </div>
          </div>
          <div
            className="col-xl-3 col-lg-3 col-md-6 wow fadeInUp"
            data-wow-delay=".7s"
          >
            <div className="service-box-items" style={{background: 'linear-gradient(135deg, #11998e 0%, #38ef7d 100%)', borderRadius: '15px', padding: '30px', height: '100%', position: 'relative', overflow: 'hidden'}}>
              <div className="product-image" style={{marginBottom: '20px', borderRadius: '12px', overflow: 'hidden', boxShadow: '0 10px 30px rgba(0,0,0,0.3)'}}>
                <img src="/assets/img/products/monitor-arm-3.jpg" alt="Wall-Mounted Monitor Arm" style={{width: '100%', height: '200px', objectFit: 'cover', display: 'block'}} />
              </div>
              <div className="content" style={{color: 'white'}}>
                <h3 style={{fontSize: '20px', marginBottom: '12px'}}>
                  <Link href="service-details" style={{color: 'white'}}>Wall-Mounted Monitor Arm</Link>
                </h3>
                <p style={{fontSize: '14px', lineHeight: '1.6', color: 'rgba(255,255,255,0.9)'}}>
                  A robust wall-hanging monitor arm that provides strong support, full adjustability, and space-saving installation. Suitable for offices and CCTV setups.
                </p>
                <div style={{marginTop: '15px', fontSize: '13px', fontWeight: '600'}}>
                  <strong>Technical:</strong> Maximum space-saving with full-motion functionality. Supports 17-32" displays with high load capacity.
                </div>
              </div>
            </div>
          </div>
          <div
            className="col-xl-3 col-lg-3 col-md-6 wow fadeInUp"
            data-wow-delay=".9s"
          >
            <div className="service-box-items" style={{background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)', borderRadius: '15px', padding: '30px', height: '100%', position: 'relative', overflow: 'hidden'}}>
              <div className="product-image" style={{marginBottom: '20px', borderRadius: '12px', overflow: 'hidden', boxShadow: '0 10px 30px rgba(0,0,0,0.3)'}}>
                <img src="/assets/img/products/monitor-arm-4.jpg" alt="Spinal Cable Organizers" style={{width: '100%', height: '200px', objectFit: 'cover', display: 'block'}} />
              </div>
              <div className="content" style={{color: 'white'}}>
                <h3 style={{fontSize: '20px', marginBottom: '12px'}}>
                  <Link href="service-details" style={{color: 'white'}}>Spinal Cable Organizers</Link>
                </h3>
                <p style={{fontSize: '14px', lineHeight: '1.6', color: 'rgba(255,255,255,0.9)'}}>
                  A stylish and functional vertical cable management system that keeps wires neat, protected, and aligned from desk to floor.
                </p>
                <div style={{marginTop: '15px', fontSize: '13px', fontWeight: '600'}}>
                  <strong>Technical:</strong> Flexible, modular cable spine with durable ABS segments and weighted base for stability.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Services;

export const Service2 = ({ paddingTop = 0, title = "Popular Services" }) => {
  return (
    <section
      className={`service-section section-padding pt-${paddingTop}`}
      id="services"
    >
      <div className="container">
        <div className="section-title text-center">
          <span className="sub-content wow fadeInUp">
            <img src="assets/img/bale.png" alt="img" />
            {title}
          </span>
          <h2 className="wow fadeInUp" data-wow-delay=".3s">
            Product Features & Specifications <br />
            Built for Performance & Reliability
          </h2>
        </div>
        <div className="row">
          <div
            className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
            data-wow-delay=".3s"
          >
            <div className="service-popular-items">
              <div className="service-image">
                <img src="/assets/img/products/monitor-arm-1.jpg" alt="Single Monitor Arm" style={{objectFit: 'cover', height: '250px'}} />
              </div>
              <div className="service-content">
                <h3>
                  <Link href="service-details">Single Monitor Arm</Link>
                </h3>
                <p>
                  Full motion adjustability with gas-spring technology. Supports 17-32" displays. Clamp/Grommet mount. Internal cable routing. Ideal for office, WFH, and gaming setups.
                </p>
                <Link href="service-details" className="theme-btn bg-2">
                  Learn More <i className="far fa-arrow-right" />
                </Link>
              </div>
            </div>
          </div>
          <div
            className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
            data-wow-delay=".5s"
          >
            <div className="service-popular-items">
              <div className="service-image">
                <img src="/assets/img/products/monitor-arm-2.jpg" alt="Dual Monitor Arm" style={{objectFit: 'cover', height: '250px'}} />
              </div>
              <div className="service-content">
                <h3>
                  <Link href="service-details">Dual Monitor Arm</Link>
                </h3>
                <p>
                  Independent full motion for 2 displays up to 32" each. Strong steel construction with smooth gas springs. VESA 75/100 compatible. Perfect for professionals and multitasking users.
                </p>
                <Link href="service-details" className="theme-btn bg-2">
                  Learn More <i className="far fa-arrow-right" />
                </Link>
              </div>
            </div>
          </div>
          <div
            className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
            data-wow-delay=".7s"
          >
            <div className="service-popular-items">
              <div className="service-image">
                <img src="/assets/img/products/monitor-arm-5.jpg" alt="Wall Mount & Cable Management" style={{objectFit: 'cover', height: '250px'}} />
              </div>
              <div className="service-content">
                <h3>
                  <Link href="service-details">Wall Mount & Cable Mgmt</Link>
                </h3>
                <p>
                  Wall-mounted arm for CCTV, retail, and compact spaces. Spinal cable organizer with flexible vertical routing. Clean desk setup with durable construction and professional finish.
                </p>
                <Link href="service-details" className="theme-btn bg-2">
                  Learn More <i className="far fa-arrow-right" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
