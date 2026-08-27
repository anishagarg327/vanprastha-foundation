import React from 'react';

export default function VolunteerView({ lang, volunteerSubmitted, setVolunteerSubmitted, volunteerSubmitting, setVolunteerSubmitting }) {
  return (
    <article className="narrative-page volunteer-view-page">
      <header className="contribute-header-banner">
        <span className="narrative-badge" style={{ backgroundColor: '#154212' }}>
          {lang === 'en' ? 'JOIN OUR COMMUNITY' : 'हमारे समुदाय से जुड़ें'}
        </span>
        <h1 className="narrative-title">
          {lang === 'en' ? (
            <>Become a <span className="highlight-italic">Himalayan Guardian</span></>
          ) : (
            <>हिमालय के <span className="highlight-italic">संरक्षक बनें</span></>
          )}
        </h1>
        <p className="narrative-subtitle">
          {lang === 'en'
            ? 'Thank you for choosing to volunteer with us. Your time and efforts are invaluable in helping us make a lasting impact on mountain lives.'
            : 'हमारे साथ स्वयंसेवक के रूप में जुड़ने का निर्णय लेने के लिए धन्यवाद। आपका समय और प्रयास पर्वतीय जीवन पर स्थायी प्रभाव डालने में हमारे लिए अमूल्य हैं।'}
        </p>
      </header>

      <div className="volunteer-grid-container">
        <div className="volunteer-info-column">
          <div className="volunteer-paths-card">
            <h3>{lang === 'en' ? 'Volunteering Paths' : 'स्वयंसेवा के क्षेत्र'}</h3>
            <ul className="volunteer-paths-list">
              <li>
                <div className="path-icon">🎓</div>
                <div className="path-text">
                  <strong>{lang === 'en' ? 'Education Mentor' : 'शिक्षा मार्गदर्शक'}</strong>
                  <p>{lang === 'en' ? 'Teach children at Masti Ki Pathshala during weekends or through digital sessions.' : 'सप्ताहांत के दौरान या डिजिटल सत्रों के माध्यम से मस्ती की पाठशाला में बच्चों को पढ़ाएं।'}</p>
                </div>
              </li>
              <li>
                <div className="path-icon">👥</div>
                <div className="path-text">
                  <strong>{lang === 'en' ? 'Ground Volunteer' : 'धरातलीय स्वयंसेवक'}</strong>
                  <p>{lang === 'en' ? 'Join our cleanliness drives, tree plantations, or medical camp coordination on-site.' : 'हमारे स्वच्छता अभियानों, पौधारोपण या चिकित्सा शिविर समन्वय में जमीनी स्तर पर भाग लें।'}</p>
                </div>
              </li>
              <li>
                <div className="path-icon">💻</div>
                <div className="path-text">
                  <strong>{lang === 'en' ? 'Digital Guardian' : 'डिजिटल संरक्षक'}</strong>
                  <p>{lang === 'en' ? 'Support us remotely with social media, content creation, or UI/UX feedback.' : 'सोशल मीडिया, कंटेंट निर्माण या UI/UX फीडबैक के साथ दूरस्थ रूप से हमारा सहयोग करें।'}</p>
                </div>
              </li>
            </ul>
          </div>

          <div className="did-you-know-card">
            <h4>{lang === 'en' ? 'Did You Know?' : 'क्या आप जानते हैं?'}</h4>
            <p>{lang === 'en' ? 'Most of our successful projects are led by local youth who started as volunteers first!' : 'हमारे अधिकांश सफल कार्यक्रमों का नेतृत्व स्थानीय युवा कर रहे हैं जिन्होंने पहले स्वयंसेवकों के रूप में शुरुआत की थी!'}</p>
            <span className="card-bg-icon">🏔️</span>
          </div>
        </div>

        <div className="volunteer-form-card">
          <div className="qr-gradient-bar"></div>
          <h3>{lang === 'en' ? 'Registration Form' : 'पंजीकरण फॉर्म'}</h3>
          {volunteerSubmitted ? (
            <div className="form-success-box">
              <div className="success-icon">✓</div>
              <h4>{lang === 'en' ? 'Application Submitted!' : 'आवेदन सफलतापूर्वक जमा किया गया!'}</h4>
              <p>{lang === 'en' ? 'Thank you for reaching out. Our team will contact you shortly to coordinate your onboarding.' : 'हमसे जुड़ने के लिए धन्यवाद। हमारी टीम जल्द ही आपसे संपर्क करेगी।'}</p>
              <button
                type="button"
                className="primary-btn mt-4"
                onClick={() => setVolunteerSubmitted(false)}
              >
                {lang === 'en' ? 'Submit Another Application' : 'दूसरा आवेदन भेजें'}
              </button>
            </div>
          ) : (
            <form
              className="volunteer-form"
              action="https://formspree.io/f/mnjkkeqe"
              method="POST"
              onSubmit={async (e) => {
                e.preventDefault()
                setVolunteerSubmitting(true)
                const formData = new FormData(e.target)
                try {
                  const response = await fetch('https://formspree.io/f/mnjkkeqe', {
                    method: 'POST',
                    body: formData,
                    headers: {
                      'Accept': 'application/json'
                    }
                  })
                  if (response.ok) {
                    setVolunteerSubmitting(false)
                    setVolunteerSubmitted(true)
                  } else {
                    setVolunteerSubmitting(false)
                    setVolunteerSubmitted(true)
                  }
                } catch (error) {
                  console.error('Formspree submission error:', error)
                  setVolunteerSubmitting(false)
                  setVolunteerSubmitted(true)
                }
              }}
            >
              <input type="hidden" name="_subject" value="New Volunteer Application - Vanprastha Foundation" />
              <input type="hidden" name="Recipient_Email" value="anishagarg.12092006@gmail.com" />
              <div className="form-group">
                <label>{lang === 'en' ? 'Full Name' : 'पूरा नाम'}</label>
                <input type="text" name="Full Name" required placeholder={lang === 'en' ? 'Name' : 'नाम'} />
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label>{lang === 'en' ? 'Email Address' : 'ईमेल पता'}</label>
                  <input type="email" name="Email Address" required placeholder="abc@gmail.com" />
                </div>
                <div className="form-group">
                  <label>{lang === 'en' ? 'Phone Number' : 'फ़ोन नंबर'}</label>
                  <input
                    type="tel"
                    name="Phone Number"
                    required
                    maxLength={10}
                    minLength={10}
                    pattern="[0-9]{10}"
                    title={lang === 'en' ? 'Please enter a valid 10-digit mobile number' : 'कृपया 10 अंकों का मान्य मोबाइल नंबर दर्ज करें'}
                    placeholder="9999999999"
                    onInput={(e) => {
                      e.target.value = e.target.value.replace(/[^0-9]/g, '').slice(0, 10)
                    }}
                  />
                </div>
              </div>

              <div className="form-group">
                <label>{lang === 'en' ? 'Area of Interest' : 'रुचि का क्षेत्र'}</label>
                <select name="Area of Interest" required defaultValue="">
                  <option value="" disabled>{lang === 'en' ? 'Select an Option' : 'विकल्प चुनें'}</option>
                  <option value="Education & Mentoring">{lang === 'en' ? 'Education & Mentoring' : 'शिक्षा और मार्गदर्शन'}</option>
                  <option value="Environmental Action">{lang === 'en' ? 'Environmental Action' : 'पर्यावरण संरक्षण'}</option>
                  <option value="Healthcare Support">{lang === 'en' ? 'Healthcare Support' : 'स्वास्थ्य सेवा सहायता'}</option>
                  <option value="Digital / Creative Support">{lang === 'en' ? 'Digital / Creative Support' : 'डिजिटल / रचनात्मक सहयोग'}</option>
                </select>
              </div>

              <div className="form-group">
                <label>{lang === 'en' ? 'Why do you want to join? (Optional)' : 'आप क्यों जुड़ना चाहते हैं? (वैकल्पिक)'}</label>
                <textarea name="Message" rows="3" placeholder={lang === 'en' ? 'Tell us a bit about yourself...' : 'अपने बारे में कुछ बताएं...'}></textarea>
              </div>

              <button
                type="submit"
                className="submit-form-btn"
                disabled={volunteerSubmitting}
              >
                {volunteerSubmitting
                  ? (lang === 'en' ? 'Submitting...' : 'भेजा जा रहा है...')
                  : (lang === 'en' ? 'Submit Application' : 'आवेदन जमा करें')}
              </button>
              <p className="form-footer-note">{lang === 'en' ? 'JOINING HEART AND ACTION' : 'दिल और कर्म का मिलन'}</p>
            </form>
          )}
        </div>
      </div>
    </article>
  );
}
