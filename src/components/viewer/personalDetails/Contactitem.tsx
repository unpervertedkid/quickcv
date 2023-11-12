import { Icon } from "@iconify-icon/solid";

interface ContactProps {
    icon: string;
    label: string;
    value: string;
    action: string;
}

export default function ContactItem({ icon, label, value, action }: ContactProps) {
    return (
        <div vertCentered>
            <span font-semibold vertCentered>
                <Icon icon={icon} width="20" />
                {label} :
            </span>
            <a href={action} target="_blank" rel="noopener noreferrer">{value}</a>
        </div>
    );


}