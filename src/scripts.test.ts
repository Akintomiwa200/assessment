import { generatePassword, PasswordOptions } from './Test';

describe('generatePassword', () => {
    test('should generate a password of the specified length', () => {
        const options: PasswordOptions = { length: 10 };
        const password = generatePassword(options);
        expect(password.length).toBe(10);
    });

    test('should throw an error if length is less than 1', () => {
        const options: PasswordOptions = { length: 0 };
        expect(() => generatePassword(options)).toThrow('Password length must be at least 1');
    });

    test('should generate a password with only uppercase letters', () => {
        const options: PasswordOptions = { length: 10, useUpperCase: true, useLowerCase: false, useNumbers: false, useSpecialCharacters: false };
        const password = generatePassword(options);
        expect(password).toMatch(/^[A-Z]+$/);
    });

    test('should generate a password with only lowercase letters', () => {
        const options: PasswordOptions = { length: 10, useUpperCase: false, useLowerCase: true, useNumbers: false, useSpecialCharacters: false };
        const password = generatePassword(options);
        expect(password).toMatch(/^[a-z]+$/);
    });

    test('should generate a password with only numbers', () => {
        const options: PasswordOptions = { length: 10, useUpperCase: false, useLowerCase: false, useNumbers: true, useSpecialCharacters: false };
        const password = generatePassword(options);
        expect(password).toMatch(/^[0-9]+$/);
    });

    test('should generate a password with only special characters', () => {
        const options: PasswordOptions = { length: 10, useUpperCase: false, useLowerCase: false, useNumbers: false, useSpecialCharacters: true };
        const password = generatePassword(options);
        expect(password).toMatch(/^[!@#$%^&*()_+\[\]{}|;:,.<>?]+$/);
    });
});
