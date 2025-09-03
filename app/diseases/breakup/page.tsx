"use client";
import Image from "next/image";
// import Link from "next/link"
// import { useState } from 'react';
import playfair from "../../../fonts/playfair.module.css";

const tips = [
  {
    title: "Accept the Reality",
    description:
      "Denial delays the healing process. Accepting that the relationship has ended is the first step towards the healing process.",
  },
  {
    title: "Be Around Positive People",
    description:
      "Family and friends can offer emotional support and advice during difficult periods. Sharing feelings can be therapeutic.",
  },
  {
    title: "Allow Yourself to Grieve",
    description:
      "It is normal to feel sad and to mourn the loss of the relationship. Suppressing emotions can lead to long-term emotional issues. Allow yourself time and space to emotionally process the breakup without pressure to 'bounce back' quickly.",
  },
  {
    title: "Don't Leap into Rebound Relationships",
    description:
      "It is unhealthy to immediately plunge into another relationship after a break-up. Healing emotionally is essential before opening yourself up to new romantic connections.",
  },
  {
    title: "Cut Off Unnecessary Contact",
    description:
      "Staying in touch with an ex, especially in the early stages, can make moving on harder. It's best to set clear boundaries to avoid confusion and prolonging emotional pain.",
  },
  {
    title: "Self-Understanding and Personal Improvement",
    description:
      "The break-up must be used as a learning lesson. Know why it failed and how to maintain better relationships in the future. Concentrate on personal growth and objectives.",
  },
  {
    title: "Practice Self-Care",
    description:
      "Physical well-being influences mental health. Regular exercise, a healthy diet, and adequate sleep can assist in recovering emotional equilibrium.",
  },
  {
    title: "Take Professional Assistance if Needed",
    description:
      "When sadness or anxiety becomes intolerable, a talk with a therapist might prove helpful. Therapists can offer valuable tools for emotional regulation and guide you through the healing journey.",
  },
  {
    title: "Keep Yourself Busy and Preoccupied",
    description:
      "Staying engaged with work, hobbies, or social activities can redirect your focus and reduce overthinking.",
  },
  {
    title: "Remain Positive About the Future",
    description:
      "Breakups are sorrowful, but they are not the end of love. Numerous people discover even more loving relationships following a breakup. Maintaining a positive attitude can facilitate the healing process.",
  },
];

const carouselData = [
  {
    title: "Psychosocial Factors",
    items: [
      "Poor Communication",
      "Infidelity",
      "Incompatibility",
      "Lack of Emotional Intimacy",
      "Personal Growth and Change",
      "Trust Issues",
      "Unresolved Conflicts",
      "External Factors",
    ],
    background: "/background1.png",
  },
];

const BreakUp = () => {
  // const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <main className="w-full h-full flex justify-center flex-col  bg-white ">
      {/* Hero Desktop  */}


      <div className="w-full hidden lg:block text-center ">
        <h2 className="lg:text-[5vw] text-[6vw] mt-[7vw] text-white font-semibold relative z-10 font-[playfull]">
          Breakup
        </h2>
        <Image
          src="/diseases-banner/breakup.webp"
          alt="hero image"
          objectFit="cover"
          width={1200}
          height={100}
          className="w-full  lg:mt-[-16vw] mt-[-25vw]  z-0"
          priority
          onLoad={() => {
            if (typeof window !== "undefined") {
              window.dispatchEvent(new Event("heroImageLoaded"));
            }
          }}
        />
      </div>

      {/* Hero Mobile  */}

      <div className="w-full lg:hidden block text-center ">
        <Image
          src="/diseases-banner/breakup.webp"
          alt="hero image"
          objectFit="cover"
          width={1200}
          height={100}
          className="w-full    z-0"
          priority
          onLoad={() => {
            if (typeof window !== "undefined") {
              window.dispatchEvent(new Event("heroImageLoaded"));
            }
          }}
        />
        <h2 className="lg:text-[5vw] text-[6vw] text-white font-semibold relative z-10 mt-[-20vw] mb-10 font-[playfull]">
          Breakup
        </h2>
      </div>
            <div className="max-w-8xl mx-auto">

      {/* The Section  */}
      <section className="bg-[#0E7EA0] rounded-full w-full h-full lg:px-40 px-10 lg:py-40 py-20 text-center lg:mt-[-20vw] mt-[-4vw]">
        <div className="flex flex-col lg:flex-row justify-center lg:gap-40 gap-10 items-center text-center mb-20">
          <p className="lg:text-[1.55vw] text-[3.5vw] font-medium text-left">
            Breakups rank among the most emotionally demanding things an
            individual might experience. Breakups signify the end of a romantic bond, often bringing a wave of grief, confusion, and emotional pain. Although love, trust, and common ground form the
            foundations of relationships, some factors are likely to disband
            them.
          </p>

          <p className="lg:text-[1.55vw] text-[3.5vw] font-medium text-left">
            Whether amicable or painful, breakups can mirror the emotional intensity of grieving a significant loss. Knowing the reasons,
            signs, and remedies of a breakup can assist people in dealing with
            the experience and moving on in a healthier manner.
          </p>
        </div>
      </section>

      {/* Causes  */}
      <section className="bg-white text-center  w-full h-full lg:px-20 px-4 py-20">
        <h2
          className={`text-[#0E7EA0] font-semibold lg:text-[5vw] text-[10vw] ${playfair.className}`}
        >
          Reasons for a Breakup
        </h2>
        <p className="text-black lg:text-[1.5vw] text-[4vw]">
          Breakups occur due to many reasons, from external pressures to very
          personal differences between the partners. Some of the most prevalent
          reasons are:
        </p>
      </section>

      {/* Carousel  */}
      <div className="relative w-full lg:h-[80vh] h-[100vh] overflow-hidden ">
        {carouselData.map((slide, index) => (
          <div
            key={index}
            className={`absolute w-full h-full  transition-opacity duration-500 `}
            style={{
              backgroundImage: `url(${slide.background})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="w-full h-full bg-white bg-opacity-60 flex flex-col justify-center items-center px-10 py-2">
              {/* <h2 className="text-[8vw] md:text-[4vw] text-white font-semibold mb-12 font-[playfair] text-center">{slide.title}</h2> */}
              <div className="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-2">
                {slide.items.map((item, i) => (
                  <div
                    key={i}
                    className={`p-6 w-[80vw] md:w-[11vw] h-[10vh] md:h-[60vh] flex items-center justify-center text-center font-medium lg:text-[1.0vw] text-[5vw] rounded-xl ${
                      i % 2 === 0
                        ? "bg-[#0E7EA0] text-white"
                        : "bg-yellow-400 text-black"
                    } shadow-lg`}
                  >
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

      {/* Symptom Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 w-full px-4 lg:px-20 my-16">
        {/* Card 1 */}
        <div className="bg-[#0E7EA0] rounded-3xl text-white text-center">
          <img
            src="https://images.pexels.com/photos/2285463/pexels-photo-2285463.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="Emotional Woman During Divorce"
            className="w-full h-48 object-cover rounded-2xl mb-6"
          />
          <div className="p-6">
            <h3 className="text-lg font-bold mb-4">Emotional Distress</h3>
            <p className="text-sm">
              Sadness, loneliness, anger, and confusion are typical during the
              aftermath of a breakup. The emotional conflict feels overwhelming in the initial days.
            </p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="bg-[#FFD700] rounded-3xl text-black text-center">
          <img
            src="https://images.pexels.com/photos/4101133/pexels-photo-4101133.jpeg"
            alt="Sad Woman Reflecting"
            className="w-full h-48 object-cover rounded-2xl mb-6"
          />
          <div className="p-6">
            <h3 className="text-lg font-bold mb-4">Overthinking and Regret</h3>
            <p className="text-sm">
              Many people dwell on past moments, replaying what went wrong or what they could have done differently. The process of blaming oneself and the
              occurrence of remorseful thoughts render moving on increasingly
              difficult.
            </p>
          </div>
        </div>

        {/* Card 3 */}
        <div className="bg-[#0E7EA0] rounded-3xl text-white text-center">
          <img
            src="https://images.pexels.com/photos/6606078/pexels-photo-6606078.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="Woman Sitting Alone"
            className="w-full h-48 object-cover rounded-2xl mb-6"
          />
          <div className="p-6">
            <h3 className="text-lg font-bold mb-4">
              Loss of Interest in Everyday Activities
            </h3>
            <p className="text-sm">
              Social interaction, work, and even hobbies can all become
              irrelevant at once. Activities that once brought joy may suddenly feel meaningless or exhausting.
            </p>
          </div>
        </div>

        {/* Card 4 */}
        <div className="bg-[#FFD700] rounded-3xl text-black text-center">
          <img
            src="https://images.pexels.com/photos/3132388/pexels-photo-3132388.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="Depressed Woman in Studio"
            className="w-full h-48 object-cover rounded-2xl mb-6"
          />
          <div className="p-6">
            <h3 className="text-lg font-bold mb-4">Anxiety and Depression</h3>
            <p className="text-sm">
              In some instances, a breakup can create anxiety or trigger
              depression, particularly if the relationship was very significant.
            </p>
          </div>
        </div>

        {/* Card 5 */}
        <div className="bg-[#0E7EA0] rounded-3xl text-white text-center">
          <img
            src="https://images.pexels.com/photos/6148954/pexels-photo-6148954.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="Woman Holding Her Head"
            className="w-full h-48 object-cover rounded-2xl mb-6"
          />
          <div className="p-6">
            <h3 className="text-lg font-bold mb-4">Physical Symptoms</h3>
            <p className="text-sm">
              Some people lose weight, gain weight, have trouble sleeping, are
              tired, and even get headaches from emotional pain.
            </p>
          </div>
        </div>

        {/* Card 6 */}
        <div className="bg-[#FFD700] rounded-3xl text-black text-center">
          <img
            src="https://images.pexels.com/photos/4098368/pexels-photo-4098368.jpeg"
            alt="Woman Looking at Phone"
            className="w-full h-48 object-cover rounded-2xl mb-6"
          />
          <div className="p-6">
            <h3 className="text-lg font-bold mb-4">Attachment Withdrawal</h3>
            <p className="text-sm">
              If the relationship was passionate, the brain might respond in
              the same way as withdrawal from a dependency. This can trigger intense urges to reconnect with an ex—even when doing so may hinder healing.
            </p>
          </div>
        </div>

        {/* Card 7 */}
        <div className="bg-[#0E7EA0] rounded-3xl text-white text-center">
          <img
            src="https://images.pexels.com/photos/5700180/pexels-photo-5700180.jpeg"
            alt="Angry Woman"
            className="w-full h-48 object-cover rounded-2xl mb-6"
          />
          <div className="p-6">
            <h3 className="text-lg font-bold mb-4">Anger and Resentment</h3>
            <p className="text-sm">
              Others end up in bitterness, which creates resentment against
              the former partner. This may take the form of stalking on social
              media, complaining to friends, or even revenge.
            </p>
          </div>
        </div>

        {/* Card 8 */}
        <div className="bg-[#FFD700] rounded-3xl text-black text-center">
          <img
            src="https://images.pexels.com/photos/32507563/pexels-photo-32507563/free-photo-of-elegant-wedding-vows-with-exchanging-of-rings.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="Woman Looking Out the Window"
            className="w-full h-48 object-cover rounded-2xl mb-6"
          />
          <div className="p-6">
            <h3 className="text-lg font-bold mb-4">
              Fear of Future Relationships
            </h3>
            <p className="text-sm">
              A hurtful breakup can make one afraid of entering into another
              relationship, creating emotional barriers and reluctance to trust others again.
            </p>
          </div>
        </div>
      </div>

      {/* Solutions for Coping with Breakup */}
      <section className="py-12 px-12 ">
        <h2 className="lg:text-[4vw] text-[6vw] font-[playfair] text-[#0E7EA0] font-bold text-center mb-6">
          Solutions For Coping With A Breakup
        </h2>
        <p className="text-center text-black lg:text-[1.5vw] text-[3vw] mb-12">
          Although breakups are painful, they can also provide a chance to grow
          as individuals and learn more about ourselves. Here are some tips to
          cope with breakups effectively:
        </p>
        <div className="grid md:grid-cols-2 gap-8">
          {tips.map((tip, index) => (
            <div key={index} className="p-6  border-b-2">
              <h3 className="lg:text-[2vw] text-black text-[4vw] font-semibold mb-2">
                {tip.title}
              </h3>
              <p className="text-gray-600">{tip.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Prognosis and Future Outlook Section*/}
      <section className="bg-[#FFD266] w-full h-full lg:px-60 px-10 lg:pt-20 lg:pb-[55vw] pt-20 pb-50 mb-[-60vw] text-center z-0 ">
        <h2
          className={`text-[#0E7EA0] lg:text-[3.5vw] text-[8vw] font-bold ${playfair.className} mb-10`}
        >
          Conclusion
        </h2>
        <div className="flex flex-col lg:flex-row justify-between items-center text-left text-black gap-20 mb-40">
          <p>
            Breakups are a common phenomenon, but they affect people
            differently. They can be painful, but they also provide a chance to
            grow and discover oneself. Identifying the reasons for a breakup,
            the symptoms, and proactively healing from it can ease the process
            for people.{" "}
          </p>
          <p>
            Though the pain may feel overwhelming at first, with time, self-care, and support, recovery becomes not only possible—but empowering. Every ending paves the way for a new beginning.{" "}
          </p>
        </div>
      </section>
      </div>
    </main>
  );
};

export default BreakUp;
