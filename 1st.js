//const program = 'deno'

//take from cmd line arguments
const program = Deno.args[0]

if (program === 'deno') {
    console.log('🦕 is born');
}
else {
    console.log('👉🏻 upgrade yourself ');
}
