import { Service, Testimonial } from '../types';
import { CarouselSlide } from '../components/ImageCarousel';

export const FOUNDER_INFO = {
  name: 'Mrs. Veena Tikare',
  titles: 'Certified Clinical Hypnotherapist · Certified Regression Therapist · Spiritual Healer',
  centerName: 'BODHI Wellness Centre',
  website: 'myreincarnation.in',
  tagline: 'Discover the Healing Within You · Unravel the Inner Wisdom',
  location: '"Shreeshaya", 1st Main, Narayanpur, Near Haliyal Naka, Dharwad – 580008, North Karnataka, India',
  phone: '+91 9449829764',
  email: 'mail@myreincarnation.in',
  realPhoto: '/src/assets/real/veena_tikare.jpg',
  realLogo: '/src/assets/real/logo.png',
  realSanctuary: '/src/assets/real/sanctuary_dharwad.jpg',
  certifications: [
    'Certified Clinical Hypnotherapist & Trainer (EKAA)',
    'Recognized by IMDHA (International Medical & Dental Hypnotherapy Association, USA)',
    'Certified Regression Therapist (TASSO International, Netherlands)',
    'Certified Hypnobirthing Practitioner (Marie Mongan Method)',
    'Grand Master in Reiki, Rajakriya Reiki & Angel Therapy',
    'Certified Redikall Multi-dimensional Healer',
    'Family Constellation & Systemic Healing Facilitator',
    'Tarot Card Reader & Intuitive Spiritual Counselor'
  ],
  bio: `Mrs. Veena Tikare is the founder, master therapist, and educator behind BODHI Wellness Centre in Dharwad, Karnataka. With nearly two decades of clinical and spiritual experience, she has helped thousands of individuals overcome deep-seated psychosomatic illnesses, chronic anxiety, unexplained phobias, and recurring familial challenges through drug-free subconscious therapeutics.

Her sanctuary in Narayanpur, Dharwad combines internationally accredited clinical hypnosis standards with ancient Vedic spiritual principles, creating a peaceful, confidential space where individuals can awaken their own inner healer.`
};

// === REAL IMAGE CAROUSELS FOR EACH PAGE ===

export const HOME_CAROUSEL_SLIDES: CarouselSlide[] = [
  {
    image: '/src/assets/real/sanctuary_dharwad.jpg',
    title: 'BODHI Wellness Sanctuary, Dharwad',
    subtitle: 'A serene haven in North Karnataka dedicated to drug-free emotional and subconscious healing.',
    tag: '10+ Years of Excellence'
  },
  {
    image: '/src/assets/real/veena_tikare.jpg',
    title: 'Master Guidance by Mrs. Veena Tikare',
    subtitle: 'Certified Clinical Hypnotherapist (EKAA/IMDHA USA) and Regression Therapist (TASSO Netherlands).',
    tag: 'Founder & Master Healer'
  },
  {
    image: '/src/assets/real/plr.jpg',
    title: 'Past Life Regression Therapy',
    subtitle: 'Journey into deep subconscious memories to uncover and release the root causes of chronic patterns.',
    tag: 'Signature Modality'
  },
  {
    image: '/src/assets/real/hypnotherapy.jpg',
    title: 'Clinical Hypnotherapy & Subconscious Alignment',
    subtitle: 'Bypass conscious resistance to overcome insomnia, anxiety, and psychosomatic discomfort.',
    tag: 'IMDHA Accredited'
  },
  {
    image: '/src/assets/real/family_constellation.jpg',
    title: 'Family Constellation & Lineage Healing',
    subtitle: 'Experiential systemic healing to restore the Orders of Love across multi-generational family trees.',
    tag: 'Systemic Resolution'
  }
];

export const ABOUT_CAROUSEL_SLIDES: CarouselSlide[] = [
  {
    image: '/src/assets/real/veena_tikare.jpg',
    title: 'Mrs. Veena Tikare · Master Practitioner',
    subtitle: 'Dedicated to helping individuals discover their inner light through compassionate, scientific guidance.',
    tag: 'Practitioner Profile'
  },
  {
    image: '/src/assets/real/sanctuary_dharwad.jpg',
    title: '"Shreeshaya" Sanctuary in Narayanpur',
    subtitle: 'A peaceful, private environment custom-built for emotional safety and profound meditative breakthroughs.',
    tag: 'Dharwad Centre'
  },
  {
    image: '/src/assets/real/collage.jpg',
    title: 'A Decade of Healing & Training in Dharwad',
    subtitle: 'Empowering seekers, therapists, and families across Karnataka and beyond.',
    tag: 'Our Journey'
  }
];

export const SERVICES_CAROUSEL_SLIDES: CarouselSlide[] = [
  {
    image: '/src/assets/real/plr.jpg',
    title: 'Past Life Regression Therapy (PLR)',
    subtitle: 'Explore soul memories and dissolve past life vows, unexplained phobias, and emotional imprints.',
    tag: 'Deep Subconscious'
  },
  {
    image: '/src/assets/real/hypnotherapy.jpg',
    title: 'Clinical Hypnotherapy & Mind Mechanics',
    subtitle: 'Gentle, scientific brainwave alignment for stress, panic, confidence, and psychosomatic well-being.',
    tag: 'Mind Therapeutics'
  },
  {
    image: '/src/assets/real/inner_child.jpg',
    title: 'Inner Child & Womb Regression Healing',
    subtitle: 'Healing developmental wounding, early childhood neglect, and in-utero emotional stress.',
    tag: 'Emotional Re-parenting'
  },
  {
    image: '/src/assets/real/family_constellation.jpg',
    title: 'Family Systemic Constellations',
    subtitle: 'Uncover unseen loyalties and release burdens carried on behalf of ancestors.',
    tag: 'Ancestral Harmony'
  }
];

export const TRAINING_CAROUSEL_SLIDES: CarouselSlide[] = [
  {
    image: '/src/assets/real/collage.jpg',
    title: 'EKAA Integrated Clinical Hypnotherapy Certifications',
    subtitle: 'Learn professional subconscious therapy accredited by IMDHA (USA) with live clinical demonstrations.',
    tag: 'Professional Accreditation'
  },
  {
    image: '/src/assets/real/veena_tikare.jpg',
    title: 'Learn from an Official EKAA Certified Trainer',
    subtitle: 'Mrs. Veena Tikare personally mentors students in foundational to advanced regression protocols.',
    tag: 'Master Mentorship'
  },
  {
    image: '/src/assets/real/hypnotherapy.jpg',
    title: 'Hands-On Practical Case Work',
    subtitle: 'Master trance induction, suggestibility testing, deepening techniques, and script design.',
    tag: 'Clinical Training'
  }
];

export const WORKSHOPS_CAROUSEL_SLIDES: CarouselSlide[] = [
  {
    image: '/src/assets/real/family_constellation.jpg',
    title: 'Immersive Healing Retreats & Circles',
    subtitle: 'Interactive group workshops designed to resolve chronic disease roots and ancestral blockages.',
    tag: 'Weekend Intensives'
  },
  {
    image: '/src/assets/real/sanctuary_dharwad.jpg',
    title: 'Metaphysical Disease Reversal Retreats',
    subtitle: 'Regular retreats addressing Diabetes, B.P, Thyroid, and Cancer at the subconscious root level.',
    tag: 'Holistic Reversal'
  }
];

export const LIGHT_CAROUSEL_SLIDES: CarouselSlide[] = [
  {
    image: '/src/assets/real/collage.jpg',
    title: 'The LIGHT Initiative · Free Community Healing',
    subtitle: 'Giving back to society through bi-monthly free group healings every 2nd & 4th Thursday.',
    tag: 'Community Seva'
  },
  {
    image: '/src/assets/real/sanctuary_dharwad.jpg',
    title: 'Accessible Healing for Everyone in Need',
    subtitle: 'Group womb meditations, mother/father wound clearance, and collective peace prayers.',
    tag: '100% Free Seva'
  }
];

export const CONTACT_CAROUSEL_SLIDES: CarouselSlide[] = [
  {
    image: '/src/assets/real/sanctuary_dharwad.jpg',
    title: 'Visit Us at "Shreeshaya", Dharwad',
    subtitle: 'Conveniently situated near Haliyal Naka, 1st Main, Narayanpur, Dharwad.',
    tag: 'Sanctuary Location'
  },
  {
    image: '/src/assets/real/veena_tikare.jpg',
    title: 'Begin Your Healing Journey',
    subtitle: 'Reach out via phone, WhatsApp, or email to schedule an in-person or online Zoom consultation.',
    tag: 'We are Here to Help'
  }
];

// === CORE PILLARS FROM SCREENSHOT ===
export const CORE_PILLARS = [
  {
    id: 'safe-space',
    title: 'A Safe Space to Heal',
    description: 'Feel heard, respected, and supported in a calm and confidential environment tailored for deep vulnerability.',
    iconName: 'clock'
  },
  {
    id: 'guided-care',
    title: 'Guided with Care & Respect',
    description: 'Personalized sessions designed around your comfort, needs, and individual spiritual journey.',
    iconName: 'award'
  },
  {
    id: 'wellbeing-first',
    title: 'Your Wellbeing Comes First',
    description: 'Move at your own pace, with compassionate guidance throughout your inner healing journey.',
    iconName: 'heart'
  }
];

// === RELATED INFORMATION: THE 4-STEP HEALING PATHWAY ===
export const HEALING_PATHWAY_STEPS = [
  {
    step: '01',
    title: 'Confidential Holistic Discovery',
    description: 'We listen deeply to your life history, emotional patterns, physical symptoms, and family background to identify root stress triggers.'
  },
  {
    step: '02',
    title: 'Gentle Trance & Safe Subconscious Access',
    description: 'Through clinical relaxation and guided alpha-theta brainwave induction, we access the emotional memory vaults where origin beliefs reside.'
  },
  {
    step: '03',
    title: 'Cathartic Release & Trauma Clearance',
    description: 'Safely discharge frozen emotional charges, soul vows, inner child distress, or ancestral burdens without re-traumatization.'
  },
  {
    step: '04',
    title: 'Neural Rewiring & Grounded Integration',
    description: 'Anchor self-worth, emotional sovereignty, and vitality, giving you practical daily tools to sustain your transformation.'
  }
];

// === CONDITIONS WE RELIEVE ===
export const CONDITIONS_TREATED = [
  {
    title: 'Psychosomatic & Chronic Ailments',
    details: 'Migraines, irritable bowel, unexplained fatigue, and chronic pain resisting standard medical diagnosis.'
  },
  {
    title: 'Severe Anxiety, Panic & Insomnia',
    details: 'Relief from chronic nervous exhaustion, racing thoughts, panic triggers, and sleeplessness.'
  },
  {
    title: 'Irrational Phobias & Fears',
    details: 'Fear of heights, confinement, water, public speaking, death, or deep-seated fear of abandonment.'
  },
  {
    title: 'Recurring Relationship Loops & Grief',
    details: 'Breaking toxic generational cycles, resolving deep bereavement, and healing marital discord.'
  },
  {
    title: 'Inner Child & Pre-Natal Trauma',
    details: 'Overcoming childhood rejection, harsh parental conditioning, and womb-stage maternal stress absorption.'
  },
  {
    title: 'Life Purpose & Spiritual Direction',
    details: 'Connecting with soul contracts, dissolving karmic vows of suffering, and stepping into authentic empowerment.'
  }
];

// === SERVICES DATA ===
export const SERVICES_DATA: Service[] = [
  {
    id: 'past-life-regression',
    title: 'Past Life Regression Therapy (PLR)',
    subtitle: 'Transpersonal Soul Memory & Karmic Root Cause Resolution',
    shortDesc: 'Journey into deep subconscious memory vaults to identify and heal soul impressions (Samskaras) causing present-life blockages.',
    fullDesc: 'Past Life Regression is a gentle, deeply relaxing clinical hypnosis method accredited by TASSO International. It enables clients to access soul memories that hold unexpressed grief, karmic contracts, vows of poverty or suffering, and root causes of unexplained phobias or physical ailments.',
    durationMinutes: 120,
    format: 'Both',
    category: 'Regression & Mind',
    image: '/src/assets/real/plr.jpg',
    whyItWorks: 'The subconscious mind stores multi-incarnational energetic imprints. When an uncompleted traumatic death, soul contract, or emotional shock from a prior lifetime remains unresolved, it manifests in the present body as irrational phobias, persistent relationship discord, or psychosomatic aches that do not respond to physical medicine.',
    protocolSteps: [
      { step: '01', title: 'Intake & Karmic Pattern Mapping', description: 'Detailed exploration of current life challenges, recurring patterns, irrational fears, and emotional triggers.' },
      { step: '02', title: 'Deep Somatic Relaxation & Trance Induction', description: 'Gentle guidance into the receptive alpha-theta state where critical mental chatter recedes and higher soul awareness awakens.' },
      { step: '03', title: 'Soul Exploration & Lifetime Re-experience', description: 'Revisiting the origin lifetime, understanding its emotional knots, and witnessing the transition point with detachment.' },
      { step: '04', title: 'Vow Revocation & Soul Integration', description: 'Consciously dissolving outdated vows of suffering, reclaiming fragmented soul vitality, and integrating higher lessons into present life.' }
    ],
    indications: [
      'Unexplained chronic pain or illnesses resisting medical diagnosis',
      'Intense irrational phobias (heights, water, fire, confinement, darkness)',
      'Complex karmic bonds and painful recurring relationship loops',
      'Persistent existential sadness, feeling of not belonging, or searching for soul purpose'
    ],
    benefits: [
      'Permanent release of deep-seated irrational fears',
      'Profound relief from psychosomatic aches with no biological cause',
      'Deep emotional forgiveness and reconciliation in family relationships',
      'Direct experiential realization of soul continuity beyond bodily death'
    ],
    clientPreparation: [
      'Eat light, vegetarian meals on the day of the session',
      'Avoid caffeine or stimulants at least 3 hours prior',
      'Bring a personal journal to write down immediate soul insights'
    ],
    recommendedSessions: '2 - 3 Sessions',
    investment: '₹4,500 / session',
    badge: 'Signature Modality'
  },
  {
    id: 'clinical-hypnotherapy',
    title: 'Clinical Hypnotherapy & Mind Mechanics',
    subtitle: 'Scientific Subconscious Reprogramming (EKAA / IMDHA Certified)',
    shortDesc: 'Bypass the conscious critical filter to release self-defeating habits, chronic stress, insomnia, and psychosomatic complaints.',
    fullDesc: 'Recognized by the International Medical & Dental Hypnotherapy Association (IMDHA, USA), our hypnotherapy protocols utilize deep alpha-theta brainwave states to access the emotional subconscious, untangle limiting beliefs, and anchor empowering neurological pathways.',
    durationMinutes: 90,
    format: 'Both',
    category: 'Regression & Mind',
    image: '/src/assets/real/hypnotherapy.jpg',
    whyItWorks: 'The conscious mind represents only 10% of our mental processing; the remaining 90% is governed by the subconscious. Hypnotherapy establishes direct communication with this powerful inner operating system, rewiring deep neural circuits that drive behavioral habits and autonomic responses.',
    protocolSteps: [
      { step: '01', title: 'Suggestibility Profiling & Goal Setting', description: 'Assessing your unique physical/emotional learning style and crystallizing therapeutic target outcomes.' },
      { step: '02', title: 'Permissive Trance Induction', description: 'Soothing guided induction that calms the sympathetic nervous system and facilitates natural brainwave slowing.' },
      { step: '03', title: 'Subconscious Scripting & Reframing', description: 'Presenting positive therapeutic metaphors and direct subconscious suggestions to dissolve old behavioral scripts.' },
      { step: '04', title: 'Anchoring & Post-Hypnotic Integration', description: 'Creating physical and mental trigger anchors that you can activate anytime in everyday life to access calm confidence.' }
    ],
    indications: [
      'Severe anxiety, panic episodes, and chronic insomnia',
      'Smoking cessation, weight management, and behavioral compulsions',
      'Low self-worth, public speaking dread, and imposter syndrome',
      'Psychosomatic digestive (IBS), skin conditions, and autoimmune flare-ups'
    ],
    benefits: [
      'Restoration of deep, restful and natural sleep cycles',
      'Elimination of compulsive habits without feeling deprivation',
      'Nervous system down-regulation and sustained inner peace',
      'Heightened focus, memory retention, and mental sovereignty'
    ],
    clientPreparation: [
      'Wear comfortable, unrestrictive clothing',
      'Keep a quiet environment if participating online via Zoom',
      'Prepare a clear list of the specific emotional habits you wish to transform'
    ],
    recommendedSessions: '3 - 5 Sessions',
    investment: '₹3,500 / session',
    badge: 'EKAA Accredited'
  },
  {
    id: 'family-constellation',
    title: 'Family Constellation & Systemic Lineage Healing',
    subtitle: 'Bert Hellinger Systemic Therapy for Ancestral Burdens & Orders of Love',
    shortDesc: 'Uncover unseen energetic loyalties to ancestors and restore the natural Order of Love across your multi-generational lineage.',
    fullDesc: 'Often, individual suffering is an unconscious attempt to carry the burden of an excluded, forgotten, or traumatized ancestor. Family Constellations bring systemic balance, releasing ancestral trauma, broken marriages, and financial ruins passed down through DNA and subtle fields.',
    durationMinutes: 100,
    format: 'Both',
    category: 'Regression & Mind',
    image: '/src/assets/real/family_constellation.jpg',
    whyItWorks: 'Every family operates as a morphic field governed by systemic laws known as the Orders of Love. When an ancestor was unjustly excluded, aborted without mourning, or suffered an untimely tragic death, younger descendants unconsciously reproduce that fate out of blind loyalty until balance is consciously restored.',
    protocolSteps: [
      { step: '01', title: 'Genogram & Lineage History Mapping', description: 'Tracing significant familial events across 3-4 generations including early deaths, bankruptcies, migrations, or systemic exclusions.' },
      { step: '02', title: 'Field Representation & Spatial Setup', description: 'Setting up representatives (or energetic markers) in the morphogenetic field to visualize unseen family dynamics.' },
      { step: '03', title: 'Healing Sentences & Ritual Reconciliation', description: 'Speaking sacred resolving systemic truths that give every family member their rightful place of dignity.' },
      { step: '04', title: 'Lineage Blessing Transfer', description: 'Returning inherited burdens back to ancestors with respect and opening to receive life force flowing from behind you.' }
    ],
    indications: [
      'Recurring generational patterns (early death, financial ruin, repeating divorces)',
      'Unexplainable alienation between parents, siblings, or children',
      'Feeling an invisible heavy weight or living someone else\'s destiny',
      'Infertility, adoption complexities, and profound inherited guilt'
    ],
    benefits: [
      'Profound lifting of heavy, unexplainable emotional depression',
      'Spontaneous thawing of long-standing family estrangements',
      'Freedom to succeed and love without guilt toward your ancestors',
      'Deep systemic peace throughout both maternal and paternal lineages'
    ],
    clientPreparation: [
      'Gather known dates and life events of parents, grandparents, and maternal/paternal uncles/aunts',
      'Come with an open, non-judgmental heart toward your lineage'
    ],
    recommendedSessions: '1 - 2 Sessions',
    investment: '₹4,000 / session',
    badge: 'Systemic Healing'
  },
  {
    id: 'inner-child-womb-healing',
    title: 'Inner Child Healing & Womb Regression / Hypnobirthing',
    subtitle: 'Dissolving Developmental Trauma, Pre-Natal Imprints & Maternal Bonding',
    shortDesc: 'Rescue and nurture neglected developmental stages, in-utero emotional distress, and birth conditioning using Marie Mongan methods.',
    fullDesc: 'Many adult defense mechanisms stem from subconscious emotional vows taken before age 7 or during gestation. This therapy re-parents the wounded inner child, safely discharges frozen survival energy, and rewires the emotional body for unconditional self-love, reproductive ease, and nervous system safety.',
    durationMinutes: 90,
    format: 'Both',
    category: 'Regression & Mind',
    image: '/src/assets/real/inner_child.jpg',
    whyItWorks: 'During embryonic gestation and early infancy, human consciousness absorbs the mother\'s hormonal and emotional climate unfiltered. Womb regression allows the soul to revisit this tender foundational period, clear absorbed cortisol/distress, and experience radiant womb re-parenting.',
    protocolSteps: [
      { step: '01', title: 'Timeline Age Regression', description: 'Following the emotional thread back to the specific developmental stage where safety or love was first compromised.' },
      { step: '02', title: 'Womb Stage & Pre-Natal Exploration', description: 'Accessing the in-utero energetic envelope to clear absorbed maternal grief, panic, or unreadiness.' },
      { step: '03', title: 'Inner Re-Parenting Ritual', description: 'Connecting the mature adult self with the vulnerable child/fetus, offering the safety, protection, and unconditional acceptance it lacked.' },
      { step: '04', title: 'Re-Birth & Cord Blessing', description: 'Experiencing an empowered, gentle energetic birth into light, establishing profound somatic grounding.' }
    ],
    indications: [
      'Chronic feelings of abandonment, hyper-vigilance, and emotional clinginess',
      'Deep maternal or paternal wounds and unhealed childhood rejection',
      'Severe people-pleasing, inability to say no, and persistent core shame',
      'Fear of pregnancy/childbirth, reproductive health tensions, or traumatic birth memories'
    ],
    benefits: [
      'Instant dissolution of harsh internal self-criticism',
      'Restoration of genuine playfulness, creativity, and self-compassion',
      'Healthy boundary-setting without terror of rejection',
      'Harmonious reproductive health and empowered hypnobirthing confidence'
    ],
    clientPreparation: [
      'Reflect on childhood memories and early family relationships',
      'Keep a soft blanket or cushion nearby for grounding during somatic release'
    ],
    recommendedSessions: '2 - 4 Sessions',
    investment: '₹3,800 / session'
  },
  {
    id: 'metaphysical-disease-healing',
    title: 'Metaphysical Disease Healing & Reversal',
    subtitle: 'Decoding Subconscious & Emotional Origin Roots of Chronic Illness',
    shortDesc: 'Uncover and resolve the metaphysical root causes behind Diabetes, B.P, Thyroid disorders, PCOD, and psychosomatic chronic conditions.',
    fullDesc: 'Every physical disease begins first as an emotional, mental, or ancestral imbalance in the biofield before it somaticizes into cellular pathology. At BODHI Wellness Centre, Mrs. Veena Tikare decodes the symbolic organ language of your condition, enabling your immune and endocrine systems to resume natural homeostasis without drug dependence.',
    durationMinutes: 90,
    format: 'Both',
    category: 'Regression & Mind',
    image: '/src/assets/real/collage.jpg',
    whyItWorks: 'Cells possess consciousness and directly respond to mental neurotransmitters and energetic blockages. When prolonged emotional suppression (e.g. chronic bitterness causing pancreas dysregulation, or unspoken truth causing thyroid nodules) is dissolved, the biology spontaneously initiates restorative cellular repair.',
    protocolSteps: [
      { step: '01', title: 'Metaphysical Symptom & Organ Mapping', description: 'Translating the physical diagnosis into its corresponding emotional, mental, and chakra root meaning.' },
      { step: '02', title: 'Cellular Dialogue & Subconscious Inquiry', description: 'Connecting directly with the affected organ or symptom to listen to what emotional truth it has been holding.' },
      { step: '03', title: 'Emotional Detox & Forgiveness Release', description: 'Releasing suppressed resentment, ancestral disease programs, and subconscious benefits of being sick.' },
      { step: '04', title: 'Cellular Vitality & DNA Awakening', description: 'Guiding healing golden bio-photonic light into the cellular matrix to reprogram the organs for vibrant health.' }
    ],
    indications: [
      'Type 2 Diabetes, hypertension, and endocrine imbalances',
      'Hypothyroidism / Hyperthyroidism and hormonal irregularities',
      'PCOD, endometriosis, and reproductive system inflammation',
      'Autoimmune conditions, chronic migraines, and fibromyalgia'
    ],
    benefits: [
      'Gradual normalization of blood markers and vital parameters',
      'Deep emotional peace and freedom from illness-identity',
      'Significantly reduced dependence on daily chemical medication',
      'Profound vitality, cellular energy rejuvenation, and mental lightness'
    ],
    clientPreparation: [
      'Have recent diagnostic medical reports / blood work handy',
      'List the exact timeline when physical symptoms first made their appearance'
    ],
    recommendedSessions: '3 - 6 Sessions',
    investment: '₹4,000 / session',
    badge: 'Specialty Retreat Focus'
  },
  {
    id: 'redikall-healing',
    title: 'Redikall Multi-Dimensional Healing & Soul Alignment',
    subtitle: 'Chakra-Consciousness Diagnostics & Thought-Form Clearing',
    shortDesc: 'Multi-dimensional vibrational healing to untangle mental thought-forms, chakra misalignments, and energetic fatigue.',
    fullDesc: 'Redikall healing works with specific vibrational statements, chakra consciousness diagnostics, and subtle frequency keys to rapidly recalibrate distorted thoughts, stagnant emotional reservoirs, and spiritual fatigue, returning the bio-energetic body to crystal equilibrium.',
    durationMinutes: 75,
    format: 'Both',
    category: 'Energy & Aura',
    image: '/src/assets/real/sanctuary_dharwad.jpg',
    whyItWorks: 'Human consciousness exists across multiple dimensional octaves. Redikall healing utilizes precise linguistic frequency keys combined with meridian focus points to dissolve rigid crystalline thought-forms lodged in the etheric body.',
    protocolSteps: [
      { step: '01', title: 'Multi-Dimensional Chakra Diagnostic', description: 'Scanning the minor and major chakra energy points to locate exact pockets of stagnant resonance.' },
      { step: '02', title: 'Core Soul Statement Identification', description: 'Uncovering the subconscious belief statement that created the energetic distortion.' },
      { step: '03', title: 'Recalibration & Energetic Transmutation', description: 'Chanting and transmitting precise Redikall affirmative frequency keys to dissolve the block.' },
      { step: '04', title: 'Aura Sealing & Vitality Expansion', description: 'Harmonizing the auric sheath to ensure long-term energetic integrity and psychic protection.' }
    ],
    indications: [
      'Repetitive mental thought loops, brain fog, and chronic indecision',
      'Feeling energetically drained after interacting with certain individuals',
      'Chakra blockages resisting standard meditation or energy practices',
      'Cutting toxic cords from past romantic or business partnerships'
    ],
    benefits: [
      'Rapid clearing of heavy mental fog within a single session',
      'Restoration of vibrant aura boundaries and protection against negative energies',
      'Heightened intuition and crystalline mental decisiveness',
      'Harmonization of the 7 subtle bodies and energy meridians'
    ],
    clientPreparation: [
      'Drink plenty of pure water before the session',
      'Sit comfortably in a quiet, undisturbed space'
    ],
    recommendedSessions: '2 - 3 Sessions',
    investment: '₹3,000 / session'
  },
  {
    id: 'chakra-healing-aura',
    title: 'Chakra Healing & Electro-Aura Balancing',
    subtitle: 'Aligning the 7 Primary Energy Wheels & Biofield Meridian Centers',
    shortDesc: 'Comprehensive bio-energy cleansing and realignment of Root, Sacral, Solar Plexus, Heart, Throat, Third Eye, and Crown chakras.',
    fullDesc: 'The chakras are the primary vortexes that regulate physical vitality, emotional stability, and spiritual receptivity. This session clears auric debris, cleanses congested meridians, and re-attunes each chakra wheel to its pure harmonic frequency.',
    durationMinutes: 75,
    format: 'Both',
    category: 'Energy & Aura',
    image: '/src/assets/real/kirlian_after.png',
    whyItWorks: 'Physical exhaustion and emotional distress produce dense energetic residue in the nadis (subtle energy channels). By applying resonant harmonic vibration and bio-electrographic balancing, the flow of prana is restored through all 7 centers.',
    protocolSteps: [
      { step: '01', title: 'Aura & Chakra Energy Scan', description: 'Identifying overactive, depleted, or congested chakras using intuitive and electro-photonic tools.' },
      { step: '02', title: 'Auric Cleansing & Cord Cutting', description: 'Sweeping away psychic debris, external negative projections, and unhealthy energetic cords.' },
      { step: '03', title: 'Individual Chakra Re-Attunement', description: 'Infusing each vortex with its corresponding Vedic seed sound (Bija mantra) and chromatic light frequency.' },
      { step: '04', title: 'Sushumna Energy Channel Alignment', description: 'Grounding the upward and downward flows of life force through the central spinal pranic tube.' }
    ],
    indications: [
      'Chronic physical lethargy and feeling drained of life motivation',
      'Inability to speak personal truth (blocked throat chakra)',
      'Creative blockages, sexual disharmony, or suppressed passion',
      'Heartbreak, inability to trust, or emotional numbness'
    ],
    benefits: [
      'Immediate sensation of physical lightness and tingling vital warmth',
      'Emotional unburdening and opening of the heart space',
      'Balanced appetite, stabilized mood, and deeper breath capacity',
      'Enhanced psychic intuition and alignment with higher self'
    ],
    clientPreparation: [
      'Avoid wearing dark synthetic clothing if possible (natural fibers preferred)',
      'Remove metallic jewelry during the session'
    ],
    recommendedSessions: '2 - 3 Sessions',
    investment: '₹3,000 / session'
  },
  {
    id: 'reiki-rajakriya',
    title: 'Reiki & Rajakriya Reiki Energy Healing',
    subtitle: 'Traditional Usui & High-Frequency Rajakriya Grand Master Transmissions',
    shortDesc: 'Universal life-force energy channeling for deep somatic relaxation, pain relief, and profound emotional balancing.',
    fullDesc: 'Administered by Mrs. Veena Tikare at the Grand Master level, this session channels the highest octaves of Universal Life Energy (Prana/Ki). Rajakriya Reiki works on deeper karmic and genetic levels than standard Usui Reiki, accelerating cellular healing and spiritual attunement.',
    durationMinutes: 60,
    format: 'Both',
    category: 'Energy & Aura',
    image: '/src/assets/real/sanctuary_dharwad.jpg',
    whyItWorks: 'Reiki operates through the quantum field of universal life energy. When channeled by an attuned Grand Master, it naturally flows to wherever the client\'s body has the greatest deficiency, initiating cellular rejuvenation without force.',
    protocolSteps: [
      { step: '01', title: 'Biofield Scanning (Byosen Reikan-ho)', description: 'Sensing thermal and vibrational fluctuations across the body to locate target areas.' },
      { step: '02', title: 'Grand Master Sacred Symbol Activation', description: 'Invoking sacred Usui and Rajakriya geometric symbols to anchor high-frequency light.' },
      { step: '03', title: 'Hand Placements & Meridian Transmission', description: 'Systematic channeling of healing warmth into key organ, endocrine, and lymph centers.' },
      { step: '04', title: 'Kavacha Auric Sealing', description: 'Sealing the auric cocoon to preserve the elevated vibrational frequency.' }
    ],
    indications: [
      'Post-operative recovery and physical healing acceleration',
      'Acute stress, nervous breakdown, and sensory overwhelm',
      'Chronic headaches, joint pain, and inflammatory conditions',
      'Spiritual exhaustion and need for deep, safe restorative rest'
    ],
    benefits: [
      'Instant profound relaxation and parasympathetic nervous activation',
      'Natural acceleration of physical tissue and wound recovery',
      'Gentle release of suppressed crying or stored grief without mental strain',
      'Feeling enveloped in unconditional, loving golden light'
    ],
    clientPreparation: [
      'Plan a restful evening following the session',
      'Hydrate well to support energetic detoxification'
    ],
    recommendedSessions: '3 Sessions Package Recommended',
    investment: '₹2,500 / session'
  },
  {
    id: 'angel-therapy',
    title: 'Angel Therapy & Divine Spiritual Alignment',
    subtitle: 'Angelic Guidance, Divine Protection & Sacred Cord Severing',
    shortDesc: 'Connect with Archangelic realms for comforting divine guidance, karmic grace, and clearing heavy negative vibrations.',
    fullDesc: 'Angel Therapy is a gentle, comforting spiritual modality that invokes Archangels (such as Michael, Raphael, Chamuel, and Gabriel) to dissolve fears, cut toxic attachments, clear psychic debris, and deliver uplifting divine guidance on your life path.',
    durationMinutes: 60,
    format: 'Both',
    category: 'Energy & Aura',
    image: '/src/assets/real/collage.jpg',
    whyItWorks: 'Angelic frequencies represent divine consciousness in its purest benevolent state. Connecting with these archetypal frequencies raises the human vibration immediately, allowing feelings of isolation, fear, and hopelessness to be replaced by serene trust.',
    protocolSteps: [
      { step: '01', title: 'Sacred Space Blessing & Invocations', description: 'Creating a protected, high-frequency sanctuary space of divine light.' },
      { step: '02', title: 'Archangel Michael Cord Cutting', description: 'Releasing toxic energetic attachments to past partners, workplaces, or situations.' },
      { step: '03', title: 'Archangel Raphael Emerald Healing Light', description: 'Infusing emotional wounds and physical challenges with restorative emerald luminescence.' },
      { step: '04', title: 'Angelic Oracle Guidance & Messages', description: 'Receiving intuitive messages, signs, and counsel tailored to your life situation.' }
    ],
    indications: [
      'Overwhelming grief, heartbreak, or feeling completely abandoned',
      'Persistent fear of the future, lack of trust in life, or nightmares',
      'Feeling drained by toxic family members or co-workers',
      'Seeking connection with higher spiritual guides and guardian angels'
    ],
    benefits: [
      'An unmistakable feeling of being held, safe, and deeply loved',
      'Dissolution of fear-based anxiety and dread',
      'Freedom from obsessive attachments and energetic leeches',
      'Clarity on your divine life path and upcoming decisions'
    ],
    clientPreparation: [
      'Come with specific questions or areas where you need divine comfort',
      'Keep an open, receptive mindset'
    ],
    recommendedSessions: 'As needed',
    investment: '₹2,800 / session'
  },
  {
    id: 'tarot-reading',
    title: 'Tarot & Intuitive Spiritual Counseling',
    subtitle: 'Archetypal Divination for Life Clarity & Karmic Crossroads',
    shortDesc: 'Sacred archetypal card guidance offering deep insights on soul purpose, karmic crossroads, and emotional challenges.',
    fullDesc: 'Far from superstition, authentic tarot is an archetypal mirror of the subconscious. Mrs. Veena Tikare interprets the cards through transpersonal psychotherapy lenses, illuminating unseen dynamics in career, family, and spiritual awakening.',
    durationMinutes: 60,
    format: 'Both',
    category: 'Divination & Intuitive',
    image: '/src/assets/real/veena_tikare.jpg',
    whyItWorks: 'Tarot cards reflect universal human archetypes (the Hero, the Hermit, the Tower, the Star). By synchronistically drawing cards under intuitive guidance, the hidden unconscious factors influencing your life choices become immediately visible.',
    protocolSteps: [
      { step: '01', title: 'Question Framing & Intuitive Attunement', description: 'Clarifying the deeper core questions behind your surface life dilemmas.' },
      { step: '02', title: 'Sacred Spread Layout & Archetypal Mapping', description: 'Deploying Celtic Cross or Karmic Path spreads to reveal past causes, present blocks, and upcoming probabilities.' },
      { step: '03', title: 'Psychotherapeutic & Spiritual Interpretation', description: 'Interpreting the dynamics of key relationships, financial choices, and spiritual lessons.' },
      { step: '04', title: 'Remedies & Empowered Action Plan', description: 'Providing practical energetic remedies, affirmations, and actionable steps to navigate the crossroads.' }
    ],
    indications: [
      'Major career dilemmas, business transitions, or job crossroads',
      'Clarity on romantic partnerships, marriage compatibility, and soul contracts',
      'Understanding why certain karmic cycles repeat in your life',
      'Spiritual guidance during times of profound transition or confusion'
    ],
    benefits: [
      'Unbiased clarity on hidden motives and underlying interpersonal dynamics',
      'Reassurance and strategic foresight on optimal timing for decisions',
      'Validation of your own quiet gut intuition',
      'A constructive roadmap to turn crises into spiritual growth'
    ],
    clientPreparation: [
      'Write down 3-5 specific questions you wish to explore',
      'Ensure a quiet, confidential space for your reading'
    ],
    recommendedSessions: 'As needed',
    investment: '₹2,500 / reading'
  },
  {
    id: 'kirlian-photography',
    title: 'Kirlian Photography & Electro-Photonic Biofield Diagnostics',
    subtitle: 'Clinical High-Voltage Bio-Electrography & Coronal Aura Analysis',
    shortDesc: 'Capture and decode your electromagnetic aura, organ meridian energy links, and pre-somatic chakra imbalances.',
    fullDesc: 'Using advanced electro-photonic gas discharge imaging apparatus, Kirlian Photography captures the luminous coronal discharge emitted by your fingertips. Mrs. Veena Tikare analyzes these coronal maps to diagnose energy leaks, organ stress, and emotional imbalances up to 6 months before they manifest physically.',
    durationMinutes: 60,
    format: 'In-Person (Dharwad)',
    category: 'Energy & Aura',
    image: '/src/assets/real/kirlian_before.png',
    whyItWorks: 'Every living cell emits photons and electromagnetic radiation. High-frequency electrical stimulation triggers a luminous gas discharge around the fingertips, which directly correlates with the 12 primary acupuncture meridians and autonomic nervous system tone.',
    protocolSteps: [
      { step: '01', title: 'Fingertip Electro-Photonic Scan', description: 'Photographing coronal discharges of all 10 fingertips using clinical Kirlian hardware.' },
      { step: '02', title: 'Coronal Sector & Sectoral Mapping', description: 'Analyzing gaps, bursts, and density of corona across the 12 meridian organ zones.' },
      { step: '03', title: 'Chakra Energy Distribution Graphing', description: 'Generating comprehensive energetic reports showing physical vs emotional exhaustion.' },
      { step: '04', title: 'Prescriptive Energy Protocol', description: 'Recommending tailored hypnotherapy, PLR, or meditation practices to close biofield leaks.' }
    ],
    indications: [
      'Desire to see objective scientific proof of your subtle energetic field',
      'Chronic unexplained fatigue when blood tests show normal results',
      'Tracking energetic improvements before and after healing retreats',
      'Pre-somatic screening for preventative wellness'
    ],
    benefits: [
      'Visual, objective photographic documentation of your aura and chakras',
      'Early detection of energetic congestion months before physical onset',
      'Pinpoint precision on which specific organ meridians require healing',
      'Side-by-side Before/After retreat comparison scans'
    ],
    clientPreparation: [
      'Clean hands thoroughly with water; avoid applying heavy oils or lotions',
      'Remove rings and metallic jewelry from hands prior to imaging'
    ],
    recommendedSessions: 'Pre & Post Healing Scan',
    investment: '₹2,800 / complete scan & report',
    badge: 'Hardware Bio-Scan'
  },
  {
    id: 'breathwork-meditation',
    title: 'Breathwork, Pranayama & Mindfulness Meditation',
    subtitle: 'Somatic Breath Journeys & Nervous System Resets',
    shortDesc: 'Transformative conscious connected breathing and Vedic pranayama to release stored physical trauma and awaken inner bliss.',
    fullDesc: 'Breath is the bridge connecting the conscious mind to the autonomic nervous system and spiritual soul. Through structured rhythmic breathing sequences, clients oxygenate tissues, release trapped emotional tension from cellular fascia, and enter states of expansive transcendental awareness.',
    durationMinutes: 75,
    format: 'Both',
    category: 'Breath & Meditation',
    image: '/src/assets/real/sanctuary_dharwad.jpg',
    whyItWorks: 'Conscious connected breathing alters blood chemistry, quieting the Default Mode Network (DMN) in the brain. This allows trapped somatic defense patterns and emotional grief to gently release from the diaphragm and nervous system.',
    protocolSteps: [
      { step: '01', title: 'Breath Assessment & Diaphragmatic Awakening', description: 'Evaluating current respiratory patterns and freeing restricted chest/belly breathing.' },
      { step: '02', title: 'Vedic Pranayama Balancing', description: 'Nadi Shodhana and Kapalabhati practices to harmonize sympathetic and parasympathetic tones.' },
      { step: '03', title: 'Conscious Connected Breathwork Journey', description: 'Sustained circular breathing accompanied by therapeutic sacred soundscapes to discharge tension.' },
      { step: '04', title: 'Stillness, Shavasana & Grounded Integration', description: 'Profound silent meditation anchoring deep tranquility into every cell.' }
    ],
    indications: [
      'Shallow breathing, chronic chest tightness, and panic tendencies',
      'Inability to quiet racing thoughts during traditional silent meditation',
      'Stored somatic grief held in the chest, shoulders, or throat',
      'Desire for natural emotional catharsis without extensive verbal talking'
    ],
    benefits: [
      'Immediate expansion of lung capacity and oxygenation of the brain',
      'Rapid clearing of trapped emotional charges and chest heaviness',
      'Profound, blissful stillness and meditative absorption',
      'Practical breathwork tools you can use anytime to abort stress spikes'
    ],
    clientPreparation: [
      'Do not eat heavy food for 2 hours before the session',
      'Wear loose, comfortable clothing around the abdomen'
    ],
    recommendedSessions: '2 - 4 Sessions',
    investment: '₹2,500 / session'
  }
];

// === GENUINE CUSTOMER TESTIMONIALS (NO FAKE GOOGLE WIDGETS) ===
export const GENUINE_CLIENT_TESTIMONIALS: Testimonial[] = [
  {
    id: 'tc-1',
    clientName: 'Apeksha Patalay',
    location: 'Dharwad, Karnataka',
    serviceName: 'Clinical Hypnotherapy',
    rating: 5,
    title: 'Dramatic Relief from Liver Concerns & Chronic Sleep Issues',
    quote: 'I cannot thank Mrs. Veena enough for the incredible support and healing I’ve experienced through hypnotherapy. I initially reached out for help with my liver-related health concerns and ongoing sleep issues, both of which had been troubling me for quite some time. From the very first session she made me feel completely at ease with her calm, compassionate approach. Over time, not only did my sleep improve dramatically—I now wake up refreshed and energized—but I also noticed a significant positive impact on my liver health. She really took the time to understand my situation and guided me with techniques that worked specifically for me. It has truly changed my life for the better.',
    outcomeCategory: 'Psychosomatic Healing',
    date: 'Verified Client'
  },
  {
    id: 'tc-2',
    clientName: 'Prashanth TK',
    location: 'Bengaluru, Karnataka',
    serviceName: 'Subconscious Mind Therapy & Training',
    rating: 5,
    title: '5+ Years of Transformational Guidance & Subconscious Calm',
    quote: 'I have been in touch with Smt. Veena Tikare ji for over 5 years, seeking her guidance and therapies in many critical situations. I have seen great shifts in my life. Only after the very first session with her, I experienced a state of complete calm; it was my first experience of how deep the subconscious mind works. Since then, my chronic aggression has completely dissolved. I was so inspired that I completed the full training course in Hypnotherapy with her. Her therapies are profoundly powerful, and anyone seeking a happier, healthier life should experience this sanctuary.',
    outcomeCategory: 'Spiritual Awakening',
    date: 'Long-term Client & Student'
  },
  {
    id: 'tc-3',
    clientName: 'Vijay Ajgaonkar',
    location: 'Belgaum, Karnataka',
    serviceName: 'Family Constellation',
    rating: 5,
    title: 'A Miraculous Shift Following Severe Accident & Trauma',
    quote: 'A family constellation was conducted by Mrs. Veena for one of my close relatives who was severely injured in a bike accident with a traumatic brain injury and was on a ventilator. We requested Veena Mam to do a systemic constellation for the family. Deep unresolved ancestral issues were unfolded and addressed during the session. As the constellation reached conclusion, the patient came out of critical danger and regained consciousness, which felt like a true miracle to all of us. Big thanks to Veena Mam and gratitude to the universe for letting me witness life through this healing lens.',
    outcomeCategory: 'Karmic & Relationship',
    date: 'Verified Client'
  },
  {
    id: 'tc-4',
    clientName: 'Vani Patalay',
    location: 'Hubli, Karnataka',
    serviceName: 'Hypnotherapy & Stress Relief',
    rating: 5,
    title: 'Remarkable Improvement in Skin Flare-ups and Deep Inner Peace',
    quote: 'I worked with Veena Tikare for a severe stress-related skin condition that resisted conventional ointments. The results have been remarkable. Her warm, calming approach and effective hypnotherapy techniques helped me reduce emotional stress, feel positive about my body, and see visible, lasting improvement in my skin. Highly recommended!',
    outcomeCategory: 'Psychosomatic Healing',
    date: 'Verified Client'
  },
  {
    id: 'tc-5',
    clientName: 'Rashmi Prabhu',
    location: 'Goa',
    serviceName: 'Past Life Regression Therapy',
    rating: 5,
    title: 'An Eye-Opening Awakening to Life Purpose & Inner Strength',
    quote: 'Past Life Regression with Mrs. Veena Tikare was an eye-opening journey into who I truly am. She creates an atmosphere of pure sanctity where you feel completely safe to let your guard down. Releasing old karmic contracts allowed me to finally step into my authentic power without fear.',
    outcomeCategory: 'Spiritual Awakening',
    date: 'Verified Client'
  },
  {
    id: 'tc-6',
    clientName: 'Vaishali Choudhry',
    location: 'Pune, Maharashtra',
    serviceName: 'Inner Child Healing',
    rating: 5,
    title: 'Liberation from Childhood Insecurity and Emotional Exhaustion',
    quote: 'Veena ma\'am is an exceptional healer. She creates a safe, comforting space that immediately put me at ease. Her hypnotherapy and inner child sessions helped me uncover the root cause of my persistent anxiety and self-doubt. The positive shifts I’ve experienced in my confidence and peace of mind are truly remarkable.',
    outcomeCategory: 'Chronic Stress & Anxiety',
    date: 'Verified Client'
  },
  {
    id: 'tc-7',
    clientName: 'Monica Bagrecha',
    location: 'Mumbai, Maharashtra',
    serviceName: 'Therapy & Hypnotherapy Training',
    rating: 5,
    title: 'Outstanding Therapist and Exceptional Teacher',
    quote: 'My experience with Mrs. Veena Tikare was outstanding. She is deeply focused, attentive, and possesses rare clarity in understanding the exact root issue a client is going through. She is not just a gifted healer but also a compassionate trainer who holds your hand throughout the journey.',
    outcomeCategory: 'Spiritual Awakening',
    date: 'Training Graduate'
  },
  {
    id: 'tc-8',
    clientName: 'Rohit Dolli',
    location: 'Dharwad, Karnataka',
    serviceName: 'Clinical Hypnotherapy',
    rating: 5,
    title: 'Overcoming Panic Triggers & Restoring Natural Sleep',
    quote: 'I used to struggle with sudden panic triggers and troubled sleep. Mrs. Veena’s guidance taught my nervous system how to relax deeply. Today I sleep peacefully and handle stressful professional situations with natural composure.',
    outcomeCategory: 'Chronic Stress & Anxiety',
    date: 'Verified Client'
  }
];

export const TRAINING_LEVELS = [
  {
    level: 'Level 1: Basic Hypnosis & Mind Mechanics',
    duration: '2 Days Intensive',
    credential: 'EKAA Certified Basic Hypnotherapist',
    topics: [
      'Conscious, Subconscious, and Critical Filtration Filters',
      'Physical vs Emotional Suggestibility testing & profiling',
      'Authoritarian & Permissive trance induction techniques',
      'Self-hypnosis programming for stress reduction & confidence'
    ]
  },
  {
    level: 'Level 2: Integrated Hypnotic Modalities',
    duration: '3 Days Intensive',
    credential: 'EKAA Certified Hypnotic Modality Practitioner',
    topics: [
      'Hypnodrama, Ericksonian metaphors & Somatosensory deepening',
      'Behavioral modification for smoking cessation & weight balance',
      'Pain management & dental/surgical hypnosis fundamentals',
      'Subconscious anchor installation and trigger dissolution'
    ]
  },
  {
    level: 'Level 3: Advanced Regression Therapeutics',
    duration: '3 Days Intensive',
    credential: 'Certified Advanced Regression Therapist',
    topics: [
      'Age regression to childhood origins and emotional catharsis',
      'Inner child rescue, nurturing, and emotional re-parenting',
      'Womb regression and pre-natal shock clearing protocols',
      'Fear, anxiety, and specific phobia desensitization'
    ]
  },
  {
    level: 'Level 4 & 5: Transpersonal Hypnotherapy & Mastery',
    duration: '4 Days Intensive',
    credential: 'Master Clinical Hypnotherapist (IMDHA USA Accredited)',
    topics: [
      'Past Life Regression methodology (soul memory extraction)',
      'Life between lives, soul purpose, and karmic contract resolution',
      'Clearing foreign energetic attachments and spirit release therapy',
      'Setting up ethical clinical practice and client case documentation'
    ]
  }
];

export const GOOGLE_REVIEWS_URL = 'https://share.google/UKBoboeiky3L1XRd9';
export const REAL_GOOGLE_TESTIMONIALS = GENUINE_CLIENT_TESTIMONIALS;

export const WEBSITE_ANALYSIS = {
  originalUrl: 'https://myreincarnation.in/',
  googleReviewShareUrl: GOOGLE_REVIEWS_URL,
  auditDate: 'November 2026 Analysis',
  googleRating: 4.8,
  totalGoogleReviews: 9,
  findings: [
    {
      category: 'Real Images vs AI Placeholders',
      critique: 'Generic AI-generated pictures fail to convey the true warmth of the physical Dharwad centre and the authentic presence of Mrs. Veena Tikare.',
      solution: 'Replaced with 100% authentic real Indian photographs: Mrs. Veena Tikare, the clinical therapy sanctuary, authentic session work, and the real BODHI logo.'
    },
    {
      category: 'Genuine Patient Testimonials',
      critique: 'Feedback should highlight real patient outcomes rather than third-party review widgets.',
      solution: 'Featured genuine customer recovery stories across chronic pain, liver concerns, anxiety, and family systemic healing.'
    },
    {
      category: 'Luminous Light Spiritual Aesthetic',
      critique: 'Dark themes can feel heavy for anxious seekers seeking peace and comfort.',
      solution: 'Crafted a radiant light theme with warm cream, amber gold, and rich royal purple matching myreincarnation.in.'
    }
  ]
};

