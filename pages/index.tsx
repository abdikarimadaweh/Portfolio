import type { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import Header from "../componets/Header";
import Hero from "../componets/Hero";
import About from "../componets/About";
import Skills from "../componets/Skills";
import Projects from "../componets/Projects";
import Contact from "../componets/Contact";
import styles from "../styles/Home.module.css";
import { PageInfo, Project, Skill, Social } from "../typing";
import { fetchPageInfo } from "../utils/fetchPageInfo";
import { fetchSkills } from "../utils/fetchSkills";
import { fetchProjects } from "../utils/fetchProject";
import { fetchSocial } from "../utils/fetchSocials";
import { listenerCount } from "process";
import css from "styled-jsx/css";

type Props = {
  pageInfo: PageInfo;
  skills: Skill[];
  projects: Project[];
  socials: Social[];
};
const Home = ({ pageInfo, projects, socials, skills }: Props) => {
  return (
    <div className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden">
      <Head>
        <title>Abdi`&apos;`s Portfolio</title>
      </Head>

      {/* Header */}
      <Header socials={socials} />
      {/* Hero Section */}
      <section id="hero" className="snap-center">
        <Hero pageInfo={pageInfo} />
      </section>
      {/* About Section */}
      <section id="about" className="snap-center">
        <About pageInfo={pageInfo} />
      </section>

      {/* Skills */}
      <section id="skills" className="snap-start">
        <Skills skills={skills} />
      </section>
      {/* Projects Section */}
      <section id="projects" className="snap-start">
        <Projects projects={projects} />
      </section>
      {/* Contact Me */}
      <section id="contact" className="snap-center">
        <Contact />
      </section>
    </div>
  );
};

export default Home;

export const getStaticProps: GetStaticProps<Props> = async () => {
  const pageInfo: PageInfo = await fetchPageInfo();
  const skills: Skill[] = await fetchSkills();
  const projects: Project[] = await fetchProjects();
  const socials: Social[] = await fetchSocial();

  return {
    props: {
      pageInfo,
      skills,
      projects,
      socials,
    },

    revalidate: 10,
  };
};
