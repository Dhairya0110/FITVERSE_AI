export interface BodybuildingLegend {
  name: string;
  title: string;
  quote: string;
  biography: string;
  achievements: string;
  philosophy: string;
  motivation: string;
  tip: string;
}

export const BODYBUILDING_LEGENDS: Record<string, BodybuildingLegend[]> = {
  en: [
    {
      name: "Arnold Schwarzenegger",
      title: "The Austrian Oak",
      quote: "The last three or four reps is what makes the muscle grow. This area of pain divides the champion from someone else who is not.",
      biography: "Born in Austria, rose to become a 7-time Mr. Olympia, legendary Hollywood action star, and Governor of California.",
      achievements: "7-time Mr. Olympia (1970-1975, 1980), 5-time Mr. Universe.",
      philosophy: "High volume, high frequency splits, mind-muscle connection, visualizing muscles growing like mountains.",
      motivation: "Work your butt off, break some rules, don't be afraid to fail, ignore the naysayers.",
      tip: "Squeeze the muscle at the absolute peak of contraction to trigger deep muscular hypertrophy."
    },
    {
      name: "Ronnie Coleman",
      title: "The King",
      quote: "Everybody wants to be a bodybuilder, but nobody wants to lift no heavy-ass weight.",
      biography: "Hailing from Louisiana, worked as a police officer while dominating bodybuilding with unmatched size and strength.",
      achievements: "8-time Mr. Olympia (1998-2005), 26 IFBB Professional wins.",
      philosophy: "Powerbuilding - combining raw powerlifting compounds (heavy squats/deadlifts) with standard volume splits.",
      motivation: "Ain't nothing to it but to do it. Push through the doubt and work hard every day.",
      tip: "Keep compound barbell movements as the foundation of your routine for absolute muscle thickness."
    },
    {
      name: "Jay Cutler",
      title: "Quad Stomp Master",
      quote: "I'm not training to be average. I'm training to win.",
      biography: "Born in Massachusetts, built a quad-dominant massive physique, becoming Ronnie Coleman's biggest rival and successor.",
      achievements: "4-time Mr. Olympia (2006, 2007, 2009, 2010), 3-time Arnold Classic Champion.",
      philosophy: "High density volume training, strict rest intervals, and immense daily caloric intake.",
      motivation: "Consistency and persistence. Success is built upon the reps you perform when you feel exhausted.",
      tip: "Use drop sets on your final exercise blocks to fully exhaust muscle fibers and draw in blood flow."
    },
    {
      name: "Chris Bumstead",
      title: "CBum",
      quote: "Champion is a mindset. It's about doing the work when no one is watching, even when you feel like quitting.",
      biography: "Canadian bodybuilding icon who revolutionized the modern era by dominating the Classic Physique division with vintage flow.",
      achievements: "5-time Classic Physique Mr. Olympia (2019-2023).",
      philosophy: "Aesthetic symmetry, vacuum control, progressive overload on basics, and mechanical tension.",
      motivation: "Vulnerability and resilience. True victory is conquering your own doubts, not just the competitors.",
      tip: "Focus on clean negative eccentric phases (3-second lowering) to stimulate myofibrillar tear."
    },
    {
      name: "Sangram Chougule",
      title: "The Maratha Pride",
      quote: "Commitment is doing what you said you would do, long after the mood you said it in has left you.",
      biography: "An electrical engineer from Pune who rose to become one of India's most celebrated international bodybuilders.",
      achievements: "Mr. Universe title winner (2012), 6-time Mr. India.",
      philosophy: "Relentless discipline, clean Indian home-cooked muscle fuel, and relentless heavy squatting.",
      motivation: "In India, we have talent; all we need is the focus to conquer the international stage.",
      tip: "Incorporate eggs, chicken, or high-quality paneer as main protein sources, and never miss your post-workout meal."
    },
    {
      name: "Varinder Singh Ghuman",
      title: "The Punjabi Giant",
      quote: "A vegetarian diet can build a world-class physique if you combine it with the right discipline.",
      biography: "A massive vegetarian bodybuilder from Punjab who also starred in movies and promoted healthy living across India.",
      achievements: "Mr. India title winner, Mr. Asia Runner-up.",
      philosophy: "Pure vegetarian mass-building, utilizing dairy, soy, and lentils to compile an enormous frame.",
      motivation: "Prove the skeptics wrong. Vegetarian power is real and highly sustainable.",
      tip: "Utilize high-quality whey protein, milk, and paneer to meet your daily protein targets without meat."
    },
    {
      name: "Thakur Anoop Singh",
      title: "The Cyber Warrior",
      quote: "Your body is a temple; treat it with respect and push its limits every day.",
      biography: "Pilot turned actor and pro bodybuilder who achieved international fame by winning gold at the world championships.",
      achievements: "Gold Medalist at World Bodybuilding Championship (2015).",
      philosophy: "Aesthetic symmetry, highly athletic conditioning, and matching fitness with performance arts.",
      motivation: "Diversify your skills. Your physical fitness is the engine that drives your entire career.",
      tip: "Focus on core vacuum controls and oblique exercises to slim your waist and look athletic."
    },
    {
      name: "Sam Sulek",
      title: "The Bulk Sensation",
      quote: "Just lift heavy, eat big, and stay consistent. The rest is details.",
      biography: "Modern college diver turned social media icon who popularised raw daily training vlogs with old-school focus.",
      achievements: "Global fitness influencer, over 5M subscribers, face of modern youth lifting.",
      philosophy: "Heavy basic compounds, high-calorie bulks, simple split execution with maximum consistency.",
      motivation: "Don't overthink it. Go to the gym, get the pump, and repeat tomorrow.",
      tip: "Keep your training intensity high and track your daily calorie intake to ensure progressive weight gain."
    }
  ]
};
