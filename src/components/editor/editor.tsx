import PersonalDetails from "./personalDetails";
import About from "./About";
import Experience from "./experience";
import SkillsHobbies from "./SkillsHobbies";
import Projects from "./Projects";


export default function Editor() {
return (
  <div
    bg="white-1 dark:black-2"
    p="5 md:10"
    pt="0 md:5"
    class="max-w-5xl center shadow-sm rounded-xl grid gap-5 [&_*]:animate_smooth"
    animate_smooth
  >
    <PersonalDetails />
    <About />
    <Experience store_name="education" />
    <Experience store_name="work experience" />
    <SkillsHobbies store_name="skills" />
    <SkillsHobbies store_name="interests" />
    <Projects />
  </div>
);
}
