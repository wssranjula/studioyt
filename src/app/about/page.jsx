import ContactSection from "@/components/ContactSection";
import Container from "@/components/Container";
import Cultures from "@/components/Cultures";
import PageIntro from "@/components/PageIntro";
import { StatList, StatListItem } from "@/components/StatList";
import React from "react";

const AboutPage = () => {
  return (
    <>
      <PageIntro eyebrow="About us" title="Our strength is collaboration">
        <p>
          We believe that our strength lies in our collaborative approach, which
          puts our clients at the center of everything we do.
        </p>
        <div className="mt-10 max-w-2xl space-y-6 text-base">
          <p>
            SmartGenAI, founded by three friends, is at the forefront of
            revolutionizing businesses through AI automation..
          </p>
          <p>
            We specialize in creating customized chatbots trained on your unique
            data, enhancing efficiency and customer engagement. By automating
            workflows, we help organizations operate more intelligently and
            agilely, allowing teams to focus on strategic initiatives rather
            than manual tasks
          </p>
          {/* <p>
            Moreover, our bespoke chatbots are designed to understand and
            analyze your unique data sets, facilitating intelligent and
            responsive interactions that enhance customer engagement and
            satisfaction. At TechTonic, we are not just providing a service; we
            are forging a pathway to a more agile, intuitive, and intelligent
            business environment, where technology works hand in hand with human
            expertise to drive success."
          </p> */}
        </div>
      </PageIntro>
      <Container className="mt-16">
        <StatList>
          <StatListItem value="35" label="Number of Clients" />
          <StatListItem value="$1M+" label="Increased Revenue" />
          <StatListItem value="$400K+" label="Total Cost saved" />
        </StatList>
      </Container>
      <Cultures />
      <ContactSection />
    </>
  );
};

export default AboutPage;
