// import * as log from 
async function downloadLaunchData() {
   const response = await fetch('https://api.spacexdata.com/v3/launches', {
        method: 'GET'
    });

// since its returning prmoise, hence promise applied
const launchData = await response.json();
console.log(launchData);
}

await downloadLaunchData();