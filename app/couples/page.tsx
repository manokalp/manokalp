"use client"
import Image from "next/image"
import Link from "next/link"
import playfair from "../../fonts/playfair.module.css"

const Relationship = () => {


    return (
        <main className="w-full h-full flex justify-center flex-col  bg-white ">
            {/* ASPD Hero Desktop  */}
            <div className="w-full hidden lg:block text-center ">
                <h2 className="lg:text-[5vw] text-black font-semibold relative z-10 font-[playfull] translate-y-40">Relationship <br />Communication</h2>
                <Image src="/couples.webp" alt="hero image" objectFit="cover" width={1200} height={100} className="w-full  lg:mt-[-16vw]  z-0" />
            </div>

            {/* ASPD Hero Mobile  */}
            <div className="w-full lg:hidden block text-center ">

                <Image src="/couples.webp" alt="hero image" objectFit="cover" width={1200} height={100} className="w-full     z-0" />
                <h2 className="lg:text-[5vw] text-[6vw] text-black font-semibold relative z-10 font-[playfull] mt-[-10vw] mb-10">Relationship <br />Communication</h2>
            </div>

            {/* The Harsh Truth Section  */}
            <section className="bg-[#0E7EA0] rounded-full w-full h-full lg:px-40 px-10 lg:py-40 py-20 text-center lg:mt-[-20vw] mt-[-0vw]">
                <div className="flex flex-col justify-center items-center lg:mb-20 mb-10">
                    <h2 className="lg:text-[4.0vw] text-[8.5vw] font-bold font-[playfull]">Introduction</h2>

                </div>
                <div className="flex flex-col lg:flex-row justify-center lg:gap-30 gap-10 items-center text-center mb-20">

                    <p className="lg:text-[1.55vw] text-[3.5vw] font-medium text-left">Couples&apos; compatibility refers to the degree to which two individuals in a romantic relationship understand, respect, and align with each other&apos;s life philosophies, goals, and personal traits. While it&apos;s common for partners to have some differences, compatible couples can accept these differences and deal with them in a way that promotes harmony and growth in the relationship. They enjoy each other's company without trying to change each other. </p>


                    <p className="lg:text-[1.55vw] text-[3.5vw] font-medium text-left">The success of communication relies not only on sending the message but also on its proper interpretation by the recipient.
                        The essence of compatibility lies not in complete similarity but in how well partners handle their differences and collaborate to maintain a healthy, balanced relationship.
                        Incompatible couples are not necessarily doomed to fail, but they often struggle to resolve conflicts, which can erode their bond. Compatible couples, on the other hand, navigate challenges together in a way that strengthens their connection. This involves mutual respect, tolerance, love, communication, and collaboration.</p>
                </div>

                <Link href="/" className="lg:px-30 px-16 py-6 bg-black rounded-full lg:text-[2vw] text-[4.5vw] ">Know More</Link>
            </section>

            {/* Why Is Communication So Important? */}
            <section className="bg-white w-full h-full lg:px-40 px-10 lg:py-20 py-10 text-center">
                <h2 className={`text-[#0E7EA0] lg:text-[4vw] text-[8vw] ${playfair.className} mb-8`}>Is Compatibility Fixed or Fluid?</h2>

                <div className="flex flex-col lg:flex-row justify-between gap-8 text-left">
                    <div className="lg:w-1/2">
                        <p className="text-black lg:text-[1.55vw] text-[3.5vw] font-medium">Effective communication is vital for maintaining a healthy relationship. Research shows that couples who communicate well are more likely to sustain strong, lasting bonds. Miscommunication or poor communication, on the other hand, can erode trust and contribute to emotional distress, leading to dissatisfaction in the relationship. As the social exchange theory suggests, negative communication tends to increase stress and diminish relationship satisfaction, while positive communication can help resolve conflicts and promote relationship well-being.</p>
                    </div>
                    <div className="lg:w-1/2">
                        <p className="text-black lg:text-[1.55vw] text-[3.5vw] font-medium">This evolving nature of compatibility means that while certain core values—such as trust, honesty, and commitment—tend to remain, other aspects of a relationship might shift as partners grow. A relationship&apos;s success relies on the couple&apos;s ability to adapt and navigate these changes together.</p>
                    </div>
                </div>
            </section>

            <section className="bg-white w-full h-full lg:px-40 px-10 lg:py-20 py-10 text-center">
                <h2 className={`text-[#0E7EA0] lg:text-[4vw] text-[8vw] ${playfair.className} mb-8`}>How Do You Find a Compatible Partner?</h2>
                <div className="flex flex-col lg:flex-row justify-between gap-8 text-left">
                    <div className="lg:w-1/2">
                        <p className="text-black lg:text-[1.55vw] text-[3.5vw] font-medium">Finding a compatible partner goes beyond checking off a list of physical traits, career choices, or personal preferences. The key is to find someone you truly enjoy being around, someone whose presence brings you peace and emotional fulfillment. While it’s natural to be drawn to certain qualities or shared interests, true compatibility also involves mutual respect for each other’s differences and the ability to work through conflicts constructively.</p>
                    </div>
                    <div className="lg:w-1/2">
                        <p className="text-black lg:text-[1.55vw] text-[3.5vw] font-medium">A compatible partner isn’t necessarily someone who fits into your predefined box, but someone who complements you and with whom you can build a balanced, collaborative relationship.
                            It&apos;s important not to confuse love with compatibility. Love can spark quickly, but true compatibility requires time, understanding, and communication to develop. It’s the foundation of a lasting relationship where both partners grow together.</p>
                    </div>
                </div>
            </section>


            {/*  Links  */}
            <section className="bg-white w-full h-full lg:px-40 px-10 lg:py-20 py-10 text-center">
                <h2 className={`text-[#0E7EA0] lg:text-[4vw] text-[7vw] font-semibold ${playfair.className}`}>Can Compatibility in Couples Be Measured?</h2>
                <p className="text-black lg:text-[1.5vw] text-[3vw] mb-10">While no formal measurement tool can definitively determine if a couple is compatible,
                    certain indicators can help assess the harmony within a relationship. These include:</p>
                <div className="grid lg:grid-cols-3 grid-cols-1 gap-4">
                    {/* Card 1 */}
                    <div className="bg-[#0E7EA0] rounded-3xl  text-white text-center">

                        <Image src="/quick_links/2.webp" alt="stressed person" width={300} height={200} className="w-full h-48 object-cover rounded-2xl mb-6" />
                        <div className="p-6">
                            <h3 className="text-lg font-bold mb-4">Calmness</h3>
                            <p className="text-sm">Partners should feel comfortable and at ease in each other&apos;s presence. While passion is essential, true compatibility is marked by a sense of peace and security, where neither partner feels anxious or apprehensive.</p>
                        </div>
                    </div>

                    {/* Card 2 */}
                    <div className="bg-[#FFD700] rounded-3xl  text-black text-center">
                        <Image src="/quick_links/1.webp" alt="person meditating" width={300} height={200} className="w-full h-48 object-cover rounded-2xl mb-6" />
                        <div className="p-6">
                            <h3 className="text-lg font-bold mb-4">Growth </h3>
                            <p className="text-sm">Compatible couples grow together. Instead of &quot;falling in love&quot; with passion alone, they &quot;rise in love,&quot; meaning they evolve and adapt through conflicts and challenges, building resilience and tolerance over time.</p>
                        </div>
                    </div>

                    {/* Card 3 */}
                    <div className="bg-[#0E7EA0] rounded-3xl text-white text-center">
                        <Image src="/quick_links/2.webp" alt="people communicating" width={300} height={200} className="w-full h-48 object-cover rounded-2xl mb-6" />
                        <div className="p-6">
                            <h3 className="text-lg font-bold mb-4">Honesty</h3>
                            <p className="text-sm">Honesty

                                Openness and transparency are crucial. When both partners feel comfortable expressing their true selves without fear of judgment or ridicule, trust and intimacy grow.</p>
                        </div>
                    </div>

                    {/* Card 4 */}
                    <div className="bg-[#0E7EA0] rounded-3xl text-white text-center">
                        <Image src="/quick_links/2.webp" alt="people communicating" width={300} height={200} className="w-full h-48 object-cover rounded-2xl mb-6" />
                        <div className="p-6">
                            <h3 className="text-lg font-bold mb-4">Physical Chemistry</h3>
                            <p className="text-sm">While compatibility goes beyond sexual attraction, physical chemistry—such as affection, warmth, and emotional connection—is often a key part of a compatible relationship.</p>
                        </div>
                    </div>

                    {/* Card 5 */}
                    <div className="bg-[#0E7EA0] rounded-3xl text-white text-center">
                        <Image src="/quick_links/2.webp" alt="people communicating" width={300} height={200} className="w-full h-48 object-cover rounded-2xl mb-6" />
                        <div className="p-6">
                            <h3 className="text-lg font-bold mb-4">Love Language </h3>
                            <p className="text-sm">Every couple has unique ways of expressing love. Compatible couples understand each other&apos;s emotional needs, communicate effectively, and adapt to each other's preferred modes of affection and support.</p>
                        </div>
                    </div>
                    {/* Card 6 */}
                    <div className="bg-[#0E7EA0] rounded-3xl text-white text-center">
                        <Image src="/quick_links/2.webp" alt="people communicating" width={300} height={200} className="w-full h-48 object-cover rounded-2xl mb-6" />
                        <div className="p-6">
                            <h3 className="text-lg font-bold mb-4">Agreeableness</h3>
                            <p className="text-sm">Agreeing to disagree is a sign of compatibility. Couples who can resolve conflicts without needing to win every argument or impose their opinions on each other are more likely to have long-term satisfaction.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer Section */}
            {/* Prognosis and Future Outlook Section*/}
            <section className="bg-[#FFD266] w-full h-full lg:px-40 px-10 lg:pt-20 lg:pb-[50vw] pt-20 pb-50 mb-[-60vw] text-center z-0 ">
                <h2 className={`text-[#0E7EA0] lg:text-[3.5vw] text-[8vw] font-bold ${playfair.className} mb-10`}>The Life Cycle of Love in Couples</h2>
                <div className="flex flex-col lg:flex-row justify-between items-center text-left text-black gap-20 mb-50">
                    <p>Love in relationships tends to evolve over time. Initially, couples experience &quot;falling in love,&quot; a passionate and intense phase. However, as the relationship matures, expectations change, and partners learn to love differently.
                    Over time, love transitions into a deeper connection, marked by genuine friendship, </p>
                    <p> Over time, love transitions into a deeper connection, marked by genuine friendship, mutual respect, and the ability to accept each other without needing to change one another. This stage represents true compatibility, where both partners choose acceptance over rejection and are able to love each other as they are.</p>
                </div>
            </section>
        </main>
    )
}

export default Relationship