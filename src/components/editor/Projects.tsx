import { setStore, store } from "../../store";
import { For } from "solid-js";
import { Icon } from "@iconify-icon/solid";

export default function Projects() {
    return(
        <div>
    <h3 capitalize>Projects</h3>

    {/* input fields */}
    <div grid gap-3>
      <For each={store.oss}>
        {(obj, index) => (
          <div flex flex-col md:flex-row gap-3 items-center>
            {Object.entries(obj).map(([key, value]) => (
              <input
                w-full
                placeholder={key}
                value={value}
                onchange={(e) => setStore("oss", index(), key, e.target.value)}
              />
            ))}

            <button
              aria-label="delete input"
              class="!bg-slate-7 !p-1 text-3xl !rounded-full"
              onclick={() =>
                setStore(
                  "oss",
                  store.oss.filter((_, i) => i !== index()),
                )}
            >
              <Icon
                icon="ion:close-circle"
                class="text-red-3 dark:text-red-4 hover:text-red-2"
              />
            </button>
          </div>
        )}
      </For>
    </div>

    <button
      class="!bg-blue-6 mt-5 mx-auto !text-white-1"
      onclick={() => {
        setStore("oss", [...store.oss, {
          "project name": "",
          description: "",
          languages: "",
        }]);
      }}
    >
      <Icon icon="ic:round-add-circle" text-xl />
      Add
    </button>
  </div>
    );
}