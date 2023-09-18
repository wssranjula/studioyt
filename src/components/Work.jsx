import React from "react";
//Discover Import
import Section from "./Section";
import Agent from "@/images/agent.jpg";
import { TagList, TagListItem } from "./TagList";

//Build Imports
// import Section from "./Section";
import imageLaptop from "@/images/laptop.jpg";
import Blockquote from "./Blockquote";

export default function Work() {
  return (
    //Work1

    <Section title="Custom Chatbots" image={{ src: Agent, shape: 1 }}>
      <div className="space-y-6 text-base text-neutral-600">
        <p>
          Unlock the full potential of your data with our AI-powered{" "}
          <strong className="font-semibold text-neutral-950">chatbots</strong> ,
          designed to seamlessly integrate with a wide array of data formats
          including PDFs, Excel sheets, Word documents, Airtables, and SQL
          tables.
        </p>
        <h3 className="mt-12 font-display text-base font-semibold text-neutral-950">
        Data-Driven Answers
        </h3>
        <p>
          Our chatbots delve into your data repositories to
          fetch accurate answers, facilitating informed decisions and enhancing
          user satisfaction.
        </p>
        <h3 className="mt-12 font-display text-base font-semibold text-neutral-950">
          Harmonious Integration
        </h3>
        <p>
          We offer integration with any data loader you prefer, promising a
          smooth and efficient data retrieval process that aligns harmoniously
          with your existing infrastructure.
        </p>
        <h3 className="mt-12 font-display text-base font-semibold text-neutral-950">
          Deploy Expert Agents
        </h3>
        <p>
          Deploy our intelligent agents to retrieve data swiftly and accurately,
          fostering efficiency and innovation in your organization.
        </p>
        <h3 className="mt-12 font-display text-base font-semibold text-neutral-950">
          Tailored to Your Needs
        </h3>
        <p>
          Choose our customizable solutions, fine-tuned to meet your business
          objectives and resonate with your brand.
        </p>

        {/* <p>
          In the initial phase, our experts immerse themselves in the
          intricacies of your business. Through comprehensive analysis and a
          keen understanding of your objectives, we identify the areas where{" "}
          <strong className="font-semibold text-neutral-950">
            AI can be a{" "}
          </strong>
          game-changer, promising to add the most value and foster growth. This
          step ensures a foundation built on deep insight and tailored
          strategies, setting the stage for a transformation that is both
          meaningful and aligned with your vision.
        </p> */}
        {/* <p>
          Once the full audit is complete, we report back with a comprehensive
          <strong className="font-semibold text-neutral-950">plan</strong> and,
          more importantly, a budget.
        </p> */}
      </div>
      <h3 className="mt-12 font-display text-base font-semibold text-neutral-950">
        Included in this phase
      </h3>
      <TagList className="mt-4">
        <TagListItem>In-depth questionnaires</TagListItem>
        <TagListItem>Data Store Analysis</TagListItem>
        {/* <TagListItem>Blood samples</TagListItem> */}
        <TagListItem>Employee surveys</TagListItem>
        {/* <TagListItem>Proofs-of-concept</TagListItem>
        <TagListItem>Forensic audit</TagListItem> */}
      </TagList>
    </Section>

    // #End of Work 1
    //start of work 2
  );
}
