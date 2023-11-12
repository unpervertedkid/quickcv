import ContactItem from "./contactItem";

interface PhoneContactProps {
    phone: string;
}

export default function PhoneContact( { phone }: PhoneContactProps ) {
    const sanitizedNumber = sanitizePhoneNumber(phone);
    if (!sanitizedNumber) {
        return null;
    }
    return (
        <ContactItem
            icon="fluent:call-12-regular"
            label="Phone"
            value={sanitizedNumber}
            action={`tel:${sanitizedNumber}`}
        />
    );
}

function sanitizePhoneNumber(phone: string) {
    const regex = /^[+]?[(]?[0-9]{1,4}[)]?[-\s\.]?[(]?[0-9]{1,3}[)]?[-\s\.]?[0-9]{1,4}[-\s\.]?[0-9]{1,9}$/im;
    const isValid = regex.test(phone);
    if (!isValid) {
        return null;
    }
    return phone.replace(/\s/g, '');
}