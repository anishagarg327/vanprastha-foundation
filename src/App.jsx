import { useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import './App.css'

const content = {
  en: {
    brandName: 'Vanprastha Foundation',
    donate: 'Donate',
    exploreStory: 'Explore this story',
    supportUs: 'Support Us',
    ourMission: 'Our mission',
    holisticTitle: 'Holistic development, rooted in nature.',
    missionText: 'Vanprastha Foundation works at the intersection of ecology, education, and rural livelihoods to uplift Himalayan communities through sustainable, community-led programs.',
    aboutTitle: 'About the Foundation',
    aboutHeadingPrefix: 'Vanprastha Foundation is a registered non-profit organisation committed to the ',
    aboutHeadingHighlight: 'holistic and sustainable development',
    aboutHeadingSuffix: ' of the Garhwal and Kumaon regions of Uttarakhand.',
    aboutParagraph1: 'Established with the conviction that environmental stewardship and community empowerment are inseparable, we work at the intersection of ecology, education, and rural livelihoods. Our programmes address forest degradation, healthcare access, women\'s rights, and children\'s education.',
    aboutParagraph2: 'Guided by a deep respect for indigenous Kumaoni traditions and ecological responsibility, the Foundation bridges the wisdom of ancient mountain communities with the inclusive frameworks of modern development practice.',
    whatWeStandFor: 'What We Stand For',
    acronymSubtitle: 'V·A·N·P·R·A·S·T·H·A',
    leadingPurpose: 'Leading with purpose in the heart of the Himalayas',
    groundProgrammes: 'Ground Programmes',
    ourInitiatives: 'Our Initiatives',
    viewAllInitiatives: 'View All Initiatives',
    supportOurMission: 'Support Our Mission',
    supportMissionText: 'Your support helps us move closer to a sustainable, inclusive, and empowered future. Get your hands in the soil and your heart in the cause.',
    contributeNow: 'Contribute Now',
    becomeVolunteer: 'Become a Volunteer',
    headOffice: 'Head Office: Village Ratkhal, PO Dunagiri, Dwarahat, Dist. Almora, Uttarakhand - 263653',
    branchOffice: 'Branch Office: AD-13, LGF, Tagore Garden, New Delhi - 110027',
    footerMotive: "Dedicated to forest restoration, healthcare outreach, children's education, and empowering rural women in the Garhwal and Kumaon Himalayas.",
    quickLinks: 'Quick Links',
    contactUs: 'Contact Us',
    initiativesLink: 'Initiatives',
    mediaLink: 'Media',
    governanceLink: 'Governance',
    faqLink: 'FAQ',
    navLinks: [
      { label: 'Home', href: 'index.html' },
      { label: 'Initiatives', href: 'initiatives.html' },
      { label: 'Governance', href: 'transparency.html' },
      { label: 'Media', href: 'media.html' },
      { label: 'Awards', href: 'awards.html' },
      { label: 'FAQ', href: 'faq.html' },
    ],
    heroSlides: [
      {
        title: 'Project Punarjeevan: Forest Restoration',
        text: 'Reviving the Himalayan forests near Kukuchhina by planting native endemic species.',
        image: '/images/punarjeevan1.jpg',
        tag: 'Environment',
        link: 'punarjeevan.html',
        detailedDescription: 'Project Punarjeevan is a dedicated forest restoration initiative aiming to reclaim degraded forest lands in the Kumaon region of the Himalayas. By partnering with local community groups and forestry experts, we plant native, fire-resistant, and soil-enriching broadleaf tree species such as Oak, Rhododendron, and Alder. These efforts prevent devastating wildfires, improve local water catchment basins, restore wildlife habitats, and create sustainable forest-based livelihoods for local mountain communities.',
        gallery: ['/images/kumaoni women.jpg', '/images/punarjeevan1.jpg']
      },
      {
        title: 'Masti Ki Pathshala for Rural Children',
        text: 'Inspiring young minds through interactive weekend schooling led by dedicated mentors.',
        image: '/images/education.jpg',
        tag: 'Education',
        link: 'pathshala.html',
        detailedDescription: 'Masti Ki Pathshala provides a dynamic, non-formal learning ecosystem for underprivileged children in remote mountain villages. Our weekend curriculum focuses on project-based learning, basic science experiments, conversational English, creative arts, and environmental awareness. Through interactive storytelling, games, and mentorship by dedicated volunteers, we aim to bridge the educational gap, instilling curiosity, confidence, and a lifelong love for learning in young rural minds.',
        gallery: ['/images/klkhatterclass1.jpg', '/images/klkhatterclass2.jpg']
      },
      {
        title: 'Community Cleanliness Drives',
        text: 'Local women leading the restoration of forest health and village sanitation through collective action.',
        image: '/images/cleanliness_1.jpg',
        tag: 'Health',
        link: 'cleanliness-drive.html',
        detailedDescription: 'Our community cleanliness campaigns focus on waste management, plastic reduction, and public sanitation in local Kumaon villages. Run entirely by passionate local women collectives (Mahila Mangal Dals), the drives focus on cleaning up critical water springs, forest pathways, and village surroundings. We distribute color-coded waste bins, set up decentralized composting units, and organize workshops on waste segregation to build long-term environmental hygiene habits.',
        gallery: ['/images/cleanliness_2.jpg', '/images/kumaoni women.jpg']
      },
      {
        title: 'Sanitary Pads Distribution',
        text: 'Empowering rural women with hygiene awareness and dignity through interactive sessions.',
        image: '/images/menstrual_hygiene_2.jpg',
        tag: "Women's Health",
        link: 'sanitary-drive.html',
        detailedDescription: 'This menstrual hygiene drive goes beyond product distribution. We run comprehensive educational sessions in rural high schools and village health centers to break age-old taboos surrounding menstruation. By distributing high-quality, biodegradable sanitary pads and eco-friendly disposal bags, we ensure safety and dignity. We also conduct health check-ups and distribute iron supplements to address prevalent adolescent anemia in Himalayan communities.',
        gallery: ['/images/menstrual_hygiene_1.jpg', '/images/menstrual_hygiene_4.jpg']
      },
      {
        title: 'Free Medical & Dental Camp',
        text: 'Bringing essential, free healthcare, dental check-ups, and medicines to remote Himalayan communities.',
        image: '/images/medical_camp_5.jpg',
        tag: 'Health Outreach',
        link: 'medical-camp.html',
        detailedDescription: 'In remote mountain regions, access to professional healthcare is extremely limited. Our medical camps bring general physicians, dentists, pediatricians, and gynecologists directly to villages. We provide free consultations, perform basic diagnostic tests (blood glucose, blood pressure, ECG), and distribute essential medicines. We also carry out dental hygiene workshops for local children, ensuring health equity and preventative medical support for all.',
        gallery: ['/images/medical_camp_1.jpg', '/images/medical_camp_2.jpg']
      }
    ],
    stats: [
      {
        category: 'Ecosystem Restoration',
        label: '500+ trees planted',
        target: 500,
        displaySuffix: '+',
        description: 'Reviving forests ravaged by summer wildfires near Kukuchhina and Dunagiri by planting native, endemic tree varieties.',
        color: '#7c2d12',
      },
      {
        category: 'Women Empowerment',
        label: '1000+ women benefited',
        target: 1000,
        displaySuffix: '+',
        description: 'Empowered and employed with livelihood opportunities and comprehensive hygiene awareness.',
        color: '#0f766e',
      },
      {
        category: 'Rural Rejuvenation',
        label: '10 villages adopted',
        target: 10,
        description: 'Transforming lives through holistic development, inclusive progress, and dedicated infrastructure support.',
        color: '#0f766e',
      },
    ],
    initiatives: [
      {
        title: 'Free Medical & Dental Camp',
        category: 'Health Outreach · Completed',
        description: 'A landmark collaboration bringing essential primary healthcare, dental services, and free medicines to over 1,000 patients in remote Himalayan communities.',
        href: 'medical-camp.html',
        image: '/images/medical_camp_5.jpg',
        images: ['/images/medical_camp_2.jpg', '/images/medical_camp_4.jpg'],
        prominent: true,
      },
      {
        title: 'Project Punarjeevan',
        category: 'Ecosystem Restoration',
        description: 'Reviving forests ravaged by summer wildfires near Kukuchhina and Dunagiri through systematic plantation of native, endemic tree species.',
        href: 'punarjeevan.html',
        image: '/images/punarjeevan1.jpg',
        cta: 'Support Afforestation',
        ctaHref: 'contribute.html',
        hero: true,
      },
      {
        title: 'Masti Ki Pathshala',
        category: 'Education',
        description: 'Inspiring village children through holistic growth, engaging weekend schooling, and school supply distribution led by dedicated volunteer mentors.',
        href: 'pathshala.html',
        images: ['/images/klkhatterclass1.jpg', '/images/klkhatterclass2.jpg'],
      },
      {
        title: 'Community Cleanliness Drive',
        category: 'Ecology',
        description: 'Local women leading the restoration of forest health and village sanitation through collective action and awareness.',
        href: 'cleanliness-drive.html',
        images: ['/images/cleanliness_1.jpg', '/images/cleanliness_2.jpg'],
      },
      {
        title: 'Sanitary Pads Distribution',
        category: "Women's Health",
        description: 'Empowering over 100 rural women with menstrual hygiene awareness, dignity, and essential sanitary products through interactive community sessions.',
        href: 'sanitary-drive.html',
        images: ['/images/menstrual_hygiene_2.jpg', '/images/menstrual_hygiene_1.jpg'],
      },
    ],
    acronymItems: [
      { letter: 'V', title: 'Village Awareness', description: 'Cultivating civic consciousness and health literacy in rural communities.' },
      { letter: 'A', title: 'Afforestation', description: 'Restoring forest cover through systematic plantation of native endemic species.' },
      { letter: 'N', title: 'Nature Protection', description: 'Safeguarding biodiversity and natural ecosystems for future generations.' },
      { letter: 'P', title: 'Protection of Resources', description: 'Advocating for sustainable use of water, land, and natural heritage.' },
      { letter: 'R', title: 'Rural Rejuvenation', description: 'Transforming underserved villages through integrated development initiatives.' },
      { letter: 'A', title: 'Action-Oriented', description: 'Delivering measurable, ground-level impact over rhetoric.' },
      { letter: 'S', title: 'Sustainability', description: 'Embedding long-term ecological and social resilience into every programme.' },
      { letter: 'T', title: 'Tradition', description: 'Honouring indigenous knowledge and Kumaoni cultural heritage as foundations of change.' },
      { letter: 'H', title: 'Harmony', description: 'Fostering peaceful coexistence between human communities and the natural world.' },
      { letter: 'A', title: 'Accountability', description: 'Upholding the highest standards of transparency, governance, and fiduciary responsibility.' },
    ],
    narrativeDetails: {
      'medical-camp': {
        label: 'HEALTHCARE OUTREACH',
        title: 'Bridging the Healthcare Gap',
        subtitle: 'Bringing expert medical and dental services to the remote heart of the Himalayas.',
        image: '/images/medical_camp_5.jpg',
        badgeColor: '#dc2626',
        blocks: [
          {
            type: 'intro',
            heading: 'Providing Free Essential Healthcare',
            paragraphs: [
              'On July 8th 2025, Vanprastha Foundation organized a Free Medical & Dental Camp in collaboration with BUDS, bringing essential healthcare services directly to the local community.',
              'Held from 9 AM to 12 noon, the camp witnessed active participation from villagers who often face limited access to quality medical facilities due to geographical challenges.'
            ],
            cardTitle: 'COLLABORATORS',
            cardItems: ['BUDS India', 'Vanprastha Foundation']
          },
          {
            type: 'two-column',
            leftType: 'text',
            leftContent: {
              heading: 'Led by Excellence',
              text: 'The camp was led by a team of esteemed medical professionals, including:',
              listItems: [
                '🏥 Dr. Rajeev Seth (Medical Director, CHDC)',
                '🩺 Dr. Professor Tulika Seth (AIIMS)',
                '🦷 Dr. Aalok Tiwari (Dental Surgeon)'
              ]
            },
            rightType: 'image',
            rightContent: {
              src: '/images/medical_camp_4.jpg',
              alt: 'Prof Tulika Seth attending Patients'
            }
          },
          {
            type: 'breakout-image',
            src: '/images/medical_camp_3.jpg',
            alt: 'Villager at Medical Camp Banner',
            caption: 'The local community welcomes medical care: Camp banner hanging at Ratkhal, Dwarahat.'
          },
          {
            type: 'two-column',
            theme: 'green',
            leftType: 'text',
            leftContent: {
              heading: 'Insights from the Mountain Side',
              text: 'An insightful observation made by the doctors highlighted the unique benefits of mountain life - lower stress levels, reduced incidence of diabetes, and fewer heart-related conditions.'
            },
            rightType: 'text',
            rightContent: {
              text: 'However, many cases involved untreated injuries and manageable conditions like sugar imbalances, emphasizing the need for timely medical attention and awareness.'
            }
          },
          {
            type: 'two-column',
            leftType: 'text',
            leftContent: {
              heading: 'The Spirit of Seva',
              text: 'The initiative concluded on a heartwarming note with a traditional bhandara, where villagers and volunteers came together to share a wholesome meal. This not only strengthened community bonds but also reflected the spirit of seva that defines Vanprastha Foundation. Through such initiatives, we continue to bridge healthcare gaps while fostering a culture of care, awareness, and community well-being.'
            },
            rightType: 'image',
            rightContent: {
              src: '/images/medical_camp_1.jpg',
              alt: 'Traditional Lighting Ceremony'
            }
          }
        ]
      },
      'punarjeevan': {
        label: 'ENVIRONMENTAL CARE',
        title: 'Project Punarjeevan',
        subtitle: 'Reviving the Himalayan Forests: A mission to restore and rejuvenate the damaged landscape of Kumaon.',
        image: '/images/punarjeevan1.jpg',
        badgeColor: '#16a34a',
        blocks: [
          {
            type: 'intro',
            heading: 'The Ecological Crisis of 2025',
            paragraphs: [
              'In the summer of 2025, the serene forests of Kumaon in Uttarakhand, particularly around Kukuchhina near Dwarahat, were severely impacted by devastating forest fires. What once stood as a thriving ecosystem of rich biodiversity was reduced to charred land, threatening not only wildlife but also the livelihoods of local communities dependent on these forests.'
            ],
            cardTitle: 'IMPACT METRICS',
            cardItems: [
              '500+ Trees Planted',
              'Native Endemic Species Used',
              'Community-Led Forest Protection'
            ]
          },
          {
            type: 'two-column',
            leftType: 'image',
            leftContent: {
              src: '/images/punarjeevan whatsapp.png',
              alt: 'Ecological Crisis Impact'
            },
            rightType: 'quote',
            rightContent: {
              text: 'What once stood as a thriving ecosystem of rich biodiversity was reduced to charred land, threatening not only wildlife but also the livelihoods of local communities dependent on these forests.'
            }
          },
          {
            type: 'two-column',
            leftType: 'text',
            leftContent: {
              heading: 'Project Punarjeevan: A Mission to Restore',
              text: 'In response to this ecological crisis, Vanprastha Foundation initiated Project Punarjeevan - a mission to restore and rejuvenate the damaged Himalayan landscape. Staying true to the philosophy of harmony between humans and nature, the foundation undertook a large-scale plantation drive, successfully planting over 500 endemic tree species native to the region.'
            },
            rightType: 'text',
            rightContent: {
              text: 'Our choice of endemic species ensures that the new growth is resilient, supports local pollinators, and restores the natural water retention capacity of the soil-critical for preventing future environmental degradation.'
            }
          },
          {
            type: 'breakout-image',
            src: '/images/punarjeevan1.jpg',
            alt: 'Local communities planting saplings',
            caption: 'Local volunteers and foundation members working together to plant 500+ endemic saplings in the charred slopes.'
          },
          {
            type: 'two-column',
            leftType: 'text',
            leftContent: {
              heading: 'Rooted in Community',
              text: 'What made this initiative truly impactful was the active participation of local village communities. Their knowledge of the land, climate, and native species played a crucial role in ensuring that the plantation was both ecologically appropriate and sustainable.'
            },
            rightType: 'text',
            rightContent: {
              heading: 'Sustainable Livelihoods',
              text: 'By involving local families in the nursery management and systematic planting process, the project also generates sustainable forest-based livelihoods. This community stewardship ensures that the saplings are protected and nurtured throughout their critical early growth stages.'
            }
          }
        ]
      },
      'pathshala': {
        label: 'EDUCATION INITIATIVE',
        title: 'Masti Ki Pathshala',
        subtitle: 'Nurturing curiosity and empowering the next generation of rural Himalayan minds.',
        image: '/images/klkhatterclass1.jpg',
        badgeColor: '#d97706',
        blocks: [
          {
            type: 'intro',
            heading: 'Transforming Lives Through Learning',
            paragraphs: [
              'Education has the power to transform lives, yet for many children in rural areas, access to quality learning remains limited. Recognizing this gap, Vanprastha Foundation initiated a heartfelt effort to bring learning closer to young minds through Masti Ki Pathshala - a joyful and engaging educational experience.'
            ],
            cardTitle: 'PROGRAMME SCOPE',
            cardItems: [
              '100+ Children Enrolled',
              'Volunteer-Led Mentorship',
              'Interactive Curriculum'
            ]
          },
          {
            type: 'breakout-image',
            src: '/images/klkhatterclass2.jpg',
            alt: 'Masti Ki Pathshala Class in Action',
            caption: 'Nurturing curiosity and creative skills: Underprivileged children participating in interactive learning sessions.'
          },
          {
            type: 'two-column',
            leftType: 'text',
            leftContent: {
              heading: 'Beyond the Classroom',
              text: 'Masti Ki Pathshala provides a dynamic, non-formal learning ecosystem for underprivileged children in remote mountain villages. Our weekend curriculum focuses on project-based learning, basic science experiments, conversational English, creative arts, and environmental awareness.'
            },
            rightType: 'text',
            rightContent: {
              heading: 'Empowering Minds',
              text: 'Through interactive storytelling, games, and mentorship by dedicated volunteers, we aim to bridge the educational gap, instilling curiosity, confidence, and a lifelong love for learning in young rural minds.'
            }
          }
        ]
      },
      'sanitary-drive': {
        label: "WOMEN'S HEALTH",
        title: 'Health, Dignity & Informed Awareness',
        subtitle: 'Normalizing conversations and empowering over 1000+ women in rural Uttarakhand.',
        image: '/images/menstrual_hygiene_2.jpg',
        badgeColor: '#db2777',
        blocks: [
          {
            type: 'intro',
            heading: 'Breaking Taboos, Building Awareness',
            paragraphs: [
              'Access to menstrual hygiene and awareness remains a significant challenge in many rural communities. Addressing this critical need, Vanprastha Foundation organized a Sanitary Pads Distribution Drive aimed at promoting health, dignity, and informed awareness among women.',
              'Rural women were invited to participate in an interactive session focused on the importance of menstrual hygiene, sanitation, and overall well-being.'
            ],
            cardTitle: 'KEY SUCCESS',
            cardItems: [
              '1000+ Women Benefited',
              'Biodegradable Pads Distributed',
              'Adolescent Health Check-ups Conducted'
            ]
          },
          {
            type: 'two-column',
            leftType: 'image',
            leftContent: {
              src: '/images/menstrual_hygiene_3.png',
              alt: 'Distribution session'
            },
            rightType: 'image',
            rightContent: {
              src: '/images/menstrual_hygiene_4.jpg',
              alt: 'Mrs Misra distributing pads'
            }
          },
          {
            type: 'two-column',
            leftType: 'text',
            leftContent: {
              heading: 'Direct Engagement & Trust',
              text: 'The initiative was led by Mrs. Sunaina Misra, Director of Vanprastha Foundation, who personally engaged with the women. She took time to understand their challenges, listen to their concerns, and openly discuss their needs in a supportive and respectful environment. This direct interaction helped build trust and encouraged meaningful conversations around topics that are often overlooked or stigmatized. By distributing high-quality, biodegradable sanitary pads and eco-friendly disposal bags, we ensure safety and dignity.'
            },
            rightType: 'image',
            rightContent: {
              src: '/images/menstrual_hygiene_5.jpg',
              alt: 'Interactive session'
            }
          },
          {
            type: 'breakout-image',
            src: '/images/menstrual_hygiene_1.jpg',
            alt: 'Traditional celebration',
            caption: 'Celebrating health and dignity: A gathering of Kumaoni women collectives at the conclusion of the health drive.'
          }
        ]
      },
      'cleanliness-drive': {
        label: 'ECO-SANITATION',
        title: 'Collective Ownership, Cleaner Horizons',
        subtitle: 'Local women leading the front in restoring the health of our villages and sacred forest lands.',
        image: '/images/cleanliness_1.jpg',
        badgeColor: '#047857',
        blocks: [
          {
            type: 'intro',
            heading: 'The Vital Connection',
            paragraphs: [
              'In rural and forest-adjacent regions, cleanliness is not just about appearance-it is deeply tied to health, ecology, and overall community well-being. Recognizing this vital connection, Vanprastha Foundation organized a community-driven cleanliness drive across nearby villages and forest areas, with local women leading the initiative from the front.',
              'Rather than treating cleanliness as a one-time activity, the drive emphasized long-term responsibility and collective ownership. Local women, who engage closely with their surroundings and understand the direct impact of waste on family health and natural resources, played a central role in both planning and execution.'
            ],
            cardTitle: 'MISSION SCOPE',
            cardItems: [
              'Women-Led Leadership',
              'Forest & Trail Cleanup',
              'Sustainable Waste Segregation'
            ]
          },
          {
            type: 'breakout-image',
            src: '/images/cleanliness_2.jpg',
            alt: 'Women collective near village school',
            caption: 'The drive transformed cleanliness into a movement grounded in participation, awareness, and pride.'
          },
          {
            type: 'two-column',
            leftType: 'text',
            leftContent: {
              heading: 'Restoring Natural Balance',
              text: 'Village pathways, shared spaces, and forest trails were cleared of plastic and non-biodegradable waste, restoring both human and natural environments. Particular focus was given to forest regions, where unnoticed waste can severely harm soil quality, water sources, and wildlife.'
            },
            rightType: 'text',
            rightContent: {
              heading: 'Conversations for Change',
              text: 'Beyond physical cleanup, the drive fostered meaningful conversations around hygiene, waste segregation, and sustainable living. Women volunteers engaged with families and children, sharing practical, culturally relevant knowledge that extended the impact beyond the day itself.'
            }
          }
        ]
      }
    }
  },
  hi: {
    brandName: 'वनप्रस्थ फाउंडेशन',
    donate: 'दान करें',
    exploreStory: 'कहानी जानें',
    supportUs: 'हमारा समर्थन करें',
    ourMission: 'हमारा मिशन',
    holisticTitle: 'प्रकृति से जुड़ा समग्र विकास।',
    missionText: 'वनप्रस्थ फाउंडेशन पारिस्थितिकी, शिक्षा और ग्रामीण आजीविका के संगम पर काम करता है ताकि सतत, समुदाय-नेतृत्व कार्यक्रमों के माध्यम से हिमालयी समुदायों का उत्थान किया जा सके।',
    aboutTitle: 'फाउंडेशन के बारे में',
    aboutHeadingPrefix: 'वनप्रस्थ फाउंडेशन उत्तराखंड के गढ़वाल और कुमाऊं क्षेत्रों के ',
    aboutHeadingHighlight: 'समग्र और सतत विकास',
    aboutHeadingSuffix: ' के लिए प्रतिबद्ध एक पंजीकृत गैर-लाभकारी संगठन है।',
    aboutParagraph1: 'पर्यावरण संरक्षण और सामुदायिक सशक्तिकरण को अविभाज्य मानने के दृढ़ विश्वास के साथ स्थापित, हम पारिस्थितिकी, शिक्षा और ग्रामीण आजीविका के क्षेत्र में काम करते हैं। हमारे कार्यक्रम वनों के क्षरण, स्वास्थ्य देखभाल तक पहुंच, महिलाओं के अधिकार और बच्चों की शिक्षा पर केंद्रित हैं।',
    aboutParagraph2: 'मूल कुमाऊँनी परंपराओं और पारिस्थितिक जिम्मेदारी के प्रति गहरे सम्मान से निर्देशित होकर, फाउंडेशन आधुनिक विकास प्रणालियों के साथ प्राचीन पर्वतीय समुदायों के ज्ञान का समन्वय करता है।',
    whatWeStandFor: 'हमारा संकल्प',
    acronymSubtitle: 'V·A·N·P·R·A·S·T·H·A',
    leadingPurpose: 'हिमालय के हृदय में उद्देश्य के साथ नेतृत्व',
    groundProgrammes: 'धरातलीय कार्यक्रम',
    ourInitiatives: 'हमारी पहलें',
    viewAllInitiatives: 'सभी पहलें देखें',
    supportOurMission: 'हमारे मिशन का समर्थन करें',
    supportMissionText: 'आपका समर्थन हमें एक स्थायी, समावेशी और सशक्त भविष्य की ओर बढ़ने में मदद करता है। इस कार्य में अपना योगदान देकर हमारा हिस्सा बनें।',
    contributeNow: 'अभी योगदान दें',
    becomeVolunteer: 'स्वयंसेवक बनें',
    headOffice: 'मुख्य कार्यालय: ग्राम रतखाल, डाकघर दूनागिरी, द्वाराहाट, जिला अल्मोड़ा, उत्तराखंड - 263653',
    branchOffice: 'शाखा कार्यालय: AD-13, एलजीएफ, टैगोर गार्डन, नई दिल्ली - 110027',
    footerMotive: "गढ़वाल और कुमाऊं हिमालय में वन संरक्षण, स्वास्थ्य सेवा पहुंच, बच्चों की शिक्षा और ग्रामीण महिलाओं के सशक्तिकरण के लिए समर्पित।",
    quickLinks: 'त्वरित लिंक्स',
    contactUs: 'संपर्क करें',
    initiativesLink: 'हमारी पहलें',
    mediaLink: 'मीडिया',
    governanceLink: 'पारदर्शिता',
    faqLink: 'सामान्य प्रश्न',
    navLinks: [
      { label: 'मुख्य पृष्ठ', href: 'index.html' },
      { label: 'हमारी पहलें', href: 'initiatives.html' },
      { label: 'पारदर्शिता', href: 'transparency.html' },
      { label: 'मीडिया', href: 'media.html' },
      { label: 'पुरस्कार', href: 'awards.html' },
      { label: 'सामान्य प्रश्न', href: 'faq.html' },
    ],
    heroSlides: [
      {
        title: 'प्रोजेक्ट पुनर्जीवन: वन संरक्षण',
        text: 'कुकुछीना के पास मूल स्थानीय प्रजातियों के पौधे लगाकर हिमालयी वनों को पुनर्जीवित करना।',
        image: '/images/punarjeevan1.jpg',
        tag: 'पर्यावरण',
        link: 'punarjeevan.html',
        detailedDescription: 'प्रोजेक्ट पुनर्जीवन एक समर्पित वन संरक्षण पहल है जिसका उद्देश्य हिमालय के कुमाऊं क्षेत्र में बंजर वन भूमि को बहाल करना है। स्थानीय समुदायों और वन विशेषज्ञों के साथ साझेदारी में, हम बांझ (Oak), बुरांश (Rhododendron), और अल्डर जैसे स्थानिक, अग्नि-प्रतिरोधी और मिट्टी को समृद्ध करने वाले चौड़ी पत्ती वाले पेड़ों की प्रजातियाँ लगाते हैं। ये प्रयास भयानक जंगल की आग को रोकते हैं, स्थानीय जल स्रोतों में सुधार करते हैं, वन्यजीवों के आवासों को बहाल करते हैं, और स्थानीय पर्वतीय समुदायों के लिए वनों पर आधारित स्थायी आजीविका का निर्माण करते हैं।',
        gallery: ['/images/kumaoni women.jpg', '/images/punarjeevan1.jpg']
      },
      {
        title: 'ग्रामीण बच्चों के लिए मस्ती की पाठशाला',
        text: 'समर्पित गुरुओं के नेतृत्व में इंटरैक्टिव वीकेंड स्कूलिंग के माध्यम से युवा दिमागों को प्रेरित करना।',
        image: '/images/education.jpg',
        tag: 'शिक्षा',
        link: 'pathshala.html',
        detailedDescription: 'मस्ती की पाठशाला सुदूर पर्वतीय गांवों में वंचित बच्चों के लिए एक गैर-औपचारिक शिक्षण पारिस्थितिकी तंत्र प्रदान करती है। हमारा सप्ताहांत पाठ्यक्रम प्रोजेक्ट-आधारित शिक्षा, बुनियादी विज्ञान प्रयोगों, व्यावहारिक अंग्रेजी, रचनात्मक कला और पर्यावरणीय जागरूकता पर केंद्रित है। इंटरैक्टिव कहानी सुनाने, खेलकूद और समर्पित स्वयंसेवकों के मार्गदर्शन के माध्यम से, हमारा उद्देश्य शैक्षिक अंतर को पाटना और ग्रामीण बच्चों में जिज्ञासा, आत्मविश्वास और जीवन भर सीखने की ललक पैदा करना है।',
        gallery: ['/images/klkhatterclass1.jpg', '/images/klkhatterclass2.jpg']
      },
      {
        title: 'सामुदायिक स्वच्छता अभियान',
        text: 'सामूहिक प्रयासों के माध्यम से वनों के स्वास्थ्य और ग्राम स्वच्छता की बहाली का नेतृत्व करती स्थानीय महिलाएं।',
        image: '/images/cleanliness_1.jpg',
        tag: 'स्वास्थ्य',
        link: 'cleanliness-drive.html',
        detailedDescription: 'हमारे सामुदायिक स्वच्छता अभियान स्थानीय कुमाऊं गांवों में कचरा प्रबंधन, प्लास्टिक नियंत्रण और सार्वजनिक स्वच्छता पर ध्यान केंद्रित करते हैं। स्थानीय महिला समूहों (महिला मंगल दल) द्वारा संचालित यह अभियान महत्वपूर्ण जल स्रोतों, वन मार्गों और ग्रामीण परिवेश की सफाई पर केंद्रित है। हम पर्यावरण-अनुकूल कचरे के डिब्बे वितरित करते हैं, विकेन्द्रीकृत कम्पोस्टिंग इकाइयाँ स्थापित करते हैं, और स्थायी स्वच्छता की आदतें विकसित करने के लिए कचरा पृथक्करण पर कार्यशालाएँ आयोजित करते हैं।',
        gallery: ['/images/cleanliness_2.jpg', '/images/kumaoni women.jpg']
      },
      {
        title: 'सेनेटरी पैड्स वितरण अभियान',
        text: 'इंटरैक्टिव सत्रों के माध्यम से ग्रामीण महिलाओं को स्वास्थ्य जागरूकता और गरिमा के साथ सशक्त बनाना।',
        image: '/images/menstrual_hygiene_2.jpg',
        tag: "महिला स्वास्थ्य",
        link: 'sanitary-drive.html',
        detailedDescription: 'यह मासिक धर्म स्वच्छता अभियान केवल पैड वितरण तक सीमित नहीं है। हम ग्रामीण उच्च विद्यालयों और स्वास्थ्य केंद्रों में मासिक धर्म से जुड़ी रूढ़ियों को दूर करने के लिए जागरूकता सत्र चलाते हैं। उच्च गुणवत्ता वाले सेनेटरी पैड्स वितरित करके हम सुरक्षा और सम्मान सुनिश्चित करते हैं। हम आयरन की खुराक भी वितरित करते हैं ताकि हिमालयी क्षेत्रों में किशोरियों में खून की कमी (एनीमिया) की समस्या को दूर किया जा सके।',
        gallery: ['/images/menstrual_hygiene_1.jpg', '/images/menstrual_hygiene_4.jpg']
      },
      {
        title: 'निशुल्क चिकित्सा एवं दंत शिविर',
        text: 'सुदूर हिमालयी समुदायों तक बुनियादी और आवश्यक स्वास्थ्य सेवाएं, दंत चिकित्सा और दवाइयां पहुंचाना।',
        image: '/images/medical_camp_5.jpg',
        tag: 'स्वास्थ्य सेवा',
        link: 'medical-camp.html',
        detailedDescription: 'सुदूर पर्वतीय क्षेत्रों में पेशेवर स्वास्थ्य सेवाओं तक पहुंच बहुत सीमित है। हमारे चिकित्सा शिविर गांवों में डॉक्टरों, दंत चिकित्सकों और स्त्री रोग विशेषज्ञों को लाते हैं। हम निशुल्क परामर्श, बुनियादी जांच (रक्त शर्करा, रक्तचाप, ईसीजी) प्रदान करते हैं और मुफ्त दवाएं वितरित करते हैं। हम स्थानीय बच्चों के लिए दंत स्वच्छता कार्यशालाएं भी आयोजित करते हैं ताकि सभी के लिए निवारक स्वास्थ्य सेवाएं सुनिश्चित की जा सकें।',
        gallery: ['/images/medical_camp_1.jpg', '/images/medical_camp_2.jpg']
      }
    ],
    stats: [
      {
        category: 'पारिस्थितिकी तंत्र बहाली',
        label: '500+ पेड़ लगाए गए',
        target: 500,
        displaySuffix: '+',
        description: 'कुकुछीना और दूनागिरी के जंगलों में लगी आग से प्रभावित क्षेत्रों में स्थानीय प्रजातियों के पौधे लगाकर वनों को पुनर्जीवित करना।',
        color: '#7c2d12',
      },
      {
        category: 'महिला सशक्तिकरण',
        label: '1000+ महिलाएं लाभान्वित',
        target: 1000,
        displaySuffix: '+',
        description: 'आजीविका के अवसरों और व्यापक स्वास्थ्य जागरूकता के माध्यम से सशक्त और स्वावलंबी बनाया गया।',
        color: '#0f766e',
      },
      {
        category: 'ग्रामीण पुनरुद्धार',
        label: '10 गांव गोद लिए गए',
        target: 10,
        description: 'समग्र विकास, समावेशी प्रगति और बुनियादी ढांचागत सहायता के माध्यम से जीवन में सकारात्मक बदलाव लाना।',
        color: '#0f766e',
      },
    ],
    initiatives: [
      {
        title: 'निशुल्क चिकित्सा एवं दंत शिविर',
        category: 'स्वास्थ्य सेवा · संपन्न',
        description: 'सुदूर हिमालयी क्षेत्रों में 1,000 से अधिक रोगियों को प्राथमिक स्वास्थ्य सेवा, दंत चिकित्सा और मुफ्त दवाएं प्रदान करने वाली एक ऐतिहासिक पहल।',
        href: 'medical-camp.html',
        image: '/images/medical_camp_5.jpg',
        prominent: true,
      },
      {
        title: 'प्रोजेक्ट पुनर्जीवन',
        category: 'पारिस्थितिकी तंत्र बहाली',
        description: 'कुकुछीना और दूनागिरी के निकट ग्रीष्मकालीन जंगलों की आग से तबाह हुए जंगलों को मूल वृक्ष प्रजातियों के व्यवस्थित पौधारोपण द्वारा पुनर्जीवित करना।',
        href: 'punarjeevan.html',
        image: '/images/punarjeevan1.jpg',
        cta: 'वनीकरण का समर्थन करें',
        ctaHref: 'contribute.html',
        hero: true,
      },
      {
        title: 'मस्ती की पाठशाला',
        category: 'शिक्षा',
        description: 'समर्पित स्वयंसेवक गुरुओं के नेतृत्व में ग्रामीण बच्चों को सप्ताहांत की शिक्षा और स्कूल आपूर्ति वितरण के माध्यम से प्रेरित करना।',
        href: 'pathshala.html',
        images: ['/images/klkhatterclass1.jpg', '/images/klkhatterclass2.jpg'],
      },
      {
        title: 'सामूहिक स्वच्छता अभियान',
        category: 'पर्यावरण',
        description: 'सामूहिक प्रयास और जागरूकता के माध्यम से वन स्वास्थ्य और ग्रामीण स्वच्छता की बहाली में स्थानीय महिलाओं का नेतृत्व।',
        href: 'cleanliness-drive.html',
        images: ['/images/cleanliness_1.jpg', '/images/cleanliness_2.jpg'],
      },
      {
        title: 'सेनेटरी पैड्स वितरण',
        category: "महिला स्वास्थ्य",
        description: 'मासिक धर्म स्वच्छता जागरूकता, सम्मान और आवश्यक सेनेटरी उत्पादों के माध्यम से 100 से अधिक ग्रामीण महिलाओं का सशक्तिकरण।',
        href: 'sanitary-drive.html',
        images: ['/images/menstrual_hygiene_2.jpg', '/images/menstrual_hygiene_1.jpg'],
      },
    ],
    acronymItems: [
      { letter: 'V', title: 'ग्राम जागरूकता', description: 'ग्रामीण समुदायों में नागरिक चेतना और स्वास्थ्य साक्षरता विकसित करना।' },
      { letter: 'A', title: 'वनीकरण', description: 'स्थानीय मूल वृक्ष प्रजातियों के व्यवस्थित पौधारोपण के माध्यम से वन क्षेत्र को बहाल करना।' },
      { letter: 'N', title: 'प्रकृति संरक्षण', description: 'आने वाली पीढ़ियों के लिए जैव विविधता और प्राकृतिक पारिस्थितिकी तंत्र की रक्षा करना।' },
      { letter: 'P', title: 'संसाधनों का संरक्षण', description: 'पानी, जमीन और प्राकृतिक धरोहरों के संधारणीय उपयोग की वकालत करना।' },
      { letter: 'R', title: 'ग्रामीण पुनरुद्धार', description: 'एकीकृत विकास पहलों के माध्यम से वंचित गांवों का कायाकल्प करना।' },
      { letter: 'A', title: 'कर्म-उन्मुख', description: 'बयानबाजी के बजाय धरातल पर मापने योग्य प्रभाव सुनिश्चित करना।' },
      { letter: 'S', title: 'निरंतरता', description: 'प्रत्येक कार्यक्रम में दीर्घकालिक पारिस्थितिक और सामाजिक लचीलापन स्थापित करना।' },
      { letter: 'T', title: 'परंपरा', description: 'बदलाव के आधार के रूप में स्वदेशी ज्ञान और कुमाऊँनी सांस्कृतिक विरासत का सम्मान करना।' },
      { letter: 'H', title: 'सामंजस्य', description: 'मानव समुदायों और प्राकृतिक दुनिया के बीच शांतिपूर्ण सह-अस्तित्व को बढ़ावा देना।' },
      { letter: 'A', title: 'जवाबदेही', description: 'पारदर्शिता, शासन और वित्तीय जिम्मेदारी के उच्चतम मानकों को बनाए रखना।' },
    ],
    narrativeDetails: {
      'medical-camp': {
        label: 'स्वास्थ्य सेवा आउटरीच',
        title: 'स्वास्थ्य सेवा के अंतर को पाटना',
        subtitle: 'हिमालय के सुदूर इलाकों में विशेषज्ञ चिकित्सा और दंत चिकित्सा सेवाएं लाना।',
        image: '/images/medical_camp_5.jpg',
        badgeColor: '#dc2626',
        blocks: [
          {
            type: 'intro',
            heading: 'नि:शुल्क आवश्यक स्वास्थ्य सेवा प्रदान करना',
            paragraphs: [
              '8 जुलाई 2025 को, वनप्रस्थ फाउंडेशन ने BUDS के सहयोग से एक नि:शुल्क चिकित्सा और दंत चिकित्सा शिविर का आयोजन किया, जिससे स्थानीय समुदाय को सीधे आवश्यक स्वास्थ्य सेवाएं मिल सकें।',
              'सुबह 9 बजे से दोपहर 12 बजे तक आयोजित इस शिविर में उन ग्रामीणों की सक्रिय भागीदारी देखी गई, जिन्हें अक्सर भौगोलिक चुनौतियों के कारण गुणवत्तापूर्ण चिकित्सा सुविधाओं तक सीमित पहुंच का सामना करना पड़ता है।'
            ],
            cardTitle: 'सहयोगी',
            cardItems: ['BUDS इंडिया', 'वनप्रस्थ फाउंडेशन']
          },
          {
            type: 'two-column',
            leftType: 'text',
            leftContent: {
              heading: 'उत्कृष्टता के नेतृत्व में',
              text: 'शिविर का नेतृत्व एम्स, नई दिल्ली की प्रो. तूलिका सेठ और डॉ. राम सेठ सहित प्रतिष्ठित चिकित्सा पेशेवरों ने किया, जिन्होंने वंचितों की सेवा के लिए अपनी विशेषज्ञता का योगदान दिया।'
            },
            rightType: 'image',
            rightContent: {
              src: '/images/medical_camp_4.jpg',
              alt: 'Prof Tulika Seth attending Patients'
            }
          },
          {
            type: 'breakout-image',
            src: '/images/medical_camp_3.jpg',
            alt: 'Villager at Medical Camp Banner',
            caption: 'पहाड़ी क्षेत्रों से अंतर्दृष्टि: स्वास्थ्य सेवा पहुंचाने के लिए भौगोलिक चुनौतियों को पाटना।'
          },
          {
            type: 'two-column',
            leftType: 'text',
            leftContent: {
              heading: 'सेवा की भावना',
              text: 'हमारे चिकित्सा शिविर सामान्य चिकित्सकों, दंत चिकित्सकों, बाल रोग विशेषज्ञों और स्त्री रोग विशेषज्ञों को सीधे गांवों में लाते हैं। हम मुफ्त परामर्श प्रदान करते हैं, बुनियादी नैदानिक परीक्षण करते हैं और दवाएं वितरित करते हैं। पारंपरिक दीप प्रज्वलन समारोह ने निस्वार्थ सेवा को समर्पित दिन की शुरुआत को चिह्नित किया।'
            },
            rightType: 'image',
            rightContent: {
              src: '/images/medical_camp_1.jpg',
              alt: 'Traditional Lighting Ceremony'
            }
          }
        ]
      },
      'punarjeevan': {
        label: 'पर्यावरण संरक्षण',
        title: 'प्रोजेक्ट पुनर्जीवन',
        subtitle: 'हिमालयी वनों को पुनर्जीवित करना: कुमाऊं के क्षतिग्रस्त परिदृश्य को पुनर्स्थापित करने और फिर से जीवंत करने का मिशन।',
        image: '/images/punarjeevan1.jpg',
        badgeColor: '#16a34a',
        blocks: [
          {
            type: 'intro',
            heading: '2025 का पारिस्थितिक संकट',
            paragraphs: [
              '2025 की गर्मियों में, उत्तराखंड में कुमाऊं के शांत जंगल, विशेष रूप से द्वाराहाट के पास कुकुछीना के आसपास, विनाशकारी जंगल की आग से गंभीर रूप से प्रभावित हुए थे। जो कभी समृद्ध जैव विविधता का एक समृद्ध पारिस्थितिकी तंत्र था, वह जली हुई भूमि में बदल गया, जिससे न केवल वन्यजीवों को बल्कि इन जंगलों पर निर्भर स्थानीय समुदायों की आजीविका को भी खतरा पैदा हो गया।'
            ],
            cardTitle: 'प्रभाव के आंकड़े',
            cardItems: [
              '500+ पेड़ लगाए गए',
              'मूल स्थानीय प्रजातियों का उपयोग',
              'समुदाय-नेतृत्व में वन संरक्षण'
            ]
          },
          {
            type: 'two-column',
            leftType: 'image',
            leftContent: {
              src: '/images/punarjeevan whatsapp.png',
              alt: 'Ecological Crisis Impact'
            },
            rightType: 'quote',
            rightContent: {
              text: 'जो कभी समृद्ध जैव विविधता का एक समृद्ध पारिस्थितिकी तंत्र था, वह जली हुई भूमि में बदल गया, जिससे न केवल वन्यजीवों को बल्कि इन जंगलों पर निर्भर स्थानीय समुदायों की आजीविका को भी खतरा पैदा हो गया।'
            }
          },
          {
            type: 'breakout-image',
            src: '/images/punarjeevan1.jpg',
            alt: 'Local communities planting saplings',
            caption: 'वनीकरण अभियानों के दौरान स्थानीय स्वयंसेवक और सामुदायिक संगठन स्थानीय मूल प्रजातियों के पौधे लगाते हुए।'
          },
          {
            type: 'two-column',
            leftType: 'text',
            leftContent: {
              heading: 'समुदाय में निहित',
              text: 'प्रोजेक्ट पुनर्जीवन एक समर्पित वन पुनर्स्थापना पहल है जिसका उद्देश्य हिमालय के कुमाऊं क्षेत्र में निम्नीकृत वन भूमि को फिर से उपजाऊ बनाना है। स्थानीय सामुदायिक समूहों और वन विशेषज्ञों के साथ साझेदारी करके, हम बांझ (Oak), बुरांश (Rhododendron), और अल्डर जैसी स्थानिक, अग्नि-प्रतिरोधी और मिट्टी को समृद्ध करने वाली चौड़ी पत्ती वाली वृक्ष प्रजातियों का रोपण करते हैं। ये प्रयास जंगल की आग को रोकते हैं, स्थानीय जल स्रोतों में सुधार करते हैं और वन्यजीव आवासों को पुनर्स्थापित करते।'
            },
            rightType: 'text',
            rightContent: {
              heading: 'सतत आजीविका',
              text: 'नर्सरी प्रबंधन और व्यवस्थित रोपण प्रक्रिया में स्थानीय परिवारों को शामिल करके, यह परियोजना पर्यावरण संरक्षण के साथ-साथ स्थानीय समुदायों के लिए सतत वन-आधारित आजीविका का निर्माण भी करती है। यह सामुदायिक जिम्मेदारी सुनिश्चित करती है कि पौधों की शुरुआती चरण में अच्छी देखभाल की जाए।'
            }
          }
        ]
      },
      'pathshala': {
        label: 'शिक्षा पहल',
        title: 'मस्ती की पाठशाला',
        subtitle: 'जिज्ञासा को बढ़ावा देना और ग्रामीण हिमालय के बच्चों को सशक्त बनाना।',
        image: '/images/klkhatterclass1.jpg',
        badgeColor: '#d97706',
        blocks: [
          {
            type: 'intro',
            heading: 'सीखने के माध्यम से जीवन बदलना',
            paragraphs: [
              'शिक्षा में जीवन बदलने की शक्ति है, फिर भी ग्रामीण क्षेत्रों के कई बच्चों के लिए गुणवत्तापूर्ण शिक्षा तक पहुंच सीमित है। इस अंतर को पहचानते हुए, वनप्रस्थ फाउंडेशन ने मस्ती की पाठशाला के माध्यम से सीखने को बच्चों के करीब लाने का एक दिली प्रयास शुरू किया - एक सुखद और आकर्षक शैक्षिक अनुभव।'
            ],
            cardTitle: 'कार्यक्रम का दायरा',
            cardItems: [
              '100+ बच्चे नामांकित',
              'स्वयंसेवक-नेतृत्व में मार्गदर्शन',
              'इंटरैक्टिव पाठ्यक्रम'
            ]
          },
          {
            type: 'breakout-image',
            src: '/images/klkhatterclass2.jpg',
            alt: 'Masti Ki Pathshala Class in Action',
            caption: 'जिज्ञासा और रचनात्मक कौशल को बढ़ावा देना: इंटरैक्टिव सीखने के सत्रों में भाग लेते हुए वंचित बच्चे।'
          },
          {
            type: 'two-column',
            leftType: 'text',
            leftContent: {
              heading: 'कक्षा से परे',
              text: 'मस्ती की पाठशाला सुदूर पर्वतीय गांवों में वंचित बच्चों के लिए एक गतिशील, गैर-औपचारिक शिक्षण पारिस्थितिकी तंत्र प्रदान करती है। हमारा सप्ताहांत पाठ्यक्रम परियोजना-आधारित शिक्षा, बुनियादी विज्ञान प्रयोगों, व्यावहारिक अंग्रेजी, रचनात्मक कलाओं और पर्यावरण जागरूकता पर केंद्रित है।'
            },
            rightType: 'text',
            rightContent: {
              heading: 'मन को सशक्त बनाना',
              text: 'समर्पित स्वयंसेवकों द्वारा इंटरैक्टिव कहानी सुनाने, खेल और मार्गदर्शन के माध्यम से, हमारा उद्देश्य शैक्षिक अंतर को पाटना है, जिससे ग्रामीण बच्चों में जिज्ञासा, आत्मविश्वास और सीखने के प्रति प्रेम पैदा हो सके।'
            }
          }
        ]
      },
      'sanitary-drive': {
        label: 'महिला स्वास्थ्य',
        title: 'स्वास्थ्य, सम्मान और जागरूकता',
        subtitle: 'बातचीत को सामान्य बनाना और ग्रामीण उत्तराखंड में 1000 से अधिक महिलाओं को सशक्त बनाना।',
        image: '/images/menstrual_hygiene_2.jpg',
        badgeColor: '#db2777',
        blocks: [
          {
            type: 'intro',
            heading: 'रूढ़ियों को तोड़ना, जागरूकता बढ़ाना',
            paragraphs: [
              'ग्रामीण समुदायों में मासिक धर्म स्वच्छता और जागरूकता तक पहुंच एक महत्वपूर्ण चुनौती बनी हुई है। इस महत्वपूर्ण आवश्यकता को संबोधित करते हुए, वनप्रस्थ फाउंडेशन ने महिलाओं के स्वास्थ्य, सम्मान और जागरूकता को बढ़ावा देने के उद्देश्य से एक सेनेटरी पैड वितरण अभियान का आयोजन किया।',
              'ग्रामीण महिलाओं को मासिक धर्म स्वच्छता, स्वच्छता और समग्र कल्याण के महत्व पर केंद्रित एक इंटरैक्टिव सत्र में भाग लेने के लिए आमंत्रित किया गया था।'
            ],
            cardTitle: 'प्रमुख सफलता',
            cardItems: [
              '1000+ महिलाओं को लाभ',
              'बायोडिग्रेडेबल पैड्स का वितरण',
              'किशोर स्वास्थ्य जांच आयोजित'
            ]
          },
          {
            type: 'two-column',
            leftType: 'image',
            leftContent: {
              src: '/images/menstrual_hygiene_3.png',
              alt: 'Distribution session'
            },
            rightType: 'image',
            rightContent: {
              src: '/images/menstrual_hygiene_4.jpg',
              alt: 'Mrs Misra distributing pads'
            }
          },
          {
            type: 'two-column',
            leftType: 'text',
            leftContent: {
              heading: 'प्रत्यक्ष जुड़ाव और विश्वास',
              text: 'यह अभियान केवल उत्पाद वितरण से परे है। हम मासिक धर्म से जुड़ी रूढ़ियों को तोड़ने के लिए ग्रामीण उच्च विद्यालयों और ग्रामीण स्वास्थ्य केंद्रों में व्यापक शैक्षिक सत्र चलाते हैं। उच्च गुणवत्ता वाले, बायोडिग्रेडेबल सेनेटरी पैड और पर्यावरण-अनुकूल निपटान बैग वितरित करके, हम सुरक्षा और सम्मान सुनिश्चित करते हैं।'
            },
            rightType: 'image',
            rightContent: {
              src: '/images/menstrual_hygiene_5.jpg',
              alt: 'Interactive session'
            }
          },
          {
            type: 'breakout-image',
            src: '/images/menstrual_hygiene_1.jpg',
            alt: 'Traditional celebration',
            caption: 'स्वास्थ्य और सम्मान का उत्सव: स्वास्थ्य अभियान के समापन पर कुमाऊँनी ग्रामीण महिलाओं का जमावड़ा।'
          }
        ]
      },
      'cleanliness-drive': {
        label: 'पर्यावरण एवं स्वच्छता',
        title: 'सामूहिक जिम्मेदारी, स्वच्छ क्षितिज',
        subtitle: 'हमारे गांवों और पवित्र वन क्षेत्रों के स्वास्थ्य को बहाल करने में स्थानीय महिलाओं का नेतृत्व।',
        image: '/images/cleanliness_1.jpg',
        badgeColor: '#047857',
        blocks: [
          {
            type: 'intro',
            heading: 'महत्वपूर्ण संबंध',
            paragraphs: [
              'ग्रामीण और वनों से सटे क्षेत्रों में, स्वच्छता केवल दिखावे के बारे में नहीं है-यह स्वास्थ्य, पारिस्थितिकी और समग्र सामुदायिक कल्याण से गहराई से जुड़ी है। इस महत्वपूर्ण संबंध को पहचानते हुए, वनप्रस्थ फाउंडेशन ने आसपास के गांवों और वन क्षेत्रों में एक सामुदायिक स्वच्छता अभियान का आयोजन किया, जिसमें स्थानीय महिलाओं ने नेतृत्व किया।',
              'स्वच्छता को केवल एक बार की गतिविधि मानने के बजाय, इस अभियान ने दीर्घकालिक जिम्मेदारी और सामूहिक स्वामित्व पर जोर दिया। स्थानीय महिलाओं ने योजना और क्रियान्वयन दोनों में केंद्रीय भूमिका निभाई।'
            ],
            cardTitle: 'अभियान के मुख्य बिंदु',
            cardItems: [
              'महिला-नेतृत्व पहल',
              'वन एवं रास्तों की सफाई',
              'सतत कचरा प्रबंधन'
            ]
          },
          {
            type: 'breakout-image',
            src: '/images/cleanliness_2.jpg',
            alt: 'Women collective near village school',
            caption: 'इस अभियान ने स्वच्छता को भागीदारी, जागरूकता और गर्व पर आधारित एक जनआंदोलन में बदल दिया।'
          },
          {
            type: 'two-column',
            leftType: 'text',
            leftContent: {
              heading: 'प्राकृतिक संतुलन की बहाली',
              text: 'गांव के रास्तों, सार्वजनिक स्थानों और जंगली पगडंडियों को प्लास्टिक और गैर-बायोडिग्रेडेबल कचरे से मुक्त किया गया। वन क्षेत्रों पर विशेष ध्यान दिया गया, जहां अनदेखा कचरा मिट्टी की गुणवत्ता, जल स्रोतों और वन्यजीवों को गंभीर नुकसान पहुंचा सकता है।'
            },
            rightType: 'text',
            rightContent: {
              heading: 'बदलाव के लिए संवाद',
              text: 'शारीरिक सफाई से परे, इस अभियान ने स्वच्छता, कचरा पृथक्करण और संधारणीय जीवन शैली के आसपास सार्थक संवाद को बढ़ावा दिया। महिला स्वयंसेवकों ने परिवारों और बच्चों के साथ बातचीत की और व्यावहारिक ज्ञान साझा किया।'
            }
          }
        ]
      }
    }
  }
}

// Stats numeric metadata for scroll animation
const stats = [
  { target: 500 },
  { target: 1000 },
  { target: 10 }
]


function App() {
  const [activeSlide, setActiveSlide] = useState(0)
  const [counterValues, setCounterValues] = useState([0, 0, 0])
  const [menuOpen, setMenuOpen] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [lang, setLang] = useState('en')
  const [volunteerSubmitted, setVolunteerSubmitted] = useState(false)
  const [volunteerSubmitting, setVolunteerSubmitting] = useState(false)
  const statsRef = useRef(null)

  const getInitialView = () => {
    const path = window.location.pathname
    if (path.includes('initiatives.html')) return 'initiatives'
    if (path.includes('transparency.html')) return 'governance'
    if (path.includes('media.html')) return 'media'
    if (path.includes('awards.html')) return 'awards'
    if (path.includes('faq.html')) return 'faq'
    if (path.includes('medical-camp.html') || path.includes('medical-camp')) return 'medical-camp'
    if (path.includes('punarjeevan.html') || path.includes('punarjeevan')) return 'punarjeevan'
    if (path.includes('pathshala.html') || path.includes('pathshala')) return 'pathshala'
    if (path.includes('sanitary-drive.html') || path.includes('sanitary-drive')) return 'sanitary-drive'
    if (path.includes('cleanliness-drive.html') || path.includes('cleanliness-drive') || path.includes('cleanliness')) return 'cleanliness-drive'
    if (path.includes('contribute.html') || path.includes('contribute') || path.includes('donate')) return 'contribute'
    if (path.includes('volunteer.html') || path.includes('volunteer')) return 'volunteer'
    return 'home'
  }
  const [view, setView] = useState(getInitialView)

  useEffect(() => {
    const handlePopState = () => {
      setView(getInitialView())
    }
    window.addEventListener('popstate', handlePopState)
    return () => window.removeEventListener('popstate', handlePopState)
  }, [])

  const navigateTo = (path, viewName) => {
    window.history.pushState({}, '', path)
    setView(viewName)
    setMenuOpen(false)
    window.scrollTo({ top: 0, behavior: 'instant' })
  }

  const t = content[lang]

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % 5)
    }, 5000)
    return () => window.clearInterval(timer)
  }, [])

  useEffect(() => {
    if (view !== 'home' || !statsRef.current) return
    setCounterValues([0, 0, 0])
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return
          const duration = 1200
          const startTime = performance.now()
          const animate = (time) => {
            const progress = Math.min((time - startTime) / duration, 1)
            setCounterValues(stats.map((stat) => Math.round(stat.target * progress)))
            if (progress < 1) requestAnimationFrame(animate)
          }
          requestAnimationFrame(animate)
          observer.disconnect()
        })
      },
      { threshold: 0.1 }
    )
    observer.observe(statsRef.current)
    return () => observer.disconnect()
  }, [view])

  const [initPrefix, initHighlight] = t.ourInitiatives.split(' ')

  return (
    <div className="app-shell">
      <header className="topbar">
        <div className="brand">
          <img src="/images/Vanprastha-NGO-logo.png" alt="Vanprastha Foundation logo" />
          <div className="brand-name">{t.brandName}</div>
        </div>

        <button className="mobile-toggle" onClick={() => setMenuOpen((open) => !open)} aria-label="Toggle navigation menu">
          <span />
          <span />
          <span />
        </button>

        <nav className={menuOpen ? 'nav-links open' : 'nav-links'} aria-label="Primary navigation">
          {t.navLinks.map((link) => {
            let isActive = false
            let targetView = 'home'
            if (link.href.includes('initiatives.html')) {
              isActive = view === 'initiatives'
              targetView = 'initiatives'
            } else if (link.href.includes('transparency.html')) {
              isActive = view === 'governance'
              targetView = 'governance'
            } else if (link.href.includes('media.html')) {
              isActive = view === 'media'
              targetView = 'media'
            } else if (link.href.includes('awards.html')) {
              isActive = view === 'awards'
              targetView = 'awards'
            } else if (link.href.includes('faq.html')) {
              isActive = view === 'faq'
              targetView = 'faq'
            } else {
              isActive = view === 'home'
              targetView = 'home'
            }
            return (
              <a
                key={link.label}
                href={link.href}
                className={isActive ? 'active' : ''}
                onClick={(e) => {
                  e.preventDefault()
                  navigateTo(link.href, targetView)
                }}
              >
                {link.label}
              </a>
            )
          })}
          <button
            className="lang-toggle-btn"
            onClick={() => {
              setLang((prev) => (prev === 'en' ? 'hi' : 'en'));
              setMenuOpen(false);
            }}
            aria-label="Change Language"
          >
            <span className={lang === 'en' ? 'active-lang' : ''}>EN</span>
            <span className="lang-divider">|</span>
            <span className={lang === 'hi' ? 'active-lang' : ''}>हिं</span>
          </button>
        </nav>

        <a
          className="donate-btn"
          href="contribute.html"
          onClick={(e) => {
            e.preventDefault()
            navigateTo('contribute.html', 'contribute')
          }}
        >
          {t.donate}
        </a>
      </header>

      <main className="main-content">
        {view === 'home' && (
          <>
            <section className="hero-section">
              <div className="hero-background-elements">
                <div className="floating-item stethoscope">🩺</div>
                <div className="floating-item syringe">💉</div>
                <div className="floating-item eco-seed">🌱</div>
                <div className="floating-item spark">✨</div>
              </div>
              <div className="hero-carousel">
                <div className="carousel-track" style={{ transform: `translateX(-${activeSlide * 100}%)` }}>
                  {t.heroSlides.map((slide) => (
                    <article className="carousel-slide" key={slide.title}>
                      <img src={slide.image} alt={slide.title} />
                    </article>
                  ))}
                </div>
                <div className="carousel-dots" aria-label="Carousel navigation">
                  {t.heroSlides.map((slide, index) => (
                    <button
                      key={slide.title}
                      className={index === activeSlide ? 'dot active' : 'dot'}
                      onClick={() => setActiveSlide(index)}
                      aria-label={`Show slide ${index + 1}`}
                    />
                  ))}
                </div>
                <div className="hero-info-card">
                  <span>{t.heroSlides[activeSlide].tag}</span>
                  <h3>{t.heroSlides[activeSlide].title}</h3>
                  <p>{t.heroSlides[activeSlide].text}</p>
                  <button onClick={() => setIsModalOpen(true)}>{t.exploreStory}</button>
                </div>
              </div>

              <aside className="hero-panel" ref={statsRef}>
                <div className="stats-grid">
                  {t.stats.map((item, index) => {
                    const value = counterValues[index]
                    const target = item.target || stats[index].target
                    const displayValue = item.displaySuffix && value === target ? `${value}${item.displaySuffix}` : value
                    return (
                      <div key={item.label} className="stat-card" style={{ borderLeftColor: item.color }}>
                        <span className="stat-category">{item.category}</span>
                        <strong>{displayValue} {item.label.replace(/^\d+\+?\s*/, '')}</strong>
                        <p>{item.description}</p>
                      </div>
                    )
                  })}
                </div>
              </aside>
            </section>

            <section className="about-section">
              <div className="about-image">
                <img src="/images/kumaoni women.jpg" alt="Rural Women of Kumaon" />
                <div className="about-overlay">
                  <h2>{t.holisticTitle}</h2>
                </div>
              </div>
              <div className="about-copy">
                <span className="eyebrow">{t.aboutTitle}</span>
                <h3>
                  {t.aboutHeadingPrefix}
                  <span>{t.aboutHeadingHighlight}</span>
                  {t.aboutHeadingSuffix}
                </h3>
                <p>{t.aboutParagraph1}</p>
                <p>{t.aboutParagraph2}</p>
              </div>
            </section>

            <article className="acronym-card">
              <div className="acronym-header">
                <span>{t.whatWeStandFor}</span>
                <p>{t.acronymSubtitle}</p>
              </div>
              <div className="acronym-grid">
                {t.acronymItems.map((item) => (
                  <div key={item.letter} className="acronym-item">
                    <div className="acronym-letter">{item.letter}</div>
                    <div>
                      <strong>{item.title}</strong>
                      <p>{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="acronym-footer">{t.leadingPurpose}</div>
            </article>
          </>
        )}

        {view === 'initiatives' && (
          <section className="initiatives-section">
            <div className="section-title-group">
              <span>{t.groundProgrammes}</span>
              <div className="section-title-row">
                <h2>
                  {initPrefix} <span>{initHighlight}</span>
                </h2>
              </div>
            </div>

            <div className="initiatives-grid">
              {t.initiatives.map((item) =>
                item.hero ? (
                  <article key={item.title} className="initiative-hero">
                    <img src={item.image} alt={item.title} />
                    <div className="initiative-hero-overlay">
                      <span>{item.category}</span>
                      <h3>{item.title}</h3>
                      <p>{item.description}</p>
                      <div className="initiative-hero-actions">
                        <a
                          className="primary-link"
                          href={item.href}
                          onClick={(e) => {
                            e.preventDefault()
                            navigateTo(item.href, 'punarjeevan')
                          }}
                        >
                          {lang === 'en' ? 'Read Full Narrative' : 'पूरी कहानी पढ़ें'}
                        </a>
                        <a
                          className="secondary-link"
                          href={item.ctaHref}
                          onClick={(e) => {
                            e.preventDefault()
                            navigateTo(item.ctaHref, 'contribute')
                          }}
                        >
                          {item.cta}
                        </a>
                      </div>
                    </div>
                  </article>
                ) : (
                  <article key={item.title} className="initiative-card">
                    <div className="initiative-card-copy">
                      <span>{item.category}</span>
                      <h3>{item.title}</h3>
                      <p>{item.description}</p>
                      <a
                        href={item.href}
                        onClick={(e) => {
                          e.preventDefault()
                          let viewName = 'medical-camp'
                          if (item.href.includes('punarjeevan')) viewName = 'punarjeevan'
                          else if (item.href.includes('pathshala')) viewName = 'pathshala'
                          else if (item.href.includes('sanitary-drive')) viewName = 'sanitary-drive'
                          else if (item.href.includes('cleanliness-drive') || item.href.includes('cleanliness')) viewName = 'cleanliness-drive'
                          navigateTo(item.href, viewName)
                        }}
                      >
                        {lang === 'en' ? 'Read full narrative' : 'पूरी कहानी पढ़ें'}
                      </a>
                    </div>
                    {item.images && (
                      <div className="initiative-card-images">
                        {item.images.map((src) => (
                          <img key={src} src={src} alt={item.title} />
                        ))}
                      </div>
                    )}
                  </article>
                )
              )}
            </div>
          </section>
        )}

        {['medical-camp', 'punarjeevan', 'pathshala', 'sanitary-drive', 'cleanliness-drive'].includes(view) && (
          <article className="narrative-page">
            <header className="narrative-hero-banner" style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.7)), url(${t.narrativeDetails[view].image})` }}>
              <div className="narrative-hero-content">
                <span className="narrative-badge" style={{ backgroundColor: t.narrativeDetails[view].badgeColor }}>{t.narrativeDetails[view].label}</span>
                <h1 className="narrative-title">{t.narrativeDetails[view].title}</h1>
                <p className="narrative-subtitle">{t.narrativeDetails[view].subtitle}</p>
              </div>
            </header>

            <div className="narrative-blocks-container">
              {t.narrativeDetails[view].blocks.map((block, bIdx) => {
                if (block.type === 'intro') {
                  return (
                    <div key={bIdx} className="narrative-intro-block">
                      <div className="narrative-intro-main">
                        <h2 className="narrative-section-heading">{block.heading}</h2>
                        {block.paragraphs.map((p, pIdx) => (
                          <p key={pIdx} className="narrative-paragraph">{p}</p>
                        ))}
                      </div>
                      <div className="narrative-info-card">
                        <h3>{block.cardTitle}</h3>
                        <ul>
                          {block.cardItems.map((item, cIdx) => (
                            <li key={cIdx}>{item}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  )
                }

                if (block.type === 'two-column') {
                  return (
                    <div key={bIdx} className={block.theme === 'green' ? 'narrative-two-column-block green-theme' : 'narrative-two-column-block'}>
                      <div className="narrative-column-left">
                        {block.leftType === 'text' && (
                          <>
                            {block.leftContent.heading && <h3 className="narrative-column-heading">{block.leftContent.heading}</h3>}
                            {block.leftContent.text && <p className="narrative-paragraph">{block.leftContent.text}</p>}
                            {block.leftContent.listItems && (
                              <ul className="narrative-bullet-list">
                                {block.leftContent.listItems.map((item, idx) => (
                                  <li key={idx}>{item}</li>
                                ))}
                              </ul>
                            )}
                          </>
                        )}
                        {block.leftType === 'image' && (
                          <div className="narrative-image-wrapper">
                            <img src={block.leftContent.src} alt={block.leftContent.alt} />
                          </div>
                        )}
                      </div>
                      <div className="narrative-column-right">
                        {block.rightType === 'text' && (
                          <>
                            {block.rightContent.heading && <h3 className="narrative-column-heading">{block.rightContent.heading}</h3>}
                            {block.rightContent.text && <p className="narrative-paragraph">{block.rightContent.text}</p>}
                            {block.rightContent.listItems && (
                              <ul className="narrative-bullet-list">
                                {block.rightContent.listItems.map((item, idx) => (
                                  <li key={idx}>{item}</li>
                                ))}
                              </ul>
                            )}
                          </>
                        )}
                        {block.rightType === 'image' && (
                          <div className="narrative-image-wrapper">
                            <img src={block.rightContent.src} alt={block.rightContent.alt} />
                          </div>
                        )}
                        {block.rightType === 'quote' && (
                          <blockquote className="narrative-quote-box">
                            <p>“{block.rightContent.text}”</p>
                          </blockquote>
                        )}
                      </div>
                    </div>
                  )
                }

                if (block.type === 'breakout-image') {
                  return (
                    <div key={bIdx} className="narrative-breakout-block">
                      <div className="narrative-breakout-image">
                        <img src={block.src} alt={block.alt} />
                      </div>
                      {block.caption && <p className="narrative-image-caption">{block.caption}</p>}
                    </div>
                  )
                }

                return null
              })}


            </div>
          </article>
        )}

        {view === 'governance' && (
          <section className="info-placeholder-section">
            <h2>{t.governanceLink}</h2>
            <p className="placeholder-text">
              {lang === 'en'
                ? 'Information about our transparency, governance structures, and financial reports will be published here soon.'
                : 'हमारी पारदर्शिता, शासन संरचना और वित्तीय रिपोर्टों के बारे में जानकारी जल्द ही यहाँ प्रकाशित की जाएगी।'}
            </p>
          </section>
        )}

        {view === 'media' && (
          <article className="narrative-page media-view-page">
            <header className="contribute-header-banner">
              <span className="narrative-badge" style={{ backgroundColor: '#154212' }}>
                {lang === 'en' ? 'PRESS & COVERAGE' : 'प्रेस और मीडिया कवरेज'}
              </span>
              <h1 className="narrative-title">
                {lang === 'en' ? (
                  <>Media & <span className="highlight-italic">Resource Centre</span></>
                ) : (
                  <>मीडिया और <span className="highlight-italic">संसाधन केंद्र</span></>
                )}
              </h1>
              <p className="narrative-subtitle">
                {lang === 'en'
                  ? 'Tracking our journey, impact stories, and press coverage as we work towards restoring the Himalayan ecological balance and community healthcare.'
                  : 'हिमालयी पर्यावरण संतुलन और सामुदायिक स्वास्थ्य सेवा को बहाल करने के हमारे प्रयासों की समाचार कवरेज और प्रभाव कहानियां।'}
              </p>
            </header>

            <div className="media-grid-container">
              <div className="media-card">
                <div className="media-card-badge">
                  <span>{lang === 'en' ? 'Newspaper Feature · Health Camp' : 'समाचार पत्र विशेष · स्वास्थ्य शिविर'}</span>
                </div>
                <div className="media-card-image-wrapper">
                  <a href="/images/media_dr_rajeev_exercise.png" target="_blank" rel="noopener noreferrer">
                    <img src="/images/media_dr_rajeev_exercise.png" alt="Dr Rajeev Exercise essential for health newspaper feature" className="media-clipping-img" />
                  </a>
                </div>
                <div className="media-card-content">
                  <h3>
                    {lang === 'en'
                      ? 'Exercise is Essential for Good Health : Dr. Rajeev'
                      : 'स्वस्थ रहने के लिए व्यायाम जरूरी : डा. राजीव'}
                  </h3>
                  <p className="media-card-summary">
                    {lang === 'en'
                      ? 'Coverage of Vanprastha Foundation’s Free Medical & Dental Camp held at Village Ratkhal, Dunagiri. Esteemed doctors including Dr. Rajeev Seth, Dr. Tulika Seth (AIIMS), and Dr. Aalok Tiwari conducted comprehensive health checkups and emphasized daily exercise alongside balanced nutrition for over 100 rural beneficiaries.'
                      : 'दूनागिरी के रत्व्वाल गांव में वनप्रस्थ फाउंडेशन द्वारा आयोजित निशुल्क स्वास्थ्य शिविर की विशेष कवरेज। शिविर में एम्स दिल्ली के डा. राजीव सेठ, डा. तूलिका और वरिष्ठ दंत चिकित्सक डा. आलोक तिवारी ने ग्रामीणों के स्वास्थ्य की जांच की और स्वस्थ रहने के लिए नियमित व्यायाम व संतुलित भोजन चक्र को जरूरी बताया।'}
                  </p>
                  <div className="media-card-footer">
                    <span className="media-date">📍 {lang === 'en' ? 'Ratkhal, Dwarahat (Almora)' : 'रत्व्वाल, द्वाराहाट (अल्मोड़ा)'}</span>
                    <a
                      href="/images/media_dr_rajeev_exercise.png"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="view-clipping-btn"
                    >
                      {lang === 'en' ? 'View Full Clipping ↗' : 'पूरी कटिंग देखें ↗'}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </article>
        )}

        {view === 'awards' && (
          <article className="narrative-page awards-view-page">
            <header className="contribute-header-banner">
              <span className="narrative-badge" style={{ backgroundColor: '#b45309' }}>
                {lang === 'en' ? 'HONOURS & ACCOLADES' : 'सम्मान और पुरस्कार'}
              </span>
              <h1 className="narrative-title">
                {lang === 'en' ? (
                  <>Awards & <span className="highlight-italic">Recognition</span></>
                ) : (
                  <>पुरस्कार और <span className="highlight-italic">मान्यता</span></>
                )}
              </h1>
              <p className="narrative-subtitle">
                {lang === 'en'
                  ? 'Celebrating national recognition and community trust earned through sincere service, ecological stewardship, and rural empowerment in Uttarakhand.'
                  : 'उत्तराखंड में सेवा, पर्यावरण संरक्षण और ग्रामीण सशक्तिकरण के माध्यम से अर्जित राष्ट्रीय सम्मान और सामुदायिक विश्वास का उत्सव।'}
              </p>
            </header>

            <div className="media-grid-container">
              <div className="media-card award-card">
                <div className="media-card-badge award-card-badge">
                  <span>{lang === 'en' ? 'Sardar Patel Unity Award · National Honour' : 'सरदार पटेल एकता पुरस्कार · राष्ट्रीय सम्मान'}</span>
                </div>
                <div className="media-card-image-wrapper award-image-wrapper">
                  <a href="/images/award_sardar_patel.jpg" target="_blank" rel="noopener noreferrer">
                    <img src="/images/award_sardar_patel.jpg" alt="CA Dr Alok Misra receiving Sardar Patel Unity Award" className="media-clipping-img award-showcase-img" />
                  </a>
                </div>
                <div className="media-card-content">
                  <h3>
                    {lang === 'en'
                      ? 'Sardar Patel Unity Award Presented to CA (Dr.) Alok Misra'
                      : 'सीए (डॉ.) आलोक मिश्रा को प्रदान किया गया सरदार पटेल एकता सम्मान'}
                  </h3>
                  <p className="media-card-summary">
                    {lang === 'en'
                      ? 'CA (Dr.) Alok Misra, Founder & Promoter of Vanprastha Foundation (Uttarakhand), was honored with the prestigious Sardar Patel Unity Award for outstanding contribution as the Best Spiritual Retreat & Community Welfare Leader in India. This national accolade celebrates the foundation’s relentless commitment to restoring Himalayan forests, uplifting rural health, and empowering grassroots communities.'
                      : 'वनप्रस्थ फाउंडेशन (उत्तराखंड) के संस्थापक और प्रवर्तक सीए (डॉ.) आलोक मिश्रा को भारत में सर्वश्रेष्ठ आध्यात्मिक रिट्रीट और सामाजिक कल्याण के लिए प्रतिष्ठित सरदार पटेल एकता सम्मान से सम्मानित किया गया। यह राष्ट्रीय सम्मान हिमालयी वनों की बहाली, ग्रामीण स्वास्थ्य सुधार और सामुदायिक सशक्तिकरण के प्रति फाउंडेशन की अटूट निष्ठा का प्रतीक है।'}
                  </p>
                  <div className="media-card-footer">
                    <span className="media-date">🏆 {lang === 'en' ? 'National Recognition · Annual Retreat India' : 'राष्ट्रीय सम्मान · वार्षिक समारोह'}</span>
                    <a
                      href="/images/award_sardar_patel.jpg"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="view-clipping-btn award-btn"
                    >
                      {lang === 'en' ? 'View Award Photo ↗' : 'पुरस्कार फोटो देखें ↗'}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </article>
        )}

        {view === 'faq' && (
          <section className="info-placeholder-section">
            <h2>{t.faqLink}</h2>
            <p className="placeholder-text">
              {lang === 'en'
                ? 'Frequently asked questions about our programs, volunteer opportunities, and operational transparency are being updated.'
                : 'हमारे कार्यक्रमों, स्वयंसेवक अवसरों और परिचालन पारदर्शिता के बारे में अक्सर पूछे जाने वाले प्रश्न अपडेट किए जा रहे हैं।'}
            </p>
          </section>
        )}

        {view === 'contribute' && (
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
        )}

        {view === 'volunteer' && (
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
        )}

        {!['contribute', 'volunteer'].includes(view) && (
          <section className="cta-section">
            <div className="cta-card">
              <h2>{t.supportOurMission}</h2>
              <p>{t.supportMissionText}</p>
              <div className="cta-actions">
                <a
                  className="primary-btn"
                  href="contribute.html"
                  onClick={(e) => {
                    e.preventDefault()
                    navigateTo('contribute.html', 'contribute')
                  }}
                >
                  {t.contributeNow}
                </a>
                <a
                  className="secondary-btn"
                  href="volunteer.html"
                  onClick={(e) => {
                    e.preventDefault()
                    navigateTo('volunteer.html', 'volunteer')
                  }}
                >
                  {t.becomeVolunteer}
                </a>
              </div>
            </div>
          </section>
        )}
      </main>

      <footer className="footer">
        <div className="footer-inner">
          {/* Left Column: Branding and Motive */}
          <div className="footer-col footer-motive-col">
            <div className="footer-logo-brand">
              <img src="/images/Vanprastha-NGO-logo.png" alt="Vanprastha Foundation logo" />
              <h3>{t.brandName}</h3>
            </div>
            <p className="footer-motive-text">{t.footerMotive}</p>
          </div>

          {/* Middle Column: Quick Links */}
          <div className="footer-col footer-links-col">
            <h4>{t.quickLinks}</h4>
            <div className="footer-links-list">
              <a href="initiatives.html">{t.initiativesLink}</a>
              <a href="media.html">{t.mediaLink}</a>
              <a href="transparency.html">{t.governanceLink}</a>
              <a href="faq.html">{t.faqLink}</a>
            </div>
          </div>

          {/* Right Column: Contact Info */}
          <div className="footer-col footer-contact-col">
            <h4>{t.contactUs}</h4>
            <div className="contact-items">
              <span className="contact-item font-semibold">{t.headOffice}</span>
              <span className="contact-item">{t.branchOffice}</span>
              <span className="contact-item">
                📞 <a href="tel:+919289526777">+91 92895 26777</a>
              </span>
              <span className="contact-item">
                ☎️ <a href="tel:+911145631889">011 4563 1889</a>
              </span>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="footer-divider"></div>
          <div className="footer-note">© {new Date().getFullYear()} {t.brandName}.</div>
        </div>
      </footer>

      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            className="modal-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsModalOpen(false)}
          >
            <motion.div
              className="modal-box"
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: 'spring', duration: 0.5, bounce: 0.15 }}
              onClick={(e) => e.stopPropagation()}
            >
              <header className="modal-header">
                <h2>{t.heroSlides[activeSlide].title}</h2>
                <button
                  className="modal-close-btn"
                  onClick={() => setIsModalOpen(false)}
                  aria-label="Close modal"
                >
                  &times;
                </button>
              </header>

              <div className="modal-body">
                {t.heroSlides[activeSlide].gallery && t.heroSlides[activeSlide].gallery.length > 0 && (
                  <div className="modal-gallery">
                    {t.heroSlides[activeSlide].gallery.map((imgUrl, i) => (
                      <img key={i} src={imgUrl} alt={`${t.heroSlides[activeSlide].title} gallery ${i + 1}`} />
                    ))}
                  </div>
                )}
                <div className="modal-text">
                  <p>{t.heroSlides[activeSlide].detailedDescription}</p>
                </div>
              </div>

              <footer className="modal-footer">
                <a
                  className="modal-support-btn"
                  href="contribute.html"
                  onClick={(e) => {
                    e.preventDefault()
                    setIsModalOpen(false)
                    navigateTo('contribute.html', 'contribute')
                  }}
                >
                  {t.supportUs}
                </a>
              </footer>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default App
