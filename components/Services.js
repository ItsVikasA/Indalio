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
        <div className="row">
          <div
            className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
            data-wow-delay=".3s"
          >
            <div className="service-box-items">
              <div className="icon">
                <i className="flaticon-keywords" />
              </div>
              <div className="content">
                <h3>
                  <Link href="service-details">Gas Spring Single Monitor Arm</Link>
                </h3>
                <p>
                  Premium height-adjustable monitor arm engineered for smooth movement, precise positioning, and maximum desk space optimization. Supports 17-32" monitors.
                </p>
              </div>
            </div>
          </div>
          <div
            className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
            data-wow-delay=".5s"
          >
            <div className="service-box-items active">
              <div className="icon">
                <i className="flaticon-social-media" />
              </div>
              <div className="content">
                <h3>
                  <Link href="service-details">Gas Spring Dual Monitor Arm</Link>
                </h3>
                <p>
                  Heavy-duty dual-screen mounting solution supporting two monitors simultaneously. Designed for professionals needing multi-tasking capability and clutter-free desk space.
                </p>
              </div>
            </div>
          </div>
          <div
            className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
            data-wow-delay=".7s"
          >
            <div className="service-box-items">
              <div className="icon">
                <i className="flaticon-email-marketing" />
              </div>
              <div className="content">
                <h3>
                  <Link href="service-details">Wall-Mounted Monitor Arm</Link>
                </h3>
                <p>
                  Robust wall-hanging monitor arm providing strong support, full adjustability, and space-saving installation. Suitable for offices, retail, and CCTV setups.
                </p>
              </div>
            </div>
          </div>
          <div
            className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
            data-wow-delay=".3s"
          >
            <div className="service-box-items">
              <div className="icon">
                <i className="flaticon-copy-writing" />
              </div>
              <div className="content">
                <h3>
                  <Link href="service-details">Spinal Cable Organizers</Link>
                </h3>
                <p>
                  Stylish and functional vertical cable management system that keeps wires neat, protected, and aligned from desk to floor. Maintains a clean, professional workspace.
                </p>
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
                <img src="assets/img/service/08.png" alt="img" />
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
                <img src="assets/img/service/09.png" alt="img" />
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
                <img src="assets/img/service/10.png" alt="img" />
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
