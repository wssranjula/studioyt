import React from "react";
import Section from "./Section";
import Agent2 from "@/images/agent2.jpg";

export default function Work2() {
  return (
    <Section title="AI Automations" image={{ src: Agent2, shape: 2 }}>
      <div className="space-y-6 text-base text-neutral-600">
        <p>
          Revolutionize your business operations with our AI automations,
          designed to take over time-consuming tasks and enhance efficiency in
          customer handling, email response generation, and much more.
        </p>
        <h3 className="mt-12 font-display text-base font-semibold text-neutral-950">
        Customer Handling
        </h3>
        <p>
          Transform your customer service experience with AI
          automations that handle queries swiftly, ensuring customer
          satisfaction and fostering lasting relationships.
        </p>
        <h3 className="mt-12 font-display text-base font-semibold text-neutral-950">
        AI Assistants and Companions
        </h3>
        <p>
           Introduce AI assistants to your team,
          offering support and companionship, and facilitating a smoother
          workflow by handling repetitive tasks proficiently.
        </p>
        <h3 className="mt-12 font-display text-base font-semibold text-neutral-950">
        Information Extraction
        </h3>
        <p>
           Streamline data management with AI solutions
          that pinpoint and extract crucial information, helping you make
          informed decisions and stay ahead in the competitive market
        </p>
        <h3 className="mt-12 font-display text-base font-semibold text-neutral-950">
        Interacting with Documents
        </h3>
        <p>
           Ease the process of extracting data from
          PDFs and other documents with AI tools that chat with your files,
          pulling out the necessary information efficiently.
        </p>
      </div>
      {/* <Blockquote
      author={{ name: "Debra Fiscal", role: "CEO of Unseal" }}
      className="mt-12"
    >
      Studio_clone were so regular with their progress updates we almost began
      to think they were automated!
    </Blockquote> */}
    </Section>
  );
}
