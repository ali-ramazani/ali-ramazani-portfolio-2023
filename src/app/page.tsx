import HomeLayout from "@/layouts/home";
import { getCategories } from "@/lib/categories-db";
import { getProjects } from "@/lib/projects-db";
import { CategoryType, ProjectType } from "../../types";
import { Intro } from "./_components/Intro";
import { Education } from "./_components/education";
import { Footer } from "./_components/footer";
import { Header } from "./_components/header";
import ProjectsSection from "./_components/projects-section";
import { Timeline } from "./_components/timeline";
import { Metadata } from "next";
import { OWNER_NAME } from "@/lib/constants";

export const metadata: Metadata = {
  title: OWNER_NAME,
  description: "Ali Ramazani Portfolio Website",
};

export default async function Home() {
  const { categories } = await getCategories();
  const { projects } = await getProjects({}, "category");
  const experience = [
    {
      title: "Berea College",
      role: "Teaching Assistant",
      desc: "Delivered lectures and helped students with quizzes and assignments.",
      date: "August 2023 - December 2023",
    },
    // {
    //   title: "THETA Financial Group",
    //   role: "Data Scientist",
    //   desc: "Led data-driven initiatives, employing advanced analytics to extract actionable insights and optimize business strategies. Developed machine learning models to enhance predictive analytics, resulting in a x% improvement in forecasting accuracy and contributing to a y% increase in overall operational efficiency.",
    //   date: "February 2022 - February 2022",
    // },
    // {
    //   title: "Alpha Analytics",
    //   role: "Data Scientist",
    //   desc: "Led comprehensive data analysis projects, leveraging statistical models and machine learning algorithms to uncover valuable business insights. Developed and deployed predictive models, contributing to a x% improvement in customer retention. Collaborated with cross-functional teams to implement data-driven strategies, resulting in a y% increase in overall profitability.",
    //   date: "February 2022 - February 2022",
    // },
    // {
    //   title: "Gamma Innovations",
    //   role: "Machine Learning Engineer",
    //   desc: "Architected and implemented end-to-end machine learning solutions, optimizing model performance for real-time applications. Developed custom algorithms for anomaly detection, resulting in a x% reduction in false positives. Collaborated with product teams to integrate machine learning features, contributing to a y% improvement in user satisfaction and product adoption.",
    //   date: "February 2022 - February 2022",
    // },
  ];

  return (
    <HomeLayout>
      <div className="w-full p-5 md:p-12 lg:p-20">
        <div className="h-[calc(100vh-100px)] md:h-[calc(100vh-100px)]">
          <Header />
          <Intro />
        </div>
        <ProjectsSection
          projects={projects as ProjectType[]}
          categories={categories as CategoryType[]}
        />
        <Timeline>
          {experience?.map((each) => (
            <Timeline.Item key={each.title} {...each} />
          ))}
        </Timeline>
        <Education />
        <Footer />
      </div>
    </HomeLayout>
  );
}
export const fetchCache = "force-no-store";
export const revalidate = 0;
