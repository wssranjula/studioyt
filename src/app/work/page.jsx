import PageIntro from "@/components/PageIntro";
import React from "react";
import Build from "@/components/Build";
import ContactSection from "@/components/ContactSection";
import Deliver from "@/components/Deliver";
import Discover from "@/components/Discover";
import Values from "@/components/Values";
import Work from "@/components/Work";
import Work2 from "@/components/Work2";
import Work3 from "@/components/work3";

const WorkPage = () => {
  return (
    <>
      <PageIntro
        eyebrow="Our work"
        title="Proven solutions for real-world problems."
      >
        <p>
          We believe in efficiency and maximizing our resources to provide the
          best value to our clients. The primary way we do that is by re-using
          the same five projects we’ve been developing for the past decade.
        </p>
      </PageIntro>
      <div className="mt-24 space-y-24 [counter-reset:section] sm:mt-32 sm:space-y-32 lg:mt-40 lg:space-y-40">
        {/* Discover */}
        <Work/>
        {/* Deliver */}
        <Work2 />
        <Work3 />
      </div>
    
      <ContactSection />
    </>
  );
};

export default WorkPage;
