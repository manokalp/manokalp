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
      "Greater sensitivity to emotions at birth",
      "Distress tolerance and emotion regulation issues",
      "Low quality of mentalization (ability to comprehend one's own and others' mentalities)",
      "Cognitive shortcomings including dichotomous thought and attribution bias",
    ],
    background: "/background1.png",
  },
  {
    title: "Genetic And Neurobiological Factors",
    items: [
      "Estimates of heritability indicate that 40-60% of the risk for BPD is accounted for by genetic factors",
      "Neuroimaging investigations find structural and functional damage to brain areas involved in emotion regulation, impulse control, and social cognition",
      "Neuroimaging shows hyperactivity in the amygdala (emotional processing), reduced prefrontal cortex activity (executive control), and altered connectivity between emotion regulation networks. Hippocampal volume reductions are associated with trauma history",
      "Neurotransmitter system abnormalities, specifically serotonin, dopamine, and the stress-response system",
    ],
    background: "/background2.png",
  },
  {
    title: "Environmental And Developmental Factors",
    items: [
      "Childhood trauma, such as emotional, physical, and sexual abuse",
      "Early neglect, invalidation, or inconsistent care",
      "Disturbed attachment to primary caregivers",
      "Exposure to violent family settings or parent conflict",
      "Early loss or separation experiences",
    ],
    background: "/background3.png",
  },
];

const BPD = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [activeTab, setActiveTab] = useState("emotional");

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
        <h2 className="lg:text-[5vw] text-[6vw] text-white mt-[5vw] font-semibold relative z-10 font-[playfull] ">
          Borderline Personality Disorder
          <br />
          (BPD)
        </h2>
        <Image
          src="/diseases-banner/bpd.webp"
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
        <h2 className="lg:text-[5vw] text-[6vw] text-white font-semibold relative z-10 font-[playfull]">
          Borderline Personality Disorder
          <br />
          (BPD)
        </h2>
        <Image
          src="/diseases-banner/bpd.webp"
          alt="hero image"
          objectFit="cover"
          width={1200}
          height={100}
          className="w-full   mt-[-20vw]  z-0"
          priority
          onLoad={() => {
            if (typeof window !== "undefined") {
              window.dispatchEvent(new Event("heroImageLoaded"));
            }
          }}
        />
      </div>

      {/* The Harsh Truth Section  */}
      <section className="bg-[#0E7EA0] rounded-full w-full h-full lg:px-40 px-10 lg:py-40 py-20 text-center mt-[-60vw]">
        <div className="flex flex-col lg:flex-row justify-center lg:gap-20 gap-10 items-center text-center mb-20">
          <p className="lg:text-[1.55vw] text-[3.5vw] font-medium text-left">
            Borderline Personality Disorder (BPD) is a complicated mental
            illness typified by chronic patterns of emotional instability,
            compromised self-image, impulsivity, and maladaptive interpersonal
            relationships. Occurring in approximately 0.7-2.7% of the general population, with lifetime prevalence around 1.4%. Prevalence is higher in clinical settings (10-20%). BPD often starts in the teenage years or early adulthood
            and may significantly interfere with every sphere of a person&apos;s
            life. BPD is among the most stigmatized psychiatric illnesses, and
            patients will probably be misconstrued not only by healthcare
            professionals but by the general community as well.
          </p>

          <p className="lg:text-[1.55vw] text-[3.5vw] font-medium text-left">
            BPD is a Cluster B personality disorder in the Diagnostic and
            Statistical Manual of Mental Disorders (DSM-5), in addition to
            antisocial, histrionic, and narcissistic personality disorders.
            Despite its challenges, BPD has seen dramatic treatment advances
            over the past few decades, from largely being considered untreatable
            to now having a variety of successful evidence-based treatments.
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
          BPD results from the interplay between genetic susceptibility and the
          environment, best explained in the biopsychosocial model:
        </p>
      </section>

      {/* Carousel  */}
      <div className="relative w-full lg:h-[110vh] h-[100vh] overflow-hidden ">
        {carouselData.map((slide, index) => (
          <div
            key={index}
            className={`absolute w-full h-full  transition-opacity duration-500 ${
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
            <div className="w-full h-full bg-white bg-opacity-60 flex flex-col justify-center items-center px-10 py-10">
              <h2 className="text-[8vw] md:text-[4vw] text-black font-semibold mb-12 font-[playfair] text-center">
                {slide.title}
              </h2>
              <div className="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-4">
                {slide.items.map((item, i) => (
                  <div
                    key={i}
                    className={`p-6 w-[80vw] md:w-[16vw] h-[10vh] md:h-[60vh] flex items-center justify-center text-center font-medium rounded-xl ${
                      i % 2 === 0
                        ? "bg-[#0E7EA0] text-white"
                        : "bg-yellow-400 text-black"
                    } shadow-lg`}
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
        <button
          onClick={handlePrev}
          className="absolute left-4 md:left-8 lg:top-1/2 top-[10%] transform -translate-y-1/2 text-white bg-black bg-opacity-50 p-4 rounded-full cursor-pointer"
        >
          <FaArrowLeft size={30} />
        </button>
        <button
          onClick={handleNext}
          className="absolute right-4 md:right-8 lg:top-1/2 top-[10%] transform -translate-y-1/2 text-white bg-black bg-opacity-50 p-4 rounded-full cursor-pointer"
        >
          <FaArrowRight size={30} />
        </button>
      </div>

      {/*  Section */}
      <section className="bg-white w-full h-full lg:px-40 px-10 lg:py-20 py-10 text-center">
        <h2
          className={`text-[#0E7EA0] lg:text-[3.5vw] text-[7vw] font-bold ${playfair.className} mb-12`}
        >
          Clinical Symptoms and Diagnosis Criteria
        </h2>
        <p className="text-black lg:text-[1.5vw] text-[3vw] mb-10">
          DSM-5 requires 5 or more of these 9 specific criteria:
        </p>
        <div className="bg-gray-50 p-6 rounded-xl mb-10 text-left">
          <ul className="text-black space-y-3">
            <li>• Frantic efforts to avoid abandonment</li>
            <li>• Unstable interpersonal relationships alternating between idealization and devaluation</li>
            <li>• Identity disturbance with unstable self-image</li>
            <li>• Impulsivity in ≥2 potentially damaging areas</li>
            <li>• Recurrent suicidal behavior, gestures, or self-mutilation</li>
            <li>• Affective instability due to mood reactivity</li>
            <li>• Chronic feelings of emptiness</li>
            <li>• Inappropriate intense anger or difficulty controlling anger</li>
            <li>• Transient stress-related paranoid ideation or dissociative symptoms</li>
          </ul>
        </div>

        {/* Tab Buttons */}
        <div className="flex flex-col lg:flex-row justify-between gap-4 text-black mb-16">
          <button
            onClick={() => setActiveTab("emotional")}
            className={`px-4 py-2 rounded-lg transition-colors ${
              activeTab === "emotional"
                ? "bg-[#0E7EA0] text-white"
                : "bg-gray-100"
            }`}
          >
            Emotional Dysregulation
          </button>
          <button
            onClick={() => setActiveTab("self-image")}
            className={`px-4 py-2 rounded-lg transition-colors ${
              activeTab === "self-image"
                ? "bg-[#0E7EA0] text-white"
                : "bg-gray-100"
            }`}
          >
            Disturbed Self-Image
          </button>
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
            Behavioral Dysregulation
          </button>
        </div>

        {/* Tab Content */}
        <div className="flex flex-col lg:flex-row justify-between items-start">
          {/* Emotional Dysregulation Tab */}
          {activeTab === "emotional" && (
            <div className="flex flex-col lg:flex-row justify-between items-center w-full">
              <div className="lg:w-1/2">
                <ul className="text-left text-black">
                  <li className="mb-8 border-b-[2px]">
                    Serious emotional reactions and mood swings
                  </li>
                  <li className="mb-8 border-b-[2px]">
                    Enduring conditions of hollowness
                  </li>
                  <li className="mb-8 border-b-[2px]">
                    Inappropriate, intense anger or difficulty controlling anger
                  </li>
                  <li className="mb-8 border-b-[2px]">
                    Affective instability due to extreme reactivity of mood
                  </li>
                  <li className="mb-8 border-b-[2px]">
                    Chronic feelings of emptiness or emotional numbness
                  </li>
                  <li className="mb-8 border-b-[2px]">
                    Overwhelming emotions that seem impossible to manage
                  </li>
                </ul>
              </div>
              <div className="lg:w-[40%] w-[80vw] h-[40vh] lg:mt-0 mt-8">
                <Image
                  src="https://images.pexels.com/photos/3047316/pexels-photo-3047316.jpeg"
                  alt="Person experiencing emotional dysregulation"
                  width={500}
                  height={300}
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>
            </div>
          )}

          {/* Disturbed Self-Image Tab */}
          {activeTab === "self-image" && (
            <div className="flex flex-col lg:flex-row justify-between items-center w-full">
              <div className="lg:w-1/2">
                <ul className="text-left text-black">
                  <li className="mb-8 border-b-[2px]">
                    Markedly unstable self-image or sense of self
                  </li>
                  <li className="mb-8 border-b-[2px]">
                    Identity disturbance and confusion about self-worth
                  </li>
                  <li className="mb-8 border-b-[2px]">
                    Shifting goals, values, and career plans
                  </li>
                  <li className="mb-8 border-b-[2px]">
                    Feeling like you don&apos;t know who you are
                  </li>
                  <li className="mb-8 border-b-[2px]">
                    Severe self-criticism and feelings of worthlessness
                  </li>
                  <li className="mb-8 border-b-[2px]">
                    Dissociative symptoms under stress
                  </li>
                </ul>
              </div>
              <div className="lg:w-[40%] w-[80vw] h-[40vh] lg:mt-0 mt-8">
                <Image
                  src="https://images.pexels.com/photos/6337335/pexels-photo-6337335.jpeg"
                  alt="Person with disturbed self-image"
                  width={500}
                  height={300}
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>
            </div>
          )}

          {/* Interpersonal Dysfunction Tab */}
          {activeTab === "interpersonal" && (
            <div className="flex flex-col lg:flex-row justify-between items-center w-full">
              <div className="lg:w-1/2">
                <ul className="text-left text-black">
                  <li className="mb-8 border-b-[2px]">
                    Frantic efforts to avoid real or imagined abandonment
                  </li>
                  <li className="mb-8 border-b-[2px]">
                    Pattern of unstable and intense relationships
                  </li>
                  <li className="mb-8 border-b-[2px]">
                    Alternating between idealization and devaluation of others
                  </li>
                  <li className="mb-8 border-b-[2px]">
                    Difficulty trusting others
                  </li>
                  <li className="mb-8 border-b-[2px]">
                    Intense fear of rejection or criticism
                  </li>
                  <li className="mb-8 border-b-[2px]">
                    Feeling misunderstood, neglected, or mistreated
                  </li>
                </ul>
              </div>
              <div className="lg:w-[40%] w-[80vw] h-[40vh] lg:mt-0 mt-8">
                <Image
                  src="https://images.pexels.com/photos/7580971/pexels-photo-7580971.jpeg"
                  alt="People experiencing relationship difficulties"
                  width={500}
                  height={300}
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>
            </div>
          )}

          {/* Behavioral Dysregulation Tab */}
          {activeTab === "behavioral" && (
            <div className="flex flex-col lg:flex-row justify-between items-center w-full">
              <div className="lg:w-1/2">
                <ul className="text-left text-black">
                  <li className="mb-8 border-b-[2px]">
                    Impulsive behaviors in at least two potentially
                    self-damaging areas
                  </li>
                  <li className="mb-8 border-b-[2px]">
                    Recurrent suicidal behavior, gestures, threats, or
                    self-mutilating behavior
                  </li>
                  <li className="mb-8 border-b-[2px]">
                    Substance abuse, reckless driving, or binge eating
                  </li>
                  <li className="mb-8 border-b-[2px]">
                    Difficulty controlling impulses
                  </li>
                  <li className="mb-8 border-b-[2px]">
                    Engaging in risky or dangerous activities
                  </li>
                  <li className="mb-8 border-b-[2px]">
                    Self-sabotaging behaviors when things are going well
                  </li>
                </ul>
              </div>
              <div className="lg:w-[40%] w-[80vw] h-[40vh] lg:mt-0 mt-8">
                <Image
                  src="https://images.pexels.com/photos/5699447/pexels-photo-5699447.jpeg"
                  alt="Person showing signs of behavioral dysregulation"
                  width={500}
                  height={300}
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>
            </div>
          )}
        </div>
      </section>

      {/*  Links  */}
      <section className="bg-white w-full h-full lg:px-20 px-10 lg:py-20 py-10 text-center">
        <h2
          className={`text-[#0E7EA0] lg:text-[4vw] text-[7vw] ${playfair.className}`}
        >
          Treatment Strategies and Interventions
        </h2>
        <p className="text-black lg:text-[1.5vw] text-[3vw] mb-10">
          Several empirically supported interventions have proven successful for
          BPD:
        </p>
        <p className="text-black lg:text-[1.5vw] text-[3vw] mb-10 font-bold">
          Psychotherapeutic Interventions
        </p>
        <div className="grid lg:grid-cols-5 grid-cols-1 gap-4">
          {/* Card 1 */}
          <div className="bg-[#0E7EA0] rounded-3xl  text-white text-center">
            <Image
              src="https://images.pexels.com/photos/6147369/pexels-photo-6147369.jpeg"
              alt="Therapist conducting DBT session"
              width={300}
              height={200}
              className="w-full h-48 object-cover rounded-2xl mb-6"
            />
            <div className="p-6">
              <h3 className="text-lg font-bold mb-4">
                Dialectical Behavior Therapy (DBT):{" "}
              </h3>
              <p className="text-sm">
                Specifically designed for BPD by Marsha Linehan, DBT integrates
                acceptance and change techniques to improve emotional control,
                interpersonal skills, tolerance of distress, and mindfulness
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-[#FFD700] rounded-3xl  text-black text-center">
            <Image
              src="https://images.pexels.com/photos/5699439/pexels-photo-5699439.jpeg"
              alt="Mentalization therapy session"
              width={300}
              height={200}
              className="w-full h-48 object-cover rounded-2xl mb-6"
            />
            <div className="p-6">
              <h3 className="text-lg font-bold mb-4">
                Mentalization-Based Treatment (MBT):{" "}
              </h3>
              <p className="text-sm">
                Seeks to improve the ability to understand the mental states in
                oneself and in others
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-[#0E7EA0] rounded-3xl text-white text-center">
            <Image
              src="https://images.pexels.com/photos/7176319/pexels-photo-7176319.jpeg"
              alt="Schema therapy session"
              width={300}
              height={200}
              className="w-full h-48 object-cover rounded-2xl mb-6"
            />
            <div className="p-6">
              <h3 className="text-lg font-bold mb-4">
                Schema-Focused Therapy:
              </h3>
              <p className="text-sm">
                Aims at early maladaptive schemas and coping style
              </p>
            </div>
          </div>

          {/* Card 4 */}
          <div className="bg-[#FFD700] rounded-3xl text-black text-center">
            <Image
              src="https://images.pexels.com/photos/4101143/pexels-photo-4101143.jpeg"
              alt="Transference-focused therapy session"
              width={300}
              height={200}
              className="w-full h-48 object-cover rounded-2xl mb-6"
            />
            <div className="p-6">
              <h3 className="text-lg font-bold mb-4">
                Transference-Focused Psychotherapy (TFP):
              </h3>
              <p className="text-sm">
                Psychodynamic treatment emphasizing the therapeutic relationship
                to treat interpersonal issues
              </p>
            </div>
          </div>

          {/* Card 5 */}
          <div className="bg-[#0E7EA0] rounded-3xl text-white text-center">
            <Image
              src="https://images.pexels.com/photos/7176305/pexels-photo-7176305.jpeg"
              alt="Psychiatric management session"
              width={300}
              height={200}
              className="w-full h-48 object-cover rounded-2xl mb-6"
            />
            <div className="p-6">
              <h3 className="text-lg font-bold mb-4">
                Good Psychiatric Management (GPM):{" "}
              </h3>
              <p className="text-sm">
                Multimodal treatment involving psychoeducation, case management,
                and supportive psychotherapy
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Suicide Risk Assessment Section */}
      <section className="bg-gray-100 w-full h-full lg:px-40 px-10 lg:py-20 py-10 text-center">
        <h2
          className={`text-[#0E7EA0] lg:text-[3.5vw] text-[7vw] font-bold ${playfair.className} mb-12`}
        >
          Suicide Risk Assessment
        </h2>
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-8 text-left">
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <h3 className="text-xl font-bold mb-4 text-[#0E7EA0]">Critical Statistics</h3>
            <ul className="text-black space-y-3">
              <li>• 8-10% completed suicide rate (among highest of mental disorders)</li>
              <li>• 60-70% attempt suicide at least once</li>
              <li>• Self-harm behaviors in 50-80% of individuals</li>
            </ul>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <h3 className="text-xl font-bold mb-4 text-[#0E7EA0]">Assessment Requirements</h3>
            <ul className="text-black space-y-3">
              <li>• Requires ongoing risk assessment and safety planning</li>
              <li>• Regular monitoring of suicidal ideation</li>
              <li>• Crisis intervention protocols must be in place</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Common Comorbidities Section */}
      <section className="bg-white w-full h-full lg:px-40 px-10 lg:py-20 py-10 text-center">
        <h2
          className={`text-[#0E7EA0] lg:text-[3.5vw] text-[7vw] font-bold ${playfair.className} mb-12`}
        >
          Common Comorbidities
        </h2>
        <div className="grid lg:grid-cols-3 grid-cols-1 gap-8">
          <div className="bg-[#0E7EA0] rounded-xl text-white p-6">
            <h3 className="text-lg font-bold mb-4 text-[#FFD066]">Mood Disorders</h3>
            <ul className="text-sm space-y-2">
              <li>• Major depressive disorder (75-80%)</li>
              <li>• Anxiety disorders (90%)</li>
            </ul>
          </div>
          <div className="bg-[#FFD700] rounded-xl text-black p-6">
            <h3 className="text-lg font-bold mb-4">Trauma & Substance</h3>
            <ul className="text-sm space-y-2">
              <li>• PTSD (30-60%)</li>
              <li>• Substance use disorders (50-70%)</li>
            </ul>
          </div>
          <div className="bg-[#0E7EA0] rounded-xl text-white p-6">
            <h3 className="text-lg font-bold mb-4 text-[#FFD066]">Other Conditions</h3>
            <ul className="text-sm space-y-2">
              <li>• Eating disorders (25-30%)</li>
              <li>• Other personality disorders (85%)</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Differential Diagnosis Section */}
      <section className="bg-gray-100 w-full h-full lg:px-40 px-10 lg:py-20 py-10 text-center">
        <h2
          className={`text-[#0E7EA0] lg:text-[3.5vw] text-[7vw] font-bold ${playfair.className} mb-12`}
        >
          Differential Diagnosis
        </h2>
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-8 text-left">
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <h3 className="text-xl font-bold mb-4 text-[#0E7EA0]">Key Distinctions</h3>
            <ul className="text-black space-y-3">
              <li>• Distinguish from bipolar disorder (mood episodes vs. chronic instability)</li>
              <li>• Rule out personality changes due to medical conditions</li>
            </ul>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <h3 className="text-xl font-bold mb-4 text-[#0E7EA0]">Additional Considerations</h3>
            <ul className="text-black space-y-3">
              <li>• Consider complex PTSD vs. BPD</li>
              <li>• Differentiate from other Cluster B disorders</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Family and Support System Section */}
      <section className="bg-white w-full h-full lg:px-40 px-10 lg:py-20 py-10 text-center">
        <h2
          className={`text-[#0E7EA0] lg:text-[3.5vw] text-[7vw] font-bold ${playfair.className} mb-12`}
        >
          Family and Support System Interventions
        </h2>
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-8">
          <div className="bg-gray-50 p-6 rounded-xl">
            <h3 className="text-xl font-bold mb-4 text-[#0E7EA0]">Family Education</h3>
            <ul className="text-black space-y-3 text-left">
              <li>• Family psychoeducation about BPD symptoms and triggers</li>
              <li>• Boundary setting and communication skills training</li>
            </ul>
          </div>
          <div className="bg-gray-50 p-6 rounded-xl">
            <h3 className="text-xl font-bold mb-4 text-[#0E7EA0]">Support Resources</h3>
            <ul className="text-black space-y-3 text-left">
              <li>• Support groups for families (e.g., Family Connections)</li>
              <li>• Managing caregiver burden and secondary trauma</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Developmental Considerations Section */}
      <section className="bg-gray-100 w-full h-full lg:px-40 px-10 lg:py-20 py-10 text-center">
        <h2
          className={`text-[#0E7EA0] lg:text-[3.5vw] text-[7vw] font-bold ${playfair.className} mb-12`}
        >
          Developmental Factors
        </h2>
        <div className="bg-white p-8 rounded-xl shadow-lg text-left max-w-4xl mx-auto">
          <ul className="text-black space-y-4">
            <li>• Symptoms typically emerge in adolescence but diagnosis generally not made until 18+</li>
            <li>• Differentiate from normal adolescent identity development</li>
            <li>• Early intervention programs for at-risk youth</li>
            <li>• Consideration of developmental trauma and attachment disruption</li>
          </ul>
        </div>
      </section>

      {/* Crisis Management Section */}
      <section className="bg-white w-full h-full lg:px-40 px-10 lg:py-20 py-10 text-center">
        <h2
          className={`text-[#0E7EA0] lg:text-[3.5vw] text-[7vw] font-bold ${playfair.className} mb-12`}
        >
          Crisis Management
        </h2>
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-8 text-left">
          <div className="bg-gray-50 p-6 rounded-xl">
            <h3 className="text-xl font-bold mb-4 text-[#0E7EA0]">Safety Planning</h3>
            <ul className="text-black space-y-3">
              <li>• Safety planning with identified triggers and coping strategies</li>
              <li>• 24/7 crisis resources and emergency contacts</li>
            </ul>
          </div>
          <div className="bg-gray-50 p-6 rounded-xl">
            <h3 className="text-xl font-bold mb-4 text-[#0E7EA0]">Crisis Protocols</h3>
            <ul className="text-black space-y-3">
              <li>• Protocols for managing self-harm and suicidal ideation</li>
              <li>• Hospitalization criteria and alternatives (intensive outpatient, partial hospitalization)</li>
            </ul>
          </div>
        </div>
      </section>

      {/*  Section */}
      <section className="bg-white w-full h-full lg:px-40 px-10 lg:py-20 py-10 text-center">
        <h2
          className={`text-[#0E7EA0] font-bold lg:text-[3.5vw] text-[7vw] ${playfair.className} `}
        >
          Pharmacological Approaches
        </h2>
        <p className="text-black lg:text-[1.5vw] text-[3vw]  mb-12">
          Pharmacological Considerations: No FDA-approved medications specifically for BPD. Symptom-targeted approaches only:
        </p>

        <div className="flex flex-col lg:flex-row justify-between gap-2 items-center">
          <div className="lg:w-[40%] w-[80vw] h-[40vh]">
            <Image
              src="https://images.pexels.com/photos/4058218/pexels-photo-4058218.jpeg"
              alt="Medication for BPD symptom management"
              width={500}
              height={300}
              className="w-full h-full object-cover rounded-xl"
            />
          </div>
          <div className="lg:w-1/2">
            <ul className="text-left text-black">
              <li className="mb-8 border-b-[2px]">
                Mood stabilizers (lamotrigine, valproate) for emotional dysregulation
              </li>
              <li className="mb-8 border-b-[2px]">
                Low-dose atypical antipsychotics for cognitive-perceptual symptoms
              </li>
              <li className="mb-8 border-b-[2px]">
                SSRIs for comorbid depression/anxiety
              </li>
              <li className="mb-8 border-b-[2px]">
                Medication should complement, not replace, psychotherapy
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/*  Section */}
      <section className="bg-white w-full h-full lg:px-40 px-10 lg:py-20 py-10 text-center">
        <h2
          className={`text-[#0E7EA0] lg:text-[3.5vw] text-[7vw] font-bold ${playfair.className} mb-12`}
        >
          Holistic Care
        </h2>
        <p className="text-black lg:text-[1.5vw] text-[3vw] mb-10">
          There are no FDA-approved medications for BPD Targeted symptom
          management may involve:
        </p>

        <div className="flex flex-col lg:flex-row justify-between items-center">
          <div className="lg:w-1/2">
            <ul className="text-left text-black">
              <li className="mb-8 border-b-[2px]">
                Structured treatment plans with one-on-one and group therapy
              </li>
              <li className="mb-8 border-b-[2px]">
                Crisis intervention planning and safety measures
              </li>
              <li className="mb-8 border-b-[2px]">
                Family involvement and psychoeducation
              </li>
              <li className="mb-8 border-b-[2px]">
                Management of frequent comorbidities (depression, anxiety, PTSD,
                substance use disorders)
              </li>
              <li className="mb-8 border-b-[2px]">
                Skills training in emotion regulation, interpersonal
                effectiveness, and distress tolerance
              </li>
            </ul>
          </div>
          <div className="lg:w-[40%] w-[80vw] h-[40vh]">
            <Image
              src="https://images.pexels.com/photos/3184419/pexels-photo-3184419.jpeg"
              alt="Holistic care approach for BPD"
              width={500}
              height={300}
              className="w-full h-full object-cover rounded-xl"
            />
          </div>
        </div>
      </section>

      {/*  Section*/}
      <section className="bg-[#FFD266] w-full h-full lg:px-40 px-10 lg:pt-20 lg:pb-[50vw] pt-20 pb-50 mb-[-60vw] text-center z-0 ">
        <h2
          className={`text-[#0E7EA0] lg:text-[3.5vw] text-[8vw] font-bold ${playfair.className} `}
        >
          Prognosis and Recovery
        </h2>
        <p className="mb-10 text-[#0E7EA0]">
          Research has strongly undermined the pessimistic course of events in
          BPD:
        </p>
        <div className="flex flex-col lg:flex-row justify-between items-center text-left text-black gap-20 mb-50">
          <p>
            Longitudinal studies show 85% achieve symptomatic remission within 10 years, but functional recovery (work, relationships) occurs more gradually. Relapse rates vary significantly based on continued treatment engagement. Functional recovery (social and occupational functioning) may follow symptomatic improvement Positive outcome
            predictors are treatment entry, absence of comorbid disease, and
            strong social support system Most recover enough to no longer
            qualify for a diagnosis of BPD Social and Clinical Issues Despite
            treatment advances, several challenges remain: Long-standing stigma
            and ignorance among doctors Restricted availability of professional
            evidence-based interventions Severe levels of self-injury and
            suicide risk requiring intensive treatment Treatment{" "}
          </p>
          <p>
            {" "}
            discontinuation and participation problems Economic and personal
            costs associated with the disorder Need for preventive interventions
            and early detection Conclusion Borderline Personality Disorder is a
            biologically, psychosocially based treatable mental illness with
            complex but treatable features. With evidence-based therapy,
            especially with targeted psychotherapies, full symptomatic remission
            and recovery are possible for most patients. The evolving knowledge
            of BPD has progressed from a disorder linked with therapeutic
            pessimism to one with multiple avenues to recovery. Ongoing
            research, education, and advocacy are needed to enhance outcomes and
            decrease stigma for patients with this difficult but ultimately
            treatable illness.
          </p>
        </div>
      </section>
    </main>
  );
};

export default BPD;
