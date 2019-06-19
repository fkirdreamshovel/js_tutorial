//returns array of username and domain name from an email address

function emailParts (string) {
return string.toLowerCase().split("@");
}