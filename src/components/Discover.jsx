import React from "react";
import Section from "./Section";
import imageWhiteboard from "@/images/whiteboard.jpg";
import { TagList, TagListItem } from "./TagList";

const Discover = () => {
  return (
    <Section title="Discover" image={{ src: imageWhiteboard, shape: 1 }}>
      <div className="space-y-6 text-base text-neutral-600">
        <p>
          We work closely with our clients to understand their{" "}
          <strong className="font-semibold text-neutral-950">needs</strong> and
          goals, embedding ourselves in their every day operations to understand
          what makes their business tick.
        </p>
        <p>
          In the initial phase, our experts immerse themselves in the
          intricacies of your business. Through comprehensive analysis and a
          keen understanding of your objectives, we identify the areas where{" "}
          <strong className="font-semibold text-neutral-950">AI can be a </strong>
          game-changer, promising to add the most value and foster growth. This
          step ensures a foundation built on deep insight and tailored
          strategies, setting the stage for a transformation that is both
          meaningful and aligned with your vision.
        </p>
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
  );
};

export default Discover;
