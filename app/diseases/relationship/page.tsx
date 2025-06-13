"use client";
import Image from "next/image";
// import Link from "next/link"
// import { useState } from 'react';
// import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import playfair from "../../../fonts/playfair.module.css";

const Relationship = () => {
  return (
    <main className="w-full h-full flex justify-center flex-col  bg-white ">
      {/* Hero Desktop  */}
      <div className="w-full hidden lg:block text-center ">
        <h2 className="lg:text-[5vw] text-[6vw] text-black font-semibold relative z-10 font-[playfull] ">
          Relationship <br />
          Communication
        </h2>
        <Image
          src="/diseases-banner/relationship.webp"
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
          src="/diseases-banner/relationship.webp"
          alt="hero image"
          objectFit="cover"
          width={1200}
          height={100}
          className="w-full     z-0"
          priority
          onLoad={() => {
            if (typeof window !== "undefined") {
              window.dispatchEvent(new Event("heroImageLoaded"));
            }
          }}
        />
        <h2 className="lg:text-[5vw] text-[6vw] text-black font-semibold relative z-10 font-[playfull] mt-[-10vw] mb-10">
          Relationship <br />
          Communication
        </h2>
      </div>

      {/* Introduction Section  */}
      <section className="bg-[#0E7EA0] rounded-full w-full h-full lg:px-40 px-10 lg:py-20 py-20 text-center lg:mt-[-20vw] mt-[-0vw]">
        <div className="flex flex-col lg:flex-row justify-center lg:gap-20 gap-10 items-center text-center mb-20">
          <p className="lg:text-[1.55vw] text-[3.5vw] font-medium text-left">
            Relationship communication refers to the process of conveying
            thoughts, feelings, needs, and desires between partners in a
            romantic relationship. It&apos;s more than just sharing
            information—it&apos;s about deepening understanding and fostering
            closeness. Healthy communication is characterized by clear, open,
            and honest expression, and active listening. It forms the foundation
            of a strong relationship by helping build trust and emotional
            intimacy.
          </p>

          <p className="lg:text-[1.55vw] text-[3.5vw] font-medium text-left">
            The success of communication relies not only on sending the message
            but also on its proper interpretation by the recipient. In intimate
            relationships, communication is crucial because it operates within a
            framework of trust and vulnerability. Partners rely on each other
            for emotional support and often share their deepest fears, desires,
            and dreams. Making communication an essential element for
            connection.
          </p>
        </div>
      </section>

      {/* Why Is Communication So Important? */}
      <section className="bg-white w-full h-full lg:px-40 px-10 lg:py-20 py-10 text-center">
        <h2
          className={`text-[#0E7EA0] lg:text-[4vw] text-[8vw] ${playfair.className} mb-8`}
        >
          Why Is Communication So Important?
        </h2>
        <p className="text-black lg:text-[1.5vw] text-[3.5vw] mb-10">
          Communication serves as the bridge between two partners. Some of the
          most important reasons are:
        </p>

        <div className="flex flex-col lg:flex-row justify-between gap-8 text-left">
          <div className="lg:w-1/2">
            <p className="text-black lg:text-[1.55vw] text-[3.5vw] font-medium">
              Effective communication is vital for maintaining a healthy
              relationship. Research shows that couples who communicate well are
              more likely to sustain strong, lasting bonds. Miscommunication or
              poor communication, on the other hand, can erode trust and
              contribute to emotional distress, leading to dissatisfaction in
              the relationship. As the social exchange theory suggests, negative
              communication tends to increase stress and diminish relationship
              satisfaction, while positive communication can help resolve
              conflicts and promote relationship well-being.
            </p>
          </div>
          <div className="lg:w-1/2">
            <p className="text-black lg:text-[1.55vw] text-[3.5vw] font-medium">
              In relationships, conflicts are inevitable. Differences in goals,
              desires, and preferences—such as unmet expectations, intimacy
              issues, financial disagreements, or challenges around family
              responsibilities—can create tension. Unresolved conflicts can
              breed stress and put even the healthiest relationships at risk.
              Learning how to communicate effectively during such disagreements
              is crucial for the long-term health of a relationship.
            </p>
          </div>
        </div>
      </section>

      {/* How Do Couples Communicate? */}
      <section className="bg-white w-full h-full lg:px-40 px-10 lg:py-20 py-10 text-center">
        <h2
          className={`text-[#0E7EA0] lg:text-[3.5vw] text-[7vw] font-bold ${playfair.className} mb-12`}
        >
          How Do Couples Communicate?
        </h2>
        <p className="text-black lg:text-[1.5vw] text-[3.5vw] mb-10">
          Communication patterns vary from couple to couple, but typically
          involve both verbal and non-verbal elements. Healthy communication
          means:
        </p>
        <div className="grid lg:grid-cols-4 grid-cols-1 gap-6 mb-10">
          {/* Communication Card 1 */}
          <div className="bg-[#0E7EA0] rounded-xl text-white text-center">
            <Image
              src="https://images.pexels.com/photos/5699823/pexels-photo-5699823.jpeg"
              alt="Active listening"
              width={300}
              height={200}
              className="w-full h-48 object-cover rounded-t-xl"
            />
            <div className="p-4">
              <h3 className="text-lg font-bold mb-2">Active Listening</h3>
              <p className="text-sm">
                Paying full attention to your partner, acknowledging their
                feelings, and responding thoughtfully.
              </p>
            </div>
          </div>

          {/* Communication Card 2 */}
          <div className="bg-[#0E7EA0] rounded-xl text-white text-center">
            <Image
              src="https://images.pexels.com/photos/6753175/pexels-photo-6753175.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="Expressing needs"
              width={300}
              height={200}
              className="w-full h-48 object-cover rounded-t-xl"
            />
            <div className="p-4">
              <h3 className="text-lg font-bold mb-2">Expressing Needs</h3>
              <p className="text-sm">
                Clearly articulating what you want and need from your partner in
                a respectful way.
              </p>
            </div>
          </div>

          {/* Communication Card 3 */}
          <div className="bg-[#0E7EA0] rounded-xl text-white text-center">
            <Image
              src="https://images.pexels.com/photos/4098224/pexels-photo-4098224.jpeg"
              alt="Non-verbal cues"
              width={300}
              height={200}
              className="w-full h-48 object-cover rounded-t-xl"
            />
            <div className="p-4">
              <h3 className="text-lg font-bold mb-2">Non-verbal Cues</h3>
              <p className="text-sm">
                Understanding body language, facial expressions, and tone which
                often convey more than words.
              </p>
            </div>
          </div>

          {/* Communication Card 4 */}
          <div className="bg-[#0E7EA0] rounded-xl text-white text-center">
            <Image
              src="https://images.pexels.com/photos/4559516/pexels-photo-4559516.jpeg"
              alt="Conflict resolution"
              width={300}
              height={200}
              className="w-full h-48 object-cover rounded-t-xl"
            />
            <div className="p-4">
              <h3 className="text-lg font-bold mb-2">Conflict Resolution</h3>
              <p className="text-sm">
                Addressing disagreements constructively rather than avoiding
                them or escalating into arguments.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What Communication Helps Resolve Conflict? */}
      <section className="bg-white w-full h-full lg:px-40 px-10 lg:py-20 py-10 text-center">
        <h2
          className={`text-[#0E7EA0] lg:text-[3.5vw] text-[7vw] font-bold ${playfair.className} mb-12`}
        >
          What Communication Helps Resolve Conflict?
        </h2>
        <div className="flex flex-col lg:flex-row justify-between items-center gap-10">
          <div className="lg:w-[80vw] w-[80vw] h-[45vh] overflow-hidden rounded-xl">
            <Image
              src="https://images.pexels.com/photos/4144100/pexels-photo-4144100.jpeg"
              alt="Couple resolving conflict"
              width={800}
              height={500}
              className="w-full h-full object-cover"
            />
          </div>
          <p className="text-black text-left lg:text-[1.25vw] text-[3vw]">
            Effective communication helps couples address the core issues in a
            relationship. Direct collaboration is particularly effective because
            it encourages both partners to discuss the issue openly, work toward
            understanding each other, and find a solution that benefits both.
            Although direct opposition can sometimes uncover issues, it tends to
            backfire when emotions dominate over logic, making it harder to
            reach a resolution.
            <br />
            <br />
            Indirect communication, while softer, often lacks the depth needed
            to resolve conflict. Indirect opposition can manipulate emotions but
            may not lead to a genuine resolution, and indirect collaboration may
            mitigate the emotional fallout but may not fully address the problem
            at hand.
          </p>
        </div>
      </section>

      {/* How Can Couples Communicate Effectively? */}
      <section className="bg-white w-full h-full lg:px-40 px-10 lg:py-20 py-10 text-center">
        <h2
          className={`text-[#0E7EA0] lg:text-[3.5vw] text-[7vw] font-bold ${playfair.className} mb-12`}
        >
          How Can Couples Communicate Effectively?
        </h2>
        <div className="flex flex-col lg:flex-row justify-between items-center gap-20">
          <p className="text-black text-left lg:text-[1.15vw] text-[3vw]">
            Effective communication involves both speaking and listening with
            empathy. Couples should express their feelings honestly while also
            being considerate of how their words will be received. Active
            listening—focusing fully on the other partner, validating their
            feelings, and responding thoughtfully—is key. Miscommunication often
            stems from partners being unclear about what they want or need,
            which makes it crucial to engage in honest and open dialogue.
            <br /> <br />
            Unhappy couples often struggle with the cause-and-effect
            relationship between their dissatisfaction and their communication
            patterns. Some couples may find themselves in negative communication
            cycles because of underlying relationship stress, while others may
            struggle to communicate effectively because of pre-existing issues.
            Being proactive in managing communication styles, balancing
            vulnerability and trust, and working together to resolve issues will
            help keep relationships strong and conflict resolution easier.
          </p>
          <div className="lg:w-[140vw] w-[80vw] h-[45vh] overflow-hidden rounded-xl">
            <Image
              src="https://images.pexels.com/photos/5699456/pexels-photo-5699456.jpeg"
              alt="Couple communicating effectively"
              width={1000}
              height={500}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Communication Building Process by Dr. Shefali */}
      <section className="bg-white w-full h-full lg:px-40 px-10 lg:py-20 py-10 text-center">
        <h2
          className={`text-[#0E7EA0] lg:text-[3.8vw] text-[7vw] font-bold ${playfair.className} mb-8`}
        >
          Communication Building Process by Dr. Shefali
        </h2>
        <p className="text-black lg:text-[1.25vw] text-[3.5vw] mb-10">
          To improve communication, couples can engage in therapy that focuses
          on teaching and reinforcing positive communication strategies. Dr.
          Shefali Batra, a psychiatrist and psychotherapist, outlines various
          techniques, including:
        </p>

        <div className="grid lg:grid-cols-6 grid-cols-1 gap-4 mb-70">
          {/* Technique Card 1 */}
          <div className="[perspective:1000px] cursor-pointer ">
            <div className="relative w-full aspect-square transition-all duration-500 [transform-style:preserve-3d] hover:[transform:rotateY(180deg)]">
              <div className="absolute inset-0 bg-[#0E7EA0] w-full lg:lg:h-[50vh] rounded-xl p-6 text-white flex flex-col items-center justify-center [backface-visibility:hidden]">
                <h3 className="lg:text-[1.5vw] text-[4vw] font-bold">
                  Listening Skills
                </h3>
              </div>
              <div className="absolute inset-0 bg-[#0E7EA0] w-full lg:lg:h-[50vh] rounded-xl p-6 text-white flex flex-col items-center justify-center [transform:rotateY(180deg)] [backface-visibility:hidden]">
                <p className="lg:text-[1vw] text-[3vw]">
                  Improving the ability to listen without judgment, helping both
                  partners feel heard and understood
                </p>
              </div>
            </div>
          </div>

          {/* Technique Card 2 */}
          <div className="[perspective:1000px] cursor-pointer">
            <div className="relative w-full aspect-square transition-all duration-500 [transform-style:preserve-3d] hover:[transform:rotateY(180deg)]">
              <div className="absolute inset-0 bg-[#FFD700] w-full lg:h-[50vh] rounded-xl p-6 text-black flex flex-col items-center justify-center [backface-visibility:hidden]">
                <h3 className="lg:text-[1.5vw] text-[4vw] font-bold">
                  Assertiveness Training
                </h3>
              </div>
              <div className="absolute inset-0 bg-[#FFD700] w-full lg:h-[50vh] rounded-xl p-6 text-black flex flex-col items-center justify-center [transform:rotateY(180deg)] [backface-visibility:hidden]">
                <p className="lg:text-[1vw] text-[3vw]">
                  Teaching couples how to express their needs directly and
                  respectfully without being passive or aggressive
                </p>
              </div>
            </div>
          </div>

          {/* Technique Card 3 */}
          <div className="[perspective:1000px] cursor-pointer">
            <div className="relative w-full aspect-square transition-all duration-500 [transform-style:preserve-3d] hover:[transform:rotateY(180deg)]">
              <div className="absolute inset-0 bg-[#0E7EA0]  w-full lg:h-[50vh] rounded-xl p-6 text-white flex flex-col items-center justify-center [backface-visibility:hidden]">
                <h3 className="lg:text-[1.5vw] text-[4vw] font-bold">
                  &apos;I&apos; Language
                </h3>
              </div>
              <div className="absolute inset-0 bg-[#0E7EA0] w-full lg:h-[50vh] rounded-xl p-6 text-white flex flex-col items-center justify-center [transform:rotateY(180deg)] [backface-visibility:hidden]">
                <p className="lg:text-[1vw] text-[3vw]">
                  Encouraging partners to express their feelings from their own
                  perspective (e.g., &quot;I feel hurt when...&quot; instead of
                  &quot;You always...&quot;)
                </p>
              </div>
            </div>
          </div>

          {/* Technique Card 4 */}
          <div className="[perspective:1000px] cursor-pointer">
            <div className="relative w-full aspect-square transition-all duration-500 [transform-style:preserve-3d] hover:[transform:rotateY(180deg)]">
              <div className="absolute inset-0 bg-[#FFD700] w-full lg:h-[50vh] rounded-xl p-6 text-black flex flex-col items-center justify-center [backface-visibility:hidden]">
                <h3 className="lg:text-[1.5vw] text-[4vw] font-bold">
                  Trust Building
                </h3>
              </div>
              <div className="absolute inset-0 bg-[#FFD700] w-full lg:h-[50vh] rounded-xl p-6 text-black flex flex-col items-center justify-center [transform:rotateY(180deg)] [backface-visibility:hidden]">
                <p className="lg:text-[1vw] text-[3vw]">
                  Working on creating and maintaining trust within the
                  relationship, which fosters openness and vulnerability
                </p>
              </div>
            </div>
          </div>

          {/* Technique Card 5 */}
          <div className="[perspective:1000px] cursor-pointer">
            <div className="relative w-full aspect-square transition-all duration-500 [transform-style:preserve-3d] hover:[transform:rotateY(180deg)]">
              <div className="absolute inset-0 bg-[#0E7EA0] w-full lg:h-[50vh] rounded-xl p-6 text-white flex flex-col items-center justify-center [backface-visibility:hidden]">
                <h3 className="lg:text-[1.5vw] text-[4vw] font-bold">
                  Anger Processing
                </h3>
              </div>
              <div className="absolute inset-0 bg-[#0E7EA0] w-full lg:h-[50vh] rounded-xl p-6 text-white flex flex-col items-center justify-center [transform:rotateY(180deg)] [backface-visibility:hidden]">
                <p className="lg:text-[1vw] text-[3vw]">
                  Learning to manage and express anger in healthy ways without
                  causing harm to the relationship
                </p>
              </div>
            </div>
          </div>

          {/* Technique Card 6 */}
          <div className="[perspective:1000px] cursor-pointer">
            <div className="relative w-full aspect-square transition-all duration-500 [transform-style:preserve-3d] hover:[transform:rotateY(180deg)]">
              <div className="absolute inset-0 bg-[#FFD700] w-full lg:h-[50vh] rounded-xl p-6 text-black flex flex-col items-center justify-center [backface-visibility:hidden]">
                <h3 className="lg:text-[1.5vw] text-[4vw] font-bold">
                  External Factors
                </h3>
              </div>
              <div className="absolute inset-0 bg-[#FFD700] w-full lg:h-[50vh] rounded-xl p-6 text-black flex flex-col items-center justify-center [transform:rotateY(180deg)] [backface-visibility:hidden]">
                <p className="lg:text-[1vw] text-[3vw]">
                  Understanding how external stressors impact communication and
                  developing strategies to manage them together
                </p>
              </div>
            </div>
          </div>
        </div>

        <p className="text-black lg:text-[1.5vw] text-[3.5vw] lg:mt-52 mt-10">
          Couples can also record and analyze their communication interactions
          to identify faulty styles and reinforce productive behaviors. Over
          time, this can lead to more mature and effective communication, which
          strengthens the relationship and enhances emotional connection.
        </p>
      </section>
    </main>
  );
};

export default Relationship;
