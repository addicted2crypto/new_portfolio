//helper function to not need to repeat for email and message field
export const validateEmailString = (value: unknown, maxNumber: number) => {
    if (!value || typeof value !== 'string' || value.length > maxNumber) {
        return false;
    }

    return true;
}