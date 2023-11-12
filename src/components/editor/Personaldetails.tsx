import { setStore, store } from '../../store';

function InputField({ name, altname }) {
    return (
        <input
            placeholder={altname || name}
            onChange={(e) => setStore(name, e.target.value)}
            value={store[name] || ""}
        />
    );
}

export default function PersonalDetails() {
    const placeholders = [
        { name: "Full Name" },
        { name: "Designation", altname: "Designation (ex: Web dev)" },
        { name: "Phone Number" },
        { name: "Address" },
        { name: "Email Address" },
        { name: "Github Username" },
    ];

    return (
        <div>
            <h3>Personal Details</h3>
            <div grid md:grid-cols-2 gap-3>
                {placeholders.map((x) => (
                    <InputField name={x.name} altname={x.altname} />
                ))}
            </div>
        </div>
    );
}