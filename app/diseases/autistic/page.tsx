"use client";
import Image from "next/image";
//  import Link from "next/link";   
import { useState } from 'react';

import playfair from "../../../fonts/playfair.module.css";

const Autism = () => {
  const [activeTab, setActiveTab] = useState("social");

  return (
    <main className="w-full h-full flex justify-center flex-col  bg-white ">
      <div className="w-full hidden lg:block text-center ">
        <h2 className="lg:text-[5vw] text-[6vw] text-white font-semibold relative z-10 font-[playfull] translate-y-[3vw]">
          Autistic Spectrum
        </h2>
        <Image
          src="/diseases-banner/autistic.webp"
          alt="hero image"
          objectFit="cover"
          width={1200}
          height={100}
          className="w-full  lg:mt-[-16vw] mt-[-25vw]  z-0"
          priority
          onLoad={() => {
            if (typeof window !== "undefined") {
              window.dispatchEvent(new Event("heroImageLoaded"));
            }
          }}
        />
      </div>

      <div className="w-full lg:hidden block text-center ">
        <Image
          src="/diseases-banner/autistic.webp"
          alt="hero image"
          objectFit="cover"
          width={1200}
          height={100}
          className="w-full     z-0"
          priority
          onLoad={() => {
            if (typeof window !== 'undefined') {
              window.dispatchEvent(new Event('heroImageLoaded'));
            }
          }}
        />
        <h2 className="lg:text-[5vw] text-[6vw] text-white font-semibold relative z-10 font-[playfull] mt-[-10vw] mb-10">
          Autistic Spectrum
        </h2>
      </div>

      {/* The Harsh Truth Section  */}
      <section className="bg-[#0E7EA0] rounded-full w-full h-full lg:px-40 px-10 lg:py-20 py-20 text-center lg:mt-[-20vw] mt-[-0vw]">
       
        <div className="flex flex-col lg:flex-row justify-center lg:gap-20 gap-10 items-center text-center mb-20">
          <p className="lg:text-[1.55vw] text-[3.5vw] font-medium text-left">
            Autism Spectrum Disorder (ASD) is a neurodevelopmental disorder characterized by difficulties in communication, social interaction, and behavior. It is called a spectrum disorder because it encompasses a wide range of symptoms and severity levels, from mild to severe.
          </p>

          <p className="lg:text-[1.55vw] text-[3.5vw] font-medium text-left">
            People with ASD often struggle with interpreting social cues, expressing emotions, and engaging in typical social interactions. Although autism is a lifelong condition, early diagnosis and intervention can significantly improve quality of life and help individuals acquire essential skills for daily functioning.
          </p>
        </div>

        
      </section>

      {/* Section */}
      <section className="bg-white w-full h-full lg:px-20 px-10 lg:py-20 py-10 text-center">
        <h2
          className={`text-[#0E7EA0] lg:text-[3.8vw] text-[7vw] font-bold ${playfair.className} mb-8`}
        >
          Causes of Autistic Disorders
        </h2>
        <p className="text-black lg:text-[1.25vw] text-[3.5vw] mb-10">
          The exact causes of ASD remain unknown; however, it is believed to result from a combination of genetic and environmental factors. Key contributing factors include:
        </p>

        <div className="grid lg:grid-cols-6 grid-cols-1 gap-4 mb-60">
          {/* Technique Card 1 */}
          <div className="[perspective:1000px] cursor-pointer ">
            <div className="relative w-full aspect-square transition-all duration-500 [transform-style:preserve-3d] hover:[transform:rotateY(180deg)]">
              <div className="absolute inset-0 bg-[#0E7EA0] w-full lg:lg:h-[50vh] rounded-xl p-6 text-white flex flex-col items-center justify-center [backface-visibility:hidden]">
                <h3 className="lg:text-[1.25vw] text-[4vw] font-bold">
                  Genetic Factors
                </h3>
              </div>
              <div className="absolute inset-0 bg-[#0E7EA0] w-full lg:lg:h-[50vh] rounded-xl p-6 text-white flex flex-col items-center justify-center [transform:rotateY(180deg)] [backface-visibility:hidden]">
                <p className="lg:text-[1vw] text-[3vw]">
                  Research indicates that genetics play a significant role, with a higher likelihood of ASD in individuals with a family history of the disorder.
                </p>
              </div>
            </div>
          </div>

          {/* Technique Card 2 */}
          <div className="[perspective:1000px] cursor-pointer">
            <div className="relative w-full aspect-square transition-all duration-500 [transform-style:preserve-3d] hover:[transform:rotateY(180deg)]">
              <div className="absolute inset-0 bg-[#FFD700] w-full lg:h-[50vh] rounded-xl p-6 text-black flex flex-col items-center justify-center [backface-visibility:hidden]">
                <h3 className="lg:text-[1.25vw] text-[4vw] font-bold">
                  Brain Structure and Development
                </h3>
              </div>
              <div className="absolute inset-0 bg-[#FFD700] w-full lg:h-[50vh] rounded-xl p-6 text-black flex flex-col items-center justify-center [transform:rotateY(180deg)] [backface-visibility:hidden]">
                <p className="lg:text-[1vw] text-[3vw]">
                  Differences in brain structure and neural connectivity are believed to contribute to ASD development.
                </p>
              </div>
            </div>
          </div>

          {/* Technique Card 3 */}
          <div className="[perspective:1000px] cursor-pointer">
            <div className="relative w-full aspect-square transition-all duration-500 [transform-style:preserve-3d] hover:[transform:rotateY(180deg)]">
              <div className="absolute inset-0 bg-[#0E7EA0]  w-full lg:h-[50vh] rounded-xl p-6 text-white flex flex-col items-center justify-center [backface-visibility:hidden]">
                <h3 className="lg:text-[1.25vw] text-[4vw] font-bold">
                  Prenatal and Perinatal Factors
                </h3>
              </div>
              <div className="absolute inset-0 bg-[#0E7EA0] w-full lg:h-[50vh] rounded-xl p-6 text-white flex flex-col items-center justify-center [transform:rotateY(180deg)] [backface-visibility:hidden]">
                <p className="lg:text-[1vw] text-[3vw]">
                  Prenatal exposure to environmental hazards—such as maternal infections, toxin exposure, or birth complications—may increase the risk of autism.
                </p>
              </div>
            </div>
          </div>

          {/* Technique Card 4 */}
          <div className="[perspective:1000px] cursor-pointer">
            <div className="relative w-full aspect-square transition-all duration-500 [transform-style:preserve-3d] hover:[transform:rotateY(180deg)]">
              <div className="absolute inset-0 bg-[#FFD700] w-full lg:h-[50vh] rounded-xl p-6 text-black flex flex-col items-center justify-center [backface-visibility:hidden]">
                <h3 className="lg:text-[1.25vw] text-[4vw] font-bold">
                  Immune System and Inflammation
                </h3>
              </div>
              <div className="absolute inset-0 bg-[#FFD700] w-full lg:h-[50vh] rounded-xl p-6 text-black flex flex-col items-center justify-center [transform:rotateY(180deg)] [backface-visibility:hidden]">
                <p className="lg:text-[1vw] text-[3vw]">
                  Some studies suggest that immune system dysfunction or inflammation during early brain development may contribute to ASD.
                </p>
              </div>
            </div>
          </div>

          {/* Technique Card 5 */}
          <div className="[perspective:1000px] cursor-pointer">
            <div className="relative w-full aspect-square transition-all duration-500 [transform-style:preserve-3d] hover:[transform:rotateY(180deg)]">
              <div className="absolute inset-0 bg-[#0E7EA0] w-full lg:h-[50vh] rounded-xl p-6 text-white flex flex-col items-center justify-center [backface-visibility:hidden]">
                <h3 className="lg:text-[1.25vw] text-[4vw] font-bold">
                  Environmental Triggers
                </h3>
              </div>
              <div className="absolute inset-0 bg-[#0E7EA0] w-full lg:h-[50vh] rounded-xl p-6 text-white flex flex-col items-center justify-center [transform:rotateY(180deg)] [backface-visibility:hidden]">
                <p className="lg:text-[1vw] text-[3vw]">
                  While not direct causes, environmental triggers like heavy metal exposure, pollution, and certain prenatal medications are being studied for their potential roles in ASD.
                </p>
              </div>
            </div>
          </div>

          {/* Technique Card 6 */}
          <div className="[perspective:1000px] cursor-pointer">
            <div className="relative w-full aspect-square transition-all duration-500 [transform-style:preserve-3d] hover:[transform:rotateY(180deg)]">
              <div className="absolute inset-0 bg-[#FFD700] w-full lg:h-[50vh] rounded-xl p-6 text-black flex flex-col items-center justify-center [backface-visibility:hidden]">
                <h3 className="lg:text-[1.25vw] text-[4vw] font-bold">
                  Epigenetics
                </h3>
              </div>
              <div className="absolute inset-0 bg-[#FFD700] w-full lg:h-[50vh] rounded-xl p-6 text-black flex flex-col items-center justify-center [transform:rotateY(180deg)] [backface-visibility:hidden]">
                <p className="lg:text-[1vw] text-[3vw]">
                  Epigenetic mechanisms—interactions between genetic susceptibility and environmental exposure—may alter gene expression, impacting brain development and contributing to autism.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/*  Section */}
      <section className="bg-white w-full h-full lg:px-60 px-10 lg:py-20 py-10 text-center">
        <h2
          className={`text-[#0E7EA0] lg:text-[3.5vw] text-[7vw] font-bold ${playfair.className} mb-12`}
        >
          Symptoms of Autism Spectrum Disorder
        </h2>
        <p className="text-black lg:text-[1.5vw] text-[3vw] mb-10">
          ASD signs greatly differ in terms of severity and presentation. Common
          signs generally fall into three broad categories, including social
          communication challenges, repetitive behavior, dominant restricted
          interests, and sensory sensitivities.
        </p>
        
        {/* Tab Buttons */}
        <div className="flex flex-col lg:flex-row justify-between gap-4 text-black mb-16">
          <button 
            onClick={() => setActiveTab("social")} 
            className={`px-4 py-2 rounded-lg transition-colors ${activeTab === "social" ? "bg-[#0E7EA0] text-white" : "bg-gray-100"}`}
          >
            Social Communication Challenges
          </button>
          <button 
            onClick={() => setActiveTab("repetitive")} 
            className={`px-4 py-2 rounded-lg transition-colors ${activeTab === "repetitive" ? "bg-[#0E7EA0] text-white" : "bg-gray-100"}`}
          >
            Repetitive Behaviors and Restricted Interests
          </button>
          <button 
            onClick={() => setActiveTab("sensory")} 
            className={`px-4 py-2 rounded-lg transition-colors ${activeTab === "sensory" ? "bg-[#0E7EA0] text-white" : "bg-gray-100"}`}
          >
            Sensory Processing Differences
          </button>
          <button 
            onClick={() => setActiveTab("cognitive")} 
            className={`px-4 py-2 rounded-lg transition-colors ${activeTab === "cognitive" ? "bg-[#0E7EA0] text-white" : "bg-gray-100"}`}
          >
            Cognitive and Emotional Differences
          </button>
        </div>

        {/* Tab Content */}
        <div className="flex flex-col lg:flex-row justify-between items-start">
          {/* Social Communication Tab */}
          {activeTab === "social" && (
            <div className="flex flex-col lg:flex-row justify-between items-center w-full">
              <div className="lg:w-1/2">
                <ul className="text-left text-black">
                  <li className="mb-8 border-b-[2px]">
                    Difficulty in interpreting social cues, facial expressions, and body language
                  </li>
                  <li className="mb-8 border-b-[2px]">
                    Restricted or inappropriate eye contact
                  </li>
                  <li className="mb-8 border-b-[2px]">
                    Delays in speech development or absence of verbal communication
                  </li>
                  <li className="mb-8 border-b-[2px]">
                    Struggling to sustain conversations or participate in mutual communication
                  </li>
                  <li className="mb-8 border-b-[2px]">
                    Prefer solo activities over social interaction
                  </li>
                  <li className="mb-8 border-b-[2px]">
                    Difficulty understanding jokes, sarcasm, or figurative language
                  </li>
                  <li className="mb-8 border-b-[2px]">
                    Challenges in forming and maintaining friendships
                  </li>
                </ul>
              </div>
              <div className="lg:w-[40%] w-[80vw] h-[40vh] lg:mt-0 mt-8">
                <Image 
                  src="https://images.pexels.com/photos/8942991/pexels-photo-8942991.jpeg" 
                  alt="Child with social communication challenges" 
                  width={500} 
                  height={300}
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>
            </div>
          )}

          {/* Repetitive Behaviors Tab */}
          {activeTab === "repetitive" && (
            <div className="flex flex-col lg:flex-row justify-between items-center w-full">
              <div className="lg:w-1/2">
                <ul className="text-left text-black">
                  <li className="mb-8 border-b-[2px]">Repetitive movements such as hand-flapping, rocking, or spinning</li>
                  <li className="mb-8 border-b-[2px]">Insistence on sameness and resistance to changes in routine</li>
                  <li className="mb-8 border-b-[2px]">Intense focus on specific subjects, objects, or tasks</li>
                  <li className="mb-8 border-b-[2px]">Excessive fixation or unusual preoccupation with certain items</li>
                  <li className="mb-8 border-b-[2px]">Echolalia, or repeating words/phrases without understanding their meaning</li>
                </ul>
              </div>
              <div className="lg:w-[40%] w-[80vw] h-[40vh] lg:mt-0 mt-8">
                <Image 
                  src="https://images.pexels.com/photos/6964103/pexels-photo-6964103.jpeg" 
                  alt="Child exhibiting repetitive behaviors" 
                  width={500} 
                  height={300}
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>
            </div>
          )}

          {/* Sensory Processing Tab */}
          {activeTab === "sensory" && (
            <div className="flex flex-col lg:flex-row justify-between items-center w-full">
              <div className="lg:w-1/2">
                <ul className="text-left text-black">
                  <li className="mb-8 border-b-[2px]">Hypersensitivity or hyposensitivity to sensory stimuli such as light, noise, touch, textures, or odors</li>
                  <li className="mb-8 border-b-[2px]">Extreme sensitivity to loud noises or bright lights</li>
                  <li className="mb-8 border-b-[2px]">Seeking sensory input through excessive touching or self-stimulatory behaviors</li>
                </ul>
              </div>
              <div className="lg:w-[40%] w-[80vw] h-[40vh] lg:mt-0 mt-8">
                <Image 
                  src="https://images.pexels.com/photos/8460370/pexels-photo-8460370.jpeg" 
                  alt="Child experiencing sensory processing differences" 
                  width={500} 
                  height={300}
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>
            </div>
          )}

          {/* Cognitive and Emotional Tab */}
          {activeTab === "cognitive" && (
            <div className="flex flex-col lg:flex-row justify-between items-center w-full">
              <div className="lg:w-1/2">
                <ul className="text-left text-black">
                  <li className="mb-8 border-b-[2px]">Difficulty understanding abstract concepts or figurative language</li>
                  <li className="mb-8 border-b-[2px]">Challenges with problem-solving and flexible thinking</li>
                  <li className="mb-8 border-b-[2px]">Emotional regulation difficulties, which may cause meltdowns or anxiety</li>
                </ul>
              </div>
              <div className="lg:w-[40%] w-[80vw] h-[40vh] lg:mt-0 mt-8">
                <Image 
                  src="https://images.pexels.com/photos/3755761/pexels-photo-3755761.jpeg" 
                  alt="Child showing cognitive differences" 
                  width={500} 
                  height={300}
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>
            </div>
          )}
        </div>
      </section>

<section className="bg-white w-full h-full lg:px-20 px-10 lg:py-20 py-10 text-center">
  <h2 className={`text-[#0E7EA0] lg:text-[4vw] text-[7vw] font-semibold  ${playfair.className}`}>
    Solutions for Managing Autism Spectrum Disorder
  </h2>
  <p className="text-black lg:text-[1.55vw] text-[3.5vw] font-medium mb-10">
    While ASD cannot be cured, numerous interventions and strategies can assist people with autism to live meaningful lives. Treatment options must be individually based on the person&apos;s particular needs and strengths.
  </p>

  <div className="grid lg:grid-cols-3 grid-cols-1 gap-4">
    {/* CARD TEMPLATE */}
    {[
      {
        title: "Early Intervention Programs",
        desc: "Early diagnosis and intervention—including speech therapy, occupational therapy, and behavioral therapy—can significantly improve developmental outcomes.",
        img: "https://images.pexels.com/photos/8613086/pexels-photo-8613086.jpeg",
        alt: "Therapist helping child with autism"
      },
      {
        title: "Applied Behavior Analysis (ABA)",
        desc: "Applied Behavior Analysis (ABA) is a widely used therapy that encourages desired behaviors and reduces challenging behaviors through structured techniques.",
        img: "https://images.pexels.com/photos/4101130/pexels-photo-4101130.jpeg",
        alt: "Therapist engaging in behavior therapy session"
      },
      {
        title: "Speech and Language Therapy",
        desc: "Speech and language therapy helps develop communication skills using verbal and non-verbal strategies, such as picture exchange systems and assistive communication devices.",
        img: "https://images.pexels.com/photos/8613072/pexels-photo-8613072.jpeg",
        alt: "Speech therapist working with a child"
      },
      {
        title: "Social Skills Training",
        desc: "Social skills training teaches navigating social interactions, building relationships, and understanding social rules.",
        img: "https://images.pexels.com/photos/8363132/pexels-photo-8363132.jpeg",
        alt: "Children interacting in a therapy setting"
      },
      {
        title: "Occupational Therapy",
        desc: "Occupational therapy improves sensory integration, motor skills, and daily living abilities to promote independence.",
        img: "https://images.pexels.com/photos/8613082/pexels-photo-8613082.jpeg",
        alt: "Therapist helping child with motor skills"
      },
      {
        title: "Adequate Sleep",
        desc: "Ensuring sufficient rest each night can help regulate emotions and reduce anxiety levels.",
        img: "https://images.pexels.com/photos/3933032/pexels-photo-3933032.jpeg",
        alt: "Child sleeping peacefully"
      },
      {
        title: "Cognitive-Behavioral Therapy (CBT)",
        desc: "Cognitive-Behavioral Therapy (CBT) helps manage anxiety, stress, and emotional regulation challenges.",
        img: "https://images.pexels.com/photos/4101143/pexels-photo-4101143.jpeg",
        alt: "Counselor talking to patient"
      },
      {
        title: "Educational Support and Individualized Learning Plans (IEPs)",
        desc: "Educational support through Individualized Education Programs (IEPs) addresses diverse learning styles and academic needs.",
        img: "https://images.pexels.com/photos/3184300/pexels-photo-3184300.jpeg",
        alt: "Teacher helping student in class"
      },
      {
        title: "Sensory Integration Therapy",
        desc: "Sensory integration therapy helps individuals manage sensory sensitivities and improve sensory processing.",
        img: "https://images.pexels.com/photos/8613071/pexels-photo-8613071.jpeg",
        alt: "Child playing with sensory toy"
      },
      {
        title: "Medication Management",
        desc: "While no medication cures autism, certain drugs can manage symptoms such as anxiety, hyperactivity, and sleep disturbances.",
        img: "https://images.pexels.com/photos/4058218/pexels-photo-4058218.jpeg",
        alt: "Close-up of prescribed pills"
      },
      {
        title: "Parental Support and Training",
        desc: "Parental support and training equip caregivers with strategies to promote their child’s development and well-being.",
        img: "https://images.unsplash.com/photo-1517841905240-472988babdf9",
        alt: "Parent helping child at home"
      },
      {
        title: "Structured Routine and Visual Supports",
        desc: "Structured routines, social stories, and visual schedules help individuals with ASD understand expectations and reduce anxiety.",
        img: "https://images.pexels.com/photos/8535247/pexels-photo-8535247.jpeg",
        alt: "Routine board with visual schedule"
      },
      {
        title: "Facilitating Special Interests and Strengths",
        desc: "Many individuals with ASD have special interests or talents; nurturing these strengths builds confidence and opens career opportunities.",
        img: "https://images.pexels.com/photos/4145352/pexels-photo-4145352.jpeg",
        alt: "Young boy building with blocks"
      },
      {
        title: "Community and Peer Support Groups",
        desc: "Participation in autism support groups provides emotional support, resources, and social interaction opportunities.",
        img: "https://images.pexels.com/photos/7422074/pexels-photo-7422074.jpeg",
        alt: "Support group sitting in circle"
      },
      {
        title: "Self-Care and Well-being",
        desc: "Encouraging self-care activities such as exercise, hobbies, and mindfulness promotes relaxation and overall well-being for individuals with ASD.",
        img: "https://images.pexels.com/photos/3822622/pexels-photo-3822622.jpeg",
        alt: "Person meditating peacefully"
      },
    ].map((item, i) => (
      <div key={i} className="bg-[#0E7EA0] rounded-3xl text-white text-center">
        <img
          src={item.img}
          alt={item.alt}
          width={300}
          height={200}
          className="w-full h-48 object-cover rounded-2xl mb-6"
        />
        <div className="p-6">
          <h3 className="text-lg font-bold mb-4">{item.title}</h3>
          <p className="text-sm">{item.desc}</p>
        </div>
      </div>
    ))}
  </div>
</section>


      {/* Footer Section */}
      {/* Prognosis and Future Outlook Section*/}
      <section className="bg-[#FFD266] w-full h-full lg:px-80 px-10 lg:pt-20 lg:pb-[50vw] pt-20 pb-50 mb-[-60vw] text-center z-0 ">
        <h2
          className={`text-[#0E7EA0] lg:text-[3.5vw] text-[8vw] font-bold ${playfair.className} mb-10`}
        >
          Conclusion
        </h2>
        <div className="flex flex-col lg:flex-row justify-between items-center text-left text-black gap-20 mb-50">
          <p>
            Autism Spectrum Disorder is a complex and diverse condition that profoundly shapes an individual&apos;s life experience. Although challenges exist, early intervention, personalized therapies, and supportive environments can greatly enhance quality of life.
          </p>
          <p>
            By focusing on strengths, fostering inclusivity, and providing adequate resources, society can create a more welcoming and supportive world for individuals with autism. Increased awareness and education are vital to ensuring that people with ASD receive the help they need to live fulfilling lives.
          </p>
        </div>
      </section>
    </main>
  );
};

export default Autism;
