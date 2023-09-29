import React from "react";
import SectionIntro from "./SectionIntro";
import Container from "./Container";
import { GridList, GridListItem } from "./GridList";
import Button from "./Button";


export default function Products() {
  return (
    <div className="mt-24  rounded-4xl bg-neutral-950 py-24 sm:mt-32 lg:mt-40 lg:py-32">
      <SectionIntro
        eyebrow="Try our Products"
        title="Try our SmartGenAI Buisness KIT for freely "
        invert
      >
        <p>
          We are a group of like-minded people who share the same core values.
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <GridList>
          <GridListItem title="Email Generation" invert>
            Genereate your Sales and Newletter Emails with ease
          </GridListItem>
          <GridListItem title="Social Media Content" invert>
            Genereate your Social Media Posts with ease
          </GridListItem>
          <GridListItem title="Business Advisory" invert>
            Use our Business Advisory tool to SWOT Analysis , Genereate Business ideas and get Strategic Adivse.
          </GridListItem>
          <GridListItem title="ASK Your CSV" invert>
            Upload your CSV file and ask all your Questions.
          </GridListItem>
          
          <Button  invert>
              <a href={"https://techtonic-businesskit.streamlit.app"} target="_blank" rel="noopener noreferrer">
                  Try Our Produts now
              </a>
            </Button>
          
        </GridList>
        
      </Container>
    </div>
  )
}
