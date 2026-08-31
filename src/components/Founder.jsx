import React from 'react';
import { Globe, MessageCircle, Mail, Heart, Users, HandHeart, Quote } from 'lucide-react';
import './Founder.css'; // Import standard CSS so it works without tailwind restart

// ==========================================
// PLACEHOLDER CONTENT - REPLACE THIS LATER
// ==========================================
const FOUNDER_CONTENT = {
  header: {
    title: "About Our Founder",
    subtitle: "Leading with vision, serving with compassion.",
  },
  profile: {
    name: "CA(Dr.) Alok Misra",
    designation: "Founder & Promoter",
    image: "/images/founder.jpg",
    socialLinks: {
      website: "#",
      twitter: "#",
      email: "mailto:contact@vanprastha.org"
    }
  },
  message: {
    highlightQuote: "Our journey is rooted in a simple belief: every individual deserves dignity, and our environment deserves respect.",
    paragraphs: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris. Vivamus hendrerit arcu sed erat molestie vehicula. Sed auctor neque eu tellus rhoncus ut eleifend nibh porttitor. Ut in nulla enim.",
      "Phasellus pellentesque aliquam quam vel porttitor. Suspendisse dictum enim id libero consectetur, ac volutpat metus accumsan. Integer scelerisque erat sit amet purus feugiat, ut commodo leo hendrerit. Aliquam id neque in nulla varius viverra.",
      "Donec ac eros pretium, interdum elit vel, auctor nulla. Nunc efficitur, ligula vel laoreet consequat, purus lectus elementum elit, eget semper enim nulla vel elit. Mauris tristique vel enim ut cursus."
    ]
  },
  visionPoints: [
    {
      title: "Compassion",
      description: "Serving with deep empathy and kindness for all living beings.",
      Icon: Heart
    },
    {
      title: "Community",
      description: "Building inclusive, resilient, and self-reliant rural networks.",
      Icon: Users
    },
    {
      title: "Service",
      description: "Action-oriented social impact that creates lasting change.",
      Icon: HandHeart
    }
  ],
  directors: [
    {
      name: "Mrs. Sunaina Misra",
      designation: "Director",
      image: "/images/director1.jpg",
      socialLinks: {
        website: "#",
        twitter: "#",
        email: "mailto:director1@vanprastha.org"
      },
      message: {
        highlightQuote: "Building sustainable solutions for the future of our rural communities.",
        paragraphs: [
          "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
          "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo."
        ]
      }
    },
    {
      name: "Anand Misra",
      designation: "Director",
      image: "/images/director2.jpg",
      socialLinks: {
        website: "#",
        twitter: "#",
        email: "mailto:director2@vanprastha.org"
      },
      message: {
        highlightQuote: "Empowerment starts at the grassroots level, through education and healthcare.",
        paragraphs: [
          "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet.",
          "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur."
        ]
      }
    }
  ]
};
// ==========================================

const Founder = () => {
  return (
    <section className="founder-section">
      <div className="founder-bg-decorative"></div>

      <div className="founder-container">

        {/* Section Header */}
        <div className="founder-header">
          <span className="founder-eyebrow">Leadership</span>
          <h1 className="founder-title">{FOUNDER_CONTENT.header.title}</h1>
          <div className="founder-divider"></div>
          <p className="founder-subtitle">{FOUNDER_CONTENT.header.subtitle}</p>
        </div>

        {/* Main Content Grid */}
        <div className="founder-grid">

          {/* Left Column: Image & Profile Card */}
          <div className="founder-card-wrapper">
            <div className="founder-image-card">
              <img
                src={FOUNDER_CONTENT.profile.image}
                alt={FOUNDER_CONTENT.profile.name}
                className="founder-image"
              />

              <div className="founder-image-overlay">
                <h2 className="founder-name">{FOUNDER_CONTENT.profile.name}</h2>
                <p className="founder-designation">{FOUNDER_CONTENT.profile.designation}</p>
              </div>
            </div>

            <div className="founder-socials">
              <a href={FOUNDER_CONTENT.profile.socialLinks.website} className="founder-social-link">
                <Globe size={20} />
              </a>
              <a href={FOUNDER_CONTENT.profile.socialLinks.twitter} className="founder-social-link">
                <MessageCircle size={20} />
              </a>
              <a href={FOUNDER_CONTENT.profile.socialLinks.email} className="founder-social-link">
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Right Column: Bio & Vision */}
          <div className="founder-content">

            <div className="founder-quote-block">
              <Quote className="founder-quote-icon" />
              <h3 className="founder-quote-text">
                "{FOUNDER_CONTENT.message.highlightQuote}"
              </h3>
            </div>

            <div className="founder-bio">
              {FOUNDER_CONTENT.message.paragraphs.map((para, index) => (
                <p key={index} className={index === 0 ? "founder-bio-intro" : ""}>
                  {para}
                </p>
              ))}
            </div>
          </div>
        </div>

        {/* Directors List */}
        <div className="founder-directors-layout">
          {FOUNDER_CONTENT.directors.map((director, index) => (
            <div key={index} className="founder-director-column">
              <div className="founder-card-wrapper">
                <div className="founder-image-card">
                  <img
                    src={director.image}
                    alt={director.name}
                    className="founder-image director-image"
                  />

                  <div className="founder-image-overlay">
                    <h2 className="founder-name">{director.name}</h2>
                    <p className="founder-designation">{director.designation}</p>
                  </div>
                </div>

                <div className="founder-socials">
                  <a href={director.socialLinks.website} className="founder-social-link">
                    <Globe size={20} />
                  </a>
                  <a href={director.socialLinks.twitter} className="founder-social-link">
                    <MessageCircle size={20} />
                  </a>
                  <a href={director.socialLinks.email} className="founder-social-link">
                    <Mail size={20} />
                  </a>
                </div>
              </div>

              {/* Text Below */}
              <div className="founder-director-text">
                <div className="founder-quote-block">
                  <Quote className="founder-quote-icon" />
                  <h3 className="founder-quote-text">
                    "{director.message.highlightQuote}"
                  </h3>
                </div>

                <div className="founder-bio">
                  {director.message.paragraphs.map((para, pIndex) => (
                    <p key={pIndex} className={pIndex === 0 ? "founder-bio-intro" : ""}>
                      {para}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="founder-values-section">
          <h4 className="founder-values-header">Core Values</h4>

          <div className="founder-values-grid">
            {FOUNDER_CONTENT.visionPoints.map((point, index) => (
              <div key={index} className="founder-value-card">
                <div className="founder-value-icon-wrapper">
                  <point.Icon size={24} />
                </div>
                <h5 className="founder-value-title">{point.title}</h5>
                <p className="founder-value-desc">{point.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Founder;
