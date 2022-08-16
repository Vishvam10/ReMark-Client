export const emojisRegex = /(\u00a9|\u00ae|[\u2000-\u3300]|\ud83c[\ud000-\udfff]|\ud83d[\ud000-\udfff]|\ud83e[\ud000-\udfff])/

export const alphanumericRegex = /^[a-z0-9]+$/

export const alphanumericWithUnderscoreRegex = /^[0-9a-zA-Z_]*$/

// NOTE : Underscore and dots are not allowed
export const emailRegex = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/

// Password : Minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character
export const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,}$/

export const alphanumericWithUnderscoreAndEmojisRegex = /^(([a-zA-Z0-9_])|(\u00a9|\u00ae|[\u2000-\u3300]|\ud83c[\ud000-\udfff]|\ud83d[\ud000-\udfff]|\ud83e[\ud000-\udfff]))*$/

export const alphanumericWithSpecialCharactersSpaceAndEmojisRegex = /^(([a-zA-Z0-9_ !$%^&])|(\u00a9|\u00ae|[\u2000-\u3300]|\ud83c[\ud000-\udfff]|\ud83d[\ud000-\udfff]|\ud83e[\ud000-\udfff]))*$/

export const commaSeparatedTagsRegex = /^[a-z0-9_]*[a-z0-9]+( *, *[a-z0-9_]*[a-z0-9]+)*$/