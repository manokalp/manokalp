"use client"
import Image from "next/image"
import Link from "next/link"
import { useState } from 'react';
// import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import playfair from "../../fonts/playfair.module.css"

const Anorexia = () => {
    const [activeTab, setActiveTab] = useState<SymptomCategory>('emotional');
    const solutionsData = [
        {
          title: "Cognitive-Behavioral Therapy (CBT)",
          description: "Reframes distorted beliefs about food, control, and self-image to develop healthier thinking and behavior patterns.",
        },
        {
          title: "Dialectical Behavior Therapy (DBT)",
          description: "Enhances emotional regulation, impulse control, and distress tolerance, especially during binge or purge urges.",
        },
        {
          title: "Family-Based Therapy (FBT)",
          description: "Actively involves family in adolescent recovery by restoring eating patterns and supporting emotional healing.",
        },
        {
          title: "Nutritional Counseling",
          description: "Guides individuals toward balanced eating habits, portion control, and awareness of hunger cues.",
        },
        {
          title: "Inpatient or Residential Treatment",
          description: "Provides structured care for severe cases with health risks or coexisting psychological symptoms.",
        },
        {
          title: "Peer and Support Groups",
          description: "Encourage sharing experiences, maintaining progress, and reducing isolation in the recovery journey.",
        },
        {
          title: "Pharmacological Intervention",
          description: "SSRIs address mood or anxiety symptoms; antipsychotics may help with cognitive rigidity; appetite stimulants are used when medically necessary.",
        },
        {
          title: "Preventive and Early Intervention Programs",
          description: "Body-positive education, early screening, and open dialogue in schools and sports environments reduce long-term impact.",
        },
      ];
      

    const symptoms = {
        emotional: [
          "Fear of gaining weight or being judged",
          "Guilt, shame, or numbness around eating",
          "Mood instability or depressive symptoms",
          "Anxiety or emotional detachment",
        ],
        behavioral: [
          "Meal skipping or excessive calorie control",
          "Binge-purge cycles or over-exercising",
          "Avoiding social meals or food-related settings",
          "Secretive eating or hoarding food",
        ],
        physical: [
          "Noticeable weight loss or gain",
          "Hormonal irregularities and menstrual issues",
          "Fatigue, dizziness, or gastrointestinal discomfort",
          "Electrolyte imbalances and poor immunity",
        ],
        cognitive: [
          "Obsessive thoughts about food, weight, or shape",
          "Distorted body perception",
          "Catastrophic thinking about weight gain",
          "Over-analysis of calorie intake and appearance",
        ],
      };


    type SymptomCategory = keyof typeof symptoms;

    return (
        <main className="w-full h-full flex justify-center flex-col  bg-white ">
            {/* ASPD Hero Desktop  */}
            <div className="w-full hidden lg:block text-center ">
                <h1 className="lg:text-[5vw] text-[6vw] text-white font-semibold relative z-10 font-[playfull] translate-y-[3vw]">What Are Adjustment-Related Problems?</h1>
                <Image src="/anorexia.webp" alt="hero image" objectFit="cover" width={1200} height={100} className="w-full  lg:mt-[-16vw] mt-[-25vw]  z-0" />
            </div>

            {/* ASPD Hero Mobile  */}
            <div className="w-full lg:hidden block text-center ">

                <Image src="/anorexia.webp" alt="hero image" objectFit="cover" width={1200} height={100} className="w-full     z-0" />
                <h1 className="lg:text-[5vw] text-[6vw] text-white font-semibold relative z-10 font-[playfull] mt-[-10vw] mb-10">What Are Adjustment-Related Problems?</h1>
            </div>

            {/* The Harsh Truth Section  */}
            <section className="bg-[#0E7EA0] rounded-full w-full h-full lg:px-40 px-10 lg:py-20 py-20 text-center lg:mt-[-20vw] mt-[-0vw]">
                <div className="flex flex-col justify-center items-center lg:mb-20 mb-10">
                    <h2 className="lg:text-[4.0vw] text-[8.5vw] font-bold font-[playfull]"></h2>

                </div>
                <div className="flex flex-col lg:flex-row justify-center lg:gap-20 gap-10 items-center text-center mb-20">

                    <p className="lg:text-[1.55vw] text-[3.5vw] font-medium text-left">Anorexia and other eating disorders are complex psychiatric conditions involving disordered eating habits, intense fear of weight gain, and distorted body image. These disorders—Anorexia Nervosa, Bulimia Nervosa, and Binge-Eating Disorder—can severely impact an individual&apos;s physical health, emotional regulation, and social life.</p>
                    <p className="lg:text-[1.55vw] text-[3.5vw] font-medium text-left">Rooted in a combination of biological, psychological, and environmental factors, these conditions are becoming increasingly common in an image-conscious society. Early recognition and a multidisciplinary treatment approach are essential for recovery.</p>
                </div>

                <Link href="/" className="lg:px-30 px-16 py-6 bg-black rounded-full lg:text-[2vw] text-[4.5vw] ">Know More</Link>
            </section>

            {/* Section */}
            <section className="bg-white w-full h-full lg:px-20 px-10 lg:py-20 py-10 text-center">
                <h2 className={`text-[#0E7EA0] lg:text-[3.8vw] text-[7vw] font-bold ${playfair.className} mb-8`}>Causes of Eating Disorders</h2>
                <p className="text-black lg:text-[1.0vw] text-[3.5vw] mb-10">Temper tantrums may result from different psychological, developmental, 
                and environmental factors. Some of the most prevalent causes are:</p>

                <div className="grid lg:grid-cols-3 grid-cols-1 gap-4 mb-0">
                    {/* Technique Card 1 */}
                    <div className="[perspective:1000px] cursor-pointer ">
                        <div className="relative w-full aspect-square transition-all duration-500 [transform-style:preserve-3d] hover:[transform:rotateY(180deg)]">
                            <div className="absolute inset-0 bg-[#0E7EA0] w-full lg:lg:h-[50vh] rounded-xl p-6 text-white flex flex-col items-center justify-center [backface-visibility:hidden]">
                                <h3 className="lg:text-[1.0vw] text-[4vw] font-bold">Genetic and Biological Factors
                                </h3>
                            </div>
                            <div className="absolute inset-0 bg-[#0E7EA0] w-full lg:lg:h-[50vh] rounded-xl p-6 text-white flex flex-col items-center justify-center [transform:rotateY(180deg)] [backface-visibility:hidden]">
                                <p className="lg:text-[1vw] text-[3vw]">A family history of eating disorders and brain chemical imbalances, such as serotonin or dopamine disruption, may increase susceptibility to abnormal eating behaviors and emotional dysregulation.</p>
                            </div>
                        </div>
                    </div>

                    {/* Technique Card 2 */}
                    <div className="[perspective:1000px] cursor-pointer">
                        <div className="relative w-full aspect-square transition-all duration-500 [transform-style:preserve-3d] hover:[transform:rotateY(180deg)]">
                            <div className="absolute inset-0 bg-[#FFD700] w-full lg:h-[50vh] rounded-xl p-6 text-black flex flex-col items-center justify-center [backface-visibility:hidden]">
                                <h3 className="lg:text-[1.0vw] text-[4vw] font-bold">Psychological and Emotional Factors</h3>
                            </div>
                            <div className="absolute inset-0 bg-[#FFD700] w-full lg:h-[50vh] rounded-xl p-6 text-black flex flex-col items-center justify-center [transform:rotateY(180deg)] [backface-visibility:hidden]">
                                <p className="lg:text-[1vw] text-[3vw]">Perfectionism, low self-esteem, and using food control as a coping strategy are common emotional triggers. Coexisting mental health conditions like anxiety or depression often contribute to disordered eating.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Technique Card 3 */}
                    <div className="[perspective:1000px] cursor-pointer">
                        <div className="relative w-full aspect-square transition-all duration-500 [transform-style:preserve-3d] hover:[transform:rotateY(180deg)]">
                            <div className="absolute inset-0 bg-[#0E7EA0]  w-full lg:h-[50vh] rounded-xl p-6 text-white flex flex-col items-center justify-center [backface-visibility:hidden]">
                                <h3 className="lg:text-[1.0vw] text-[4vw] font-bold">Environmental and Social Factors</h3>
                            </div>
                            <div className="absolute inset-0 bg-[#0E7EA0] w-full lg:h-[50vh] rounded-xl p-6 text-white flex flex-col items-center justify-center [transform:rotateY(180deg)] [backface-visibility:hidden]">
                                <p className="lg:text-[1vw] text-[3vw]">Media-driven beauty standards, peer pressure, weight-related bullying, and appearance-focused family environments can distort self-image and reinforce disordered eating patterns.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            {/* Section */}
<section className="bg-white w-full h-full lg:px-60 px-10 lg:py-20 py-10 text-center">
  <h2
    className={`text-[#0E7EA0] lg:text-[3.5vw] text-[7vw] font-bold ${playfair.className} mb-12`}
  >
    Symptoms of Eating Disorders
  </h2>

  <p className="text-black lg:text-[1.5vw] text-[3vw] mb-10">
    The clinical presentation varies by type, yet many individuals show
    overlapping signs across emotional, behavioral, cognitive, and physical domains.
  </p>

  <div className="flex flex-col lg:flex-row justify-between gap-4 text-black mb-16">
    {Object.keys(symptoms).map((tab) => (
      <button
        key={tab}
        onClick={() => setActiveTab(tab as SymptomCategory)}
        className={`px-4 py-2 rounded-lg transition-all ${
          activeTab === tab
            ? 'bg-[#0E7EA0] text-white'
            : 'hover:bg-gray-100'
        }`}
      >
        {tab.charAt(0).toUpperCase() + tab.slice(1)} Symptoms
      </button>
    ))}
  </div>

  <div className="flex flex-col lg:flex-row justify-between items-center gap-8">
    <div className="lg:w-1/2">
      <ul className="text-left text-black">
        {symptoms[activeTab].map((symptom, index) => (
          <li key={index} className="mb-8 border-b-[2px] pb-2">
            {symptom}
          </li>
        ))}
      </ul>
    </div>

    <div className="lg:w-1/2 h-[60vh] relative overflow-hidden rounded-xl">
      <Image
        src={`/diseases/anorexia/${activeTab === 'emotional'
          ? '1'
          : activeTab === 'behavioral'
          ? '2'
          : activeTab === 'physical'
          ? '3'
          : '4'
        }.webp`}
        alt={`${activeTab} symptoms illustration`}
        layout="fill"
        objectFit="contain"
        className="transition-opacity duration-300 cursor-pointer rounded-2xl"
      />
    </div>
  </div>
</section>

<section className="bg-white w-full h-full lg:px-20 px-10 lg:py-30 py-10 text-center">
  <h2 className={`text-[#0E7EA0] lg:text-[4vw] text-[7vw] font-semibold ${playfair.className}`}>
    Solutions to Managing Adjustment-Related Problems
  </h2>

  <p className="text-black lg:text-[1.55vw] text-[3.5vw] font-medium mb-10">
    Managing adjustment issues involves emotional regulation, cognitive restructuring, lifestyle changes, and sometimes therapeutic intervention. Here are some recommended solutions:
  </p>

  <div className="grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-4">
    {solutionsData.map((solution, index) => (
      <div key={index} className="bg-[#0E7EA0] rounded-3xl text-white text-center">
        <Image
          src={`/diseases/anorexiav2/${index + 1}.webp`}
          alt={solution.title}
          width={300}
          height={200}
          className="w-full h-48 object-cover rounded-2xl mb-6"
        />
        <div className="p-6">
          <h3 className="text-lg font-bold mb-4">{solution.title}</h3>
          <p className="text-sm">{solution.description}</p>
        </div>
      </div>
    ))}
  </div>
</section>

            {/* Footer Section */}
            {/* Prognosis and Future Outlook Section*/}
            <section className="bg-[#FFD266] w-full h-full lg:px-80 px-10 lg:pt-20 lg:pb-[50vw] pt-20 pb-50 mb-[-60vw] text-center z-0 ">
                {/* <h2 className={`text-[#0E7EA0] lg:text-[3.5vw] text-[8vw] font-bold ${playfair.className} mb-10`}>Conclusion</h2>
                <div className="flex flex-col lg:flex-row justify-between items-center text-left text-black gap-20 mb-50">
                    <p>Anxiety in children is a critical issue that can affect a child&apos;s emotional and psychological growth if not treated. Knowing its causes and symptoms, parents, educators, and caregivers can take decisive action to assist children to overcome their anxiety in the most effective way. With proper intervention,</p>
                    <p>children can be helped to develop resilience, confidence, and coping mechanisms that will carry them through adulthood. Childhood anxiety management needs patience, consistency, and a warm environment, but if managed well, children can enjoy happy and worry-free lives.</p>
                </div> */}
            </section>
        </main>
    )
}

export default Anorexia