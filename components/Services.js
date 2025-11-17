import Link from "next/link";

const Services = () => {
  return (
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
            className="col-xxl-3 col-xl-4 col-lg-4 col-md-6 wow fadeInUp"
            data-wow-delay=".2s"
          >
            <div className="service-card-items">
              <div className="icon">
                <i className="flaticon-technical" />
              </div>
              <h3>
                <Link href="service-details">
                  Gas Spring Monitor Arms
                </Link>
              </h3>
              <div className="service-thumb">
                <img src="assets/img/service/04.png" alt="service-img" />
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
            className="col-xxl-3 col-xl-4 col-lg-4 col-md-6 wow fadeInUp"
            data-wow-delay=".4s"
          >
            <div className="service-card-items active">
              <div className="icon">
                <i className="flaticon-vector-design" />
              </div>
              <h3>
                <Link href="service-details">
                  Wall-Mounted Solutions
                </Link>
              </h3>
              <div className="service-thumb">
                <img src="assets/img/service/05.png" alt="service-img" />
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
            className="col-xxl-3 col-xl-4 col-lg-4 col-md-6 wow fadeInUp"
            data-wow-delay=".6s"
          >
            <div className="service-card-items">
              <div className="icon">
                <i className="flaticon-database" />
              </div>
              <h3>
                <Link href="service-details">
                  Cable Management Systems
                </Link>
              </h3>
              <div className="service-thumb">
                <img src="assets/img/service/06.png" alt="service-img" />
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
            className="col-xxl-3 col-xl-4 col-lg-4 col-md-6 wow fadeInUp"
            data-wow-delay=".8s"
          >
            <div className="service-card-items">
              <div className="icon">
                <i className="flaticon-design-thinking" />
              </div>
              <h3>
                <Link href="service-details">
                  Ergonomic Accessories
                </Link>
              </h3>
              <div className="service-thumb">
                <img src="assets/img/service/07.png" alt="service-img" />
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
  );
};

export default Services;

export const Service2 = () => {
  return (
    <section className="service-section fix pt-80 pb-80">
      <div className="container">
        <div className="section-title text-center mb-5">
          <span className="sub-content wow fadeInUp">
            <img src="assets/img/bale.png" alt="img" />
            Our Services
          </span>
          <h2 className="wow fadeInUp" data-wow-delay=".3s">
            Professional Monitor Arm Solutions
          </h2>
        </div>
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
  );
};
