import Breadcrumb from "@/components/Breadcrumb";
import Cta from "@/components/Cta";
import { TestimonialSlider1 } from "@/components/TestimonialSlider";
import NextLayout from "@/layouts/NextLayout";
import Link from "next/link";

const page = () => {
  return (
    <NextLayout>
      <Breadcrumb pageName="Team Member" />
      <section className="about-team-section fix section-padding">
        <div className="container">
          <div className="section-title-area">
            <div className="section-title">
              <span className="sub-content wow fadeInUp">
                <img src="assets/img/bale.png" alt="img" />
                About The Team
              </span>
              <h2 className="wow fadeInUp" data-wow-delay=".3s">
                Expert Team Dedicated to <br /> Manufacturing Excellence in{" "}
                <br />
                Ergonomic Workspace Solutions
              </h2>
            </div>
            <div className="text-items">
              <p className="mb-3 wow fadeInUp" data-wow-delay=".3s">
                At Indalio, our team combines engineering expertise with manufacturing precision <br />
                to deliver world-class monitor arms and ergonomic accessories from our Ludhiana facility
              </p>
              <p className="wow fadeInUp" data-wow-delay=".5s">
                From design engineers to quality control specialists, every team member <br /> is committed to producing innovative workspace solutions that meet international <br /> standards while maintaining competitive pricing for the Indian market
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-8 wow fadeInUp" data-wow-delay=".3s">
              <div className="about-image">
                <img src="assets/img/team/about-img-1.jpg" alt="img" />
              </div>
            </div>
            <div className="col-lg-4 wow fadeInUp" data-wow-delay=".5s">
              <div className="about-image">
                <img src="assets/img/team/about-img-2.jpg" alt="img" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="team-section-3 section-padding pt-0">
        <div className="container">
          <div className="section-title text-center">
            <span className="sub-content">
              <img src="assets/img/bale.png" alt="img" />
              Team Member
            </span>
            <h2>Meet Our Professional Team Members</h2>
          </div>
          <div className="row">
            <div
              className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay=".2s"
            >
              <div className="team-card-items style-2">
                <div className="team-image">
                  <img src="assets/img/team/06.jpg" alt="team-img" />
                  <div className="icon-list">
                    <ul>
                      <li>
                        <a href="#">
                          <i className="fab fa-facebook-f" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fab fa-twitter" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fab fa-linkedin-in" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fab fa-pinterest-p" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="team-content">
                  <h4>
                    <Link href="team-details">Rajesh Kumar</Link>
                  </h4>
                  <p>Founder & CEO</p>
                </div>
              </div>
            </div>
            <div
              className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay=".4s"
            >
              <div className="team-card-items style-2">
                <div className="team-image">
                  <img src="assets/img/team/07.jpg" alt="team-img" />
                  <div className="icon-list">
                    <ul>
                      <li>
                        <a href="#">
                          <i className="fab fa-facebook-f" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fab fa-twitter" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fab fa-linkedin-in" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fab fa-pinterest-p" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="team-content">
                  <h4>
                    <Link href="team-details">Amit Singh</Link>
                  </h4>
                  <p>Chief Engineer</p>
                </div>
              </div>
            </div>
            <div
              className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay=".6s"
            >
              <div className="team-card-items style-2">
                <div className="team-image">
                  <img src="assets/img/team/08.jpg" alt="team-img" />
                  <div className="icon-list">
                    <ul>
                      <li>
                        <a href="#">
                          <i className="fab fa-facebook-f" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fab fa-twitter" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fab fa-linkedin-in" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fab fa-pinterest-p" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="team-content">
                  <h4>
                    <Link href="team-details">Priya Sharma</Link>
                  </h4>
                  <p>Quality Control Manager</p>
                </div>
              </div>
            </div>
            <div
              className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay=".8s"
            >
              <div className="team-card-items style-2">
                <div className="team-image">
                  <img src="assets/img/team/09.jpg" alt="team-img" />
                  <div className="icon-list">
                    <ul>
                      <li>
                        <a href="#">
                          <i className="fab fa-facebook-f" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fab fa-twitter" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fab fa-linkedin-in" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fab fa-pinterest-p" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="team-content">
                  <h4>
                    <Link href="team-details">Vikram Patel</Link>
                  </h4>
                  <p>Production Head</p>
                </div>
              </div>
            </div>
            <div
              className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay=".2s"
            >
              <div className="team-card-items style-2">
                <div className="team-image">
                  <img src="assets/img/team/09.jpg" alt="team-img" />
                  <div className="icon-list">
                    <ul>
                      <li>
                        <a href="#">
                          <i className="fab fa-facebook-f" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fab fa-twitter" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fab fa-linkedin-in" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fab fa-pinterest-p" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="team-content">
                  <h4>
                    <Link href="team-details">Neha Gupta</Link>
                  </h4>
                  <p>Sales & Marketing Head</p>
                </div>
              </div>
            </div>
            <div
              className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay=".4s"
            >
              <div className="team-card-items style-2">
                <div className="team-image">
                  <img src="assets/img/team/11.jpg" alt="team-img" />
                  <div className="icon-list">
                    <ul>
                      <li>
                        <a href="#">
                          <i className="fab fa-facebook-f" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fab fa-twitter" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fab fa-linkedin-in" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fab fa-pinterest-p" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="team-content">
                  <h4>
                    <Link href="team-details">Suresh Reddy</Link>
                  </h4>
                  <p>Operations Manager</p>
                </div>
              </div>
            </div>
            <div
              className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay=".6s"
            >
              <div className="team-card-items style-2">
                <div className="team-image">
                  <img src="assets/img/team/12.jpg" alt="team-img" />
                  <div className="icon-list">
                    <ul>
                      <li>
                        <a href="#">
                          <i className="fab fa-facebook-f" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fab fa-twitter" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fab fa-linkedin-in" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fab fa-pinterest-p" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="team-content">
                  <h4>
                    <Link href="team-details">Kavita Verma</Link>
                  </h4>
                  <p>Design Specialist</p>
                </div>
              </div>
            </div>
            <div
              className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay=".8s"
            >
              <div className="team-card-items style-2">
                <div className="team-image">
                  <img src="assets/img/team/13.jpg" alt="team-img" />
                  <div className="icon-list">
                    <ul>
                      <li>
                        <a href="#">
                          <i className="fab fa-facebook-f" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fab fa-twitter" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fab fa-linkedin-in" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fab fa-pinterest-p" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="team-content">
                  <h4>
                    <Link href="team-details">Rahul Mehta</Link>
                  </h4>
                  <p>Installation Specialist</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Cta sectionPadding />
      <section className="testimonial-section section-padding pt-0">
        <div className="container">
          <div className="section-title text-center mb-0">
            <span className="sub-content wow fadeInUp">
              <img src="assets/img/bale.png" alt="img" />
              Clients Feedback
            </span>
            <h2 className="wow fadeInUp" data-wow-delay=".3s">
              What Our Clients Say About Indalio
            </h2>
          </div>
          <div className="testimonial-wrapper pt-5">
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
    </NextLayout>
  );
};
export default page;
