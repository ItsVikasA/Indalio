import FunFactCounter from "@/components/FunFactCounter";
import { TestimonialSlider1 } from "@/components/TestimonialSlider";
import AudienceScroller from "@/components/AudienceScroller";
import NextLayout from "@/layouts/NextLayout";
import Link from "next/link";

const primaryAudiences = [
  { icon: "flaticon-technical", title: "Corporate Offices & Workplaces", description: "Companies looking to set up ergonomic and organized workstations for their employees. They require bulk orders of monitor arms, cable organizers, and desk accessories." },
  { icon: "flaticon-database", title: "IT Companies & Tech Startups", description: "Teams with multiple screens, coding setups, design work, and long working hours — ideal customers for ergonomic monitor arms." },
  { icon: "flaticon-design-thinking", title: "E-Commerce Buyers", description: "Individual customers searching for monitor arms for WFH setups, cable management solutions, and gaming desk accessories." },
  { icon: "flaticon-vector-design", title: "Furniture Manufacturers & Dealers", description: "Businesses that integrate monitor arms and cable organizers into office furniture, workstations, and modular desks." },
  { icon: "flaticon-technical", title: "Stock Market Traders", description: "Traders who use multi-monitor setups for charts, live data, and analysis. Indalio's single and dual gas-spring monitor arms help them position screens perfectly and reduce neck strain." },
  { icon: "flaticon-database", title: "CCTV / Security Installers", description: "They use wall-mounted monitor arms for control rooms and surveillance setups, requiring durable and adjustable solutions." },
  { icon: "flaticon-design-thinking", title: "Gaming Setup Enthusiasts", description: "Gamers who prefer dual-monitor arms and clean cable management for premium setups, enhancing their gaming experience." }
];

const secondaryAudiences = [
  { icon: "flaticon-vector-design", title: "Home Office & WFH Users", description: "Individuals working remotely who need a cleaner, more ergonomic desk setup with adjustable monitors.", titleSize: "1.1rem", minHeight: "280px" },
  { icon: "flaticon-technical", title: "Content Creators", description: "Editors, YouTubers, and streamers who use multiple screens and require flexible monitor positioning.", titleSize: "1.1rem", minHeight: "280px" },
  { icon: "flaticon-database", title: "Architects & Designers", description: "CAD professionals who rely on large or multiple displays and benefit from adjustable arms to reduce strain.", titleSize: "1.1rem", minHeight: "280px" },
  { icon: "flaticon-design-thinking", title: "Students & Learners", description: "Students with limited desk space who need simple monitor mounting and cable management solutions.", titleSize: "1.1rem", minHeight: "280px" },
  { icon: "flaticon-vector-design", title: "Small Businesses", description: "Growing companies that need affordable and efficient workspace accessories without compromising quality.", titleSize: "1.1rem", minHeight: "280px" },
  { icon: "flaticon-technical", title: "Gaming Café Owners", description: "Cafés and gaming lounges that want clean, durable, and adjustable monitor mounts for professional setups.", titleSize: "1.1rem", minHeight: "280px" },
  { icon: "flaticon-database", title: "Retail Shops & Electronics Stores", description: "Stores that display monitors or digital signage and require sturdy, adjustable wall-mounted arms.", titleSize: "1.1rem", minHeight: "280px" }
];

const page = () => {
  return (
    <NextLayout header={1}>
      <section
        className="hero-section hero-1 bg-cover fix"
        style={{ 
          backgroundImage: 'url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfVbOveBmglNG_5hCZa5fy3SwwThK9UGmb7g&s")',
          paddingTop: '100px',
          paddingBottom: '100px',
          minHeight: 'auto'
        }}
      >
        <div className="container">
          <div className="row g-4 justify-content-between">
            <div className="col-lg-6">
              <div className="hero-content">
                <h1 className="wow fadeInUp" data-wow-delay=".2s">
                  Indalio <br />
                  Ergonomic Monitor Arms <br />
                  & Cable Management <br />
                  Solutions
                </h1>
                <p className="text-white mt-3 mb-4" style={{fontSize: '1.1rem'}}>
                  Premium gas spring monitor arms engineered in Ludhiana. Trusted by corporate offices, IT companies & traders nationwide.
                </p>
                <div className="hero-button">
                  <Link
                    href="contact"
                    className="theme-btn hover-white wow fadeInUp"
                    data-wow-delay=".4s"
                  >
                    Request Bulk Quote <i className="far fa-arrow-right" />
                  </Link>
                  <Link
                    href="service"
                    className="btn-link wow fadeInUp"
                    data-wow-delay=".6s"
                  >
                    View Products <i className="far fa-arrow-right" />
                  </Link>
                </div>
                <div
                  className="hero-client d-flex align-items-center gap-4 mt-50 wow fadeInUp"
                  data-wow-delay=".8s"
                >
                  <img src="assets/img/hero/client.png" alt="img" />
                  <p className="text-white">
                    Trusted by Corporate Offices, <br />
                    IT Companies & Traders Nationwide
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-5 wow fadeInUp" data-wow-delay=".4s">
              <div className="hero-contact-box">
                <h4>Get Bulk Pricing</h4>
                <p>Request Quote for Corporate Orders & Dealer Partnerships</p>
                <form
                  action="#"
                  id="contact-form"
                  method="POST"
                  className="contact-form-item"
                >
                  <div className="row g-4">
                    <div className="col-lg-12">
                      <div className="form-clt">
                        <input
                          type="text"
                          name="name"
                          id="name"
                          placeholder="Your Name"
                        />
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="form-clt">
                        <input
                          type="text"
                          name="email"
                          id="email"
                          placeholder="Email Address"
                        />
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="form-clt">
                        <input
                          type="text"
                          name="phone"
                          id="phone"
                          placeholder="Phone Number"
                        />
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="payment-save">
                        <input
                          type="checkbox"
                          className="form-check-input"
                          name="save-for-next"
                          id="saveForNext"
                        />
                        <p>
                          I’ve Read and agreed to{" "}
                          <Link href="/">Terms &amp; Conditions</Link>
                        </p>
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <button type="submit" className="theme-btn">
                        Request Quote <i className="far fa-arrow-right" />
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Service Section Start */}
      <section 
        className="service-section fix pt-80 pb-80 section-bg"
        style={{
          backgroundImage: 'url("https://media.licdn.com/dms/image/v2/D5622AQH72krYy9qwFw/feedshare-shrink_800/B56ZRgU.gvGoAk-/0/1736782900704?e=2147483647&v=beta&t=P2eQK069taoCnkrGvJv5jW_moONppE2G1Qn2bkHpvsM")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          position: 'relative'
        }}
      >
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(26, 29, 46, 0.85)',
          zIndex: 1
        }}></div>
        <div className="container" style={{position: 'relative', zIndex: 2}}>
          <h4
            className="mb-5 text-white text-center wow fadeInUp"
            data-wow-delay=".3s"
            style={{fontSize: '32px', lineHeight: '1.5', maxWidth: '900px', margin: '0 auto 50px'}}
          >
            Elevate Every Workspace with Indalio's Precision-Engineered Accessories
          </h4>
          <div className="row g-4">
            <div
              className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
              data-wow-delay=".3s"
            >
              <div className="service-items">
                <div className="content">
                  <p>01</p>
                  <h5>
                    <Link href="service-details">
                      Gas Spring Monitor Arms
                    </Link>
                  </h5>
                  <Link className="arrow-btn" href="service-details">
                    <i className="far fa-arrow-right" />
                  </Link>
                </div>
                <div className="thumb">
                  <img src="/assets/img/products/monitor-arm-4.jpg" alt="Gas Spring Monitor Arm" />
                </div>
              </div>
            </div>
            <div
              className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
              data-wow-delay=".5s"
            >
              <div className="service-items">
                <div className="content">
                  <p>02</p>
                  <h5>
                    <Link href="service-details">
                      Wall-Mounted Solutions
                    </Link>
                  </h5>
                  <Link className="arrow-btn" href="service-details">
                    <i className="far fa-arrow-right" />
                  </Link>
                </div>
                <div className="thumb">
                  <img src="/assets/img/products/monitor-arm-6.jpg" alt="Wall-Mounted Monitor Arm" />
                </div>
              </div>
            </div>
            <div
              className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
              data-wow-delay=".7s"
            >
              <div className="service-items">
                <div className="content">
                  <p>03</p>
                  <h5>
                    <Link href="service-details">
                      Cable Management Systems
                    </Link>
                  </h5>
                  <Link className="arrow-btn" href="service-details">
                    <i className="far fa-arrow-right" />
                  </Link>
                </div>
                <div className="thumb">
                  <img src="/assets/img/products/monitor-arm-3.jpg" alt="Cable Management Monitor Arm" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* About Section Start */}
      <section className="about-section fix section-padding">
        <div className="container">
          <div className="about-wrapper">
            <div className="row g-4 align-items-center">
              <div className="col-lg-6">
                <div className="about-image-items">
                  <ul
                    className="experience-text wow fadeInUp"
                    data-wow-delay=".6s"
                  >
                    <li>Made in India Excellence</li>
                    <li>
                      <i className="fas fa-star" />
                    </li>
                    <li>IT Expo 2025 Recognized</li>
                  </ul>
                  <div className="row g-4 align-items-center">
                    <div className="col-md-6 wow fadeInUp" data-wow-delay=".2s">
                      <div className="about-image">
                        <img src="/assets/img/products/monitor-arm-6.jpg" alt="Indalio Gas Spring Monitor Arm - Ergonomic Design" />
                      </div>
                    </div>
                    <div className="col-md-6 wow fadeInUp" data-wow-delay=".4s">
                      <div className="about-image">
                        <img src="/assets/img/products/monitor-arm-7.jpg" alt="Indalio Monitor Arm - Professional Setup" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="about-content">
                  <div className="section-title">
                    <span className="sub-content wow fadeInUp">
                      <img src="assets/img/bale.png" alt="img" />
                      About Indalio
                    </span>
                    <h2 className="wow fadeInUp" data-wow-delay=".3s">
                      Pioneering Workspace Ergonomics From Ludhiana
                    </h2>
                  </div>
                  <p className="mt-3 mt-md-0 wow fadeInUp" data-wow-delay=".5s">
                    Based in Ludhiana, Punjab's industrial hub, Indalio manufactures premium gas-spring monitor arms and cable management solutions. We serve corporate offices, IT companies, traders, and furniture manufacturers across India with locally engineered, world-class ergonomic products.
                  </p>
                  <ul className="about-list wow fadeInUp" data-wow-delay=".3s">
                    <li>
                      <i className="fas fa-check" />
                      Precision-engineered gas-spring technology for smooth adjustments
                    </li>
                    <li>
                      <i className="fas fa-check" />
                      Bulk orders for corporate offices and furniture dealers
                    </li>
                    <li>
                      <i className="fas fa-check" />
                      Recognized at IT Expo Ludhiana 2025 with pre-orders from industry leaders
                    </li>
                  </ul>
                  <div
                    className="about-author wow fadeInUp"
                    data-wow-delay=".5s"
                  >
                    <div className="about-button">
                      <Link href="about" className="theme-btn">
                        Discover Our Story
                        <i className="far fa-arrow-right" />
                      </Link>
                    </div>
                    <div className="author-image">
                      <img src="assets/img/about/author.jpg" alt="author-img" />
                      <div className="content">
                        <h5>
                          Jaspreet Singh / <span>Indalio Sales</span>
                        </h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Target Audience Section Start */}
      <section className="target-audience-section fix section-padding pt-0" style={{overflow: 'hidden'}}>
        <div className="container">
          <div className="section-title text-center">
            <span className="sub-content wow fadeInUp">
              <img src="assets/img/bale.png" alt="img" />
              Who We Serve
            </span>
            <h2 className="wow fadeInUp" data-wow-delay=".3s">
              Empowering Diverse Workspaces <br />
              Across Industries
            </h2>
            <p className="mt-3 wow fadeInUp" data-wow-delay=".5s">
              From corporate offices to gaming setups, Indalio's ergonomic solutions serve professionals, <br />
              traders, content creators, and businesses seeking organized, comfortable workstations.
            </p>
          </div>
          
          {/* Primary Target Audiences */}
          <div className="mb-5">
            <h3 className="text-center mb-4 wow fadeInUp" data-wow-delay=".3s">
              Primary Target Audiences
            </h3>
            <AudienceScroller audiences={primaryAudiences} direction="left" />
          </div>

          {/* Secondary Target Audiences */}
          <div className="mt-5 pt-4">
            <h3 className="text-center mb-4 wow fadeInUp" data-wow-delay=".3s">
              Secondary Target Audiences
            </h3>
            <AudienceScroller audiences={secondaryAudiences} direction="right" />
          </div>

          <div className="text-center mt-5 wow fadeInUp" data-wow-delay=".5s">
            <Link href="contact" className="theme-btn">
              Request Bulk Quote for Your Business
              <i className="far fa-arrow-right" />
            </Link>
          </div>
        </div>
      </section>
      {/* Service Section Start */}
      <section className="service-section section-padding pt-0">
        <div className="container">
          <div className="section-title text-center">
            <span className="sub-content wow fadeInUp">
              <img src="assets/img/bale.png" alt="img" />
              Popular Services
            </span>
            <h2 className="wow fadeInUp" data-wow-delay=".3s">
              We Provide Best Quality Service <br />
              For Your Business
            </h2>
          </div>
          <div className="row">
            <div
              className="col-xxl-3 col-xl-3 col-lg-3 col-md-6 wow fadeInUp"
              data-wow-delay=".2s"
            >
              <div className="service-card-items">
                <div className="icon">
                  <i className="flaticon-technical" />
                </div>
                <h3>
                  <Link href="service-details">
                    Ergonomic Workspace Setup
                  </Link>
                </h3>
                <div className="service-thumb" style={{backgroundImage: 'url("assets/img/products/monitor-arm-8.png")', backgroundSize: 'cover', backgroundPosition: 'center'}}>
                  <div className="line-shape">
                    <img src="assets/img/service/line.png" alt="shape-img" />
                  </div>
                </div>
                <Link className="link-btn" href="service-details">
                  Read More
                  <i className="far fa-arrow-right" />
                </Link>
              </div>
            </div>
            <div
              className="col-xxl-3 col-xl-3 col-lg-3 col-md-6 wow fadeInUp"
              data-wow-delay=".4s"
            >
              <div className="service-card-items active">
                <div className="icon">
                  <i className="flaticon-vector-design" />
                </div>
                <h3>
                  <Link href="service-details">
                    Dual Monitor Arm Solutions
                  </Link>
                </h3>
                <div className="service-thumb" style={{backgroundImage: 'url("assets/img/products/monitor-arm-9.png")', backgroundSize: 'cover', backgroundPosition: 'center'}}>
                  <div className="line-shape">
                    <img src="assets/img/service/line.png" alt="shape-img" />
                  </div>
                </div>
                <Link className="link-btn" href="service-details">
                  Read More
                  <i className="far fa-arrow-right" />
                </Link>
              </div>
            </div>
            <div
              className="col-xxl-3 col-xl-3 col-lg-3 col-md-6 wow fadeInUp"
              data-wow-delay=".6s"
            >
              <div className="service-card-items">
                <div className="icon">
                  <i className="flaticon-database" />
                </div>
                <h3>
                  <Link href="service-details">
                    Corporate Installation Services
                  </Link>
                </h3>
                <div className="service-thumb" style={{backgroundImage: 'url("assets/img/products/monitor-arm-10.png")', backgroundSize: 'cover', backgroundPosition: 'center'}}>
                  <div className="line-shape">
                    <img src="assets/img/service/line.png" alt="shape-img" />
                  </div>
                </div>
                <Link className="link-btn" href="service-details">
                  Read More
                  <i className="far fa-arrow-right" />
                </Link>
              </div>
            </div>
            <div
              className="col-xxl-3 col-xl-3 col-lg-3 col-md-6 wow fadeInUp"
              data-wow-delay=".8s"
            >
              <div className="service-card-items">
                <div className="icon">
                  <i className="flaticon-design-thinking" />
                </div>
                <h3>
                  <Link href="service-details">
                    OEM & Dealer Partnerships
                  </Link>
                </h3>
                <div className="service-thumb" style={{backgroundImage: 'url("assets/img/products/monitor-arm-11.png")', backgroundSize: 'cover', backgroundPosition: 'center'}}>
                  <div className="line-shape">
                    <img src="assets/img/service/line.png" alt="shape-img" />
                  </div>
                </div>
                <Link className="link-btn" href="service-details">
                  Read More
                  <i className="far fa-arrow-right" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Team Section Start */}
      <section className="team-section fix section-padding">
        <div className="container">
          <div className="row g-4 align-items-center">
            <div className="col-lg-6">
              <div className="section-title">
                <span className="sub-content wow fadeInUp">
                  <img src="assets/img/bale.png" alt="img" />
                  Team Member
                </span>
                <h2 className="wow fadeInUp" data-wow-delay=".3s">
                  Meet Our Professional <br />
                  Team Members
                </h2>
              </div>
              <p className="mt-3 mt-md-0 wow fadeInUp" data-wow-delay=".5s">
                Our experienced team of engineers and specialists ensures every Indalio monitor arm <br /> 
                meets the highest standards of quality, durability, and ergonomic performance.
              </p>
            </div>
            <div
              className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay=".3s"
            >
              <div className="team-items">
                <div className="team-image">
                  <img src="assets/img/team/01.jpg" alt="img" />
                </div>
                <div className="team-content">
                  <h4>
                    <Link href="team-details">Rajesh Kumar Singh</Link>
                  </h4>
                  <p>Production Manager</p>
                  <div className="social-profile">
                    <ul>
                      <li>
                        <a href="#">
                          <i className="fab fa-twitter" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fab fa-facebook-f" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fab fa-instagram" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fab fa-linkedin-in" />
                        </a>
                      </li>
                    </ul>
                    <span className="plus-btn">
                      <i className="far fa-plus" />
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay=".5s"
            >
              <div className="team-items">
                <div className="team-image">
                  <img src="assets/img/team/02.jpg" alt="img" />
                </div>
                <div className="team-content">
                  <h4>
                    <Link href="team-details">Priya Sharma</Link>
                  </h4>
                  <p>Sales Head</p>
                  <div className="social-profile">
                    <ul>
                      <li>
                        <a href="#">
                          <i className="fab fa-twitter" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fab fa-facebook-f" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fab fa-instagram" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fab fa-linkedin-in" />
                        </a>
                      </li>
                    </ul>
                    <span className="plus-btn">
                      <i className="far fa-plus" />
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay=".2s"
            >
              <div className="team-items">
                <div className="team-image">
                  <img src="assets/img/team/03.jpg" alt="img" />
                </div>
                <div className="team-content">
                  <h4>
                    <Link href="team-details">Amit Patel</Link>
                  </h4>
                  <p>Operations Manager</p>
                  <div className="social-profile">
                    <ul>
                      <li>
                        <a href="#">
                          <i className="fab fa-twitter" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fab fa-facebook-f" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fab fa-instagram" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fab fa-linkedin-in" />
                        </a>
                      </li>
                    </ul>
                    <span className="plus-btn">
                      <i className="far fa-plus" />
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay=".4s"
            >
              <div className="team-items">
                <div className="team-image">
                  <img src="assets/img/team/04.jpg" alt="img" />
                </div>
                <div className="team-content">
                  <h4>
                    <Link href="team-details">Vikram Desai</Link>
                  </h4>
                  <p>Quality Control Head</p>
                  <div className="social-profile">
                    <ul>
                      <li>
                        <a href="#">
                          <i className="fab fa-twitter" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fab fa-facebook-f" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fab fa-instagram" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fab fa-linkedin-in" />
                        </a>
                      </li>
                    </ul>
                    <span className="plus-btn">
                      <i className="far fa-plus" />
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay=".6s"
            >
              <div className="team-items">
                <div className="team-image">
                  <img src="assets/img/team/05.jpg" alt="img" />
                </div>
                <div className="team-content">
                  <h4>
                    <Link href="team-details">Manuel G. Wilmer</Link>
                  </h4>
                  <p>CEO &amp; Founder</p>
                  <div className="social-profile">
                    <ul>
                      <li>
                        <a href="#">
                          <i className="fab fa-twitter" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fab fa-facebook-f" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fab fa-instagram" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fab fa-linkedin-in" />
                        </a>
                      </li>
                    </ul>
                    <span className="plus-btn">
                      <i className="far fa-plus" />
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-xl-3 col-lg-4 col-md-6 ps-xxl-5 wow fadeInUp"
              data-wow-delay=".8s"
            >
              <Link href="team" className="theme-btn">
                View More Members
              </Link>
            </div>
          </div>
        </div>
      </section>
      {/* Funfact Section Start */}
      <section className="funfact-section section-padding pt-0">
        <div className="container">
          <div className="section-title text-center">
            <span className="sub-content wow fadeInUp">
              <img src="assets/img/bale.png" alt="img" />
              Company Fun Fact
            </span>
            <h2 className="wow fadeInUp" data-wow-delay=".3s">
              Learn Our Company Statistics
            </h2>
          </div>
          <FunFactCounter />
        </div>
      </section>
      {/* Popular Case Study Section Start */}
      <section className="case-study-section fix section-padding theme-bg">
        <div className="left-shape">
          <img src="assets/img/case-study/left-shape.png" alt="shape-img" />
        </div>
        <div className="right-shape">
          <img src="assets/img/case-study/right-shape.png" alt="shape-img" />
        </div>
        <div className="container">
          <div className="section-title-area">
            <div className="section-title">
              <span className="sub-content wow fadeInUp">
                <img src="assets/img/bale.png" alt="img" />
                Success Stories
              </span>
              <h2 className="text-white wow fadeInUp" data-wow-delay=".3s">
                Real-World Implementations <br /> Transforming Workspaces Nationwide
              </h2>
            </div>
            <Link href="project" className="theme-btn white-border">
              View All Projects
            </Link>
          </div>
          <div className="row">
            <div
              className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
              data-wow-delay=".3s"
            >
              <div className="case-study-items">
                <div className="thumb">
                  <img src="assets/img/products/monitor-arm-12.png" alt="img" />
                </div>
                <div className="content">
                  <p>Corporate Office Setup</p>
                  <h3>
                    <Link href="case-study-details">
                      500+ Dual Monitor Arms Deployed for IT Company in Bangalore
                    </Link>
                  </h3>
                  <Link className="arrow-btn" href="case-study-details">
                    <i className="far fa-arrow-right" />
                  </Link>
                </div>
              </div>
            </div>
            <div
              className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
              data-wow-delay=".5s"
            >
              <div className="case-study-items">
                <div className="thumb">
                  <img src="assets/img/products/monitor-arm-13.png" alt="img" />
                </div>
                <div className="content">
                  <p>Control Room Solution</p>
                  <h3>
                    <Link href="case-study-details">
                      Wall-Mounted CCTV Monitor Setup for Security Operations Center
                    </Link>
                  </h3>
                  <Link className="arrow-btn" href="case-study-details">
                    <i className="far fa-arrow-right" />
                  </Link>
                </div>
              </div>
            </div>
            <div
              className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
              data-wow-delay=".7s"
            >
              <div className="case-study-items">
                <div className="thumb">
                  <img src="assets/img/products/monitor-arm-14.png" alt="img" />
                </div>
                <div className="content">
                  <p>Ergonomic Upgrade</p>
                  <h3>
                    <Link href="case-study-details">
                      Complete Workspace Transformation with Gas Spring Monitor Arms
                    </Link>
                  </h3>
                  <Link className="arrow-btn" href="case-study-details">
                    <i className="far fa-arrow-right" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Testimonial Section Start */}
      <section className="testimonial-section fix section-padding pt-0">
        <div className="container">
          <div className="testimonial-wrapper">
            <div className="row g-4">
              <div className="col-lg-3">
                <div className="testimonial-image">
                  <img src="assets/img/products/monitor-arm-8.png" alt="img" />
                </div>
              </div>
              <div className="col-lg-7 ps-lg-5">
                <TestimonialSlider1 />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* News Section Start */}
      <section className="news-section section-padding pt-0">
        <div className="container">
          <div className="section-title text-center">
            <span className="sub-content wow fadeInUp">
              <img src="assets/img/bale.png" alt="img" />
              Insights & Updates
            </span>
            <h2 className="wow fadeInUp" data-wow-delay=".3s">
              Ergonomic Workspace Solutions & Industry Insights
            </h2>
          </div>
          <div className="row">
            <div
              className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
              data-wow-delay=".3s"
            >
              <div className="news-box-items">
                <div className="news-content">
                  <p>November 15, 2025</p>
                  <h4>
                    <Link href="news-details">
                      Why Gas Spring Monitor Arms Are Essential for Modern Workspaces
                    </Link>
                  </h4>
                  <Link className="link-btn" href="news-details">
                    Read More
                    <i className="far fa-arrow-right" />
                  </Link>
                </div>
                <div
                  className="news-image bg-cover"
                  style={{ backgroundImage: 'url("assets/img/news/01.jpg")' }}
                />
              </div>
            </div>
            <div
              className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
              data-wow-delay=".5s"
            >
              <div className="news-box-items">
                <div className="news-content">
                  <p>November 10, 2025</p>
                  <h4>
                    <Link href="news-details">
                      Complete Guide to Choosing the Right Monitor Arm for Your Setup
                    </Link>
                  </h4>
                  <Link className="link-btn" href="news-details">
                    Read More
                    <i className="far fa-arrow-right" />
                  </Link>
                </div>
                <div
                  className="news-image bg-cover"
                  style={{ backgroundImage: 'url("assets/img/news/02.jpg")' }}
                />
              </div>
            </div>
            <div
              className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
              data-wow-delay=".7s"
            >
              <div className="news-box-items">
                <div className="news-content">
                  <p>November 5, 2025</p>
                  <h4>
                    <Link href="news-details">
                      Cable Management Solutions: Creating a Clean & Organized Workspace
                    </Link>
                  </h4>
                  <Link className="link-btn" href="news-details">
                    Read More
                    <i className="far fa-arrow-right" />
                  </Link>
                </div>
                <div
                  className="news-image bg-cover"
                  style={{ backgroundImage: 'url("assets/img/news/03.jpg")' }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Newsletter & Download Section Start */}
      <section className="newsletter-section fix section-padding pt-0">
        <div className="container">
          <div className="row g-4">
            {/* Newsletter Subscription */}
            <div className="col-lg-6 wow fadeInUp" data-wow-delay=".3s">
              <div className="newsletter-box" style={{background: '#1a1d2e', padding: '40px', borderRadius: '10px', height: '100%'}}>
                <div className="section-title mb-4">
                  <span className="sub-content" style={{color: '#8760FD'}}>
                    <img src="assets/img/bale.png" alt="img" />
                    Stay Updated
                  </span>
                  <h3 className="text-white mt-3" style={{fontSize: '24px', fontWeight: '700'}}>Subscribe to Our Newsletter</h3>
                  <p className="mt-3" style={{color: 'rgba(255, 255, 255, 0.85)', fontSize: '15px', lineHeight: '1.6'}}>
                    Get exclusive updates on new product launches, dealer partnerships, special discounts, and installation guides.
                  </p>
                </div>
                <form action="#" className="newsletter-form">
                  <div className="row g-3">
                    <div className="col-lg-12">
                      <input
                        type="text"
                        placeholder="Your Name"
                        className="form-control"
                        style={{padding: '15px', borderRadius: '5px'}}
                      />
                    </div>
                    <div className="col-lg-12">
                      <input
                        type="email"
                        placeholder="Your Email Address"
                        className="form-control"
                        style={{padding: '15px', borderRadius: '5px'}}
                      />
                    </div>
                    <div className="col-lg-12">
                      <select className="form-control" style={{padding: '15px', borderRadius: '5px', fontSize: '15px', color: '#333'}}>
                        <option value="">I'm interested in...</option>
                        <option value="new-products">New Product Launches</option>
                        <option value="dealer">Dealer Updates & Partnerships</option>
                        <option value="discounts">Exclusive Discounts</option>
                        <option value="guides">Support & Installation Guides</option>
                        <option value="all">All Updates</option>
                      </select>
                    </div>
                    <div className="col-lg-12">
                      <button type="submit" className="theme-btn w-100">
                        Subscribe Now <i className="far fa-arrow-right" />
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            
            {/* Catalog Download */}
            <div className="col-lg-6 wow fadeInUp" data-wow-delay=".5s">
              <div className="download-catalog-box" style={{background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', padding: '40px', borderRadius: '10px', height: '100%'}}>
                <div className="section-title mb-4">
                  <span className="sub-content" style={{color: '#fff'}}>
                    <img src="assets/img/bale.png" alt="img" style={{filter: 'brightness(0) invert(1)'}} />
                    Resources
                  </span>
                  <h3 className="text-white mt-3" style={{fontSize: '24px', fontWeight: '700'}}>Download Product Catalog</h3>
                  <p className="mt-3" style={{color: 'rgba(255, 255, 255, 0.95)', fontSize: '15px', lineHeight: '1.6'}}>
                    Get comprehensive details about our complete range of gas-spring monitor arms, wall-mounted solutions, and cable organizers.
                  </p>
                </div>
                <div className="download-options">
                  <ul style={{listStyle: 'none', padding: 0}}>
                    <li className="mb-3">
                      <i className="fas fa-check-circle text-white me-2" />
                      <span className="text-white">Complete Product Specifications</span>
                    </li>
                    <li className="mb-3">
                      <i className="fas fa-check-circle text-white me-2" />
                      <span className="text-white">Technical Drawings & Dimensions</span>
                    </li>
                    <li className="mb-3">
                      <i className="fas fa-check-circle text-white me-2" />
                      <span className="text-white">Installation Guidelines</span>
                    </li>
                    <li className="mb-4">
                      <i className="fas fa-check-circle text-white me-2" />
                      <span className="text-white">Bulk Pricing Information</span>
                    </li>
                  </ul>
                  <div className="row g-3 mt-3">
                    <div className="col-md-6">
                      <button className="theme-btn white-border w-100">
                        <i className="far fa-file-pdf me-2" /> Download Catalog
                      </button>
                    </div>
                    <div className="col-md-6">
                      <button className="theme-btn white-border w-100">
                        <i className="far fa-file-alt me-2" /> Company Profile
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </NextLayout>
  );
};
export default page;
