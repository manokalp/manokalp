import Image from "next/image"
import Link from "next/link"


const Hero = () => {
    return (
        <main className="w-full h-full flex justify-center flex-col  bg-[#F1F1F1] ">
            {/* Hero Image  */}
            <Image src="/hero.webp" alt="hero image" objectFit="cover" width={1200} height={100}  priority className="lg:w-[100vw] mt-10" />

            {/* The Harsh Truth Section  */}
            <section className="bg-[#0E7EA0] rounded-full w-full h-full lg:px-40 px-10 lg:py-40 py-20 text-center lg:mt-[-2vw] mt-[-10vw]">
                <div className="flex flex-col justify-center items-center lg:mb-20 mb-10">
                    <h2 className="lg:text-[4.0vw] text-[8.5vw] font-bold">“The Harsh Truth About Mental Health”</h2>
                    <p className="lg:text-[2.5vw] text-[4.5vw]">“Ignoring your mental health is costing you more than you think.”</p>
                </div>
                <div className="flex flex-col lg:flex-row justify-center lg:gap-40 gap-10 items-center text-center mb-20">
                    <div className=" lg:w-1/2 w-full">
                        <h4 className="lg:text-[2.5vw] text-[5.5vw] font-bold">Feeling Overwhelmed</h4>
                        <p className="lg:text-[1.55vw] text-[3.5vw] font-medium ">Start by identifying just one
                            stressor you can control today.”</p>
                    </div>
                    <div className="lg:w-1/2 w-full">
                        <h4 className="lg:text-[2.5vw] text-[5.5vw] font-bold">Feeling Stressed</h4>
                        <p className="lg:text-[1.55vw] text-[3.5vw] font-medium ">Take five minutes today to step away from what overwhelms you and focus on one small, manageable task.</p>
                    </div>
                </div>
                <Link href="/contact" className="lg:px-30 px-16 py-6 bg-black rounded-full lg:text-[2vw] text-[4.5vw] ">Get A Quick Fix</Link>
            </section>

            {/* Foundation Principles */}
            <section className="bg-white rounded-t-full w-full h-full lg:px-50 px-10 lg:py-70 py-20 text-center lg:mt-[-8vw] mt-[-10vw]">
                <main className=" mb-16">
                    <h2 className="text-center text-[#0E7EA0] lg:text-[4.0vw] text-[8.0vw] font-bold mb-10">Manokalp&apos;s Foundational Principles</h2>
                    <div className="flex justify-center flex-col px-[5vw]">
                        <div className="flex flex-row justify-start items-center text-center gap-4 mb-6">
                            <Image src="/principles/1.webp" alt="mental health icon" width={100} height={100} />
                            <p className="text-gray-800 lg:text-[1.6vw] text-[4vw] font-medium">There is no health without mental health.</p>
                        </div>
                        <div className="flex flex-row items-center justify-end text-center gap-4 mb-6">
                            <Image src="/principles/2.webp" alt="courage icon" width={100} height={100} />
                            <p className="text-gray-800 lg:text-[1.6vw] text-[4vw] font-medium">Mental health care is a sign of courage, not weakness.</p>
                        </div>
                    </div>
                    <div className="flex justify-center flex-col px-[5vw]">
                        <div className="flex flex-row justify-start items-center text-center gap-4 mb-6">
                            <Image src="/principles/3.webp" alt="mental health icon" width={70} height={70} />
                            <p className="text-gray-800 lg:text-[1.6vw] text-[4vw] font-medium">Community heals—connect with others to grow.</p>
                        </div>
                        <div className="flex flex-row items-center justify-end text-center gap-4 mb-6">
                            <Image src="/principles/4.webp" alt="courage icon" width={60} height={60} />
                            <p className="text-gray-800 lg:text-[1.6vw] text-[4vw] font-medium">Small, consistent actions lead to lasting wellness.</p>
                        </div>
                    </div>
                </main>
                <Link href="/what-we-do" className="lg:px-30 px-16 py-6 bg-black rounded-full lg:text-[2vw] text-[4.5vw] ">About Us</Link>
            </section>

            {/* Quick Fix Links  */}
            <section className="bg-[#F1F1F1] w-full h-full lg:px-40 px-10 lg:pt-20 pb-[50vw] py-10 mt-[-10vw] mb-[-45vw] ">
                <div className="grid lg:grid-cols-3 grid-cols-1 gap-8">
                    {/* Card 1 */}
                    <div className="bg-[#0E7EA0] rounded-3xl  text-white text-center">
                        
                        <Image src="/quick_links/2.webp" alt="stressed person" width={300} height={200} className="w-full h-48 object-cover rounded-2xl mb-6" />
                        <div className="p-6">
                        <h3 className="text-xl font-bold mb-4">Overwhelmed with work stress?</h3>
                        {/* <Link href="/stress-management" className="inline-block px-8 py-3 bg-black text-white rounded-full hover:bg-gray-800 transition-colors">Struggle</Link> */}
                        </div>
                    </div>

                    {/* Card 2 */}
                    <div className="bg-[#FFD700] rounded-3xl  text-black text-center">
                        <Image src="/quick_links/1.webp" alt="person meditating" width={300} height={200} className="w-full h-48 object-cover rounded-2xl mb-6" />
                        <div className="p-6">
                        <h3 className="text-xl font-bold mb-4">Try our 3-minute desk meditation exercise.</h3>
                        {/* <Link href="/meditation" className="inline-block px-8 py-3 bg-black text-white rounded-full hover:bg-gray-800 transition-colors">Play Video</Link> */}
                        </div>
                    </div>

                    {/* Card 3 */}
                    <div className="bg-[#0E7EA0] rounded-3xl text-white text-center">
                        <Image src="/quick_links/2.webp" alt="people communicating" width={300} height={200} className="w-full h-48 object-cover rounded-2xl mb-6" />
                        <div className="p-6">
                        <h3 className="text-xl font-bold mb-4">Download our free guide to better communication.</h3>
                        {/* <Link href="/communication-guide" className="inline-block px-8 py-3 bg-black text-white rounded-full hover:bg-gray-800 transition-colors">Download</Link> */}
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default Hero