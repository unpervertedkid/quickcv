import { store } from "../../store";

export default function Name(){
    return (
        <div flex gap-3 class="[&_h1]:text-5xl justify-center" font-raleway>
            <h1 class="!m-0">{store["full name"].split(" ")[0]}</h1>
            <h1 class="!m-0" font-normal text="dark:blue-4">
                {store["full name"].split(" ")[1]}
            </h1>
        </div>
    );
}