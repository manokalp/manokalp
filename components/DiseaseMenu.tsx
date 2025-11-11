'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

// Disease data with correct links and organization
export const diseaseData = {
  // Temporarily limited to requested pages; other categories commented out for future restore.
  "Personality": [
    { name: "ASPD", link: "/diseases/aspd" },
    { name: "Borderline Personality Disorder", link: "/diseases/bpd" },
    { name: "Histrionic Personality Disorder", link: "/diseases/hpd" },
    // { name: "Narcissistic Personality Disorder", link: "/diseases/narcissistic" }, // Page not present currently
    { name: "Passive Aggressive Personality", link: "/diseases/passive" },
  ],
  "Relationships": [
    { name: "Breakups", link: "/diseases/breakup" },
    // { name: "Communication Styles", link: "/diseases/communication" }, // Page not present currently
    { name: "Couples Compatibility", link: "/diseases/couples" },
    { name: "Homosexuality (LGB)", link: "/diseases/homosexuality" },
    { name: "Sexual Dysfunction", link: "/diseases/dysfunction" },
  ],
  "Addiction: An Illness": [
    { name: "Addiction", link: "/diseases/addiction" },
    { name: "Alcohol", link: "/diseases/alcohol" },
    { name: "Cannabis", link: "/diseases/cannabis" },
    { name: "Cocaine", link: "/diseases/cocaine" },
    { name: "Coffee", link: "/diseases/coffee" },
    { name: "Hallucinogens", link: "/diseases/hallucinogens" },
    { name: "Inhalants and Solvents", link: "/diseases/inhalantsnsolvents" },
    { name: "Nicotine (Cigarette Smoking)", link: "/diseases/nicotine-cigarette" },
    { name: "Nicotine (Tobacco Chewing)", link: "/diseases/nicotine-tobacco" },
    { name: "Non-Substance Addictions", link: "/diseases/non-substance" },
    { name: "Opioids and Brown Sugar", link: "/diseases/opioids" }
  ],
  
  "Adulthood Problems": [
    { name: "Adjustment-Related Problems", link: "/diseases/adjustment-related" },
    { name: "Adult Psychological Problems", link: "/diseases/adultpsychological" },
    { name: "Aggression", link: "/diseases/aggression" },
    { name: "Anorexia and Other Eating Disorders", link: "/diseases/anorexia" },
    { name: "Antisocial Personality Disorder", link: "/diseases/aspd" },
    { name: "Anxiety", link: "/diseases/anxiety" },
    { name: "Autism Spectrum", link: "/diseases/autistic" },
    { name: "Borderline Personality Disorder", link: "/diseases/bpd" },
    { name: "Breakup Recovery", link: "/diseases/breakup" },
    { name: "Chronic Pain", link: "/diseases/chronic-pain" },
    { name: "Couples Issues", link: "/diseases/couples" },
    { name: "Forgetfulness", link: "/diseases/forgetfulness" },
    { name: "Histrionic Personality Disorder", link: "/diseases/hpd" },
    { name: "Homosexuality", link: "/diseases/homosexuality" },
    { name: "Impulsivity", link: "/diseases/impulsivity" },
    { name: "Lifestyle Diseases", link: "/diseases/lifestyle" },
    { name: "Mania", link: "/diseases/mania" },
    { name: "Mood Disorders", link: "/diseases/mood" },
    { name: "Obsessive-Compulsive Disorder", link: "/diseases/ocd" },
    { name: "Passive Aggression", link: "/diseases/passive" },
    { name: "Personality Disorders", link: "/diseases/personality" },
    { name: "Pregnancy", link: "/diseases/pregnancy" },
    { name: "Relationship Issues", link: "/diseases/relationship" },
    { name: "Relationship Tribulations", link: "/diseases/relationship-tribulations" },
    { name: "Relationships and Emotional Wellness", link: "/diseases/relationshipsnemotional" },
    { name: "Schizophrenia", link: "/diseases/schizophrenia" },
    { name: "Sexual Dysfunction", link: "/diseases/dysfunction" },
    { name: "Sexuality", link: "/diseases/sexuality" },
    { name: "Sleep Disorders", link: "/diseases/sleep" },
    { name: "Social Fear", link: "/diseases/socialfear" },
    { name: "Specific Anxieties", link: "/diseases/specificanxieties" },
    { name: "Stress", link: "/diseases/stress" },
    { name: "Suicidality", link: "/diseases/suicidality" },
    { name: "Unhappiness and Depressive Disorders", link: "/diseases/unhappiness" }
  ],
  "Childhood Problems": [
    { name: "Childhood ADHD", link: "/diseases/Childhood-dhd" },
    { name: "Childhood Anxiety", link: "/diseases/childhood-anxiety" },
    { name: "Childhood Depression", link: "/diseases/childhood-depression" },
    { name: "Stress in Children", link: "/diseases/childstress" },
    { name: "Temper Tantrums", link: "/diseases/temper" }
  ]
}



interface CategoryMenuProps {
  category: string;
  diseases: { name: string; link: string; }[];
}

export function CategoryMenu({ category, diseases }: CategoryMenuProps) {
  const [open, setOpen] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const checkDesktop = () => {
      setIsDesktop(window.innerWidth >= 1024); // Tailwind's lg breakpoint
    };
    checkDesktop();
    window.addEventListener('resize', checkDesktop);
    return () => window.removeEventListener('resize', checkDesktop);
  }, []);

  const getCategoryIcon = (cat: string) => {
    switch (cat) {
      case "Adulthood Problems":
        return <Image src="/icons/adult.webp" alt="What We Do" width={20} height={20} />;
      case "Childhood Problems":
        return <Image src="/icons/child.webp" alt="What We Do" width={20} height={20} />;
      case "Addiction: An Illness":
        return <Image src="/icons/addiction.webp" alt="What We Do" width={20} height={20} />;
      default:
        return "";
    }
  };

  // Handlers for desktop hover
  const handleMouseEnter = () => {
    if (isDesktop) setOpen(true);
  };
  const handleMouseLeave = () => {
    if (isDesktop) setOpen(false);
  };
  // Handler for mobile click
  const handleClick = () => {
    if (!isDesktop) setOpen((prev) => !prev);
  };

  return (
    <div
      className="relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <button
        className="flex items-center text-gray-700 hover:text-[#0E7EA1] font-medium px-2 py-2 rounded-md hover:bg-gray-50 transition-all duration-200 text-base"
        onClick={handleClick}
        aria-expanded={open}
        aria-haspopup="true"
        type="button"
      >
        <span className="mr-1">{getCategoryIcon(category)}</span>
        {category}
        <svg
          className={`w-4 h-4 ml-1 transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {open && (
        isDesktop ? (
          <div className={`absolute left-0 mt-[-2px] max-h-80 overflow-y-auto w-64 bg-white rounded-lg shadow-xl z-50`}>
            <div className="p-4 grid grid-cols-1 gap-2">
              {diseases.map((disease) => (
                <Link
                  key={disease.name}
                  href={disease.link}
                  className="flex items-center text-gray-600 hover:text-[#0E7EA1] text-sm py-2 px-2 rounded-md hover:bg-gray-50 transition-colors duration-200"
                >
                  <span className="mr-2">🔎</span> {disease.name}
                </Link>
              ))}
            </div>
          </div>
        ) : (
          <div className="block w-full bg-white rounded-lg shadow-none z-10">
            <div className="p-2 grid grid-cols-1 gap-2">
              {diseases.map((disease) => (
                <Link
                  key={disease.name}
                  href={disease.link}
                  className="flex items-center text-gray-600 hover:text-[#0E7EA1] text-base py-2 px-2 rounded-md hover:bg-gray-50 transition-colors duration-200"
                >
                  <span className="mr-2">🔎</span> {disease.name}
                </Link>
              ))}
            </div>
          </div>
        )
      )}
    </div>
  );
}

export default function DiseaseMenus() {
  return (
    <div className="flex items-center space-x-4">
      {Object.entries(diseaseData).map(([category, diseases]) => (
        <CategoryMenu key={category} category={category} diseases={diseases} />
      ))}
    </div>
  );
}