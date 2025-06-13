"use client";
import Image from "next/image";
// import Link from "next/link"
// import { useState } from 'react';
// import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import playfair from "../../../fonts/playfair.module.css";

const Addiction = () => {
  return (
    <main className="w-full h-full flex justify-center flex-col  bg-white ">
      {/* ASPD Hero Desktop  */}
      <div className="w-full hidden lg:block text-center ">
        <h2 className="lg:text-[5vw] text-[6vw] text-white font-semibold relative z-10 font-[playfull] translate-y-[3vw]">
          Addiction
        </h2>
        <Image
          src="/diseases-banner/addiction.webp"
          alt="hero image"
          objectFit="cover"
          width={1200}
          height={100}
          className="w-full  lg:mt-[-16vw] mt-[-25vw]  z-0 "
          priority
          onLoad={() => {
            if (typeof window !== "undefined") {
              window.dispatchEvent(new Event("heroImageLoaded"));
            }
          }}
        />
      </div>

      {/* ASPD Hero Mobile  */}
      <div className="w-full lg:hidden block text-center ">
        <Image
          src="/diseases-banner/addiction.webp"
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
        <h2 className="lg:text-[5vw] text-[6vw] text-white font-semibold relative z-10 font-[playfull] mt-[-10vw] mb-10">
          Addiction
        </h2>
      </div>

      {/* The Harsh Truth Section  */}
      <section className="bg-[#0E7EA0] rounded-full w-full h-full lg:px-40 px-10 lg:py-20 py-20 text-center lg:mt-[-20vw] mt-[-0vw]">
        <div className="flex flex-col lg:flex-row justify-center lg:gap-20 gap-10 items-center text-center mb-20">
          <p className="lg:text-[1.55vw] text-[3.5vw] font-medium text-left">
            Addiction is a multifaceted disorder that affects millions of
            individuals across the globe. It is defined by compulsive use of a
            substance or behavior in the face of adverse effects. Addiction
            exists in a variety of forms, ranging from substance abuse (e.g.,
            drugs and alcohol) to behavioral addictions (e.g., gambling, social
            media, or gaming).
          </p>

          <p className="lg:text-[1.55vw] text-[3.5vw] font-medium text-left">
            It is not a matter of lack of willpower but a chronic illness that
            impacts brain function and behavior. Knowledge of the causes,
            symptoms, and solutions of addiction is vital in ensuring that
            people understand the issue and get successful treatment.
          </p>
        </div>
      </section>

      {/* Section */}
      <section className="bg-white w-full h-full lg:px-40 px-10 lg:py-20 py-10 text-center">
        <h2
          className={`text-[#0E7EA0] lg:text-[3.8vw] text-[7vw] font-bold ${playfair.className} mb-8`}
        >
          Causes of Addiction
        </h2>
        <p className="text-black lg:text-[1.25vw] text-[3.5vw] mb-10">
          Addiction results from a mix of biological, psychological, and
          environmental reasons. The following are some of the key causes:
        </p>

        <div className="grid lg:grid-cols-5 grid-cols-1 gap-4 mb-60">
          {/* Technique Card 1 */}
          <div className="[perspective:1000px] cursor-pointer ">
            <div className="relative w-full aspect-square transition-all duration-500 [transform-style:preserve-3d] hover:[transform:rotateY(180deg)]">
              <div className="absolute inset-0 bg-[#0E7EA0] w-full lg:lg:h-[50vh] rounded-xl p-6 text-white flex flex-col items-center justify-center [backface-visibility:hidden]">
                <h3 className="lg:text-[1.25vw] text-[4vw] font-bold">
                  Genetic Predisposition
                </h3>
              </div>
              <div className="absolute inset-0 bg-[#0E7EA0] w-full lg:lg:h-[50vh] rounded-xl p-6 text-white flex flex-col items-center justify-center [transform:rotateY(180deg)] [backface-visibility:hidden]">
                <p className="lg:text-[1vw] text-[3vw]">
                   Research indicates that genetic makeup plays an important
                  part in addiction. People who have a history of addiction in
                  their families are likely to develop such issues.
                </p>
              </div>
            </div>
          </div>

          {/* Technique Card 2 */}
          <div className="[perspective:1000px] cursor-pointer">
            <div className="relative w-full aspect-square transition-all duration-500 [transform-style:preserve-3d] hover:[transform:rotateY(180deg)]">
              <div className="absolute inset-0 bg-[#FFD700] w-full lg:h-[50vh] rounded-xl p-6 text-black flex flex-col items-center justify-center [backface-visibility:hidden]">
                <h3 className="lg:text-[1.25vw] text-[4vw] font-bold">
                  Brain Chemistry and Reward System
                </h3>
              </div>
              <div className="absolute inset-0 bg-[#FFD700] w-full lg:h-[50vh] rounded-xl p-6 text-black flex flex-col items-center justify-center [transform:rotateY(180deg)] [backface-visibility:hidden]">
                <p className="lg:text-[1vw] text-[3vw]">
                  Addictive drugs and activities activate the reward system of
                  the brain by releasing dopamine, a pleasure-related
                  neurotransmitter. Gradually, repeated use leads to a change in
                  brain chemistry such that it is hard to experience pleasure
                  without using the addictive drug or engaging in the addictive
                  activity.
                </p>
              </div>
            </div>
          </div>

          {/* Technique Card 3 */}
          <div className="[perspective:1000px] cursor-pointer">
            <div className="relative w-full aspect-square transition-all duration-500 [transform-style:preserve-3d] hover:[transform:rotateY(180deg)]">
              <div className="absolute inset-0 bg-[#0E7EA0]  w-full lg:h-[50vh] rounded-xl p-6 text-white flex flex-col items-center justify-center [backface-visibility:hidden]">
                <h3 className="lg:text-[1.25vw] text-[4vw] font-bold">
                  Environmental Causes
                </h3>
              </div>
              <div className="absolute inset-0 bg-[#0E7EA0] w-full lg:h-[50vh] rounded-xl p-6 text-white flex flex-col items-center justify-center [transform:rotateY(180deg)] [backface-visibility:hidden]">
                <p className="lg:text-[1vw] text-[3vw]">
                  Substance exposure at an early age, peer pressure, stress, and
                  trauma can cause addiction. Individuals who are exposed to
                  addiction while growing up at home or to high-stress
                  environments are at higher risk.
                </p>
              </div>
            </div>
          </div>

          {/* Technique Card 4 */}
          <div className="[perspective:1000px] cursor-pointer">
            <div className="relative w-full aspect-square transition-all duration-500 [transform-style:preserve-3d] hover:[transform:rotateY(180deg)]">
              <div className="absolute inset-0 bg-[#FFD700] w-full lg:h-[50vh] rounded-xl p-6 text-black flex flex-col items-center justify-center [backface-visibility:hidden]">
                <h3 className="lg:text-[1.25vw] text-[4vw] font-bold">
                  Lack of Healthy Coping Mechanisms
                </h3>
              </div>
              <div className="absolute inset-0 bg-[#FFD700] w-full lg:h-[50vh] rounded-xl p-6 text-black flex flex-col items-center justify-center [transform:rotateY(180deg)] [backface-visibility:hidden]">
                <p className="lg:text-[1vw] text-[3vw]">
                  Some people use addictive substances or activities as a means
                  of coping with emotional hurt, boredom, or stress, instead of
                  learning to cope in healthy ways.
                </p>
              </div>
            </div>
          </div>

          {/* Technique Card 5 */}
          <div className="[perspective:1000px] cursor-pointer">
            <div className="relative w-full aspect-square transition-all duration-500 [transform-style:preserve-3d] hover:[transform:rotateY(180deg)]">
              <div className="absolute inset-0 bg-[#0E7EA0] w-full lg:h-[50vh] rounded-xl p-6 text-white flex flex-col items-center justify-center [backface-visibility:hidden]">
                <h3 className="lg:text-[1.25vw] text-[4vw] font-bold">
                  Social and Cultural Influences
                </h3>
              </div>
              <div className="absolute inset-0 bg-[#0E7EA0] w-full lg:h-[50vh] rounded-xl p-6 text-white flex flex-col items-center justify-center [transform:rotateY(180deg)] [backface-visibility:hidden]">
                <p className="lg:text-[1vw] text-[3vw]">
                  Culture and society can make addictive behavior the norm,
                  i.e., the use of excessive amounts of alcohol, tobacco, or
                  gambling, and it becomes easy for people to become addicted to
                  them.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/*  Links  */}
      <section className="bg-white w-full h-full lg:px-20 px-10 lg:py-20 py-10 text-center">
        <h2
          className={`text-[#0E7EA0] lg:text-[4vw] text-[7vw] font-semibold  ${playfair.className}`}
        >
          Symptoms of Addiction
        </h2>
        <p className="text-black lg:text-[1.55vw] text-[3.5vw] font-medium mb-10">
          Addiction symptoms may differ based on the substance or activity, but
          typical signs include:
        </p>
        <div className="grid lg:grid-cols-3 grid-cols-1 gap-2">
          {/* Card 1 */}
          <div className="bg-[#0E7EA0] rounded-3xl  text-white text-center">
            <Image
              src="https://images.pexels.com/photos/3771129/pexels-photo-3771129.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="person struggling with loss of control"
              width={300}
              height={200}
              className="w-full h-48 object-cover rounded-2xl mb-6"
            />
            <div className="p-6">
              <h3 className="text-lg font-bold mb-4">Loss of Control</h3>
              <p className="text-sm">
                Being unable to stop or cut down despite trying to do so.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-[#0E7EA0] rounded-3xl text-white text-center">
            <Image
              src="https://images.pexels.com/photos/6551415/pexels-photo-6551415.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="person experiencing cravings"
              width={300}
              height={200}
              className="w-full h-48 object-cover rounded-2xl mb-6"
            />
            <div className="p-6">
              <h3 className="text-lg font-bold mb-4">Cravings and Obsession</h3>
              <p className="text-sm">
                Repeatedly thinking about the addictive activity or substance
                and having overwhelming urges to use it.
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-[#0E7EA0] rounded-3xl text-white text-center">
            <Image
              src="https://images.pexels.com/photos/7793247/pexels-photo-7793247.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="neglected work responsibilities"
              width={300}
              height={200}
              className="w-full h-48 object-cover rounded-2xl mb-6"
            />
            <div className="p-6">
              <h3 className="text-lg font-bold mb-4">
                Neglecting Responsibilities
              </h3>
              <p className="text-sm">
                Forgetting work, school, or family responsibilities because of
                addiction.
              </p>
            </div>
          </div>

          {/* Card 4 */}
          <div className="bg-[#0E7EA0] rounded-3xl text-white text-center">
            <Image
              src="https://images.pexels.com/photos/7047011/pexels-photo-7047011.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="tolerance and dependence concept"
              width={300}
              height={200}
              className="w-full h-48 object-cover rounded-2xl mb-6"
            />
            <div className="p-6">
              <h3 className="text-lg font-bold mb-4">
                Tolerance and Dependence
              </h3>
              <p className="text-sm">
                Requiring increasingly more of the substance or the behavior to
                produce the same effect.
              </p>
            </div>
          </div>

          {/* Card 5 */}
          <div className="bg-[#0E7EA0] rounded-3xl text-white text-center">
            <Image
              src="https://images.pexels.com/photos/6753175/pexels-photo-6753175.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="person experiencing withdrawal"
              width={300}
              height={200}
              className="w-full h-48 object-cover rounded-2xl mb-6"
            />
            <div className="p-6">
              <h3 className="text-lg font-bold mb-4">Withdrawal Symptoms</h3>
              <p className="text-sm">
                Suffering physical and emotional pain when abstaining from the
                substance or behavior (e.g., anxiety, irritability, nausea,
                sweating).
              </p>
            </div>
          </div>

          {/* Card 6 */}
          <div className="bg-[#0E7EA0] rounded-3xl text-white text-center">
            <Image
              src="https://images.pexels.com/photos/6382634/pexels-photo-6382634.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="negative consequences of addiction"
              width={300}
              height={200}
              className="w-full h-48 object-cover rounded-2xl mb-6"
            />
            <div className="p-6">
              <h3 className="text-lg font-bold mb-4">
                Continuing Despite Negative Consequences
              </h3>
              <p className="text-sm">
                Continuing the addictive behavior in spite of money, social,
                health, or legal issues.
              </p>
            </div>
          </div>

          {/* Card 7 */}
          <div className="bg-[#0E7EA0] rounded-3xl text-white text-center">
            <Image
              src="https://images.pexels.com/photos/8088488/pexels-photo-8088488.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="person experiencing social isolation"
              width={300}
              height={200}
              className="w-full h-48 object-cover rounded-2xl mb-6"
            />
            <div className="p-6">
              <h3 className="text-lg font-bold mb-4">Social Isolation</h3>
              <p className="text-sm">
                Retreating from family and friends in order to conceal addiction
                or out of shame and guilt.
              </p>
            </div>
          </div>

          {/* Card 8 */}
          <div className="bg-[#0E7EA0] rounded-3xl text-white text-center">
            <Image
              src="https://images.pexels.com/photos/382177/pexels-photo-382177.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="risky behavior related to addiction"
              width={300}
              height={200}
              className="w-full h-48 object-cover rounded-2xl mb-6"
            />
            <div className="p-6">
              <h3 className="text-lg font-bold mb-4">
                Indulgence in Risky Behaviors
              </h3>
              <p className="text-sm">
                {" "}
                Getting into hazardous behavior, such as operating under the
                influence of substances or indulging in unsafe habits, due to
                addiction.
              </p>
            </div>
          </div>

          {/* Card 9 */}
          <div className="bg-[#0E7EA0] rounded-3xl text-white text-center">
            <Image
              src="https://images.pexels.com/photos/5723274/pexels-photo-5723274.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="person in denial about addiction"
              width={300}
              height={200}
              className="w-full h-48 object-cover rounded-2xl mb-6"
            />
            <div className="p-6">
              <h3 className="text-lg font-bold mb-4">
                Denial and Rationalization
              </h3>
              <p className="text-sm">
                Deflecting by excuses about addictive conduct or ignoring its
                effect.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2 para  */}
      <section className="bg-white w-full h-full lg:px-40 px-10 lg:py-20 py-10 text-center pb-2">
        <h2
          className={`text-[#0E7EA0] font-bold lg:text-[5vw] text-[8vw] ${playfair.className} mb-8`}
        >
          Solutions for Addiction
        </h2>
        <p className="text-black lg:text-[1.55vw] text-[3.5vw] font-medium mb-10">
          Addiction can be overcome with a combination of medical,
          psychological, and social support. Some of the effective solutions
          are:
        </p>
        <div className="flex flex-col lg:flex-row justify-between gap-8 text-left">
          <div className="bg-white border-b-2 border-[1px] text-black p-8 flex-1">
            <h3 className="text-xl font-bold mb-4">Recognizing the Problem</h3>
            <p className="text-sm">
              The initial step towards recovery is admitting the addiction and
              the necessity for help.
            </p>
          </div>

          <div className="bg-white border-b-2 border-[1px] text-black p-8 flex-1">
            <h3 className="text-xl font-bold mb-4">Professional Treatment</h3>
            <p className="text-sm">
              Professional treatment for addiction involves therapy, counseling,
              rehabilitation centers, and medical treatment.
            </p>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row justify-between gap-8 text-left mt-8">
          <div className="bg-white border-b-2 border-[1px] text-black p-8 flex-1">
            <h3 className="text-xl font-bold mb-4">Detoxification</h3>
            <p className="text-sm">
              In the case of substance addiction, detox is usually required to
              eliminate harmful substances from the body under medical care.
            </p>
          </div>
          <div className="bg-white border-b-2 border-[1px] text-black p-8 flex-1">
            <h3 className="text-xl font-bold mb-4">Support Groups</h3>
            <p className="text-sm">
              Organizations such as Alcoholics Anonymous (AA) offer peer support
              and encouragement by individuals who have knowledge of the
              challenges of addiction.
            </p>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row justify-between gap-8 text-left mt-8">
          <div className="bg-white border-b-2 border-[1px] text-black p-8 flex-1">
            <h3 className="text-xl font-bold mb-4">
              Building Healthy Coping Mechanisms
            </h3>
            <p className="text-sm">
              Creating new interests, exercise, meditation, or engaging in
              meaningful pursuits can help replace addictive activities.
            </p>
          </div>

          <div className="bg-white border-b-2 border-[1px] text-black p-8 flex-1">
            <h3 className="text-xl font-bold mb-4">
              Steering Clear of Triggers
            </h3>
            <p className="text-sm">
              Finding out and steering clear of things, places, or individuals
              that foster addictive tendencies can help prevent relapse.
            </p>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row justify-between gap-8 text-left mt-8">
          <div className="bg-white border-b-2 border-[1px] text-black p-8 flex-1">
            <h3 className="text-xl font-bold mb-4">
              Cognitive Behavioral Therapy (CBT)
            </h3>
            <p className="text-sm">
              CBT assists the individual in understanding and modifying negative
              thought processes and behaviors that enable addiction.
            </p>
          </div>

          <div className="bg-white border-b-2 border-[1px] text-black p-8 flex-1">
            <h3 className="text-xl font-bold mb-4">
              Medication-Assisted Treatment (MAT)
            </h3>
            <p className="text-sm">
              Certain addictions, e.g. opioid or alcohol addiction, are treated
              using medications that lessen the cravings and withdrawal
              symptoms.
            </p>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row justify-between gap-8 text-left my-8">
          <div className="bg-white border-b-2 border-[1px] text-black p-8 flex-1">
            <h3 className="text-xl font-bold mb-4">
              Creating a Healthy Support Network
            </h3>
            <p className="text-sm">
              Being around positive family, friends, or mentors can motivate and
              hold accountable.
            </p>
          </div>
          <div className="bg-white border-b-2 border-[1px] text-black p-8 flex-1">
            <h3 className="text-xl font-bold mb-4">
              Creating a Healthy Support Network
            </h3>
            <p className="text-sm">
              Being around positive family, friends, or mentors can motivate and
              hold accountable.
            </p>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      {/* Prognosis and Future Outlook Section*/}
      <section className="bg-[#FFD266] w-full h-full lg:px-40 px-10 lg:pt-20 lg:pb-[50vw] pt-20 pb-50 mb-[-60vw] text-center z-0 ">
        <h2
          className={`text-[#0E7EA0] lg:text-[5vw] text-[8vw] font-bold ${playfair.className} mb-10`}
        >
          Conclusion
        </h2>
        <div className="flex flex-col lg:flex-row justify-between items-center text-left text-black gap-20 mb-50">
          <p>
            Addiction is a serious and intricate problem that impacts people on
            various levels—bodily, emotionally, and socially. Nevertheless, it
            is a surmountable challenge. Knowing the causes, being aware of the
            symptoms,
          </p>
          <p>
            {" "}
            and finding the right solutions can free people from the grip of
            addiction. With the right treatment, encouragement, and self-will,
            one can overcome it, and with that, there will be a healthier and
            richer life ahead.
          </p>
        </div>
      </section>
    </main>
  );
};

export default Addiction;
