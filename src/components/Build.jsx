import React from "react";
import Section from "./Section";
import imageLaptop from "@/images/laptop.jpg";
import Blockquote from "./Blockquote";

const Build = () => {
  return (
    <Section title="Build" image={{ src: imageLaptop, shape: 2 }}>
      <div className="space-y-6 text-base text-neutral-600">
        <p>
          Armed with the insights garnered in the discovery phase, we proceed to
          the development stage where your custom AI solutions take shape.
        </p>
        <p>
          Our team crafts solutions that are not just technologically advanced
          but also seamlessly integrated into your existing systems, enhancing
          functionality and introducing innovative features that are in perfect
          harmony with your business goals. 
        </p>
        <p>
        It's here that we bring your vision
          to life, with solutions designed to elevate every identified area to
          new heights of efficiency and effectiveness.
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
};

export default Build;
