import { store } from "../../store";
import Section from "./section";

export default function About() {
    const children = <div>{store.profile}</div>;

    return (
        <Section icon="mdi:target-arrow" heading="About" children={children} />
    );
};