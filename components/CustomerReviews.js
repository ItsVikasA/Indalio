"use client";

const CustomerReviews = () => {
  const reviews = [
    {
      name: "Rajesh Kumar",
      company: "Tech Solutions Pvt Ltd",
      location: "Mumbai",
      rating: 5,
      review: "Ordered 50 units for our office. Excellent quality gas springs, smooth adjustments. Our employees love the ergonomic setup. Great bulk pricing too!",
      date: "November 2025"
    },
    {
      name: "Priya Sharma",
      company: "Freelance Graphic Designer",
      location: "Bangalore",
      rating: 5,
      review: "Perfect for my dual monitor setup! The cable management is fantastic. Installation took just 10 minutes. Highly recommend for content creators.",
      date: "October 2025"
    },
    {
      name: "Amit Patel",
      company: "Stock Trader",
      location: "Ahmedabad",
      rating: 5,
      review: "As a day trader with 3 monitors, these arms are a game-changer. Smooth adjustability, sturdy build. Can position screens exactly where I need them.",
      date: "November 2025"
    },
    {
      name: "Vikram Singh",
      company: "Office Furniture Dealer",
      location: "Delhi",
      rating: 5,
      review: "We're now official dealers for Indalio. Quality is top-notch, customers are very satisfied. Competitive pricing and great support from the team.",
      date: "September 2025"
    },
    {
      name: "Sneha Reddy",
      company: "IT Company - HR Manager",
      location: "Hyderabad",
      rating: 4,
      review: "Purchased 100 units for our new office. Quality is excellent, everyone appreciates the ergonomic benefits. Delivery was on time.",
      date: "October 2025"
    },
    {
      name: "Arjun Mehta",
      company: "Gaming Enthusiast",
      location: "Pune",
      rating: 5,
      review: "Best investment for my gaming setup! Dual monitor arm with perfect cable management. Looks clean, feels premium. Worth every rupee!",
      date: "November 2025"
    }
  ];

  const renderStars = (rating) => {
    return [...Array(5)].map((_, index) => (
      <i
        key={index}
        className={`fas fa-star`}
        style={{ 
          color: index < rating ? '#ffa500' : '#e0e0e0',
          marginRight: '3px'
        }}
      />
    ));
  };

  return (
    <section className="customer-reviews-section section-padding">
      <div className="container">
        <div className="section-title text-center">
          <span className="sub-content wow fadeInUp">
            <img src="assets/img/bale.png" alt="img" />
            Customer Testimonials
          </span>
          <h2 className="wow fadeInUp" data-wow-delay=".3s">
            What Our Customers Say
          </h2>
          <p className="mt-3 wow fadeInUp" data-wow-delay=".5s">
            Real feedback from businesses, professionals, and individuals using Indalio products
          </p>
        </div>

        <div className="row g-4">
          {reviews.map((review, index) => (
            <div 
              key={index}
              className="col-lg-4 col-md-6 wow fadeInUp" 
              data-wow-delay={`.${index + 3}s`}
            >
              <div 
                className="review-card"
                style={{
                  background: 'white',
                  padding: '30px',
                  borderRadius: '10px',
                  boxShadow: '0 5px 20px rgba(0,0,0,0.08)',
                  height: '100%',
                  transition: 'all 0.3s',
                  border: '1px solid #f0f0f0'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-5px)';
                  e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,0,0,0.12)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 5px 20px rgba(0,0,0,0.08)';
                }}
              >
                <div className="review-header" style={{ marginBottom: '15px' }}>
                  <div className="rating" style={{ marginBottom: '10px' }}>
                    {renderStars(review.rating)}
                  </div>
                  <h4 style={{ marginBottom: '5px', fontSize: '18px', color: '#1a1d2e' }}>
                    {review.name}
                  </h4>
                  <p style={{ 
                    fontSize: '14px', 
                    color: '#667eea', 
                    marginBottom: '3px',
                    fontWeight: '600'
                  }}>
                    {review.company}
                  </p>
                  <p style={{ fontSize: '13px', color: '#999', marginBottom: '0' }}>
                    <i className="fas fa-map-marker-alt me-1"></i>
                    {review.location} • {review.date}
                  </p>
                </div>
                <div className="review-text">
                  <p style={{ 
                    fontSize: '15px', 
                    lineHeight: '1.7',
                    color: '#666',
                    marginBottom: '0'
                  }}>
                    "{review.review}"
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Overall Rating Summary */}
        <div 
          className="rating-summary text-center mt-5 wow fadeInUp" 
          data-wow-delay=".7s"
          style={{
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            padding: '40px',
            borderRadius: '15px',
            color: 'white'
          }}
        >
          <div className="row align-items-center">
            <div className="col-md-4">
              <h2 style={{ fontSize: '64px', fontWeight: '700', marginBottom: '10px' }}>
                4.9
              </h2>
              <div style={{ fontSize: '24px', marginBottom: '10px' }}>
                {renderStars(5)}
              </div>
              <p style={{ fontSize: '16px', marginBottom: '0', opacity: '0.9' }}>
                Based on 200+ reviews
              </p>
            </div>
            <div className="col-md-4">
              <div style={{ textAlign: 'left', display: 'inline-block' }}>
                <p style={{ marginBottom: '10px' }}>5 ⭐ - 85%</p>
                <p style={{ marginBottom: '10px' }}>4 ⭐ - 12%</p>
                <p style={{ marginBottom: '10px' }}>3 ⭐ - 2%</p>
                <p style={{ marginBottom: '0' }}>2 ⭐ - 1%</p>
              </div>
            </div>
            <div className="col-md-4">
              <h4 style={{ marginBottom: '15px' }}>Join Our Happy Customers</h4>
              <a href="/contact" className="theme-btn white-border">
                Request Your Quote
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomerReviews;
