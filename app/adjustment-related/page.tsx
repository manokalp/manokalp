"use client"
import Image from "next/image"
import Link from "next/link"
import { useState } from 'react';
// import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import playfair from "../../fonts/playfair.module.css"

const AdjustmentRelated = () => {
    const [activeTab, setActiveTab] = useState<SymptomCategory>('emotional');
    const adjustmentSolutions = [
        {
            title: "Cognitive Behavioral Therapy (CBT)",
            description: "CBT reframes negative thoughts about change and teaches adaptive coping techniques to manage stress more effectively."
        },
        {
            title: "Supportive Counseling",
            description: "This approach offers a safe environment for emotional expression, helping individuals process life changes and explore actionable solutions."
        },
        {
            title: "Mindfulness-Based Stress Reduction (MBSR)",
            description: "MBSR improves emotional resilience by increasing present-moment awareness and calming physiological responses to stress."
        },
        {
            title: "Interpersonal Therapy (IPT)",
            description: "IPT focuses on strengthening communication skills and resolving interpersonal conflicts that may be amplifying distress."
        },
        {
            title: "Pharmacological Support",
            description: "SSRIs and anxiolytics are used to reduce emotional distress, sleep aids support rest, and beta-blockers help manage physical symptoms like palpitations."
        },
        {
            title: "Complementary Interventions",
            description: "School programs help children adjust to transitions; rehab aids those with substance issues; family therapy builds resilience; and community support benefits at-risk populations during stressful life changes."
        },
    ];

    const symptoms = {
        emotional: [
            "Persistent feelings of sadness or anxiety",
            "Heightened emotional reactivity or crying spells",
            "Overwhelming sense of helplessness or emotional shutdown"
        ],
        behavioral: [
            "Avoidance of social contact or daily activities",
            "Irritability, anger outbursts, or impulsivity",
            "Sleep or appetite disturbances",
            "Engagement in reckless or harmful behaviors"
        ],
        cognitive: [
            "Impaired attention and decision-making",
            "Self-critical thoughts or pessimism",
            "Intrusive worries about the stressor",
            "Fearful anticipation of future events"
        ]
    };


    type SymptomCategory = keyof typeof symptoms;

    return (
        <main className="w-full h-full flex justify-center flex-col  bg-white ">
            {/* ASPD Hero Desktop  */}
            <div className="w-full hidden lg:block text-center ">
                <h1 className="lg:text-[5vw] text-[6vw] text-white font-semibold relative z-10 font-[playfull] translate-y-[3vw]">What Are Adjustment-Related Problems?</h1>
                <Image src="/adjustment_related.webp" alt="hero image" objectFit="cover" width={1200} height={100} className="w-full  lg:mt-[-16vw] mt-[-25vw]  z-0" />
            </div>

            {/* ASPD Hero Mobile  */}
            <div className="w-full lg:hidden block text-center ">

                <Image src="/adjustment_related.webp" alt="hero image" objectFit="cover" width={1200} height={100} className="w-full     z-0" />
                <h1 className="lg:text-[5vw] text-[6vw] text-white font-semibold relative z-10 font-[playfull] mt-[-10vw] mb-10">What Are Adjustment-Related Problems?</h1>
            </div>

            {/* The Harsh Truth Section  */}
            <section className="bg-[#0E7EA0] rounded-full w-full h-full lg:px-40 px-10 lg:py-20 py-20 text-center lg:mt-[-20vw] mt-[-0vw]">
                <div className="flex flex-col justify-center items-center lg:mb-20 mb-10">
                    <h2 className="lg:text-[4.0vw] text-[8.5vw] font-bold font-[playfull]">Introduction</h2>

                </div>
                <div className="flex flex-col lg:flex-row justify-center lg:gap-20 gap-10 items-center text-center mb-20">

                    <p className="lg:text-[1.55vw] text-[3.5vw] font-medium text-left">Adjustment-related problems occur when individuals face difficulty adapting to significant life changes such as relocation, job loss, relationship breakdown, or bereavement. These stressors can disrupt emotional regulation, behavior, and daily functioning.</p>
                    <p className="lg:text-[1.55vw] text-[3.5vw] font-medium text-left">When the resulting distress is excessive or prolonged, it may be diagnosed as Adjustment Disorder under DSM-5 guidelines. This condition can impair personal, social, or occupational life unless timely intervention is provided.</p>
                </div>

                <Link href="/" className="lg:px-30 px-16 py-6 bg-black rounded-full lg:text-[2vw] text-[4.5vw] ">Know More</Link>
            </section>

            {/* Section */}
            <section className="bg-white w-full h-full lg:px-20 px-10 lg:py-20 py-10 text-center">
                <h2 className={`text-[#0E7EA0] lg:text-[3.8vw] text-[7vw] font-bold ${playfair.className} mb-8`}>Causes of Adjustment-Related Problems</h2>
                <p className="text-black lg:text-[1.0vw] text-[3.5vw] mb-10">These problems stem from a blend of biological sensitivity,
                    psychological traits, and environmental stressors.</p>

                <div className="grid lg:grid-cols-3 grid-cols-1 gap-4 mb-0">
                    {/* Technique Card 1 */}
                    <div className="[perspective:1000px] cursor-pointer ">
                        <div className="relative w-full aspect-square transition-all duration-500 [transform-style:preserve-3d] hover:[transform:rotateY(180deg)]">
                            <div className="absolute inset-0 bg-[#0E7EA0] w-full lg:lg:h-[50vh] rounded-xl p-6 text-white flex flex-col items-center justify-center [backface-visibility:hidden]">
                                <h3 className="lg:text-[1.0vw] text-[4vw] font-bold">Biological and Psychological Influences</h3>
                            </div>
                            <div className="absolute inset-0 bg-[#0E7EA0] w-full lg:lg:h-[50vh] rounded-xl p-6 text-white flex flex-col items-center justify-center [transform:rotateY(180deg)] [backface-visibility:hidden]">
                                <p className="lg:text-[1vw] text-[3vw]">Genetic predisposition, disrupted stress regulation (like HPA axis dysfunction), and existing mental health conditions such as anxiety or depression increase the risk of adjustment difficulties.</p>
                            </div>
                        </div>
                    </div>

                    {/* Technique Card 2 */}
                    <div className="[perspective:1000px] cursor-pointer">
                        <div className="relative w-full aspect-square transition-all duration-500 [transform-style:preserve-3d] hover:[transform:rotateY(180deg)]">
                            <div className="absolute inset-0 bg-[#FFD700] w-full lg:h-[50vh] rounded-xl p-6 text-black flex flex-col items-center justify-center [backface-visibility:hidden]">
                                <h3 className="lg:text-[1.0vw] text-[4vw] font-bold">Environmental and Situational Triggers</h3>
                            </div>
                            <div className="absolute inset-0 bg-[#FFD700] w-full lg:h-[50vh] rounded-xl p-6 text-black flex flex-col items-center justify-center [transform:rotateY(180deg)] [backface-visibility:hidden]">
                                <p className="lg:text-[1vw] text-[3vw]">Unexpected life changes—such as moving cities, divorce, job loss, or trauma—can overwhelm one&apos;s coping capacity and trigger psychological distress or dysfunction.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Technique Card 3 */}
                    <div className="[perspective:1000px] cursor-pointer">
                        <div className="relative w-full aspect-square transition-all duration-500 [transform-style:preserve-3d] hover:[transform:rotateY(180deg)]">
                            <div className="absolute inset-0 bg-[#0E7EA0]  w-full lg:h-[50vh] rounded-xl p-6 text-white flex flex-col items-center justify-center [backface-visibility:hidden]">
                                <h3 className="lg:text-[1.0vw] text-[4vw] font-bold">Psychosocial Stressors</h3>
                            </div>
                            <div className="absolute inset-0 bg-[#0E7EA0] w-full lg:h-[50vh] rounded-xl p-6 text-white flex flex-col items-center justify-center [transform:rotateY(180deg)] [backface-visibility:hidden]">
                                <p className="lg:text-[1vw] text-[3vw]">Limited support systems, unhealthy coping behaviors, societal pressure, and poor conflict-resolution skills can hinder emotional adaptation and increase vulnerability to stress.</p>
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
                    Symptoms of Adjustment-Related Problems
                </h2>

                <p className="text-black lg:text-[1.5vw] text-[3vw] mb-10">
                    Symptoms often appear within three months of a stressor
                    and affect mood, behavior, and cognitive processing.
                </p>

                <div className="flex flex-col lg:flex-row justify-between gap-4 text-black mb-16">
                    {Object.keys(symptoms).map((tab) => (
                        <button
                            key={tab}
                            onClick={() => setActiveTab(tab as SymptomCategory)}
                            className={`px-4 py-2 rounded-lg transition-all ${activeTab === tab ? 'bg-[#0E7EA0] text-white' : 'hover:bg-gray-100'
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
                            src={`/diseases/adjustment-related/${activeTab === 'emotional'
                                ? '1'
                                : activeTab === 'behavioral'
                                    ? '2'
                                    : activeTab === 'cognitive'
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

            {/* Solutions to Managing Adjustment-Related Problems */}
            <section className="bg-white w-full h-full lg:px-20 px-10 lg:py-30 py-10 text-center">
                <h2 className={`text-[#0E7EA0] lg:text-[4vw] text-[7vw] font-semibold ${playfair.className}`}>
                    Solutions to Managing Adjustment-Related Problems
                </h2>

                <p className="text-black lg:text-[1.55vw] text-[3.5vw] font-medium mb-10">
                    Managing adjustment issues involves emotional regulation, cognitive restructuring, lifestyle changes, and sometimes therapeutic intervention. Here are some recommended solutions:
                </p>

                <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
                    {adjustmentSolutions.map((item, index) => (
                        <div key={index} className="bg-[#0E7EA0] rounded-3xl text-white text-center">
                            <Image
                                src={`/diseases/adjustment-relatedv2/${index + 1}.webp`}
                                alt={item.title}
                                width={300}
                                height={200}
                                className="w-full h-48 object-cover rounded-2xl mb-6"
                            />
                            <div className="p-6">
                                <h3 className="text-lg font-bold mb-4">{item.title}</h3>
                                <p className="text-sm">{item.description}</p>
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

export default AdjustmentRelated