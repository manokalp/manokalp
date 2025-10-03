"use client";
import Image from "next/image";
// import Link from "next/link"; 
import { useState } from "react";
import playfair from "../../../fonts/playfair.module.css";

const NicotineTobacco = () => {
  const [activeTab, setActiveTab] = useState<SymptomCategory>("behavioral");

  const causes = [
    {
      name: "Cultural and Social Factors",
      description: "Deep-rooted cultural practices, especially in rural regions. Peer influence and social acceptance, particularly among adolescents. Easy availability and low cost of tobacco products.",
      image: "/genetic-factors.webp",
      link: "/genetic-factors",
      bgColor: "bg-[#0E7EA0]", // Blue background
      textColor: "text-white",
    },
    {
      name: "Psychological and Emotional Factors",
      description:
        "Use as a coping mechanism for stress or boredom. Perceived safety compared to smoking. Habitual association with meals, socializing, or breaks.",
      image: "/psychological-factors.webp",
      link: "/psychological-factors",
      bgColor: "bg-[#FFD700]", // Yellow background
      textColor: "text-black",
    },
    {
      name: "Biological Factors",
      description:
        "Rapid nicotine absorption creates a strong sense of pleasure. Regular use leads to tolerance, requiring higher doses for the same effect. Withdrawal symptoms (anxiety, irritability) reinforce continued use.",
      image: "/psychological-factors.webp",
      link: "/psychological-factors",
      bgColor: "bg-[#0E7EA0]", // Blue background
      textColor: "text-white",
    },
  ];

  const symptoms = {
    behavioral: [
      "Frequent use, even when aware of health risks",
      "Difficulty reducing or quitting despite multiple attempts",
      "Carrying tobacco products constantly and using them throughout the day"
    ],
    emotional: [
      "Irritability, anxiety, or restlessness when unable to use",
      "Emotional reliance on tobacco for stress relief",
      "Feelings of guilt or shame about the habit"
    ],
    cognitive: [
      "Persistent thoughts about chewing tobacco",
      "Difficulty concentrating without nicotine",
      "Rationalizing the habit as harmless"
    ],
    physical: [
      "Persistent bad breath and stained teeth",
      "Mouth sores, gum inflammation, or thick white patches (leukoplakia)",
      "Jaw pain, difficulty swallowing, or voice changes"
    ]
  };

  const solutionsData = [
    {
      title: "Medical Interventions",
      points: [
        "Nicotine Replacement Therapy (NRT): Nicotine gum or lozenges for gradual reduction",
        "Prescription Medications: Varenicline (Chantix) or bupropion (Zyban) to reduce cravings",
        "Regular dental check-ups to monitor oral health"
      ],
      image: "https://images.unsplash.com/photo-1584982751601-97dcc096659c?q=80&w=2672&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Psychotherapeutic Interventions",
      points: [
        "Cognitive Behavioral Therapy (CBT) to identify triggers and develop coping skills",
        "Motivational Enhancement Therapy (MET) to strengthen commitment to quitting",
        "Supportive Counseling to rebuild self-esteem and emotional resilience"
      ],
      image: "https://images.unsplash.com/photo-1493836512294-502baa1986e2?q=80&w=2690&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Behavioral and Lifestyle Strategies",
      points: [
        "Setting a quit date and gradually reducing use",
        "Avoiding triggers such as social gatherings where tobacco is used",
        "Regular physical exercise to reduce cravings and improve mood",
        "Replacing tobacco with sugar-free gum or herbal alternatives"
      ],
      image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Complementary Interventions",
      points: [
        "Peer support groups for shared experiences and accountability",
        "Family education to create a supportive environment",
        "Digital apps for tracking progress and maintaining motivation"
      ],
      image: "https://images.unsplash.com/photo-1551076805-e1869033e561?q=80&w=2532&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    }
  ];
  

  

  type SymptomCategory = keyof typeof symptoms;

  return (
    <main className="w-full h-full flex justify-center flex-col  bg-white ">
      {/* Hero Desktop  */}
      <div className="w-full hidden lg:block text-center ">
        <h1 className="lg:text-[5vw] text-[6vw] text-white font-semibold relative z-10 font-[playfull] translate-y-[3vw]">
        Nicotine (Tobacco Chewing)
        </h1>
        <Image
          src="/diseases-banner/nicotine-tobacco.webp"
          alt="tobacco chewing hero image"
          objectFit="cover"
          width={1200}
          height={100}
          className="w-full  lg:mt-[-16vw] mt-[-25vw] z-0"
          priority
          onLoad={() => {
            if (typeof window !== "undefined") {
              window.dispatchEvent(new Event("heroImageLoaded"));
            }
          }}
        />
      </div>

      {/* Hero Mobile  */}
      <div className="w-full lg:hidden block text-center ">
        <Image
          src="/diseases-banner/nicotine-tobacco.webp"
          alt="tobacco chewing hero image"
          objectFit="cover"
          width={1200}
          height={100}
          className="w-full z-0"
          priority
          onLoad={() => {
            if (typeof window !== "undefined") {
              window.dispatchEvent(new Event("heroImageLoaded"));
            }
          }}
        />
        <h1 className="lg:text-[5vw] text-[6vw] text-white font-semibold relative z-10 font-[playfull] mt-[-10vw] mb-10">
        Nicotine (Tobacco Chewing)
        </h1>
      </div>

      {/* The Harsh Truth Section  */}
      <section className="bg-[#0E7EA0] rounded-full w-full h-full lg:px-40 px-10 lg:py-20 py-20 text-center lg:mt-[-20vw] mt-[-0vw]">
       
        <div className="flex flex-col lg:flex-row justify-center lg:gap-20 gap-10 items-center text-center mb-20">
          <p className="lg:text-[1.55vw] text-[3.5vw] font-medium text-left">
          Nicotine dependence through tobacco chewing is a widespread and culturally ingrained practice, especially in India and other developing regions. While many view chewing tobacco as a safer alternative to smoking, it is equally addictive and poses severe health risks.
          </p>
          <p className="lg:text-[1.55vw] text-[3.5vw] font-medium text-left">
          Tobacco chewing is not just a habit—it is a form of nicotine dependence with significant physical, psychological, and social consequences.
          </p>
        </div>

        
      </section>

      {/* Color Section */}
      <section className="bg-white w-full h-full lg:px-20 px-10 lg:py-20 py-10 text-center">
        {/* Title */}
        <h2
          className="text-[#0E7EA0] lg:text-[3.8vw] text-[7vw] font-bold mb-8"
          style={{ fontFamily: "Playfair" }}
        >
          Causes of Tobacco Chewing Dependence
        </h2>
        <p className="text-black lg:text-[1.0vw] text-[3.5vw] mb-10">
        Dependence on chewing tobacco is driven by a combination of cultural, psychological, and physiological factors.
        </p>

        {/* Causes Grid */}
        <div className="grid lg:grid-cols-3 grid-cols-1 gap-4 max-w-5xl mx-auto">
          {causes.map((cause, index) => (
            <div key={index} className="[perspective:1000px] cursor-pointer">
              <div className="relative w-full aspect-square transition-all duration-500 [transform-style:preserve-3d] hover:[transform:rotateY(180deg)]">
                {/* Front Side */}
                <div
                  className={`absolute inset-0 ${cause.bgColor} w-full lg:h-[50vh] rounded-xl p-6 ${cause.textColor} flex flex-col items-center justify-center [backface-visibility:hidden]`}
                >
                  <h3 className="lg:text-[1.0vw] text-[4vw] font-bold">
                    {cause.name}
                  </h3>
                </div>
                {/* Back Side */}
                <div
                  className={`absolute inset-0 ${cause.bgColor} w-full lg:h-[50vh] rounded-xl p-6 ${cause.textColor} flex flex-col items-center justify-center [transform:rotateY(180deg)] [backface-visibility:hidden]`}
                >
                  <p className="lg:text-[1vw] text-[3vw] text-center">
                    {cause.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Tab Section */}
      <section className="bg-white w-full h-full lg:px-40 px-10 lg:pt-35 py-10 text-center">
        <h2
          className={`text-[#0E7EA0] lg:text-[3.5vw] text-[7vw] font-bold ${playfair.className} mb-8`}
        >
          Symptoms of Tobacco Chewing Dependence
        </h2>

        <p className="text-black lg:text-[1.5vw] text-[3vw] mb-10">
          Tobacco chewing dependence can manifest through physical, behavioral, and emotional signs.
        </p>

        <div className="flex flex-col lg:flex-row justify-center gap-4 text-black mb-16">
          {Object.keys(symptoms).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab as SymptomCategory)}
              className={`px-4 py-2 rounded-lg transition-all ${
                activeTab === tab
                  ? "bg-[#0E7EA0] text-white"
                  : "hover:bg-gray-100"
              }`}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)} Signs
            </button>
          ))}
        </div>

        <div className="flex flex-col lg:flex-row justify-center items-center gap-8">
          <div className="lg:w-1/2">
            <ul className="text-left text-black">
              {symptoms[activeTab].map((symptom, index) => (
                <li key={index} className="mb-8 border-b-[2px] pb-2">
                  {symptom}
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:w-1/2 h-[50vh] relative overflow-hidden rounded-xl">
            <Image
              src={`/diseases/unhappyness/${
                activeTab === "behavioral"
                  ? "1"
                  : activeTab === "emotional"
                  ? "2"
                  : activeTab === "cognitive"
                  ? "3"
                  : "4"
              }.webp`}
              alt={`${activeTab} symptoms of tobacco chewing dependence`}
              layout="fill"
              objectFit="cover"
              className="transition-opacity duration-300 cursor-pointer rounded-2xl border-black border-1 object-center"
            />
          </div>
        </div>
      </section>

      {/* Cards-2 Section */}
      <section className="bg-white w-full h-full lg:px-20 px-10 lg:py-30 py-10 text-center">
        <h2
          className={`text-[#0E7EA0] lg:text-[4vw] text-[7vw] font-semibold ${playfair.className}`}
        >
          Solutions for Managing Tobacco Chewing Dependence
        </h2>

        <p className="text-black lg:text-[1.55vw] text-[3.5vw] font-medium mb-10">
        Effective treatment for tobacco chewing dependence involves a combination of medical, psychological, and lifestyle interventions.
        </p>

        <div className="grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-4">
          {solutionsData.map((solution, index) => (
            <div
              key={index}
              className="bg-[#0E7EA0] rounded-3xl text-white text-center"
            >
              <Image
                src={solution.image}
                alt={solution.title}
                width={300}
                height={200}
                className="w-full h-48 object-cover rounded-2xl mb-6"
              />
              <div className="p-6">
                <h3 className="text-lg font-bold mb-4 text-[#FFD066]">
                  {solution.title}
                </h3>
                <ul className="text-left text-sm list-none">
                  {solution.points.map((point, i) => (
                    <li key={i} className="mb-3 flex items-start">
                      <span className="text-[#FFD066] mr-2 text-base">&#10148;</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer Section */}
      {/* Prognosis and Future Outlook Section*/}
      {/* <section className="bg-[#FFD266] w-full h-full lg:px-80 px-10 lg:pt-20 lg:pb-[50vw] pt-20 pb-50 mb-[-60vw] text-center z-0 ">
        <h2 className={`text-[#0E7EA0] lg:text-[3.5vw] text-[8vw] font-bold ${playfair.className} mb-10`}>Recovery and Outlook</h2>
        <div className="flex flex-col lg:flex-row justify-between items-center text-left text-black gap-20 mb-50">
            <p className="lg:text-[1.2vw] text-[3.5vw]">Recovery from tobacco chewing addiction is achievable with the right support. The journey requires patience and persistence, with many individuals successfully overcoming their dependency through comprehensive cessation strategies tailored to address the unique aspects of smokeless tobacco use.</p>
            <p className="lg:text-[1.2vw] text-[3.5vw]">While relapses may occur during the recovery process, they represent learning opportunities rather than failures. With appropriate medical guidance, behavioral techniques, and social support, individuals can heal from oral health damage and substantially reduce their cancer risk after quitting tobacco chewing.</p>
        </div>
      </section> */}
    </main>
  );
};

export default NicotineTobacco;
