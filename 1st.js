//const program = 'deno'

//take from cmd line arguments
const program = Deno.args[0]

if (program === 'deno') {
    console.log('🦕 is born');
}
else {
    console.log('👉🏻 upgrade yourself ');
}

setTimeout(() =>{
    console.log('Hello, deno')
    console.table(Deno.metrics());
}, 1000);

// Prints the metrics between javascript and rust
//console.table(Deno.metrics());