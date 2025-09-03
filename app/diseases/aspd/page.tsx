"use client";
import Image from "next/image";
// import Link from "next/link"
import { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import playfair from "../../../fonts/playfair.module.css";

const carouselData = [
  {
    title: "Psychosocial Factors",
    items: [
      "Poor attachment development in early childhood",
      "Limited opportunities for developing prosocial behaviors",
      "Peer relationship reinforcement of antisocial behavior",
      "Substance use, which can enhance antisocial behavior",
    ],
    background: "/background1.png",
  },
  {
    title: "Genetic And Neurobiological Factors",
    items: [
      "Heritability reports suggest a genetic component, twin studies revealing antisocial traits are moderately to highly heritable",
      "Neuroimaging research has identified structural and functional deficits in brain regions responsible for emotional processing, impulse regulation, and moral judgment",
      "Neuroimaging studies show altered structure and function in the prefrontal cortex (associated with executive functioning), amygdala (emotion processing), and anterior cingulate cortex (empathy and moral reasoning)",
      "Neurotransmitter imbalances like serotonin, dopamine, and norepinephrine have been implicated",
    ],
    background: "/background2.png",
  },
  {
    title: "Environmental And Developmental Factors",
    items: [
      "Child abuse, such as physical and sexual abuse and neglect",
      "Family pathology and exposure to violence or criminality",
      "Poverty and socio-economic disadvantage",
      "Early behavioral issues, particularly conduct disorder of childhood or adolescence",
      "Inconsistent parenting or excessive exposure to discipline",
    ],
    background: "/background3.png",
  },
];

const ASPD = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [activeTab, setActiveTab] = useState("interpersonal");
  const [activeTreatmentTab, setActiveTreatmentTab] = useState("psychotherapy");

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselData.length);
  };

  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + carouselData.length) % carouselData.length
    );
  };
  return (
    <main className="w-full h-full flex justify-center flex-col  bg-white ">
      {/* ASPD Hero Desktop  */}

      <div className="w-full hidden lg:block text-center ">
        <h2 className="lg:text-[5vw] text-[6vw] text-[#0E7EA0] mt-[5vw] font-semibold relative z-10 font-[playfull]">
          Antisocial Personality Disorder
          <br /> (ASPD)
        </h2>
        <Image
          src="/diseases-banner/asdp.webp"
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

      {/* ASPD Hero Mobile  */}

      <div className="w-full lg:hidden block text-center ">
        <Image
          src="/diseases-banner/asdp.webp"
          alt="hero image"
          objectFit="cover"
          width={1200}
          height={100}
          className="w-full    z-0"
          priority
          onLoad={() => {
            if (typeof window !== "undefined") {
              window.dispatchEvent(new Event("heroImageLoaded"));
            }
          }}
        />
        <h2 className="lg:text-[5vw] text-[6vw] text-[#0E7EA0] font-semibold relative z-10 mt-[-20vw] mb-10 font-[playfull]">
          Antisocial Personality Disorder
          <br /> (ASPD)
        </h2>
      </div>

      {/* The Harsh Truth Section  */}
      <section className="bg-[#0E7EA0] rounded-full w-full h-full lg:px-40 px-10 lg:py-40 py-20 text-center lg:mt-[-20vw] mt-[-4vw]">
        <div className="flex flex-col lg:flex-row justify-center lg:gap-40 gap-10 items-center text-center mb-20">
          <p className="lg:text-[1.55vw] text-[3.5vw] font-medium text-left">
            Antisocial Personality Disorder (ASPD) is a complex psychiatric
            disorder characterized by a persistent pattern of disrespect and
            disregard for others&apos; rights. ASPD individuals are more likely
            to demonstrate lack of empathy, manipulativeness, and lack of
            concern for society&apos;s norms without guilt. Even though the
            disorder affects approximately 1-4% of the general population, it is
            disproportionately represented in prisons, where studies indicate
            ASPD prevalence in prison populations ranges from 15-25%, with
            antisocial traits being more common but not meeting full diagnostic
            criteria.
          </p>

          <p className="lg:text-[1.55vw] text-[3.5vw] font-medium text-left">
            ASPD is one of the DSM-5 Cluster B personality disorders, such as
            borderline, histrionic, and narcissistic personality disorders. ASPD
            is among the most challenging mental health conditions to treat
            because individuals with the disorder lack awareness of what they
            are doing and are not typically motivated to see the doctor or
            receive treatment.
          </p>
        </div>
      </section>

      {/* Causes and Risks */}
      <section className="bg-white text-center  w-full h-full lg:px-20 px-4 py-20">
        <h2
          className={`text-[#0E7EA0] lg:text-[5vw] text-[10vw] ${playfair.className}`}
        >
          Causes and Risk Factors
        </h2>
        <p className="text-black lg:text-[1.5vw] text-[4vw]">
          The causation of ASPD is a complex interplay of biological,
          psychological, and environmental components:
        </p>
      </section>

      {/* Carousel  */}
      <div className="relative w-full lg:h-[110vh] h-[100vh] overflow-hidden bg-white">
        {carouselData.map((slide, index) => (
          <div
            key={index}
            className={`absolute w-full h-full transition-opacity duration-500 ${
              index === currentIndex
                ? "opacity-100 scale-100"
                : "opacity-0 scale-95"
            }`}
            style={{
              backgroundImage: `url(${slide.background})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="w-full h-full bg-WHITE bg-opacity-60 flex flex-col justify-center items-center px-4 lg:px-10 py-6 lg:py-10">
              <h2 className="text-[7vw] md:text-[4vw] text-black font-semibold mb-6 lg:mb-12 font-[playfair] text-center">
                {slide.title}
              </h2>
              <div className="flex flex-col md:flex-row justify-center space-y-6 md:space-y-0 md:space-x-4 w-full">
                {slide.items.map((item, i) => (
                  <div
                    key={i}
                    className={`p-4 lg:p-6 w-[90vw] mx-auto md:w-[16vw] min-h-[15vh] md:h-[60vh] flex items-center justify-center text-center font-medium rounded-xl ${
                      i % 2 === 0
                        ? "bg-[#0E7EA0] text-white"
                        : "bg-yellow-400 text-black"
                    } shadow-lg`}
                  >
                    <p className="text-[3.8vw] md:text-[1vw]">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
        <button
          onClick={handlePrev}
          className="absolute left-4 md:left-8 lg:top-1/2 top-[5%] transform -translate-y-1/2 text-white bg-black bg-opacity-50 p-3 lg:p-4 rounded-full cursor-pointer z-10"
        >
          <FaArrowLeft size={20} className="lg:w-6 lg:h-6 w-4 h-4" />
        </button>
        <button
          onClick={handleNext}
          className="absolute right-4 md:right-8 lg:top-1/2 top-[5%] transform -translate-y-1/2 text-white bg-black bg-opacity-50 p-3 lg:p-4 rounded-full cursor-pointer z-10"
        >
          <FaArrowRight size={20} className="lg:w-6 lg:h-6 w-4 h-4" />
        </button>
      </div>

      {/* Quick Fix Links  */}
      <section className="bg-white w-full h-full lg:px-40 px-10 lg:py-20 py-10 text-center">
        <h2
          className={`text-[#0E7EA0] lg:text-[4vw] text-[7vw] ${playfair.className}`}
        >
          Clinical Symptoms and Diagnosis Criteria
        </h2>
        <p className="text-black lg:text-[1.5vw] text-[3vw] mb-10">
          DSM-5 requires ALL of the following for ASPD diagnosis:
        </p>
        <div className="grid lg:grid-cols-3 grid-cols-1 gap-8">
          {/* Card 1 */}
          <div className="bg-[#0E7EA0] rounded-3xl  text-white text-center">
            <Image
              src="/quick_links/2.webp"
              alt="stressed person"
              width={300}
              height={200}
              className="w-full h-48 object-cover rounded-2xl mb-6"
            />
            <div className="p-6">
              <h3 className="text-xl font-bold mb-4">
                Age 18 or older with pervasive pattern of disregard for others&apos; rights since age 15, with at least 3 of 7 specific criteria
              </h3>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-[#FFD700] rounded-3xl  text-black text-center">
            <Image
              src="/quick_links/1.webp"
              alt="person meditating"
              width={300}
              height={200}
              className="w-full h-48 object-cover rounded-2xl mb-6"
            />
            <div className="p-6">
              <h3 className="text-xl font-bold mb-4">
                Evidence of conduct disorder with onset before age 15
              </h3>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-[#0E7EA0] rounded-3xl text-white text-center">
            <Image
              src="https://images.pexels.com/photos/5699454/pexels-photo-5699454.jpeg"
              alt="people communicating"
              width={300}
              height={200}
              className="w-full h-48 object-cover rounded-2xl mb-6"
            />
            <div className="p-6">
              <h3 className="text-xl font-bold mb-4">
                Antisocial behavior not exclusively during schizophrenia or bipolar episodes
              </h3>
            </div>
          </div>
        </div>
      </section>

      {/* Individuals with ASPD Section */}
      <section className="bg-white w-full h-full lg:px-40 px-10 lg:py-20 py-10 text-center">
        <h2
          className={`text-[#0E7EA0] lg:text-[3.5vw] text-[7vw] font-bold ${playfair.className} mb-12`}
        >
          Individuals with ASPD typically manifest with a number of these
          behavioral tendencies:
        </h2>

        {/* Tab Buttons */}
        <div className="flex flex-col lg:flex-row justify-between gap-4 text-black mb-16">
          <button
            onClick={() => setActiveTab("interpersonal")}
            className={`px-4 py-2 rounded-lg transition-colors ${
              activeTab === "interpersonal"
                ? "bg-[#0E7EA0] text-white"
                : "bg-gray-100"
            }`}
          >
            Interpersonal Dysfunction
          </button>
          <button
            onClick={() => setActiveTab("behavioral")}
            className={`px-4 py-2 rounded-lg transition-colors ${
              activeTab === "behavioral"
                ? "bg-[#0E7EA0] text-white"
                : "bg-gray-100"
            }`}
          >
            Behavioral Issues
          </button>
          <button
            onClick={() => setActiveTab("emotional")}
            className={`px-4 py-2 rounded-lg transition-colors ${
              activeTab === "emotional"
                ? "bg-[#0E7EA0] text-white"
                : "bg-gray-100"
            }`}
          >
            Emotional Characteristics
          </button>
          <button
            onClick={() => setActiveTab("cognitive")}
            className={`px-4 py-2 rounded-lg transition-colors ${
              activeTab === "cognitive"
                ? "bg-[#0E7EA0] text-white"
                : "bg-gray-100"
            }`}
          >
            Cognitive Patterns
          </button>
        </div>

        {/* Tab Content */}
        <div className="flex flex-col lg:flex-row justify-between items-start">
          {/* Interpersonal Dysfunction Tab */}
          {activeTab === "interpersonal" && (
            <div className="flex flex-col lg:flex-row justify-between items-center w-full">
              <div className="lg:w-1/2">
                <ul className="text-left text-black">
                  <li className="mb-8 border-b-[2px]">
                    Empathy deficiency and callousness towards feelings of
                    others
                  </li>
                  <li className="mb-8 border-b-[2px]">
                    Exploitation and manipulation for self-interest
                  </li>
                  <li className="mb-8 border-b-[2px]">
                    Superficial charm and deceitfulness
                  </li>
                  <li className="mb-8 border-b-[2px]">
                    Lack of establishing long-term, meaningful relationships
                  </li>
                  <li className="mb-8 border-b-[2px]">
                    Inability to maintain consistent work behavior
                  </li>
                  <li className="mb-8 border-b-[2px]">
                    Disregard for social norms and boundaries
                  </li>
                </ul>
              </div>
              <div className="lg:w-[40%] w-[80vw] h-[40vh] lg:mt-0 mt-8">
                <Image
                  src="https://images.pexels.com/photos/5699425/pexels-photo-5699425.jpeg"
                  alt="Interpersonal dysfunction"
                  width={500}
                  height={300}
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>
            </div>
          )}

          {/* Behavioral Issues Tab */}
          {activeTab === "behavioral" && (
            <div className="flex flex-col lg:flex-row justify-between items-center w-full">
              <div className="lg:w-1/2">
                <ul className="text-left text-black">
                  <li className="mb-8 border-b-[2px]">
                    Repeated criminal behavior or legal problems
                  </li>
                  <li className="mb-8 border-b-[2px]">
                    Impulsivity and failure to plan ahead
                  </li>
                  <li className="mb-8 border-b-[2px]">
                    Aggressiveness and irritability leading to physical fights
                  </li>
                  <li className="mb-8 border-b-[2px]">
                    Reckless disregard for safety of self or others
                  </li>
                  <li className="mb-8 border-b-[2px]">
                    Consistent irresponsibility in financial obligations
                  </li>
                  <li className="mb-8 border-b-[2px]">
                    Pattern of substance abuse and risky behaviors
                  </li>
                </ul>
              </div>
              <div className="lg:w-[40%] w-[80vw] h-[40vh] lg:mt-0 mt-8">
                <Image
                  src="https://images.pexels.com/photos/6975523/pexels-photo-6975523.jpeg"
                  alt="Behavioral issues"
                  width={500}
                  height={300}
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>
            </div>
          )}

          {/* Emotional Characteristics Tab */}
          {activeTab === "emotional" && (
            <div className="flex flex-col lg:flex-row justify-between items-center w-full">
              <div className="lg:w-1/2">
                <ul className="text-left text-black">
                  <li className="mb-8 border-b-[2px]">
                    Lack of remorse or guilt for harmful actions
                  </li>
                  <li className="mb-8 border-b-[2px]">
                    Emotional shallowness or limited range of emotions
                  </li>
                  <li className="mb-8 border-b-[2px]">
                    Callous attitudes toward other&apos;s suffering
                  </li>
                  <li className="mb-8 border-b-[2px]">
                    Heightened feelings of grandiosity and self-importance
                  </li>
                  <li className="mb-8 border-b-[2px]">
                    Low frustration tolerance and frequent anger
                  </li>
                  <li className="mb-8 border-b-[2px]">
                    Inability to experience genuine emotional intimacy
                  </li>
                </ul>
              </div>
              <div className="lg:w-[40%] w-[80vw] h-[40vh] lg:mt-0 mt-8">
                <Image
                  src="https://images.pexels.com/photos/1058478/pexels-photo-1058478.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Emotional characteristics"
                  width={500}
                  height={300}
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>
            </div>
          )}

          {/* Cognitive Patterns Tab */}
          {activeTab === "cognitive" && (
            <div className="flex flex-col lg:flex-row justify-between items-center w-full">
              <div className="lg:w-1/2">
                <ul className="text-left text-black">
                  <li className="mb-8 border-b-[2px]">
                    Externalizing blame for own failures or mistakes
                  </li>
                  <li className="mb-8 border-b-[2px]">
                    Distorted moral reasoning and rationalization of harmful
                    conduct
                  </li>
                  <li className="mb-8 border-b-[2px]">
                    Failure to learn from negative experiences
                  </li>
                  <li className="mb-8 border-b-[2px]">
                    Chronic lying and manipulative thinking
                  </li>
                  <li className="mb-8 border-b-[2px]">
                    Inability to consider long-term consequences
                  </li>
                  <li className="mb-8 border-b-[2px]">
                    Minimization of personal responsibility
                  </li>
                </ul>
              </div>
              <div className="lg:w-[40%] w-[80vw] h-[40vh] lg:mt-0 mt-8">
                <Image
                  src="https://images.pexels.com/photos/3760529/pexels-photo-3760529.jpeg"
                  alt="Cognitive patterns"
                  width={500}
                  height={300}
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Treatment Plans and Interventions Section */}
      <section className="bg-white w-full h-full lg:px-40 px-10 lg:py-20 py-10 text-center">
        <h2
          className={`text-[#0E7EA0] font-bold lg:text-[3.5vw] text-[7vw] ${playfair.className} `}
        >
          Treatment Plans and Interventions
        </h2>
        <p className="text-black lg:text-[1.5vw] text-[3vw]  mb-12">
          Treatment outcomes remain modest, with limited evidence for significant personality change. Focus is on symptom management and harm reduction rather than personality restructuring:
        </p>

        {/* Tab Buttons */}
        <div className="flex flex-col lg:flex-row justify-between gap-4 text-black mb-16">
          <button
            onClick={() => setActiveTreatmentTab("psychotherapy")}
            className={`px-4 py-2 rounded-lg transition-colors ${
              activeTreatmentTab === "psychotherapy"
                ? "bg-[#0E7EA0] text-white"
                : "bg-gray-100"
            }`}
          >
            Psychotherapeutic Interventions
          </button>
          <button
            onClick={() => setActiveTreatmentTab("pharmacological")}
            className={`px-4 py-2 rounded-lg transition-colors ${
              activeTreatmentTab === "pharmacological"
                ? "bg-[#0E7EA0] text-white"
                : "bg-gray-100"
            }`}
          >
            Pharmacological Approaches
          </button>
          <button
            onClick={() => setActiveTreatmentTab("integrated")}
            className={`px-4 py-2 rounded-lg transition-colors ${
              activeTreatmentTab === "integrated"
                ? "bg-[#0E7EA0] text-white"
                : "bg-gray-100"
            }`}
          >
            Integrated Programs
          </button>
          <button
            onClick={() => setActiveTreatmentTab("early")}
            className={`px-4 py-2 rounded-lg transition-colors ${
              activeTreatmentTab === "early"
                ? "bg-[#0E7EA0] text-white"
                : "bg-gray-100"
            }`}
          >
            Early Intervention
          </button>
        </div>

        {/* Tab Content */}
        <div className="flex flex-col lg:flex-row justify-between items-start">
          {/* Psychotherapeutic Interventions Tab */}
          {activeTreatmentTab === "psychotherapy" && (
            <div className="flex flex-col lg:flex-row justify-between items-center w-full">
              <div className="lg:w-[40%] w-[80vw] h-[40vh] lg:mb-0 mb-8">
                <Image
                  src="https://images.pexels.com/photos/7176026/pexels-photo-7176026.jpeg"
                  alt="Psychotherapeutic interventions"
                  width={500}
                  height={300}
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>
              <div className="lg:w-1/2">
                <ul className="text-left text-black">
                  <li className="mb-8 border-b-[2px]">
                    Cognitive Behavioral Therapy (CBT) to identify and alter
                    antisocial patterns of thinking and learn prosocial skills
                  </li>
                  <li className="mb-8 border-b-[2px]">
                    Dialectical Behavior Therapy for emotional dysregulation and
                    impulsivity
                  </li>
                  <li className="mb-8 border-b-[2px]">
                    Mentalization-Based Treatment to develop the capacity to
                    understand one&apos;s own and others&apos; mental states
                  </li>
                  <li className="mb-8 border-b-[2px]">
                    Contingency management interventions that reinforce good
                    behaviors
                  </li>
                  <li className="mb-8 border-b-[2px]">
                    Schema-focused therapy targeting core maladaptive beliefs
                  </li>
                </ul>
              </div>
            </div>
          )}

          {/* Pharmacological Approaches Tab */}
          {activeTreatmentTab === "pharmacological" && (
            <div className="flex flex-col lg:flex-row justify-between items-center w-full">
              <div className="lg:w-[40%] w-[80vw] h-[40vh] lg:mb-0 mb-8">
                <Image
                  src="https://images.pexels.com/photos/3873169/pexels-photo-3873169.jpeg"
                  alt="Pharmacological approaches"
                  width={500}
                  height={300}
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>
              <div className="lg:w-1/2">
                <ul className="text-left text-black">
                  <li className="mb-8 border-b-[2px]">
                    Mood stabilizers (lithium, anticonvulsants) may reduce impulsivity and aggression
                  </li>
                  <li className="mb-8 border-b-[2px]">
                    Antipsychotics only for severe aggression or psychotic features
                  </li>
                  <li className="mb-8 border-b-[2px]">
                    SSRIs for comorbid depression/anxiety, not core ASPD symptoms
                  </li>
                  <li className="mb-8 border-b-[2px]">
                    Medications for co-occurring substance use disorders
                  </li>
                  <li className="mb-8 border-b-[2px]">
                    Note: No medications specifically approved for ASPD;
                    treatment targets specific symptoms or comorbid conditions
                  </li>
                </ul>
              </div>
            </div>
          )}

          {/* Integrated Programs Tab */}
          {activeTreatmentTab === "integrated" && (
            <div className="flex flex-col lg:flex-row justify-between items-center w-full">
              <div className="lg:w-[40%] w-[80vw] h-[40vh] lg:mb-0 mb-8">
                <Image
                  src="https://images.pexels.com/photos/3823488/pexels-photo-3823488.jpeg"
                  alt="Integrated programs"
                  width={500}
                  height={300}
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>
              <div className="lg:w-1/2">
                <ul className="text-left text-black">
                  <li className="mb-8 border-b-[2px]">
                    Reasoning and Rehabilitation (R&R) programs in correctional settings
                  </li>
                  <li className="mb-8 border-b-[2px]">
                    Therapeutic communities with structured behavioral programs
                  </li>
                  <li className="mb-8 border-b-[2px]">
                    Schema Therapy showing emerging evidence for personality disorders
                  </li>
                  <li className="mb-8 border-b-[2px]">
                    Multisystemic therapy addressing multiple risk domains
                  </li>
                  <li className="mb-8 border-b-[2px]">
                    Dual diagnosis programs addressing both ASPD and substance use
                  </li>
                </ul>
              </div>
            </div>
          )}

          {/* Early Intervention Tab */}
          {activeTreatmentTab === "early" && (
            <div className="flex flex-col lg:flex-row justify-between items-center w-full">
              <div className="lg:w-[40%] w-[80vw] h-[40vh] lg:mb-0 mb-8">
                <Image
                  src="https://images.pexels.com/photos/8452057/pexels-photo-8452057.jpeg"
                  alt="Early intervention"
                  width={500}
                  height={300}
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>
              <div className="lg:w-1/2">
                <ul className="text-left text-black">
                  <li className="mb-8 border-b-[2px]">
                    Parent training programs to improve child management skills
                  </li>
                  <li className="mb-8 border-b-[2px]">
                    Early intervention for conduct disorder in childhood
                  </li>
                  <li className="mb-8 border-b-[2px]">
                    School-based programs promoting social skills and empathy
                  </li>
                  <li className="mb-8 border-b-[2px]">
                    Family therapy addressing dysfunctional family patterns
                  </li>
                  <li className="mb-8 border-b-[2px]">
                    Prevention programs targeting high-risk youth and families
                  </li>
                </ul>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Risk Assessment and Safety Section */}
      <section className="bg-white w-full h-full lg:px-40 px-10 lg:py-20 py-10 text-center">
        <h2
          className={`text-[#0E7EA0] lg:text-[3.5vw] text-[7vw] font-bold ${playfair.className} mb-12`}
        >
          Risk Assessment and Safety
        </h2>
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-8 text-left text-black">
          <div className="bg-gray-50 p-6 rounded-xl">
            <h3 className="text-xl font-bold mb-4 text-[#0E7EA0]">Violence Risk</h3>
            <ul className="space-y-3">
              <li>• Higher risk for violence, particularly intimate partner violence</li>
              <li>• Increased likelihood of physical aggression and assault</li>
              <li>• Risk factors include substance use and environmental stressors</li>
            </ul>
          </div>
          <div className="bg-gray-50 p-6 rounded-xl">
            <h3 className="text-xl font-bold mb-4 text-[#0E7EA0]">Safety Monitoring</h3>
            <ul className="space-y-3">
              <li>• Increased suicide risk, especially when comorbid with depression or substance use</li>
              <li>• Occupational and legal consequences require ongoing monitoring</li>
              <li>• Regular assessment of risk factors and protective factors</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Common Comorbidities Section */}
      <section className="bg-gray-100 w-full h-full lg:px-40 px-10 lg:py-20 py-10 text-center">
        <h2
          className={`text-[#0E7EA0] lg:text-[3.5vw] text-[7vw] font-bold ${playfair.className} mb-12`}
        >
          Common Comorbidities
        </h2>
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-8">
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <h3 className="text-xl font-bold mb-4 text-[#0E7EA0]">Substance Use Disorders</h3>
            <p className="text-black mb-4">70-90% prevalence rate among individuals with ASPD</p>
            <ul className="text-left text-black space-y-2">
              <li>• Alcohol use disorder most common</li>
              <li>• Polysubstance use frequently observed</li>
              <li>• Complicates treatment and prognosis</li>
            </ul>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <h3 className="text-xl font-bold mb-4 text-[#0E7EA0]">Mental Health Disorders</h3>
            <ul className="text-left text-black space-y-2">
              <li>• Mood disorders, particularly depression</li>
              <li>• Anxiety disorders</li>
              <li>• Other personality disorders (especially Borderline and Narcissistic)</li>
              <li>• Attention-deficit/hyperactivity disorder</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Evidence-Based Interventions Section */}
      <section className="bg-white w-full h-full lg:px-40 px-10 lg:py-20 py-10 text-center">
        <h2
          className={`text-[#0E7EA0] lg:text-[3.5vw] text-[7vw] font-bold ${playfair.className} mb-12`}
        >
          Evidence-Based Interventions
        </h2>
        <div className="grid lg:grid-cols-3 grid-cols-1 gap-8">
          <div className="bg-[#0E7EA0] rounded-xl text-white p-6">
            <h3 className="text-lg font-bold mb-4 text-[#FFD066]">Reasoning and Rehabilitation (R&R)</h3>
            <p className="text-sm">Structured cognitive-behavioral programs specifically designed for correctional settings, focusing on developing prosocial thinking patterns.</p>
          </div>
          <div className="bg-[#FFD700] rounded-xl text-black p-6">
            <h3 className="text-lg font-bold mb-4">Therapeutic Communities</h3>
            <p className="text-sm">Structured behavioral programs that provide intensive, long-term treatment in residential settings with peer support and accountability.</p>
          </div>
          <div className="bg-[#0E7EA0] rounded-xl text-white p-6">
            <h3 className="text-lg font-bold mb-4 text-[#FFD066]">Schema Therapy</h3>
            <p className="text-sm">Emerging evidence for personality disorders, targeting core maladaptive schemas and coping styles developed in childhood.</p>
          </div>
        </div>
      </section>

      {/* Treatment Ethics Section */}
      <section className="bg-gray-100 w-full h-full lg:px-40 px-10 lg:py-20 py-10 text-center">
        <h2
          className={`text-[#0E7EA0] lg:text-[3.5vw] text-[7vw] font-bold ${playfair.className} mb-12`}
        >
          Treatment Ethics
        </h2>
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-8 text-left">
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <h3 className="text-xl font-bold mb-4 text-[#0E7EA0]">Consent and Autonomy</h3>
            <ul className="text-black space-y-3">
              <li>• Informed consent challenges when insight is limited</li>
              <li>• Balancing individual autonomy with public safety</li>
              <li>• Voluntary vs. mandated treatment considerations</li>
            </ul>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <h3 className="text-xl font-bold mb-4 text-[#0E7EA0]">Professional Considerations</h3>
            <ul className="text-black space-y-3">
              <li>• Confidentiality limits when there&apos;s risk of harm to others</li>
              <li>• Professional boundaries and countertransference management</li>
              <li>• Duty to warn and protect obligations</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Prognosis and Future Outlook Section*/}
      <section className="bg-[#FFD266] w-full h-full lg:px-40 px-10 lg:pt-20 lg:pb-[58vw] pt-20 pb-50 mb-[-60vw] text-center z-0 ">
        <h2
          className={`text-[#0E7EA0] lg:text-[3.5vw] text-[8vw] font-bold ${playfair.className} mb-10`}
        >
          Prognosis and Future Outlook
        </h2>
        <div className="flex flex-col lg:flex-row justify-between items-center text-left text-black gap-20 mb-20">
          <p>
            Prognosis remains guarded. Some individuals show decreased antisocial behavior after age 40 (&apos;aging out&apos; phenomenon), but this reflects reduced opportunity and energy rather than personality change. Treatment focuses on reducing harmful behaviors and improving social functioning. The progression of ASPD is quite variable between individuals, with positive outcomes associated with secure employment, good social support, and absence of substance use.
          </p>
          <p>
            ASPD presents serious challenges to the treatment community and society. Individuals with ASPD rarely seek treatment voluntarily, and adherence to treatment is typically poor. The disorder carries important societal costs in terms of criminal justice involvement, substance abuse, and domestic violence. Early intervention for precursor disorders like conduct disorder remains the most hopeful pathway to prevention.
          </p>
        </div>
      </section>
    </main>
  );
};

export default ASPD;
