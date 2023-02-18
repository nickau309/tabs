import React from "react";
import { Tab } from "@headlessui/react";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function JobTab({ company }) {
  return (
    <Tab
      className={classNames(
        "job-btn py-1 text-xl tracking-wider outline-cyan-500 duration-200 ease-linear",
        "hover:text-cyan-500 hover:shadow-[0_2px] hover:shadow-cyan-500/40",
        "lg:hover:shadow-[-2px_0] lg:hover:shadow-cyan-500/40",
        "ui-selected:text-cyan-500 ui-selected:shadow-[0_2px] ui-selected:shadow-cyan-500",
        "lg:ui-selected:shadow-[-2px_0]"
      )}
    >
      {company}
    </Tab>
  );
}
