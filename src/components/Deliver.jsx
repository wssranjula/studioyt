import React from "react";
import Section from "./Section";
import imageMeeting from "@/images/meeting.jpg";
import List, { ListItem } from "./List";

const Deliver = () => {
  return (
    <Section title="Deliver" image={{ src: imageMeeting, shape: 1 }}>
      <div className="space-y-6 text-base text-neutral-600">
        <p>
          Our commitment to your success goes beyond integration.{" "}
          <strong className="font-semibold text-neutral-950">
            requirements
          </strong>
          . This allows us to increase the budget a final time before launch.
        </p>
 
        <p>
          As we step into the management phase, we offer unwavering support to
          ensure the AI-driven processes function optimally at all times.
        </p>
     
        <p>
          We are here to oversee the smooth running of the solutions, providing
          continuous assistance and making necessary adjustments to guarantee
          peak performance. This step signifies our long-term partnership, where
          we work hand in hand to ensure your business not only adapts but
          thrives in a dynamic digital landscape.
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
        <ListItem title="Support">
          100% Support from us
        </ListItem>
      </List>
    </Section>
  );
};

export default Deliver;
