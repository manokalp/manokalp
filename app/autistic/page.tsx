"use client"
import Image from "next/image"
import Link from "next/link"
// import { useState } from 'react';
// import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import playfair from "../../fonts/playfair.module.css"

const Lifestyle = () => {


    return (
        <main className="w-full h-full flex justify-center flex-col  bg-white ">
            {/* ASPD Hero Desktop  */}
            <div className="w-full hidden lg:block text-center ">
                <h2 className="lg:text-[5vw] text-[6vw] text-white font-semibold relative z-10 font-[playfull] translate-y-[3vw]">Lifestyle Diseases</h2>
                <Image src="/autistic.webp" alt="hero image" objectFit="cover" width={1200} height={100} className="w-full  lg:mt-[-16vw] mt-[-25vw]  z-0" />
            </div>

            {/* ASPD Hero Mobile  */}
            <div className="w-full lg:hidden block text-center ">

                <Image src="/aautistic.webp" alt="hero image" objectFit="cover" width={1200} height={100} className="w-full     z-0" />
                <h2 className="lg:text-[5vw] text-[6vw] text-white font-semibold relative z-10 font-[playfull] mt-[-10vw] mb-10">Lifestyle Diseases</h2>
            </div>

            {/* The Harsh Truth Section  */}
            <section className="bg-[#0E7EA0] rounded-full w-full h-full lg:px-40 px-10 lg:py-20 py-20 text-center lg:mt-[-20vw] mt-[-0vw]">
                <div className="flex flex-col justify-center items-center lg:mb-20 mb-10">
                    <h2 className="lg:text-[4.0vw] text-[8.5vw] font-bold font-[playfull]">Introduction</h2>

                </div>
                <div className="flex flex-col lg:flex-row justify-center lg:gap-20 gap-10 items-center text-center mb-20">

                    <p className="lg:text-[1.55vw] text-[3.5vw] font-medium text-left">Autism Spectrum Disorder (ASD) is a neurodevelopmental disorder that involves communication, social interaction, and behavior. It is referred to as a spectrum disorder because it covers a broad spectrum of symptoms and severity levels, ranging from mild to severe. People with ASD can have difficulties in comprehending social cues,</p>


                    <p className="lg:text-[1.55vw] text-[3.5vw] font-medium text-left">expressing emotions, and participating in normal social interactions. Although autism is a lifelong disorder, early diagnosis and treatment can make a big difference to one&apos;s quality of life and assist a person in acquiring the necessary skills to effectively function in the world.</p>
                </div>

                <Link href="/" className="lg:px-30 px-16 py-6 bg-black rounded-full lg:text-[2vw] text-[4.5vw] ">Know More</Link>
            </section>

            {/* Section */}
            <section className="bg-white w-full h-full lg:px-20 px-10 lg:py-20 py-10 text-center">
                <h2 className={`text-[#0E7EA0] lg:text-[3.8vw] text-[7vw] font-bold ${playfair.className} mb-8`}>Causes of Mood Disorders</h2>
                <p className="text-black lg:text-[1.25vw] text-[3.5vw] mb-10">The causes of ASD are still unknown, but it is said to be the result of a combination 
                of genetic and environmental factors. The major factors that contribute to autism are:</p>

                <div className="grid lg:grid-cols-6 grid-cols-1 gap-4 mb-60">
                    {/* Technique Card 1 */}
                    <div className="[perspective:1000px] cursor-pointer ">
                        <div className="relative w-full aspect-square transition-all duration-500 [transform-style:preserve-3d] hover:[transform:rotateY(180deg)]">
                            <div className="absolute inset-0 bg-[#0E7EA0] w-full lg:lg:h-[50vh] rounded-xl p-6 text-white flex flex-col items-center justify-center [backface-visibility:hidden]">
                                <h3 className="lg:text-[1.25vw] text-[4vw] font-bold">Genetic Factors</h3>
                            </div>
                            <div className="absolute inset-0 bg-[#0E7EA0] w-full lg:lg:h-[50vh] rounded-xl p-6 text-white flex flex-col items-center justify-center [transform:rotateY(180deg)] [backface-visibility:hidden]">
                                <p className="lg:text-[1vw] text-[3vw]">Research suggests that ASD is highly genetic. People with a history of autism in their family are more likely to develop the disorder.</p>
                            </div>
                        </div>
                    </div>

                    {/* Technique Card 2 */}
                    <div className="[perspective:1000px] cursor-pointer">
                        <div className="relative w-full aspect-square transition-all duration-500 [transform-style:preserve-3d] hover:[transform:rotateY(180deg)]">
                            <div className="absolute inset-0 bg-[#FFD700] w-full lg:h-[50vh] rounded-xl p-6 text-black flex flex-col items-center justify-center [backface-visibility:hidden]">
                                <h3 className="lg:text-[1.25vw] text-[4vw] font-bold">Brain Structure and Development</h3>
                            </div>
                            <div className="absolute inset-0 bg-[#FFD700] w-full lg:h-[50vh] rounded-xl p-6 text-black flex flex-col items-center justify-center [transform:rotateY(180deg)] [backface-visibility:hidden]">
                                <p className="lg:text-[1vw] text-[3vw]">Brain differences, especially in neural connections and function, are thought to contribute to ASD.</p>
                            </div>
                        </div>
                    </div>

                    {/* Technique Card 3 */}
                    <div className="[perspective:1000px] cursor-pointer">
                        <div className="relative w-full aspect-square transition-all duration-500 [transform-style:preserve-3d] hover:[transform:rotateY(180deg)]">
                            <div className="absolute inset-0 bg-[#0E7EA0]  w-full lg:h-[50vh] rounded-xl p-6 text-white flex flex-col items-center justify-center [backface-visibility:hidden]">
                                <h3 className="lg:text-[1.25vw] text-[4vw] font-bold">Prenatal and Perinatal Factors</h3>
                            </div>
                            <div className="absolute inset-0 bg-[#0E7EA0] w-full lg:h-[50vh] rounded-xl p-6 text-white flex flex-col items-center justify-center [transform:rotateY(180deg)] [backface-visibility:hidden]">
                                <p className="lg:text-[1vw] text-[3vw]">Prenatal exposure to environmental hazards, including maternal infection, toxin exposure, or birth complications, can raise the risk of autism.</p>
                            </div>
                        </div>
                    </div>

                    {/* Technique Card 4 */}
                    <div className="[perspective:1000px] cursor-pointer">
                        <div className="relative w-full aspect-square transition-all duration-500 [transform-style:preserve-3d] hover:[transform:rotateY(180deg)]">
                            <div className="absolute inset-0 bg-[#FFD700] w-full lg:h-[50vh] rounded-xl p-6 text-black flex flex-col items-center justify-center [backface-visibility:hidden]">
                                <h3 className="lg:text-[1.25vw] text-[4vw] font-bold">Immune System and Inflammation</h3>
                            </div>
                            <div className="absolute inset-0 bg-[#FFD700] w-full lg:h-[50vh] rounded-xl p-6 text-black flex flex-col items-center justify-center [transform:rotateY(180deg)] [backface-visibility:hidden]">
                                <p className="lg:text-[1vw] text-[3vw]">Certain studies indicate that immune system dysfunction or inflammation during early brain development can lead to ASD.</p>
                            </div>
                        </div>
                    </div>

                    {/* Technique Card 5 */}
                    <div className="[perspective:1000px] cursor-pointer">
                        <div className="relative w-full aspect-square transition-all duration-500 [transform-style:preserve-3d] hover:[transform:rotateY(180deg)]">
                            <div className="absolute inset-0 bg-[#0E7EA0] w-full lg:h-[50vh] rounded-xl p-6 text-white flex flex-col items-center justify-center [backface-visibility:hidden]">
                                <h3 className="lg:text-[1.25vw] text-[4vw] font-bold">Environmental Triggers</h3>
                            </div>
                            <div className="absolute inset-0 bg-[#0E7EA0] w-full lg:h-[50vh] rounded-xl p-6 text-white flex flex-col items-center justify-center [transform:rotateY(180deg)] [backface-visibility:hidden]">
                                <p className="lg:text-[1vw] text-[3vw]">Although not a direct cause, some environmental triggers, such as exposure to heavy metals, pollution, and certain medications taken during pregnancy, are under investigation for their role in ASD.</p>
                            </div>
                        </div>
                    </div>

                    {/* Technique Card 6 */}
                    <div className="[perspective:1000px] cursor-pointer">
                        <div className="relative w-full aspect-square transition-all duration-500 [transform-style:preserve-3d] hover:[transform:rotateY(180deg)]">
                            <div className="absolute inset-0 bg-[#FFD700] w-full lg:h-[50vh] rounded-xl p-6 text-black flex flex-col items-center justify-center [backface-visibility:hidden]">
                                <h3 className="lg:text-[1.25vw] text-[4vw] font-bold">Epigenetics</h3>
                            </div>
                            <div className="absolute inset-0 bg-[#FFD700] w-full lg:h-[50vh] rounded-xl p-6 text-black flex flex-col items-center justify-center [transform:rotateY(180deg)] [backface-visibility:hidden]">
                                <p className="lg:text-[1vw] text-[3vw]">The combination of genetic susceptibility and environmental exposure has the potential to change gene expression, which impacts brain development and results in autism.</p>
                            </div>
                        </div>
                    </div>

                    
                </div>
            </section>

            {/*  Section */}
            <section className="bg-white w-full h-full lg:px-60 px-10 lg:py-20 py-10 text-center">
                <h2 className={`text-[#0E7EA0] lg:text-[3.5vw] text-[7vw] font-bold ${playfair.className} mb-12`}>Symptoms of Autism Spectrum Disorder</h2>
                <p className="text-black lg:text-[1.5vw] text-[3vw] mb-10">ASD signs greatly differ in terms of severity and presentation. Common signs generally 
fall into three broad categories, including social communication challenges, 
repetitive behavior, dominant restricted interests, and sensory sensitivities.</p>
                <div className="flex flex-col lg:flex-row justify-between gap-4 text-black mb-16">
                    <p>Social Communication Challenges</p>
                    <p>Repetitive Behaviors and Restricted Interests</p>
                    <p>Sensory Processing Differences</p>
                    <p>Cognitive and Emotional Differences</p>
                </div>

                <div className="flex flex-col lg:flex-row justify-between items-center">
                    <div className="  ">
                        <ul className="text-left text-black">
                            <li className="mb-8 border-b-[2px]">Difficulty in interpreting social cues, facial expressions, and body language</li>
                            <li className="mb-8 border-b-[2px]">Restricted or inappropriate eye contact</li>
                            <li className="mb-8 border-b-[2px]">Delays in speech development or absence of verbal communication</li>
                            <li className="mb-8 border-b-[2px]">Struggling to sustain conversations or participate in mutual communication</li>
                            <li className="mb-8 border-b-[2px]">Prefer solo activities over social interaction</li>
                        </ul>
                    </div>
                    <div className="lg:w-[20vw] w-[80vw] h-[40vh] bg-[#0E7EA0]" />
                </div>

            </section>

            {/*  Links  */}
            <section className="bg-white w-full h-full lg:px-20 px-10 lg:py-20 py-10 text-center">
                <h2 className={`text-[#0E7EA0] lg:text-[4vw] text-[7vw] font-semibold  ${playfair.className}`}>Solutions for Managing Autism Spectrum Disorder</h2>
                <p className="text-black lg:text-[1.55vw] text-[3.5vw] font-medium mb-10">While ASD cannot be cured, numerous interventions and strategies can assist people 
with autism to live meaningful lives. Treatment options must be individually based on the person&apos;s 
particular needs and strengths.</p>
                <div className="grid lg:grid-cols-3 grid-cols-1 gap-2">
                    {/* Card 1 */}
                    <div className="bg-[#0E7EA0] rounded-3xl  text-white text-center">

                        <Image src="/quick_links/2.webp" alt="stressed person" width={300} height={200} className="w-full h-48 object-cover rounded-2xl mb-6" />
                        <div className="p-6">
                            <h3 className="text-lg font-bold mb-4">Early Intervention Programs</h3>
                            <p className="text-sm">Early diagnosis and treatment, such as speech therapy, occupational therapy, and behavior therapy, can contribute to major differences in developmental outcome.</p>
                        </div>
                    </div>

                    {/* Card 2 */}
                    <div className="bg-[#0E7EA0] rounded-3xl text-white text-center">
                        <Image src="/quick_links/2.webp" alt="people communicating" width={300} height={200} className="w-full h-48 object-cover rounded-2xl mb-6" />
                        <div className="p-6">
                            <h3 className="text-lg font-bold mb-4">Applied Behavior Analysis (ABA)</h3>
                            <p className="text-sm">Antidepressants, mood stabilizers, and antipsychotic drugs are often prescribed to balance brain chemistry.</p>
                        </div>
                    </div>

                    {/* Card 3 */}
                    <div className="bg-[#0E7EA0] rounded-3xl text-white text-center">
                        <Image src="/quick_links/2.webp" alt="people communicating" width={300} height={200} className="w-full h-48 object-cover rounded-2xl mb-6" />
                        <div className="p-6">
                            <h3 className="text-lg font-bold mb-4">Speech and Language Therapy</h3>
                            <p className="text-sm">Assists an individual in the development of communications skills, both verbal and non-verbal strategies like picture exchange systems or aid communication devices.</p>
                        </div>
                    </div>

                    {/* Card 4 */}
                    <div className="bg-[#0E7EA0] rounded-3xl text-white text-center">
                        <Image src="/quick_links/2.webp" alt="people communicating" width={300} height={200} className="w-full h-48 object-cover rounded-2xl mb-6" />
                        <div className="p-6">
                            <h3 className="text-lg font-bold mb-4">Social Skills Training</h3>
                            <p className="text-sm">Provides instruction in how to get around social interactions, form relationships, and learn social rules.</p>
                        </div>
                    </div>

                    {/* Card 5 */}
                    <div className="bg-[#0E7EA0] rounded-3xl text-white text-center">
                        <Image src="/quick_links/2.webp" alt="people communicating" width={300} height={200} className="w-full h-48 object-cover rounded-2xl mb-6" />
                        <div className="p-6">
                            <h3 className="text-lg font-bold mb-4">Occupational Therapy</h3>
                            <p className="text-sm">Seeks to enhance sensory integration, motor skills, and daily living skills to maximize independence.</p>
                        </div>
                    </div>

                    {/* Card 6 */}
                    <div className="bg-[#0E7EA0] rounded-3xl text-white text-center">
                        <Image src="/quick_links/2.webp" alt="people communicating" width={300} height={200} className="w-full h-48 object-cover rounded-2xl mb-6" />
                        <div className="p-6">
                            <h3 className="text-lg font-bold mb-4">Adequate Sleep</h3>
                            <p className="text-sm">Ensuring sufficient rest each night can help regulate emotions and reduce anxiety levels.</p>
                        </div>
                    </div>

                    {/* Card 7 */}
                    <div className="bg-[#0E7EA0] rounded-3xl text-white text-center">
                        <Image src="/quick_links/2.webp" alt="people communicating" width={300} height={200} className="w-full h-48 object-cover rounded-2xl mb-6" />
                        <div className="p-6">
                            <h3 className="text-lg font-bold mb-4">Cognitive-Behavioral Therapy (CBT)</h3>
                            <p className="text-sm">Assists with controlling anxiety, stress, and emotional regulation issues.</p>
                        </div>
                    </div>

                    {/* Card 8 */}
                    <div className="bg-[#0E7EA0] rounded-3xl text-white text-center">
                        <Image src="/quick_links/2.webp" alt="people communicating" width={300} height={200} className="w-full h-48 object-cover rounded-2xl mb-6" />
                        <div className="p-6">
                            <h3 className="text-lg font-bold mb-4">Educational Support and Individualized Learning Plans (IEPs)</h3>
                            <p className="text-sm">Institutions can deliver special education plans to meet varying learning styles and academic achievement.</p>
                        </div>
                    </div>

                    {/* Card 9 */}
                    <div className="bg-[#0E7EA0] rounded-3xl text-white text-center">
                        <Image src="/quick_links/2.webp" alt="people communicating" width={300} height={200} className="w-full h-48 object-cover rounded-2xl mb-6" />
                        <div className="p-6">
                            <h3 className="text-lg font-bold mb-4">Sensory Integration Therapy</h3>
                            <p className="text-sm">Aims at assisting the person in dealing with sensory sensitivities and enhancing sensory processing.</p>
                        </div>
                    </div>

                    {/* Card 10 */}
                    <div className="bg-[#0E7EA0] rounded-3xl text-white text-center">
                        <Image src="/quick_links/2.webp" alt="people communicating" width={300} height={200} className="w-full h-48 object-cover rounded-2xl mb-6" />
                        <div className="p-6">
                            <h3 className="text-lg font-bold mb-4">Medication Management</h3>
                            <p className="text-sm">Although there is no drug to cure autism, some drugs may be used to manage symptoms like anxiety, hyperactivity, or sleep disturbances.</p>
                        </div>
                    </div>

                    {/* Card 11 */}
                    <div className="bg-[#0E7EA0] rounded-3xl text-white text-center">
                        <Image src="/quick_links/2.webp" alt="people communicating" width={300} height={200} className="w-full h-48 object-cover rounded-2xl mb-6" />
                        <div className="p-6">
                            <h3 className="text-lg font-bold mb-4">Parental Support and Training</h3>
                            <p className="text-sm">Empowering parents with strategies and tools to support their child&apos;s development and well-being is key to effective management of ASD.</p>
                        </div>
                    </div>

                    {/* Card 12 */}
                    <div className="bg-[#0E7EA0] rounded-3xl text-white text-center">
                        <Image src="/quick_links/2.webp" alt="people communicating" width={300} height={200} className="w-full h-48 object-cover rounded-2xl mb-6" />
                        <div className="p-6">
                            <h3 className="text-lg font-bold mb-4">Structured Routine and Visual Supports</h3>
                            <p className="text-sm">Structured routines, social stories, and visual schedules can assist individuals with ASD in comprehending expectations and minimizing anxiety.</p>
                        </div>
                    </div>

                    {/* Card 13 */}
                    <div className="bg-[#0E7EA0] rounded-3xl text-white text-center">
                        <Image src="/quick_links/2.webp" alt="people communicating" width={300} height={200} className="w-full h-48 object-cover rounded-2xl mb-6" />
                        <div className="p-6">
                            <h3 className="text-lg font-bold mb-4">Facilitating Special Interests and Strengths</h3>
                            <p className="text-sm">Most people with ASD possess exceptional talents or special interests in a particular area. Facilitating these strengths will build confidence and career prospects.</p>
                        </div>
                    </div>

                    {/* Card 14 */}
                    <div className="bg-[#0E7EA0] rounded-3xl text-white text-center">
                        <Image src="/quick_links/2.webp" alt="people communicating" width={300} height={200} className="w-full h-48 object-cover rounded-2xl mb-6" />
                        <div className="p-6">
                            <h3 className="text-lg font-bold mb-4">Community and Peer Support Groups</h3>
                            <p className="text-sm">Being part of autism support communities offers emotional support, resources, and chances of social interaction.</p>
                        </div>
                    </div>

                    {/* Card 15 */}
                    <div className="bg-[#0E7EA0] rounded-3xl text-white text-center">
                        <Image src="/quick_links/2.webp" alt="people communicating" width={300} height={200} className="w-full h-48 object-cover rounded-2xl mb-6" />
                        <div className="p-6">
                            <h3 className="text-lg font-bold mb-4">Self-Care and Well-being</h3>
                            <p className="text-sm">Providing the people with ASD with access to those activities promoting relaxation and overall well-being, for example, exercise, hobbying, or practicing mindfulness. </p>
                        </div>
                    </div>

                    {/* Card 16 */}
                    <div className="bg-[#0E7EA0] rounded-3xl text-white text-center">
                        <Image src="/quick_links/2.webp" alt="people communicating" width={300} height={200} className="w-full h-48 object-cover rounded-2xl mb-6" />
                        <div className="p-6">
                            <h3 className="text-lg font-bold mb-4">Self-Care and Well-being</h3>
                            <p className="text-sm">Providing the people with ASD with access to those activities promoting relaxation and overall well-being, for example, exercise, hobbying, or practicing mindfulness. </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer Section */}
            {/* Prognosis and Future Outlook Section*/}
            <section className="bg-[#FFD266] w-full h-full lg:px-80 px-10 lg:pt-20 lg:pb-[50vw] pt-20 pb-50 mb-[-60vw] text-center z-0 ">
                <h2 className={`text-[#0E7EA0] lg:text-[3.5vw] text-[8vw] font-bold ${playfair.className} mb-10`}>Conclusion</h2>
                <div className="flex flex-col lg:flex-row justify-between items-center text-left text-black gap-20 mb-50">
                    <p>Autism Spectrum Disorder is a highly complex and varied condition with implications for how the individual experiences life. Difficulties certainly present themselves, yet early intervention, individualized therapy, and proper environment can improve an individual&apos;s capacity for survival immensely.</p>
                    <p>By emphasizing strengths, promoting inclusivity, and offering proper resources, society can build a more accommodating and accepting world for those with autism. Greater awareness and education about ASD can contribute to making sure that those with autism get the help that they need to live happy and fulfilling lives</p>
                </div>
            </section>
        </main>
    )
}

export default Lifestyle