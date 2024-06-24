const upperCaseLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const lowerCaseLetters = 'abcdefghijklmnopqrstuvwxyz';
const numbers = '0123456789';
const specialCharacters = '!@#$%^&*()_+[]{}|;:,.<>?';

export interface PasswordOptions {
    length: number;
    useUpperCase?: boolean;
    useLowerCase?: boolean;
    useNumbers?: boolean;
    useSpecialCharacters?: boolean;
}

export function generatePassword(options: PasswordOptions): string {
    const {
        length,
        useUpperCase = true,
        useLowerCase = true,
        useNumbers = true,
        useSpecialCharacters = true,
    } = options;

    if (length < 1) throw new Error('Password length must be at least 1');

    let characterPool = '';
    if (useUpperCase) characterPool += upperCaseLetters;
    if (useLowerCase) characterPool += lowerCaseLetters;
    if (useNumbers) characterPool += numbers;
    if (useSpecialCharacters) characterPool += specialCharacters;

    if (characterPool.length === 0) throw new Error('No character types selected');

    let password = '';
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characterPool.length);
        password += characterPool[randomIndex];
    }

    return password;
}
