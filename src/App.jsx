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
    headOffice: 'Head Office: Village Ratkhal, PO Dunagiri, Dwarahat, Dist. Almora, Uttarakhand – 263653',
    branchOffice: 'Branch Office: AD-13, LGF, Tagore Garden, New Delhi – 110027',
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
    ]
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
    ]
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
  const statsRef = useRef(null)

  const t = content[lang]

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % 5)
    }, 5000)
    return () => window.clearInterval(timer)
  }, [])

  useEffect(() => {
    if (!statsRef.current) return
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
      { threshold: 0.3 }
    )
    observer.observe(statsRef.current)
    return () => observer.disconnect()
  }, [])

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
          {t.navLinks.map((link) => (
            <a key={link.label} href={link.href} onClick={() => setMenuOpen(false)}>
              {link.label}
            </a>
          ))}
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

        <a className="donate-btn" href="contribute.html">
          {t.donate}
        </a>
      </header>

      <main className="main-content">
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
            <span className="panel-eyebrow">{t.ourMission}</span>
            <h2>{t.holisticTitle}</h2>
            <p>{t.missionText}</p>
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

        <section className="initiatives-section">
          <div className="section-title-group">
            <span>{t.groundProgrammes}</span>
            <div className="section-title-row">
              <h2>
                {initPrefix} <span>{initHighlight}</span>
              </h2>
              <a href="initiatives.html">{t.viewAllInitiatives}</a>
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
                      <a className="primary-link" href={item.href}>
                        {lang === 'en' ? 'Read Full Narrative' : 'पूरी कहानी पढ़ें'}
                      </a>
                      <a className="secondary-link" href={item.ctaHref}>
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
                    <a href={item.href}>{lang === 'en' ? 'Read full narrative' : 'पूरी कहानी पढ़ें'}</a>
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

        <section className="cta-section">
          <div className="cta-card">
            <h2>{t.supportOurMission}</h2>
            <p>{t.supportMissionText}</p>
            <div className="cta-actions">
              <a className="primary-btn" href="contribute.html">
                {t.contributeNow}
              </a>
              <a className="secondary-btn" href="volunteer.html">
                {t.becomeVolunteer}
              </a>
            </div>
          </div>
        </section>
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
                <a className="modal-support-btn" href="contribute.html">
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
