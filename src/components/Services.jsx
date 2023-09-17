import React from "react";
import SectionIntro from "./SectionIntro";
import Container from "./Container";
import FadeIn from "./FadeIn";
import StylizedImage from "./StylizedImage";
import imageLaptop from "../images/laptop.jpg";
import List, { ListItem } from "./List";

const Services = () => {
  return (
    <>
      <SectionIntro
        eyebrow="Services"
        title="We help you identify, explore and respond to new opportunities."
        className="mt-24 sm:mt-32 lg:mt-40"
      >
        <p>
          In the fast-evolving digital landscape, staying ahead is pivotal. Our
          agency is here to be your trusted partner in that journey, offering a
          suite of services tailored to modern businesses aiming for the
          pinnacle of digital excellence.
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <div className="lg:flex lg:items-center lg:justify-end">
          <div className="flex justify-center lg:w-1/2 lg:justify-end lg:pr-12">
            <FadeIn className="w-[33.75rem] flex-none lg:w-[45rem]">
              <StylizedImage
                src={imageLaptop}
                sizes="(min-width: 1024px) 41rem, 31rem"
                className="justify-center lg:justify-end"
              />
            </FadeIn>
          </div>
          {/* List item */}
          <List className="mt-16 lg:mt-0 lg:w-1/2 lg:min-w-[33rem] lg:pl-4">
            <ListItem title="AI Automation and Consulting">
              Leverage the power of artificial intelligence to streamline your
              business processes and foster innovation. Our team is proficient
              in AI automations, LLM, and fine-tuning, offering tailored
              solutions that align with your business goals.
            </ListItem>
            <ListItem title="ChatGPT-3.5|4 or Other LLM Chatbot Development">
              Stay ahead in the competitive market with our ChatGPT-4 chatbot
              development services. We specialize in creating intelligent
              chatbots that enhance customer service and drive engagement,
              helping you to foster stronger relationships with your clients.
            </ListItem>
            <ListItem title="Machine Learning App Development">
              Unlock the potential of machine learning with our expert app
              development services. Our skilled team utilizes the latest
              frameworks to develop applications that are not only functional
              but also leverage the power of machine learning to provide
              intelligent solutions to complex problems.
            </ListItem>
            <ListItem title="Web Development">
              Our web development team is dedicated to crafting aesthetically
              pleasing and high-quality web pages that effectively communicate
              your brand message. We focus on creating a cohesive and immersive
              web experience, steering clear of placeholder texts to give you a
              website that truly represents your business..
            </ListItem>
          </List>
        </div>
      </Container>
    </>
  );
};

export default Services;
