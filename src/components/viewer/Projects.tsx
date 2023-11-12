import { store } from "../../store";
import Section from "./Section";
import { Icon } from "@iconify-icon/solid";

export default function Projects() {
    const children = store.oss.map((x) => (
        <div grid>
            <div class="flex justify-between capitalize">
                <div
                    bg="slate-6 dark:black-4"
                    text="white-1 dark:white-3"
                    class="font-semibold p-1 px-5 rounded-t-lg"
                >
                    {x["project name"]}
                </div>
                ( {x.languages} )
            </div>
            <div
                class="flex !m-0"
                p-5
                border="solid slate-6 dark:black-4"
                rounded-b-lg
                rounded-r-lg
            >
                <Icon
                    icon="material-symbols:line-end-arrow-rounded"
                    width="20"
                    bg="dark:!transparent"
                    class='mt-[0.1rem] mr-2'
                >
                </Icon>
                {x.description}
            </div>
        </div>
    ));

    return (
        <Section icon="tabler:brand-open-source" heading="Projects" children={children} />
    );
};