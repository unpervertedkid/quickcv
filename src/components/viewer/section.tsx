
import { ReactNode } from "react";
import { Icon } from "@iconify-icon/solid";

interface SectionProps {
    icon: string;
    heading: string;
    children: ReactNode;
}

export default function Section({ icon, heading, children }: SectionProps) {
    return (
        <div style={{ display: "grid", gap: "7px" }}>
            {/*heading */}
            <div font-bold text-2xl vertCentered>
                <Icon
                    icon={icon}
                    width="25"
                    class="bg-lime-2 rounded-full dark:bg-black-3 dark:text-lime-3 p-[0.3rem]"
                />
                {heading}
            </div>

            {children}
        </div>
    );
}
