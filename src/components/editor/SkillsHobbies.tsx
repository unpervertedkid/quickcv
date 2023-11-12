import { setStore, store } from "../../store";
import { For } from "solid-js";
import { Icon } from "@iconify-icon/solid";

interface Props {
    store_name: string;
    }

export default function SkillsHobbies( {store_name }: Props) {
    return (
    <div>
      <h3 capitalize>{store_name}</h3>

      <div grid md:flex flex-wrap gap-3>
        <For each={store[store_name]}>
          {(val, index) => (
            <div
              bg="slate-1 dark:black-3"
              grid
              grid-cols="[1fr_auto]"
              items-center
              focus-within="border-2 border-solid border-blue"
              rounded-lg
            >
              <input
                rounded-r-none
                w-full
                focus:outline-none
                placeholder={store_name == "skills"
                  ? "skill"
                  : "interest / hobby"}
                value={val}
                size={val.length}
                onchange={(e) =>
                  setStore(store_name, index(), e.target.value)}
              />

              <button
                aria-label="delete input"
                class="shadow-none !bg-slate-1 dark:!bg-black-3 p-2 text-3xl rounded-l-none"
                onclick={() =>
                  setStore(
                    store_name,
                    store[store_name].filter((_, i) => i !== index()),
                  )}
              >
                <Icon
                  icon="ion:close-circle"
                  class="text-red-4 dark:text-red-4 hover:text-red-2"
                />
              </button>
            </div>
          )}
        </For>

        <button
          class="!bg-blue-6 !text-white-1"
          onclick={() => {
            setStore(store_name, [...store[store_name], ""]);
          }}
        >
          <Icon icon="ic:round-add-circle" text-xl />
          Add
        </button>
      </div>
    </div>
  );
}