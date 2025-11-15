import Breadcrumb from "@/components/Breadcrumb";
import Cta from "@/components/Cta";
import Faq from "@/components/Faq";
import NextLayout from "@/layouts/NextLayout";
import Link from "next/link";

export const metadata = {
  title: "Indalio - Premium Workspace Accessories",
  description: "Explore Indalio's complete range of premium workspace accessories including single & dual monitor arms, wall-mounted solutions, and spinal cable organizers.",
};

const page = () => {
  return (
    <NextLayout>
      <Breadcrumb pageName="Our Products" pageTitle="Workspace Solutions" />
      
      {/* Products Overview Section */}
      <section className="service-section section-padding">
        <div className="container">
          <div className="section-title text-center">
            <span className="sub-content wow fadeInUp">
              <img src="assets/img/bale.png" alt="img" />
              Our Product Range
            </span>
            <h2 className="wow fadeInUp" data-wow-delay=".3s">
              Premium Workspace Accessories
            </h2>
            <p className="mt-3 wow fadeInUp" data-wow-delay=".5s">
              Indalio specializes in manufacturing high-quality, ergonomic workspace accessories designed to improve comfort, productivity, and desk organization.
            </p>
          </div>
          <div className="row g-4">
            <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay=".3s">
              <div className="service-box-items h-100">
                <div className="icon">
                  <img src="assets/img/service/icon/s-icon-1.svg" alt="icon" />
                </div>
                <div className="content">
                  <h4>
                    <Link href="contact">Gas Spring Single Monitor Arm</Link>
                  </h4>
                  <p>
                    A premium height-adjustable monitor arm engineered for smooth movement, precise positioning, and maximum desk space optimization.
                  </p>
                  <p style={{ fontSize: '13px', marginTop: '10px' }}>
                    <strong>Technical:</strong> Premium gas-spring technology with effortless height adjustment, tilt, swivel, and rotation. Compatible with 17–32" monitors.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay=".5s">
              <div className="service-box-items h-100">
                <div className="icon">
                  <img src="assets/img/service/icon/s-icon-2.svg" alt="icon" />
                </div>
                <div className="content">
                  <h4>
                    <Link href="contact">Gas Spring Dual Monitor Arm</Link>
                  </h4>
                  <p>
                    A heavy-duty, dual-screen mounting solution that supports two monitors simultaneously. Designed for professionals who need more viewing flexibility.
                  </p>
                  <p style={{ fontSize: '13px', marginTop: '10px' }}>
                    <strong>Technical:</strong> Both arms move independently, offering full adjustability for 2 displays up to 32". Built with strong steel and VESA 75/100 compatibility.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay=".7s">
              <div className="service-box-items h-100">
                <div className="icon">
                  <img src="assets/img/service/icon/s-icon-3.svg" alt="icon" />
                </div>
                <div className="content">
                  <h4>
                    <Link href="contact">Wall-Mounted Monitor Arm</Link>
                  </h4>
                  <p>
                    A robust wall-hanging monitor arm that provides strong support, full adjustability, and space-saving installation. Suitable for offices and CCTV setups.
                  </p>
                  <p style={{ fontSize: '13px', marginTop: '10px' }}>
                    <strong>Technical:</strong> Maximum space-saving with full-motion functionality. Supports 17–32" displays with high load capacity.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay=".9s">
              <div className="service-box-items h-100">
                <div className="icon">
                  <img src="assets/img/service/icon/s-icon-4.svg" alt="icon" />
                </div>
                <div className="content">
                  <h4>
                    <Link href="contact">Spinal Cable Organizers</Link>
                  </h4>
                  <p>
                    A stylish and functional vertical cable management system that keeps wires neat, protected, and aligned from desk to floor.
                  </p>
                  <p style={{ fontSize: '13px', marginTop: '10px' }}>
                    <strong>Technical:</strong> Flexible, modular cable spine with durable ABS segments and weighted base for stability.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Cta sectionPadding={true} />
      <Faq />
    </NextLayout>
  );
};
export default page;
