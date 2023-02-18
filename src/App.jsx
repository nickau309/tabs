import React, { useState, useEffect } from "react";
import { Tab } from "@headlessui/react";
import JobTab from "./JobTab";
import JobDetail from "./JobDetail";
import useWindowWidth from "./useWindowWidth";

const url = "https://course-api.com/react-tabs-project";

export default function App() {
  const [jobs, setJobs] = useState([]);
  const { width } = useWindowWidth();

  const fetchJobs = async () => {
    try {
      const response = await fetch(url);
      const newJobs = await response.json();
      setJobs(newJobs);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  return (
    <main className="flex min-h-screen justify-center bg-slate-100 py-20 px-4 text-slate-800">
      <section className="w-full max-w-6xl">
        {jobs.length === 0 ? (
          <h1 className="text-center text-3xl font-bold tracking-wider md:text-4xl">
            Loading...
          </h1>
        ) : (
          <>
            <div className="mb-8 sm:mb-16">
              <h1 className="mb-3 text-center text-3xl font-bold tracking-wider md:text-4xl">
                Experience
              </h1>
              <hr className="mx-auto w-20 border-t-4 border-slate-400" />
            </div>
            <Tab.Group
              as="div"
              vertical={width > 1024}
              className="grid gap-8 px-4 sm:gap-16 lg:grid-cols-[200px_1fr]"
            >
              {/* btn container */}
              <Tab.List className="flex justify-center gap-2 lg:flex-col lg:justify-start lg:gap-4 lg:px-2">
                {jobs.map((job) => (
                  <JobTab key={job.id} company={job.company} />
                ))}
              </Tab.List>
              {/* job info */}
              <Tab.Panels>
                {jobs.map((job) => {
                  const { id, ...rest } = job;
                  return <JobDetail key={id} {...rest} />;
                })}
              </Tab.Panels>
            </Tab.Group>
          </>
        )}
      </section>
    </main>
  );
}
