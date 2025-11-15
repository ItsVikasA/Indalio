"use client";
import { useState } from "react";

const CompatibilityChecker = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    monitorSize: "",
    monitorWeight: "",
    deskThickness: "",
    mountType: "clamp"
  });
  const [result, setResult] = useState(null);

  const checkCompatibility = (e) => {
    e.preventDefault();
    
    const { monitorSize, monitorWeight, deskThickness } = formData;
    
    let compatible = true;
    let issues = [];
    let recommendations = [];

    // Check monitor size
    if (monitorSize < 17 || monitorSize > 32) {
      compatible = false;
      issues.push("Monitor size must be between 17-32 inches");
    } else {
      recommendations.push("✓ Monitor size is compatible");
    }

    // Check monitor weight
    if (monitorWeight < 2 || monitorWeight > 9) {
      compatible = false;
      issues.push("Monitor weight must be between 2-9 kg");
    } else {
      recommendations.push("✓ Monitor weight is supported");
    }

    // Check desk thickness for clamp mount
    if (formData.mountType === "clamp" && (deskThickness < 10 || deskThickness > 80)) {
      compatible = false;
      issues.push("Desk thickness must be 10-80mm for clamp mounting");
      recommendations.push("Consider using grommet mount instead");
    } else if (formData.mountType === "clamp") {
      recommendations.push("✓ Desk thickness is suitable for clamp mount");
    }

    // Product recommendation
    let recommendedProduct = "";
    if (compatible) {
      if (monitorSize <= 27 && monitorWeight <= 6) {
        recommendedProduct = "Gas Spring Single Monitor Arm - Perfect for your setup!";
      } else if (monitorSize <= 32 && monitorWeight <= 9) {
        recommendedProduct = "Gas Spring Dual Monitor Arm - Ideal for larger displays!";
      }
    }

    setResult({
      compatible,
      issues,
      recommendations,
      recommendedProduct
    });
  };

  return (
    <>
      {/* Trigger Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="theme-btn"
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '8px'
        }}
      >
        <i className="fas fa-check-circle"></i> Check Compatibility
      </button>

      {/* Modal Overlay */}
      {isOpen && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'rgba(0,0,0,0.7)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 99999,
            padding: '20px'
          }}
          onClick={() => setIsOpen(false)}
        >
          {/* Modal Content */}
          <div
            style={{
              background: 'white',
              borderRadius: '15px',
              maxWidth: '600px',
              width: '100%',
              maxHeight: '90vh',
              overflow: 'auto',
              padding: '40px',
              position: 'relative'
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setIsOpen(false)}
              style={{
                position: 'absolute',
                top: '15px',
                right: '15px',
                background: 'transparent',
                border: 'none',
                fontSize: '24px',
                cursor: 'pointer',
                color: '#666'
              }}
            >
              <i className="fas fa-times"></i>
            </button>

            <h3 style={{ marginBottom: '10px', color: '#1a1d2e' }}>
              <i className="fas fa-check-circle me-2" style={{ color: '#667eea' }}></i>
              Check Compatibility
            </h3>
            <p style={{ color: '#666', marginBottom: '30px' }}>
              Enter your monitor and desk specifications to find the perfect Indalio product
            </p>

            <form onSubmit={checkCompatibility}>
              <div style={{ marginBottom: '20px' }}>
                <label style={{ display: 'block', marginBottom: '8px', fontWeight: '600', color: '#1a1d2e' }}>
                  Monitor Size (inches)
                </label>
                <input
                  type="number"
                  value={formData.monitorSize}
                  onChange={(e) => setFormData({...formData, monitorSize: e.target.value})}
                  placeholder="e.g., 24"
                  required
                  style={{
                    width: '100%',
                    padding: '12px',
                    border: '1px solid #e0e0e0',
                    borderRadius: '8px',
                    fontSize: '16px'
                  }}
                />
              </div>

              <div style={{ marginBottom: '20px' }}>
                <label style={{ display: 'block', marginBottom: '8px', fontWeight: '600', color: '#1a1d2e' }}>
                  Monitor Weight (kg)
                </label>
                <input
                  type="number"
                  step="0.1"
                  value={formData.monitorWeight}
                  onChange={(e) => setFormData({...formData, monitorWeight: e.target.value})}
                  placeholder="e.g., 5.5"
                  required
                  style={{
                    width: '100%',
                    padding: '12px',
                    border: '1px solid #e0e0e0',
                    borderRadius: '8px',
                    fontSize: '16px'
                  }}
                />
              </div>

              <div style={{ marginBottom: '20px' }}>
                <label style={{ display: 'block', marginBottom: '8px', fontWeight: '600', color: '#1a1d2e' }}>
                  Desk Thickness (mm)
                </label>
                <input
                  type="number"
                  value={formData.deskThickness}
                  onChange={(e) => setFormData({...formData, deskThickness: e.target.value})}
                  placeholder="e.g., 25"
                  required
                  style={{
                    width: '100%',
                    padding: '12px',
                    border: '1px solid #e0e0e0',
                    borderRadius: '8px',
                    fontSize: '16px'
                  }}
                />
              </div>

              <div style={{ marginBottom: '25px' }}>
                <label style={{ display: 'block', marginBottom: '8px', fontWeight: '600', color: '#1a1d2e' }}>
                  Preferred Mount Type
                </label>
                <select
                  value={formData.mountType}
                  onChange={(e) => setFormData({...formData, mountType: e.target.value})}
                  style={{
                    width: '100%',
                    padding: '12px',
                    border: '1px solid #e0e0e0',
                    borderRadius: '8px',
                    fontSize: '16px'
                  }}
                >
                  <option value="clamp">Clamp Mount</option>
                  <option value="grommet">Grommet Mount</option>
                </select>
              </div>

              <button
                type="submit"
                className="theme-btn w-100"
                style={{ padding: '15px' }}
              >
                Check Compatibility
              </button>
            </form>

            {/* Results */}
            {result && (
              <div style={{ marginTop: '30px', padding: '20px', background: '#f8f9fa', borderRadius: '10px' }}>
                <h4 style={{ 
                  color: result.compatible ? '#28a745' : '#dc3545',
                  marginBottom: '15px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px'
                }}>
                  {result.compatible ? (
                    <><i className="fas fa-check-circle"></i> Compatible!</>
                  ) : (
                    <><i className="fas fa-exclamation-circle"></i> Not Compatible</>
                  )}
                </h4>

                {result.issues.length > 0 && (
                  <div style={{ marginBottom: '15px' }}>
                    <strong style={{ color: '#dc3545' }}>Issues:</strong>
                    <ul style={{ marginTop: '8px', marginBottom: '0', paddingLeft: '20px' }}>
                      {result.issues.map((issue, index) => (
                        <li key={index} style={{ color: '#666', marginBottom: '5px' }}>{issue}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {result.recommendations.length > 0 && (
                  <div style={{ marginBottom: '15px' }}>
                    <strong style={{ color: '#28a745' }}>Details:</strong>
                    <ul style={{ marginTop: '8px', marginBottom: '0', paddingLeft: '20px' }}>
                      {result.recommendations.map((rec, index) => (
                        <li key={index} style={{ color: '#666', marginBottom: '5px' }}>{rec}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {result.recommendedProduct && (
                  <div style={{ 
                    marginTop: '15px', 
                    padding: '15px', 
                    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                    borderRadius: '8px',
                    color: 'white'
                  }}>
                    <strong>Recommended Product:</strong>
                    <p style={{ marginTop: '8px', marginBottom: '0' }}>{result.recommendedProduct}</p>
                  </div>
                )}

                {result.compatible && (
                  <a
                    href="/contact"
                    className="theme-btn w-100"
                    style={{ marginTop: '15px', display: 'block', textAlign: 'center' }}
                  >
                    Request Quote Now
                  </a>
                )}
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default CompatibilityChecker;
