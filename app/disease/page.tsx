"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import playfair from "../../fonts/playfair.module.css";

const diseases = [
    {
        name: "Addiction",
        description: "A complex disorder characterized by compulsive substance use or behavior despite adverse consequences.",
        image: "/addiction.webp",
        link: "/addiction"
    },
    {
        name: "Aggression",
        description: "A behavioral pattern marked by hostile or violent behavior towards others.",
        image: "/aggression.webp",
        link: "/aggression"
    },
    {
        name: "Anxiety",
        description: "A mental health condition characterized by excessive worry and fear about everyday situations.",
        image: "/anxiety.webp",
        link: "/anxiety"
    },
    {
        name: "Antisocial Personality Disorder",
        description: "A mental condition where a person consistently shows no regard for right and wrong.",
        image: "/asdp.webp",
        link: "/aspd"
    },
    {
        name: "Autism",
        description: "A developmental disorder affecting communication and behavior.",
        image: "/autistic.webp",
        link: "/autistic"
    },
    {
        name: "Borderline Personality Disorder",
        description: "A mental health disorder that impacts how you think and feel about yourself and others.",
        image: "/bpd.webp",
        link: "/bpd"
    },
    {
        name: "Relationship Issues",
        description: "Challenges and difficulties that arise within interpersonal relationships.",
        image: "/relationship.webp",
        link: "/relationship"
    },
    {
        name: "Lifestyle Diseases",
        description: "Health conditions that arise from the way people live their daily lives.",
        image: "/lifestyle.webp",
        link: "/lifestyle"
    },
    {
        name: "Mood Disorders",
        description: "Conditions that affect a person's emotional state over extended periods.",
        image: "/mood.webp",
        link: "/mood"
    },
    {
        name: "Sexual Dysfunction",
        description: "Physical or psychological problems that prevent satisfaction in sexual activity.",
        image: "/dysfunction.webp",
        link: "/dysfunction"
    },
    {
        name: "Homosexuality",
        description: "Understanding and support for individuals with same-sex attraction.",
        image: "/homosexuality.webp",
        link: "/homosexuality"
    },
    {
        name: "Breakup Recovery",
        description: "Guidance and support for healing after the end of a relationship.",
        image: "/breakup.webp",
        link: "/breakup"
    },
    {
        name: "Childhood ADHD",
        description: "Understand the signs of ADHD in children and explore strategies to support focus, behavior, and emotional development.",
        image: "/childhoodadhd.webp",
        link: "/Childhood-dhd"
    },
    {
        name: "Childhood Anxiety",
        description: "Learn how to identify and manage anxiety in children with compassionate tools that nurture emotional well-being and resilience.",
        image: "/childhoodanxiety.webp",
        link: "/childhood-anxiety"
    },
    {
        name: "Childhood Depression",
        description: "Discover how to recognize childhood depression early and provide the emotional support  for healing and hope.",
        image: "/childhooddepression.webp",
        link: "/childhood-depression"
    },
    {
        name: "Temper Tantrums",
        description: "Learn about temper tantrums, a common symptom of depression, and how to recognize and manage them effectively.",
        image: "/temper.webp",
        link: "/temper"
    },
    {
        name: "Adjustment-Related Problems",
        description: "Discover the challenges individuals face when adjusting to major life changes.",
        image: "/adjustment_related.webp",
        link: "/adjustment-related"
    },
    {
        name: "Anorexia and Other Eating Disorders",
        description: "Explore the emotional, physical, and psychological struggles behind eating disorders.",
        image: "/anorexia.webp",
        link: "/anorexia"
    },
    {
        name: "Chronic Pain",
        description: "Understand the ongoing battle with chronic pain, its impact on daily life, and strategies for managing symptoms and maintaining hope.",
        image: "/ChronicPain.webp",
        link: "/chronic-pain"
    },
    {
        name: "Forgetfulness",
        description: "Understand the ongoing battle with Forgetfulness, its impact on daily life, and strategies for managing symptoms and maintaining hope.",
        image: "/forgetfulness.webp",
        link: "/forgetfulness"
    },
    {
        name: "Impulsivity",
        description: "Impulsivity and aggression are disruptive behavioral traits that can impair judgment, relationships, and daily functioning.",
        image: "/impulsivity.webp",
        link: "/impulsivity"
    },
    {
        name: "Sleep Disorders",
        description: "Impulsivity and aggression are disruptive behavioral traits that can impair judgment, relationships, and daily functioning.",
        image: "/sleep.webp",
        link: "/sleep"
    },
    

];

const DiseasesPage = () => {
    const [searchTerm, setSearchTerm] = useState("");

    const filteredDiseases = diseases.filter(disease =>
        disease.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        disease.description.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <main className="w-full min-h-screen bg-white py-20 px-4 lg:px-20">
            <div className="text-center mb-16">
                <h1 className={`text-[#0E7EA0] lg:text-[4vw] text-[8vw] font-bold ${playfair.className} mb-6`}>
                    Mental Health Conditions
                </h1>
                <p className="text-black lg:text-[1.25vw] text-[3.5vw] max-w-3xl mx-auto mb-8">
                    Explore various mental health conditions and psychological challenges. Click on any condition to learn more about its causes, symptoms, and treatment options.
                </p>
                <div className="max-w-2xl mx-auto">
                    <input
                        type="text"
                        placeholder="Search conditions..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full px-6 py-4 text-lg border-2 border-[#0E7EA0] rounded-full focus:outline-none focus:border-[#0E7EA0] focus:ring-2 focus:ring-[#0E7EA0] focus:ring-opacity-50 transition-all duration-300 text-black"
                    />
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                {filteredDiseases.map((disease, index) => (
                    <Link href={disease.link} key={index} className="group">
                        <div className="bg-white rounded-2xl shadow-lg overflow-hidden transition-transform duration-300 transform hover:scale-105">
                            <div className="relative h-48 w-full">
                                <Image
                                    src={disease.image}
                                    alt={disease.name}
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <div className="p-6">
                                <h3 className={`text-[#0E7EA0] text-xl font-bold mb-2 ${playfair.className}`}>
                                    {disease.name}
                                </h3>
                                <p className="text-gray-600 text-sm">
                                    {disease.description}
                                </p>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </main>
    );
};

export default DiseasesPage;