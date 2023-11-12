import Section from "./section";
import { store } from "../../store";
import EmailContact from "./personalDetails/emailContactItem";
import PhoneContact from "./personalDetails/phoneContactItem";
import GithubContact from "./personalDetails/githubContactItem";

export default function PersonalDetails() {
    const children = (
        <div pl-10 grid gap-3 class="[&_Icon]:dark:bg-transparent">
            <PhoneContact number="0758887407" />
            <EmailContact email={store["email address"]} />
            <GithubContact username={store["github username"]} />
        </div>
    );

    return (
        <Section icon="mdi:user-circle" heading="Personal Details" children={children} />
    );
}