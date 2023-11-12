import ContactItem from "./Contactitem";

interface GithubContactProps {
    username: string;
}

export default function GithubContact({ username }: GithubContactProps) {
    return (
        <ContactItem
            icon="mdi:github"
            label="Github"
            value={`@${username}`}
            action={`https://github.com/${username}`}
        />
    );
}