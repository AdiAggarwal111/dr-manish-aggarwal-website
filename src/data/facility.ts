export type FacilityFeature = {
  title: string;
  category: string;
  description: string;
};

export type FacilityStat = {
  value: string;
  label: string;
  subtext: string;
};

export const facilityFeatures = [
  "1,200-Bed Quaternary Care",
  "NABH & JCI Accredited",
  "Advanced Cath Labs",
  "Dedicated Cardiac ICUs",
  "3D Mapping · IVUS · OCT",
  "Private Luxury Suites",
] as const;

export const facilityStats: FacilityStat[] = [
  {
    value: "1,200",
    label: "Quaternary Inpatient Beds",
    subtext: "One of North India's largest flagship medical campuses",
  },
  {
    value: "< 90 Min",
    label: "Door-to-Balloon Window",
    subtext: "Audited 24/7 STEMI emergency angioplasty protocol",
  },
  {
    value: "10 Micron",
    label: "OCT Optical Resolution",
    subtext: "Near-infrared intravascular stent optimization",
  },
  {
    value: "100%",
    label: "Laminar Airflow Cath Labs",
    subtext: "Positive-pressure ultra-sterile operating environment",
  },
];

export const facilityCapabilities: FacilityFeature[] = [
  {
    title: "1,200-Bed Quaternary Care",
    category: "Institutional Scale",
    description:
      "A flagship greenfield medical campus in Indirapuram, Ghaziabad, inaugurated by the President of India, Smt. Droupadi Murmu, delivering comprehensive multi-specialty clinical infrastructure under one roof.",
  },
  {
    title: "NABH & JCI Accredited",
    category: "Global Standards",
    description:
      "Adhering to the most rigorous international clinical governance, patient safety protocols, medical equipment calibration, and infection control standards.",
  },
  {
    title: "Advanced Cath Labs",
    category: "Interventional Robotics",
    description:
      "State-of-the-art hybrid catheterization suites with ceiling-suspended robotic C-arms, low-dose digital flat-panel detectors, and real-time hemodynamic integration.",
  },
  {
    title: "Dedicated Cardiac ICUs",
    category: "Critical Care",
    description:
      "Round-the-clock intensivist-manned Coronary Care Units (CCU) equipped with intra-aortic balloon pumps (IABP), ECMO circulatory support, and continuous multi-parameter telemetry.",
  },
  {
    title: "3D Mapping · IVUS · OCT",
    category: "Intravascular Imaging",
    description:
      "High-definition intravascular ultrasound and 10-micron near-infrared optical coherence tomography providing microscopic cross-sectional artery visualization for lifelong stent patency.",
  },
  {
    title: "Private Luxury Suites",
    category: "Patient Experience",
    description:
      "Bespoke single-patient recovery suites designed for discretion, calm, personalized dietary care, and unhurried family counseling before and after procedures.",
  },
];
