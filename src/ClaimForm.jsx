import React from "react";
import './ClaimForm.css';

function ClaimForm() {
  return (
    <div className="start">
      <div className="main-container">
        {/* Left section */}
        <div className="left">
          <div className="case-review-card">
            {/* Background Circle */}
            <div className="slots-circle-bg">
              <div className="slots-text">ONLY 6 SLOTS<br />LEFT</div>
            </div>

            {/* Foreground Content */}
            <div className="case-content">
              <h1>Free<br />Case Review</h1>
              <ul className="benefits">
                <li><span className="icon">🔒</span> 100% Confidential</li>
                <li><span className="icon">✔️</span> No Win, No Fee</li>
                <li><span className="icon">📝</span> Free Case Evaluation</li>
              </ul>
            </div>
          </div>

          <div className="highlight-note">
            <h3>Have you or a loved one been affected by Mesothelioma?</h3>
            <p>
              As a woman, you've carried the weight of care, love, and resilience.
              Now it’s time someone stands with you.
            </p>
            <ul>
              <li>Secondary Asbestos exposure is common</li>
              <li>Misdiagnosis delays are more frequent in women</li>
              <li>Women have won significant legal settlements</li>
            </ul>
          </div>
        </div>

        {/* Right section */}
        <div className="right">
          <form className="claim-card">
            <h2>Claim Form</h2>
            <div className="row">
              <input type="text" placeholder="First Name *" />
              <input type="text" placeholder="Last Name *" />
            </div>
            <div className="row">
              <input type="tel" placeholder="Phone Number *" />
              <input type="email" placeholder="Email ID *" />
            </div>
            <div className="row">
              <input type="date" placeholder="Date of birth *" />
              <input type="text" placeholder="Job Title *" />
            </div>
            <div className="row">
              <input type="date" placeholder="Date of Diagnosis *" />
              <select>
                <option>Type of Diagnosis *</option>
                <option>Diagnosis 1</option>
                <option>Diagnosis 2</option>
              </select>
            </div>
            <textarea placeholder="Tell us your story (optional)" rows="1"  style={{ width: '100%', padding: '12px 10px', border: 'none', borderBottom: '1px solid rgba(255, 255, 255, 0.6)', backgroundColor: 'transparent', fontSize: '15px', color: 'white', outline: 'none' }} />
            <div className="checkbox-group">
              <label style={{ display: 'inline-block', fontSize: '14px', lineHeight: '1.5', color: '#fff' }}>
                <input type="checkbox" style={{ marginRight: '8px' }} />
                I agree to the <a href="/policy" style={{ color: '#fff', textDecoration: 'underline' }}>privacy policy</a> and 
                <a href="/disclaimer" style={{ color: '#fff', textDecoration: 'underline', marginLeft: '4px' }}>disclaimer</a> and give my express written consent to be contacted regarding my case options. I understand that I may be contacted using automatic dialing equipment. Message and data rates may apply. My consent does not require purchase. This is Legal advertising.
              </label>
              <label style={{ display: 'inline-block', fontSize: '14px', lineHeight: '1.5', color: '#fff' }}>
                <input type="checkbox" style={{ marginRight: '8px' }} />
                Please check this box to verify you’re a person.
              </label>
             
            </div>
            <button type="submit">Start your claim now</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ClaimForm;