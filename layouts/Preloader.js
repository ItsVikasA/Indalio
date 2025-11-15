"use client";
import { nextUtility } from "@/utility";
import { useEffect } from "react";
const Preloader = () => {
  useEffect(() => {
    nextUtility.preloader();
  }, []);
  return (
    <div id="preloader" className="preloader">
      <div className="animation-preloader">
        <div className="spinner"></div>
        <div style={{ marginTop: '20px', textAlign: 'center' }}>
          <img 
            src="/assets/img/logo/logo.png" 
            alt="Indalio Logo" 
            style={{ maxHeight: '80px', width: 'auto', marginBottom: '20px' }}
          />
        </div>
        <div className="txt-loading">
          <span data-text-preloader="I" className="letters-loading">
            I
          </span>
          <span data-text-preloader="N" className="letters-loading">
            N
          </span>
          <span data-text-preloader="D" className="letters-loading">
            D
          </span>
          <span data-text-preloader="A" className="letters-loading">
            A
          </span>
          <span data-text-preloader="L" className="letters-loading">
            L
          </span>
          <span data-text-preloader="I" className="letters-loading">
            I
          </span>
          <span data-text-preloader="O" className="letters-loading">
            O
          </span>
        </div>
        <p className="text-center">Loading</p>
      </div>
      <div className="loader">
        <div className="row">
          <div className="col-3 loader-section section-left">
            <div className="bg" />
          </div>
          <div className="col-3 loader-section section-left">
            <div className="bg" />
          </div>
          <div className="col-3 loader-section section-right">
            <div className="bg" />
          </div>
          <div className="col-3 loader-section section-right">
            <div className="bg" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Preloader;
