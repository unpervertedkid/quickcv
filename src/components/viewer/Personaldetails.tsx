import Section from "./Section";
import { store } from "../../store";
import EmailContact from "./personalDetails/Emailcontactitem";
import PhoneContact from "./personalDetails/Phonecontactitem";
import GithubContact from "./personalDetails/Githubcontactitem";

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