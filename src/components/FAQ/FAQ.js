import React from "react";
import { FAQData } from "./FAQData";
import { HashLink } from "react-router-hash-link";

const FAQ = () => {
  return (
    <>
      <div className="w-screen max-w-[1400px] p-5  mx-auto my-10 lg:px-16 2xl:px-32 3xl:px-0 ">
        <div className="flex items-right justify-center">
          <h1 className="font-signika xl:text-5xl md:text-4xl text-3xl font-semibold">
            Frequently Asked Questions
          </h1>
        </div>
        <div className="flex items-right justify-center">
          <div className="container xl:w-[600px] md:w-[450px] w-[380px] h-2 mt-1 bg-underlineOrange rounded-xl mb-8" />
        </div>
        <div className="rounded-xl">
          {FAQData.map((FAQ, id) => (
            <div
              key={id}
              className="relative mt-4 bg-underlineOrange overflow-hidden rounded-xl p-2"
            >
              <input
                type="checkbox"
                className="peer absolute top-0 inset-x-0 w-full h-12 opacity-0 z-10 cursor-pointer"
              />
              <div className="h-full w-full p-3 flex items-center max-h-full">
                <h1 className="xl:text-xl font-bold md:text-lg text-sm mr-5">
                  {FAQ.title} <i>{FAQ.offline}</i> {FAQ.conjunction}{" "}
                  <i>{FAQ.online}</i>
                </h1>
              </div>
              <div className="absolute top-5 right-3 transition-transform duration-200 rotate-0 peer-checked:-rotate-90">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </div>
              <div className="overflow-hidden rounded-lg bg-[#F9E1CF] transition-transform duration-200 max-h-0 peer-checked:max-h-full">
                <div className="p-5 border-t text-justify whitespace-pre-wrap">
                  {FAQ.question}
                  <i>{FAQ.subQuestion}</i>
                  {FAQ.lanjutan}
                  <HashLink smooth to={String(FAQ.link)} >
                    <span className="font-bold">{FAQ.linkTo}</span>
                  </HashLink>
                  <a href={FAQ.linkOut} className={`font-bold`} target="_blank" rel="noreferrer">{FAQ.linkText}</a>
                  {FAQ.question1}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default FAQ;
