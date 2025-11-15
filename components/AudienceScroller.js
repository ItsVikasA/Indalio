"use client";

const AudienceScroller = ({ audiences, direction = "left" }) => {
  if (!audiences || audiences.length === 0) {
    return <div>No audiences data</div>;
  }

  return (
    <div style={{
      overflow: 'hidden',
      width: '100%',
      padding: '30px 0',
      position: 'relative'
    }}>
      <div style={{
        display: 'flex',
        gap: '24px',
        animation: direction === 'left' ? 'scrollLeft 50s linear infinite' : 'scrollRight 50s linear infinite',
        width: 'fit-content'
      }}
      onMouseEnter={(e) => e.currentTarget.style.animationPlayState = 'paused'}
      onMouseLeave={(e) => e.currentTarget.style.animationPlayState = 'running'}
      >
        {/* First set */}
        {audiences.map((audience, index) => (
          <div key={`first-${index}`} style={{
            minWidth: '380px',
            maxWidth: '380px',
            flexShrink: 0
          }}>
            <div style={{
              minHeight: audience.minHeight || '320px',
              padding: '30px 25px',
              borderRadius: '12px',
              boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
              transition: 'all 0.3s ease',
              background: '#fff',
              height: '100%'
            }}>
              <div style={{
                fontSize: '2.5rem',
                marginBottom: '20px',
                color: '#FF6600'
              }}>
                <i className={audience.icon} />
              </div>
              <h3 style={{
                fontSize: audience.titleSize || '1.15rem',
                fontWeight: '600',
                marginBottom: '15px',
                lineHeight: '1.4',
                color: '#1a1a1a'
              }}>{audience.title}</h3>
              <p style={{
                fontSize: '0.9rem',
                lineHeight: '1.6',
                color: '#666',
                margin: 0
              }}>{audience.description}</p>
            </div>
          </div>
        ))}
        {/* Duplicate set for seamless loop */}
        {audiences.map((audience, index) => (
          <div key={`second-${index}`} style={{
            minWidth: '380px',
            maxWidth: '380px',
            flexShrink: 0
          }}>
            <div style={{
              minHeight: audience.minHeight || '320px',
              padding: '30px 25px',
              borderRadius: '12px',
              boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
              transition: 'all 0.3s ease',
              background: '#fff',
              height: '100%'
            }}>
              <div style={{
                fontSize: '2.5rem',
                marginBottom: '20px',
                color: '#FF6600'
              }}>
                <i className={audience.icon} />
              </div>
              <h3 style={{
                fontSize: audience.titleSize || '1.15rem',
                fontWeight: '600',
                marginBottom: '15px',
                lineHeight: '1.4',
                color: '#1a1a1a'
              }}>{audience.title}</h3>
              <p style={{
                fontSize: '0.9rem',
                lineHeight: '1.6',
                color: '#666',
                margin: 0
              }}>{audience.description}</p>
            </div>
          </div>
        ))}
      </div>
      <style jsx>{`
        @keyframes scrollLeft {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes scrollRight {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
      `}</style>
    </div>
  );
};

export default AudienceScroller;
