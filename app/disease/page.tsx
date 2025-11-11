"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import playfair from "../../fonts/playfair.module.css";

const unsortedDiseases = [
  {
    name: "Antisocial Personality Disorder",
    description:
      "A mental condition where a person consistently shows no regard for right and wrong.",
    image: "/diseases-banner/asdp.webp",
    link: "/diseases/aspd",
  },
  {
    name: "Borderline Personality Disorder",
    description:
      "A mental health disorder that impacts how you think and feel about yourself and others.",
    image: "/diseases-banner/bpd.webp",
    link: "/diseases/bpd",
  },
  {
    name: "Breakup Recovery",
    description:
      "Guidance and support for healing after the end of a relationship.",
    image: "/diseases-banner/breakup.webp",
    link: "/diseases/breakup",
  },
  {
    name: "Couples Issues",
    description:
      "Guidance and strategies to improve compatibility and relationship dynamics.",
    image: "/diseases-banner/couples.webp",
    link: "/diseases/couples",
  },
  {
    name: "Homosexuality",
    description:
      "Understanding and support for individuals with same-sex attraction.",
    image: "/diseases-banner/homosexuality.webp",
    link: "/diseases/homosexuality",
  },
  {
    name: "Sexual Dysfunction",
    description:
      "Physical or psychological problems that prevent satisfaction in sexual activity.",
    image: "/diseases-banner/dysfunction.webp",
    link: "/diseases/dysfunction",
  },
  {
    name: "Histrionic Personality Disorder (HPD)",
    description:
      "Histrionic personality disorder is a mental health condition that affects the way a person thinks, feels, and behaves.",
    image:
      "https://images.pexels.com/photos/8108217/pexels-photo-8108217.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    link: "/diseases/hpd",
  },
  {
    name: "Passive Aggression",
    description:
      "Passive aggression is a pattern of behavior that involves indirect, subtle, or covert ways of expressing anger or hostility.",
    image:
      "https://images.pexels.com/photos/7516447/pexels-photo-7516447.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    link: "/diseases/passive",
  },
  {
    name: "Addiction",
    description:
      "A complex disorder characterized by compulsive substance use or behavior despite adverse consequences.",
    image: "/diseases-banner/addiction.webp",
    link: "/diseases/addiction",
  },
  {
    name: "Alcohol",
    description:
      "Alcohol is a central nervous system depressant that affects mood, behavior, and physical health.",
    image: "/diseases-banner/alcohol.webp",
    link: "/diseases/alcohol",
  },
  {
    name: "Cannabis",
    description:
      "Cannabis is a plant species that contains psychoactive compounds.",
    image: "/diseases-banner/cannabis.webp",
    link: "/diseases/cannabis",
  },
  {
    name: "Cocaine",
    description:
      "Cocaine is a central nervous system stimulant that affects mood, behavior, and physical health.",
    image: "/diseases-banner/cocaine.webp",
    link: "/diseases/cocaine",
  },
  {
    name: "Coffee",
    description:
      "Coffee is a central nervous system stimulant that affects mood, behavior, and physical health.",
    image: "/diseases-banner/coffee.webp",
    link: "/diseases/coffee",
  },
  {
    name: "Hallucinogens",
    description:
      "Hallucinogens are a group of substances that alter perception, mood, and cognitive processes by disrupting communication between brain chemical systems.",
    image: "/diseases-banner/hallucinogens.webp",
    link: "/diseases/hallucinogens",
  },
  {
    name: "Inhalants and Solvents",
    description:
      "Inhalants and solvents are substances that are inhaled or absorbed through the skin to produce a quick high.",
    image: "/diseases-banner/inhalants.webp",
    link: "/diseases/inhalantsnsolvents",
  },
  {
    name: "Nicotine (Cigarette Smoking)",
    description:
      "Nicotine is a central nervous system stimulant that affects mood, behavior, and physical health.",
    image: "/diseases-banner/nicotine-cigarette.webp",
    link: "/diseases/nicotine-cigarette",
  },
  {
    name: "Nicotine (Tobacco Chewing)",
    description:
      "Nicotine is a central nervous system stimulant that affects mood, behavior, and physical health.",
    image: "/diseases-banner/nicotine-tobacco.webp",
    link: "/diseases/nicotine-tobacco",
  },
  {
    name: "Non-Substance Addictions",
    description:
      "Non-substance addictions are a group of mental health conditions that affect the way a person thinks, feels, and behaves.",
    image: "/diseases-banner/non-substance.webp",
    link: "/diseases/non-substance",
  },
  {
    name: "Opioids and Brown Sugar",
    description:
      "Opioids and brown sugar are a group of mental health conditions that affect the way a person thinks, feels, and behaves.",
    image: "/diseases-banner/opioids.webp",
    link: "/diseases/opioids",
  },
 {
  name: "Aggression",
  description:
    "A behavioral pattern marked by hostile or violent behavior towards others.",
  image: "/diseases-banner/aggression.webp",
  link: "/diseases/aggression",
},
{
  name: "Anxiety",
  description:
    "A mental health condition characterized by excessive worry and fear about everyday situations.",
  image: "/diseases-banner/anxiety.webp",
  link: "/diseases/anxiety",
},
{
  name: "Autism",
  description:
    "A developmental disorder affecting communication and behavior.",
  image: "/diseases-banner/autistic.webp",
  link: "/diseases/autistic",
},
{
  name: "Relationship Issues",
  description:
    "Challenges and difficulties that arise within interpersonal relationships.",
  image: "/diseases-banner/relationship.webp",
  link: "/diseases/relationship",
},
{
  name: "Lifestyle Diseases",
  description:
    "Health conditions that arise from the way people live their daily lives.",
  image: "/diseases-banner/lifestyle.webp",
  link: "/diseases/lifestyle",
},
{
  name: "Mood Disorders",
  description:
    "Conditions that affect a person's emotional state over extended periods.",
  image: "/diseases-banner/mood.webp",
  link: "/diseases/mood",
},
{
  name: "Childhood ADHD",
  description:
    "Understand the signs of ADHD in children and explore strategies to support focus, behavior, and emotional development.",
  image: "/diseases-banner/childhoodadhd.webp",
  link: "/diseases/Childhood-dhd",
},
{
  name: "Childhood Anxiety",
  description:
    "Learn how to identify and manage anxiety in children with compassionate tools that nurture emotional well-being and resilience.",
  image: "/diseases-banner/childhoodanxiety.webp",
  link: "/diseases/childhood-anxiety",
},
{
  name: "Childhood Depression",
  description:
    "Discover how to recognize childhood depression early and provide the emotional support for healing and hope.",
  image: "/diseases-banner/childhooddepression.webp",
  link: "/diseases/childhood-depression",
},
{
  name: "Temper Tantrums",
  description:
    "Learn about temper tantrums, a common symptom of depression, and how to recognize and manage them effectively.",
  image: "/diseases-banner/temper.webp",
  link: "/diseases/temper",
},
{
  name: "Adjustment-Related Problems",
  description:
    "Discover the challenges individuals face when adjusting to major life changes.",
  image: "/diseases-banner/adjustment_related.webp",
  link: "/diseases/adjustment-related",
},
{
  name: "Anorexia and Other Eating Disorders",
  description:
    "Explore the emotional, physical, and psychological struggles behind eating disorders.",
  image: "/diseases-banner/anorexia.webp",
  link: "/diseases/anorexia",
},
{
  name: "Chronic Pain",
  description:
    "Understand the ongoing battle with chronic pain, its impact on daily life, and strategies for managing symptoms and maintaining hope.",
  image: "/diseases-banner/ChronicPain.webp",
  link: "/diseases/chronic-pain",
},
{
  name: "Forgetfulness",
  description:
    "Understand the ongoing battle with Forgetfulness, its impact on daily life, and strategies for managing symptoms and maintaining hope.",
  image: "/diseases-banner/forgetfulness.webp",
  link: "/diseases/forgetfulness",
},
{
  name: "Impulsivity",
  description:
    "Impulsivity and aggression are disruptive behavioral traits that can impair judgment, relationships, and daily functioning.",
  image: "/diseases-banner/impulsivity.webp",
  link: "/diseases/impulsivity",
},
{
  name: "Sleep Disorders",
  description:
    "Sleep disorders affect your ability to get restful sleep and can lead to fatigue, mood swings, impaired focus, and long-term health issues.",
  image: "/diseases-banner/sleep.webp",
  link: "/diseases/sleep",
},
{
  name: "Sexuality",
  description:
    "Sexuality is a core aspect of human identity, encompassing feelings, behaviors, orientation, and intimacy.",
  image: "/diseases-banner/sexuality.webp",
  link: "/diseases/sexuality",
},
{
  name: "Mania",
  description:
    "Sexuality is a core aspect of human identity, encompassing feelings, behaviors, orientation, and intimacy.",
  image: "/diseases-banner/mania.webp",
  link: "/diseases/mania",
},
{
  name: "Obsessive-Compulsive Disorder",
  description:
    "A mental health condition characterized by persistent intrusive thoughts (obsessions) and repetitive behaviors (compulsions) aimed at reducing distress.",
  image: "/diseases-banner/ocd.webp",
  link: "/diseases/ocd",
},
{
  name: "Personality Disorders?",
  description:
    "Personality disorders are a group of mental health conditions that affect the way a person thinks, feels, and behaves.",
  image: "/diseases-banner/personality.webp",
  link: "/diseases/personality",
},
{
  name: "Relationship Tribulations",
  description:
    "Relationship tribulations are challenges and difficulties that arise within interpersonal relationships.",
  image: "/diseases-banner/relationship-tribulations.webp",
  link: "/diseases/relationship-tribulations",
},
{
  name: "Schizophrenia",
  description:
    "Schizophrenia is a chronic psychiatric disorder that affects how individuals think, perceive, and interact with the world. It often includes episodes of psychosis, marked by hallucinations, delusions, and disorganized thinking.",
  image: "/diseases-banner/schizophrenia.webp",
  link: "/diseases/schizophrenia",
},
{
  name: "Stress in Children",
  description:
    "Stress in children is a growing concern that affects emotional, cognitive, and social development. It occurs when children feel overwhelmed by demands or situations they cannot fully understand or control.",
  image: "/diseases-banner/childstress.webp",
  link: "/diseases/childstress",
},
{
  name: "Unhappiness and Depressive Disorders",
  description:
    "Unhappiness and depressive disorders are mental health conditions that affect mood, behavior, and physical health.",
  image: "/diseases-banner/unhappyness.webp",
  link: "/diseases/unhappiness",
},
{
  name: "Alcohol",
  description:
    "Alcohol is a central nervous system depressant that affects mood, behavior, and physical health.",
  image: "/diseases-banner/alcohol.webp",
  link: "/diseases/alcohol",
},
{
  name: "Cannabis",
  description:
    "Cannabis is a plant species that contains psychoactive compounds.",
  image: "/diseases-banner/cannabis.webp",
  link: "/diseases/cannabis",
},
{
  name: "Cocaine",
  description:
    "Cocaine is a central nervous system stimulant that affects mood, behavior, and physical health.",
  image: "/diseases-banner/cocaine.webp",
  link: "/diseases/cocaine",
},
{
  name: "Coffee",
  description:
    "Coffee is a central nervous system stimulant that affects mood, behavior, and physical health.",
  image: "/diseases-banner/coffee.webp",
  link: "/diseases/coffee",
},
{
  name: "Hallucinogens",
  description:
    "Hallucinogens are a group of substances that alter perception, mood, and cognitive processes by disrupting communication between brain chemical systems.",
  image: "/diseases-banner/hallucinogens.webp",
  link: "/diseases/hallucinogens",
},
{
  name: "Nicotine (Cigarette Smoking)",
  description:
    "Nicotine is a central nervous system stimulant that affects mood, behavior, and physical health.",
  image: "/diseases-banner/nicotine-cigarette.webp",
  link: "/diseases/nicotine-cigarette",
},
{
  name: "Nicotine (Tobacco Chewing)",
  description:
    "Nicotine is a central nervous system stimulant that affects mood, behavior, and physical health.",
  image: "/diseases-banner/nicotine-tobacco.webp",
  link: "/diseases/nicotine-tobacco",
},
{
  name: "Non-Substance Addictions",
  description:
    "Non-substance addictions are a group of mental health conditions that affect the way a person thinks, feels, and behaves.",
  image: "/diseases-banner/non-substance.webp",
  link: "/diseases/non-substance",
},
{
  name: "Opioids and Brown Sugar",
  description:
    "Opioids and brown sugar are a group of mental health conditions that affect the way a person thinks, feels, and behaves.",
  image: "/diseases-banner/opioids.webp",
  link: "/diseases/opioids",
},
{
  name: "Social Fear",
  description:
    "Social fear is a mental health condition that affects the way a person thinks, feels, and behaves.",
  image: "/diseases-banner/socialfear.webp",
  link: "/diseases/socialfear",
},
{
  name: "Specific Anxieties",
  description:
    "Specific anxieties are a mental health condition that affects the way a person thinks, feels, and behaves.",
  image: "/diseases-banner/specificanxieties.webp",
  link: "/diseases/specificanxieties",
},
{
  name: "Suicidality",
  description:
    "Suicidality is a mental health condition that affects the way a person thinks, feels, and behaves.",
  image: "/diseases-banner/suicidality.webp",
  link: "/diseases/suicidality",
},
{
  name: "Relationships and Emotional Wellness",
  description:
    "Relationships and emotional wellness are a mental health condition that affects the way a person thinks, feels, and behaves.",
  image: "/diseases-banner/relationshipsn-emotional.webp",
  link: "/diseases/relationshipsnemotional",
},
{
  name: "Adult Psychological Problems",
  description:
    "Adult psychological problems are a mental health condition that affects the way a person thinks, feels, and behaves.",
  image: "/diseases-banner/adultpsychological.webp",
  link: "/diseases/adultpsychological",
},
{
  name: "Pregnancy",
  description:
    "Pregnancy is a mental health condition that affects the way a person thinks, feels, and behaves.",
  image: "/diseases-banner/pregnancy.webp",
  link: "/diseases/pregnancy",
},
{
  name: "Inhalants and Solvents",
  description:
    "Inhalants and solvents are substances that are inhaled or absorbed through the skin to produce a quick high.",
  image: "/diseases-banner/inhalants.webp",
  link: "/diseases/inhalantsnsolvents",
}

];

// Sort diseases alphabetically by name
const diseases = [...unsortedDiseases].sort((a, b) => 
  a.name.localeCompare(b.name)
);

const DiseasesPage = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredDiseases = diseases.filter(
    (disease) =>
      disease.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      disease.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <main className="w-full min-h-screen bg-white py-20 px-4 lg:px-20">
      <div className="text-center mb-16">
        <h1
          className={`text-[#0E7EA0] lg:text-[4vw] text-[8vw] font-bold ${playfair.className} mb-6`}
        >
          Mental Health Conditions
        </h1>
        <p className="text-black lg:text-[1.25vw] text-[3.5vw] max-w-3xl mx-auto mb-8">
          Explore various mental health conditions and psychological challenges.
          Click on any condition to learn more about its causes, symptoms, and
          treatment options.
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
                <h3
                  className={`text-[#0E7EA0] text-xl font-bold mb-2 ${playfair.className}`}
                >
                  {disease.name}
                </h3>
                <p className="text-gray-600 text-sm">{disease.description}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
};

export default DiseasesPage;
