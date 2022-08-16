import { emailRegex, passwordRegex, alphanumericWithSpecialCharactersSpaceAndEmojisRegex, alphanumericWithUnderscoreRegex, commaSeparatedTagsRegex } from "./regex";

export function validateEmail(email) {
    return emailRegex.test(email);
}

export function validatePassword(password) {
    if(password.length > 20) {
        return false;
    }
    return passwordRegex.test(password);
}

export function validateAuthority(authority) {
    if(authority == "admin" || authority == "user") {
        return true;
    }
    return false;
}

export function validateUsername(username) {
    if(username.length > 0) {
        return alphanumericWithUnderscoreRegex.test(username);
    }
    return false;
}

export function validateAnnotationName(name) {
    if(name.length > 0) {
        return alphanumericWithSpecialCharactersSpaceAndEmojisRegex.test(name);
    }
    return false;
}

export function validateBio(bio) {
    if(bio.length > 80) {
        return false;
    } 
    return true;
}

export function validateTag(tags) {
    return commaSeparatedTagsRegex.test(tags)
}