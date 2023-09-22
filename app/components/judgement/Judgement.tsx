"use client"
import React from 'react'
import judge from "@/app/assets/images/judge.svg"
import Image from 'next/image';
import Button from '@/app/constant/Button';

const dummyEvaluations = [
    {
      category: 'Innovation and Creativity',
      score: 9,
      comments: 'The solution addresses a real-world problem in a unique and creative way. It introduces innovative features that set it apart from others.',
    },
    {
      category: 'Functionality',
      score: 8,
      comments: 'The solution performs its intended functions effectively. It is mostly complete and robust, with a few minor issues that can be improved.',
    },
    {
      category: 'Impact and Relevance',
      score: 7,
      comments: 'The solution has the potential to have a significant impact in the real world. It addresses a relevant problem for the target audience, but there is room for improvement.',
    },
    {
      category: 'Technical Complexity',
      score: 9,
      comments: 'The solution demonstrates a high level of technical sophistication. It uses advanced technologies and algorithms, and it is highly scalable.',
    },
    {
      category: 'Adherence to Hackathon Rules',
      score: 10,
      comments: 'The team strictly adhered to all the rules and guidelines of the hackathon. They met all deadlines and followed competition-specific requirements.',
    },
  ];
  
  function Judgement() {
    const KeyAttributes = dummyEvaluations.map((evaluation) => ({
      title: evaluation.category,
      description: evaluation.comments,
    }));
  return (
    <div  className={`lg:py-24 py-14 border-b border-b-[#FFFFFF2E] lg:px-28 px-4 flex lg:flex-row flex-col items-center`}>
        
        <div className={`flex-1`}>
          <Image
            src={judge}
            alt="Rules Image"
            width={200}
            height={200}
            className={`w-full object-contain object-center`}
            placeholder="blur"
            blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAFklEQVR42mN8/eCBPQMRgHFUIX0VAgB4UB0vFSLebwAAAABJRU5ErkJggg=="
          />
        </div>

        <div className={`lg:w-[50%] lg:ml-5 w-full relative lg:px-7`}>
          <Image
            src={`/icons/star.svg`}
            alt="Star Icon"
            width={26}
            height={32}
            className={`w-[26px] h-[32px] block lg:hidden absolute -top-10 right-[47%]`}
          />
          <h2 className={`lg:text-3xl text-2xl lg:text-left text-center lg:w-[50%] py-3 font-bold font-clash-display`}>
            Judging Criteria <span className={`text-[#D434FE]`}>Key attributes</span>
          </h2>

          {
            KeyAttributes.map((attribute, index) => (
              <p key={index} className={`text-[13px] my-3 lg:text-left text-center`}>
                <span className={`text-[#D434FE] font-bold`}>{attribute.title}:</span> {attribute.description}
              </p>
            ))
          } <br />

          <div  onClick={() => { }}>
          <Button label='Read More' />
          </div>
        </div>
      

    </div>
  )
}

export default Judgement