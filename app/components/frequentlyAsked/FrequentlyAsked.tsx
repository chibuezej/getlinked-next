import Image from 'next/image';
import React from 'react'
import faqs from "@/app/assets/images/faqs.svg"
import star from "@/app/assets/images/twinkleStar.svg"
const frequentlyAskedQuestions = [
    {
      question: "Can I work on a project I started before the hackathon?",
      answer: "Yes, you can work on a project that you started before the hackathon. However, there may be specific rules and guidelines regarding the eligibility of pre-existing projects, so please check the hackathon rules for details.",
    },
    {
      question: "What happens if I need help during the hackathon?",
      answer: "During the hackathon, there will be mentors and organizers available to provide assistance and support. You can reach out to them for help with technical issues, project guidance, and any other questions you may have.",
    },
    {
      question: "What happens if I don't have an idea for a project?",
      answer: "Not having an idea for a project is perfectly fine. Many hackathons offer brainstorming sessions, team formation opportunities, and idea pitching events where you can join a team and contribute your skills to an existing project.",
    },
    {
      question: "Can I join a team or do I have to come with one?",
      answer: "You can join a team at the hackathon even if you don't have one before the event. Most hackathons have team formation activities where you can meet fellow participants and form teams based on your skills and interests.",
    },
    {
      question: "What happens after the hackathon ends?",
      answer: "After the hackathon concludes, projects are usually judged, and winners are announced. Depending on the hackathon, there may be prizes, recognition, or opportunities to further develop your project or collaborate with sponsors and mentors.",
    },
  ];


function FrequentlyAsked() {
  return (
    <div> <section className={`py-8 border-b border-b-[#FFFFFF2E] lg:px-28 px-4 flex lg:flex-row flex-col-reverse items-center`}>
    <div className={`lg:w-[50%] w-full relative lg:px-7`}>
      <h2 className={`lg:text-3xl lg:text-left text-center text-2xl lg:w-[50%] lg:mt-0 mt-9 py-3 font-bold font-clash-display`}>
        Frequently Asked <span className={`text-[#D434FE]`}>Questions</span>
      </h2>

      <p className={`text-[13px] text-center lg:text-left lg:w-[70%]`}>
        We got answers to the questions that you might
        want to ask about <span className={`font-bold`}>getlinked Hackathon 1.0</span>
      </p> <br />

      <section>
        {frequentlyAskedQuestions.map((faq, index) => (
          <div key={index} className={`flex w-[28rem] max-w-full py-2 border-b my-2 cursor-pointer border-[#D434FE] items-center justify-between`}>
            <p className={`text-sm`}>
              {faq.question}
            </p>

            <div className={`text-[#D434FE] text-2xl ml-3 font-bold`}>
            <Image src={star} alt='star' />
            </div>
          </div>
        ))}
      </section>
    </div>

    <div className={`flex-1`}>
      <Image
        src={faqs}
        alt="Rules Image"
        width={200}
        height={200}
        className={`w-full object-contain object-center`}
        placeholder="blur"
        blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAFklEQVR42mN8/eCBPQMRgHFUIX0VAgB4UB0vFSLebwAAAABJRU5ErkJggg=="
      />
    </div>
  </section>
</div>
  )
}

export default FrequentlyAsked