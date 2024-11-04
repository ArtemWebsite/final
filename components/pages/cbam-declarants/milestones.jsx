import React from 'react';
import "./page-style.css";

    const Timeline = () => {
        return (
          <div className="timelineContainer">
            <div className="timelinee">
            <div className="top-blocks">
              {/* Top Blocks */}
              <div className="timeline-block" 
              style={{ 
                backgroundColor: '#FEEFCC', 
                border: '1px solid red', 
                width: '35%' 
              }}
              >
                <h3 className="timeline-heading" style={{ color: 'red' }}>1st of July 2024</h3>
                <p>Declarants are required to report actual emissions data.</p>
                <div className="timeline-pointer"></div>
              </div>
              
              <div className="timeline-block" 
              style={{  
                border: '1px solid orange', 
                width: '75%' 
              }}
              >
                <h3 className="timeline-heading" style={{ color: 'orange' }}>1st of January 2025</h3>
                <p>From 1 January 2026, a reporting Declarant that fails to submit a CBAM report or submits an incorrect or incomplete report, may receive a fine ranging from €10 to €50 per tonne of unreported or incorrectly reported emissions.</p>
                <div className="timeline-pointer"></div>
              </div>
              </div>
      
              {/* Timeline Line */}
              <div className="timeline-line">
                <div className="timeline-slider"></div>
              </div>
      
              {/* Year Labels */}
              <div className="bottom-blocks">
              <div className="timeline-year">2024</div>
              <div className="timeline-year">2025</div>
              <div className="timeline-year">2026</div>
              </div>
            </div>
          </div>
        );
      };
      
      export default Timeline;
