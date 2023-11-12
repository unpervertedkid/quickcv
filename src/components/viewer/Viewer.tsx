import { store } from "../../store";
import About from "./About";
import Education from "./Education";
import Interests from "./Interests";
import Name from "./Name";
import PersonalDetails from "./Personaldetails";
import Projects from "./Projects";
import WorkExperience from "./Workexperience";


export default function Viewer(){
  return (
    <div
      class="w-[8.27in] rounded-lg p-10 bg-white-1 dark:bg-black-2 text-slate-6 dark:text-white-3 h-fit overflow-visible [&_*]:animate_smooth"
      id="resumeResult"
      animate_smooth
    >
      {/* header */}
      <div border-solid border="1 slate-2 dark:slate-7" mb-10></div>
      <Name />

      <h2
        class="capitalize text-center font-normal text-xl font-raleway"
        border="slate-2 dark:slate-7"
      >
        {store.designation}
      </h2>
      <div border-solid border="1 slate-2 dark:slate-7" mt-10></div>

      <div class="grid gap-10 mt-10 [&_Icon]:dark:bg-black-3">
        <About />
        <Education />
        <WorkExperience />
        <PersonalDetails />


        <div grid grid-cols-2 gap-10>
          <Interests
            store_name="skills"
            header="Technical Skills :"
            icon="ph-code-bold"
            iconColor="bg-orange-1 dark:text-orange-3"
          />
          <Interests
            store_name="interests"
            header="Interests & Hobbies :"
            icon="typcn:point-of-interest"
            iconColor="bg-slate-6 text-white-1 dark:text-blue-3"
          />
        </div>

        <Projects />
      </div>
    </div>
  );
}
