import * as log from "https://deno.land/std/log/mod.ts";
import * as _ from "https://raw.githubusercontent.com/lodash/lodash/4.17.15-es/lodash.js";
interface Launch {
  flightNumber: number;
  mission: string;
  rocket: string;
  customers: Array<string>;
}

const launches = new Map<number, Launch>();
export async function downloadLaunchData() {
  log.info("Downloading launch data");
  const response = await fetch("https://api.spacexdata.com/v3/launches", {
    method: "GET",
  });

  if (!response.ok) {
    log.warning("Problem downloading launch data");
  } else {
    log.info("Downloaded launch data");
  }
  // since its returning prmoise, hence promise applied
  const launchData = await response.json();
  //console.log(launchData);
  for (const launch of launchData) {

    const payloads = launch["rocket"]["second_stage"]["payloads"];
   // console.log(payloads);
    const customers = _.flatMap(payloads, (payload: any) => {
        return payload["customers"];
    });
    //console.log(customers);
    const flightData = {
      flightNumber: launch["flight_number"],
      mission: launch["mission_name"],
      rocket: launch["rocket"]["rocket_name"],
      customers: customers
    };
    launches.set(flightData.flightNumber, flightData);
    log.info(JSON.stringify(flightData));
  }
}

if(import.meta.main) {
    await downloadLaunchData();
    // true means its running from the same file. false means its imported via some module
    log.info(JSON.stringify(import.meta));
    log.info(`Downloaded data for ${launches.size} SpaceX launches`);
}
