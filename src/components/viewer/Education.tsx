import { store } from "../../store";
import Section from "./Section";

export default function Education() {
    const children = store.education.map((x) => (
        <div grid gap-3>
            <div flex justify-between>
                <p pl-10 class="!m-0 font-bold no-underline capitalize">{x.institution}</p>
                <p class="!m-0" bg="slate-1 dark:black-4" p-1 px-2 rounded-lg>
                    {x.time}
                </p>
            </div>
            <li capitalize pl-15>{x.qualification}</li>
        </div>
    ));

    return (
        <Section icon="mdi:education-outline" heading="Education" children={children} />
    );
};