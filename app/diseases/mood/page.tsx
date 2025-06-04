"use client"
import Image from "next/image"
import Link from "next/link"
// import { useState } from 'react';
// import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import playfair from "../../../fonts/playfair.module.css"

const Mood = () => {


    return (
        <main className="w-full h-full flex justify-center flex-col  bg-white ">
            {/* ASPD Hero Desktop  */}
            <div className="w-full hidden lg:block text-center ">
                <h2 className="lg:text-[5vw] text-[6vw] text-white font-semibold relative z-10 font-[playfull] translate-y-[3vw]">Mood Disorder</h2>
                <Image src="/diseases-banner/mood.webp" alt="hero image" objectFit="cover" width={1200} height={100} className="w-full  lg:mt-[-16vw] mt-[-25vw]  z-0" />
            </div>

            {/* ASPD Hero Mobile  */}
            <div className="w-full lg:hidden block text-center ">

                <Image src="/diseases-banner/mood.webp" alt="hero image" objectFit="cover" width={1200} height={100} className="w-full     z-0" />
                <h2 className="lg:text-[5vw] text-[6vw] text-white font-semibold relative z-10 font-[playfull] mt-[-10vw] mb-10">Mood Disorder

                </h2>
            </div>

            {/* The Harsh Truth Section  */}
            <section className="bg-[#0E7EA0] rounded-full w-full h-full lg:px-40 px-10 lg:py-20 py-20 text-center lg:mt-[-20vw] mt-[-0vw]">
                <div className="flex flex-col justify-center items-center lg:mb-20 mb-10">
                    <h2 className="lg:text-[4.0vw] text-[8.5vw] font-bold font-[playfull]"></h2>

                </div>
                <div className="flex flex-col lg:flex-row justify-center lg:gap-20 gap-10 items-center text-center mb-20">

                    <p className="lg:text-[1.55vw] text-[3.5vw] font-medium text-left">Mood disorders are a class of mental disorders that directly target an individual&apos;s emotional status. They induce constant mood disturbances that vary from unrelenting melancholy and helplessness in depression to phases of hyperactivity and elation in bipolar disorder. </p>


                    <p className="lg:text-[1.55vw] text-[3.5vw] font-medium text-left">Mood disorders affect daily functioning, interpersonal relationships, and overall functioning significantly. Recognizing their cause, symptoms, and options available is essential to manage and heal them effectively.</p>
                </div>

                <Link href="/" className="lg:px-30 px-16 py-6 bg-black rounded-full lg:text-[2vw] text-[4.5vw] ">Know More</Link>
            </section>

            {/* Section */}
            <section className="bg-white w-full h-full lg:px-20 px-10 lg:py-20 py-10 text-center">
                <h2 className={`text-[#0E7EA0] lg:text-[3.8vw] text-[7vw] font-bold ${playfair.className} mb-8`}>Causes of Mood Disorders</h2>
                <p className="text-black lg:text-[1.25vw] text-[3.5vw] mb-10">Mood disorders are the outcome of an intricate interaction between biological, 
                psychological, and environmental factors. The most frequent causes are:</p>

                <div className="grid lg:grid-cols-7 grid-cols-1 gap-4 mb-60">
                    {/* Technique Card 1 */}
                    <div className="[perspective:1000px] cursor-pointer ">
                        <div className="relative w-full aspect-square transition-all duration-500 [transform-style:preserve-3d] hover:[transform:rotateY(180deg)]">
                            <div className="absolute inset-0 bg-[#0E7EA0] w-full lg:lg:h-[50vh] rounded-xl p-6 text-white flex flex-col items-center justify-center [backface-visibility:hidden]">
                                <h3 className="lg:text-[1.25vw] text-[4vw] font-bold">Genetic Factors</h3>
                            </div>
                            <div className="absolute inset-0 bg-[#0E7EA0] w-full lg:lg:h-[50vh] rounded-xl p-6 text-white flex flex-col items-center justify-center [transform:rotateY(180deg)] [backface-visibility:hidden]">
                                <p className="lg:text-[1vw] text-[3vw]">A history of mood disorders in the family, e.g., depression or bipolar disorder, raises the likelihood of developing these conditions.</p>
                            </div>
                        </div>
                    </div>

                    {/* Technique Card 2 */}
                    <div className="[perspective:1000px] cursor-pointer">
                        <div className="relative w-full aspect-square transition-all duration-500 [transform-style:preserve-3d] hover:[transform:rotateY(180deg)]">
                            <div className="absolute inset-0 bg-[#FFD700] w-full lg:h-[50vh] rounded-xl p-6 text-black flex flex-col items-center justify-center [backface-visibility:hidden]">
                                <h3 className="lg:text-[1.25vw] text-[4vw] font-bold">Brain Chemistry and Neurotransmitters</h3>
                            </div>
                            <div className="absolute inset-0 bg-[#FFD700] w-full lg:h-[50vh] rounded-xl p-6 text-black flex flex-col items-center justify-center [transform:rotateY(180deg)] [backface-visibility:hidden]">
                                <p className="lg:text-[1vw] text-[3vw]">Imbalance in neurotransmitters such as serotonin, dopamine, and norepinephrine is responsible for mood regulation and can lead to mood disorders.</p>
                            </div>
                        </div>
                    </div>

                    {/* Technique Card 3 */}
                    <div className="[perspective:1000px] cursor-pointer">
                        <div className="relative w-full aspect-square transition-all duration-500 [transform-style:preserve-3d] hover:[transform:rotateY(180deg)]">
                            <div className="absolute inset-0 bg-[#0E7EA0]  w-full lg:h-[50vh] rounded-xl p-6 text-white flex flex-col items-center justify-center [backface-visibility:hidden]">
                                <h3 className="lg:text-[1.25vw] text-[4vw] font-bold">Hormonal Changes</h3>
                            </div>
                            <div className="absolute inset-0 bg-[#0E7EA0] w-full lg:h-[50vh] rounded-xl p-6 text-white flex flex-col items-center justify-center [transform:rotateY(180deg)] [backface-visibility:hidden]">
                                <p className="lg:text-[1vw] text-[3vw]">Hormonal changes caused by puberty, pregnancy, menopause, or thyroid disease can affect mood stability.</p>
                            </div>
                        </div>
                    </div>

                    {/* Technique Card 4 */}
                    <div className="[perspective:1000px] cursor-pointer">
                        <div className="relative w-full aspect-square transition-all duration-500 [transform-style:preserve-3d] hover:[transform:rotateY(180deg)]">
                            <div className="absolute inset-0 bg-[#FFD700] w-full lg:h-[50vh] rounded-xl p-6 text-black flex flex-col items-center justify-center [backface-visibility:hidden]">
                                <h3 className="lg:text-[1.25vw] text-[4vw] font-bold">Trauma and Stress</h3>
                            </div>
                            <div className="absolute inset-0 bg-[#FFD700] w-full lg:h-[50vh] rounded-xl p-6 text-black flex flex-col items-center justify-center [transform:rotateY(180deg)] [backface-visibility:hidden]">
                                <p className="lg:text-[1vw] text-[3vw]">Emotional trauma, abuse, significant life changes, or chronic stress can cause mood disorders or make existing conditions worse.</p>
                            </div>
                        </div>
                    </div>

                    {/* Technique Card 5 */}
                    <div className="[perspective:1000px] cursor-pointer">
                        <div className="relative w-full aspect-square transition-all duration-500 [transform-style:preserve-3d] hover:[transform:rotateY(180deg)]">
                            <div className="absolute inset-0 bg-[#0E7EA0] w-full lg:h-[50vh] rounded-xl p-6 text-white flex flex-col items-center justify-center [backface-visibility:hidden]">
                                <h3 className="lg:text-[1.25vw] text-[4vw] font-bold">Medical Conditions</h3>
                            </div>
                            <div className="absolute inset-0 bg-[#0E7EA0] w-full lg:h-[50vh] rounded-xl p-6 text-white flex flex-col items-center justify-center [transform:rotateY(180deg)] [backface-visibility:hidden]">
                                <p className="lg:text-[1vw] text-[3vw]"> Conditions like heart disease, diabetes, and neurological disease are associated with an increased risk of developing depression and other mood disorders.</p>
                            </div>
                        </div>
                    </div>

                    {/* Technique Card 6 */}
                    <div className="[perspective:1000px] cursor-pointer">
                        <div className="relative w-full aspect-square transition-all duration-500 [transform-style:preserve-3d] hover:[transform:rotateY(180deg)]">
                            <div className="absolute inset-0 bg-[#FFD700] w-full lg:h-[50vh] rounded-xl p-6 text-black flex flex-col items-center justify-center [backface-visibility:hidden]">
                                <h3 className="lg:text-[1.25vw] text-[4vw] font-bold">Substance Abuse</h3>
                            </div>
                            <div className="absolute inset-0 bg-[#FFD700] w-full lg:h-[50vh] rounded-xl p-6 text-black flex flex-col items-center justify-center [transform:rotateY(180deg)] [backface-visibility:hidden]">
                                <p className="lg:text-[1vw] text-[3vw]">Alcohol and drug use can change chemistry in the brain, causing or exacerbating mood disorders.</p>
                            </div>
                        </div>
                    </div>

                    {/* Technique Card 7 */}
                    <div className="[perspective:1000px] cursor-pointer">
                        <div className="relative w-full aspect-square transition-all duration-500 [transform-style:preserve-3d] hover:[transform:rotateY(180deg)]">
                            <div className="absolute inset-0 bg-[#FFD700] w-full lg:h-[50vh] rounded-xl p-6 text-black flex flex-col items-center justify-center [backface-visibility:hidden]">
                                <h3 className="lg:text-[1.25vw] text-[4vw] font-bold">Lack of Social Support</h3>
                            </div>
                            <div className="absolute inset-0 bg-[#FFD700] w-full lg:h-[50vh] rounded-xl p-6 text-black flex flex-col items-center justify-center [transform:rotateY(180deg)] [backface-visibility:hidden]">
                                <p className="lg:text-[1vw] text-[3vw]">Social isolation, loneliness, and a lack of close relationships can lead to depressive symptoms.</p>
                            </div>
                        </div>
                    </div>

                    
                </div>
            </section>

            {/*  Section */}
            <section className="bg-white w-full h-full lg:px-60 px-10 lg:py-20 py-10 text-center">
                <h2 className={`text-[#0E7EA0] lg:text-[3.5vw] text-[7vw] font-bold ${playfair.className} mb-12`}>Symptoms of Mood Disorders</h2>
                <p className="text-black lg:text-[1.5vw] text-[3vw] mb-10">Mood disorders express themselves differently, impacting emotions, behavior, and physical health. 
                Symptoms differ according to the condition, yet the following are some common signs:</p>
                <div className="flex flex-col lg:flex-row justify-between gap-4 text-black mb-16">
                    <p>Depressive Symptoms</p>
                    <p>Manic Symptoms </p>
                    <p>Cycling Between Moods</p>
                    <p>Physical Symptoms</p>
                </div>

                <div className="flex flex-col lg:flex-row justify-between items-center">
                    <div className="  ">
                        <ul className="text-left text-black">
                            <li className="mb-8 border-b-[2px]">Decreased interest in things previously found enjoyable</li>
                            <li className="mb-8 border-b-[2px]">Fatigue and lack of energy</li>
                            <li className="mb-8 border-b-[2px]">Changes in weight and appetite</li>
                            <li className="mb-8 border-b-[2px]">Changes in weight and appetite</li>
                            <li className="mb-8 border-b-[2px]">Disturbance in sleep (insomnia or sleeping too much)</li>
                            <li className="mb-8 border-b-[2px]">Thoughts of death or suicide</li>
                        </ul>
                    </div>
                    <div className="lg:w-[20vw] w-[80vw] h-[40vh] bg-[#0E7EA0]" />
                </div>

            </section>

            {/*  Links  */}
            <section className="bg-white w-full h-full lg:px-20 px-10 lg:py-20 py-10 text-center">
                <h2 className={`text-[#0E7EA0] lg:text-[4vw] text-[7vw] font-semibold  ${playfair.className}`}>Solutions for Managing Mood Disorders</h2>
                <p className="text-black lg:text-[1.55vw] text-[3.5vw] font-medium mb-10">Mood disorders need a comprehensive treatment plan that involves therapy, 
                lifestyle modification, and in some cases, medication. Some effective strategies are:</p>
                <div className="grid lg:grid-cols-3 grid-cols-1 gap-2">
                    {/* Card 1 */}
                    <div className="bg-[#0E7EA0] rounded-3xl  text-white text-center">

                        <Image src="/quick_links/2.webp" alt="stressed person" width={300} height={200} className="w-full h-48 object-cover rounded-2xl mb-6" />
                        <div className="p-6">
                            <h3 className="text-lg font-bold mb-4">Psychotherapy and Counseling</h3>
                            <p className="text-sm">Cognitive-Behavioral Therapy (CBT), Dialectical Behavior Therapy (DBT), and other forms of therapy can assist individuals in coping with their mood symptoms.</p>
                        </div>
                    </div>

                    {/* Card 2 */}
                    <div className="bg-[#0E7EA0] rounded-3xl text-white text-center">
                        <Image src="/quick_links/2.webp" alt="people communicating" width={300} height={200} className="w-full h-48 object-cover rounded-2xl mb-6" />
                        <div className="p-6">
                            <h3 className="text-lg font-bold mb-4">Medication</h3>
                            <p className="text-sm">Antidepressants, mood stabilizers, and antipsychotic drugs are often prescribed to balance brain chemistry.</p>
                        </div>
                    </div>

                    {/* Card 3 */}
                    <div className="bg-[#0E7EA0] rounded-3xl text-white text-center">
                        <Image src="/quick_links/2.webp" alt="people communicating" width={300} height={200} className="w-full h-48 object-cover rounded-2xl mb-6" />
                        <div className="p-6">
                            <h3 className="text-lg font-bold mb-4">Healthy Lifestyle Choices</h3>
                            <p className="text-sm">Consistent exercise triggers the release of endorphins, enhancing mood.
                            Adequate nutrition in the form of essential nutrients ensures proper brain functioning. Enough sleep maintains a balance in mood and energy.</p>
                        </div>
                    </div>

                    {/* Card 4 */}
                    <div className="bg-[#0E7EA0] rounded-3xl text-white text-center">
                        <Image src="/quick_links/2.webp" alt="people communicating" width={300} height={200} className="w-full h-48 object-cover rounded-2xl mb-6" />
                        <div className="p-6">
                            <h3 className="text-lg font-bold mb-4">Stress Management Techniques</h3>
                            <p className="text-sm"> Meditation, mindfulness, and controlled breathing can decrease stress and increase emotional resilience. Writing or journaling may serve as a means of venting emotions and monitoring mood trends.</p>
                        </div>
                    </div>

                    {/* Card 5 */}
                    <div className="bg-[#0E7EA0] rounded-3xl text-white text-center">
                        <Image src="/quick_links/2.webp" alt="people communicating" width={300} height={200} className="w-full h-48 object-cover rounded-2xl mb-6" />
                        <div className="p-6">
                            <h3 className="text-lg font-bold mb-4">Social Support</h3>
                            <p className="text-sm">Keeping close contact with friends and family can provide emotional support.
                            Groups of support ensure a sense of belonging and collective experiences.</p>
                        </div>
                    </div>

                    {/* Card 6 */}
                    <div className="bg-[#0E7EA0] rounded-3xl text-white text-center">
                        <Image src="/quick_links/2.webp" alt="people communicating" width={300} height={200} className="w-full h-48 object-cover rounded-2xl mb-6" />
                        <div className="p-6">
                            <h3 className="text-lg font-bold mb-4">Routine and Structure</h3>
                            <p className="text-sm">Creating a schedule for the day can bring in stability and mitigate uncertainty in mood swings.</p>
                        </div>
                    </div>

                    {/* Card 7 */}
                    <div className="bg-[#0E7EA0] rounded-3xl text-white text-center">
                        <Image src="/quick_links/2.webp" alt="people communicating" width={300} height={200} className="w-full h-48 object-cover rounded-2xl mb-6" />
                        <div className="p-6">
                            <h3 className="text-lg font-bold mb-4">Avoiding Triggers</h3>
                            <p className="text-sm">Minimizing alcohol and drug use inhibits worsening of mood symptoms.
                            Stressors can be identified and managed to maintain emotional equilibrium.</p>
                        </div>
                    </div>

                    {/* Card 8 */}
                    <div className="bg-[#0E7EA0] rounded-3xl text-white text-center">
                        <Image src="/quick_links/2.webp" alt="people communicating" width={300} height={200} className="w-full h-48 object-cover rounded-2xl mb-6" />
                        <div className="p-6">
                            <h3 className="text-lg font-bold mb-4">EProfessional Assistance When Necessary</h3>
                            <p className="text-sm">Seeking the advice of a psychiatrist or therapist guarantees access to individualized treatment plans. Crisis intervention services are provided for individuals who are severely emotionally distressed or suicidal.</p>
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

export default Mood