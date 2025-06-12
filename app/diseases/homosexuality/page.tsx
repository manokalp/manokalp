"use client"
import Image from "next/image"
import Link from "next/link"
import playfair from "../../../fonts/playfair.module.css"

const Homosexuality = () => {


    return (
        <main className="w-full h-full flex justify-center flex-col  bg-white ">
            {/* ASPD Hero Desktop  */}
            <div className="w-full hidden lg:block text-center ">
                <h2 className="lg:text-[5vw] text-white font-semibold relative z-10 font-[playfull] translate-y-40">Homosexuality(LGB)</h2>
                <Image src="/diseases-banner/homosexuality.webp" alt="hero image" objectFit="cover" width={1200} height={100} className="w-full  lg:mt-[-16vw]  z-0" />
            </div>

            {/* ASPD Hero Mobile  */}
            <div className="w-full lg:hidden block text-center ">

                    <Image src="/diseases-banner/homosexuality.webp" alt="hero image" objectFit="cover" width={1200} height={100} className="w-full     z-0" />
                <h2 className="lg:text-[5vw] text-[6vw] text-white font-semibold relative z-10 font-[playfull] mt-[-10vw] mb-10">Homosexuality(LGB)</h2>
            </div>

            {/* The Harsh Truth Section  */}
            <section className="bg-[#0E7EA0] rounded-full w-full h-full lg:px-40 px-10 lg:py-40 py-20 text-center lg:mt-[-20vw] mt-[-0vw]">
 
                <div className="flex flex-col lg:flex-row justify-center lg:gap-30 gap-10 items-center text-center mb-20">

                    <p className="lg:text-[1.55vw] text-[3.5vw] font-medium text-left">Homosexuality refers to the sexual, romantic, and emotional attraction one person may feel towards someone of the same sex. Research shows that approximately 2 to 11% of the population experiences same-sex attraction. Today, individuals identifying with such orientations are often considered part of the LGB (Lesbian, Gay, Bisexual) community. Despite progress in public policies regarding same-sex relationships in many countries, societal acceptance and understanding of homosexuality still face significant challenges. Hostility, discrimination, and prejudice continue to subject homosexual individuals to stress and stigma.</p>


                    <p className="lg:text-[1.55vw] text-[3.5vw] font-medium text-left">Homosexuality is viewed by many experts as a natural variant of human sexuality. It is often misunderstood as a deviation in psychosexual development, arising from a combination of genetic and psychosocial factors, none of which are within an individual’s control. Research has confirmed that there are structural differences in the brains of individuals who identify as lesbian, gay, or bisexual, as well as variations in neurotransmitters. Despite this, people in homosexual relationships deserve the same rights and respect as individuals with other medical conditions or life experiences, like those living with cancer or diabetes.</p>
                </div>

                <Link href="/" className="lg:px-30 px-16 py-6 bg-black rounded-full lg:text-[2vw] text-[4.5vw] ">Know More</Link>
            </section>

            {/* Why Is Communication So Important? */}
            <section className="bg-white w-full h-full lg:px-40 px-10 lg:py-20 py-10 text-center">
                <h2 className={`text-[#0E7EA0] lg:text-[4vw] text-[8vw] ${playfair.className} mb-8`}>Is Compatibility Fixed or Fluid?</h2>

                <div className="flex flex-col lg:flex-row justify-between gap-8 text-left">
                    <div className="lg:w-1/2">
                        <p className="text-black lg:text-[1.55vw] text-[3.5vw] font-medium">Homosexuality is not abnormal. Normalcy has two definitions: one is statistical, referring to what is most common within a population, and the other is based on societal acceptance. Statistically, homosexuality might be considered less common (a minority), but being an outlier in society does not equate to being a disorder, sin, or crime. For example, geniuses with extraordinarily high IQs are also statistical outliers but are not marginalized in the same way.</p>
                    </div>
                    <div className="lg:w-1/2">
                        <p className="text-black lg:text-[1.55vw] text-[3.5vw] font-medium">Sexual activity traditionally serves two main purposes: reproduction (ensuring the continuation of the species) and pleasure (strengthening bonds between partners). Homosexual relationships may not lead to reproduction, but many heterosexual couples choose not to have children, and many homosexual couples adopt. Therefore, homosexuality is neither immoral nor illegal and should not be viewed as a deviation. It is a personal choice and a natural aspect of human diversity.</p>
                    </div>
                </div>
            </section>

            <section className="bg-white w-full h-full lg:px-40 px-10 lg:py-20 py-10 text-center">
                <h2 className={`text-[#0E7EA0] font-bold lg:text-[4vw] text-[8vw] ${playfair.className} mb-8`}>How Do You Find a Compatible Partner?</h2>
                <div className="flex flex-col lg:flex-row justify-between gap-8 text-left">
                    <div className="lg:w-1/2">
                        <p className="text-black lg:text-[1.55vw] text-[3.5vw] font-medium">Homosexuality is not a new phenomenon or a problem, but a stable trait that has existed throughout human history. Archaeological evidence shows that same-sex attraction existed in prehistoric societies. However, despite its historical presence, the issue has been deeply controversial in fields like medicine, law, and social policy. Up until 1973, homosexuality was classified as a psychiatric disorder in the Diagnostic and Statistical Manual of Mental Disorders (DSM), and it remained categorized as such in the International Classification of Diseases (ICD) until 1991.</p>
                    </div>
                    <div className="lg:w-1/2">
                        <p className="text-black lg:text-[1.55vw] text-[3.5vw] font-medium">Although progress has been made in decriminalizing same-sex relationships, stigma and discrimination persist in many parts of the world.
                        LGB individuals still face considerable discrimination, including verbal and physical violence, social rejection, and legal penalties in some countries. The ongoing criminalization and marginalization of sexual and gender minorities contribute to their societal challenges.</p>
                    </div>
                </div>
            </section>


            {/*  Links  */}
            <section className="bg-white w-full h-full lg:px-40 px-10 lg:py-20 py-10 text-center">
                <h2 className={`text-[#0E7EA0] lg:text-[4vw] text-[7vw] font-semibold ${playfair.className}`}>Why Do LGB Individuals Face Minority Stress?</h2>
                <p className="text-black lg:text-[1.5vw] text-[3vw] mb-10">Minority stress refers to the stress experienced by individuals who belong to stigmatized or marginalized groups, including the LGB community. Social stressors, such as discrimination, rejection, and lack of acceptance, can create feelings of alienation and lead to negative physical, emotional, and mental health outcomes.</p>
                <h2 className={`text-[#0E7EA0] lg:text-[4vw] mb-10 text-[7vw] font-semibold ${playfair.className}`}>Key Stressors for LGB Individuals:</h2>
                <div className="grid lg:grid-cols-4 grid-cols-1 gap-4">
                    {/* Card 1 */}
                    <div className="bg-[#0E7EA0] rounded-3xl  text-white text-center">

                        <Image src="/quick_links/2.webp" alt="stressed person" width={300} height={200} className="w-full h-48 object-cover rounded-2xl mb-6" />
                        <div className="p-6">
                            <h3 className="text-lg font-bold mb-4">Discrimination</h3>
                            <p className="text-sm">LGB individuals often face unfair treatment and limitations on their rights, which can create a persistent strain.</p>
                        </div>
                    </div>

                    {/* Card 2 */}
                    <div className="bg-[#0E7EA0] rounded-3xl  text-white text-center">
                        <Image src="/quick_links/1.webp" alt="person meditating" width={300} height={200} className="w-full h-48 object-cover rounded-2xl mb-6" />
                        <div className="p-6">
                            <h3 className="text-lg font-bold mb-4">Hypervigilance</h3>
                            <p className="text-sm">Because of the constant fear of rejection or harm, many LGB individuals remain in a heightened state of awareness and anxiety, leading to long-term stress.</p>
                        </div>
                    </div>

                    {/* Card 3 */}
                    <div className="bg-[#0E7EA0] rounded-3xl text-white text-center">
                        <Image src="/diseases/childhooddepressionv2/3.webp" alt="people communicating" width={300} height={200} className="w-full h-48 object-cover rounded-2xl mb-6" />
                        <div className="p-6">
                            <h3 className="text-lg font-bold mb-4">Stigmatization</h3>
                            <p className="text-sm">The internalization of societal stigma may lead to feelings of inadequacy, self-doubt, and alienation.</p>
                        </div>
                    </div>

                    {/* Card 4 */}
                    <div className="bg-[#0E7EA0] rounded-3xl text-white text-center">
                        <Image src="https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="people communicating" width={300} height={200} className="w-full h-48 object-cover rounded-2xl mb-6" />
                        <div className="p-6">
                            <h3 className="text-lg font-bold mb-4">Homophobia</h3>
                            <p className="text-sm">Internalized homophobia occurs when individuals adopt the prejudiced views of society, believing their sexual orientation is something to hide or be ashamed of.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer Section */}
            {/* Prognosis and Future Outlook Section*/}
            <section className="bg-[#FFD266] w-full h-full lg:px-40 px-10 lg:pt-20 lg:pb-[50vw] pt-20 pb-50 mb-[-60vw] text-center z-0 ">
                <h2 className={`text-[#0E7EA0] lg:text-[3.5vw] text-[8vw] font-bold ${playfair.className} mb-10`}>The Life Cycle of Love in Couples</h2>
                <div className="flex flex-col lg:flex-row justify-between items-center text-left text-black gap-20 mb-50">
                    <p>MindFrames adopts a compassionate, empowering approach to helping individuals navigate issues related to their sexual orientation. The focus is on building self-compassion and self-reliance, which facilitates a healthier process of coming out and managing homophobia. By strengthening resilience, individuals are empowered to stand up for their rights and pursue authentic lives.
                    Therapeutic approaches such as Cognitive Behavioral Therapy (CBT), Rational Emotive Behavior Therapy (REBT), Acceptance and Commitment Therapy (ACT), and Emotion-Focused Therapy (EFT) are used to enhance self-acceptance and empowerment. These techniques help individuals address internalized stigma, build confidence, and live a fulfilling life in alignment with their values.</p>
                    <p>Additionally, mindfulness training is offered to help individuals cultivate psychological flexibility, manage stress, and increase emotional resilience. These therapeutic tools support individuals in embracing their authentic selves, feeling more in control of their choices, and living happier lives.
                    In summary, homosexuality is a natural and normal variation of human sexuality, and the challenges faced by LGB individuals are largely due to societal rejection, stigma, and discrimination. With the right support and therapeutic tools, LGB individuals can navigate these challenges, build resilience, and live fulfilling, authentic lives.  </p>
                </div>
            </section>
        </main>
    )
}

export default Homosexuality