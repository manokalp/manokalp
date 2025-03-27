"use client"
import Image from "next/image"
import Link from "next/link"
// import { useState } from 'react';
// import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import playfair from "../../fonts/playfair.module.css"

const Aggression = () => {


    return (
        <main className="w-full h-full flex justify-center flex-col  bg-white ">
            {/* ASPD Hero Desktop  */}
            <div className="w-full hidden lg:block text-center ">
                <h2 className="lg:text-[5vw] text-[6vw] text-white font-semibold relative z-10 font-[playfull] translate-y-[3vw]">Addiction</h2>
                <Image src="/aggression.webp" alt="hero image" objectFit="cover" width={1200} height={100} className="w-full  lg:mt-[-16vw] mt-[-25vw]  z-0" />
            </div>

            {/* ASPD Hero Mobile  */}
            <div className="w-full lg:hidden block text-center ">

                <Image src="/aggression.webp" alt="hero image" objectFit="cover" width={1200} height={100} className="w-full     z-0" />
                <h2 className="lg:text-[5vw] text-[6vw] text-white font-semibold relative z-10 font-[playfull] mt-[-10vw] mb-10">Addiction</h2>
            </div>

            {/* The Harsh Truth Section  */}
            <section className="bg-[#0E7EA0] rounded-full w-full h-full lg:px-40 px-10 lg:py-20 py-20 text-center lg:mt-[-20vw] mt-[-0vw]">
                <div className="flex flex-col justify-center items-center lg:mb-20 mb-10">
                    <h2 className="lg:text-[4.0vw] text-[8.5vw] font-bold font-[playfull]">Introduction</h2>

                </div>
                <div className="flex flex-col lg:flex-row justify-center lg:gap-20 gap-10 items-center text-center mb-20">

                    <p className="lg:text-[1.55vw] text-[3.5vw] font-medium text-left">Anger and aggression are normal human feelings that can occur due to frustration, threats, or injustice. Anger per se is not a bad thing, but excessive or uncontrollable anger has the potential to result in damaging behaviors and poor relationships.</p>


                    <p className="lg:text-[1.55vw] text-[3.5vw] font-medium text-left">Aggression, a more external form of anger, may lead to physical violence, verbal aggression, or emotional injury. Knowing the reasons, symptoms, and possible solutions for anger management is important to sustain emotional stability and healthy interactions with others.</p>
                </div>

                <Link href="/" className="lg:px-30 px-16 py-6 bg-black rounded-full lg:text-[2vw] text-[4.5vw] ">Know More</Link>
            </section>

            {/* Section */}
            <section className="bg-white w-full h-full lg:px-40 px-10 lg:py-20 py-10 text-center">
                <h2 className={`text-[#0E7EA0] lg:text-[3.8vw] text-[7vw] font-bold ${playfair.className} mb-8`}>Causes of Aggression</h2>
                <p className="text-black lg:text-[1.25vw] text-[3.5vw] mb-10">Anger and aggression may be caused by a host of factors from 
                within and from outside. Some of the most popular causes are:</p>

                <div className="grid lg:grid-cols-4 grid-cols-1 gap-4 mb-60">
                    {/* Technique Card 1 */}
                    <div className="[perspective:1000px] cursor-pointer pb-30">
                        <div className="relative w-full aspect-square transition-all duration-500 [transform-style:preserve-3d] hover:[transform:rotateY(180deg)]">
                            <div className="absolute inset-0 bg-[#0E7EA0] w-full lg:lg:h-[50vh] rounded-xl p-6 text-white flex flex-col items-center justify-center [backface-visibility:hidden]">
                                <h3 className="lg:text-[1.25vw] text-[4vw] font-bold">Frustration and Stress</h3>
                            </div>
                            <div className="absolute inset-0 bg-[#0E7EA0] w-full lg:lg:h-[50vh] rounded-xl p-6 text-white flex flex-col items-center justify-center [transform:rotateY(180deg)] [backface-visibility:hidden]">
                                <p className="lg:text-[1vw] text-[3vw]">When people encounter challenges in the realization of objectives or are overwhelmed by responsibilities, anger can be a spontaneous reaction. Chronic stress can make an individual more irritable and aggressive.</p>
                            </div>
                        </div>
                    </div>

                    {/* Technique Card 2 */}
                    <div className="[perspective:1000px] cursor-pointer">
                        <div className="relative w-full aspect-square transition-all duration-500 [transform-style:preserve-3d] hover:[transform:rotateY(180deg)]">
                            <div className="absolute inset-0 bg-[#FFD700] w-full lg:h-[50vh] rounded-xl p-6 text-black flex flex-col items-center justify-center [backface-visibility:hidden]">
                                <h3 className="lg:text-[1.25vw] text-[4vw] font-bold">Physical or Mental Illnesses</h3>
                            </div>
                            <div className="absolute inset-0 bg-[#FFD700] w-full lg:h-[50vh] rounded-xl p-6 text-black flex flex-col items-center justify-center [transform:rotateY(180deg)] [backface-visibility:hidden]">
                                <p className="lg:text-[1vw] text-[3vw]"> Some medical illnesses, including hormonal imbalance, neurological illness, or mental illness such as depression and anxiety, can be a factor for heightened irritability and violence.</p>
                            </div>
                        </div>
                    </div>

                    {/* Technique Card 3 */}
                    <div className="[perspective:1000px] cursor-pointer">
                        <div className="relative w-full aspect-square transition-all duration-500 [transform-style:preserve-3d] hover:[transform:rotateY(180deg)]">
                            <div className="absolute inset-0 bg-[#0E7EA0]  w-full lg:h-[50vh] rounded-xl p-6 text-white flex flex-col items-center justify-center [backface-visibility:hidden]">
                                <h3 className="lg:text-[1.25vw] text-[4vw] font-bold">Unmet Expectations</h3>
                            </div>
                            <div className="absolute inset-0 bg-[#0E7EA0] w-full lg:h-[50vh] rounded-xl p-6 text-white flex flex-col items-center justify-center [transform:rotateY(180deg)] [backface-visibility:hidden]">
                                <p className="lg:text-[1vw] text-[3vw]">Individuals usually have expectations from circumstances, relationships, or themselves. When expectations are not fulfilled, it may create anger and resentment.</p>
                            </div>
                        </div>
                    </div>

                    {/* Technique Card 4 */}
                    <div className="[perspective:1000px] cursor-pointer">
                        <div className="relative w-full aspect-square transition-all duration-500 [transform-style:preserve-3d] hover:[transform:rotateY(180deg)]">
                            <div className="absolute inset-0 bg-[#FFD700] w-full lg:h-[50vh] rounded-xl p-6 text-black flex flex-col items-center justify-center [backface-visibility:hidden]">
                                <h3 className="lg:text-[1.25vw] text-[4vw] font-bold">Learned Behaviour</h3>
                            </div>
                            <div className="absolute inset-0 bg-[#FFD700] w-full lg:h-[50vh] rounded-xl p-6 text-black flex flex-col items-center justify-center [transform:rotateY(180deg)] [backface-visibility:hidden]">
                                <p className="lg:text-[1vw] text-[3vw]">Some people are raised in a setting where aggression is a normal reaction to disputes. If they have experienced or seen aggressive behavior, they can learn it as a means of coping with their own feelings.</p>
                            </div>
                        </div>
                    </div>

                    {/* Technique Card 5 */}
                    <div className="[perspective:1000px] cursor-pointer">
                        <div className="relative w-full aspect-square transition-all duration-500 [transform-style:preserve-3d] hover:[transform:rotateY(180deg)]">
                            <div className="absolute inset-0 bg-[#0E7EA0] w-full lg:h-[50vh] rounded-xl p-6 text-white flex flex-col items-center justify-center [backface-visibility:hidden]">
                                <h3 className="lg:text-[1.25vw] text-[4vw] font-bold">Lack of Emotional Regulation</h3>
                            </div>
                            <div className="absolute inset-0 bg-[#0E7EA0] w-full lg:h-[50vh] rounded-xl p-6 text-white flex flex-col items-center justify-center [transform:rotateY(180deg)] [backface-visibility:hidden]">
                                <p className="lg:text-[1vw] text-[3vw]">People who are not able to control their emotions might have trouble managing anger in a proper manner, and this can result in impulsive anger or aggressive behavior.</p>
                            </div>
                        </div>
                    </div>
                    {/* Technique Card 6 */}
                    <div className="[perspective:1000px] cursor-pointer">
                        <div className="relative w-full aspect-square transition-all duration-500 [transform-style:preserve-3d] hover:[transform:rotateY(180deg)]">
                            <div className="absolute inset-0 bg-[#FFD700] w-full lg:h-[50vh] rounded-xl p-6 text-white flex flex-col items-center justify-center [backface-visibility:hidden]">
                                <h3 className="lg:text-[1.25vw] text-[4vw] font-bold">Substance Abuse</h3>
                            </div>
                            <div className="absolute inset-0 bg-[#FFD700] w-full lg:h-[50vh] rounded-xl p-6 text-white flex flex-col items-center justify-center [transform:rotateY(180deg)] [backface-visibility:hidden]">
                                <p className="lg:text-[1vw] text-[3vw]">Drinking and drug abuse decrease inhibitions and impair judgment, which causes individuals to become more prone to act violently or lose their temper.</p>
                            </div>
                        </div>
                    </div>

                    {/* Technique Card 7 */}
                    <div className="[perspective:1000px] cursor-pointer">
                        <div className="relative w-full aspect-square transition-all duration-500 [transform-style:preserve-3d] hover:[transform:rotateY(180deg)]">
                            <div className="absolute inset-0 bg-[#0E7EA0] w-full lg:h-[50vh] rounded-xl p-6 text-white flex flex-col items-center justify-center [backface-visibility:hidden]">
                                <h3 className="lg:text-[1.25vw] text-[4vw] font-bold">Environmental Triggers</h3>
                            </div>
                            <div className="absolute inset-0 bg-[#0E7EA0] w-full lg:h-[50vh] rounded-xl p-6 text-white flex flex-col items-center justify-center [transform:rotateY(180deg)] [backface-visibility:hidden]">
                                <p className="lg:text-[1vw] text-[3vw]">Situational stimuli like loud noises, crowded rooms, or disorganized surroundings can lead to feelings of irritation and aggression.</p>
                            </div>
                        </div>
                    </div>

                    {/* Technique Card 8 */}
                    <div className="[perspective:1000px] cursor-pointer">
                        <div className="relative w-full aspect-square transition-all duration-500 [transform-style:preserve-3d] hover:[transform:rotateY(180deg)]">
                            <div className="absolute inset-0 bg-[#FFD700] w-full lg:h-[50vh] rounded-xl p-6 text-white flex flex-col items-center justify-center [backface-visibility:hidden]">
                                <h3 className="lg:text-[1.25vw] text-[4vw] font-bold">Feeling Disrespected or Threatened</h3>
                            </div>
                            <div className="absolute inset-0 bg-[#FFD700] w-full lg:h-[50vh] rounded-xl p-6 text-white flex flex-col items-center justify-center [transform:rotateY(180deg)] [backface-visibility:hidden]">
                                <p className="lg:text-[1vw] text-[3vw]">When one feels insulted, belittled, or threatened physically, they are likely to respond defensively with anger or aggression.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

                      {/*  Section */}
                      <section className="bg-white w-full h-full lg:px-60 px-10 lg:py-20 py-10 text-center">
                <h2 className={`text-[#0E7EA0] lg:text-[3.5vw] text-[7vw] font-bold ${playfair.className} mb-12`}>Solutions for Aggression</h2>
                <p className="text-black lg:text-[1.5vw] text-[3vw] mb-10">Addiction can be overcome with a combination of medical, psychological, 
                and social support. Some of the effective solutions are:</p>
                <div className="flex flex-col lg:flex-row justify-between gap-4 text-black mb-16">
                    <p>Physical Symptoms:</p>
                    <p>Disturbed Self-Image</p>
                    <p>Behavioral Symptoms:</p>
                    <p>Cognitive Symptoms:</p>
                </div>

                <div className="flex flex-col lg:flex-row justify-between items-center">
                    <div className="  ">
                        <ul className="text-left text-black">
                            <li className="mb-8 border-b-[2px]">Increased heart rate and blood pressure</li>
                            <li className="mb-8 border-b-[2px]">Tense muscles, clenched fists, or jaw clenching</li>
                            <li className="mb-8 border-b-[2px]">Sweating and flushing</li>
                            <li className="mb-8 border-b-[2px]">Rapid breathing or breathlessness</li>
                            <li className="mb-8 border-b-[2px]">Headaches or stomach pain</li>
                        </ul>
                    </div>
                    <div className="lg:w-[20vw] w-[80vw] h-[40vh] bg-[#0E7EA0]" />
                </div>

            </section>

            {/*  Links  */}
            <section className="bg-white w-full h-full lg:px-20 px-10 lg:py-20 py-10 text-center">
                <h2 className={`text-[#0E7EA0] lg:text-[4vw] text-[7vw] font-semibold  ${playfair.className}`}>Solutions for Managing Aggression and Anger</h2>
                <p className="text-black lg:text-[1.55vw] text-[3.5vw] font-medium mb-10">Well-managed anger and aggression entail self-awareness, emotional management, 
                and positive coping strategies. The following are effective ways of controlling and preventing anger:</p>
                <div className="grid lg:grid-cols-3 grid-cols-1 gap-2">
                    {/* Card 1 */}
                    <div className="bg-[#0E7EA0] rounded-3xl  text-white text-center">

                        <Image src="/quick_links/2.webp" alt="stressed person" width={300} height={200} className="w-full h-48 object-cover rounded-2xl mb-6" />
                        <div className="p-6">
                            <h3 className="text-lg font-bold mb-4">Loss of Control</h3>
                            <p className="text-sm">Being unable to stop or cut down despite trying to do so.</p>
                        </div>
                    </div>

                    {/* Card 2 */}
                    <div className="bg-[#0E7EA0] rounded-3xl text-white text-center">
                        <Image src="/quick_links/2.webp" alt="people communicating" width={300} height={200} className="w-full h-48 object-cover rounded-2xl mb-6" />
                        <div className="p-6">
                            <h3 className="text-lg font-bold mb-4">Cravings and Obsession</h3>
                            <p className="text-sm">Repeatedly thinking about the addictive activity or substance and having overwhelming urges to use it.</p>
                        </div>
                    </div>

                    {/* Card 3 */}
                    <div className="bg-[#0E7EA0] rounded-3xl text-white text-center">
                        <Image src="/quick_links/2.webp" alt="people communicating" width={300} height={200} className="w-full h-48 object-cover rounded-2xl mb-6" />
                        <div className="p-6">
                            <h3 className="text-lg font-bold mb-4">Neglecting Responsibilities</h3>
                            <p className="text-sm">Forgetting work, school, or family responsibilities because of addiction.</p>
                        </div>
                    </div>

                    {/* Card 4 */}
                    <div className="bg-[#0E7EA0] rounded-3xl text-white text-center">
                        <Image src="/quick_links/2.webp" alt="people communicating" width={300} height={200} className="w-full h-48 object-cover rounded-2xl mb-6" />
                        <div className="p-6">
                            <h3 className="text-lg font-bold mb-4">Tolerance and Dependence</h3>
                            <p className="text-sm">Requiring increasingly more of the substance or the behavior to produce the same effect.</p>
                        </div>
                    </div>

                    {/* Card 5 */}
                    <div className="bg-[#0E7EA0] rounded-3xl text-white text-center">
                        <Image src="/quick_links/2.webp" alt="people communicating" width={300} height={200} className="w-full h-48 object-cover rounded-2xl mb-6" />
                        <div className="p-6">
                            <h3 className="text-lg font-bold mb-4">Withdrawal Symptoms</h3>
                            <p className="text-sm">Suffering physical and emotional pain when abstaining from the substance or behavior (e.g., anxiety, irritability, nausea, sweating).</p>
                        </div>
                    </div>

                    {/* Card 6 */}
                    <div className="bg-[#0E7EA0] rounded-3xl text-white text-center">
                        <Image src="/quick_links/2.webp" alt="people communicating" width={300} height={200} className="w-full h-48 object-cover rounded-2xl mb-6" />
                        <div className="p-6">
                            <h3 className="text-lg font-bold mb-4">Continuing Despite Negative Consequences</h3>
                            <p className="text-sm">Continuing the addictive behavior in spite of money, social, health, or legal issues.</p>
                        </div>
                    </div>

                    {/* Card 7 */}
                    <div className="bg-[#0E7EA0] rounded-3xl text-white text-center">
                        <Image src="/quick_links/2.webp" alt="people communicating" width={300} height={200} className="w-full h-48 object-cover rounded-2xl mb-6" />
                        <div className="p-6">
                            <h3 className="text-lg font-bold mb-4">Social Isolation</h3>
                            <p className="text-sm">Retreating from family and friends in order to conceal addiction or out of shame and guilt.</p>
                        </div>
                    </div>

                    {/* Card 8 */}
                    <div className="bg-[#0E7EA0] rounded-3xl text-white text-center">
                        <Image src="/quick_links/2.webp" alt="people communicating" width={300} height={200} className="w-full h-48 object-cover rounded-2xl mb-6" />
                        <div className="p-6">
                            <h3 className="text-lg font-bold mb-4">Indulgence in Risky Behaviors</h3>
                            <p className="text-sm"> Getting into hazardous behavior, such as operating under the influence of substances or indulging in unsafe habits, due to addiction.</p>
                        </div>
                    </div>

                    {/* Card 9 */}
                    <div className="bg-[#0E7EA0] rounded-3xl text-white text-center">
                        <Image src="/quick_links/2.webp" alt="people communicating" width={300} height={200} className="w-full h-48 object-cover rounded-2xl mb-6" />
                        <div className="p-6">
                            <h3 className="text-lg font-bold mb-4">Denial and Rationalization</h3>
                            <p className="text-sm">Deflecting by excuses about addictive conduct or ignoring its effect.</p>
                        </div>
                    </div>
                </div>
            </section>



            {/* Footer Section */}
            {/* Prognosis and Future Outlook Section*/}
            <section className="bg-[#FFD266] w-full h-full lg:px-40 px-10 lg:pt-20 lg:pb-[50vw] pt-20 pb-50 mb-[-60vw] text-center z-0 ">
                <h2 className={`text-[#0E7EA0] lg:text-[3.5vw] text-[8vw] font-bold ${playfair.className} mb-10`}>Conclusion</h2>
                <div className="flex flex-col lg:flex-row justify-between items-center text-left text-black gap-20 mb-50">
                    <p>Anger and aggression are normal reactions to some situations, but if uncontrolled, they can have a detrimental effect on personal relationships, work life, and overall health. Understanding the causes of anger, its signs, and utilizing appropriate coping skills will allow a person to be more in control of his/her feelings.</p>
                    <p>Through mindfulness, self-awareness, and healthy communication, anger can become an inspiring energy instead of a force of destruction. Knowing how to handle anger constructively benefits the person himself but also encourages more healthy and constructive interaction with other people.</p>
                </div>
            </section>
        </main>
    )
}

export default Aggression