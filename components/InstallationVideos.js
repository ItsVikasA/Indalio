"use client";

const InstallationVideos = () => {
  const videos = [
    {
      title: "Gas Spring Single Monitor Arm Installation",
      duration: "5:30",
      thumbnail: "assets/img/service/04.png",
      videoUrl: "#",
      views: "1.2K",
      description: "Step-by-step guide to install your single monitor arm with clamp or grommet mount"
    },
    {
      title: "Dual Monitor Arm Setup Guide",
      duration: "8:15",
      thumbnail: "assets/img/service/05.png",
      videoUrl: "#",
      views: "950",
      description: "Complete installation tutorial for dual monitor arms with cable management tips"
    },
    {
      title: "Wall-Mounted Monitor Arm Installation",
      duration: "6:45",
      thumbnail: "assets/img/service/06.png",
      videoUrl: "#",
      views: "780",
      description: "Learn how to securely mount your monitor arm on walls for CCTV and control rooms"
    },
    {
      title: "Cable Management Best Practices",
      duration: "4:20",
      thumbnail: "assets/img/service/07.png",
      videoUrl: "#",
      views: "1.5K",
      description: "Professional cable organization using Indalio Spinal Cable Organizers"
    }
  ];

  return (
    <section className="installation-videos-section section-padding">
      <div className="container">
        <div className="section-title text-center">
          <span className="sub-content wow fadeInUp">
            <img src="assets/img/bale.png" alt="img" />
            Installation Guides
          </span>
          <h2 className="wow fadeInUp" data-wow-delay=".3s">
            Step-by-Step Video Tutorials
          </h2>
          <p className="mt-3 wow fadeInUp" data-wow-delay=".5s">
            Watch our detailed installation guides to set up your Indalio products quickly and easily
          </p>
        </div>

        <div className="row g-4">
          {videos.map((video, index) => (
            <div 
              key={index}
              className="col-lg-6 wow fadeInUp" 
              data-wow-delay={`.${index + 3}s`}
            >
              <div 
                className="video-card"
                style={{
                  background: 'white',
                  borderRadius: '12px',
                  overflow: 'hidden',
                  boxShadow: '0 5px 20px rgba(0,0,0,0.08)',
                  transition: 'all 0.3s'
                }}
                onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
                onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
              >
                <div 
                  className="video-thumbnail"
                  style={{
                    position: 'relative',
                    paddingTop: '56.25%',
                    background: '#f0f0f0'
                  }}
                >
                  <img 
                    src={video.thumbnail}
                    alt={video.title}
                    style={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover'
                    }}
                  />
                  <div
                    style={{
                      position: 'absolute',
                      top: '50%',
                      left: '50%',
                      transform: 'translate(-50%, -50%)',
                      width: '70px',
                      height: '70px',
                      borderRadius: '50%',
                      background: 'rgba(102, 126, 234, 0.9)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      cursor: 'pointer',
                      transition: 'all 0.3s'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = 'rgba(102, 126, 234, 1)';
                      e.currentTarget.style.transform = 'translate(-50%, -50%) scale(1.1)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = 'rgba(102, 126, 234, 0.9)';
                      e.currentTarget.style.transform = 'translate(-50%, -50%) scale(1)';
                    }}
                  >
                    <i className="fas fa-play" style={{ color: 'white', fontSize: '24px', marginLeft: '5px' }}></i>
                  </div>
                  <div
                    style={{
                      position: 'absolute',
                      bottom: '10px',
                      right: '10px',
                      background: 'rgba(0,0,0,0.8)',
                      color: 'white',
                      padding: '5px 10px',
                      borderRadius: '5px',
                      fontSize: '13px',
                      fontWeight: '600'
                    }}
                  >
                    {video.duration}
                  </div>
                </div>
                <div style={{ padding: '20px' }}>
                  <h4 style={{ 
                    fontSize: '18px', 
                    marginBottom: '10px',
                    color: '#1a1d2e'
                  }}>
                    {video.title}
                  </h4>
                  <p style={{ 
                    fontSize: '14px', 
                    color: '#666',
                    marginBottom: '12px',
                    lineHeight: '1.6'
                  }}>
                    {video.description}
                  </p>
                  <div style={{ 
                    display: 'flex', 
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    paddingTop: '12px',
                    borderTop: '1px solid #f0f0f0'
                  }}>
                    <span style={{ fontSize: '13px', color: '#999' }}>
                      <i className="far fa-eye me-1"></i>
                      {video.views} views
                    </span>
                    <a 
                      href={video.videoUrl}
                      style={{
                        color: '#667eea',
                        fontSize: '14px',
                        fontWeight: '600',
                        textDecoration: 'none'
                      }}
                    >
                      Watch Now <i className="far fa-arrow-right ms-1"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Resources */}
        <div 
          className="additional-resources text-center mt-5 wow fadeInUp" 
          data-wow-delay=".7s"
          style={{
            background: '#f8f9fa',
            padding: '40px',
            borderRadius: '12px'
          }}
        >
          <h4 style={{ marginBottom: '15px', color: '#1a1d2e' }}>
            Need Professional Installation?
          </h4>
          <p style={{ color: '#666', marginBottom: '20px' }}>
            For bulk orders, we can arrange on-site installation support
          </p>
          <div style={{ display: 'flex', gap: '15px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="/contact" className="theme-btn">
              Request Installation Support
            </a>
            <button className="theme-btn white-border" style={{ background: 'white' }}>
              <i className="far fa-file-pdf me-2"></i>
              Download PDF Guide
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InstallationVideos;
