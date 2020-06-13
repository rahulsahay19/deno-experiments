import { desc, run, task, sh } from "https://deno.land/x/drake@v1.2.2/mod.ts";

desc("Minimal Drake task");
task("task1", [], async function() {
  console.log("Hello from drake");
  await sh("deno run --allow-env 2nd.ts");
});

run()

//to run this, I am just using deno run -A DrakeFile.ts task1. drake is just acting as messanger here, it will run the required permissions for 2nd.ts file.