"use client"
import Image from "next/image"
import Link from "next/link"
import { useState } from 'react';
// import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import playfair from "../../../fonts/playfair.module.css"

const ChildhoodDepression = () => {
    const [activeTab, setActiveTab] = useState<SymptomCategory>('physical');
    const temperSolutions = [
        {
            title: "Early Identification and Intervention",
            description: "Identifying temper issues early and seeking help can prevent escalation and long-term behavioral problems.",
        },
        {
            title: "Therapy and Counseling",
            description: "Professional counseling, including behavioral therapy and parent-child interaction therapy, can help manage emotional outbursts.",
        },
        {
            title: "Open Communication and Emotional Support",
            description: "Creating a safe space for children to talk about their feelings helps in emotional regulation and understanding.",
        },
        {
            title: "Healthy Lifestyle Changes",
            description: "Consistent routines, nutritious meals, and adequate sleep can greatly improve emotional stability and reduce temper tantrums.",
        },
        {
            title: "Enhancing Self-Esteem and Confidence",
            description: "Acknowledging good behavior and encouraging independent problem-solving boosts confidence and reduces frustration.",
        },
        {
            title: "School-Based Support Systems",
            description: "Teachers and counselors can support children by fostering inclusive classrooms and emotional awareness programs.",
        },
        {
            title: "Parental Involvement and Education",
            description: "Educating parents on positive discipline and emotional coaching can significantly reduce outbursts at home.",
        },
        {
            title: "Encouraging Social Connections",
            description: "Facilitating playdates and team activities helps children learn patience, sharing, and social coping mechanisms.",
        },
        {
            title: "Mindfulness and Relaxation Strategies",
            description: "Introducing breathing exercises, guided imagery, and calming routines can help kids self-regulate more effectively.",
        },
        {
            title: "Behavioral Rewards and Charts",
            description: "Using star charts and positive reinforcement motivates children to manage their temper better.",
        },
        {
            title: "Consistent Boundaries and Expectations",
            description: "Clear, firm, and loving boundaries help children feel secure and understand limits without frustration.",
        },
        {
            title: "Cognitive-Behavioral Techniques",
            description: "CBT-based tools help children recognize triggers, reframe thoughts, and develop coping mechanisms.",
        },
    ];

    const symptoms = {
        physical: [
            "Crying loudly and uncontrollably",
            "Throwing objects or hitting",
            "Rolling on the floor or stamping feet",
            "Clenching fists or jaw",
            "Changes in breathing pattern"
        ],
        emotional: [
            "Intense frustration or anger",
            "Sudden mood changes",
            "Overreaction to small issues",
            "Feeling overwhelmed",
            "Fear or anxiety"
        ],
        behavioral: [
            "Refusal to follow instructions",
            "Screaming or shouting",
            "Running away or hiding",
            "Lying on the floor or becoming limp",
            "Demanding or bossy behavior"
        ],
        cognitive: [
            "Inability to express feelings verbally",
            "Distorted perception of fairness",
            "Blaming others constantly",
            "Lack of patience or impulse control",
            "Difficulty focusing during distress"
        ]
    };

    type SymptomCategory = keyof typeof symptoms;

    return (
        <main className="w-full h-full flex justify-center flex-col  bg-white ">
            {/* ASPD Hero Desktop  */}
            <div className="w-full hidden lg:block text-center ">
                <h2 className="lg:text-[5vw] text-[6vw] text-white font-semibold relative z-10 font-[playfull] translate-y-[3vw]">What Are Temper Tantrums ?</h2>
                <Image src="/diseases-banner/temper.webp" alt="hero image" objectFit="cover" width={1200} height={100} className="w-full  lg:mt-[-16vw] mt-[-25vw]  z-0" />
            </div>

            {/* ASPD Hero Mobile  */}
            <div className="w-full lg:hidden block text-center ">

                <Image src="/diseases-banner/temper.webp" alt="hero image" objectFit="cover" width={1200} height={100} className="w-full     z-0" />
                <h2 className="lg:text-[5vw] text-[6vw] text-white font-semibold relative z-10 font-[playfull] mt-[-10vw] mb-10">What Are Temper Tantrums ?</h2>
            </div>

            {/* The Harsh Truth Section  */}
            <section className="bg-[#0E7EA0] rounded-full w-full h-full lg:px-40 px-10 lg:py-20 py-20 text-center lg:mt-[-20vw] mt-[-0vw]">
                <div className="flex flex-col justify-center items-center lg:mb-20 mb-10">
                    <h2 className="lg:text-[4.0vw] text-[8.5vw] font-bold font-[playfull]"></h2>

                </div>
                <div className="flex flex-col lg:flex-row justify-center lg:gap-20 gap-10 items-center text-center mb-20">

                    <p className="lg:text-[1.55vw] text-[3.5vw] font-medium text-left">Temper tantrums refer to emotional outbursts characterized by usually crying, screaming, kicking, and other physical and verbal displays of frustration. Tantrums are most typical in young children but may also appear in older adults who have difficulty managing their emotions.</p>
                    <p className="lg:text-[1.55vw] text-[3.5vw] font-medium text-left">These outbursts may result from unmet needs, frustration, or ineffectiveness in expressing feelings. It is important to know the causes, symptoms, and remedies of temper tantrums to deal with them and promote better emotional reactions.</p>
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
                                <h3 className="lg:text-[1.0vw] text-[4vw] font-bold">Frustration and Communication Problems</h3>
                            </div>
                            <div className="absolute inset-0 bg-[#0E7EA0] w-full lg:lg:h-[50vh] rounded-xl p-6 text-white flex flex-col items-center justify-center [transform:rotateY(180deg)] [backface-visibility:hidden]">
                                <p className="lg:text-[1vw] text-[3vw]">Children who are very young or who have poor communication skills may throw tantrums when they are not able to convey their needs or feelings.</p>
                            </div>
                        </div>
                    </div>

                    {/* Technique Card 2 */}
                    <div className="[perspective:1000px] cursor-pointer">
                        <div className="relative w-full aspect-square transition-all duration-500 [transform-style:preserve-3d] hover:[transform:rotateY(180deg)]">
                            <div className="absolute inset-0 bg-[#FFD700] w-full lg:h-[50vh] rounded-xl p-6 text-black flex flex-col items-center justify-center [backface-visibility:hidden]">
                                <h3 className="lg:text-[1.0vw] text-[4vw] font-bold">Unfulfilled Needs or Wants</h3>
                            </div>
                            <div className="absolute inset-0 bg-[#FFD700] w-full lg:h-[50vh] rounded-xl p-6 text-black flex flex-col items-center justify-center [transform:rotateY(180deg)] [backface-visibility:hidden]">
                                <p className="lg:text-[1vw] text-[3vw]">When things don&apos;t go as expected, a tantrum may be used to communicate disappointment or frustration.</p>
                            </div>
                        </div>
                    </div>

                    {/* Technique Card 3 */}
                    <div className="[perspective:1000px] cursor-pointer">
                        <div className="relative w-full aspect-square transition-all duration-500 [transform-style:preserve-3d] hover:[transform:rotateY(180deg)]">
                            <div className="absolute inset-0 bg-[#0E7EA0]  w-full lg:h-[50vh] rounded-xl p-6 text-white flex flex-col items-center justify-center [backface-visibility:hidden]">
                                <h3 className="lg:text-[1.0vw] text-[4vw] font-bold">Oversimulation and Tiredness</h3>
                            </div>
                            <div className="absolute inset-0 bg-[#0E7EA0] w-full lg:h-[50vh] rounded-xl p-6 text-white flex flex-col items-center justify-center [transform:rotateY(180deg)] [backface-visibility:hidden]">
                                <p className="lg:text-[1vw] text-[3vw]">Oversimulation, hunger, or insufficient sleep can decrease frustration tolerance and increase the chances of a tantrum.</p>
                            </div>
                        </div>
                    </div>

                    {/* Technique Card 4 */}
                    <div className="[perspective:1000px] cursor-pointer">
                        <div className="relative w-full aspect-square transition-all duration-500 [transform-style:preserve-3d] hover:[transform:rotateY(180deg)]">
                            <div className="absolute inset-0 bg-[#FFD700] w-full lg:h-[50vh] rounded-xl p-6 text-black flex flex-col items-center justify-center [backface-visibility:hidden]">
                                <h3 className="lg:text-[1.0vw] text-[4vw] font-bold">Need for Attention</h3>
                            </div>
                            <div className="absolute inset-0 bg-[#FFD700] w-full lg:h-[50vh] rounded-xl p-6 text-black flex flex-col items-center justify-center [transform:rotateY(180deg)] [backface-visibility:hidden]">
                                <p className="lg:text-[1vw] text-[3vw]">Tantrums are some times triggered by feelings of neglect or attention seeking from caregivers, peers, or authority figures.</p>
                            </div>
                        </div>
                    </div>

                    {/* Technique Card 5 */}
                    <div className="[perspective:1000px] cursor-pointer">
                        <div className="relative w-full aspect-square transition-all duration-500 [transform-style:preserve-3d] hover:[transform:rotateY(180deg)]">
                            <div className="absolute inset-0 bg-[#0E7EA0] w-full lg:h-[50vh] rounded-xl p-6 text-white flex flex-col items-center justify-center [backface-visibility:hidden]">
                                <h3 className="lg:text-[1.0vw] text-[4vw] font-bold">Ineffective Emotional Regulation Skills</h3>
                            </div>
                            <div className="absolute inset-0 bg-[#0E7EA0] w-full lg:h-[50vh] rounded-xl p-6 text-white flex flex-col items-center justify-center [transform:rotateY(180deg)] [backface-visibility:hidden]">
                                <p className="lg:text-[1vw] text-[3vw]">Some children and some adults lack good coping skills to manage stress and frustration. </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="grid lg:grid-cols-3 grid-cols-1 gap-4 mb-0">
                    {/* Technique Card 6 */}
                    <div className="[perspective:1000px] cursor-pointer">
                        <div className="relative w-full aspect-square transition-all duration-500 [transform-style:preserve-3d] hover:[transform:rotateY(180deg)]">
                            <div className="absolute inset-0 bg-[#FFD700] w-full lg:h-[50vh] rounded-xl p-6 text-black flex flex-col items-center justify-center [backface-visibility:hidden]">
                                <h3 className="lg:text-[1.0vw] text-[4vw] font-bold">Learned Behavior</h3>
                            </div>
                            <div className="absolute inset-0 bg-[#FFD700] w-full lg:h-[50vh] rounded-xl p-6 text-black flex flex-col items-center justify-center [transform:rotateY(180deg)] [backface-visibility:hidden]">
                                <p className="lg:text-[1vw] text-[3vw]">If tantrums have worked in the past to gain attention or rewards, people will employ them as a means to an end.</p>
                            </div>
                        </div>
                    </div>

                    {/* Technique Card 7 */}
                    <div className="[perspective:1000px] cursor-pointer">
                        <div className="relative w-full aspect-square transition-all duration-500 [transform-style:preserve-3d] hover:[transform:rotateY(180deg)]">
                            <div className="absolute inset-0 bg-[#0E7EA0] w-full lg:h-[50vh] rounded-xl p-6 text-white flex flex-col items-center justify-center [backface-visibility:hidden]">
                                <h3 className="lg:text-[1.0vw] text-[4vw] font-bold">Medical or Psychological Conditions</h3>
                            </div>
                            <div className="absolute inset-0 bg-[#0E7EA0] w-full lg:h-[50vh] rounded-xl p-6 text-white flex flex-col items-center justify-center [transform:rotateY(180deg)] [backface-visibility:hidden]">
                                <p className="lg:text-[1vw] text-[3vw]">Some medical or psychological conditions, including ADHD, autism, or sensory processing disorders, may result in more intense and more frequent tantrums.</p>
                            </div>
                        </div>
                    </div>

                    {/* Technique Card 8 */}
                    <div className="[perspective:1000px] cursor-pointer">
                        <div className="relative w-full aspect-square transition-all duration-500 [transform-style:preserve-3d] hover:[transform:rotateY(180deg)]">
                            <div className="absolute inset-0 bg-[#FFD700] w-full lg:h-[50vh] rounded-xl p-6 text-black flex flex-col items-center justify-center [backface-visibility:hidden]">
                                <h3 className="lg:text-[1.0vw] text-[4vw] font-bold">Changes in Routine or Environment</h3>
                            </div>
                            <div className="absolute inset-0 bg-[#FFD700] w-full lg:h-[50vh] rounded-xl p-6 text-black flex flex-col items-center justify-center [transform:rotateY(180deg)] [backface-visibility:hidden]">
                                <p className="lg:text-[1vw] text-[3vw]">Alterations in daily routines or sudden changes in environment may create anxiety and frustration, thus resulting in tantrums.</p>
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
                    Symptoms of Temper Tantrums
                </h2>

                <p className="text-black lg:text-[1.5vw] text-[3vw] mb-10">
                    Temper tantrums may result from different psychological, developmental,
                    and environmental factors. Some of the most prevalent causes are:
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
                            src={`/diseases/temper/${activeTab === 'physical'
                                ? '1'
                                : activeTab === 'emotional'
                                    ? '2'
                                    : activeTab === 'behavioral'
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

            {/*  Links  */}
            <section className="bg-white w-full h-full lg:px-20 px-10 lg:py-30 py-10 text-center">
                <h2 className={`text-[#0E7EA0] lg:text-[4vw] text-[7vw] font-semibold ${playfair.className}`}>
                    Solutions to Managing Temper Tantrums
                </h2>
                <p className="text-black lg:text-[1.55vw] text-[3.5vw] font-medium mb-10">
                    Effective temper management includes emotional education, consistent parenting, therapy, and lifestyle adjustments. Here are some recommended solutions:
                </p>

                <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
                    {temperSolutions.map((item, index) => (
                        <div key={index} className="bg-[#0E7EA0] rounded-3xl text-white text-center">
                            <Image
                                src={`/diseases/temperv2/${index + 1}.webp`}
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

export default ChildhoodDepression