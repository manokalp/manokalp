"use client"
import Image from "next/image"
import Link from "next/link"
import { useState } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import playfair from "../../../fonts/playfair.module.css"


const carouselData = [
    {
        title: 'Psychosocial Factors',
        items: [
            'Poor attachment development in early childhood',
            'Limited opportunities for developing prosocial behaviors',
            'Peer relationship reinforcement of antisocial behavior',
            'Substance use, which can enhance antisocial behavior',
        ],
        background: '/background1.png',
    },
    {
        title: 'Genetic And Neurobiological Factors',
        items: [
            'Heritability reports suggest a genetic component, twin studies revealing antisocial traits are moderately to highly heritable',
            'Neuroimaging research has identified structural and functional deficits in brain regions responsible for emotional processing, impulse regulation, and moral judgment',
            'Reduced activity in prefrontal cortex and amygdala can cause inferior decision-making as well as poor emotional processing',
            'Neurotransmitter imbalances like serotonin, dopamine, and norepinephrine have been implicated',
        ],
        background: '/background2.png',
    },
    {
        title: 'Environmental And Developmental Factors',
        items: [
            'Child abuse, such as physical and sexual abuse and neglect',
            'Family pathology and exposure to violence or criminality',
            'Poverty and socio-economic disadvantage',
            'Early behavioral issues, particularly conduct disorder of childhood or adolescence',
            'Inconsistent parenting or excessive exposure to discipline',
        ],
        background: '/background3.png',
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
        setCurrentIndex((prevIndex) => (prevIndex - 1 + carouselData.length) % carouselData.length);
    };
    return (
        <main className="w-full h-full flex justify-center flex-col  bg-white ">
            {/* ASPD Hero Desktop  */}

            <div className="w-full hidden lg:block text-center ">
                <h2 className="lg:text-[5vw] text-[6vw] text-[#0E7EA0] font-semibold relative z-10 font-[playfull]">Antisocial Personality Disorder<br /> (ASPD)</h2>
                <Image src="/diseases-banner/asdp.webp" alt="hero image" objectFit="cover" width={1200} height={100} className="w-full  lg:mt-[-16vw] mt-[-25vw]  z-0" />
            </div>

            {/* ASPD Hero Mobile  */}

            <div className="w-full lg:hidden block text-center ">

                <Image src="/diseases-banner/asdp.webp" alt="hero image" objectFit="cover" width={1200} height={100} className="w-full    z-0" />
                <h2 className="lg:text-[5vw] text-[6vw] text-[#0E7EA0] font-semibold relative z-10 mt-[-20vw] mb-10 font-[playfull]">Antisocial Personality Disorder<br /> (ASPD)</h2>
            </div>


            {/* The Harsh Truth Section  */}
            <section className="bg-[#0E7EA0] rounded-full w-full h-full lg:px-40 px-10 lg:py-40 py-20 text-center lg:mt-[-20vw] mt-[-4vw]">
 
                <div className="flex flex-col lg:flex-row justify-center lg:gap-40 gap-10 items-center text-center mb-20">

                    <p className="lg:text-[1.55vw] text-[3.5vw] font-medium text-left">Antisocial Personality Disorder (ASPD) is a complex psychiatric disorder
                        characterized by a persistent pattern of disrespect and disregard for others&apos; rights. ASPD individuals are more likely to demonstrate lack of empathy,
                        manipulativeness, and lack of concern for society&apos;s norms without guilt. Even though the disorder affects approximately 1-4% of the general population, it is disproportionately represented in prisons, where 50-80% of inmates can have the disorder.</p>


                    <p className="lg:text-[1.55vw] text-[3.5vw] font-medium text-left">ASPD is one of the DSM-5 Cluster B personality disorders, such as borderline, histrionic, and narcissistic personality disorders. ASPD is among the most challenging mental health conditions to treat because individuals with the disorder lack awareness of what they are doing and are not typically motivated to see the doctor or receive treatment.</p>
                </div>

         
            </section>

            {/* Causes and Risks */}
            <section className="bg-white text-center  w-full h-full lg:px-20 px-4 py-20">
                <h2 className={`text-[#0E7EA0] lg:text-[5vw] text-[10vw] ${playfair.className}`}>Causes and Risk Factors</h2>
                <p className="text-black lg:text-[1.5vw] text-[4vw]">The causation of ASPD is a complex interplay of biological,
                    psychological, and environmental components:</p>
            </section>

            {/* Carousel  */}
            <div className="relative w-full lg:h-[110vh] h-[100vh] overflow-hidden bg-white">
                {carouselData.map((slide, index) => (
                    <div
                        key={index}
                        className={`absolute w-full h-full transition-opacity duration-500 ${index === currentIndex ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}
                        style={{ backgroundImage: `url(${slide.background})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
                    >
                        <div className="w-full h-full bg-WHITE bg-opacity-60 flex flex-col justify-center items-center px-4 lg:px-10 py-6 lg:py-10">
                            <h2 className="text-[7vw] md:text-[4vw] text-black font-semibold mb-6 lg:mb-12 font-[playfair] text-center">{slide.title}</h2>
                            <div className="flex flex-col md:flex-row justify-center space-y-6 md:space-y-0 md:space-x-4 w-full">
                                {slide.items.map((item, i) => (
                                    <div 
                                        key={i} 
                                        className={`p-4 lg:p-6 w-[90vw] mx-auto md:w-[16vw] min-h-[15vh] md:h-[60vh] flex items-center justify-center text-center font-medium rounded-xl ${i % 2 === 0 ? 'bg-[#0E7EA0] text-white' : 'bg-yellow-400 text-black'} shadow-lg`}
                                    >
                                        <p className="text-[3.8vw] md:text-[1vw]">{item}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
                <button onClick={handlePrev} className="absolute left-4 md:left-8 lg:top-1/2 top-[5%] transform -translate-y-1/2 text-white bg-black bg-opacity-50 p-3 lg:p-4 rounded-full cursor-pointer z-10">
                    <FaArrowLeft size={20} className="lg:w-6 lg:h-6 w-4 h-4" />
                </button>
                <button onClick={handleNext} className="absolute right-4 md:right-8 lg:top-1/2 top-[5%] transform -translate-y-1/2 text-white bg-black bg-opacity-50 p-3 lg:p-4 rounded-full cursor-pointer z-10">
                    <FaArrowRight size={20} className="lg:w-6 lg:h-6 w-4 h-4" />
                </button>
            </div>

            {/* Quick Fix Links  */}
            <section className="bg-white w-full h-full lg:px-40 px-10 lg:py-20 py-10 text-center">
                <h2 className={`text-[#0E7EA0] lg:text-[4vw] text-[7vw] ${playfair.className}`}>Clinical Symptoms and Diagnosis Criteria</h2>
                <p className="text-black lg:text-[1.5vw] text-[3vw] mb-10">DSM-5 says the following is required to diagnose ASPD.</p>
                <div className="grid lg:grid-cols-3 grid-cols-1 gap-8">
                    {/* Card 1 */}
                    <div className="bg-[#0E7EA0] rounded-3xl  text-white text-center">

                        <Image src="/quick_links/2.webp" alt="stressed person" width={300} height={200} className="w-full h-48 object-cover rounded-2xl mb-6" />
                        <div className="p-6">
                            <h3 className="text-xl font-bold mb-4">A steady pattern of disrespect and violation of other individuals&apos; rights since the age of 15 years.</h3>
                        </div>
                    </div>

                    {/* Card 2 */}
                    <div className="bg-[#FFD700] rounded-3xl  text-black text-center">
                        <Image src="/quick_links/1.webp" alt="person meditating" width={300} height={200} className="w-full h-48 object-cover rounded-2xl mb-6" />
                        <div className="p-6">
                            <h3 className="text-xl font-bold mb-4">Evidence of conduct disorder with onset before age 15</h3>
                        </div>
                    </div>

                    {/* Card 3 */}
                    <div className="bg-[#0E7EA0] rounded-3xl text-white text-center">
                        <Image src="https://images.pexels.com/photos/5699454/pexels-photo-5699454.jpeg" alt="people communicating" width={300} height={200} className="w-full h-48 object-cover rounded-2xl mb-6" />
                        <div className="p-6">
                            <h3 className="text-xl font-bold mb-4">The prevalence of antisocial behavior during episodes of schizophrenia or bipolar disorder</h3>
                        </div>
                    </div>
                </div>
            </section>

            {/* Individuals with ASPD Section */}
            <section className="bg-white w-full h-full lg:px-40 px-10 lg:py-20 py-10 text-center">
                <h2 className={`text-[#0E7EA0] lg:text-[3.5vw] text-[7vw] font-bold ${playfair.className} mb-12`}>Individuals with ASPD typically manifest with
                    a number of these behavioral tendencies:</h2>

                {/* Tab Buttons */}
                <div className="flex flex-col lg:flex-row justify-between gap-4 text-black mb-16">
                    <button 
                        onClick={() => setActiveTab("interpersonal")} 
                        className={`px-4 py-2 rounded-lg transition-colors ${activeTab === "interpersonal" ? "bg-[#0E7EA0] text-white" : "bg-gray-100"}`}
                    >
                        Interpersonal Dysfunction
                    </button>
                    <button 
                        onClick={() => setActiveTab("behavioral")} 
                        className={`px-4 py-2 rounded-lg transition-colors ${activeTab === "behavioral" ? "bg-[#0E7EA0] text-white" : "bg-gray-100"}`}
                    >
                        Behavioral Issues
                    </button>
                    <button 
                        onClick={() => setActiveTab("emotional")} 
                        className={`px-4 py-2 rounded-lg transition-colors ${activeTab === "emotional" ? "bg-[#0E7EA0] text-white" : "bg-gray-100"}`}
                    >
                        Emotional Characteristics
                    </button>
                    <button 
                        onClick={() => setActiveTab("cognitive")} 
                        className={`px-4 py-2 rounded-lg transition-colors ${activeTab === "cognitive" ? "bg-[#0E7EA0] text-white" : "bg-gray-100"}`}
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
                                    <li className="mb-8 border-b-[2px]">Empathy deficiency and callousness towards feelings of others</li>
                                    <li className="mb-8 border-b-[2px]">Exploitation and manipulation for self-interest</li>
                                    <li className="mb-8 border-b-[2px]">Superficial charm and deceitfulness</li>
                                    <li className="mb-8 border-b-[2px]">Lack of establishing long-term, meaningful relationships</li>
                                    <li className="mb-8 border-b-[2px]">Inability to maintain consistent work behavior</li>
                                    <li className="mb-8 border-b-[2px]">Disregard for social norms and boundaries</li>
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
                                    <li className="mb-8 border-b-[2px]">Repeated criminal behavior or legal problems</li>
                                    <li className="mb-8 border-b-[2px]">Impulsivity and failure to plan ahead</li>
                                    <li className="mb-8 border-b-[2px]">Aggressiveness and irritability leading to physical fights</li>
                                    <li className="mb-8 border-b-[2px]">Reckless disregard for safety of self or others</li>
                                    <li className="mb-8 border-b-[2px]">Consistent irresponsibility in financial obligations</li>
                                    <li className="mb-8 border-b-[2px]">Pattern of substance abuse and risky behaviors</li>
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
                                    <li className="mb-8 border-b-[2px]">Lack of remorse or guilt for harmful actions</li>
                                    <li className="mb-8 border-b-[2px]">Emotional shallowness or limited range of emotions</li>
                                    <li className="mb-8 border-b-[2px]">Callous attitudes toward other&apos;s suffering</li>
                                    <li className="mb-8 border-b-[2px]">Heightened feelings of grandiosity and self-importance</li>
                                    <li className="mb-8 border-b-[2px]">Low frustration tolerance and frequent anger</li>
                                    <li className="mb-8 border-b-[2px]">Inability to experience genuine emotional intimacy</li>
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
                                    <li className="mb-8 border-b-[2px]">Externalizing blame for own failures or mistakes</li>
                                    <li className="mb-8 border-b-[2px]">Distorted moral reasoning and rationalization of harmful conduct</li>
                                    <li className="mb-8 border-b-[2px]">Failure to learn from negative experiences</li>
                                    <li className="mb-8 border-b-[2px]">Chronic lying and manipulative thinking</li>
                                    <li className="mb-8 border-b-[2px]">Inability to consider long-term consequences</li>
                                    <li className="mb-8 border-b-[2px]">Minimization of personal responsibility</li>
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
                <h2 className={`text-[#0E7EA0] font-bold lg:text-[3.5vw] text-[7vw] ${playfair.className} `}>Treatment Plans and Interventions</h2>
                <p className="text-black lg:text-[1.5vw] text-[3vw]  mb-12">ASPD offers formidable treatment issues, but several methods have had some success:</p>
                
                {/* Tab Buttons */}
                <div className="flex flex-col lg:flex-row justify-between gap-4 text-black mb-16">
                    <button 
                        onClick={() => setActiveTreatmentTab("psychotherapy")} 
                        className={`px-4 py-2 rounded-lg transition-colors ${activeTreatmentTab === "psychotherapy" ? "bg-[#0E7EA0] text-white" : "bg-gray-100"}`}
                    >
                        Psychotherapeutic Interventions
                    </button>
                    <button 
                        onClick={() => setActiveTreatmentTab("pharmacological")} 
                        className={`px-4 py-2 rounded-lg transition-colors ${activeTreatmentTab === "pharmacological" ? "bg-[#0E7EA0] text-white" : "bg-gray-100"}`}
                    >
                        Pharmacological Approaches
                    </button>
                    <button 
                        onClick={() => setActiveTreatmentTab("integrated")} 
                        className={`px-4 py-2 rounded-lg transition-colors ${activeTreatmentTab === "integrated" ? "bg-[#0E7EA0] text-white" : "bg-gray-100"}`}
                    >
                        Integrated Programs
                    </button>
                    <button 
                        onClick={() => setActiveTreatmentTab("early")} 
                        className={`px-4 py-2 rounded-lg transition-colors ${activeTreatmentTab === "early" ? "bg-[#0E7EA0] text-white" : "bg-gray-100"}`}
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
                                    <li className="mb-8 border-b-[2px]">Cognitive Behavioral Therapy (CBT) to identify and alter antisocial
                                        patterns of thinking and learn prosocial skills</li>
                                    <li className="mb-8 border-b-[2px]">Dialectical Behavior Therapy for emotional dysregulation and
                                        impulsivity</li>
                                    <li className="mb-8 border-b-[2px]">Mentalization-Based Treatment to develop the capacity to
                                        understand one&apos;s own and others&apos; mental states</li>
                                    <li className="mb-8 border-b-[2px]">Contingency management interventions that reinforce good
                                        behaviors</li>
                                    <li className="mb-8 border-b-[2px]">Schema-focused therapy targeting core maladaptive beliefs</li>
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
                                    <li className="mb-8 border-b-[2px]">Mood stabilizers to reduce impulsive aggression and mood swings</li>
                                    <li className="mb-8 border-b-[2px]">Antipsychotics for treatment of psychotic symptoms or severe aggression</li>
                                    <li className="mb-8 border-b-[2px]">Selective Serotonin Reuptake Inhibitors (SSRIs) to manage impulsivity and emotional dysregulation</li>
                                    <li className="mb-8 border-b-[2px]">Medications for co-occurring substance use disorders</li>
                                    <li className="mb-8 border-b-[2px]">Note: No medications specifically approved for ASPD; treatment targets specific symptoms</li>
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
                                    <li className="mb-8 border-b-[2px]">Therapeutic communities that provide structure and prosocial modeling</li>
                                    <li className="mb-8 border-b-[2px]">Multisystemic therapy addressing multiple risk domains</li>
                                    <li className="mb-8 border-b-[2px]">Criminal justice-based interventions with rehabilitation focus</li>
                                    <li className="mb-8 border-b-[2px]">Dual diagnosis programs addressing both ASPD and substance use</li>
                                    <li className="mb-8 border-b-[2px]">Vocational training and job placement services</li>
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
                                    <li className="mb-8 border-b-[2px]">Parent training programs to improve child management skills</li>
                                    <li className="mb-8 border-b-[2px]">Early intervention for conduct disorder in childhood</li>
                                    <li className="mb-8 border-b-[2px]">School-based programs promoting social skills and empathy</li>
                                    <li className="mb-8 border-b-[2px]">Family therapy addressing dysfunctional family patterns</li>
                                    <li className="mb-8 border-b-[2px]">Prevention programs targeting high-risk youth and families</li>
                                </ul>
                            </div>
                        </div>
                    )}
                </div>
            </section>

            {/* Prognosis and Future Outlook Section*/}
            <section className="bg-[#FFD266] w-full h-full lg:px-40 px-10 lg:pt-20 lg:pb-[55vw] pt-20 pb-50 mb-[-60vw] text-center z-0 ">
                <h2 className={`text-[#0E7EA0] lg:text-[3.5vw] text-[8vw] font-bold ${playfair.className} mb-10`}>Prognosis and Future Outlook</h2>
                <div className="flex flex-col lg:flex-row justify-between items-center text-left text-black gap-20 mb-40">
                    <p>The progression of ASPD is quite variable between individuals: Others have a slow decrease in antisocial behavior with advancing age, more specifically after 40 years (&quot;burnout&quot; phenomenon) Others have chronic patterns of antisocial behavior that persist across life Positive outcomes are associated with secure employment, good social support, and no use of drugs Early intervention, particularly childhood conduct disorder intervention, has the power to alter development Social and Clinical Challenges ASPD presents serious challenges to the treatment community and society: Individuals with ASPD rarely seek out treatment voluntarily Adherence to treatment is usually deleterious The stigmata related to diagnosis may impact modes of treatment </p>
                    <p> The disorder carries important societal costs in terms of criminal justice involvement, drug abuse, and domestic violence Ethical considerations of coercive treatment versus autonomy Conclusion Antisocial Personality Disorder is a complex, multifaceted disorder with environmental, neurobiological, and genetic etiology. While treatment is challenging, an integrated treatment plan for individual symptoms and expressions of behavior can improve outcomes. Early intervention of precursor disorders like conduct disorder is the most hopeful pathway to prevention. The development of specialized, evidence-based treatments is a primary area for future research and clinical innovation in the treatment of this difficult disorder.</p>
                </div>
            </section>
        </main>
    )
}

export default ASPD