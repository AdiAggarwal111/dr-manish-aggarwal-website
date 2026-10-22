export interface PatientReviewItem {
  id: string;
  name: string;
  relation: string;
  procedureTag: string;
  city: string;
  date: string;
  rating: number;
  summary: string;
  fullText: string;
  image: {
    baseName: string;
    width: number;
    height: number;
    alt: string;
    caption: string;
  };
}

export const reviewAggregate = {
  score: "4.9",
  reviewCount: "370+",
  source: "Verified Google Reviews",
  googleReviewUrl:
    "https://www.google.com/search?q=Dr+Manish+Aggarwal+Yashoda+Medicity+Indirapuram+reviews",
};

export const featuredReviews: PatientReviewItem[] = [
  {
    id: "vidit-aren",
    name: "Vidit Aren",
    relation: "Son of Angioplasty Patient",
    procedureTag: "Complex Coronary Angioplasty",
    city: "Indirapuram, Delhi NCR",
    date: "Verified Google Review",
    rating: 5,
    summary:
      "Three years of trusted care, complex case foresight, and a smooth angioplasty for my father.",
    fullText: `My father has been under Dr. Manish’s care for the past three years, so this gratitude comes from more than just one procedure. Over that time, he has consistently made my parents feel supported, reassured and cared for. This recent experience brought home just how much that relationship matters, especially when you are facing something that feels overwhelming as a family.

What I particularly appreciated was his foresight. With a complicated case, you want to feel that your doctor is thinking carefully about the risks and taking precautions before proceeding. That was our experience with Dr. Manish. His caution gave us confidence. Knowing that he was approaching my dad’s treatment with that level of attention made a real difference to how we felt throughout the process.

My parents have often spoken about his humility and patience, and those qualities deserve as much recognition as his expertise. There is something deeply reassuring about a doctor whose manner makes you feel comfortable even when the circumstances are difficult. For my mum and dad, that has been an important part of being under his care. For me, knowing they feel that way means a great deal.

When it is your own parent undergoing a heart procedure, the experience becomes personal. You can understand that treatment is needed and still feel anxious about what lies ahead. Having someone guide the family through the details with patience and care helps enormously. Dr. Manish gave us that sense of support at a time when we really needed it, and it is something I will remember.

I also want to acknowledge how much we appreciated the way everything came together. Given the complexity of my dad’s case, seeing the angioplasty go so smoothly was an immense relief. We are grateful for the thought, preparation and care behind the experience. As a family, we felt the value of his careful approach directly.

I am sharing this because choosing a doctor for someone you love carries a lot of weight. Our experience with Dr. Manish, both over the last three years and during this procedure, has given us confidence in his care. His expertise, humility and considered approach are qualities we have come to deeply appreciate.

Dr. Manish, thank you for looking after my dad with such care and for supporting our family through this. Thank you for your patience, your foresight and the attention you gave to a difficult case. We are hugely thankful that everything went smoothly. You have our heartfelt gratitude for everything you have done for my father and for all of us. Forever indebted - Vidit Aren`,
    image: {
      baseName: "review-vidit-aren",
      width: 1024,
      height: 651,
      alt: "Vidit Aren and his mother standing beside his father in the hospital bed with Dr. Manish Aggarwal at Yashoda Medicity",
      caption:
        "Vidit Aren & family with Dr. Manish Aggarwal in the cardiac care unit at Yashoda Medicity.",
    },
  },
  {
    id: "muzaffarnagar-emergency",
    name: "Patient Family",
    relation: "Husband of Cardiac Patient",
    procedureTag: "24/7 Emergency Door-to-Balloon Angioplasty",
    city: "Muzaffarnagar / Yashoda Medicity",
    date: "Verified Google Review",
    rating: 5,
    summary:
      "Late-night emergency response from Muzaffarnagar, rapid stent placement at Yashoda Medicity, and continuous WhatsApp availability.",
    fullText: `We belong to Muzaffarnagar and my wife got a heart attack on 23rd may and she was admitted in local nursing home in Muzaffarnagar. But her condition worsened same night and someone referred us to dr manish Aggarwal in Yashoda hospital.

Best part was that dr picked the call late in night when we tried to call him and by the time we reached the hospital, he got everything arranged and with in no time she was attended and admitted in the hospital.

We were very happy with the way everything was explained to us in detail before and during the treatment( stent). Also sir is available on call n reply to WhatsApp messages if there is any need which is really helpful to us .

My wife is totally fine now after a month and we are very much satisfied with the treatment provided by dr manish Aggarwal . N definitely recommend anyone who needs cardiac care and genuine advice`,
    image: {
      baseName: "review-muzaffarnagar-emergency",
      width: 768,
      height: 1024,
      alt: "Cardiac patient smiling alongside Dr. Manish Aggarwal in his consultation room following recovery from emergency stenting",
      caption:
        "Patient recovered in full health following emergency night transfer and rapid stenting at Yashoda Medicity.",
    },
  },
  {
    id: "fortis-recovery",
    name: "Senior Cardiac Patient",
    relation: "Post-PPI Complication Recovery",
    procedureTag: "Post-PPI Complication Rescue & Pericardial Fluid Relief",
    city: "Noida / Yashoda Medicity",
    date: "Verified Google Review",
    rating: 5,
    summary:
      "Saved from severe complications and pericardial fluid accumulation after a botched PPI at Fortis Noida — 'Rod of Asclepius'.",
    fullText: `Patient experience prior being attended by Dr Manish Aggarwal (Director Interventional Cardiology & Structural heart)

My heart rhythm had gone off after PPI at Fortis NOIDA, searched for solutions for almost 4 months Then I got admitted on 15 th March 2026in Yashoda Medicity under Dr Manish Aggarwal & his team..

He brought me back to life from Death due to severe complications & pericardial fluid accumulation.. I got released on 25 th March 2026

How I am now:Got my rhythm of life back He truly represents Rod of Asclepius..master of healing. Our society is indebted to such Doctors besides me.`,
    image: {
      baseName: "review-fortis-recovery",
      width: 768,
      height: 1024,
      alt: "Cardiac patient and family member standing proudly with Dr. Manish Aggarwal in surgical scrubs at Yashoda Medicity",
      caption:
        "Patient with his family member and Dr. Manish Aggarwal after life-saving recovery from severe post-procedure complications.",
    },
  },
];
