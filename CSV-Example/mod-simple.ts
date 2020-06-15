import { join } from "https://deno.land/std/path/mod.ts";

async function readFile() {
  const path = join("files", "hello.txt");

  //const data = await Deno.readTextFile("hello.txt");
  const data = await Deno.readTextFile(path);
  console.log(data);
}

await readFile();
