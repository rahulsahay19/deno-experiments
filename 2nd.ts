//printing username by reading env 
//--allow-env will explicitly allow
//--allow-all will enable all permissions to the program, which is a risk 
//--A will enable all permissions to the program, which is a risk 
console.log('Hello, ', Deno.env.get('username'));