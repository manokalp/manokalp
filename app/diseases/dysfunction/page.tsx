"use client"
import Image from "next/image"
import Link from "next/link"
// import { useState } from 'react';
// import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import playfair from "../../../fonts/playfair.module.css"




const Dysfunction = () => {


    return (
        <main className="w-full h-full flex justify-center flex-col  bg-white ">
            {/* ASPD Hero Desktop  */}
            <div className="w-full hidden lg:block text-center ">
                <h2 className="lg:text-[5vw] text-[6vw] text-white font-semibold relative z-10 font-[playfull] translate-y-[3vw]">Sexual
                    <br />Dysfunction</h2>
                <Image src="/diseases-banner/dysfunction.webp" alt="hero image" objectFit="cover" width={1200} height={100} className="w-full  lg:mt-[-16vw] mt-[-25vw]  z-0" />
            </div>

            {/* ASPD Hero Mobile  */}
            <div className="w-full lg:hidden block text-center ">

                <Image src="/diseases-banner/dysfunction.webp" alt="hero image" objectFit="cover" width={1200} height={100} className="w-full     z-0" />
                <h2 className="lg:text-[5vw] text-[6vw] text-white font-semibold relative z-10 font-[playfull] mt-[-10vw] mb-10">Sexual
                    <br />Dysfunction</h2>
            </div>

            {/* The Harsh Truth Section  */}
            <section className="bg-[#0E7EA0] rounded-full w-full h-full lg:px-40 px-10 lg:py-40 py-20 text-center lg:mt-[-20vw] mt-[-0vw]">
 
                <div className="flex flex-col lg:flex-row justify-center lg:gap-20 gap-10 items-center text-center mb-20">

                    <p className="lg:text-[1.55vw] text-[3.5vw] font-medium text-left">Sexual dysfunction refers to difficulties in initiating, performing, or enjoying sexual intercourse. Despite being a common issue, discussions around sexual dysfunction remain taboo in many cultures. Sexuality is a fundamental human need, and yet, emotional cravings, inhibitions, and preferences are often neglected or avoided in conversations. This lack of open communication, whether among couples or professionals, can worsen the situation and impair intimacy, leading to dissatisfaction in relationships. Sexual dissatisfaction often contributes to relationship issues, including breakups, as it affects both mood and self-esteem. </p>


                    <p className="lg:text-[1.55vw] text-[3.5vw] font-medium text-left">Historically, sexuality has been associated with socio-cultural psychological meanings. For men, it may be linked to power and dominance, while women may associate it with their attractiveness and desirability. The inability to perform well in bed can lead to negative emotions like guilt, sadness, low self-regard, frustration, anxiety, and depression. Since sensual satisfaction is a shared experience, any dysfunction experienced by one partner can strain the relationship and emotional connection.</p>
                </div>

         
            </section>

            {/* Section 2 para  */}
            <section className="bg-white w-full h-full lg:px-40 px-10 lg:py-20 py-10 text-center">
                <h2 className={`text-[#0E7EA0] lg:text-[4vw] text-[8vw] ${playfair.className} mb-8`}>Is Sexual Dysfunction Common?</h2>

                <div className="flex flex-col lg:flex-row justify-between gap-8 text-left">
                    <div className="lg:w-1/2">
                        <p className="text-black lg:text-[1.55vw] text-[3.5vw] font-medium">Yes, sexual dysfunction is relatively common. It can result from various factors, including restrictive upbringings, sexual misinformation, poor communication, past traumatic experiences, or insecurity about one&apos;s psychosexual role. These factors can lead both men and women to become unsure about how to approach sex, sometimes causing them to withdraw altogether.</p>
                    </div>
                    <div className="lg:w-1/2">
                        <p className="text-black lg:text-[1.55vw] text-[3.5vw] font-medium">While diminished sexual desire is more commonly reported among women, both men and women experience dysfunctions such as erectile dysfunction (ED), premature ejaculation, delayed ejaculation, vaginismus, and anorgasmia. Some conditions, like DHAT syndrome (a culturally specific condition found in northern India), involve misperceptions about potency and can contribute to anxiety and depression.</p>
                    </div>
                </div>
            </section>


{/* Types of Sexual Dysfunction */}
<section className="bg-white w-full h-full lg:px-20 px-10 lg:py-20 py-10 text-center">
  <h2 className={`text-[#0E7EA0] lg:text-[4vw] text-[7vw] font-semibold mb-10 ${playfair.className}`}>
    Types of Sexual Dysfunction
  </h2>
  <div className="grid lg:grid-cols-5 grid-cols-1 gap-4">

    {/* Card 1: Low Libido */}
    <div className="bg-[#0E7EA0] rounded-3xl text-white text-center">
      <img src="https://images.pexels.com/photos/3810792/pexels-photo-3810792.jpeg"
           alt="couple showing low intimacy"
           className="w-full h-48 object-cover rounded-2xl mb-6" />
      <div className="p-6">
        <h3 className="text-lg font-bold mb-4">Low Libido</h3>
        <p className="text-sm">
          A reduction or absence of sexual desire… can result in feelings of disconnection and frustration between partners.
        </p>
      </div>
    </div>

    {/* Card 2: Erectile Dysfunction (ED) */}
    <div className="bg-[#0E7EA0] rounded-3xl text-white text-center">
      <img src="https://images.pexels.com/photos/3889790/pexels-photo-3889790.jpeg"
           alt="man looking concerned"
           className="w-full h-48 object-cover rounded-2xl mb-6" />
      <div className="p-6">
        <h3 className="text-lg font-bold mb-4">Erectile Dysfunction (ED)</h3>
        <p className="text-sm">
          The inability to achieve or maintain a satisfactory erection… often psychological in nature.
        </p>
      </div>
    </div>

    {/* Card 3: Premature Ejaculation */}
    <div className="bg-[#0E7EA0] rounded-3xl text-white text-center">
      <img src="https://images.pexels.com/photos/4041336/pexels-photo-4041336.jpeg"
           alt="togetherness but stress"
           className="w-full h-48 object-cover rounded-2xl mb-6" />
      <div className="p-6">
        <h3 className="text-lg font-bold mb-4">Premature Ejaculation</h3>
        <p className="text-sm">
          Ejaculation occurring before or shortly after penetration… treatment often involves couples therapy.
        </p>
      </div>
    </div>

    {/* Card 4: Dyspareunia */}
    <div className="bg-[#0E7EA0] rounded-3xl text-white text-center">
      <img src="https://images.pexels.com/photos/3764002/pexels-photo-3764002.jpeg"
           alt="woman looking uncomfortable"
           className="w-full h-48 object-cover rounded-2xl mb-6" />
      <div className="p-6">
        <h3 className="text-lg font-bold mb-4">Dyspareunia</h3>
        <p className="text-sm">
          Painful intercourse… often caused by vaginal dryness or medical conditions requiring evaluation.
        </p>
      </div>
    </div>

    {/* Card 5: Anorgasmia */}
    <div className="bg-[#0E7EA0] rounded-3xl text-white text-center">
      <img src="https://images.pexels.com/photos/6753175/pexels-photo-6753175.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
           alt="woman showing thoughtful response"
           className="w-full h-48 object-cover rounded-2xl mb-6" />
      <div className="p-6">
        <h3 className="text-lg font-bold mb-4">Anorgasmia</h3>
        <p className="text-sm">
          Inability to experience orgasm despite adequate stimulation… dual sex therapy can help.
        </p>
      </div>
    </div>

  </div>
</section>



            {/* Section 2 para  */}
            <section className="bg-white w-full h-full lg:px-40 px-10 lg:py-20 py-10 text-center">
                <h2 className={`text-[#0E7EA0] lg:text-[4vw] text-[8vw] ${playfair.className} mb-8`}>Causes of Sexual Dysfunction</h2>

                <div className="flex flex-col lg:flex-row justify-between gap-8 text-left">
                    <div className="lg:w-1/2">
                        <p className="text-black lg:text-[1.55vw] text-[3.5vw] font-medium">Sexual function is a complex bio-psycho-social process involving the neurological, vascular, and endocrine systems. In addition to biological factors, psychological issues like past sexual experiences, emotional connectedness, mood disorders, and relationship conflicts play a significant role in sexual desire and performance. Cultural, religious, and societal beliefs can also influence sexual behavior, creating expectations and pressures that can contribute to dysfunction.</p>
                    </div>
                    <div className="lg:w-1/2">
                        <p className="text-black lg:text-[1.55vw] text-[3.5vw] font-medium">Relationship dynamics, including communication, emotional connection, and mutual understanding between partners, are critical in shaping sexual satisfaction. When any aspect of these dynamics falters, it can lead to sexual performance problems. The complexity of human sexuality means that sexual dysfunction cannot be reduced to simple mechanical issues, making it a sensitive and nuanced matter to address.</p>
                    </div>
                </div>
            </section>


            {/*  Section Similar 2*/}
            <section className="bg-white w-full h-full lg:px-40 px-10 lg:py-20 py-10 text-center">
                <h2 className={`text-[#0E7EA0] lg:text-[3.5vw] text-[7vw] font-bold ${playfair.className} mb-12`}>How Can Couples Communicate Effectively?</h2>
                <div className="flex flex-col lg:flex-row justify-between items-center gap-20">

                    <p className="text-black text-left lg:text-[1.15vw] text-[3vw]">Effective communication involves both speaking and listening with empathy. Couples should express their feelings honestly while also being considerate of how their words will be received. Active listening—focusing fully on the other partner, validating their feelings, and responding thoughtfully—is key. Miscommunication often stems from partners being unclear about what they want or need, which makes it crucial to engage in honest and open dialogue.
                        <br /><br />
                        Unhappy couples often struggle with the cause-and-effect relationship between their dissatisfaction and their communication patterns. Some couples may find themselves in negative communication cycles because of underlying relationship stress, while others may struggle to communicate effectively because of pre-existing issues. Being proactive in managing communication styles, balancing vulnerability and trust, and working together to resolve issues will help keep relationships strong and conflict resolution easier.

                    </p>
                    <Image src="https://images.pexels.com/photos/6753175/pexels-photo-6753175.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="couple showing low intimacy" width={400} height={300} className="w-full h-full object-cover rounded-xl" />
                </div>
            </section>

            {/*  Section */}
            <section className="bg-white w-full h-full lg:px-40 px-10 lg:py-20 py-10 text-center">
                <h2 className={`text-[#0E7EA0] lg:text-[3.8vw] text-[7vw] font-bold ${playfair.className} mb-8`}>How Is Sexual Dysfunction Treated?</h2>
                <p className="text-black lg:text-[1.25vw] text-[3.5vw] mb-10">Effective treatment for sexual dysfunction often requires collaboration between partners.
                    Sexual difficulties are rarely caused by one partner alone butare typically a shared experience that
                    affects both individuals. Open communication and compatibility are essential for improving sexual satisfaction.
                    Treatment approaches often involve therapy that addresses both individual and relationship dynamics.</p>

                <div className="grid lg:grid-cols-5 grid-cols-1 gap-4 mb-60">
                    {/* Technique Card 1 */}
                    <div className="[perspective:1000px] cursor-pointer ">
                        <div className="relative w-full aspect-square transition-all duration-500 [transform-style:preserve-3d] hover:[transform:rotateY(180deg)]">
                            <div className="absolute inset-0 bg-[#0E7EA0] w-full lg:lg:h-[50vh] rounded-xl p-6 text-white flex flex-col items-center justify-center [backface-visibility:hidden]">
                                <h3 className="lg:text-[1.25vw] text-[4vw] font-bold">ListeninMasters and Johnson’s Sex Therapyg SkillS</h3>
                            </div>
                            <div className="absolute inset-0 bg-[#0E7EA0] w-full lg:lg:h-[50vh] rounded-xl p-6 text-white flex flex-col items-center justify-center [transform:rotateY(180deg)] [backface-visibility:hidden]">
                                <p className="lg:text-[1vw] text-[3vw]">This model emphasizes self-awareness, problem identification, communication, and planning. It is designed to help couples address emotional or psychological barriers to sexual satisfaction.</p>
                            </div>
                        </div>
                    </div>

                    {/* Technique Card 2 */}
                    <div className="[perspective:1000px] cursor-pointer">
                        <div className="relative w-full aspect-square transition-all duration-500 [transform-style:preserve-3d] hover:[transform:rotateY(180deg)]">
                            <div className="absolute inset-0 bg-[#FFD700] w-full lg:h-[50vh] rounded-xl p-6 text-black flex flex-col items-center justify-center [backface-visibility:hidden]">
                                <h3 className="lg:text-[1.25vw] text-[4vw] font-bold">Helen Kaplan’s Approach</h3>
                            </div>
                            <div className="absolute inset-0 bg-[#FFD700] w-full lg:h-[50vh] rounded-xl p-6 text-black flex flex-col items-center justify-center [transform:rotateY(180deg)] [backface-visibility:hidden]">
                                <p className="lg:text-[1vw] text-[3vw]">Focuses on addressing problems related to desire, arousal, and orgasm. Desire issues, which are often deeper seated, may require a focus on emotional and psychological factors.</p>
                            </div>
                        </div>
                    </div>

                    {/* Technique Card 3 */}
                    <div className="[perspective:1000px] cursor-pointer">
                        <div className="relative w-full aspect-square transition-all duration-500 [transform-style:preserve-3d] hover:[transform:rotateY(180deg)]">
                            <div className="absolute inset-0 bg-[#0E7EA0]  w-full lg:h-[50vh] rounded-xl p-6 text-white flex flex-col items-center justify-center [backface-visibility:hidden]">
                                <h3 className="lg:text-[1.25vw] text-[4vw] font-bold">Jack Annon’s PLISSIT Model</h3>
                            </div>
                            <div className="absolute inset-0 bg-[#0E7EA0] w-full lg:h-[50vh] rounded-xl p-6 text-white flex flex-col items-center justify-center [transform:rotateY(180deg)] [backface-visibility:hidden]">
                                <p className="lg:text-[1vw] text-[3vw]">This stepwise approach involves providing permission (P), offering limited information (LI), giving specific suggestions (SS), and utilizing intensive therapy (IT) based on the severity of the dysfunction.</p>
                            </div>
                        </div>
                    </div>

                    {/* Technique Card 4 */}
                    <div className="[perspective:1000px] cursor-pointer">
                        <div className="relative w-full aspect-square transition-all duration-500 [transform-style:preserve-3d] hover:[transform:rotateY(180deg)]">
                            <div className="absolute inset-0 bg-[#FFD700] w-full lg:h-[50vh] rounded-xl p-6 text-black flex flex-col items-center justify-center [backface-visibility:hidden]">
                                <h3 className="lg:text-[1.25vw] text-[4vw] font-bold">Couple’s Behavior Sex Therapy (CBST)</h3>
                            </div>
                            <div className="absolute inset-0 bg-[#FFD700] w-full lg:h-[50vh] rounded-xl p-6 text-black flex flex-col items-center justify-center [transform:rotateY(180deg)] [backface-visibility:hidden]">
                                <p className="lg:text-[1vw] text-[3vw]">This approach addresses stress, fear, and avoidance and helps desensitize both partners to make sexual encounters more enjoyable and less threatening.</p>
                            </div>
                        </div>
                    </div>

                    {/* Technique Card 5 */}
                    <div className="[perspective:1000px] cursor-pointer">
                        <div className="relative w-full aspect-square transition-all duration-500 [transform-style:preserve-3d] hover:[transform:rotateY(180deg)]">
                            <div className="absolute inset-0 bg-[#0E7EA0] w-full lg:h-[50vh] rounded-xl p-6 text-white flex flex-col items-center justify-center [backface-visibility:hidden]">
                                <h3 className="lg:text-[1.25vw] text-[4vw] font-bold">Cognitive Behavioral Therapy (CBT) and Rational Emotive Behavior Therapy (REBT)</h3>
                            </div>
                            <div className="absolute inset-0 bg-[#0E7EA0] w-full lg:h-[50vh] rounded-xl p-6 text-white flex flex-col items-center justify-center [transform:rotateY(180deg)] [backface-visibility:hidden]">
                                <p className="lg:text-[1vw] text-[3vw]">These therapies focus on identifying and correcting irrational beliefs and expectations that hinder sexual performance, improving sexual interactions and outcomes.</p>
                            </div>
                        </div>
                    </div>

                    


                    
                </div>

              
            </section>

            {/* Footer Section */}
            {/* Prognosis and Future Outlook Section*/}
            <section className="bg-[#FFD266] w-full h-full lg:px-40 px-10 lg:pt-20 lg:pb-[50vw] pt-20 pb-50 mb-[-60vw] text-center z-0 ">
                {/* <h2 className={`text-[#0E7EA0] lg:text-[3.5vw] text-[8vw] font-bold ${playfair.className} mb-10`}>Conclusion</h2>
                <div className="flex flex-col lg:flex-row justify-between items-center text-left text-black gap-20 mb-50">
                    <p>Communication is the foundation that supports a healthy, thriving relationship. It’s not just about conveying information but about fostering understanding, trust, and emotional intimacy. By learning to communicate effectively.</p>
                    <p> couples can navigate conflict with respect and cooperation, which ultimately strengthens their bond. With the right communication skills, couples can create a positive, supportive dynamic that nurtures their relationship through both good times and challenges.</p>
                </div> */}
            </section>
        </main>
    )
}

export default Dysfunction