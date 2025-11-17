import Breadcrumb from "@/components/Breadcrumb";
import NextLayout from "@/layouts/NextLayout";
import Link from "next/link";

const page = () => {
  return (
    <NextLayout>
      <Breadcrumb pageName="Blog Standard" />
      <section className="blog-wrapper news-wrapper section-padding">
        <div className="container">
          <div className="news-area">
            <div className="row">
              <div className="col-12 col-lg-8">
                <div className="blog-posts">
                  <div className="single-blog-post">
                    <div
                      className="post-featured-thumb bg-cover"
                      style={{
                        backgroundImage: 'url("assets/img/news/post-1.jpg")',
                      }}
                    ></div>
                    <div className="post-content">
                      <div className="post-meta">
                        <span>
                          <i className="fal fa-comments" />
                          28 Comments
                        </span>
                        <span>
                          <i className="fal fa-calendar-alt" />
                          15th November 2025
                        </span>
                      </div>
                      <h2>
                        <Link href="news-details">
                          Why Gas Spring Monitor Arms Are Essential for Modern Workspaces
                        </Link>
                      </h2>
                      <p>
                        Discover how gas spring monitor arms from Indalio are revolutionizing workplace ergonomics across India. Learn about the engineering excellence, health benefits, and productivity improvements that make these accessories essential for modern offices.
                      </p>
                      <Link
                        href="news-details"
                        className="theme-btn mt-4 line-height"
                      >
                        <span>
                          READ MORE <i className="fas fa-chevron-right" />
                        </span>
                      </Link>
                    </div>
                  </div>
                  <div className="single-blog-post">
                    <div
                      className="post-featured-thumb bg-cover"
                      style={{
                        backgroundImage: 'url("assets/img/news/post-2.jpg")',
                      }}
                    ></div>
                    <div className="post-content">
                      <div className="post-meta">
                        <span>
                          <i className="fal fa-comments" />
                          22 Comments
                        </span>
                        <span>
                          <i className="fal fa-calendar-alt" />
                          10th November 2025
                        </span>
                      </div>
                      <h2>
                        <Link href="news-details">
                          Complete Guide to Choosing the Right Monitor Arm for Your Setup
                        </Link>
                      </h2>
                      <p>
                        From VESA compatibility to weight capacity, explore everything you need to know when selecting a monitor arm. Our comprehensive guide covers technical specifications, installation methods, and how to match the right arm to your workspace needs.
                      </p>
                      <Link
                        href="news-details"
                        className="theme-btn mt-4 line-height"
                      >
                        <span>
                          READ MORE <i className="fas fa-chevron-right" />
                        </span>
                      </Link>
                    </div>
                  </div>
                  <div className="single-blog-post">
                    <div
                      className="post-featured-thumb bg-cover"
                      style={{
                        backgroundImage: 'url("assets/img/news/post-6.jpg")',
                      }}
                    >
                      <div className="video-play-btn">
                        <a
                          href="https://www.youtube.com/watch?v=Cn4G2lZ_g2I"
                          className="video-button ripple video-popup"
                        >
                          <i className="fas fa-play" />
                        </a>
                      </div>
                    </div>
                    <div className="post-content">
                      <div className="post-meta">
                        <span>
                          <i className="fal fa-comments" />
                          18 Comments
                        </span>
                        <span>
                          <i className="fal fa-calendar-alt" />
                          5th November 2025
                        </span>
                      </div>
                      <h2>
                        <Link href="news-details">
                          Cable Management Solutions: Creating a Clean & Organized Workspace
                        </Link>
                      </h2>
                      <p>
                        Transform cluttered desks into organized workspaces with integrated cable management systems. Learn how Indalio monitor arms help maintain clean aesthetics while improving functionality and safety in your office environment.
                      </p>
                      <Link
                        href="news-details"
                        className="theme-btn mt-4 line-height"
                      >
                        <span>
                          READ MORE <i className="fas fa-chevron-right" />
                        </span>
                      </Link>
                    </div>
                  </div>
                  <div className="single-blog-post">
                    <div
                      className="post-featured-thumb bg-cover"
                      style={{
                        backgroundImage: 'url("assets/img/news/post-3.jpg")',
                      }}
                    ></div>
                    <div className="post-content">
                      <div className="post-meta">
                        <span>
                          <i className="fal fa-comments" />
                          31 Comments
                        </span>
                        <span>
                          <i className="fal fa-calendar-alt" />
                          1st November 2025
                        </span>
                      </div>
                      <h2>
                        <Link href="news-details">
                          Dual Monitor Setup: Benefits & Best Practices for Productivity
                        </Link>
                      </h2>
                      <p>
                        Maximize your productivity with a properly configured dual monitor setup. Discover ergonomic positioning tips, the advantages of using dual monitor arms, and how to create the perfect multi-display workspace for your needs.
                      </p>
                      <Link
                        href="news-details"
                        className="theme-btn mt-4 line-height"
                      >
                        <span>
                          READ MORE <i className="fas fa-chevron-right" />
                        </span>
                      </Link>
                    </div>
                  </div>
                  <div className="single-blog-post quote-post format-quote">
                    <div className="post-content text-white bg-cover">
                      <div className="quote-content">
                        <div className="icon">
                          <i className="fas fa-quote-left" />
                        </div>
                        <div className="quote-text">
                          <h2>
                            "Switching to Indalio monitor arms transformed our office. The quality rivals international brands at competitive prices. Proud to support Indian manufacturing."
                          </h2>
                          <div className="post-meta">
                            <span>
                              <i className="fal fa-comments" />
                              42 Comments
                            </span>
                            <span>
                              <i className="fal fa-calendar-alt" />
                              28th October 2025
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="single-blog-post">
                    <div className="postbox-audio">
                      <iframe
                        allow="autoplay"
                        src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/316547873&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
                      />
                    </div>
                    <div className="post-content">
                      <div className="post-meta">
                        <span>
                          <i className="fal fa-comments" />
                          15 Comments
                        </span>
                        <span>
                          <i className="fal fa-calendar-alt" />
                          25th October 2025
                        </span>
                      </div>
                      <h2>
                        <Link href="news-details">
                          Ergonomics in the Workplace: Preventing Neck and Back Pain
                        </Link>
                      </h2>
                      <p>
                        Learn how proper monitor positioning can significantly reduce workplace injuries and discomfort. Explore the science behind ergonomic monitor arms and their role in promoting healthier, more comfortable work environments.
                      </p>
                      <Link
                        href="news-details"
                        className="theme-btn mt-4 line-height"
                      >
                        <span>
                          READ MORE <i className="fas fa-chevron-right" />
                        </span>
                      </Link>
                    </div>
                  </div>
                  <div className="single-blog-post">
                    <div className="swiper blog-post-slider">
                      <div className="swiper-wrapper">
                        <div className="swiper-slide">
                          <div
                            className="post-featured-thumb bg-cover"
                            style={{
                              backgroundImage:
                                'url("assets/img/news/post-7.jpg")',
                            }}
                          ></div>
                        </div>
                        <div className="swiper-slide">
                          <div
                            className="post-featured-thumb bg-cover"
                            style={{
                              backgroundImage:
                                'url("assets/img/news/post-8.jpg")',
                            }}
                          ></div>
                        </div>
                        <div className="swiper-slide">
                          <div
                            className="post-featured-thumb bg-cover"
                            style={{
                              backgroundImage:
                                'url("assets/img/news/post-9.jpg")',
                            }}
                          ></div>
                        </div>
                      </div>
                      <div className="array-button">
                        <button className="array-prev">
                          <i className="far fa-chevron-left" />
                        </button>
                        <button className="array-next">
                          <i className="far fa-chevron-right" />
                        </button>
                      </div>
                    </div>
                    <div className="post-content">
                      <div className="post-meta">
                        <span>
                          <i className="fal fa-comments" />
                          26 Comments
                        </span>
                        <span>
                          <i className="fal fa-calendar-alt" />
                          20th October 2025
                        </span>
                      </div>
                      <h2>
                        <Link href="news-details">
                          Wall-Mounted vs Desk-Mounted Monitor Arms: Which Is Right for You?
                        </Link>
                      </h2>
                      <p>
                        Compare the benefits of wall-mounted and desk-mounted monitor solutions for different workspace scenarios. From control rooms to corporate offices, understand which mounting option best suits your specific requirements and space constraints.
                      </p>
                      <Link
                        href="news-details"
                        className="theme-btn mt-4 line-height"
                      >
                        <span>
                          READ MORE <i className="fas fa-chevron-right" />
                        </span>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="page-nav-wrap mt-5 text-center">
                  <ul>
                    <li>
                      <a className="page-numbers" href="#">
                        <i className="fal fa-long-arrow-left" />
                      </a>
                    </li>
                    <li>
                      <a className="page-numbers" href="#">
                        01
                      </a>
                    </li>
                    <li>
                      <a className="page-numbers" href="#">
                        02
                      </a>
                    </li>
                    <li>
                      <a className="page-numbers" href="#">
                        ..
                      </a>
                    </li>
                    <li>
                      <a className="page-numbers" href="#">
                        10
                      </a>
                    </li>
                    <li>
                      <a className="page-numbers" href="#">
                        11
                      </a>
                    </li>
                    <li>
                      <a className="page-numbers" href="#">
                        <i className="fal fa-long-arrow-right" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-12 col-lg-4">
                <div className="main-sidebar">
                  <div className="single-sidebar-widget">
                    <div className="wid-title">
                      <h3>Search</h3>
                    </div>
                    <div className="search_widget">
                      <form action="#">
                        <input type="text" placeholder="Keywords here...." />
                        <button type="submit">
                          <i className="fal fa-search" />
                        </button>
                      </form>
                    </div>
                  </div>
                  <div className="single-sidebar-widget">
                    <div className="wid-title">
                      <h3>Popular Feeds</h3>
                    </div>
                    <div className="popular-posts">
                      <div className="single-post-item">
                        <div
                          className="thumb bg-cover"
                          style={{
                            backgroundImage: 'url("assets/img/news/pp1.jpg")',
                          }}
                        />
                        <div className="post-content">
                          <h5>
                            <Link href="news-details">
                              Gas Spring Monitor Arms: Essential Workspace Tool
                            </Link>
                          </h5>
                          <div className="post-date">
                            <i className="far fa-calendar-alt" />
                            15th November 2025
                          </div>
                        </div>
                      </div>
                      <div className="single-post-item">
                        <div
                          className="thumb bg-cover"
                          style={{
                            backgroundImage: 'url("assets/img/news/pp2.jpg")',
                          }}
                        />
                        <div className="post-content">
                          <h5>
                            <Link href="news-details">
                              {" "}
                              Complete Guide to Choosing Monitor Arms
                            </Link>
                          </h5>
                          <div className="post-date">
                            <i className="far fa-calendar-alt" />
                            10th November 2025
                          </div>
                        </div>
                      </div>
                      <div className="single-post-item">
                        <div
                          className="thumb bg-cover"
                          style={{
                            backgroundImage: 'url("assets/img/news/pp3.jpg")',
                          }}
                        />
                        <div className="post-content">
                          <h5>
                            <Link href="news-details">
                              {" "}
                              Cable Management for Clean Workspace
                            </Link>
                          </h5>
                          <div className="post-date">
                            <i className="far fa-calendar-alt" />
                            5th November 2025
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="single-sidebar-widget">
                    <div className="wid-title">
                      <h3>Categories</h3>
                    </div>
                    <div className="widget_categories">
                      <ul>
                        <li>
                          <Link href="news">
                            Monitor Arms <span>12</span>
                          </Link>
                        </li>
                        <li>
                          <Link href="news">
                            Ergonomic Solutions <span>08</span>
                          </Link>
                        </li>
                        <li>
                          <Link href="news">
                            Workspace Design <span>15</span>
                          </Link>
                        </li>
                        <li>
                          <Link href="news">
                            Cable Management <span>06</span>
                          </Link>
                        </li>
                        <li>
                          <Link href="news">
                            Office Accessories <span>10</span>
                          </Link>
                        </li>
                        <li>
                          <Link href="news">
                            Product Reviews <span>09</span>
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="single-sidebar-widget">
                    <div className="wid-title">
                      <h3>Never Miss News</h3>
                    </div>
                    <div className="social-link">
                      <a href="#">
                        <i className="fab fa-facebook-f" />
                      </a>
                      <a href="#">
                        <i className="fab fa-twitter" />
                      </a>
                      <a href="#">
                        <i className="fab fa-instagram" />
                      </a>
                      <a href="#">
                        <i className="fab fa-linkedin-in" />
                      </a>
                      <a href="#">
                        <i className="fab fa-youtube" />
                      </a>
                    </div>
                  </div>
                  <div className="single-sidebar-widget">
                    <div className="wid-title">
                      <h3>Popular Tags</h3>
                    </div>
                    <div className="tagcloud">
                      <Link href="news-details">Gas Spring</Link>
                      <Link href="news-details">VESA Mount</Link>
                      <Link href="news-details">Ergonomics</Link>
                      <Link href="news-details">Dual Monitor</Link>
                      <Link href="news-details">Wall Mount</Link>
                      <Link href="news-details">Desk Setup</Link>
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
