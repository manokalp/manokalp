"use client"
import Image from "next/image"
import Link from "next/link"
import { useState } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import playfair from "../../fonts/playfair.module.css"

const tips = [
    {
        title: 'Accept the Reality',
        description: 'Denial delays the healing process. Accepting that the relationship has ended is the first step towards the healing process.'
    },
    {
        title: 'Be Around Positive People',
        description: 'Family and friends can offer emotional support and advice during difficult periods. Sharing feelings can be therapeutic.'
    },
    {
        title: 'Allow Yourself to Grieve',
        description: 'It is normal to feel sad and to mourn the loss of the relationship. Suppressing emotions can lead to long-term emotional issues. Give yourself time to process the breakup.'
    },
    {
        title: "Don't Leap into Rebound Relationships",
        description: 'It is unhealthy to immediately plunge into another relationship after a break-up. There is a need to heal before looking for another romantic relationship.'
    },
    {
        title: 'Cut Off Unnecessary Contact',
        description: 'Staying in touch with an ex, especially in the early stages, can make moving on harder. It’s best to set clear boundaries to avoid confusion and prolonging emotional pain.'
    },
    {
        title: 'Self-Understanding and Personal Improvement',
        description: 'The break-up must be used as a learning lesson. Know why it failed and how to maintain better relationships in the future. Concentrate on personal growth and objectives.'
    },
    {
        title: 'Practice Self-Care',
        description: 'Physical well-being influences mental health. Regular exercise, a healthy diet, and adequate sleep can assist in recovering emotional equilibrium.'
    },
    {
        title: 'Take Professional Assistance if Needed',
        description: 'When sadness or anxiety becomes intolerable, a talk with a therapist might prove helpful. Professional advice can guide through emotions and give tips on coping.'
    },
    {
        title: 'Keep Yourself Busy and Preoccupied',
        description: 'Being busy at work, hobby, or social activity can discourage excessive brooding and keep the mind preoccupied.'
    },
    {
        title: 'Remain Positive About the Future',
        description: 'Breakups are sorrowful, but they are not the end of love. Numerous people discover even more loving relationships following a breakup. Maintaining a positive attitude can facilitate the healing process.'
    }
];

const carouselData = [
    {
        title: 'Psychosocial Factors',
        items: [
            'Poor Communication',
            'Infidelity',
            'Incompatibility',
            'Lack of Emotional Intimacy',
            'Personal Growth and Change',
            'Trust Issues',
            'Unresolved Conflicts',
            'External Factors',
        ],
        background: '/background1.png',
    },

];

const BreakUp = () => {

    const [currentIndex, setCurrentIndex] = useState(0);

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselData.length);
    };

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + carouselData.length) % carouselData.length);
    };
    return (
        <main className="w-full h-full flex justify-center flex-col  bg-white ">
            {/* Hero Desktop  */}

            <div className="w-full hidden lg:block text-center ">
                <h2 className="lg:text-[5vw] text-[6vw] text-white font-semibold relative z-10 font-[playfull]">Breakup</h2>
                <Image src="/breakup.webp" alt="hero image" objectFit="cover" width={1200} height={100} className="w-full  lg:mt-[-16vw] mt-[-25vw]  z-0" />
            </div>

            {/* Hero Mobile  */}

            <div className="w-full lg:hidden block text-center ">

                <Image src="/breakup.webp" alt="hero image" objectFit="cover" width={1200} height={100} className="w-full    z-0" />
                <h2 className="lg:text-[5vw] text-[6vw] text-white font-semibold relative z-10 mt-[-20vw] mb-10 font-[playfull]">Breakup</h2>
            </div>


            {/* The Section  */}
            <section className="bg-[#0E7EA0] rounded-full w-full h-full lg:px-40 px-10 lg:py-40 py-20 text-center lg:mt-[-20vw] mt-[-4vw]">
                <div className="flex flex-col justify-center items-center lg:mb-20 mb-10">
                    <h2 className="lg:text-[4.0vw] text-[8.5vw] font-bold font-[playfull]">Introduction</h2>

                </div>
                <div className="flex flex-col lg:flex-row justify-center lg:gap-40 gap-10 items-center text-center mb-20">

                    <p className="lg:text-[1.55vw] text-[3.5vw] font-medium text-left">Breakups rank among the most emotionally demanding things an individual might experience. Breakups mark the end of a love relationship, and it comes with the sting of loss, grief, and bewilderment. Although love, trust, and common ground form the foundations of relationships, some factors are likely to disband them.</p>


                    <p className="lg:text-[1.55vw] text-[3.5vw] font-medium text-left">Either friendly or painful, breakups have intense psychological impacts at times similar to mourning a loss. Knowing the reasons, signs, and remedies of a breakup can assist people in dealing with the experience and moving on in a healthier manner.</p>
                </div>

                <Link href="/" className="lg:px-30 px-16 py-6 bg-black rounded-full lg:text-[2vw] text-[4.5vw] ">Know More</Link>
            </section>

            {/* Causes  */}
            <section className="bg-white text-center  w-full h-full lg:px-20 px-4 py-20">
                <h2 className={`text-[#0E7EA0] lg:text-[5vw] text-[10vw] ${playfair.className}`}>Reasons for a Breakup</h2>
                <p className="text-black lg:text-[1.5vw] text-[4vw]">Breakups occur due to many reasons, from external pressures to very personal
                    differences between the partners. Some of the most prevalent reasons are:</p>
            </section>

            {/* Carousel  */}
            <div className="relative w-full lg:h-[80vh] h-[100vh] overflow-hidden ">
                {carouselData.map((slide, index) => (
                    <div
                        key={index}
                        className={`absolute w-full h-full  transition-opacity duration-500 ${index === currentIndex ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}
                        style={{ backgroundImage: `url(${slide.background})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
                    >
                        <div className="w-full h-full bg-black bg-opacity-60 flex flex-col justify-center items-center px-10 py-2">
                            {/* <h2 className="text-[8vw] md:text-[4vw] text-white font-semibold mb-12 font-[playfair] text-center">{slide.title}</h2> */}
                            <div className="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-2">
                                {slide.items.map((item, i) => (
                                    <div key={i} className={`p-6 w-[80vw] md:w-[11vw] h-[10vh] md:h-[60vh] flex items-center justify-center text-center font-medium lg:text-[1.0vw] text-[5vw] rounded-xl ${i % 2 === 0 ? 'bg-[#0E7EA0] text-white' : 'bg-yellow-400 text-black'} shadow-lg`}>
                                        {item}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
                {/* <button onClick={handlePrev} className="absolute left-4 md:left-8 lg:top-1/2 top-[10%] transform -translate-y-1/2 text-white bg-black bg-opacity-50 p-4 rounded-full cursor-pointer">
                    <FaArrowLeft size={30} />
                </button>
                <button onClick={handleNext} className="absolute right-4 md:right-8 lg:top-1/2 top-[10%] transform -translate-y-1/2 text-white bg-black bg-opacity-50 p-4 rounded-full cursor-pointer">
                    <FaArrowRight size={30} />
                </button> */}
            </div>

            {/* Quick Fix Links  */}
            <section className="bg-white w-full h-full lg:px-20 px-10 lg:py-20 py-10 text-center">
                <h2 className={`text-[#0E7EA0] lg:text-[4vw] text-[7vw] ${playfair.className} mb-8`}>Symptoms of a Breakup</h2>
                <p className="text-black lg:text-[1.5vw] text-[3vw] mb-12">A breakup is not just a change in one's relationship status but also influences emotional,
                    psychological, and even physical health. Some of the symptoms are:</p>
                <div className="grid lg:grid-cols-4 grid-cols-1 gap-4">
                    {/* Card 1 */}
                    <div className="bg-[#0E7EA0] rounded-3xl  text-white text-center">

                        <Image src="/quick_links/2.webp" alt="stressed person" width={300} height={200} className="w-full h-48 object-cover rounded-2xl mb-6" />
                        <div className="p-6">
                            <h3 className="text-lg font-bold mb-4">Emotional Distress                            </h3>
                            <p className="text-sm">Sadness, loneliness, anger, and confusion are typical during the aftermath of a breakup. The emotional conflict feels overwhelming in the initial days.</p>
                        </div>
                    </div>

                    {/* Card 2 */}
                    <div className="bg-[#FFD700] rounded-3xl  text-black text-center">
                        <Image src="/quick_links/1.webp" alt="person meditating" width={300} height={200} className="w-full h-48 object-cover rounded-2xl mb-6" />
                        <div className="p-6">
                            <h3 className="text-lg font-bold mb-4">Overthinking and Regret </h3>
                            <p className="text-sm">Everyone keeps thinking of the past things and what more could have been done. The process of blaming oneself and the occurrence of remorseful thoughts render moving on increasingly difficult.</p>
                        </div>
                    </div>

                    {/* Card 3 */}
                    <div className="bg-[#0E7EA0] rounded-3xl text-white text-center">
                        <Image src="/quick_links/2.webp" alt="people communicating" width={300} height={200} className="w-full h-48 object-cover rounded-2xl mb-6" />
                        <div className="p-6">
                            <h3 className="text-lg font-bold mb-4">Loss of Interest in Everyday Activities</h3>
                            <p className="text-sm">Social interaction, work, and even hobbies can all become irrelevant at once. People tend to lose the will to do things that were previously interesting.</p>
                        </div>
                    </div>

                    {/* Card 4 */}
                    <div className="bg-[#FFD700] rounded-3xl  text-black text-center">
                        <Image src="/quick_links/1.webp" alt="person meditating" width={300} height={200} className="w-full h-48 object-cover rounded-2xl mb-6" />
                        <div className="p-6">
                            <h3 className="text-lg font-bold mb-4">Anxiety and Depression</h3>
                            <p className="text-sm"> In some instances, a breakup can create anxiety or trigger depression, particularly if the relationship was very significant.</p>
                        </div>
                    </div>

                    {/* Card 5 */}
                    <div className="bg-[#0E7EA0] rounded-3xl text-white text-center">
                        <Image src="/quick_links/2.webp" alt="people communicating" width={300} height={200} className="w-full h-48 object-cover rounded-2xl mb-6" />
                        <div className="p-6">
                            <h3 className="text-lg font-bold mb-4">Physical Symptoms </h3>
                            <p className="text-sm">Some people lose weight, gain weight, have trouble sleeping, are tired, and even get headaches from emotional pain.</p>
                        </div>
                    </div>
                    {/* Card 6 */}
                    <div className="bg-[#FFD700] rounded-3xl  text-black text-center">
                        <Image src="/quick_links/1.webp" alt="person meditating" width={300} height={200} className="w-full h-48 object-cover rounded-2xl mb-6" />
                        <div className="p-6">
                            <h3 className="text-lg font-bold mb-4">Attachment Withdrawal </h3>
                            <p className="text-sm">If the relationship was passionate, the brain might respond in the same way as withdrawal from a dependency. This is why people sometimes feel the need to reach out to their ex, even when they know it might not be a good choice.</p>
                        </div>
                    </div>

                    {/* Card 7 */}
                    <div className="bg-[#0E7EA0] rounded-3xl text-white text-center">
                        <Image src="/quick_links/2.webp" alt="people communicating" width={300} height={200} className="w-full h-48 object-cover rounded-2xl mb-6" />
                        <div className="p-6">
                            <h3 className="text-lg font-bold mb-4">Anger and Resentment </h3>
                            <p className="text-sm">Others end up in bitterness, which creates resentment against the former partner. This may take the form of stalking on social media, complaining to friends, or even revenge.</p>
                        </div>
                    </div>

                    {/* Card 8 */}
                    <div className="bg-[#FFD700] rounded-3xl  text-black text-center">
                        <Image src="/quick_links/1.webp" alt="person meditating" width={300} height={200} className="w-full h-48 object-cover rounded-2xl mb-6" />
                        <div className="p-6">
                            <h3 className="text-lg font-bold mb-4">Fear of Future Relationships </h3>
                            <p className="text-sm">A hurtful breakup can make one afraid of entering into another relationship, creating emotional barriers and reluctance to trust others again.</p>
                        </div>
                    </div>
                </div>
            </section>



            {/* Solutions for Coping with Breakup */}
            <section className="py-12 px-12">
                <h2 className="lg:text-[4vw] text-[6vw] font-[playfair] text-[#0E7EA0] font-bold text-center mb-6">Solutions For Coping With A Breakup</h2>
                <p className="text-center text-black lg:text-[1.5vw] text-[3vw] mb-12">Although breakups are painful, they can also provide a chance to grow as individuals and learn more about ourselves. Here are some tips to cope with breakups effectively:</p>
                <div className="grid md:grid-cols-2 gap-8">
                    {tips.map((tip, index) => (
                        <div key={index} className="p-6  border-b-2">
                            <h3 className="lg:text-[2vw] text-black text-[4vw] font-semibold mb-2">{tip.title}</h3>
                            <p className="text-gray-600">{tip.description}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Prognosis and Future Outlook Section*/}
            <section className="bg-[#FFD266] w-full h-full lg:px-60 px-10 lg:pt-20 lg:pb-[55vw] pt-20 pb-50 mb-[-60vw] text-center z-0 ">
                <h2 className={`text-[#0E7EA0] lg:text-[3.5vw] text-[8vw] font-bold ${playfair.className} mb-10`}>Conclusion</h2>
                <div className="flex flex-col lg:flex-row justify-between items-center text-left text-black gap-20 mb-40">
                    <p>Breakups are a common phenomenon, but they affect people differently. They can be painful, but they also provide a chance to grow and discover oneself. Identifying the reasons for a breakup, the symptoms, and proactively healing from it can ease the process for people. </p>
                    <p>Though the hurt will seem unbearable in the beginning, time, care, and help can ease one's way into a better, more satisfying future. Every ending paves the way for a new beginning.                    </p>
                </div>
            </section>
        </main>
    )
}

export default BreakUp