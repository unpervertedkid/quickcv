import ContactItem from "./Contactitem";

interface EmailContactProps {
    email: string;
}

export default function EmailContact({email}: EmailContactProps) {
    return (
        <ContactItem
            icon="mdi:email-variant"
            label="Email"
            value={email}
            action={`mailto:${email}`}
        />
    );
}
