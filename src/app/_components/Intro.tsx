import { LocationDark } from "@/components/location";
import TextAnimation from "@/components/type-writter";
export const Intro = () => {
  const wordsToAnimate = ["React", "Typescript", "Node.js", "GraphQL"];
  return (
    <div className="flex flex-col justify-end md:justify-around h-full">
      <div className="hidden h-0 md:h-auto md:flex md:justify-end">
        <LocationDark />
      </div>
      <div className="flex flex-col item-start">
        <div className="text-4xl text-white font-bold max-w-md">
          Crafting cutting-edge web solutions with a blend of modern
          technologies and creative design using
          <span className="text-secondary">
            <TextAnimation words={wordsToAnimate} interval={2000} />
          </span>
        </div>
        <div className="text-tertiary opacity-70 mt-7 flex flex-col gap-3">
          <p className="font-bold">
            As a dedicated software engineer, I specialize in developing
            scalable, responsive, and intuitive web applications that drive
            business success and enhance user experience.
          </p>
          <div className="flex items-center gap-3 italic text-white text-sm">
            <div className="bg-secondary h-3 w-3 rounded-full" />
            <p className="text-white text-2xl">
              Available for Summer 2024 Internship / Open Source Collaboration /
              Tech Talk
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
