import { Icon } from "@iconify-icon/solid";
import { setStore, store } from "../../store";
import { For } from "solid-js";

interface Props {
  store_name: string;
}

export default function Experience( {store_name }: Props) {
    return (
    <div>
      <h3 capitalize>{store_name}</h3>

      <div grid gap-3>
        <For each={store[store_name]}>
          {(obj, index) => (
            <div flex flex-col md:flex-row gap-3 items-center>
              {Object.entries(obj).map(([key, value]) => (
                <input
                  w-full
                  placeholder={key}
                  value={value}
                  onchange={(e) =>
                    setStore(store_name, index(), key, e.target.value)}
                />
              ))}

              <button
                aria-label="delete input"
                class="!bg-slate-7 !p-1 text-3xl !rounded-full"
                onclick={() => {
                  setStore(
                    store_name,
                    store[store_name].filter((_, i) => i !== index()),
                  );
                }}
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
          let emptyObj = store_name == "education"
            ? { institution: "", qualification: "", time: "" }
            : { company: "", position: "", time: "" };

          setStore(store_name, [...store[store_name], emptyObj]);
        }}
      >
        <Icon icon="ic:round-add-circle" text-xl />
        Add
      </button>
    </div>
  );
}