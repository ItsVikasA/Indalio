import Breadcrumb from "@/components/Breadcrumb";
import Cta from "@/components/Cta";
import Faq from "@/components/Faq";
import GrowBusiness from "@/components/GrowBusiness";
import Services, { Service2 } from "@/components/Services";
import NextLayout from "@/layouts/NextLayout";

const page = () => {
  return (
    <NextLayout>
      <Breadcrumb pageName="Our Products" pageTitle="Workspace Solutions" />
      <GrowBusiness paddingTop={9} />
      <Services />
      <Service2 paddingTop={9} title="Product Specifications" />
      
      {/* Recognition Section */}
      <section className="section-padding pt-0">
        <div className="container">
          <div className="section-title text-center">
            <span className="sub-content wow fadeInUp">
              <img src="assets/img/bale.png" alt="img" />
              Industry Recognition
            </span>
            <h2 className="wow fadeInUp" data-wow-delay=".3s">
              IT Expo Ludhiana 2025 Success
            </h2>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="about-content text-center">
                <p className="mt-3 wow fadeInUp" data-wow-delay=".5s">
                  At the IT Expo Ludhiana 2025, we showcased our innovative workspace solutions to industry leaders and received overwhelming appreciation. Our prototype demonstrations captured significant attention from key stakeholders across the technology and manufacturing sectors.
                </p>
                <div className="icon-items mt-4 wow fadeInUp" data-wow-delay=".3s">
                  <div className="row g-4">
                    <div className="col-md-6">
                      <div className="content text-start">
                        <h4>Distinguished Visitors</h4>
                        <p>
                          The Presidents of the Computer Association (State and City level), along with the CICU President and IG, visited our stall and shared valuable feedback on our product innovation and quality standards.
                        </p>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="content text-start">
                        <h4>Pre-Orders & Industry Interest</h4>
                        <p>
                          Leading industrialists placed pre-orders after experiencing our products firsthand. The positive response validates our commitment to manufacturing excellence and customer-focused design.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <p className="mt-4 wow fadeInUp" data-wow-delay=".7s">
                  <strong>Note:</strong> Several testimonial videos from the expo featuring industry leaders are available, showcasing their appreciation for Indalio's workspace accessories and engineering quality.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Cta />
      <Faq />
    </NextLayout>
  );
};
export default page;
