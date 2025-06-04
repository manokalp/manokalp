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
            'Greater sensitivity to emotions at birth',
            'Distress tolerance and emotion regulation issues',
            "Low quality of mentalization (ability to comprehend one's own and others' mentalities)",
            'Cognitive shortcomings including dichotomous thought and attribution bias',
        ],
        background: '/background1.png',
    },
    {
        title: 'Genetic And Neurobiological Factors',
        items: [
            'Estimates of heritability indicate that 40-60% of the risk for BPD is accounted for by genetic factors',
            'Neuroimaging investigations find structural and functional damage to brain areas involved in emotion regulation, impulse control, and social cognition',
            'Dysregulation of the limbic system, here the amygdala and hippocampus, is responsible for emotional instability',
            'Neurotransmitter system abnormalities, specifically serotonin, dopamine, and the stress-response system',
        ],
        background: '/background2.png',
    },
    {
        title: 'Environmental And Developmental Factors',
        items: [
            'Childhood trauma, such as emotional, physical, and sexual abuse',
            'Early neglect, invalidation, or inconsistent care',
            'Disturbed attachment to primary caregivers',
            'Exposure to violent family settings or parent conflict',
            'Early loss or separation experiences',
        ],
        background: '/background3.png',
    },
];

const BPD = () => {

    const [currentIndex, setCurrentIndex] = useState(0);

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
                <h2 className="lg:text-[5vw] text-[6vw] text-white font-semibold relative z-10 font-[playfull] ">Borderline Personality Disorder<br />
                    (BPD)</h2>
                <Image src="/diseases-banner/bpd.webp" alt="hero image" objectFit="cover" width={1200} height={100} className="w-full  lg:mt-[-16vw] mt-[-25vw]  z-0" />
            </div>

            {/* ASPD Hero Mobile  */}

            <div className="w-full lg:hidden block text-center ">

               
                <h2 className="lg:text-[5vw] text-[6vw] text-white font-semibold relative z-10 font-[playfull]">Borderline Personality Disorder<br />
                    (BPD)</h2>
                    <Image src="/diseases-banner/bpd.webp" alt="hero image" objectFit="cover" width={1200} height={100} className="w-full   mt-[-20vw]  z-0" />
            </div>


            {/* The Harsh Truth Section  */}
            <section className="bg-[#0E7EA0] rounded-full w-full h-full lg:px-40 px-10 lg:py-40 py-20 text-center lg:mt-[-20vw] mt-[-60vw]">
                <div className="flex flex-col justify-center items-center lg:mb-20 mb-10">
                    <h2 className="lg:text-[4.0vw] text-[8.5vw] font-bold font-[playfull]"></h2>

                </div>
                <div className="flex flex-col lg:flex-row justify-center lg:gap-20 gap-10 items-center text-center mb-20">

                    <p className="lg:text-[1.55vw] text-[3.5vw] font-medium text-left">Borderline Personality Disorder (BPD) is a complicated mental illness typified by chronic patterns of emotional instability, compromised self-image, impulsivity, and maladaptive interpersonal relationships. Occurring in about 1.6-5.9% of the general population, BPD often starts in the teenage years or early adulthood and may significantly interfere with every sphere of a person&apos;s life. BPD is among the most stigmatized psychiatric illnesses, and patients will probably be misconstrued not only by healthcare professionals but by the general community as well.</p>


                    <p className="lg:text-[1.55vw] text-[3.5vw] font-medium text-left">BPD is a Cluster B personality disorder in the Diagnostic and Statistical Manual of Mental Disorders (DSM-5), in addition to antisocial, histrionic, and narcissistic personality disorders. Despite its challenges, BPD has seen dramatic treatment advances over the past few decades, from largely being considered untreatable to now having a variety of successful evidence-based treatments.</p>
                </div>

                <Link href="/" className="lg:px-30 px-16 py-6 bg-black rounded-full lg:text-[2vw] text-[4.5vw] ">Know More</Link>
            </section>

            {/* Causes and Risks */}
            <section className="bg-white text-center  w-full h-full lg:px-20 px-4 py-20">
                <h2 className={`text-[#0E7EA0] lg:text-[5vw] text-[10vw] ${playfair.className}`}>Causes and Risk Factors</h2>
                <p className="text-black lg:text-[1.5vw] text-[4vw]">BPD results from the interplay between genetic susceptibility and
                    the environment, best explained in the biopsychosocial model:</p>
            </section>

            {/* Carousel  */}
            <div className="relative w-full lg:h-[110vh] h-[100vh] overflow-hidden ">
                {carouselData.map((slide, index) => (
                    <div
                        key={index}
                        className={`absolute w-full h-full  transition-opacity duration-500 ${index === currentIndex ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}
                        style={{ backgroundImage: `url(${slide.background})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
                    >
                        <div className="w-full h-full bg-black bg-opacity-60 flex flex-col justify-center items-center px-10 py-10">
                            <h2 className="text-[8vw] md:text-[4vw] text-white font-semibold mb-12 font-[playfair] text-center">{slide.title}</h2>
                            <div className="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-4">
                                {slide.items.map((item, i) => (
                                    <div key={i} className={`p-6 w-[80vw] md:w-[16vw] h-[10vh] md:h-[60vh] flex items-center justify-center text-center font-medium rounded-xl ${i % 2 === 0 ? 'bg-[#0E7EA0] text-white' : 'bg-yellow-400 text-black'} shadow-lg`}>
                                        {item}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
                <button onClick={handlePrev} className="absolute left-4 md:left-8 lg:top-1/2 top-[10%] transform -translate-y-1/2 text-white bg-black bg-opacity-50 p-4 rounded-full cursor-pointer">
                    <FaArrowLeft size={30} />
                </button>
                <button onClick={handleNext} className="absolute right-4 md:right-8 lg:top-1/2 top-[10%] transform -translate-y-1/2 text-white bg-black bg-opacity-50 p-4 rounded-full cursor-pointer">
                    <FaArrowRight size={30} />
                </button>
            </div>



            {/*  Section */}
            <section className="bg-white w-full h-full lg:px-40 px-10 lg:py-20 py-10 text-center">
                <h2 className={`text-[#0E7EA0] lg:text-[3.5vw] text-[7vw] font-bold ${playfair.className} mb-12`}>Clinical Symptoms and Diagnosis Criteria</h2>
                <p className="text-black lg:text-[1.5vw] text-[3vw] mb-10">DSM-5 defines that BPD diagnosis is characterized by a chronic pattern of instability
                    in interpersonal relationships, self-image, and affects with extreme impulsivity,
                    beginning by early adulthood and occurring across a variety of situations.
                    Five or more of the following are present:</p>
                <div className="flex flex-col lg:flex-row justify-between gap-4 text-black mb-16">
                    <p>Emotional Dysregulation</p>
                    <p>Disturbed Self-Image</p>
                    <p>Interpersonal Dysfunction</p>
                    <p>Behavioral Dysregulation</p>
                </div>

                <div className="flex flex-col lg:flex-row justify-between items-center">
                    <div className="  ">
                        <ul className="text-left text-black">
                            <li className="mb-8 border-b-[2px]">Serious emotional reactions and mood swings</li>
                            <li className="mb-8 border-b-[2px]">Enduring conditions of hollowness</li>
                            <li className="mb-8 border-b-[2px]">Inappropriate, intense anger or difficulty controlling anger</li>
                            <li className="mb-8 border-b-[2px]">Affective instability due to extreme reactivity of mood</li>
                        </ul>
                    </div>
                    <div className="lg:w-[20vw] w-[80vw] h-[40vh] bg-[#0E7EA0]" />
                </div>

            </section>

            {/*  Links  */}
            <section className="bg-white w-full h-full lg:px-20 px-10 lg:py-20 py-10 text-center">
                <h2 className={`text-[#0E7EA0] lg:text-[4vw] text-[7vw] ${playfair.className}`}>Treatment Strategies and Interventions</h2>
                <p className="text-black lg:text-[1.5vw] text-[3vw] mb-10">Several empirically supported interventions have proven successful for BPD:</p>
                <p className="text-black lg:text-[1.5vw] text-[3vw] mb-10 font-bold">Psychotherapeutic Interventions</p>
                <div className="grid lg:grid-cols-5 grid-cols-1 gap-4">
                    {/* Card 1 */}
                    <div className="bg-[#0E7EA0] rounded-3xl  text-white text-center">

                        <Image src="/quick_links/2.webp" alt="stressed person" width={300} height={200} className="w-full h-48 object-cover rounded-2xl mb-6" />
                        <div className="p-6">
                            <h3 className="text-lg font-bold mb-4">Dialectical Behavior Therapy (DBT):                             </h3>
                            <p className="text-sm">Specifically designed for BPD by Marsha Linehan, DBT integrates acceptance and change techniques to improve emotional control, interpersonal skills, tolerance of distress, and mindfulness</p>
                        </div>
                    </div>

                    {/* Card 2 */}
                    <div className="bg-[#FFD700] rounded-3xl  text-black text-center">
                        <Image src="/quick_links/1.webp" alt="person meditating" width={300} height={200} className="w-full h-48 object-cover rounded-2xl mb-6" />
                        <div className="p-6">
                            <h3 className="text-lg font-bold mb-4">Mentalization-Based Treatment (MBT): </h3>
                            <p className="text-sm">Seeks to improve the ability to understand the mental states in oneself and in others</p>
                        </div>
                    </div>

                    {/* Card 3 */}
                    <div className="bg-[#0E7EA0] rounded-3xl text-white text-center">
                        <Image src="/quick_links/2.webp" alt="people communicating" width={300} height={200} className="w-full h-48 object-cover rounded-2xl mb-6" />
                        <div className="p-6">
                            <h3 className="text-lg font-bold mb-4">Schema-Focused Therapy:</h3>
                            <p className="text-sm">Aims at early maladaptive schemas and coping style</p>
                        </div>
                    </div>

                    {/* Card 4 */}
                    <div className="bg-[#0E7EA0] rounded-3xl text-white text-center">
                        <Image src="/quick_links/2.webp" alt="people communicating" width={300} height={200} className="w-full h-48 object-cover rounded-2xl mb-6" />
                        <div className="p-6">
                            <h3 className="text-lg font-bold mb-4">Transference-Focused Psychotherapy (TFP):</h3>
                            <p className="text-sm">Psychodynamic treatment emphasizing the therapeutic relationship to treat interpersonal issues</p>
                        </div>
                    </div>

                    {/* Card 5 */}
                    <div className="bg-[#0E7EA0] rounded-3xl text-white text-center">
                        <Image src="/quick_links/2.webp" alt="people communicating" width={300} height={200} className="w-full h-48 object-cover rounded-2xl mb-6" />
                        <div className="p-6">
                            <h3 className="text-lg font-bold mb-4">Good Psychiatric Management (GPM): </h3>
                            <p className="text-sm">Multimodal treatment involving psychoeducation, case management, and supportive psychotherapy</p>
                        </div>
                    </div>
                </div>
            </section>

            {/*  Section */}
            <section className="bg-white w-full h-full lg:px-40 px-10 lg:py-20 py-10 text-center">
                <h2 className={`text-[#0E7EA0] font-bold lg:text-[3.5vw] text-[7vw] ${playfair.className} `}>Pharmacological Approaches</h2>
                <p className="text-black lg:text-[1.5vw] text-[3vw]  mb-12">There are no FDA-approved medications for BPD
                    Targeted symptom management may involve:</p>
                {/* <div className="flex flex-col lg:flex-row justify-between gap-4 text-black mb-16">
                    <p>Psychotherapeutic Interventions</p>
                    <p>Pharmacological Approaches</p>
                    <p> Integrated Programs</p>
                    <p>Early Intervention</p>
                </div> */}

                <div className="flex flex-col lg:flex-row justify-between gap-2 items-center">
                    <div className="lg:w-[20vw] w-[80vw] h-[40vh] bg-[#0E7EA0]" />
                    <div className="  ">
                        <ul className="text-left text-black">
                            <li className="mb-8 border-b-[2px]">Mood stabilizers for emotional lability</li>
                            <li className="mb-8 border-b-[2px]">Atypical antipsychotics for cognitive-perceptual symptoms
                                and impulsivity</li>
                            <li className="mb-8 border-b-[2px]">Selective serotonin reuptake inhibitors (SSRIs) for comorbid
                                depression and anxiety</li>
                            <li className="mb-8 border-b-[2px]">Medication, in general, should be time-limited and used as
                                an adjunct to psychotherapy</li>
                        </ul>
                    </div>

                </div>

            </section>


            {/*  Section */}
            <section className="bg-white w-full h-full lg:px-40 px-10 lg:py-20 py-10 text-center">
                <h2 className={`text-[#0E7EA0] lg:text-[3.5vw] text-[7vw] font-bold ${playfair.className} mb-12`}>Holistic Care</h2>
                <p className="text-black lg:text-[1.5vw] text-[3vw] mb-10">There are no FDA-approved medications for BPD
                    Targeted symptom management may involve:</p>
                {/* <div className="flex flex-col lg:flex-row justify-between gap-4 text-black mb-16">
                    <p>Emotional Dysregulation</p>
                    <p>Disturbed Self-Image</p>
                    <p>Interpersonal Dysfunction</p>
                    <p>Behavioral Dysregulation</p>
                </div> */}

                <div className="flex flex-col lg:flex-row justify-between items-center">
                    <div className="  ">
                        <ul className="text-left text-black">
                            <li className="mb-8 border-b-[2px]">Structured treatment plans with one-on-one and group therapy</li>
                            <li className="mb-8 border-b-[2px]">Crisis intervention planning and safety measures</li>
                            <li className="mb-8 border-b-[2px]">Family involvement and psychoeducation</li>
                            <li className="mb-8 border-b-[2px]">Management of frequent comorbidities (depression, anxiety,
                                PTSD, substance use disorders)</li>
                            <li className="mb-8 border-b-[2px]">Skills training in emotion regulation, interpersonal effectiveness,
                                and distress tolerance</li>
                        </ul>
                    </div>
                    <div className="lg:w-[20vw] w-[80vw] h-[40vh] bg-[#0E7EA0]" />
                </div>

            </section>

            {/*  Section*/}
            <section className="bg-[#FFD266] w-full h-full lg:px-40 px-10 lg:pt-20 lg:pb-[50vw] pt-20 pb-50 mb-[-60vw] text-center z-0 ">
                <h2 className={`text-[#0E7EA0] lg:text-[3.5vw] text-[8vw] font-bold ${playfair.className} `}>Prognosis and Recovery</h2>
                <p className="mb-10 text-[#0E7EA0]">Research has strongly undermined the pessimistic course of events in BPD:</p>
                <div className="flex flex-col lg:flex-row justify-between items-center text-left text-black gap-20 mb-50">
                    <p>Longitudinal research shows marked improvement over time in most people
                        About 50% of the patients are symptom-free in remission after 2-5 years of therapy 85% achieve remission in 10 years with only 12% having a relapse Functional recovery (social and occupational functioning) may follow symptomatic improvement Positive outcome predictors are treatment entry, absence of comorbid disease, and strong social support system Most recover enough to no longer qualify for a diagnosis of BPD Social and Clinical Issues Despite treatment advances, several challenges remain:
                        Long-standing stigma and ignorance among doctors Restricted availability of professional evidence-based interventions Severe levels of self-injury and suicide risk requiring intensive treatment Treatment  </p>
                    <p> discontinuation and participation problems Economic and personal costs associated with the disorder Need for preventive interventions and early detection Conclusion Borderline Personality Disorder is a biologically, psychosocially based treatable mental illness with complex but treatable features. With evidence-based therapy, especially with targeted psychotherapies, full symptomatic remission and recovery are possible for most patients. The evolving knowledge of BPD has progressed from a disorder linked with therapeutic pessimism to one with multiple avenues to recovery. Ongoing research, education, and advocacy are needed to enhance outcomes and decrease stigma for patients with this difficult but ultimately treatable illness.</p>
                </div>
            </section>
        </main>
    )
}

export default BPD