export type ProcedureHighlight = {
  label: string;
  value: string;
};

export type ProcedureSection = {
  heading?: string;
  subheading?: string;
  paragraphs: string[];
  bullets?: string[];
  callout?: {
    quote: string;
    attribution?: string;
  };
};

export type ProcedureFAQ = {
  question: string;
  answer: string;
};

export type Procedure = {
  slug: string;
  title: string;
  tagline: string;
  desc: string;
  focus: string;
  highlights: ProcedureHighlight[];
  patientProfile: string[];
  sections: ProcedureSection[];
  faqs: ProcedureFAQ[];
  keywords: string;
};

export const procedures: Procedure[] = [
  {
    slug: "tavi-tavr",
    title: "TAVR / TAVI",
    tagline: "Transcatheter Aortic Valve Replacement · Zero Sternotomy Protocol",
    desc: "Pinhole percutaneous aortic valve replacement for severe aortic stenosis. Performed under conscious sedation with 48-hour hospital discharge and zero surgical chest opening.",
    focus: "Severe Aortic Stenosis · Geriatric Structural Heart · Valve-in-Valve",
    highlights: [
      { label: "Access Route", value: "Transfemoral (Microscopic pinhole groin puncture)" },
      {
        label: "Anesthesia Protocol",
        value: "Conscious Sedation / Local (No ventilator intubation)",
      },
      { label: "Discharge Window", value: "48 to 72 Hours (Walking within 6 to 12 hours)" },
      {
        label: "Specialist Training",
        value: "European Structural Heart Fellowship (Gottsegen Institute, Budapest)",
      },
    ],
    patientProfile: [
      "Seniors aged 65+ experiencing shortness of breath, chest tightness, dizziness, or syncope (blackouts) from severe aortic stenosis.",
      "Patients deemed high-risk, intermediate-risk, or medically inoperable for traditional open-heart sternotomy due to frailty, advanced age, or comorbidities.",
      "Individuals with previous coronary artery bypass (CABG) or open-chest procedures where a re-do surgery presents extreme danger.",
      "Patients with degenerated bioprosthetic surgical valves who require a non-surgical Valve-in-Valve (ViV) replacement.",
      "Active individuals and families seeking an immediate, pain-free return to independent living without the 3-month bone healing of a cracked breastbone.",
    ],
    sections: [
      {
        heading: "The Paradigm Shift: Replacing Heart Valves Without Opening the Chest",
        paragraphs: [
          "Severe Aortic Stenosis is an anatomical choke point on the left ventricle. As the valve calcifies and narrows to the diameter of a pencil, the heart muscle must generate crushing pressures to force blood out to the brain and vital organs. Left untreated, severe symptomatic aortic stenosis carries a 50% mortality rate within two years—a prognosis worse than many aggressive malignancies.",
          "For decades, the only clinical recourse was median sternotomy: sawing through the breastbone, arresting the heart on a cardiopulmonary bypass machine, and surgically excising the valve. For frail seniors, octogenarians, or patients with compromised renal or pulmonary function, open surgery was often deemed too dangerous, leaving them without viable options.",
          "Dr. Manish Aggarwal has spent his career dismantling that barrier. Drawing upon his advanced Structural Heart Fellowship at the renowned Gottsegen György Hungarian Institute of Cardiology in Budapest, Dr. Aggarwal performs Transcatheter Aortic Valve Replacement (TAVR / TAVI)—deploying a biological heart valve inside the beating heart through a microscopic femoral puncture no larger than a pencil tip.",
        ],
      },
      {
        heading: "European Structural Precision: 3D CT Biomodeling & Deployment",
        paragraphs: [
          "TAVR is not merely an alternative to surgery; in expert hands, it is an engineering masterpiece of millimetric precision. Success begins long before the patient enters the hybrid catheterization suite at Yashoda Medicity, Indirapuram.",
          "Every candidate undergoes high-resolution electrocardiogram-gated multi-slice CT angiography. Dr. Aggarwal personally reconstructs the aortic root in three dimensions, mapping the annular perimeter, coronary artery take-off heights, calcification distribution, and peripheral vascular access paths with sub-millimeter precision. This rigorous preoperative planning eliminates guesswork and tailors valve selection—whether balloon-expandable or self-expanding—to the patient's exact anatomical geometry.",
        ],
        bullets: [
          "Beating-Heart Deployment: The new biological valve is crimped onto a slender catheter, guided through the arterial system, and expanded precisely inside the diseased valve under fluoroscopic and echocardiographic guidance.",
          "Instant Hemodynamic Normalization: The rigid native leaflets are pinned against the aortic wall, immediately restoring wide-open, laminar blood flow and instantly decompressing the overworked left ventricle.",
          "Conscious Sedation & Zero Intubation: The vast majority of procedures are performed without general anesthesia. Patients breathe naturally, remain comfortable, and can converse with the medical team immediately following the implant.",
        ],
      },
      {
        heading: "Valve-in-Valve (ViV): A Lifeline for Degenerated Surgical Valves",
        paragraphs: [
          "Tens of thousands of patients who underwent open-heart surgical tissue valve replacements 10 to 15 years ago are now facing structural valve degeneration. Subjecting an elderly patient to a repeat sternotomy carries prohibitive surgical morbidity and mortality.",
          "Dr. Aggarwal is one of Delhi NCR's recognized specialists in Valve-in-Valve (ViV) transcatheter procedures. By navigating inside the failed surgical ring and expanding a modern transcatheter valve within the existing frame, the failing valve is renewed in under an hour without a single surgical scalpel incision. Patients typically walk the following morning.",
        ],
        callout: {
          quote:
            "In structural cardiology, our measure of success is not just valve hemodynamics on an echo screen—it is returning an octogenarian to their morning garden walk within 48 hours.",
          attribution: "Dr. Manish Aggarwal · Director of Interventional Cardiology",
        },
      },
    ],
    faqs: [
      {
        question: "What is the difference between TAVR and TAVI?",
        answer:
          "TAVR (Transcatheter Aortic Valve Replacement) and TAVI (Transcatheter Aortic Valve Implantation) refer to the exact same procedure. In North America it is commonly termed TAVR, while European guidelines and Indian centers frequently use TAVI. Both describe replacing the aortic valve percutaneously via a catheter without open-heart surgery.",
      },
      {
        question: "How long does a transcatheter aortic valve last?",
        answer:
          "Contemporary multi-year clinical trials (including 8-to-10-year follow-up data from international registries) show that modern balloon-expandable and self-expanding TAVR valves demonstrate hemodynamic durability and freedom from structural valve deterioration comparable to traditional surgically implanted tissue valves.",
      },
      {
        question: "Is general anesthesia required for TAVR at Yashoda Medicity?",
        answer:
          "In the vast majority of our cases, Dr. Aggarwal uses conscious sedation with local anesthesia at the groin puncture site (the 'Minimalist TAVR' approach). This avoids breathing tubes, mechanical ventilation, and the disorientation of general anesthesia, allowing for rapid recovery and ambulation within hours.",
      },
      {
        question: "What is the recovery timeline compared to open-heart surgery?",
        answer:
          "Traditional open-heart surgery requires 7 to 10 days in the hospital and 8 to 12 weeks of bone healing for the sternum, during which lifting and driving are prohibited. With TAVR at Yashoda Medicity, patients typically walk within 6 to 12 hours, are discharged within 48 to 72 hours, and resume routine daily activities within one week.",
      },
    ],
    keywords:
      "TAVR Delhi NCR, TAVI procedure Indirapuram, transcatheter aortic valve replacement Ghaziabad, non surgical aortic valve replacement Noida, structural heart specialist Delhi, TAVI cost India, Dr Manish Aggarwal TAVI",
  },
  {
    slug: "mitraclip",
    title: "MitraClip (TEER)",
    tagline: "Transcatheter Edge-to-Edge Mitral Valve Repair · Real-Time 3D TEE Guided",
    desc: "Catheter-based mitral repair clipping leaky valve leaflets together under real-time 3D echocardiography. Halts congestive heart failure progression without open-heart surgery.",
    focus: "Mitral Regurgitation · Heart Failure Management · Non-Surgical Valve Repair",
    highlights: [
      {
        label: "Access Route",
        value: "Transfemoral Venous (Right groin vein to transseptal puncture)",
      },
      {
        label: "Imaging Guidance",
        value: "Real-Time 3D Transesophageal Echocardiography (TEE) + Live Fluoroscopy",
      },
      {
        label: "Recovery Profile",
        value: "48-Hour Discharge (Zero sternotomy, minimal discomfort)",
      },
      {
        label: "Clinical Objective",
        value: "Immediate reduction of mitral leak from Grade 4+ to Grade 1+ or less",
      },
    ],
    patientProfile: [
      "Patients diagnosed with moderate-to-severe (3+) or severe (4+) Mitral Regurgitation (MR), either functional (heart failure) or degenerative (prolapse/flail leaflet).",
      "Individuals experiencing persistent breathlessness while lying flat (orthopnea), chronic fatigue, leg swelling, or frequent hospitalizations for pulmonary edema.",
      "Patients deemed high surgical risk or inoperable for conventional mitral valve surgery due to reduced ejection fraction (EF < 35%), advanced age, or prior cardiac operations.",
      "Patients on maximized heart failure medications whose symptoms continue to progress despite optimal pharmacological therapy.",
    ],
    sections: [
      {
        heading: "Halting the Backflow: The Mechanical Crisis of Mitral Regurgitation",
        paragraphs: [
          "The mitral valve controls the one-way gateway between the lungs' oxygenated reservoir (left atrium) and the body's primary pump (left ventricle). When the valve leaflets fail to seal completely, a significant portion of every heartbeat regurgitates backward into the lungs instead of surging forward into the systemic circulation.",
          "This backward hydraulic surge causes pulmonary congestion, severe shortness of breath, fluid buildup in the abdomen and limbs, and recurrent hospital admissions. Over time, the volume overload stretches the left ventricle, setting off a vicious cycle of worsening pump failure and deadly atrial fibrillation.",
          "Historically, fixing a leaky mitral valve required open-heart surgery to replace or reconstruct the valve. For frail individuals or those with weakened heart muscle, surgical mortality was daunting. MitraClip—Transcatheter Edge-to-Edge Repair (TEER)—revolutionizes this space by repairing the valve while the heart continues to beat steadily, without a single cut on the chest.",
        ],
      },
      {
        heading: "The Transseptal Artistry: 3D Precision Under Real-Time TEE Guidance",
        paragraphs: [
          "MitraClip is among the most technically sophisticated catheter procedures in modern medicine, modeled on the surgical Alfieri stitch. Dr. Manish Aggarwal accesses the femoral vein in the groin, advances a steerable catheter into the right side of the heart, and performs a micro-puncture across the interatrial septum to access the left atrium.",
          "Under continuous live guidance from high-definition 3D Transesophageal Echocardiography (TEE), Dr. Aggarwal maneuvers the clip directly over the leaking regurgitant jet. The clip arms grasp the anterior and posterior leaflets, drawing them together to create a double-orifice valve that stops the backflow while preserving forward cardiac output.",
        ],
        bullets: [
          "Instant Hemodynamic Feedback: Color Doppler echocardiography visualizes the leak disappearing before the clip is permanently locked into position.",
          "Zero Cardiopulmonary Bypass: The patient's heart is never stopped, avoiding the whole-body inflammatory response and neurological risks of heart-lung bypass machines.",
          "Significant Reduction in Hospitalizations: Landmark global clinical trials (including COAPT) demonstrate that TEER reduces heart failure hospitalizations by over 45% and improves survival.",
        ],
      },
      {
        heading: "Restoring Breath and Dignity in Advanced Heart Failure",
        paragraphs: [
          "Across Delhi NCR and Western Uttar Pradesh, countless seniors are told their worsening breathlessness is simply an untreatable consequence of aging or end-stage heart failure. In reality, an uncorrected mechanical leak is often the primary culprit draining their vitality.",
          "At Yashoda Medicity, Dr. Aggarwal's structural heart team provides systematic evaluations for TEER eligibility. Most patients experience an immediate lightening in their chest within 24 hours of the clip placement, sleeping flat and walking without air hunger for the first time in years.",
        ],
        callout: {
          quote:
            "MitraClip does not just repair a leaflet; it breaks the progressive mechanical cycle of congestive heart failure without subjecting a fragile patient to open-chest trauma.",
          attribution: "Dr. Manish Aggarwal · Structural Heart Specialist",
        },
      },
    ],
    faqs: [
      {
        question: "How does MitraClip differ from open mitral valve replacement?",
        answer:
          "Open mitral surgery requires opening the chest wall (sternotomy), stopping the heart, and placing the patient on a heart-lung bypass machine. MitraClip is performed through a tiny venous puncture in the groin while the heart beats normally. There are no surgical incisions, recovery is rapid, and patients are typically home within two days.",
      },
      {
        question: "Can more than one MitraClip be implanted if the leak is wide?",
        answer:
          "Yes. Depending on the breadth of the regurgitant orifice and the leaflet anatomy, Dr. Aggarwal may deploy one, two, or occasionally three clips during the same session to ensure maximum coaptation and reduce the leak to a minimal trace.",
      },
      {
        question: "How quickly will I feel relief from shortness of breath?",
        answer:
          "Because the backflow of blood into the lungs is physically halted during the procedure, many patients notice an immediate improvement in breathing ease as soon as they wake up. Within a few days, pulmonary pressures normalize, fluid retention clears, and physical stamina rebounds.",
      },
    ],
    keywords:
      "MitraClip Delhi NCR, transcatheter edge to edge repair India, leaky mitral valve treatment Indirapuram, TEER procedure Ghaziabad, non surgical mitral repair Noida, Dr Manish Aggarwal MitraClip",
  },
  {
    slug: "emergency-angioplasty",
    title: "Emergency Angioplasty (Primary PCI)",
    tagline: "24/7 Rapid Response · Door-to-Balloon Under 90 Minutes",
    desc: "Immediate life-saving coronary revascularization for acute heart attacks (STEMI). 95%+ transradial wrist approach for minimal bleeding, instant mobilization, and maximum myocardial salvage.",
    focus: "Acute Myocardial Infarction · STEMI · Cardiogenic Shock · 24/7 Cath Lab",
    highlights: [
      {
        label: "Door-to-Balloon Time",
        value: "< 90 Minutes (Consistently beating international ESC/ACC benchmarks)",
      },
      {
        label: "Access Methodology",
        value: "Transradial Wrist Approach (>95% of all emergency cases)",
      },
      {
        label: "Stent Hardware",
        value: "3rd-Gen Ultra-Thin Drug-Eluting Stents (DES) with bioresorbable polymers",
      },
      {
        label: "Readiness Guarantee",
        value: "Dedicated 24/7 Emergency Cath Lab Team on-site at Yashoda Medicity",
      },
    ],
    patientProfile: [
      "Individuals experiencing acute crushing chest pressure, tightness, squeezing, or pain radiating to the left arm, neck, jaw, or back.",
      "Patients diagnosed with ST-Elevation Myocardial Infarction (STEMI) or High-Risk Non-STEMI on immediate emergency ECG.",
      "Patients presenting with acute breathlessness, sudden cold sweating (diaphoresis), nausea, or unexplained collapse.",
      "Post-cardiac arrest patients requiring urgent coronary angiography to open the occluded culprit vessel.",
      "Emergency transfers from clinics and nursing homes across Indirapuram, Noida, Ghaziabad, and East/South Delhi requiring immediate cath lab activation.",
    ],
    sections: [
      {
        heading: "Time is Myocardium: The Golden Hour Mandate",
        paragraphs: [
          "In an acute myocardial infarction (heart attack), a rupture in an atherosclerotic plaque triggers instant blood clot formation, completely sealing off arterial flow. Downstream, millions of cardiac muscle cells are starved of oxygen and begin to die every passing minute.",
          "Clinical data is unequivocal: for every 30-minute delay in reopening an occluded coronary artery, the relative risk of mortality increases by 7.5%. Re-establishing blood flow within the 'Golden Hour' is the difference between preserving normal cardiac pump function and suffering lifelong, debilitating congestive heart failure or sudden cardiac death.",
          "At Yashoda Medicity, Indirapuram, Dr. Manish Aggarwal directs a rapid-response Primary Percutaneous Coronary Intervention (PCI) program. Operating 24 hours a day, 365 days a year, our audited Door-to-Balloon times consistently exceed the stringent 90-minute benchmark set by the European Society of Cardiology (ESC).",
        ],
      },
      {
        heading: "The Transradial Wrist Advantage: Zero Bed Rest, Superior Safety",
        paragraphs: [
          "Historically, emergency angioplasty was performed through the femoral artery in the groin. Groin punctures require patients to lie completely flat on their backs for 8 to 12 hours with heavy sandbags, carry significant risks of severe bleeding and retroperitoneal hematoma, and cause extreme physical distress.",
          "Dr. Manish Aggarwal performs over 95% of emergency interventions via the Radial Artery in the wrist. As an international champion of transradial access, Dr. Aggarwal's technique provides profound clinical benefits:",
        ],
        bullets: [
          "Drastic Bleeding Reduction: Eliminates over 60% of major access-site bleeding complications, which is critical for patients receiving aggressive emergency blood thinners and anti-platelet therapies.",
          "Instant Mobilization: Patients can sit up, drink fluids, eat a meal, and speak with their loved ones within one hour of leaving the catheterization laboratory.",
          "Enhanced Comfort & Dignity: Eliminates back pain and the need for urinary catheters associated with prolonged immobilized flat bed rest.",
        ],
      },
      {
        heading: "Advanced Clot Aspiration, Intravascular Imaging, & Shock Management",
        paragraphs: [
          "Opening an acutely blocked artery involves far more than pushing a balloon. Acute thrombi can fragment and embolize downstream, plugging microscopic capillaries in a phenomenon known as 'no-reflow'.",
          "Dr. Aggarwal employs dedicated mechanical aspiration thrombectomy to extract fresh clots from the vessel before stent deployment. In high-risk presentations with cardiogenic shock or hemodynamic collapse, our hybrid cath lab is equipped with immediate mechanical circulatory support systems (Intra-Aortic Balloon Pump / IABP) to sustain vital organ perfusion while the culprit artery is restored.",
        ],
        callout: {
          quote:
            "When a heart attack strikes, every second matters. Our protocol is designed to eliminate hospital bottlenecks and restore full coronary perfusion in under 90 minutes.",
          attribution: "Dr. Manish Aggarwal · Director of Interventional Cardiology",
        },
      },
    ],
    faqs: [
      {
        question: "What should I do immediately if I suspect a heart attack?",
        answer:
          "Do not wait to see if symptoms pass. Call our emergency response desk directly at +91 98711 83181 and proceed immediately to the Emergency Department at Yashoda Medicity, Indirapuram. If available and not allergic, chew a 300mg soluble Aspirin immediately while en route.",
      },
      {
        question:
          "Why is Primary Angioplasty preferred over clot-dissolving injections (thrombolysis)?",
        answer:
          "Global clinical guidelines conclusively establish that Primary PCI is vastly superior to thrombolytic medications. Angioplasty achieves complete vessel reopening in >95% of cases compared to only 50–60% with drugs, carries a significantly lower risk of intracranial brain hemorrhage, and prevents recurrent heart attacks.",
      },
      {
        question: "How long is the hospitalization after an emergency angioplasty?",
        answer:
          "Patients typically spend 24 hours in the high-dependency Coronary Care Unit (CCU) for continuous rhythm monitoring, followed by 24 to 48 hours in a private room. Most patients walking comfortably on day two are discharged home by day three with personalized rehabilitation guidance.",
      },
    ],
    keywords:
      "emergency angioplasty Delhi NCR, primary PCI Indirapuram, heart attack treatment Ghaziabad, 24/7 cath lab Noida, door to balloon time Delhi, transradial angioplasty specialist, Dr Manish Aggarwal emergency cardiology",
  },
  {
    slug: "complex-coronary",
    title: "Complex Coronary Interventions (CHIP & CTO)",
    tagline: "CTO Crossing & Diamond-Tipped Rotablation for Calcified Arteries",
    desc: "Advanced percutaneous techniques for 100% chronically occluded arteries and calcified, rock-hard vessels turned away elsewhere. High-risk PCI avoiding median sternotomy.",
    focus: "Chronic Total Occlusion (CTO) · Rotational Atherectomy · High-Risk PCI (CHIP)",
    highlights: [
      { label: "Clinical Specialty", value: "Complex Higher-Risk and Indicated Patients (CHIP)" },
      {
        label: "Atherectomy Hardware",
        value: "Rotational Atherectomy (160,000 RPM diamond burr) + Shockwave IVL",
      },
      {
        label: "CTO Crossing Paradigm",
        value: "Hybrid Antegrade & Retrograde Collateral Channel Tracking",
      },
      {
        label: "Surgical Alternative",
        value: "Viable non-surgical solution for patients rejected for bypass surgery",
      },
    ],
    patientProfile: [
      "Patients told by other cardiologists that their blockages are 'too hard,' 'too calcified,' or '100% blocked' to treat with standard angioplasty.",
      "Individuals with Chronic Total Occlusion (CTO)—arteries that have been completely occluded for months or years—causing persistent angina or shortness of breath.",
      "Patients deemed inoperable or high-risk for open-heart Coronary Artery Bypass Grafting (CABG) due to low ejection fraction (EF < 30%), severe diabetes, renal dysfunction, or previous bypass surgery.",
      "Patients with complex multi-vessel disease, bifurcation lesions (vessel forks), or Left Main trunk disease seeking percutaneous alternatives to open-chest surgery.",
    ],
    sections: [
      {
        heading: "When Arteries Turn to Stone: Defeating Severe Calcification",
        paragraphs: [
          "As coronary atherosclerosis advances over decades—particularly in patients with long-standing diabetes, chronic kidney disease, or advanced age—the vessel walls accumulate dense, rock-hard calcium deposits. When an artery turns into a rigid, non-compliant 'porcelain pipe', standard angioplasty balloons cannot expand.",
          "Attempting to force a standard balloon or stent into a severely calcified vessel carries severe risks: balloon rupture, vessel dissection, or catastrophic stent under-expansion, which dramatically increases the risk of acute clotting and stent failure. When standard tools fail, many cardiologists turn patients away or default to open-heart bypass surgery.",
          "Dr. Manish Aggarwal is recognized across Delhi NCR as a specialist in Complex Higher-Risk and Indicated Patients (CHIP). Utilizing diamond-tipped Rotational Atherectomy (Rotablation) and Intravascular Lithotripsy (IVL), Dr. Aggarwal pulverizes rock-hard calcium to prepare the vessel for flawless, full-expansion stenting.",
        ],
      },
      {
        heading: "The Diamond-Tipped Solution: Rotablation & Shockwave Lithotripsy",
        paragraphs: [
          "Rotational Atherectomy uses an olive-shaped microscopic burr coated with microscopic diamond crystals, rotating at speeds between 160,000 and 180,000 RPM. Driven by an air turbine, the diamond burr preferentially cuts and sands inelastic, hard calcium while leaving elastic healthy vessel tissue untouched.",
          "The pulverized calcium particles are smaller than human red blood cells (averaging 5 microns), allowing them to pass harmlessly through the capillary bed without causing distal blockage. In addition, Dr. Aggarwal utilizes Shockwave Intravascular Lithotripsy (IVL), delivering localized sonic pressure waves that safely fracture deep sub-surface calcium cracks within the vessel wall.",
        ],
        bullets: [
          "Vessel Compliance Restoration: Transforms a rigid calcium ring into a pliable vessel wall, allowing modern drug-eluting stents to expand fully to their nominal diameters.",
          "Left Main & Bifurcation Mastery: Employs dedicated bifurcated stenting techniques (DK-Crush, Culotte, TAP) to preserve side-branch vessels without compromising flow.",
          "Intravascular Imaging Mandate: Every complex case is mapped using real-time IVUS or OCT to verify 100% stent strut apposition and eliminate edge dissections.",
        ],
      },
      {
        heading: "Chronic Total Occlusion (CTO): Opening the 100% Blocked Artery",
        paragraphs: [
          "A Chronic Total Occlusion (CTO) is a coronary artery that has been 100% blocked for longer than three months. For decades, CTOs were considered the 'final frontier' of catheter interventions, with success rates under 50% using standard techniques.",
          "Having mastered advanced European retrograde and antegrade dissection re-entry protocols, Dr. Aggarwal achieves CTO crossing rates exceeding 85–90%. By tracking micro-collateral channels backward from the opposite coronary artery, the occlusion is bridged from behind, re-establishing brisk blood flow to hibernating, ischemic myocardium.",
        ],
        callout: {
          quote:
            "A 100% blocked artery does not mean open-heart surgery is inevitable. With modern microcatheters, retrograde tracking, and diamond rotablation, we routinely recanalize vessels that were declared untreatable.",
          attribution: "Dr. Manish Aggarwal · CHIP & CTO Specialist",
        },
      },
    ],
    faqs: [
      {
        question: "How does Rotablation differ from standard balloon angioplasty?",
        answer:
          "Standard angioplasty uses a high-pressure balloon to stretch a plaque outward. In a heavily calcified artery, the balloon either bursts or cannot expand, risking vessel rupture. Rotablation uses a microscopic diamond drill rotating at 160,000 RPM to physically shave away rock-hard calcium, restoring elasticity so a stent can open completely.",
      },
      {
        question: "Can an artery that has been 100% blocked for years still be reopened?",
        answer:
          "Yes. Many chronic total occlusions (CTOs) maintain living heart muscle downstream that survives on tiny collateral channels. If viability testing (via stress echo or cardiac MRI) confirms living muscle, reopening the CTO significantly reduces chest pain, improves shortness of breath, and restores cardiac pumping efficiency.",
      },
      {
        question:
          "If another hospital said I need bypass surgery because of calcification, should I get a second opinion?",
        answer:
          "Absolutely. Many patients advised to undergo triple-vessel bypass surgery due to 'complex calcification' or 'chronic total blockages' are excellent candidates for percutaneous CHIP PCI under Dr. Aggarwal. We review your angiogram CD to determine if surgery can be safely avoided.",
      },
    ],
    keywords:
      "CTO angioplasty Delhi NCR, rotablation cardiologist Indirapuram, complex coronary intervention Ghaziabad, calcified artery treatment Noida, diamond drill angioplasty, high risk PCI specialist Delhi, Dr Manish Aggarwal CTO",
  },
  {
    slug: "heart-checkup",
    title: "Comprehensive Executive Heart Check-Up",
    tagline: "The Director's Forensic Cardiac Audit for High-Performers",
    desc: "Evidence-based cardiovascular longevity evaluation for executives, founders, and high-stress professionals. Moving beyond basic ECGs to CT calcium scoring, ApoB, and arterial bio-mapping.",
    focus: "Preventive Cardiology · CT Calcium Scoring · Advanced Lipidomics · Longevity",
    highlights: [
      {
        label: "Core Imaging",
        value: "Coronary CT Calcium Score (CAC) + High-Resolution Stress Echocardiography",
      },
      {
        label: "Advanced Biomarkers",
        value: "ApoB, Lipoprotein(a), hs-CRP, Homocysteine, Fasting Insulin, HbA1c",
      },
      {
        label: "Director's Review",
        value: "Dedicated 1-on-1 forensic clinical consultation with Dr. Manish Aggarwal",
      },
      {
        label: "Diagnostic Philosophy",
        value: "Detecting soft, vulnerable plaque 5 to 10 years before a cardiac event occurs",
      },
    ],
    patientProfile: [
      "Corporate executives, entrepreneurs, legal partners, and high-stress professionals aged 35 to 65 managing demanding schedules and erratic travel.",
      "Individuals with a family history of premature heart disease, heart attack, or sudden cardiac death in first-degree relatives before age 55.",
      "Patients with borderline or elevated cholesterol, hypertension, pre-diabetes, or metabolic syndrome seeking precision risk quantification.",
      "Fitness enthusiasts, marathoners, and masters athletes seeking comprehensive cardiac structural clearance before rigorous endurance events.",
      "Proactive individuals who want a definitive forensic baseline of their true cardiovascular health rather than a generic checklist.",
    ],
    sections: [
      {
        heading: "The Dangerous Fallacy of the Basic Annual Health Check",
        paragraphs: [
          "Every year, thousands of seemingly healthy executives pass their company-mandated health check-ups with 'flying colors'—only to suffer a catastrophic, unpredicted heart attack weeks later. Why does this happen with alarming regularity?",
          "A conventional health check relies primarily on a resting ECG and a standard treadmill stress test (TMT). A resting ECG is completely normal in over 85% of individuals with severe coronary artery disease until the moment a plaque ruptures. Similarly, a treadmill test only turns positive when an artery is already mechanically choked by 70% or more.",
          "The medical reality is sobering: the majority of fatal heart attacks occur from the sudden rupture of mild, 30% to 50% non-obstructive 'soft plaques' that cause zero symptoms and produce completely normal treadmill tests. Relying on basic screening packages creates a dangerous, false sense of security.",
        ],
      },
      {
        heading: "The Forensic Diagnostic Architecture: Seeing Inside the Arteries",
        paragraphs: [
          "Dr. Manish Aggarwal's Comprehensive Executive Heart Audit is built on forensic cardiovascular risk mapping. Rather than estimating probability based on population averages, we directly evaluate your anatomical coronary plaque burden and systemic biological drivers.",
        ],
        bullets: [
          "Coronary Artery Calcium (CAC) Scoring: An ultra-low-radiation CT scan that quantifies the exact calcified plaque volume inside your coronary arteries. An Agatston score of zero indicates minimal short-term risk; any score above zero is conclusive proof of active coronary atherosclerosis requiring immediate preventive stabilization.",
          "Apolipoprotein B (ApoB) & Particle Number: Standard LDL cholesterol only measures cholesterol weight, not particle count. ApoB directly measures the exact number of atherogenic, plaque-building particles circulating in your bloodstream.",
          "Lipoprotein(a) [Lp(a)] Audit: A genetically driven, highly atherogenic lipid particle that affects 1 in 5 South Asians. Elevated Lp(a) causes premature clotting and arterial calcification regardless of diet or exercise.",
          "Vascular Inflammation (hs-CRP): Measures systemic arterial inflammation, identifying whether existing plaque is stable or hot, inflamed, and prone to rupture.",
          "Stress Echocardiography: High-resolution ultrasound imaging of heart wall motion under metabolic stress to evaluate microvascular perfusion and subtle pumping defects.",
        ],
      },
      {
        heading: "The Director's Longevity Blueprint",
        paragraphs: [
          "Prevention is not an automated computer printout handed to you by a technician. The cornerstone of the Executive Heart Check-Up is an unhurried, direct clinical consultation with Dr. Manish Aggarwal at Yashoda Medicity.",
          "Dr. Aggarwal synthesizes your imaging findings, metabolic biomarkers, sleep patterns, and family pedigree into a definitive, personalized Cardiovascular Longevity Protocol. From targeted pharmacological plaque stabilization (statin/PCSK9/bempedoic acid therapies) to metabolic optimization, you walk away with crystal-clear guidance to protect your heart for the next three decades.",
        ],
        callout: {
          quote:
            "Our objective is not simply to confirm you won't have a heart attack this month. Our mission is to halt atherosclerosis in its tracks so you never need a stent or a bypass.",
          attribution: "Dr. Manish Aggarwal · Preventive & Interventional Cardiology",
        },
      },
    ],
    faqs: [
      {
        question: "Why should I get a CT Calcium Score if my cholesterol is normal?",
        answer:
          "More than 50% of heart attack victims have normal or near-normal LDL cholesterol levels. A CT Calcium Score directly looks inside your coronary arteries to show whether physical plaque is present or absent, providing concrete anatomical evidence that overrides standard blood test estimates.",
      },
      {
        question: "What is Lipoprotein(a) and why does Dr. Aggarwal test it?",
        answer:
          "Lipoprotein(a) is an inherited, genetically determined particle that drives early arterial hardening and blood clotting. It is particularly common in individuals of Indian and South Asian descent and is unaffected by diet or exercise. Knowing your Lp(a) level allows Dr. Aggarwal to deploy targeted plaque-stabilizing protocols early.",
      },
      {
        question: "How long does the Executive Heart Audit take?",
        answer:
          "All blood tests, imaging scans (CT Calcium Score, Stress Echo, ECG), and diagnostics are completed within 3 to 4 hours in the executive wing of Yashoda Medicity, followed by a dedicated private consultation with Dr. Aggarwal to review your findings in detail.",
      },
    ],
    keywords:
      "executive heart checkup Delhi NCR, comprehensive cardiac screening Indirapuram, CT calcium score Ghaziabad, preventive cardiologist Noida, advanced lipid profile Delhi, Dr Manish Aggarwal heart audit",
  },
  {
    slug: "pacemakers",
    title: "Pacemakers & Implantable Devices",
    tagline: "Leadless Micra · CRT-D · Dual-Chamber Physiological Pacing",
    desc: "Full spectrum of cardiac rhythm solutions: from the world's smallest leadless Micra pacemaker implanted directly inside the heart to Cardiac Resynchronization Therapy for severe heart failure.",
    focus: "Bradycardia · Complete Heart Block · Heart Failure Resynchronization · ICD",
    highlights: [
      {
        label: "Device Modalities",
        value:
          "Medtronic Micra Leadless · Dual-Chamber Pacemaker · CRT-D / CRT-P · Subcutaneous ICD",
      },
      {
        label: "Procedural Technique",
        value: "Pinhole Transvenous / Femoral Delivery under Local Anesthesia",
      },
      {
        label: "Battery Longevity",
        value: "10 to 15+ Years with Integrated Remote Wireless Home Telemetry",
      },
      {
        label: "MRI Compatibility",
        value: "100% MRI-Conditional Hardware (Safe for 1.5T and 3.0T MRI scans)",
      },
    ],
    patientProfile: [
      "Patients suffering from symptomatic bradycardia (pulse rate dropping below 40–50 bpm), severe fatigue, lightheadedness, or sudden unexplained fainting (syncope).",
      "Individuals diagnosed with Sick Sinus Syndrome, High-Grade AV Block, or Complete Heart Block requiring reliable physiological pacing.",
      "Heart failure patients with reduced ejection fraction (EF < 35%) and left bundle branch block (LBBB) who need Cardiac Resynchronization Therapy (CRT).",
      "Survivors of sudden cardiac arrest or patients with life-threatening ventricular tachycardia (VT) who require an Implantable Cardioverter Defibrillator (ICD).",
      "Active or cosmetic-conscious patients seeking the world's smallest leadless pacemaker without a surgical chest pocket or visible scar.",
    ],
    sections: [
      {
        heading: "The Conductor of the Heart: When the Electrical Metronome Fails",
        paragraphs: [
          "The heart is both a mechanical pump and an electrical marvel. An intrinsic network of specialized conduction tissue—beginning at the sinus node and branching through the atrioventricular (AV) bundle—coordinates 100,000 synchronized beats every single day.",
          "When this natural metronome degenerates due to aging, fibrosis, previous heart attacks, or medication toxicity, the heart's pacing falls into disarray. Severe conduction failure leads to sudden drops in cerebral perfusion, triggering frightening blackouts (Stokes-Adams attacks), debilitating exhaustion, memory fog, or fatal asystole.",
          "At Yashoda Medicity, Indirapuram, Dr. Manish Aggarwal directs a comprehensive cardiac rhythm device program. From traditional dual-chamber pacemakers to advanced physiological conduction system pacing (His-bundle and Left Bundle Branch Area Pacing / LBBAP), our focus is restoring natural, synchronized cardiac cadence.",
        ],
      },
      {
        heading: "The Micra Revolution: The World's Smallest Invisible Pacemaker",
        paragraphs: [
          "Conventional pacemakers require a surgical incision beneath the collarbone to fashion a subcutaneous 'pocket' for the battery generator, along with insulated transvenous leads threaded through veins into the heart chambers. While effective, traditional pacemakers leave a visible bump under the skin and carry risks of lead fracture, venous thrombosis, and pocket infections.",
          "Dr. Manish Aggarwal offers the Medtronic Micra Transcatheter Pacing System—a technological triumph 93% smaller than a conventional pacemaker, roughly the size of a large vitamin capsule.",
        ],
        bullets: [
          "Zero Chest Incision & No Visible Bump: The entire self-contained pacemaker is delivered through a catheter in the femoral vein and anchored directly into the right ventricle.",
          "No Transvenous Wires: Eliminates lead dislodgement, vascular occlusion, and lead-related complications entirely.",
          "Zero Physical Restrictions: Patients do not face the post-implant shoulder immobility or arm restrictions required with traditional pacemakers, returning to swimming, golf, and active workouts immediately.",
        ],
      },
      {
        heading: "Cardiac Resynchronization Therapy (CRT) for Congestive Heart Failure",
        paragraphs: [
          "In patients with severe dilated cardiomyopathy or heart failure accompanied by a widened QRS complex (Left Bundle Branch Block), the left and right ventricles contract asynchronously. The walls fight each other rather than pumping blood forward, drastically worsening pump failure.",
          "Dr. Aggarwal implants Cardiac Resynchronization Therapy (CRT-D / CRT-P) devices. By pacing both ventricles simultaneously, CRT restores harmonious biventricular contraction. This electrical realignment often produces dramatic rebounds in Ejection Fraction (EF), relieves severe breathlessness, and substantially reduces hospitalizations.",
        ],
        callout: {
          quote:
            "Whether deploying an invisible leadless Micra or resynchronizing a failing heart with CRT, our goal is seamless physiological restoration so patients can forget they have a device at all.",
          attribution: "Dr. Manish Aggarwal · Director of Interventional Cardiology",
        },
      },
    ],
    faqs: [
      {
        question:
          "What is the primary difference between a traditional pacemaker and the Micra leadless pacemaker?",
        answer:
          "A traditional pacemaker consists of a pulse generator placed under the chest skin with wires running through veins into the heart. The Micra has no wires, no surgical chest pocket, and sits entirely inside the heart chamber. It is placed through a leg vein puncture, leaving no scar on the chest and no visible device bump.",
      },
      {
        question: "Can I safely undergo an MRI scan with a modern pacemaker?",
        answer:
          "Yes. All pacemakers, ICDs, and CRT devices implanted by Dr. Manish Aggarwal are 100% MRI-conditional. When placed in MRI mode by our cardiology team, patients can safely undergo both 1.5 Tesla and 3.0 Tesla MRI scans without risk of device malfunction.",
      },
      {
        question: "How long does a modern pacemaker battery last?",
        answer:
          "Contemporary pacemakers feature advanced lithium-carbon monofluoride batteries lasting between 10 and 15+ years depending on pacing percentage. Our devices incorporate wireless home telemetry monitors that communicate daily battery and lead status directly to our clinical portal.",
      },
    ],
    keywords:
      "pacemaker implantation Delhi NCR, Micra leadless pacemaker Indirapuram, CRT heart failure device Ghaziabad, ICD defibrillator Noida, best electrophysiology cardiologist Delhi, Dr Manish Aggarwal pacemaker",
  },
  {
    slug: "second-opinion",
    title: "Radically Honest Second Opinion",
    tagline:
      "Uncompromised Diagnostic Review · The Most Expensive Stent is the One You Didn't Need",
    desc: "Independent forensic evaluation of coronary angiograms, echocardiograms, and bypass surgery recommendations. Direct, unvarnished clinical truth on medical management vs. stenting vs. CABG.",
    focus: "Clinical Ethics · Angiogram Re-Evaluation · Patient Advocacy · Bypass Alternatives",
    highlights: [
      {
        label: "Review Methodology",
        value: "Frame-by-Frame DICOM Angiogram & Echocardiogram Forensic Analysis",
      },
      {
        label: "Guiding Principle",
        value: "'If this were my own family member, what would the medical science dictate?'",
      },
      { label: "Turnaround Speed", value: "Same-Day / 24-Hour Expedited Urgent Surgical Triage" },
      {
        label: "Consultation Options",
        value: "In-Person Consultation at Yashoda Medicity or Secure Digital Record Review",
      },
    ],
    patientProfile: [
      "Patients advised to undergo immediate or urgent open-heart Coronary Artery Bypass Grafting (CABG) who want an objective assessment of whether surgery is truly necessary.",
      "Individuals told they require multiple coronary stents following an emergency or elective angiogram and seeking verification of clinical appropriateness.",
      "Patients diagnosed with complex multi-vessel or calcified disease whose surgeons and cardiologists gave conflicting recommendations.",
      "Families seeking an independent structural cardiology audit before agreeing to high-cost structural interventions (TAVR, MitraClip).",
      "Outstation and international patients from across India, the Middle East, and Central Asia requiring trusted, unconflicted specialist review.",
    ],
    sections: [
      {
        heading: "Radical Honesty: Cutting Through Medical Pressure and Ambiguity",
        paragraphs: [
          "Few experiences in life are as disorienting as lying on a catheterization table or sitting in a hospital consultation room while a physician announces: 'You have severe triple-vessel blockages and need emergency open-heart bypass surgery tomorrow.'",
          "In these high-pressure moments, patients and families feel trapped, panicked, and ill-equipped to evaluate complex medical jargon. While bypass surgery and stenting are miraculous, life-saving therapies when strictly indicated, modern clinical literature documents significant rates of over-investigation and unnecessary interventional procedures.",
          "Dr. Manish Aggarwal founded his clinical practice on an uncompromising standard: Radical Honesty. In an era of transactional medicine, Dr. Aggarwal provides an independent, evidence-based sanctuary for patients seeking the objective truth about their hearts. The most expensive procedure—both financially and biologically—is the one that was never necessary.",
        ],
      },
      {
        heading: "The Forensic Review: Beyond the 2D Angiogram Shadow",
        paragraphs: [
          "A coronary angiogram is not a definitive map of functional ischemia; it is merely a 2D luminogram (a silhouette of injected dye). A 70% anatomical narrowing on an angiogram does not automatically mean that a stent will prolong your life or prevent a heart attack.",
          "Large-scale landmark randomized clinical trials (such as the ISCHEMIA and COURAGE trials) have conclusively proven that for stable coronary artery disease, optimal guideline-directed medical therapy (statins, anti-platelets, blood pressure control, and lifestyle modification) produces survival outcomes identical to invasive stenting, without the risks of procedural complications.",
          "When you bring your coronary angiogram CD to Dr. Aggarwal, he conducts an unhurried, frame-by-frame analysis with you and your family:",
        ],
        bullets: [
          "Functional Significance Verification: Is the blockage actually depriving heart muscle of blood flow, or is it an innocent bystander?",
          "Bypass vs. Stenting Objective Analysis: Does your coronary anatomy (SYNTAX score, Left Main involvement, diabetes) truly favor bypass surgery, or can modern CHIP stenting accomplish full revascularization safely without opening the chest?",
          "Medical Management Feasibility: Can this condition be managed safely, effectively, and sustainably with advanced medications alone?",
        ],
      },
      {
        heading: "A Pure Patient Advocate in Your Corner",
        paragraphs: [
          "Dr. Aggarwal does not work on volume quotas. His second opinion service is built on zero commercial bias. If open-heart bypass surgery is genuinely your safest, longest-lasting option, Dr. Aggarwal will tell you unequivocally and connect you with premier cardiothoracic surgeons.",
          "If, however, your blockages can be safely managed with medication, or if complex rotablation can spare you an unnecessary sternotomy, you will receive the exact scientific rationale in plain, respectful language. You leave with clarity, confidence, and complete control over your health.",
        ],
        callout: {
          quote:
            "A second opinion should never be a sales pitch for another procedure. It is a forensic review of the facts so you can make the right decision for your life.",
          attribution: "Dr. Manish Aggarwal · Director of Interventional Cardiology",
        },
      },
    ],
    faqs: [
      {
        question: "What medical records should I bring for a cardiology second opinion?",
        answer:
          "Please bring your original coronary angiogram CD containing the digital DICOM video files (not just the printed paper summary), your latest 2D Echocardiogram report, recent ECGs, routine blood work (kidney function, HbA1c, complete blood count), and a comprehensive list of all current medications.",
      },
      {
        question: "Can I receive a second opinion remotely if I live outside Delhi NCR?",
        answer:
          "Yes. We offer secure remote digital second opinions for patients across India and internationally. You can upload your digital angiogram DICOM files and medical history to our secure portal, after which Dr. Aggarwal will conduct a detailed tele-consultation to discuss his findings.",
      },
      {
        question:
          "Will Dr. Aggarwal pressure me to have my procedure performed at Yashoda Medicity?",
        answer:
          "Under no circumstances. The sole objective of our second opinion consultation is clinical clarity and patient advocacy. You will receive an objective written appraisal that you are free to discuss with your primary hospital or family physician.",
      },
    ],
    keywords:
      "cardiac second opinion Delhi NCR, bypass surgery second opinion Indirapuram, angiogram CD review Ghaziabad, avoid unnecessary stent Noida, cardiologist second opinion India, Dr Manish Aggarwal second opinion",
  },
  {
    slug: "intravascular-imaging",
    title: "Intravascular Imaging (IVUS & OCT)",
    tagline: "Millimetric Precision Stenting · We Don't Guess. We See Inside the Vessel.",
    desc: "10-micron optical coherence tomography (OCT) and high-definition intravascular ultrasound (IVUS) to guide stent selection and deployment. Eliminating stent under-expansion and thrombosis.",
    focus: "High-Definition IVUS · Near-Infrared OCT · Stent Optimization · Zero Guesswork",
    highlights: [
      {
        label: "Imaging Resolution",
        value: "OCT 10 to 15-Micron Near-Infrared Resolution (10x sharper than ultrasound)",
      },
      {
        label: "Clinical Advantage",
        value: "Complete 360-degree cross-sectional arterial plaque & calcium characterization",
      },
      {
        label: "Complication Defense",
        value: "Eliminates stent under-expansion, malapposition, and edge dissection",
      },
      {
        label: "Guideline Stance",
        value: "Class 1A ESC & ACC recommendation for complex PCI optimization",
      },
    ],
    patientProfile: [
      "Any patient undergoing elective or complex coronary angioplasty who wants the highest standard of procedural precision and lifelong stent durability.",
      "Patients with Left Main coronary trunk blockages or complex bifurcation (branching vessel) disease where precision placement is crucial.",
      "Patients with a history of In-Stent Restenosis (arteries blocking again inside a previously placed stent) or late stent clotting.",
      "Individuals with heavily calcified or diffuse, long blockages requiring precise landing zone selection to avoid healthy arterial damage.",
      "Diabetic and high-risk patients who require minimal dye (contrast) administration to protect sensitive kidney function.",
    ],
    sections: [
      {
        heading: "Beyond the Shadow: The Inherent Blindness of Standard Angiography",
        paragraphs: [
          "Standard coronary angiography has been the foundation of catheterization for 50 years. However, angiography has an inherent, dangerous limitation: it is merely a two-dimensional 'shadowgram'—a flat silhouette of radiopaque dye flowing through a vessel.",
          "An angiogram cannot look through the blood to examine the arterial wall itself. It cannot tell whether a blockage is composed of soft lipid, dense fibrous tissue, or deep rock-hard calcium. Crucially, an angiogram cannot verify whether an expanded stent is fully pressed (apposed) against the vessel wall or sitting loosely inside the bloodstream.",
          "Global registries demonstrate that over 70% of stents deployed using angiography alone suffer from some degree of stent under-expansion or edge malapposition. These microscopic gaps are the primary trigger for in-stent restenosis (the artery slowly scarring shut again) and catastrophic stent thrombosis (sudden massive blood clotting inside the stent).",
        ],
      },
      {
        heading: "Optical Coherence Tomography (OCT): Microscopic Resolution Inside the Heart",
        paragraphs: [
          "At Yashoda Medicity, Dr. Manish Aggarwal champions the routine use of advanced Intravascular Imaging for coronary interventions. Utilizing Optical Coherence Tomography (OCT), we harness near-infrared light to capture real-time cross-sectional microscopic images from within the coronary artery with an incredible 10 to 15-micron resolution.",
          "OCT acts as an optical microscope travelling through the beating heart. With OCT, Dr. Aggarwal achieves unprecedented clinical control:",
        ],
        bullets: [
          "Precision Stent Sizing: Measures exact internal lumen dimensions down to the tenth of a millimeter, preventing the placement of undersized or oversized stents.",
          "Plaque Characterization: Differentiates vulnerable thin-cap fibroatheromas (unstable plaques) from stable fibrous plaques and calculates calcium arc and depth.",
          "Strut-Level Verification: Verifies 100% circumferential metal contact against the vessel wall and immediately identifies microscopic edge tears or tissue prolapse.",
        ],
      },
      {
        heading: "High-Definition IVUS: The Standard for Left Main & Deep Calcium",
        paragraphs: [
          "For large vessels, aorto-ostial blockages, and high-stakes Left Main coronary trunk interventions, Dr. Aggarwal deploys High-Definition Intravascular Ultrasound (HD-IVUS). Sound waves penetrate deep into the outer vessel layers, visualizing the full architecture of the arterial wall.",
          "IVUS guidance allows Dr. Aggarwal to deploy targeted high-pressure post-dilation balloons, ensuring the stent reaches its optimal cross-sectional expansion area (MSA). Landmark international clinical trials—including RENOVATE-COMPLEX-PCI and ILUMIEN IV—prove that imaging-guided angioplasty significantly reduces cardiac death, recurrent heart attacks, and target vessel failure compared to conventional angioplasty.",
        ],
        callout: {
          quote:
            "In interventional cardiology, you cannot fix what you cannot see. Intravascular imaging transforms angioplasty from an art of approximation into a science of millimetric certainty.",
          attribution: "Dr. Manish Aggarwal · Director of Interventional Cardiology",
        },
      },
    ],
    faqs: [
      {
        question: "Does IVUS or OCT make the angioplasty procedure painful or longer?",
        answer:
          "Not at all. The miniature imaging catheter is introduced over the exact same hair-thin guidewire already used for the angioplasty. It causes zero physical sensation, is completely painless, and adds only 3 to 5 minutes to the total procedure time while dramatically improving safety.",
      },
      {
        question: "Why do IVUS and OCT result in stents that last longer?",
        answer:
          "A stent that is not expanded to its proper size or leaves gaps against the artery wall triggers turbulent blood flow, clot formation, and excessive tissue scarring. Intravascular imaging ensures 100% strut expansion and wall contact, which prevents in-stent restenosis and sudden stent thrombosis.",
      },
      {
        question: "Why do not all hospitals use IVUS and OCT for every stent?",
        answer:
          "Intravascular imaging systems require significant capital investment and specialized, sub-fellowship training to interpret microscopic cross-sectional light and ultrasound data. Dr. Aggarwal is a dedicated advocate for imaging-guided precision in Delhi NCR.",
      },
    ],
    keywords:
      "IVUS angioplasty Delhi NCR, OCT guided stenting Indirapuram, intravascular ultrasound Ghaziabad, optical coherence tomography Noida, precision coronary angioplasty, Dr Manish Aggarwal imaging PCI",
  },
  {
    slug: "rhythm-care",
    title: "Advanced Rhythm Care & Arrhythmia Management",
    tagline: "Restoring Electrical Cadence · AFib, SVT & Stroke Prevention",
    desc: "Comprehensive identification and eradication of cardiac electrical chaos. Advanced AFib rhythm restoration, electrophysiology pathways, and Left Atrial Appendage (LAA) closure for stroke prevention without blood thinners.",
    focus: "Atrial Fibrillation · Arrhythmia Mapping · LAA Closure · Stroke Prevention",
    highlights: [
      {
        label: "Core Pathologies",
        value: "Atrial Fibrillation (AFib), SVT, VT, Sick Sinus Syndrome, Frequent PVCs",
      },
      {
        label: "Stroke Defense",
        value: "Left Atrial Appendage (LAA) Closure (Watchman / Amulet device)",
      },
      {
        label: "Diagnostic Suite",
        value: "Continuous 24-48h Holter, Patch Telemetry, Electrophysiology (EP) Study",
      },
      {
        label: "Clinical Objective",
        value:
          "Sinus rhythm restoration & long-term protection against arrhythmia-induced heart failure",
      },
    ],
    patientProfile: [
      "Individuals experiencing sudden fluttering, skipped beats, racing pulse, or unpredictable flip-flopping sensations in the chest.",
      "Patients diagnosed with Atrial Fibrillation (paroxysmal or persistent) struggling with medication side effects, fatigue, or shortness of breath.",
      "AFib patients who cannot tolerate long-term blood thinners (anticoagulants) due to bleeding history, ulcers, active lifestyle, or fall risk.",
      "Patients with Supraventricular Tachycardia (SVT) or troublesome Premature Ventricular Contractions (PVCs) causing anxiety or declining pump function.",
      "Individuals experiencing unexplained dizzy spells, lightheadedness, or sudden drops in stamina during normal daily activities.",
    ],
    sections: [
      {
        heading: "The Danger of Electrical Chaos: When the Heart Loses Cadence",
        paragraphs: [
          "A racing or fluttering heart is far more than an annoying sensation or an anxiety trigger; it is often a sign of underlying electrical disarray. Cardiac arrhythmias—such as Atrial Fibrillation (AFib), Supraventricular Tachycardia (SVT), and frequent ventricular ectopy—disrupt the mechanical efficiency of the heart.",
          "When the heart beats erratically or at 150+ beats per minute, the chambers cannot fill properly between strokes. Over time, persistent arrhythmias cause chronic cardiac exhaustion, leading to arrhythmia-induced cardiomyopathy, irreversible chamber enlargement, and heart failure.",
          "At Yashoda Medicity, Indirapuram, Dr. Manish Aggarwal provides an integrated rhythm management program. Combining high-resolution continuous telemetry, electrophysiological evaluation, and structural interventions, our goal is to pinpoint and neutralize electrical instability before permanent heart damage occurs.",
        ],
      },
      {
        heading: "Atrial Fibrillation (AFib): Early Rhythm Control Prevents Remodeling",
        paragraphs: [
          "Atrial Fibrillation is the most common serious arrhythmia worldwide. Instead of contracting smoothly, the upper chambers quiver chaoticly at up to 400 to 600 electrical impulses per minute. In addition to severe fatigue and exercise intolerance, AFib allows blood to stagnate and pool in the left atrium, multiplying the risk of ischemic stroke by 500%.",
          "Dr. Aggarwal advocates for aggressive early rhythm control. The longer a heart remains in AFib, the more the atrial tissue fibroses and stretches—a phenomenon known as 'AFib begets AFib'. By deploying pharmacological therapy, synchronized electrical cardioversion, and coordinated catheter ablation referral pathways early, we restore natural sinus cadence, preserving the heart's natural pumping power.",
        ],
        bullets: [
          "Forensic Rhythm Monitoring: Utilizes cutting-edge digital patch monitors and extended Holter telemetry to detect silent, nocturnal, and intermittent paroxysmal arrhythmias.",
          "Cardiometabolic Risk Reversal: Addresses the underlying drivers of AFib—including obstructive sleep apnea, hypertension, visceral obesity, and metabolic dysregulation.",
          "Hemodynamic Protection: Restores ventricular filling time, relieving chronic fatigue, chest heaviness, and breathlessness.",
        ],
      },
      {
        heading:
          "Left Atrial Appendage (LAA) Closure: Permanent Stroke Shield Without Blood Thinners",
        paragraphs: [
          "In patients with non-valvular AFib, more than 90% of stroke-causing blood clots form in a small, finger-like pouch off the left atrium known as the Left Atrial Appendage (LAA). While oral anticoagulants (blood thinners like Eliquis, Xarelto, or Warfarin) effectively reduce stroke risk, they carry a lifelong penalty of major bleeding complications, gastrointestinal ulcers, and brain hemorrhage risks.",
          "Dr. Manish Aggarwal performs percutaneous Left Atrial Appendage (LAA) Closure using advanced devices such as the Watchman and Abbott Amulet. Through a single femoral vein puncture under echocardiographic guidance, a self-expanding nitinol barrier is implanted across the neck of the appendage, permanently sealing it off.",
          "Within 45 days, the body's natural endothelial cells grow over the device, permanently walling off the clot-forming pouch. Most patients can safely stop oral anticoagulants forever while maintaining world-class protection against debilitating strokes.",
        ],
        callout: {
          quote:
            "For patients with AFib who fear both strokes and major bleeding on blood thinners, LAA Closure offers the ultimate peace of mind: permanent mechanical stroke defense with zero bleeding penalty.",
          attribution: "Dr. Manish Aggarwal · Structural Heart & Interventional Specialist",
        },
      },
    ],
    faqs: [
      {
        question: "What are the common symptoms of Atrial Fibrillation (AFib)?",
        answer:
          "Common symptoms include an irregular, fluttering heartbeat, sudden episodes of racing pulse, unexplained exhaustion, shortness of breath upon light walking, lightheadedness, and a persistent sensation of anxiety in the chest. Some patients have 'silent AFib' with no noticeable palpitations.",
      },
      {
        question: "How does Left Atrial Appendage (LAA) Closure stop strokes?",
        answer:
          "Over 90% of stroke-causing blood clots in AFib originate inside the Left Atrial Appendage. LAA Closure places a permanent mechanical plug at the opening of this pouch through a simple vein puncture in the groin. Once sealed, blood cannot pool or form clots there, eliminating the primary source of cardiac stroke.",
      },
      {
        question: "Can I stop taking blood thinners after an LAA Closure procedure?",
        answer:
          "Yes. Once a post-procedure transesophageal echocardiogram (typically at 45 days) confirms that the device is fully seated and endothelialized, the vast majority of patients are safely transitioned off oral anticoagulants (blood thinners) and maintained on simple baby aspirin alone.",
      },
    ],
    keywords:
      "arrhythmia specialist Delhi NCR, atrial fibrillation treatment Indirapuram, LAA closure Watchman Ghaziabad, stroke prevention AFib Noida, electrophysiology cardiologist Delhi, Dr Manish Aggarwal rhythm care",
  },
];
