"use client"
import Image from "next/image"
import Link from "next/link"
import { useState } from 'react';
// import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import playfair from "../../../fonts/playfair.module.css"

const Lifestyle = () => {
    const [activeTab, setActiveTab] = useState("obesity");

    return (
        <main className="w-full h-full flex justify-center flex-col  bg-white ">
            {/* Hero Desktop  */}
            <div className="w-full hidden lg:block text-center ">
                <h2 className="lg:text-[5vw] text-[6vw] text-white font-semibold relative z-10 font-[playfull] translate-y-[3vw]">Lifestyle Diseases</h2>
                <Image src="/diseases-banner/lifestyle.webp" alt="hero image" objectFit="cover" width={1200} height={100} className="w-full  lg:mt-[-16vw] mt-[-25vw]  z-0" />
            </div>

            {/* Hero Mobile  */}
            <div className="w-full lg:hidden block text-center ">
                <Image src="/diseases-banner/lifestyle.webp" alt="hero image" objectFit="cover" width={1200} height={100} className="w-full     z-0" />
                <h2 className="lg:text-[5vw] text-[6vw] text-white font-semibold relative z-10 font-[playfull] mt-[-10vw] mb-10">Lifestyle Diseases</h2>
            </div>

            {/* Introduction Section  */}
            <section className="bg-[#0E7EA0] rounded-full w-full h-full lg:px-40 px-10 lg:py-20 py-20 text-center lg:mt-[-20vw] mt-[-0vw]">
                <div className="flex flex-col justify-center items-center lg:mb-20 mb-10">
                    <h2 className="lg:text-[4.0vw] text-[8.5vw] font-bold font-[playfull]"></h2>
                </div>
                <div className="flex flex-col lg:flex-row justify-center lg:gap-20 gap-10 items-center text-center mb-20">
                    <p className="lg:text-[1.55vw] text-[3.5vw] font-medium text-left">
                        Lifestyle diseases, also known as non-communicable diseases (NCDs), are health conditions that develop due to how people live their daily lives. Unlike infectious diseases, which are caused by bacteria or viruses, lifestyle diseases develop from unhealthy eating, lack of physical activity, excessive stress, and harmful coping mechanisms. These conditions typically develop over time.
                    </p>
                    <p className="lg:text-[1.55vw] text-[3.5vw] font-medium text-left">
                        Such as an unhealthy eating, lack of physical activity, excessive stress, and harmful coping mechanisms. These conditions can become severe, leading to long-term health complications. Understanding the causes, symptoms, and remedies for lifestyle diseases is crucial for prevention and management.
                    </p>
                </div>

                <Link href="/" className="lg:px-30 px-16 py-6 bg-black rounded-full lg:text-[2vw] text-[4.5vw] ">Know More</Link>
            </section>

            {/* Causes Section */}
            <section className="bg-white w-full h-full lg:px-20 px-10 lg:py-20 py-10 text-center">
                <h2 className={`text-[#0E7EA0] lg:text-[3.8vw] text-[7vw] font-bold ${playfair.className} mb-8`}>Causes of Lifestyle Diseases</h2>
                <p className="text-black lg:text-[1.25vw] text-[3.5vw] mb-10">
                    Lifestyle diseases arise from a combination of poor habits and behaviors, which impact both physical and mental health.
                </p>

                <div className="grid lg:grid-cols-4 grid-cols-1 gap-4 mb-20">
                    {/* Cause Card 1 */}
                    <div className="[perspective:1000px] cursor-pointer">
                        <div className="relative w-full aspect-square transition-all duration-500 [transform-style:preserve-3d] hover:[transform:rotateY(180deg)]">
                            <div className="absolute inset-0 bg-[#0E7EA0] w-full lg:h-[50vh] rounded-xl p-6 text-white flex flex-col items-center justify-center [backface-visibility:hidden]">
                                <h3 className="lg:text-[1.25vw] text-[4vw] font-bold">Dietary Choices</h3>
                            </div>
                            <div className="absolute inset-0 bg-[#0E7EA0] w-full lg:h-[50vh] rounded-xl p-6 text-white flex flex-col items-center justify-center [transform:rotateY(180deg)] [backface-visibility:hidden]">
                                <p className="lg:text-[1vw] text-[3vw]">Consumption of processed foods high in sugar, salt, and unhealthy fats contributes to numerous health issues including obesity, diabetes, and heart disease.</p>
                            </div>
                        </div>
                    </div>

                    {/* Cause Card 2 */}
                    <div className="[perspective:1000px] cursor-pointer">
                        <div className="relative w-full aspect-square transition-all duration-500 [transform-style:preserve-3d] hover:[transform:rotateY(180deg)]">
                            <div className="absolute inset-0 bg-[#FFD700] w-full lg:h-[50vh] rounded-xl p-6 text-black flex flex-col items-center justify-center [backface-visibility:hidden]">
                                <h3 className="lg:text-[1.25vw] text-[4vw] font-bold">Physical Inactivity</h3>
                            </div>
                            <div className="absolute inset-0 bg-[#FFD700] w-full lg:h-[50vh] rounded-xl p-6 text-black flex flex-col items-center justify-center [transform:rotateY(180deg)] [backface-visibility:hidden]">
                                <p className="lg:text-[1vw] text-[3vw]">Sedentary lifestyles and lack of regular exercise lead to decreased metabolism, muscle weakness, and increased risk of cardiovascular diseases.</p>
                            </div>
                        </div>
                    </div>

                    {/* Cause Card 3 */}
                    <div className="[perspective:1000px] cursor-pointer">
                        <div className="relative w-full aspect-square transition-all duration-500 [transform-style:preserve-3d] hover:[transform:rotateY(180deg)]">
                            <div className="absolute inset-0 bg-[#0E7EA0] w-full lg:h-[50vh] rounded-xl p-6 text-white flex flex-col items-center justify-center [backface-visibility:hidden]">
                                <h3 className="lg:text-[1.25vw] text-[4vw] font-bold">Stress and Poor Mental Health</h3>
                            </div>
                            <div className="absolute inset-0 bg-[#0E7EA0] w-full lg:h-[50vh] rounded-xl p-6 text-white flex flex-col items-center justify-center [transform:rotateY(180deg)] [backface-visibility:hidden]">
                                <p className="lg:text-[1vw] text-[3vw]">Chronic stress affects hormonal balance and immune function, contributing to various health problems including hypertension and digestive issues.</p>
                            </div>
                        </div>
                    </div>

                    {/* Cause Card 4 */}
                    <div className="[perspective:1000px] cursor-pointer">
                        <div className="relative w-full aspect-square transition-all duration-500 [transform-style:preserve-3d] hover:[transform:rotateY(180deg)]">
                            <div className="absolute inset-0 bg-[#FFD700] w-full lg:h-[50vh] rounded-xl p-6 text-black flex flex-col items-center justify-center [backface-visibility:hidden]">
                                <h3 className="lg:text-[1.25vw] text-[4vw] font-bold">Environmental Factors</h3>
                            </div>
                            <div className="absolute inset-0 bg-[#FFD700] w-full lg:h-[50vh] rounded-xl p-6 text-black flex flex-col items-center justify-center [transform:rotateY(180deg)] [backface-visibility:hidden]">
                                <p className="lg:text-[1vw] text-[3vw]">Exposure to pollution, toxins, and other environmental hazards can increase the risk of respiratory diseases, allergies, and certain cancers.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Symptoms Section */}
            <section className="bg-white w-full h-full lg:px-60 px-10 lg:py-20 py-10 text-center">
                <h2 className={`text-[#0E7EA0] lg:text-[3.5vw] text-[7vw] font-bold ${playfair.className} mb-12`}>
                    Symptoms Of Lifestyle Diseases
                </h2>
                <p className="text-black lg:text-[1.5vw] text-[3vw] mb-10">
                    Lifestyle Diseases Can Present A Wide Range Of Symptoms Depending On The Specific Condition.
                </p>
                
                {/* Tab Buttons */}
                <div className="flex flex-col lg:flex-row justify-between gap-4 text-black mb-16">
                    <button
                        onClick={() => setActiveTab("obesity")}
                        className={`px-4 py-2 rounded-lg transition-colors ${
                            activeTab === "obesity" ? "bg-[#0E7EA0] text-white" : "bg-gray-100"
                        }`}
                    >
                        Obesity
                    </button>
                    <button
                        onClick={() => setActiveTab("heart")}
                        className={`px-4 py-2 rounded-lg transition-colors ${
                            activeTab === "heart" ? "bg-[#0E7EA0] text-white" : "bg-gray-100"
                        }`}
                    >
                        Heart Disease
                    </button>
                    <button
                        onClick={() => setActiveTab("hypertension")}
                        className={`px-4 py-2 rounded-lg transition-colors ${
                            activeTab === "hypertension" ? "bg-[#0E7EA0] text-white" : "bg-gray-100"
                        }`}
                    >
                        Hypertension
                    </button>
                    <button
                        onClick={() => setActiveTab("diabetes")}
                        className={`px-4 py-2 rounded-lg transition-colors ${
                            activeTab === "diabetes" ? "bg-[#0E7EA0] text-white" : "bg-gray-100"
                        }`}
                    >
                        Diabetes
                    </button>
                    <button
                        onClick={() => setActiveTab("lung")}
                        className={`px-4 py-2 rounded-lg transition-colors ${
                            activeTab === "lung" ? "bg-[#0E7EA0] text-white" : "bg-gray-100"
                        }`}
                    >
                        Lung Diseases
                    </button>
                    
                </div>

                {/* Tab Content */}
                <div className="flex flex-col lg:flex-row justify-between items-start">
                    {/* Obesity Tab */}
                    {activeTab === "obesity" && (
                        <div className="flex flex-col lg:flex-row justify-between items-center w-full">
                            <div className="lg:w-1/2">
                                <ul className="text-left text-black">
                                    <li className="mb-8 border-b-[2px]">Excessive body fat, especially around the waist</li>
                                    <li className="mb-8 border-b-[2px]">Difficulty breathing or shortness of breath</li>
                                    <li className="mb-8 border-b-[2px]">Joint and back pain due to excess weight</li>
                                    <li className="mb-8 border-b-[2px]">Fatigue and reduced mobility</li>
                                    <li className="mb-8 border-b-[2px]">Increased risk of other conditions like diabetes and heart disease</li>
                                </ul>
                            </div>
                            <div className="lg:w-[40%] w-[80vw] h-[40vh] lg:mt-0 mt-8">
                                <Image
                                    src="https://images.pexels.com/photos/5714317/pexels-photo-5714317.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                                    alt="Obesity symptoms visualization"
                                    width={500}
                                    height={300}
                                    className="w-full h-full object-cover rounded-xl"
                                />
                            </div>
                        </div>
                    )}

                    {/* Heart Disease Tab */}
                    {activeTab === "heart" && (
                        <div className="flex flex-col lg:flex-row justify-between items-center w-full">
                            <div className="lg:w-1/2">
                                <ul className="text-left text-black">
                                    <li className="mb-8 border-b-[2px]">Chest pain or discomfort (angina)</li>
                                    <li className="mb-8 border-b-[2px]">Shortness of breath during physical activity</li>
                                    <li className="mb-8 border-b-[2px]">Pain or numbness in arms or legs due to reduced blood flow</li>
                                    <li className="mb-8 border-b-[2px]">Irregular heartbeat or palpitations</li>
                                    <li className="mb-8 border-b-[2px]">Fatigue and dizziness</li>
                                </ul>
                            </div>
                            <div className="lg:w-[40%] w-[80vw] h-[40vh] lg:mt-0 mt-8">
                                <Image
                                    src="https://images.pexels.com/photos/7089401/pexels-photo-7089401.jpeg"
                                    alt="Heart disease symptoms visualization"
                                    width={500}
                                    height={300}
                                    className="w-full h-full object-cover rounded-xl"
                                />
                            </div>
                        </div>
                    )}

                    {/* Hypertension Tab */}
                    {activeTab === "hypertension" && (
                        <div className="flex flex-col lg:flex-row justify-between items-center w-full">
                            <div className="lg:w-1/2">
                                <ul className="text-left text-black">
                                    <li className="mb-8 border-b-[2px]">Often asymptomatic (known as the &quot;silent killer&quot;)</li>
                                    <li className="mb-8 border-b-[2px]">Headaches, particularly in the morning</li>
                                    <li className="mb-8 border-b-[2px]">Blurred or double vision</li>
                                    <li className="mb-8 border-b-[2px]">Nosebleeds</li>
                                    <li className="mb-8 border-b-[2px]">Shortness of breath and heart palpitations</li>
                                </ul>
                            </div>
                            <div className="lg:w-[40%] w-[80vw] h-[40vh] lg:mt-0 mt-8">
                                <Image
                                    src="https://images.pexels.com/photos/4386467/pexels-photo-4386467.jpeg"
                                    alt="Hypertension symptoms visualization"
                                    width={500}
                                    height={300}
                                    className="w-full h-full object-cover rounded-xl"
                                />
                            </div>
                        </div>
                    )}

                    {/* Diabetes Tab */}
                    {activeTab === "diabetes" && (
                        <div className="flex flex-col lg:flex-row justify-between items-center w-full">
                            <div className="lg:w-1/2">
                                <ul className="text-left text-black">
                                    <li className="mb-8 border-b-[2px]">Increased thirst and frequent urination</li>
                                    <li className="mb-8 border-b-[2px]">Unexplained weight loss despite increased appetite</li>
                                    <li className="mb-8 border-b-[2px]">Fatigue and irritability</li>
                                    <li className="mb-8 border-b-[2px]">Blurred vision</li>
                                    <li className="mb-8 border-b-[2px]">Slow-healing sores or frequent infections</li>
                                </ul>
                            </div>
                            <div className="lg:w-[40%] w-[80vw] h-[40vh] lg:mt-0 mt-8">
                                <Image
                                    src="https://images.pexels.com/photos/7722641/pexels-photo-7722641.jpeg"
                                    alt="Diabetes symptoms visualization"
                                    width={500}
                                    height={300}
                                    className="w-full h-full object-cover rounded-xl"
                                />
                            </div>
                        </div>
                    )}

                    {/* Lung Diseases Tab */}
                    {activeTab === "lung" && (
                        <div className="flex flex-col lg:flex-row justify-between items-center w-full">
                            <div className="lg:w-1/2">
                                <ul className="text-left text-black">
                                    <li className="mb-8 border-b-[2px]">Chronic cough, often with mucus</li>
                                    <li className="mb-8 border-b-[2px]">Shortness of breath, especially during physical activities</li>
                                    <li className="mb-8 border-b-[2px]">Wheezing and chest tightness</li>
                                    <li className="mb-8 border-b-[2px]">Recurring respiratory infections</li>
                                    <li className="mb-8 border-b-[2px]">Fatigue and decreased exercise tolerance</li>
                                </ul>
                            </div>
                            <div className="lg:w-[40%] w-[80vw] h-[40vh] lg:mt-0 mt-8">
                                <Image
                                    src="https://images.pexels.com/photos/4047186/pexels-photo-4047186.jpeg"
                                    alt="Lung diseases symptoms visualization"
                                    width={500}
                                    height={300}
                                    className="w-full h-full object-cover rounded-xl"
                                />
                            </div>
                        </div>
                    )}

                    {/* Mental Health Tab */}
                    {activeTab === "mental" && (
                        <div className="flex flex-col lg:flex-row justify-between items-center w-full">
                            <div className="lg:w-1/2">
                                <ul className="text-left text-black">
                                    <li className="mb-8 border-b-[2px]">Persistent feelings of sadness, anxiety, or emptiness</li>
                                    <li className="mb-8 border-b-[2px]">Changes in sleep patterns (insomnia or oversleeping)</li>
                                    <li className="mb-8 border-b-[2px]">Loss of interest in previously enjoyed activities</li>
                                    <li className="mb-8 border-b-[2px]">Difficulty concentrating and making decisions</li>
                                    <li className="mb-8 border-b-[2px]">Physical symptoms like headaches or digestive issues with no clear cause</li>
                                </ul>
                            </div>
                            <div className="lg:w-[40%] w-[80vw] h-[40vh] lg:mt-0 mt-8">
                                <Image
                                    src="https://images.pexels.com/photos/3047035/pexels-photo-3047035.jpeg"
                                    alt="Mental health disorders visualization"
                                    width={500}
                                    height={300}
                                    className="w-full h-full object-cover rounded-xl"
                                />
                            </div>
                        </div>
                    )}
                </div>
            </section>

            {/* Solutions Section */}
            <section className="bg-white w-full h-full lg:px-20 px-10 lg:py-20 py-10 text-center">
                <h2 className={`text-[#0E7EA0] lg:text-[4vw] text-[7vw] font-semibold ${playfair.className}`}>
                    Solutions for Preventing and Managing Lifestyle Diseases
                </h2>
                <p className="text-black lg:text-[1.55vw] text-[3.5vw] font-medium mb-10">
                    Preventing And Managing Lifestyle Diseases Requires A Comprehensive Approach That Addresses Both Physical And Mental Health.
                </p>
                
                <div className="grid lg:grid-cols-3 grid-cols-1 gap-6 mb-6">
                    {/* Card 1 */}
                    <div className="bg-[#0E7EA0] rounded-3xl text-white text-center">
                        <Image 
                            src="https://images.pexels.com/photos/1640770/pexels-photo-1640770.jpeg" 
                            alt="Healthy food options" 
                            width={300} 
                            height={200} 
                            className="w-full h-48 object-cover rounded-t-3xl" 
                        />
                        <div className="p-6">
                            <h3 className="text-lg font-bold mb-4">Healthy Lifestyle Changes</h3>
                            <p className="text-sm">
                                Encouraging regular exercise, balanced nutrition, and consistent sleep routines helps regulate mood, enhance mental stability, and support emotional well-being in children.
                            </p>
                        </div>
                    </div>

                    {/* Card 2 */}
                    <div className="bg-[#0E7EA0] rounded-3xl text-white text-center">
                        <Image 
                            src="https://images.pexels.com/photos/2827392/pexels-photo-2827392.jpeg" 
                            alt="Person jumping with joy" 
                            width={300} 
                            height={200} 
                            className="w-full h-48 object-cover rounded-t-3xl" 
                        />
                        <div className="p-6">
                            <h3 className="text-lg font-bold mb-4">Enhancing Self-Esteem and Confidence</h3>
                            <p className="text-sm">
                                Celebrating small achievements, supporting hobbies, and teaching problem-solving and resilience boosts confidence and helps children cope better with emotional challenges.
                            </p>
                        </div>
                    </div>

                    {/* Card 3 */}
                    <div className="bg-[#0E7EA0] rounded-3xl text-white text-center">
                        <Image 
                            src="/diseases/impulsivity/2.webp" 
                            alt="School support system" 
                            width={300} 
                            height={200} 
                            className="w-full h-48 object-cover rounded-t-3xl" 
                        />
                        <div className="p-6">
                            <h3 className="text-lg font-bold mb-4">School-Based Support Systems</h3>
                            <p className="text-sm">
                                Schools should provide counseling access, train staff to recognize symptoms, and cultivate a safe, inclusive environment that prevents bullying and promotes mental health.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="grid lg:grid-cols-3 grid-cols-1 gap-6">
                    {/* Card 4 */}
                    <div className="bg-[#0E7EA0] rounded-3xl text-white text-center">
                        <Image 
                            src="https://images.pexels.com/photos/7615460/pexels-photo-7615460.jpeg" 
                            alt="Medication management" 
                            width={300} 
                            height={200} 
                            className="w-full h-48 object-cover rounded-t-3xl" 
                        />
                        <div className="p-6">
                            <h3 className="text-lg font-bold mb-4">Medication (If Necessary)</h3>
                            <p className="text-sm">
                                In severe cases, psychiatrists may prescribe antidepressants, ensuring close monitoring to manage symptoms safely and support overall treatment effectiveness.
                            </p>
                        </div>
                    </div>

                    {/* Card 5 */}
                    <div className="bg-[#0E7EA0] rounded-3xl text-white text-center">
                        <Image 
                            src="https://images.pexels.com/photos/3768142/pexels-photo-3768142.jpeg" 
                            alt="Family support" 
                            width={300} 
                            height={200} 
                            className="w-full h-48 object-cover rounded-t-3xl" 
                        />
                        <div className="p-6">
                            <h3 className="text-lg font-bold mb-4">Parental Involvement and Education</h3>
                            <p className="text-sm">
                                Educating parents, fostering emotional bonding, and using positive reinforcement instead of criticism strengthens a child&apos;s sense of support and emotional connection.
                            </p>
                        </div>
                    </div>

                    {/* Card 6 */}
                    <div className="bg-[#0E7EA0] rounded-3xl text-white text-center">
                        <Image 
                            src="/diseases/impulsivity/1.webp" 
                            alt="Social connection" 
                            width={300} 
                            height={200} 
                            className="w-full h-48 object-cover rounded-t-3xl" 
                        />
                        <div className="p-6">
                            <h3 className="text-lg font-bold mb-4">Encouraging Social Connections</h3>
                            <p className="text-sm">
                                Helping children build friendships, engage in group activities, and develop communication skills promotes inclusion and counters feelings of isolation or loneliness.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer Section */}
           
        </main>
    )
}

export default Lifestyle