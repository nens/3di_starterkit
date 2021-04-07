const createSimulation = async function () {
  const body = {
    name:"v2_bergermeer_simple_infil_no_grndwtr_2021-04-06T144924",
    threedimodel:"575", // id of the threedi model
    organisation:"b08433fa47c1401eb9cbd4156034c679", // uuid of your organisation
    start_datetime:"2021-04-06T12:49:24.063Z", // current time
    duration: 60*60, // 1 hour
  }
  const simulationResponse = await fetch("https://api.staging.3di.live/v3.0/simulations/", {
    method: 'POST', 
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body),
  });
  const simulationObj = await simulationResponse.json();

  // initialize simulation
  const actionResponse = await fetch(`https://api.staging.3di.live/v3.0/simulations/${simulationObj.id}/actions/`, {
    method: 'POST', 
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      name:"initialize",
      timeout:1800
    }),
  });
  const actionObj = await actionResponse.json();
  return simulationObj;
} 