"use client";
import Link from "next/link";

const ServiceCards = () => {
  return (
    <>
      <div className="row g-4">
        <div
          className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
          data-wow-delay=".3s"
        >
          <div className="service-card-horizontal">
            <div className="card-content">
              <div>
                <p className="card-number">01</p>
                <h5>
                  <Link href="service-details">
                    Gas Spring Monitor Arms
                  </Link>
                </h5>
              </div>
              <Link className="arrow-btn" href="service-details">
                <i className="far fa-arrow-right" />
              </Link>
            </div>
            <div className="card-image">
              <img 
                src="/assets/img/products/monitor-arm-15.png" 
                alt="Gas Spring Monitor Arm" 
              />
            </div>
          </div>
        </div>
        <div
          className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
          data-wow-delay=".5s"
        >
          <div className="service-card-horizontal">
            <div className="card-content">
              <div>
                <p className="card-number">02</p>
                <h5>
                  <Link href="service-details">
                    Wall-Mounted Solutions
                  </Link>
                </h5>
              </div>
              <Link className="arrow-btn" href="service-details">
                <i className="far fa-arrow-right" />
              </Link>
            </div>
            <div className="card-image">
              <img 
                src="/assets/img/products/monitor-arm-13.png" 
                alt="Wall-Mounted Monitor Arm" 
              />
            </div>
          </div>
        </div>
        <div
          className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
          data-wow-delay=".7s"
        >
          <div className="service-card-horizontal">
            <div className="card-content">
              <div>
                <p className="card-number">03</p>
                <h5>
                  <Link href="service-details">
                    Cable Management Systems
                  </Link>
                </h5>
              </div>
              <Link className="arrow-btn" href="service-details">
                <i className="far fa-arrow-right" />
              </Link>
            </div>
            <div className="card-image">
              <img 
                src="/assets/img/products/monitor-arm-17.png" 
                alt="Cable Management Monitor Arm" 
              />
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        .service-card-horizontal {
          background: white;
          border-radius: 24px;
          overflow: hidden;
          box-shadow: 0 4px 20px rgba(0,0,0,0.08);
          transition: all 0.3s ease;
          height: 100%;
          display: flex;
          flex-direction: row;
          min-height: 280px;
        }
        .card-content {
          flex: 0 0 55%;
          padding: 40px 35px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          background: #f8f9fa;
        }
        .card-number {
          color: #6C5CE7;
          font-size: 18px;
          font-weight: 700;
          margin-bottom: 15px;
          letter-spacing: 0.5px;
        }
        .card-content h5 {
          color: #1a1d2e;
          font-size: 24px;
          font-weight: 700;
          margin-bottom: 0;
          line-height: 1.3;
        }
        .card-content h5 a {
          color: inherit;
          text-decoration: none;
        }
        .arrow-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 50px;
          height: 50px;
          background: rgba(108, 92, 231, 0.1);
          border-radius: 50%;
          color: #6C5CE7;
          transition: all 0.3s ease;
          align-self: flex-start;
          margin-top: 25px;
        }
        .arrow-btn i {
          font-size: 18px;
        }
        .card-image {
          flex: 0 0 45%;
          overflow: hidden;
          position: relative;
          background: #e9ecef;
        }
        .card-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
          display: block;
        }
        .service-card-horizontal:hover {
          transform: translateY(-8px);
          box-shadow: 0 12px 35px rgba(108, 92, 231, 0.2);
        }
        .service-card-horizontal:hover .arrow-btn {
          background: #6C5CE7;
          color: white;
        }
        @media (max-width: 768px) {
          .service-card-horizontal {
            flex-direction: column;
          }
          .card-image {
            width: 100%;
            min-height: 200px;
          }
        }
      `}</style>
    </>
  );
};

export default ServiceCards;
