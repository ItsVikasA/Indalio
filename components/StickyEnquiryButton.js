"use client";
import { useState } from "react";
import Link from "next/link";

const StickyEnquiryButton = () => {
  const [showOptions, setShowOptions] = useState(false);

  return (
    <>
      {/* Main Sticky Button */}
      <div 
        className="sticky-enquiry-btn"
        style={{
          position: 'fixed',
          bottom: '20px',
          right: '20px',
          zIndex: 9999,
        }}
      >
        {/* Options Menu */}
        {showOptions && (
          <div 
            className="enquiry-options"
            style={{
              position: 'absolute',
              bottom: '70px',
              right: '0',
              background: 'white',
              borderRadius: '10px',
              boxShadow: '0 5px 25px rgba(0,0,0,0.15)',
              padding: '10px',
              minWidth: '200px',
            }}
          >
            <Link 
              href="/contact"
              className="enquiry-option"
              style={{
                display: 'block',
                padding: '12px 15px',
                color: '#1a1d2e',
                textDecoration: 'none',
                borderRadius: '5px',
                marginBottom: '5px',
                transition: 'all 0.3s',
              }}
              onMouseEnter={(e) => e.target.style.background = '#f0f0f0'}
              onMouseLeave={(e) => e.target.style.background = 'transparent'}
            >
              <i className="far fa-envelope me-2"></i> Request Quote
            </Link>
            <a 
              href="tel:+919988092664"
              className="enquiry-option"
              style={{
                display: 'block',
                padding: '12px 15px',
                color: '#1a1d2e',
                textDecoration: 'none',
                borderRadius: '5px',
                marginBottom: '5px',
                transition: 'all 0.3s',
              }}
              onMouseEnter={(e) => e.target.style.background = '#f0f0f0'}
              onMouseLeave={(e) => e.target.style.background = 'transparent'}
            >
              <i className="far fa-phone me-2"></i> Call Sales
            </a>
            <a 
              href="https://wa.me/919988092664?text=Hi%2C%20I%27m%20interested%20in%20Indalio%20monitor%20arms"
              target="_blank"
              rel="noopener noreferrer"
              className="enquiry-option"
              style={{
                display: 'block',
                padding: '12px 15px',
                color: '#1a1d2e',
                textDecoration: 'none',
                borderRadius: '5px',
                transition: 'all 0.3s',
              }}
              onMouseEnter={(e) => e.target.style.background = '#f0f0f0'}
              onMouseLeave={(e) => e.target.style.background = 'transparent'}
            >
              <i className="fab fa-whatsapp me-2"></i> WhatsApp
            </a>
          </div>
        )}
        
        {/* Main Button */}
        <button
          onClick={() => setShowOptions(!showOptions)}
          style={{
            width: '60px',
            height: '60px',
            borderRadius: '50%',
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            border: 'none',
            color: 'white',
            fontSize: '24px',
            cursor: 'pointer',
            boxShadow: '0 4px 15px rgba(102, 126, 234, 0.4)',
            transition: 'all 0.3s',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
          onMouseEnter={(e) => {
            e.target.style.transform = 'scale(1.1)';
            e.target.style.boxShadow = '0 6px 20px rgba(102, 126, 234, 0.6)';
          }}
          onMouseLeave={(e) => {
            e.target.style.transform = 'scale(1)';
            e.target.style.boxShadow = '0 4px 15px rgba(102, 126, 234, 0.4)';
          }}
        >
          {showOptions ? <i className="fas fa-times"></i> : <i className="fas fa-comments"></i>}
        </button>
      </div>

      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/919988092664?text=Hi%2C%20I%27m%20interested%20in%20Indalio%20monitor%20arms"
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-float"
        style={{
          position: 'fixed',
          bottom: '90px',
          right: '20px',
          width: '50px',
          height: '50px',
          borderRadius: '50%',
          background: '#25D366',
          color: 'white',
          fontSize: '28px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 4px 15px rgba(37, 211, 102, 0.4)',
          zIndex: 9998,
          transition: 'all 0.3s',
          textDecoration: 'none',
        }}
        onMouseEnter={(e) => {
          e.target.style.transform = 'scale(1.1)';
          e.target.style.boxShadow = '0 6px 20px rgba(37, 211, 102, 0.6)';
        }}
        onMouseLeave={(e) => {
          e.target.style.transform = 'scale(1)';
          e.target.style.boxShadow = '0 4px 15px rgba(37, 211, 102, 0.4)';
        }}
      >
        <i className="fab fa-whatsapp"></i>
      </a>
    </>
  );
};

export default StickyEnquiryButton;
