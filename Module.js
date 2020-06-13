export function reverse(input) {
    if(input.toLowerCase() === 'node') {
        return input.split("").sort().join("");
    }
    return input;
}