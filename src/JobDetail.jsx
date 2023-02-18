import React from "react";
import { Tab } from "@headlessui/react";
import { FaAngleDoubleRight } from "react-icons/fa";

export default function JobDetail({ company, dates, duties, title }) {
  return (
    <Tab.Panel className="text-sm md:text-base">
      <h2 className="mb-3 text-xl tracking-wider md:text-2xl">{title}</h2>
      <h4 className="mb-3 inline-block rounded bg-slate-200 py-1 px-3 font-bold tracking-wider text-slate-500">
        {company}
      </h4>
      <p className="mb-5 tracking-wider text-slate-500">{dates}</p>
      <div className="grid gap-5">
        {duties.map((duty, index) => (
          <div
            key={index}
            className="grid grid-flow-col items-center gap-6 sm:gap-8"
          >
            <FaAngleDoubleRight className="text-cyan-500"></FaAngleDoubleRight>
            <p className="text-slate-700">{duty}</p>
          </div>
        ))}
      </div>
    </Tab.Panel>
  );
}
