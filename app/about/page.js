import Breadcrumb from "@/components/Breadcrumb";
import FunFactCounter from "@/components/FunFactCounter";
import Team from "@/components/Team";
import { TestimonialSlider2 } from "@/components/TestimonialSlider";
import { WorkingProcess2 } from "@/components/WorkingProcess";
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
    <NextLayout>
      {/*<< Breadcrumb Section Start >>*/}
      <Breadcrumb />
      {/* About Section Start */}
      <section className="about-section fix section-padding pb-0">
        <div className="container">
          <div className="about-wrapper style-2">
            <div className="row g-4 align-items-center">
              <div className="col-lg-6">
                <div className="about-content ms-0 style-about">
                  <div className="section-title">
                    <span className="sub-content wow fadeInUp">
                      <img src="assets/img/bale.png" alt="img" />
                      About Indalio
                    </span>
                    <h2 className="wow fadeInUp" data-wow-delay=".3s">
                      Building Workspace Solutions That Matter
                    </h2>
                  </div>
                  <p className="mt-3 mt-md-0 wow fadeInUp" data-wow-delay=".5s">
                    We are a dedicated manufacturing unit specializing in gas-spring monitor arms, fixed monitor mounts, desk cable organizers, and workspace accessories. Located in Ludhiana, Punjab, our facility combines modern machinery, skilled workmanship, and strict quality standards to deliver products that improve the way people work.
                  </p>
                  <p className="mt-3 wow fadeInUp" data-wow-delay=".6s">
                    With a focus on ergonomics, durability, and clean design, we supply to e-commerce brands, corporate offices, furniture manufacturers, and retail partners across India. Our mission is simple — to create workspace products that are strong, smooth, and built to last.
                  </p>
                  <div className="icon-items wow fadeInUp" data-wow-delay=".3s">
                    <div className="dot" />
                    <div className="content">
                      <h4>Quality First</h4>
                      <p>
                        Every product is built with precision and durability, combining modern engineering with reliable performance that enhances productivity and comfort.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 wow fadeInUp" data-wow-delay=".4s">
                <div className="about-image-3">
                  <img src="assets/img/about/05.jpg" alt="img" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* About Section Start */}
      <section className="about-section fix section-padding pt-80">
        <div className="container">
          <div className="about-wrapper style-2">
            <div className="row g-4 align-items-center">
              <div className="col-lg-6 wow  fadeInUp" data-wow-delay=".3s">
                <div className="about-image-3">
                  <img src="assets/img/about/06.jpg" alt="img" />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="about-content">
                  <h4 className="wow fadeInUp" data-wow-delay=".3s">
                    Our Story
                  </h4>
                  <p className="mt-3 wow fadeInUp" data-wow-delay=".5s">
                    INDALIO was created with a simple purpose — to build workspace products that are strong, functional, and designed for everyday use. The journey began in Ludhiana, Punjab, where our parent company had been supplying precision-fabricated parts to local industries. During this time, we observed a growing problem: most workspace accessories in the Indian market were either low in quality, import-dependent, or overpriced.
                  </p>
                  <p className="mt-3 wow fadeInUp" data-wow-delay=".6s">
                    Recognizing the need for durable, ergonomic, and affordable desk accessories made in India, the founders decided to create a dedicated brand focused entirely on modern workstation solutions. Starting with small batches of monitor arms and cable organizers, the brand quickly gained trust among e-commerce sellers, office furniture manufacturers, and corporate buyers.
                  </p>
                  <div className="icon-items wow fadeInUp" data-wow-delay=".3s">
                    <div className="dot" />
                    <div className="content">
                      <h4>Innovation &amp; Customer-Centric Approach</h4>
                      <p>
                        Continuously improving technology, design, and user experience while delivering dependable solutions at fair and competitive pricing.
                      </p>
                    </div>
                  </div>
                  <Link
                    href="contact"
                    className="theme-btn mt-50 wow fadeInUp"
                    data-wow-delay=".5s"
                  >
                    Contact Us
                    <i className="far fa-arrow-right" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Team Section Start */}
      <Team />
      {/* Funfact Section Start */}
      <section className="funfact-section-2 section-padding pt-0">
        <div className="container">
          <FunFactCounter style={2} />
        </div>
      </section>
      {/* Working Process Section Start */}
      <WorkingProcess2 />
      {/* Target Audience Section Start */}
      <section className="section-padding pt-0" style={{background: 'linear-gradient(180deg, #ffffff 0%, #f8f9fa 100%)'}}>
        <div className="container">
          <div className="section-title text-center mb-5">
            <span className="sub-content wow fadeInUp">
              <img src="assets/img/bale.png" alt="img" />
              Who We Serve
            </span>
            <h2 className="wow fadeInUp" data-wow-delay=".3s">
              Trusted by Diverse Professionals & Businesses
            </h2>
          </div>
          
          {/* Primary Target Audiences */}
          <div className="mb-5">
            <h3 className="text-center mb-4 wow fadeInUp" data-wow-delay=".2s" style={{fontSize: '2rem', fontWeight: '700'}}>Primary Target Audiences</h3>
            <AudienceScroller audiences={primaryAudiences} direction="left" />
          </div>

          {/* Secondary Target Audiences */}
          <div className="mt-5">
            <h3 className="text-center mb-4 wow fadeInUp" data-wow-delay=".2s" style={{fontSize: '2rem', fontWeight: '700'}}>Secondary Target Audiences</h3>
            <AudienceScroller audiences={secondaryAudiences} direction="right" />
          </div>
        </div>
      </section>
      {/* Brand Section Start */}
      <section className="brand-section-2 mt-0 mb-0 fix section-padding pt-0">
        <div className="container-fluid">
          <div className="brand-wrapper-2">
            <div className="radius-shape">
              <img src="assets/img/brand/radius-left.png" alt="shape-img" />
            </div>
            <div className="radius-shape-2">
              <img src="assets/img/brand/radius-right.png" alt="shape-img" />
            </div>
            <h5 className="wow fadeInUp" data-wow-delay=".3s">
              Serving Customers Across <span>India</span> with Quality & Innovation
            </h5>
            <div className="brand-items">
              <div className="brand-image wow fadeInUp" data-wow-delay=".2s">
                <img src="assets/img/brand/linkedIn.png" alt="img" />
              </div>
              <div className="brand-image wow fadeInUp" data-wow-delay=".4s">
                <img src="assets/img/brand/dropbox.png" alt="img" />
              </div>
              <div className="brand-image wow fadeInUp" data-wow-delay=".6s">
                <img src="assets/img/brand/trello.png" alt="img" />
              </div>
              <div className="brand-image wow fadeInUp" data-wow-delay=".8s">
                <img src="assets/img/brand/framer.png" alt="img" />
              </div>
            </div>
            <div className="brand-items">
              <div className="brand-image wow fadeInUp" data-wow-delay=".2s">
                <img src="assets/img/brand/grammarly.png" alt="img" />
              </div>
              <div className="brand-image wow fadeInUp" data-wow-delay=".4s">
                <img src="assets/img/brand/amazon.png" alt="img" />
              </div>
              <div className="brand-image wow fadeInUp" data-wow-delay=".6s">
                <img src="assets/img/brand/outbrain.png" alt="img" />
              </div>
              <div className="brand-image wow fadeInUp" data-wow-delay=".8s">
                <img src="assets/img/brand/shopify.png" alt="img" />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Testimonial Section Start */}
      <section className="testimonial-section-2 fix section-padding fix">
        <div className="bg-shape">
          <img src="assets/img/testimonial/bg-shape.png" alt="shape-img" />
        </div>
        <div className="container">
          <div className="section-title text-center">
            <span className="sub-content">
              <img src="assets/img/bale.png" alt="img" />
              Customer Testimonials
            </span>
            <h2>Trusted by Businesses & Professionals Across India</h2>
          </div>
        </div>
        <TestimonialSlider2 />
      </section>
      {/* Footer Section Start */}
    </NextLayout>
  );
};
export default page;
