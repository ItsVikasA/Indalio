"use client";
import { useState } from "react";

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(-1);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? -1 : index);
  };

  return (
    <section className="faq-section section-padding">
      <div className="container">
        <div className="section-title text-center">
          <span className="sub-content wow fadeInUp">
            <img src="assets/img/bale.png" alt="img" />
            Have Questions?
          </span>
          <h2 className="wow fadeInUp" data-wow-delay=".3s">
            Frequently Asked Questions
          </h2>
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className="faq-content">
              <div className="faq-accordion">
                <div className="accordion" id="accordion">
                  <div
                    className="accordion-item wow fadeInUp"
                    data-wow-delay=".3s"
                  >
                    <h4 className="accordion-header" id="heading1">
                      <button
                        className={`accordion-button ${activeIndex !== 0 ? 'collapsed' : ''}`}
                        type="button"
                        onClick={() => toggleAccordion(0)}
                      >
                        What Monitor Sizes Are Compatible With Indalio Monitor Arms?
                      </button>
                    </h4>
                    <div
                      id="faq1"
                      className={`accordion-collapse collapse ${activeIndex === 0 ? 'show' : ''}`}
                      style={{ 
                        maxHeight: activeIndex === 0 ? '500px' : '0',
                        overflow: 'hidden',
                        transition: 'max-height 0.3s ease'
                      }}
                    >
                      <div className="accordion-body">
                        Indalio monitor arms support displays ranging from 17 to 32 inches. All our arms are VESA 75/100 compatible, ensuring they work with most standard monitors available in the market.
                      </div>
                    </div>
                  </div>
                  <div
                    className="accordion-item wow fadeInUp"
                    data-wow-delay=".5s"
                  >
                    <h4 className="accordion-header" id="heading2">
                      <button
                        className={`accordion-button ${activeIndex !== 1 ? 'collapsed' : ''}`}
                        type="button"
                        onClick={() => toggleAccordion(1)}
                      >
                        Do You Offer Bulk Pricing For Corporate Orders?
                      </button>
                    </h4>
                    <div
                      id="faq2"
                      className={`accordion-collapse collapse ${activeIndex === 1 ? 'show' : ''}`}
                      style={{ 
                        maxHeight: activeIndex === 1 ? '500px' : '0',
                        overflow: 'hidden',
                        transition: 'max-height 0.3s ease'
                      }}
                    >
                      <div className="accordion-body">
                        Yes, we provide special bulk pricing for corporate offices, furniture manufacturers, and dealers. Contact our sales team at 9988092664 / 7517500024 for custom quotations and OEM branding options.
                      </div>
                    </div>
                  </div>
                  <div
                    className="accordion-item wow fadeInUp"
                    data-wow-delay=".7s"
                  >
                    <h4 className="accordion-header" id="heading3">
                      <button
                        className={`accordion-button ${activeIndex !== 2 ? 'collapsed' : ''}`}
                        type="button"
                        onClick={() => toggleAccordion(2)}
                      >
                        How Easy Is It To Install Indalio Monitor Arms?
                      </button>
                    </h4>
                    <div
                      id="faq3"
                      className={`accordion-collapse collapse ${activeIndex === 2 ? 'show' : ''}`}
                      style={{ 
                        maxHeight: activeIndex === 2 ? '500px' : '0',
                        overflow: 'hidden',
                        transition: 'max-height 0.3s ease'
                      }}
                    >
                      <div className="accordion-body">
                        Installation is simple and straightforward. Our monitor arms come with clamp or grommet mounting options, complete with all necessary hardware and installation guides. Most setups can be completed in 10-15 minutes.
                      </div>
                    </div>
                  </div>
                  <div
                    className="accordion-item wow fadeInUp"
                    data-wow-delay=".7s"
                  >
                    <h4 className="accordion-header" id="heading4">
                      <button
                        className={`accordion-button ${activeIndex !== 3 ? 'collapsed' : ''}`}
                        type="button"
                        onClick={() => toggleAccordion(3)}
                      >
                        Are Your Products Suitable For Gaming Setups?
                      </button>
                    </h4>
                    <div
                      id="faq4"
                      className={`accordion-collapse collapse ${activeIndex === 3 ? 'show' : ''}`}
                      style={{ 
                        maxHeight: activeIndex === 3 ? '500px' : '0',
                        overflow: 'hidden',
                        transition: 'max-height 0.3s ease'
                      }}
                    >
                      <div className="accordion-body">
                        Absolutely! Our gas-spring monitor arms and cable organizers are perfect for gaming setups. They provide smooth adjustability, sturdy support, and clean cable management to enhance your gaming experience.
                      </div>
                    </div>
                  </div>
                  <div
                    className="accordion-item wow fadeInUp"
                    data-wow-delay=".7s"
                  >
                    <h4 className="accordion-header" id="heading5">
                      <button
                        className={`accordion-button ${activeIndex !== 4 ? 'collapsed' : ''}`}
                        type="button"
                        onClick={() => toggleAccordion(4)}
                      >
                        Can I Become A Dealer Or Distributor For Indalio Products?
                      </button>
                    </h4>
                    <div
                      id="faq5"
                      className={`accordion-collapse collapse ${activeIndex === 4 ? 'show' : ''}`}
                      style={{ 
                        maxHeight: activeIndex === 4 ? '500px' : '0',
                        overflow: 'hidden',
                        transition: 'max-height 0.3s ease'
                      }}
                    >
                      <div className="accordion-body">
                        Yes! We welcome dealer and distributor partnerships across India. Contact Namanpreet Kaur at 7317300024 or visit our contact page to inquire about partnership opportunities and wholesale pricing.
                      </div>
                    </div>
                  </div>
                  <div
                    className="accordion-item wow fadeInUp"
                    data-wow-delay=".9s"
                  >
                    <h4 className="accordion-header" id="heading6">
                      <button
                        className={`accordion-button ${activeIndex !== 5 ? 'collapsed' : ''}`}
                        type="button"
                        onClick={() => toggleAccordion(5)}
                      >
                        What Is The Weight Capacity Of Your Monitor Arms?
                      </button>
                    </h4>
                    <div
                      id="faq6"
                      className={`accordion-collapse collapse ${activeIndex === 5 ? 'show' : ''}`}
                      style={{ 
                        maxHeight: activeIndex === 5 ? '500px' : '0',
                        overflow: 'hidden',
                        transition: 'max-height 0.3s ease'
                      }}
                    >
                      <div className="accordion-body">
                        Our gas-spring monitor arms can support monitors weighing between 2 kg to 9 kg. The strong steel construction and premium gas springs ensure stable and smooth adjustability even with heavier displays.
                      </div>
                    </div>
                  </div>
                  <div
                    className="accordion-item wow fadeInUp"
                    data-wow-delay=".9s"
                  >
                    <h4 className="accordion-header" id="heading7">
                      <button
                        className={`accordion-button ${activeIndex !== 6 ? 'collapsed' : ''}`}
                        type="button"
                        onClick={() => toggleAccordion(6)}
                      >
                        Do Your Products Come With A Warranty?
                      </button>
                    </h4>
                    <div
                      id="faq7"
                      className={`accordion-collapse collapse ${activeIndex === 6 ? 'show' : ''}`}
                      style={{ 
                        maxHeight: activeIndex === 6 ? '500px' : '0',
                        overflow: 'hidden',
                        transition: 'max-height 0.3s ease'
                      }}
                    >
                      <div className="accordion-body">
                        Yes, all Indalio products come with a comprehensive warranty covering manufacturing defects. Our commitment to quality ensures long-lasting performance and customer satisfaction. Contact us for specific warranty details.
                      </div>
                    </div>
                  </div>
                  <div
                    className="accordion-item wow fadeInUp"
                    data-wow-delay=".9s"
                  >
                    <h4 className="accordion-header" id="heading8">
                      <button
                        className={`accordion-button ${activeIndex !== 7 ? 'collapsed' : ''}`}
                        type="button"
                        onClick={() => toggleAccordion(7)}
                      >
                        Can The Dual Monitor Arm Support Different Sized Monitors?
                      </button>
                    </h4>
                    <div
                      id="faq8"
                      className={`accordion-collapse collapse ${activeIndex === 7 ? 'show' : ''}`}
                      style={{ 
                        maxHeight: activeIndex === 7 ? '500px' : '0',
                        overflow: 'hidden',
                        transition: 'max-height 0.3s ease'
                      }}
                    >
                      <div className="accordion-body">
                        Yes, our dual monitor arms feature independent adjustability for each arm. You can mount two different sized monitors (within the 17-32" range) and position them independently for optimal viewing comfort.
                      </div>
                    </div>
                  </div>
                  <div
                    className="accordion-item wow fadeInUp"
                    data-wow-delay=".9s"
                  >
                    <h4 className="accordion-header" id="heading9">
                      <button
                        className={`accordion-button ${activeIndex !== 8 ? 'collapsed' : ''}`}
                        type="button"
                        onClick={() => toggleAccordion(8)}
                      >
                        How Do I Maintain My Monitor Arm For Long-Lasting Performance?
                      </button>
                    </h4>
                    <div
                      id="faq9"
                      className={`accordion-collapse collapse ${activeIndex === 8 ? 'show' : ''}`}
                      style={{ 
                        maxHeight: activeIndex === 8 ? '500px' : '0',
                        overflow: 'hidden',
                        transition: 'max-height 0.3s ease'
                      }}
                    >
                      <div className="accordion-body">
                        Maintenance is minimal. Simply wipe down with a soft cloth periodically to remove dust. Check and tighten mounting screws if needed. The gas springs are sealed and maintenance-free, ensuring years of smooth operation.
                      </div>
                    </div>
                  </div>
                  <div
                    className="accordion-item wow fadeInUp"
                    data-wow-delay=".9s"
                  >
                    <h4 className="accordion-header" id="heading10">
                      <button
                        className={`accordion-button ${activeIndex !== 9 ? 'collapsed' : ''}`}
                        type="button"
                        onClick={() => toggleAccordion(9)}
                      >
                        What Desk Thickness Is Required For Clamp Mounting?
                      </button>
                    </h4>
                    <div
                      id="faq10"
                      className={`accordion-collapse collapse ${activeIndex === 9 ? 'show' : ''}`}
                      style={{ 
                        maxHeight: activeIndex === 9 ? '500px' : '0',
                        overflow: 'hidden',
                        transition: 'max-height 0.3s ease'
                      }}
                    >
                      <div className="accordion-body">
                        Our clamp mounts work with desk thicknesses ranging from 10mm to 80mm. For thinner or thicker desks, we recommend using the grommet mount option which comes included with most of our monitor arms.
                      </div>
                    </div>
                  </div>
                  <div
                    className="accordion-item wow fadeInUp"
                    data-wow-delay=".9s"
                  >
                    <h4 className="accordion-header" id="heading11">
                      <button
                        className={`accordion-button ${activeIndex !== 10 ? 'collapsed' : ''}`}
                        type="button"
                        onClick={() => toggleAccordion(10)}
                      >
                        Do You Provide Installation Support For Bulk Orders?
                      </button>
                    </h4>
                    <div
                      id="faq11"
                      className={`accordion-collapse collapse ${activeIndex === 10 ? 'show' : ''}`}
                      style={{ 
                        maxHeight: activeIndex === 10 ? '500px' : '0',
                        overflow: 'hidden',
                        transition: 'max-height 0.3s ease'
                      }}
                    >
                      <div className="accordion-body">
                        Yes, for large corporate or bulk orders, we provide detailed installation guides and can arrange on-site installation support or training. Contact our sales team to discuss your specific requirements and location.
                      </div>
                    </div>
                  </div>
                  <div
                    className="accordion-item wow fadeInUp"
                    data-wow-delay=".9s"
                  >
                    <h4 className="accordion-header" id="heading12">
                      <button
                        className={`accordion-button ${activeIndex !== 11 ? 'collapsed' : ''}`}
                        type="button"
                        onClick={() => toggleAccordion(11)}
                      >
                        Are Your Products Suitable For Standing Desks?
                      </button>
                    </h4>
                    <div
                      id="faq12"
                      className={`accordion-collapse collapse ${activeIndex === 11 ? 'show' : ''}`}
                      style={{ 
                        maxHeight: activeIndex === 11 ? '500px' : '0',
                        overflow: 'hidden',
                        transition: 'max-height 0.3s ease'
                      }}
                    >
                      <div className="accordion-body">
                        Absolutely! Our monitor arms are perfect for standing desks. The gas-spring adjustability allows you to easily reposition your monitors whether sitting or standing, providing ergonomic comfort in any position.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Faq;
