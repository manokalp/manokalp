"use client"
import Image from "next/image"
// import Link from "next/link"    
import { useState } from 'react';
import playfair from "../../../fonts/playfair.module.css"

const HPD = () => {
    // Define the type for symptom categories
    type SymptomCategory = "emotional" | "behavioral" | "cognitive" | "interpersonal";
    
    // Use the type in the state declaration
    const [activeTab, setActiveTab] = useState<SymptomCategory>("emotional");

    const causes = [
        {
            name: "Genetic and Neurobiological Factors",
            description: "Genetic predisposition plays a role in the development of HPD, with some research suggesting heightened sensitivity in brain regions associated with emotion processing.",
            bgColor: "bg-[#0E7EA0]", // Blue background
            textColor: "text-white",
        },
        {
            name: "Environmental and Developmental Influences",
            description: "Inconsistent parenting, reward systems focused on appearance rather than genuine achievements, and early modeling of dramatic behaviors may contribute to HPD.",
            bgColor: "bg-[#FFD700]", // Yellow background
            textColor: "text-black",
        },
        {
            name: "Psychological Factors",
            description: "Maladaptive coping mechanisms developed early in life, learned attention-seeking behaviors, and poor self-regulation abilities are common psychological contributors.",
            bgColor: "bg-[#0E7EA0]", // Blue background
            textColor: "text-white",
        },
    ];

    // Define the symptoms object with proper typing
    const symptoms: Record<SymptomCategory, string[]> = {
        emotional: [
            "Discomfort when not the center of attention",
            "Emotions that shift rapidly and appear shallow",
            "Perceives relationships as more intimate than they are",
            "Easily influenced by others or circumstances",
            "Excessive emotional sensitivity and reactivity",
            "Constant need for approval and reassurance"
        ],
        behavioral: [
            "Inappropriately seductive or provocative behavior",
            "Uses physical appearance to attract attention",
            "Theatrical and exaggerated expression of emotions",
            "Speech that lacks detail and substance",
            "Self-dramatization and excessive storytelling",
            "Attention-seeking through dramatic or crisis-oriented behaviors"
        ],
        cognitive: [
            "Impressionistic thinking and lack of detail focus",
            "Easily suggestible and influenced by others",
            "Poor insight into own behavior patterns",
            "Difficulty maintaining deep intellectual interests",
            "Tendency to misinterpret relationships as more intimate",
            "Subjective rather than objective thinking patterns"
        ],
        interpersonal: [
            "Manipulative behavior to achieve attention",
            "Demanding immediate satisfaction of needs",
            "Difficulty maintaining stable relationships",
            "Overemphasis on physical attractiveness in relationships",
            "Excessive need for approval from others",
            "Becomes bored with routine and seeks novelty in relationships"
        ]
    };

    const treatments = [
        {
            title: "Psychodynamic Therapy",
            description: "Focuses on uncovering unconscious drivers of attention-seeking behaviors and developing healthier patterns of relating to others.",
            image: "https://images.pexels.com/photos/7176319/pexels-photo-7176319.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        },
        {
            title: "Cognitive Behavioral Therapy (CBT)",
            description: "Addresses negative thought patterns and behaviors, helping clients develop insights about self-worth beyond external validation.",
            image: "https://images.pexels.com/photos/7176305/pexels-photo-7176305.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        },
        {
            title: "Group Therapy",
            description: "Provides feedback on behavior in social settings and helps develop appropriate interpersonal boundaries and relationship skills.",
            image: "https://images.pexels.com/photos/6893800/pexels-photo-6893800.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        },
        {
            title: "Schema Therapy",
            description: "Targets maladaptive life patterns from early life and develops healthier emotional coping strategies and self-image.",
            image: "https://images.pexels.com/photos/7176325/pexels-photo-7176325.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        }
    ];

    const pharmacological = [
        {
            title: "Selective Serotonin Reuptake Inhibitors (SSRIs)",
            description: "May help manage co-occurring depression, anxiety, or mood instability in some cases."
        },
        {
            title: "Mood Stabilizers",
            description: "Sometimes prescribed for emotional lability and impulsivity when symptoms are severe."
        },
        {
            title: "Anti-anxiety Medications",
            description: "Might be used short-term to manage acute anxiety symptoms during treatment."
        }
    ];

    const holisticCare = [
        {
            title: "Mindfulness Practice",
            description: "Developing present-moment awareness to reduce emotional reactivity and attention-seeking behaviors."
        },
        {
            title: "Healthy Lifestyle",
            description: "Regular exercise, balanced nutrition, and adequate sleep to support emotional regulation."
        },
        {
            title: "Creative Outlets",
            description: "Channeling expressive tendencies into appropriate artistic or performance activities."
        }
    ];

    return (
        <main className="w-full h-full flex justify-center flex-col bg-white">
            {/* Hero Desktop */}
            <div className="w-full hidden lg:block text-center">
                <h2 className="lg:text-[5vw] text-[6vw] text-white font-semibold relative z-10 font-[playfull] ">Histrionic Personality Disorder (HPD)</h2>
                <Image src="https://images.pexels.com/photos/8108217/pexels-photo-8108217.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="hero image" objectFit="cover" width={1200} height={100} className="w-full lg:mt-[-66vw] mt-[-25vw] z-0" />
            </div>

            {/* Hero Mobile */}
            <div className="w-full lg:hidden block text-center">
                <Image src="https://images.pexels.com/photos/8108217/pexels-photo-8108217.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="hero image" objectFit="cover" width={1200} height={100} className="w-full z-0 mb-[10vw]" />
                <h2 className="lg:text-[5vw] text-[6vw] text-black font-semibold relative z-10 font-[playfull] mt-[-120vw] mb-30 px-6">Histrionic Personality Disorder (HPD)</h2>
            </div>

            {/* Introduction Section */}
            <section className="bg-[#0E7EA0] rounded-full w-full h-full lg:px-40 px-10 lg:py-20 py-20 text-center lg:mt-[-50vw] mt-[-0vw]">
                <div className="flex flex-col lg:flex-row justify-center lg:gap-20 gap-10 items-center text-center mb-20">
                    <p className="lg:text-[1.55vw] text-[3.5vw] font-medium text-left">Histrionic Personality Disorder (HPD) is a Cluster B personality disorder characterized by excessive emotionality and attention-seeking behavior. It affects about 1-3% of the general population and is more often diagnosed in women. Individuals with HPD often exhibit dramatic, flirtatious, or exaggerated behaviors, use physical appearance to attract attention, and interpret relationships as closer than they actually are. These traits can cause significant difficulties in personal and professional life.</p>
                    <p className="lg:text-[1.55vw] text-[3.5vw] font-medium text-left">A pattern that may be influenced by biological, psychological, and environmental factors. Individuals with HPD often exhibit dramatic, flirtatious, or exaggerated behaviors, use physical appearance to attract attention, and interpret relationships as closer than they actually are. These traits can cause significant difficulties in personal and professional life.</p>
                </div>
               
            </section>

            {/* Causes and Risk Factors */}
            <section className="bg-white w-full h-full lg:px-20 px-10 lg:py-20 py-10 text-center">
                <h2 className={`text-[#0E7EA0] lg:text-[3.8vw] text-[7vw] font-bold ${playfair.className} mb-8`}>Causes and Risk Factors</h2>
                <p className="text-black lg:text-[1.5vw] text-[3.5vw] mb-10">Mood disorders are the outcome of an intricate interaction between biological, psychological and environmental factors. The most frequent causes are:</p>

                {/* Causes Grid */}
                <div className="grid lg:grid-cols-3 grid-cols-1 gap-4 max-w-5xl mx-auto">
                    {causes.map((cause, index) => (
                        <div key={index} className="[perspective:1000px] cursor-pointer">
                            <div className="relative w-full aspect-square transition-all duration-500 [transform-style:preserve-3d] hover:[transform:rotateY(180deg)]">
                                {/* Front Side */}
                                <div
                                    className={`absolute inset-0 ${cause.bgColor} w-full lg:h-[50vh] rounded-xl p-6 ${cause.textColor} flex flex-col items-center justify-center [backface-visibility:hidden]`}
                                >
                                    <h3 className="lg:text-[1.5vw] text-[4vw] font-bold">
                                        {cause.name}
                                    </h3>
                                </div>
                                {/* Back Side */}
                                <div
                                    className={`absolute inset-0 ${cause.bgColor} w-full lg:h-[50vh] rounded-xl p-6 ${cause.textColor} flex flex-col items-center justify-center [transform:rotateY(180deg)] [backface-visibility:hidden]`}
                                >
                                    <p className="lg:text-[1vw] text-[3vw]">
                                        {cause.description}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Symptoms and Diagnostic Criteria */}
            <section className="bg-white w-full h-full lg:px-30 px-10 lg:pt-30 py-10 text-center">
                <h2 className={`text-[#0E7EA0] lg:text-[3.5vw] text-[7vw] font-bold ${playfair.className} mb-12`}>Symptoms and Diagnostic Criteria</h2>
                
                {/* Tab Buttons */}
                <div className="flex flex-col lg:flex-row justify-between gap-4 text-black mb-16">
                    <button 
                        onClick={() => setActiveTab("emotional")} 
                        className={`px-4 py-2 rounded-lg transition-colors ${activeTab === "emotional" ? "bg-[#0E7EA0] text-white" : "bg-gray-100"}`}
                    >
                        Emotional Symptoms
                    </button>
                    <button 
                        onClick={() => setActiveTab("behavioral")} 
                        className={`px-4 py-2 rounded-lg transition-colors ${activeTab === "behavioral" ? "bg-[#0E7EA0] text-white" : "bg-gray-100"}`}
                    >
                        Behavioral Signs
                    </button>
                    <button 
                        onClick={() => setActiveTab("cognitive")} 
                        className={`px-4 py-2 rounded-lg transition-colors ${activeTab === "cognitive" ? "bg-[#0E7EA0] text-white" : "bg-gray-100"}`}
                    >
                        Cognitive Features
                    </button>
                    <button 
                        onClick={() => setActiveTab("interpersonal")} 
                        className={`px-4 py-2 rounded-lg transition-colors ${activeTab === "interpersonal" ? "bg-[#0E7EA0] text-white" : "bg-gray-100"}`}
                    >
                        Interpersonal Patterns
                    </button>
                </div>

                {/* Tab Content */}
                <div className="flex flex-col lg:flex-row justify-between items-start">
                    <div className="flex flex-col lg:flex-row justify-between items-center w-full">
                        <div className="lg:w-1/2">
                            <ul className="text-left text-black">
                                {symptoms[activeTab].map((symptom, index) => (
                                    <li key={index} className="mb-8 border-b-[2px] pb-2">{symptom}</li>
                                ))}
                            </ul>
                        </div>
                        <div className="lg:w-[40%] w-[80vw] h-[40vh] lg:mt-0 mt-8">
                            <Image 
                                src={activeTab === "emotional" 
                                    ? "https://images.pexels.com/photos/3807738/pexels-photo-3807738.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                                    : activeTab === "behavioral" 
                                    ? "https://images.pexels.com/photos/4100481/pexels-photo-4100481.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                                    : activeTab === "cognitive" 
                                    ? "https://images.pexels.com/photos/3760611/pexels-photo-3760611.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                                    : "https://images.pexels.com/photos/8108300/pexels-photo-8108300.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"}
                                alt={`${activeTab} symptoms of HPD`} 
                                width={500} 
                                height={300}
                                className="w-full h-full object-cover rounded-xl"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Treatment Approaches and Interventions */}
            <section className="bg-white w-full h-full lg:px-40 px-10 lg:py-20 py-10 text-center">
                <h2 className={`text-[#0E7EA0] lg:text-[3.5vw] text-[7vw] font-bold ${playfair.className} mb-12`}>Treatment Approaches and Interventions</h2>
                
                <div className="grid lg:grid-cols-2 grid-cols-1 gap-8">
                    {treatments.map((treatment, index) => (
                        <div key={index} className="flex flex-col lg:flex-row items-center bg-[#0E7EA0] rounded-xl overflow-hidden">
                            <div className="lg:w-1/2">
                                <Image 
                                    src={treatment.image} 
                                    alt={treatment.title} 
                                    width={300} 
                                    height={200} 
                                    className="w-full h-[30vh] object-cover"
                                />
                            </div>
                            <div className="lg:w-1/2 p-6 text-left">
                                <h3 className="text-xl font-bold mb-2">{treatment.title}</h3>
                                <p>{treatment.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Pharmacological Intervention */}
            <section className="bg-white w-full h-full lg:px-40 px-10 lg:py-20 py-10">
                <h2 className={`text-[#0E7EA0] lg:text-[3.5vw] text-[7vw] font-bold ${playfair.className} mb-12 text-center`}>Pharmacological Intervention</h2>
                
                <div className="flex flex-col lg:flex-row gap-8 mb-10">
                    <div className="lg:w-1/2">
                        <p className="text-black lg:text-[1.25vw] text-[3.5vw] mb-6">
                            Although no medications are specifically FDA-approved for HPD, certain medications may be prescribed to target specific symptoms or co-occurring conditions:
                        </p>
                        <ul className="text-left text-black lg:text-[1.25vw] text-[3.5vw]">
                            {pharmacological.map((item, index) => (
                                <li key={index} className="mb-6">
                                    <strong>{item.title}:</strong> {item.description}
                                </li>
                            ))}
                        </ul>
                        <p className="text-black lg:text-[1.25vw] text-[3.5vw] mt-6">
                            Medication is typically used as an adjunct to psychotherapy rather than as the primary treatment for HPD. Prescribers should carefully monitor for side effects and dependence.
                        </p>
                    </div>
                    <div className="lg:w-1/2">
                        <Image 
                            src="https://images.pexels.com/photos/3683074/pexels-photo-3683074.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                            alt="Pharmacological treatment" 
                            width={500} 
                            height={400}
                            className="w-full h-[50vh] object-cover rounded-xl"
                        />
                    </div>
                </div>
            </section>

            {/* Holistic Care */}
            <section className="bg-white w-full h-full lg:px-40 px-10 lg:py-20 py-10">
                <h2 className={`text-[#0E7EA0] lg:text-[3.5vw] text-[7vw] font-bold ${playfair.className} mb-12 text-center`}>Holistic Care</h2>
                
                <div className="flex flex-col lg:flex-row gap-8 mb-10">
                    <div className="lg:w-1/2">
                        <Image 
                            src="https://images.pexels.com/photos/3759659/pexels-photo-3759659.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                            alt="Holistic care" 
                            width={500} 
                            height={400}
                            className="w-full h-[50vh] object-cover rounded-xl"
                        />
                    </div>
                    <div className="lg:w-1/2">
                        <p className="text-black lg:text-[1.25vw] text-[3.5vw] mb-6">
                            A comprehensive approach to treating HPD often includes lifestyle and complementary interventions:
                        </p>
                        <ul className="text-left text-black lg:text-[1.25vw] text-[3.5vw]">
                            {holisticCare.map((item, index) => (
                                <li key={index} className="mb-6">
                                    <strong>{item.title}:</strong> {item.description}
                                </li>
                            ))}
                        </ul>
                        <p className="text-black lg:text-[1.25vw] text-[3.5vw] mt-6">
                            These approaches can help individuals develop more authentic self-expression and reduce the need for dramatic attention-seeking behaviors.
                        </p>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default HPD 