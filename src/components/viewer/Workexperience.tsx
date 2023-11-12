import { store } from "../../store";
import Section from "./Section";

export default function WorkExperience() {
    const children = store["work experience"].map((x) => (
        <div grid gap-3>
            <div flex justify-between>
                <p pl-10 class="!m-0 font-bold no-underline capitalize">{x.company}</p>
                <p class="!m-0" bg="slate-1 dark:black-4" p-1 px-2 rounded-lg>
                    {x.time}
                </p>
            </div>
            <li capitalize pl-15>{x.position}</li>
        </div>
    ));

    return (
        <Section icon="uil:suitcase" heading="Work Experience" children={children} />
    );
};