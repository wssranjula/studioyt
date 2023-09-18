import React from "react";
import Section from "./Section";
import agent3 from "@/images/agent3.jpg";
import List, { ListItem } from "./List";

export default function Work3() {
  return (
    <Section
      title="Generative AI Application Development"
      image={{ src: agent3, shape: 1 }}
    >
      <div className="space-y-6 text-base text-neutral-600">
        <h3 className="mt-12 font-display text-base font-semibold text-neutral-950">
          LLM and Pre-Training
        </h3>
        <p>
          Leverage the power of large language models (LLM) and pre-training
          techniques to build AI systems that understand and generate human-like
          text, opening doors to a myriad of applications from chatbots to
          content creators.
        </p>

        <h3 className="mt-12 font-display text-base font-semibold text-neutral-950">
          Content Creation
        </h3>
        <p>
          Leverage Generative AI to craft content that resonates with your
          audience, creating everything from compelling articles to captivating
          artworks, all powered by intelligent algorithms.
        </p>

        <h3 className="mt-12 font-display text-base font-semibold text-neutral-950">
          Multimedia Generation
        </h3>
        <p>
          Dive into the world of multimedia generation, where we create
          applications capable of generating stunning and personalized images,
          photos, videos, and audio. Enhance your projects with rich media
          content that tells a compelling story and captivates your audience
          through a harmonious blend of visuals and sounds.
        </p>
      </div>
      <h3 className="mt-12 font-display text-base font-semibold text-neutral-950">
        Included in this phase
      </h3>
      <List>
        <ListItem title="Testing">
          Our projects always have 100% Service coverage
        </ListItem>
        <ListItem title="Infrastructure">
          We will Intergrate in your infrastrucre or in our Web Services
        </ListItem>
        <ListItem title="Support">100% Support from us</ListItem>
      </List>
    </Section>
  );
}
