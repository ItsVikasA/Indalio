import Link from "next/link";

const FunFactCounter = ({ style }) => {
  return (
    <div className="row">
      <div
        className="col-xl-3 col-lg-3 col-md-3 col-sm-6 wow fadeInUp"
        data-wow-delay=".2s"
      >
        <div className={`funfact-box-items style-${style}`} style={{height: '100%', minHeight: '280px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}>
          <div className="icon mb-3">
            <i className="flaticon-technical" style={{fontSize: '48px', color: '#8760FD'}} />
          </div>
          <h6>Gas Spring Monitor Arms</h6>
          <p style={{flex: '1'}}>Smooth height adjustment with premium gas spring technology</p>
          <Link href="/service-details" className="link-btn" style={{color: '#8760FD', fontWeight: '600'}}>
            Learn More <i className="far fa-arrow-right" />
          </Link>
        </div>
      </div>
      <div
        className="col-xl-3 col-lg-3 col-md-3 col-sm-6 wow fadeInUp"
        data-wow-delay=".4s"
      >
        <div className={`funfact-box-items active`} style={{height: '100%', minHeight: '280px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}>
          <div className="icon mb-3">
            <i className="flaticon-vector-design" style={{fontSize: '48px', color: '#fff'}} />
          </div>
          <h6>Wall-Mounted Solutions</h6>
          <p style={{flex: '1'}}>Space-saving wall mount options for CCTV & control rooms</p>
          <Link href="/service-details" className="link-btn" style={{color: '#fff', fontWeight: '600'}}>
            Learn More <i className="far fa-arrow-right" />
          </Link>
        </div>
      </div>
      <div
        className="col-xl-3 col-lg-3 col-md-3 col-sm-6 wow fadeInUp"
        data-wow-delay=".6s"
      >
        <div className={`funfact-box-items style-${style}`} style={{height: '100%', minHeight: '280px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}>
          <div className="icon mb-3">
            <i className="flaticon-database" style={{fontSize: '48px', color: '#8760FD'}} />
          </div>
          <h6>Cable Management</h6>
          <p style={{flex: '1'}}>Organized desk setup with integrated cable organizers</p>
          <Link href="/service-details" className="link-btn" style={{color: '#8760FD', fontWeight: '600'}}>
            Learn More <i className="far fa-arrow-right" />
          </Link>
        </div>
      </div>
      <div
        className="col-xl-3 col-lg-3 col-md-3 col-sm-6 wow fadeInUp"
        data-wow-delay=".8s"
      >
        <div className={`funfact-box-items style-${style}`} style={{height: '100%', minHeight: '280px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}>
          <div className="icon mb-3">
            <i className="flaticon-design-thinking" style={{fontSize: '48px', color: '#8760FD'}} />
          </div>
          <h6>Custom Solutions</h6>
          <p style={{flex: '1'}}>Tailored ergonomic accessories for your workspace needs</p>
          <Link href="/contact" className="link-btn" style={{color: '#8760FD', fontWeight: '600'}}>
            Contact Us <i className="far fa-arrow-right" />
          </Link>
        </div>
      </div>
    </div>
  );
};
export default FunFactCounter;
