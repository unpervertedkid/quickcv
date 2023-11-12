import { setStore, store } from '../../store';

export default function About() {
    const placeholders = [
        {
            name: "profile",
            altname: "Profile (write short self introduction & goals)",
        },
    ];

    return (
        <div>
            <h3>About</h3>
            <div grid gap-3>
                {placeholders.map((x: any) => (
                    <textarea
                        className="input-field"
                        placeholder={x.altname || x.name}
                        onChange={(e) => setStore(x.name, e.target.value)}
                        value={store[x.name] || ""}
                    />
                ))}
            </div>
        </div>
    );
};