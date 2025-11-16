"use client";
import Breadcrumb from "@/components/Breadcrumb";
import Cta from "@/components/Cta";
import Faq from "@/components/Faq";
import NextLayout from "@/layouts/NextLayout";
import Link from "next/link";

const page = () => {
  return (
    <NextLayout>
      <Breadcrumb pageName="Our Products" pageTitle="Workspace Solutions" />
      
      {/* Hero Products Section with Modern Design */}
      <section className="service-section section-padding" style={{background: 'linear-gradient(180deg, #f8f9fa 0%, #ffffff 100%)'}}>
        <div className="container">
          <div className="section-title text-center mb-5">
            <span className="sub-content wow fadeInUp" style={{background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', color: 'white', padding: '10px 25px', borderRadius: '30px', display: 'inline-flex', alignItems: 'center', gap: '10px'}}>
              <img src="assets/img/bale.png" alt="img" style={{filter: 'brightness(0) invert(1)'}} />
              Our Product Range
            </span>
            <h2 className="wow fadeInUp mt-4" data-wow-delay=".3s" style={{fontSize: '48px', fontWeight: '700', background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'}}>
              Premium Workspace Solutions
            </h2>
            <p className="mt-3 wow fadeInUp" data-wow-delay=".5s" style={{fontSize: '18px', color: '#666', maxWidth: '700px', margin: '20px auto'}}>
              Engineered for excellence. Designed for comfort. Built to last.
            </p>
          </div>

          {/* Product Cards with Hover Effects */}
          <div className="row g-4">
            {/* Product 1 - Single Monitor Arm */}
            <div className="col-lg-6 wow fadeInUp" data-wow-delay=".3s">
              <div style={{
                position: 'relative',
                borderRadius: '20px',
                overflow: 'hidden',
                boxShadow: '0 10px 40px rgba(0,0,0,0.1)',
                transition: 'all 0.4s ease',
                background: 'white',
                height: '100%'
              }} className="product-card-hover">
                <div style={{position: 'relative', height: '350px', overflow: 'hidden'}}>
                  <img 
                    src="/assets/img/products/monitor-arm-1.jpg" 
                    alt="Gas Spring Single Monitor Arm" 
                    style={{
                      width: '100%', 
                      height: '100%', 
                      objectFit: 'cover',
                      transition: 'transform 0.4s ease'
                    }} 
                  />
                  <div style={{
                    position: 'absolute',
                    top: '20px',
                    right: '20px',
                    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                    color: 'white',
                    padding: '8px 20px',
                    borderRadius: '20px',
                    fontSize: '14px',
                    fontWeight: '600'
                  }}>
                    Best Seller
                  </div>
                </div>
                <div style={{padding: '30px'}}>
                  <h3 style={{fontSize: '24px', fontWeight: '700', marginBottom: '15px', color: '#1a1a1a'}}>
                    Gas Spring Single Monitor Arm
                  </h3>
                  <p style={{color: '#666', lineHeight: '1.8', marginBottom: '20px'}}>
                    Premium height-adjustable monitor arm with smooth gas-spring technology. Perfect for ergonomic workspace setups with effortless positioning.
                  </p>
                  <div style={{
                    display: 'flex',
                    gap: '15px',
                    flexWrap: 'wrap',
                    marginBottom: '20px'
                  }}>
                    <span style={{background: '#f0f0f0', padding: '6px 15px', borderRadius: '15px', fontSize: '13px', fontWeight: '600'}}>
                      17-32" Monitors
                    </span>
                    <span style={{background: '#f0f0f0', padding: '6px 15px', borderRadius: '15px', fontSize: '13px', fontWeight: '600'}}>
                      360° Rotation
                    </span>
                    <span style={{background: '#f0f0f0', padding: '6px 15px', borderRadius: '15px', fontSize: '13px', fontWeight: '600'}}>
                      VESA Compatible
                    </span>
                  </div>
                  <Link href="contact" style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '10px',
                    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                    color: 'white',
                    padding: '12px 30px',
                    borderRadius: '25px',
                    textDecoration: 'none',
                    fontWeight: '600',
                    transition: 'transform 0.3s ease'
                  }} className="product-btn">
                    Get Quote <i className="far fa-arrow-right" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Product 2 - Dual Monitor Arm */}
            <div className="col-lg-6 wow fadeInUp" data-wow-delay=".5s">
              <div style={{
                position: 'relative',
                borderRadius: '20px',
                overflow: 'hidden',
                boxShadow: '0 10px 40px rgba(0,0,0,0.1)',
                transition: 'all 0.4s ease',
                background: 'white',
                height: '100%'
              }} className="product-card-hover">
                <div style={{position: 'relative', height: '350px', overflow: 'hidden'}}>
                  <img 
                    src="/assets/img/products/monitor-arm-2.jpg" 
                    alt="Gas Spring Dual Monitor Arm" 
                    style={{
                      width: '100%', 
                      height: '100%', 
                      objectFit: 'cover',
                      transition: 'transform 0.4s ease'
                    }} 
                  />
                  <div style={{
                    position: 'absolute',
                    top: '20px',
                    right: '20px',
                    background: 'linear-gradient(135deg, #2c3e50 0%, #34495e 100%)',
                    color: 'white',
                    padding: '8px 20px',
                    borderRadius: '20px',
                    fontSize: '14px',
                    fontWeight: '600'
                  }}>
                    Pro Series
                  </div>
                </div>
                <div style={{padding: '30px'}}>
                  <h3 style={{fontSize: '24px', fontWeight: '700', marginBottom: '15px', color: '#1a1a1a'}}>
                    Gas Spring Dual Monitor Arm
                  </h3>
                  <p style={{color: '#666', lineHeight: '1.8', marginBottom: '20px'}}>
                    Heavy-duty dual-screen solution with independent movement. Designed for professionals who demand maximum flexibility and productivity.
                  </p>
                  <div style={{
                    display: 'flex',
                    gap: '15px',
                    flexWrap: 'wrap',
                    marginBottom: '20px'
                  }}>
                    <span style={{background: '#f0f0f0', padding: '6px 15px', borderRadius: '15px', fontSize: '13px', fontWeight: '600'}}>
                      Dual Display
                    </span>
                    <span style={{background: '#f0f0f0', padding: '6px 15px', borderRadius: '15px', fontSize: '13px', fontWeight: '600'}}>
                      Independent Arms
                    </span>
                    <span style={{background: '#f0f0f0', padding: '6px 15px', borderRadius: '15px', fontSize: '13px', fontWeight: '600'}}>
                      Heavy Duty
                    </span>
                  </div>
                  <Link href="contact" style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '10px',
                    background: 'linear-gradient(135deg, #2c3e50 0%, #34495e 100%)',
                    color: 'white',
                    padding: '12px 30px',
                    borderRadius: '25px',
                    textDecoration: 'none',
                    fontWeight: '600',
                    transition: 'transform 0.3s ease'
                  }} className="product-btn">
                    Get Quote <i className="far fa-arrow-right" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Product 3 - Wall Mounted */}
            <div className="col-lg-6 wow fadeInUp" data-wow-delay=".7s">
              <div style={{
                position: 'relative',
                borderRadius: '20px',
                overflow: 'hidden',
                boxShadow: '0 10px 40px rgba(0,0,0,0.1)',
                transition: 'all 0.4s ease',
                background: 'white',
                height: '100%'
              }} className="product-card-hover">
                <div style={{position: 'relative', height: '350px', overflow: 'hidden'}}>
                  <img 
                    src="/assets/img/products/monitor-arm-3.jpg" 
                    alt="Wall-Mounted Monitor Arm" 
                    style={{
                      width: '100%', 
                      height: '100%', 
                      objectFit: 'cover',
                      transition: 'transform 0.4s ease'
                    }} 
                  />
                  <div style={{
                    position: 'absolute',
                    top: '20px',
                    right: '20px',
                    background: 'linear-gradient(135deg, #11998e 0%, #38ef7d 100%)',
                    color: 'white',
                    padding: '8px 20px',
                    borderRadius: '20px',
                    fontSize: '14px',
                    fontWeight: '600'
                  }}>
                    Space Saver
                  </div>
                </div>
                <div style={{padding: '30px'}}>
                  <h3 style={{fontSize: '24px', fontWeight: '700', marginBottom: '15px', color: '#1a1a1a'}}>
                    Wall-Mounted Monitor Arm
                  </h3>
                  <p style={{color: '#666', lineHeight: '1.8', marginBottom: '20px'}}>
                    Robust wall-hanging solution for offices and CCTV setups. Maximum space-saving with full-motion functionality and strong support.
                  </p>
                  <div style={{
                    display: 'flex',
                    gap: '15px',
                    flexWrap: 'wrap',
                    marginBottom: '20px'
                  }}>
                    <span style={{background: '#f0f0f0', padding: '6px 15px', borderRadius: '15px', fontSize: '13px', fontWeight: '600'}}>
                      Wall Mount
                    </span>
                    <span style={{background: '#f0f0f0', padding: '6px 15px', borderRadius: '15px', fontSize: '13px', fontWeight: '600'}}>
                      Full Motion
                    </span>
                    <span style={{background: '#f0f0f0', padding: '6px 15px', borderRadius: '15px', fontSize: '13px', fontWeight: '600'}}>
                      High Capacity
                    </span>
                  </div>
                  <Link href="contact" style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '10px',
                    background: 'linear-gradient(135deg, #11998e 0%, #38ef7d 100%)',
                    color: 'white',
                    padding: '12px 30px',
                    borderRadius: '25px',
                    textDecoration: 'none',
                    fontWeight: '600',
                    transition: 'transform 0.3s ease'
                  }} className="product-btn">
                    Get Quote <i className="far fa-arrow-right" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Product 4 - Cable Organizer */}
            <div className="col-lg-6 wow fadeInUp" data-wow-delay=".9s">
              <div style={{
                position: 'relative',
                borderRadius: '20px',
                overflow: 'hidden',
                boxShadow: '0 10px 40px rgba(0,0,0,0.1)',
                transition: 'all 0.4s ease',
                background: 'white',
                height: '100%'
              }} className="product-card-hover">
                <div style={{position: 'relative', height: '350px', overflow: 'hidden'}}>
                  <img 
                    src="/assets/img/products/monitor-arm-4.jpg" 
                    alt="Spinal Cable Organizers" 
                    style={{
                      width: '100%', 
                      height: '100%', 
                      objectFit: 'cover',
                      transition: 'transform 0.4s ease'
                    }} 
                  />
                  <div style={{
                    position: 'absolute',
                    top: '20px',
                    right: '20px',
                    background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
                    color: 'white',
                    padding: '8px 20px',
                    borderRadius: '20px',
                    fontSize: '14px',
                    fontWeight: '600'
                  }}>
                    New
                  </div>
                </div>
                <div style={{padding: '30px'}}>
                  <h3 style={{fontSize: '24px', fontWeight: '700', marginBottom: '15px', color: '#1a1a1a'}}>
                    Spinal Cable Organizers
                  </h3>
                  <p style={{color: '#666', lineHeight: '1.8', marginBottom: '20px'}}>
                    Stylish vertical cable management system. Keep wires neat, protected, and perfectly aligned from desk to floor with modular design.
                  </p>
                  <div style={{
                    display: 'flex',
                    gap: '15px',
                    flexWrap: 'wrap',
                    marginBottom: '20px'
                  }}>
                    <span style={{background: '#f0f0f0', padding: '6px 15px', borderRadius: '15px', fontSize: '13px', fontWeight: '600'}}>
                      Modular
                    </span>
                    <span style={{background: '#f0f0f0', padding: '6px 15px', borderRadius: '15px', fontSize: '13px', fontWeight: '600'}}>
                      Flexible ABS
                    </span>
                    <span style={{background: '#f0f0f0', padding: '6px 15px', borderRadius: '15px', fontSize: '13px', fontWeight: '600'}}>
                      Weighted Base
                    </span>
                  </div>
                  <Link href="contact" style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '10px',
                    background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
                    color: 'white',
                    padding: '12px 30px',
                    borderRadius: '25px',
                    textDecoration: 'none',
                    fontWeight: '600',
                    transition: 'transform 0.3s ease'
                  }} className="product-btn">
                    Get Quote <i className="far fa-arrow-right" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Add Custom CSS for Hover Effects */}
      <style jsx>{`
        .product-card-hover:hover {
          transform: translateY(-10px);
          box-shadow: 0 20px 60px rgba(0,0,0,0.15) !important;
        }
        .product-card-hover:hover img {
          transform: scale(1.05);
        }
        .product-btn:hover {
          transform: translateX(5px);
        }
      `}</style>

      <Cta sectionPadding={true} />
      <Faq />
    </NextLayout>
  );
};
export default page;
