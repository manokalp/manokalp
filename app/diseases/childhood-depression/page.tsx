"use client"
import Image from "next/image"
import Link from "next/link"
import { useState } from 'react';
// import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import playfair from "../../../fonts/playfair.module.css"

const ChildhoodDepression = () => {
    const [activeTab, setActiveTab] = useState<SymptomCategory>('physical');
    const symptoms = {
        physical: [
            "Stomachaches, headaches, or nausea",
            "Rapid heartbeat and shortness of breath",
            "Sweating or trembling",
            "Restlessness and tiredness",
            "Difficulty sleeping or frequent nightmares"
        ],
        emotional: [
            "Persistent sadness or hopelessness",
            "Loss of interest in activities",
            "Feelings of worthlessness",
            "Excessive guilt or self-blame",
            "Frequent mood swings"
        ],
        behavioral: [
            "Social withdrawal",
            "Aggressive or defiant behavior",
            "Changes in eating habits",
            "Poor academic performance",
            "Difficulty concentrating"
        ],
        cognitive: [
            "Negative thought patterns",
            "Difficulty making decisions",
            "Poor concentration",
            "Memory problems",
            "Thoughts of death or suicide"
        ]
    };
    type SymptomCategory = keyof typeof symptoms;

    return (
        <main className="w-full h-full flex justify-center flex-col  bg-white ">
            {/* ASPD Hero Desktop  */}
            <div className="w-full hidden lg:block text-center ">
                <h2 className="lg:text-[5vw] text-[6vw] text-white font-semibold relative z-10 font-[playfull] translate-y-[3vw]">What is Childhood Depression ?</h2>
                <Image src="/diseases-banner/childhood-depression.webp" alt="hero image" objectFit="cover" width={1200} height={100} className="w-full  lg:mt-[-16vw] mt-[-25vw]  z-0" />
            </div>

            {/* ASPD Hero Mobile  */}
            <div className="w-full lg:hidden block text-center ">

                <Image src="/diseases-banner/childhood-depression.webp" alt="hero image" objectFit="cover" width={1200} height={100} className="w-full     z-0" />
                <h2 className="lg:text-[5vw] text-[6vw] text-white font-semibold relative z-10 font-[playfull] mt-[-10vw] mb-10">What is Childhood Depression ?</h2>
            </div>

            {/* The Harsh Truth Section  */}
            <section className="bg-[#0E7EA0] rounded-full w-full h-full lg:px-40 px-10 lg:py-20 py-20 text-center lg:mt-[-20vw] mt-[-0vw]">
                <div className="flex flex-col justify-center items-center lg:mb-20 mb-10">
                    <h2 className="lg:text-[4.0vw] text-[8.5vw] font-bold font-[playfull]"></h2>

                </div>
                <div className="flex flex-col lg:flex-row justify-center lg:gap-20 gap-10 items-center text-center mb-20">

                    <p className="lg:text-[1.55vw] text-[3.5vw] font-medium text-left">Childhood depression is a serious mental health condition that affects many children and adolescents worldwide. It goes beyond occasional sadness and can significantly impact a child’s emotional, social, and academic life. Unlike adults, children may not always have the vocabulary or understanding to express their feelings,</p>
                    <p className="lg:text-[1.55vw] text-[3.5vw] font-medium text-left">making it crucial for caregivers, parents, and educators to recognize the signs early. If not treated, depression in children can cause long-term mental illnesses, impacting the development of a child and overall health. Knowledge about its causes, symptoms, and remedies is important in ensuring recovery and overcoming of children.</p>
                </div>

                <Link href="/" className="lg:px-30 px-16 py-6 bg-black rounded-full lg:text-[2vw] text-[4.5vw] ">Know More</Link>
            </section>

            {/* Section */}
            <section className="bg-white w-full h-full lg:px-20 px-10 lg:py-20 py-10 text-center">
                <h2 className={`text-[#0E7EA0] lg:text-[3.8vw] text-[7vw] font-bold ${playfair.className} mb-8`}>Causes of Childhood Depression</h2>
                <p className="text-black lg:text-[1.0vw] text-[3.5vw] mb-10">Childhood depression can be caused by many biological, psychological,
                    and environmental reasons. Some of the most prevalent causes are:</p>

                <div className="grid lg:grid-cols-5 grid-cols-1 gap-4 mb-40">
                    {/* Technique Card 1 */}
                    <div className="[perspective:1000px] cursor-pointer ">
                        <div className="relative w-full aspect-square transition-all duration-500 [transform-style:preserve-3d] hover:[transform:rotateY(180deg)]">
                            <div className="absolute inset-0 bg-[#0E7EA0] w-full lg:lg:h-[50vh] rounded-xl p-6 text-white flex flex-col items-center justify-center [backface-visibility:hidden]">
                                <h3 className="lg:text-[1.0vw] text-[4vw] font-bold">Genetic Predisposition</h3>
                            </div>
                            <div className="absolute inset-0 bg-[#0E7EA0] w-full lg:lg:h-[50vh] rounded-xl p-6 text-white flex flex-col items-center justify-center [transform:rotateY(180deg)] [backface-visibility:hidden]">
                                <p className="lg:text-[1vw] text-[3vw]">Children whose family has a history of anxiety or mental illness have a higher chance of developing anxiety.</p>
                            </div>
                        </div>
                    </div>

                    {/* Technique Card 2 */}
                    <div className="[perspective:1000px] cursor-pointer">
                        <div className="relative w-full aspect-square transition-all duration-500 [transform-style:preserve-3d] hover:[transform:rotateY(180deg)]">
                            <div className="absolute inset-0 bg-[#FFD700] w-full lg:h-[50vh] rounded-xl p-6 text-black flex flex-col items-center justify-center [backface-visibility:hidden]">
                                <h3 className="lg:text-[1.0vw] text-[4vw] font-bold">Brain Chemistry and Hormonal Imbalances</h3>
                            </div>
                            <div className="absolute inset-0 bg-[#FFD700] w-full lg:h-[50vh] rounded-xl p-6 text-black flex flex-col items-center justify-center [transform:rotateY(180deg)] [backface-visibility:hidden]">
                                <p className="lg:text-[1vw] text-[3vw]">An imbalance of neurotransmitters, including low serotonin and dopamine levels, can lead to depression.</p>
                            </div>
                        </div>
                    </div>

                    {/* Technique Card 3 */}
                    <div className="[perspective:1000px] cursor-pointer">
                        <div className="relative w-full aspect-square transition-all duration-500 [transform-style:preserve-3d] hover:[transform:rotateY(180deg)]">
                            <div className="absolute inset-0 bg-[#0E7EA0]  w-full lg:h-[50vh] rounded-xl p-6 text-white flex flex-col items-center justify-center [backface-visibility:hidden]">
                                <h3 className="lg:text-[1.0vw] text-[4vw] font-bold">Trauma and Stressful Life Events</h3>
                            </div>
                            <div className="absolute inset-0 bg-[#0E7EA0] w-full lg:h-[50vh] rounded-xl p-6 text-white flex flex-col items-center justify-center [transform:rotateY(180deg)] [backface-visibility:hidden]">
                                <p className="lg:text-[1vw] text-[3vw]"> Loss of a loved one, divorce of parents, abuse, neglect, or bullying are some experiences that can cause depression.</p>
                            </div>
                        </div>
                    </div>

                    {/* Technique Card 4 */}
                    <div className="[perspective:1000px] cursor-pointer">
                        <div className="relative w-full aspect-square transition-all duration-500 [transform-style:preserve-3d] hover:[transform:rotateY(180deg)]">
                            <div className="absolute inset-0 bg-[#FFD700] w-full lg:h-[50vh] rounded-xl p-6 text-black flex flex-col items-center justify-center [backface-visibility:hidden]">
                                <h3 className="lg:text-[1.0vw] text-[4vw] font-bold">Social Isolation and Loneliness</h3>
                            </div>
                            <div className="absolute inset-0 bg-[#FFD700] w-full lg:h-[50vh] rounded-xl p-6 text-black flex flex-col items-center justify-center [transform:rotateY(180deg)] [backface-visibility:hidden]">
                                <p className="lg:text-[1vw] text-[3vw]">Children who have difficulty making friends or are left out of social situations tend to develop sadness and feelings of worthlessness.</p>
                            </div>
                        </div>
                    </div>

                    {/* Technique Card 5 */}
                    <div className="[perspective:1000px] cursor-pointer">
                        <div className="relative w-full aspect-square transition-all duration-500 [transform-style:preserve-3d] hover:[transform:rotateY(180deg)]">
                            <div className="absolute inset-0 bg-[#0E7EA0] w-full lg:h-[50vh] rounded-xl p-6 text-white flex flex-col items-center justify-center [backface-visibility:hidden]">
                                <h3 className="lg:text-[1.0vw] text-[4vw] font-bold">Academic Pressure and High Expectations</h3>
                            </div>
                            <div className="absolute inset-0 bg-[#0E7EA0] w-full lg:h-[50vh] rounded-xl p-6 text-white flex flex-col items-center justify-center [transform:rotateY(180deg)] [backface-visibility:hidden]">
                                <p className="lg:text-[1vw] text-[3vw]">Overwhelming stress about schoolwork, tests, or expectations from parents can result in depression and feelings of inadequacy.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="grid lg:grid-cols-5 grid-cols-1 gap-4 mb-40">
                    {/* Technique Card 6 */}
                    <div className="[perspective:1000px] cursor-pointer">
                        <div className="relative w-full aspect-square transition-all duration-500 [t    ransform-style:preserve-3d] hover:[transform:rotateY(180deg)]">
                            <div className="absolute inset-0 bg-[#FFD700] w-full lg:h-[50vh] rounded-xl p-6 text-black flex flex-col items-center justify-center [backface-visibility:hidden]">
                                <h3 className="lg:text-[1.0vw] text-[4vw] font-bold">Low Self-Esteem and Negative Self-Image</h3>
                            </div>
                            <div className="absolute inset-0 bg-[#FFD700] w-full lg:h-[50vh] rounded-xl p-6 text-black flex flex-col items-center justify-center [transform:rotateY(180deg)] [backface-visibility:hidden]">
                                <p className="lg:text-[1vw] text-[3vw]">Children who are hypercritical of themselves or frequently fail may develop depressive symptoms.</p>
                            </div>
                        </div>
                    </div>

                    {/* Technique Card 7 */}
                    <div className="[perspective:1000px] cursor-pointer">
                        <div className="relative w-full aspect-square transition-all duration-500 [transform-style:preserve-3d] hover:[transform:rotateY(180deg)]">
                            <div className="absolute inset-0 bg-[#0E7EA0] w-full lg:h-[50vh] rounded-xl p-6 text-white flex flex-col items-center justify-center [backface-visibility:hidden]">
                                <h3 className="lg:text-[1.0vw] text-[4vw] font-bold">Chronic Illness or Disability</h3>
                            </div>
                            <div className="absolute inset-0 bg-[#0E7EA0] w-full lg:h-[50vh] rounded-xl p-6 text-white flex flex-col items-center justify-center [transform:rotateY(180deg)] [backface-visibility:hidden]">
                                <p className="lg:text-[1vw] text-[3vw]">Physical illness can lead to emotional distress and cause depression.</p>
                            </div>
                        </div>
                    </div>

                    {/* Technique Card 8 */}
                    <div className="[perspective:1000px] cursor-pointer">
                        <div className="relative w-full aspect-square transition-all duration-500 [transform-style:preserve-3d] hover:[transform:rotateY(180deg)]">
                            <div className="absolute inset-0 bg-[#FFD700] w-full lg:h-[50vh] rounded-xl p-6 text-black flex flex-col items-center justify-center [backface-visibility:hidden]">
                                <h3 className="lg:text-[1.0vw] text-[4vw] font-bold">Substance Abuse in Family or Child</h3>
                            </div>
                            <div className="absolute inset-0 bg-[#FFD700] w-full lg:h-[50vh] rounded-xl p-6 text-black flex flex-col items-center justify-center [transform:rotateY(180deg)] [backface-visibility:hidden]">
                                <p className="lg:text-[1vw] text-[3vw]">Being exposed to parental alcohol or drug abuse or experimenting with drugs and alcohol can put one at higher risk of depression.</p>
                            </div>
                        </div>
                    </div>

                    {/* Technique Card 9 */}
                    <div className="[perspective:1000px] cursor-pointer">
                        <div className="relative w-full aspect-square transition-all duration-500 [transform-style:preserve-3d] hover:[transform:rotateY(180deg)]">
                            <div className="absolute inset-0 bg-[#0E7EA0] w-full lg:h-[50vh] rounded-xl p-6 text-white flex flex-col items-center justify-center [backface-visibility:hidden]">
                                <h3 className="lg:text-[1.0vw] text-[4vw] font-bold">Lack of Emotional Support</h3>
                            </div>
                            <div className="absolute inset-0 bg-[#0E7EA0] w-full lg:h-[50vh] rounded-xl p-6 text-white flex flex-col items-center justify-center [transform:rotateY(180deg)] [backface-visibility:hidden]">
                                <p className="lg:text-[1vw] text-[3vw]">Failure by the caregivers to show nurturing care and emotional support can leave children unloved and develop depression.</p>
                            </div>
                        </div>
                    </div> {/* Technique Card 10 */}
                    <div className="[perspective:1000px] cursor-pointer">
                        <div className="relative w-full aspect-square transition-all duration-500 [transform-style:preserve-3d] hover:[transform:rotateY(180deg)]">
                            <div className="absolute inset-0 bg-[#FFD700] w-full lg:h-[50vh] rounded-xl p-6 text-black flex flex-col items-center justify-center [backface-visibility:hidden]">
                                <h3 className="lg:text-[1.0vw] text-[4vw] font-bold">Bullying and Peer Pressure</h3>
                            </div>
                            <div className="absolute inset-0 bg-[#FFD700] w-full lg:h-[50vh] rounded-xl p-6 text-black flex flex-col items-center justify-center [transform:rotateY(180deg)] [backface-visibility:hidden]">
                                <p className="lg:text-[1vw] text-[3vw]">Experiencing bullying or pressure to fit in with others can be harmful to a child&apos;s mental well-being.</p>
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
                    Symptoms of Childhood Depression
                </h2>

                <p className="text-black lg:text-[1.5vw] text-[3vw] mb-10">
                    Depression in children appears in the form of a mix of physical, emotional,
                    and behavioral symptoms. Some of the most frequent signs are:
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

                    <div className="lg:w-1/2 h-[40vh] relative overflow-hidden rounded-xl">
                        <Image
                            src={`/diseases/childhooddepression/${activeTab === 'physical'
                                ? '1'
                                : activeTab === 'emotional'
                                    ? '2'
                                    : activeTab === 'behavioral'
                                        ? '3'
                                        : '4'
                                }.webp`}
                            alt={`${activeTab} symptoms illustration`}
                            layout="fill"
                            objectFit="cover"
                            className="transition-opacity duration-300 cursor-pointer"
                        />
                    </div>
                </div>
            </section>

            {/*  Links  */}
            <section className="bg-white w-full h-full lg:px-20 px-10 lg:py-30 py-10 text-center">
                <h2 className={`text-[#0E7EA0] lg:text-[4vw] text-[7vw] font-semibold  ${playfair.className}`}>Solutions to Overcoming Childhood Depression</h2>
                <p className="text-black lg:text-[1.55vw] text-[3.5vw] font-medium mb-10">Treatment of childhood depression involves multi-pronged measures that comprise
                    emotional support, counseling, dietary modifications, and, in a few instances, medication.
                    Following are some beneficial solutions:</p>
                <div className="grid lg:grid-cols-3 grid-cols-1 gap-2">
                    {/* Card 1 */}
                    <div className="bg-[#0E7EA0] rounded-3xl  text-white text-center">
                        <Image src="/diseases/childhooddepressionv2/1.webp" alt="stressed person" width={300} height={200} className="w-full h-48 object-cover rounded-2xl mb-6" />
                        <div className="p-6">
                            <h3 className="text-lg font-bold mb-4">Early Identification and Intervention</h3>
                            <p className="text-sm">Identifying symptoms at an early stage and consulting a professional can avoid the aggravation of depression.</p>
                        </div>
                    </div>

                    {/* Card 2 */}
                    <div className="bg-[#0E7EA0] rounded-3xl text-white text-center">
                        <Image src="/diseases/childhooddepressionv2/2.webp" alt="people communicating" width={300} height={200} className="w-full h-48 object-cover rounded-2xl mb-6" />
                        <div className="p-6">
                            <h3 className="text-lg font-bold mb-4">Therapy and Counseling</h3>
                            <p className="text-sm">CBT helps children reframe negative thoughts, play therapy enables emotional expression through play, and family therapy strengthens communication and support within the home environment.</p>
                        </div>
                    </div>

                    {/* Card 3 */}
                    <div className="bg-[#0E7EA0] rounded-3xl text-white text-center">
                        <Image src="/diseases/childhooddepressionv2/3.webp" alt="people communicating" width={300} height={200} className="w-full h-48 object-cover rounded-2xl mb-6" />
                        <div className="p-6">
                            <h3 className="text-lg font-bold mb-4">Open Communication and Emotional Support</h3>
                            <p className="text-sm">Letting children talk about their feelings without judgment can be relieving and comforting.</p>
                        </div>
                    </div>

                    {/* Card 4 */}
                    <div className="bg-[#0E7EA0] rounded-3xl text-white text-center">
                        <Image src="/diseases/childhooddepressionv2/4.webp" alt="people communicating" width={300} height={200} className="w-full h-48 object-cover rounded-2xl mb-6" />
                        <div className="p-6">
                            <h3 className="text-lg font-bold mb-4">Healthy Lifestyle Changes</h3>
                            <p className="text-sm">Encouraging regular exercise, balanced nutrition, and consistent sleep routines helps regulate mood, enhance mental stability, and support emotional well-being in children.</p>
                        </div>
                    </div>

                    {/* Card 5 */}
                    <div className="bg-[#0E7EA0] rounded-3xl text-white text-center">
                        <Image src="/diseases/childhooddepressionv2/5.webp" alt="people communicating" width={300} height={200} className="w-full h-48 object-cover rounded-2xl mb-6" />
                        <div className="p-6">
                            <h3 className="text-lg font-bold mb-4">Enhancing Self-Esteem and Confidence</h3>
                            <p className="text-sm">Celebrating small achievements, supporting hobbies, and teaching problem-solving and resilience boosts confidence and helps children cope better with emotional challenges.</p>
                        </div>
                    </div>

                    {/* Card 6 */}
                    <div className="bg-[#0E7EA0] rounded-3xl text-white text-center">
                        <Image src="/diseases/childhooddepressionv2/6.webp" alt="people communicating" width={300} height={200} className="w-full h-48 object-cover rounded-2xl mb-6" />
                        <div className="p-6">
                            <h3 className="text-lg font-bold mb-4">School-Based Support Systems</h3>
                            <p className="text-sm">Schools should provide counseling access, train staff to recognize symptoms, and cultivate a safe, inclusive environment that prevents bullying and promotes mental health.</p>
                        </div>
                    </div>
                </div>

                {/* Card 7 */}
                <div className="bg-[#0E7EA0] rounded-3xl text-white text-center">
                    <Image src="/diseases/childhooddepressionv2/7.webp" alt="people communicating" width={300} height={200} className="w-full h-48 object-cover rounded-2xl mb-6" />
                    <div className="p-6">
                        <h3 className="text-lg font-bold mb-4">Medication (If Necessary)</h3>
                        <p className="text-sm">In severe cases, psychiatrists may prescribe antidepressants, ensuring close monitoring to manage symptoms safely and support overall treatment effectiveness.</p>
                    </div>
                </div>

                {/* Card 8 */}
                <div className="bg-[#0E7EA0] rounded-3xl text-white text-center">
                    <Image src="/diseases/childhooddepressionv2/8.webp" alt="people communicating" width={300} height={200} className="w-full h-48 object-cover rounded-2xl mb-6" />
                    <div className="p-6">
                        <h3 className="text-lg font-bold mb-4">Parental Involvement and Education</h3>
                        <p className="text-sm">Educating parents, fostering emotional bonding, and using positive reinforcement instead of criticism strengthens a child&apos;s sense of support and emotional connection.</p>
                    </div>
                </div>

                {/* Card 9 */}
                <div className="bg-[#0E7EA0] rounded-3xl text-white text-center">
                    <Image src="/diseases/childhooddepressionv2/9.webp" alt="people communicating" width={300} height={200} className="w-full h-48 object-cover rounded-2xl mb-6" />
                    <div className="p-6">
                        <h3 className="text-lg font-bold mb-4">Encouraging Social Connections</h3>
                        <p className="text-sm">Helping children build friendships, engage in group activities, and develop communication skills promotes inclusion and counters feelings of isolation or loneliness.</p>
                    </div>
                </div>

                {/* Card 10 */}
                <div className="bg-[#0E7EA0] rounded-3xl text-white text-center">
                    <Image src="/diseases/childhooddepressionv2/10.webp" alt="people communicating" width={300} height={200} className="w-full h-48 object-cover rounded-2xl mb-6" />
                    <div className="p-6">
                        <h3 className="text-lg font-bold mb-4">Mindfulness and Relaxation Strategies</h3>
                        <p className="text-sm"> Mindfulness practices like breathing exercises, yoga, and creative therapies help children manage anxiety, reduce stress, and improve emotional regulation.</p>
                    </div>
                </div>

                {/* Card 11 */}
                <div className="bg-[#0E7EA0] rounded-3xl text-white text-center">
                    <Image src="/diseases/childhooddepressionv2/11.webp" alt="people communicating" width={300} height={200} className="w-full h-48 object-cover rounded-2xl mb-6" />
                    <div className="p-6">
                        <h3 className="text-lg font-bold mb-4">Cognitive-Behavioral Therapy (CBT)</h3>
                        <p className="text-sm">Cognitive-behavioral therapy that addresses altering negative patterns of thinking and educating coping skills can be very effective in treating anxious children.</p>
                    </div>
                     

                    {/* Card 12 */}
                    <div className="bg-[#0E7EA0] rounded-3xl text-white text-center">
                        <Image src="/diseases/childhooddepressionv2/12.webp" alt="people communicating" width={300} height={200} className="w-full h-48 object-cover rounded-2xl mb-6" />
                        <div className="p-6">
                            <h3 className="text-lg font-bold mb-4">Medication When Needed</h3>
                            <p className="text-sm">In certain situations, physicians might prescribe medicine for bad anxiety, but it should always be done in conjunction with therapy and dietary modifications.</p>
                        </div>
                    </div>
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

export default ChildhoodDepression