import { store } from "../../store";
import { Icon } from "@iconify-icon/solid";

interface InterestProps {
    store_name: string;
    header: string;
    icon: string;
    iconColor: string;
};

export default function Interests({ store_name, header, icon, iconColor}: InterestProps) {
    return (
        <div grid gap-7 h-fit>
            {/*heading */}
            <div font-bold text-2xl vertCentered>
                <Icon
                    icon={icon.toLowerCase()}
                    width="25"
                    class={`rounded-full dark:bg-black-3 p-[0.3rem] ${iconColor}`}
                >
                </Icon>
                {header}
            </div>

            <div flex flex-wrap gap-3>
                {store[store_name].map((x) => {
                    const txttoArr = x.split(" ");
                    const txt = txttoArr.slice(0, -1).join(" ");
                    return (
                        <span
                            class="capitalize vertCentered p-1 px-2 rounded-lg"
                            bg="slate-1 dark:black-3"
                        >
                            <Icon icon={txttoArr[txttoArr.length - 1].toLowerCase()}></Icon>
                            {txt}
                        </span>
                    );
                })}
            </div>
        </div>
    );
}