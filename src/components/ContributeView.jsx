import React from 'react';

export default function ContributeView({ lang }) {
  return (
    <article className="narrative-page contribute-view-page">
      <header className="contribute-header-banner">
        <span className="narrative-badge" style={{ backgroundColor: '#154212' }}>
          {lang === 'en' ? 'SECURE GIVING' : 'सुरक्षित दान'}
        </span>
        <h1 className="narrative-title">
          {lang === 'en' ? (
            <>Support Our <span className="highlight-italic">Mission</span></>
          ) : (
            <>हमारे मिशन का <span className="highlight-italic">समर्थन करें</span></>
          )}
        </h1>
        <p className="narrative-subtitle">
          {lang === 'en'
            ? "Scan the QR code below to contribute directly to our foundation's bank account. Your support fuels our efforts in the Himalayas."
            : "फाउंडेशन के बैंक खाते में सीधे योगदान करने के लिए नीचे दिए गए QR कोड को स्कैन करें। आपका सहयोग हिमालय में हमारे प्रयासों को गति देता है।"}
        </p>
      </header>

      <div className="contribute-content-body">
        <div className="qr-card-glass">
          <div className="qr-gradient-bar"></div>
          <div className="qr-image-wrapper">
            <img src="/images/qrcode.png" alt="Donation QR Code" />
          </div>
          <div className="qr-scan-title">
            <h3>{lang === 'en' ? 'SCAN TO PAY' : 'स्कैन करके भुगतान करें'}</h3>
            <p>{lang === 'en' ? 'UPI, Bank Transfer, or QR Scan' : 'UPI, बैंक ट्रांसफर या QR स्कैन'}</p>
          </div>
          <div className="qr-bank-details">
            <div className="bank-col">
              <span className="detail-label">{lang === 'en' ? 'BANK NAME' : 'बैंक का नाम'}</span>
              <strong className="detail-value">{lang === 'en' ? 'State Bank of India' : 'भारतीय स्टेट बैंक'}</strong>
            </div>
            <div className="bank-col text-right">
              <span className="detail-label">{lang === 'en' ? 'ACCOUNT HOLDER' : 'खाताधारक'}</span>
              <strong className="detail-value">{lang === 'en' ? 'Vanprastha Fdn.' : 'वनप्रस्थ फाउंडेशन'}</strong>
            </div>
          </div>
        </div>

        <div className="tax-info-card">
          <span className="tax-icon">✓</span>
          <p>
            {lang === 'en' ? (
              <>All donations are tax-exempt under <strong>Section 80G</strong>. Please email your transaction screenshot to <strong>foundationvanprastha@gmail.com</strong> for your receipt.</>
            ) : (
              <>सभी दान <strong>धारा 80G</strong> के तहत कर-मुक्त हैं। कृपया अपनी रसीद प्राप्त करने के लिए अपने लेन-देन का स्क्रीनशॉट <strong>foundationvanprastha@gmail.com</strong> पर ईमेल करें।</>
            )}
          </p>
        </div>
      </div>
    </article>
  );
}
