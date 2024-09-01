import { Card } from "./components/card/card";
import { StyledLink } from "./components/styledLink";
import { Header } from "./components/header";
import BlueGradient from "../../public/blueGradient.png";
import PinkGradient from "../../public/pinkGradient.png";
import GreenGradient from "../../public/greenGradient.png";
import PastelGradient from "../../public/PastelGradient.png";
import { ProjectTitle } from "./components/card/projectTitle";

export default function Home() {
  return (
    <main className="w-screen">
      <Header text="Eva Lee">
        <div className="px-48 ml-auto text-dark-brown-400 ">
          <StyledLink href="" className="pr-8 !text-2xl">
            Work
          </StyledLink>
          <StyledLink href="" className="!text-2xl">
            Contact
          </StyledLink>
        </div>
      </Header>
      <Card>
        <div className="my-auto py-52 text-5xl leading-normal">
          <h1>
            I'm a product designer based in Los Angeles, California. <br /> I
            seek the <em>a-ha!</em> moment where business objectives, user{" "}
            <br /> needs, and technical constraints seamlessly intersect, <br />{" "}
            culminating in a powerful and impactful digital experience.{" "}
          </h1>
        </div>
      </Card>
      <Card orientation="regular" image={BlueGradient}>
        <ProjectTitle title="FINLI | 2024" href="">
          Streamlining Onboarding to <br />
          Boost Conversion
        </ProjectTitle>
      </Card>
      <Card orientation="inverted" image={PinkGradient}>
        <ProjectTitle title="FINLI | 2024" href="">
          Simplifying Payments with <br />
          Pay-by StyledLinks
        </ProjectTitle>
      </Card>
      <Card orientation="regular" image={GreenGradient}>
        <ProjectTitle title="FINLI | 2024" href="">
          Optimizing Data Tables for <br />
          Intuitive Mobile Experience
        </ProjectTitle>
      </Card>
      <Card orientation="inverted" image={PastelGradient}>
        <ProjectTitle title="THREDUP | 2023" href="">
          Driving Engagement + Purchases with a User-Driven Outfit Builder
        </ProjectTitle>
      </Card>
      <Card>
        <div className="flex flex-row w-full py-32 text-4xl">
          <div className="flex flex-col basis-1/4 text-start pl-24">
            <StyledLink href="" className="pb-6 !text-4xl">
              Resume
            </StyledLink>
            <StyledLink href="" className="pb-6 !text-4xl">
              Email
            </StyledLink>
            <StyledLink href="" className="!text-4xl">
              Linkedin
            </StyledLink>
          </div>
          <div className="basis-3/4 text-start leading-relaxed">
            <div>
              Hi! I'm Eva (pronounced ee-vuh). I am currently <br />
              designing at Finli. Previously, I was at thredUP. My <br />
              design principles are rooted in transparency, <br />
              adaptability, and artistry.
            </div>
            <div className="pt-12">
              I enjoy crocheting, weightlifting, discovering new <br />
              music, watching messy reality TV, exploring local <br />
              cafes, indoor cycling, and reading chick lit.
            </div>
          </div>
        </div>
      </Card>
    </main>
  );
}
