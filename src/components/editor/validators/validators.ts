export function validateEmail(value: string): string | null {
    if (/^[\w-]+(\.[\w-]+)*@([a-z0-9-]+(\.[a-z0-9-]+)*?\.[a-z]{2,6}|(\d{1,3}\.){3}\d{1,3})(:\d{4})?$/.test(value)) {
        return "Email address is invalid";
    }
    return null;
}

export function validatePhoneNumber(value: string): string | null {
    if (!/^\d{10}$/.test(value)) {
        return "Phone number is invalid";
    }
    return null;
}