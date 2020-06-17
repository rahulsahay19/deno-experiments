async function postData() {
    const response = await fetch("https://reqres.in/api/users", {
        method: "POST",
        body: JSON.stringify({name: "Rahul Sahay", designation: "Developer"})
    });

const body = await response.json();
console.log(body);
} 

await postData();