import { siteConfig } from "./site-config";

export const physicianSchema = {
  "@context": "https://schema.org",
  "@type": "Physician",
  "@id": `${siteConfig.siteUrl}/#physician`,
  name: "Dr. Manish Aggarwal",
  legalName: "Dr. Manish Aggarwal",
  alternateName: [
    "Dr. Manish Aggarwal",
    "डॉ. मनीष अग्रवाल",
    "Dr Manish Aggarwal Cardiologist",
    "Dr Manish Aggarwal Yashoda Medicity",
    "Dr. Manish Aggarwal, Director Cardiology",
  ],
  url: siteConfig.siteUrl,
  image: `${siteConfig.siteUrl}/images/doctor-portrait.png`,
  telephone: "+91-9871183181",
  email: "appointments@drmanishaggarwal.com",
  jobTitle: "Director & Department Head of Interventional Cardiology & Structural Heart Specialist",
  medicalSpecialty: "https://schema.org/Cardiovascular",
  priceRange: "$$$",
  paymentAccepted: [
    "Cash",
    "Credit Card",
    "Debit Card",
    "Cashless Health Insurance",
    "TPA",
    "CGHS",
    "ECHS",
  ],
  currenciesAccepted: "INR",
  description:
    "Dr. Manish Aggarwal is the Director & Department Head of Interventional Cardiology & Structural Heart Specialist at Yashoda Medicity, Indirapuram, Ghaziabad, Delhi NCR. With over 28 years of clinical experience and 12,500+ successful cardiac procedures, he specializes in TAVR/TAVI, Complex Angioplasty (CHIP/CTO), Rotablation, and 24/7 Emergency Primary PCI.",
  hasMap: siteConfig.googleMapsUrl,
  sameAs: [
    siteConfig.googleMapsUrl,
    siteConfig.googleProfileUrl,
    siteConfig.hospitalUrl,
    siteConfig.siteUrl,
  ],
  worksFor: {
    "@type": "Hospital",
    "@id": "https://www.yashodahospital.org/doctor/dr-manish-aggarwal",
    name: "Yashoda Medicity",
    url: "https://www.yashodahospital.org/doctor/dr-manish-aggarwal",
    hasMap: siteConfig.googleMapsUrl,
    telephone: "+91-9871183181",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Yashoda Medicity, Indirapuram",
      addressLocality: "Indirapuram, Ghaziabad",
      addressRegion: "Delhi NCR, Uttar Pradesh",
      postalCode: "201014",
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 28.6464,
      longitude: 77.3775,
    },
  },
  affiliation: {
    "@type": "Hospital",
    name: "Yashoda Medicity",
    url: "https://www.yashodahospital.org/doctor/dr-manish-aggarwal",
    hasMap: siteConfig.googleMapsUrl,
    address: {
      "@type": "PostalAddress",
      streetAddress: "Yashoda Medicity, Indirapuram",
      addressLocality: "Indirapuram, Ghaziabad",
      addressRegion: "Delhi NCR, Uttar Pradesh",
      postalCode: "201014",
      addressCountry: "IN",
    },
  },
  address: {
    "@type": "PostalAddress",
    streetAddress: "Yashoda Medicity, Indirapuram",
    addressLocality: "Indirapuram, Ghaziabad",
    addressRegion: "Delhi NCR, Uttar Pradesh",
    postalCode: "201014",
    addressCountry: "IN",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 28.6464,
    longitude: 77.3775,
  },
  identifier: [
    {
      "@type": "PropertyValue",
      propertyID: "Delhi Medical Council Registration",
      name: "Delhi Medical Council",
      value: "26547",
      description: "Delhi Medical Council Registration No. 26547 (issued 2005)",
    },
  ],
  hasCredential: [
    {
      "@type": "EducationalOccupationalCredential",
      credentialCategory: "Medical License",
      name: "Delhi Medical Council Registration No. 26547 (issued 2005)",
      recognizedBy: {
        "@type": "Organization",
        name: "Delhi Medical Council",
      },
    },
    {
      "@type": "EducationalOccupationalCredential",
      credentialCategory: "Medical Degree",
      name: "MBBS, MD (General Medicine), DNB (Cardiology), FESC",
    },
  ],
  alumniOf: [
    {
      "@type": "EducationalOrganization",
      name: "University of Rajasthan",
      description: "MBBS & MD (General Medicine)",
    },
    {
      "@type": "EducationalOrganization",
      name: "National Board of Examinations",
      description: "DNB (Cardiology)",
    },
    {
      "@type": "EducationalOrganization",
      name: "Gottsegen György Hungarian Institute of Cardiology, Budapest",
      description: "Fellowship in Structural Heart Interventions (2018)",
    },
  ],
  memberOf: [
    {
      "@type": "Organization",
      name: "Cardiological Society of India (CSI)",
    },
    {
      "@type": "Organization",
      name: "European Society of Cardiology (ESC)",
      description: "FESC - Fellow of the European Society of Cardiology",
    },
    {
      "@type": "Organization",
      name: "Delhi Medical Council",
      description: "Registration No. 26547 (issued 2005)",
    },
  ],
  knowsAbout: [
    "Interventional Cardiology",
    "Structural Heart Disease",
    "TAVI / TAVR (Transcatheter Aortic Valve Replacement)",
    "Complex High-Risk Angioplasty (CHIP) & CTO",
    "Rotablation & Shockwave Intravascular Lithotripsy (IVL)",
    "Emergency Primary Angioplasty (Door-to-Balloon < 90 min)",
    "Permanent Pacemakers, ICD & CRT-D",
    "Intravascular Ultrasound (IVUS) & OCT Imaging",
    "हृदय रोग विशेषज्ञ (Cardiologist)",
    "एंजियोप्लास्टी (Angioplasty)",
    "स्टेंट प्रत्यारोपण (Stent Placement)",
    "हार्ट स्पेशलिस्ट (Heart Specialist)",
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    itemReviewed: {
      "@type": "Physician",
      name: "Dr. Manish Aggarwal",
      url: siteConfig.siteUrl,
    },
    ratingValue: "4.9",
    reviewCount: 370,
    bestRating: "5",
    worstRating: "1",
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "10:00",
      closes: "18:00",
      description: "Outpatient Clinic & Scheduled Consultations",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      opens: "00:00",
      closes: "23:59",
      description: "24/7 Emergency Door-to-Balloon Primary Angioplasty & CCU",
    },
  ],
};

// Export helper for backward compatibility
export function getPhysicianMedicalBusinessSchema() {
  return physicianSchema;
}
