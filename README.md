# 3di_starterkit
This starterkit can be used as an example on how to setup the waterdepth websocket of the [3di API](https://api.3di.live/v3.0/).  

The code in `/dist/index.html` is a working example in simple form.  

It is best to see the code in action by following below instructions.

## More resources

- More information on the [3di API](https://api.3di.live/v3.0/)  can also be found in the [3di-swagger-docs](https://api.3di.live/v3.0/swagger) or in the [3di-docs](https://docs.3di.live/).  

- Another good way to see the 3di-API in action is also through the [3di-livesite](https://3di.live/).  

  When opening the developer-console "Network" tab in your browser it is possible to follow the content of each API call.  

- Are you planning to create your own JavaScript solution for 3di ?  

  If you decide to use [TypeScript](https://www.typescriptlang.org/) then it is possible to use our generated type-definitions from [here](https://github.com/nens/threedi-api-openapi-client) (currently only available for employees of Nelen& Schuurmans).  



## Instructions   

Instructions to run this example code contain of 3 parts:

1. Install, cloning and installing this repo
2. Configuring API calls, by redirecting with etc/hosts file
3. Starting the simulation. By updating the script in this repo for your simulation. 

See step to step guide below.  


## Install

Clone this repo.  
You need a working NPM installation.
Install the NPM dependencies.    
`$ npm install`  

## Configuring the api calls

This example repo is used locally on localhost:3000  

To develop locally on localhost:3000 means that the api calls to 3di.live do not receive the authentication.  

But they need the authentication to work.  

To work around this we can trick the browser by going to "dev.3di.live", but redirect the webtraffic for "dev.3di.live" to your localhost address.

Do this by updating your etc/hosts file as described below for your operating system.   

  

*Note*:  

*The below examples assume that you run the 3di-livesite on "https://3di.live"*

*If you run on another url then the url "dev.3di.live" below needs to be different.*

*For example, if you run the 3di livesite on "https://staging.3di.live", then the url below becomes:*  

*"dev.staging.3di.live"*   





**On ubuntu**  

Add the following line to you `/etc/hosts` file  
`127.0.0.1 dev.3di.live`  



**On Windows** (not tested)

Open notepad as administrator and open the following file:  

c:\Windows\System32\Drivers\etc\hosts  

(this file might be on another location on your computer. Give it a google search)

Add the following line:  

`127.0.0.1 dev.3di.live`  



*Note:*

*These instructions for windows are currently not tested.  Feedback welcome.*  





## Start simulating

1. Now go to "https://3di.live" website and look for any model with "Bergermeer" in the name.  

2. Start a new simulation with that "Bergermeer" model.  

   *Note:*

   *The boundingbox in this example is hardcoded to that of the "Bergermeer" model. Therefore only a Bergermeer model will work.  But you can of course yourself change this code (in /dist/index.html) to test other models.*  

3. Once the simulation has started (you see the map appear in the livesite), hover over the header title. You will see some information including the `Simulation ID: <number>`. Write down this number.  

4. Now edit the file `/dist/index.html` from this repo; change the number on this line:

   `simulationObj.id = 18348;`   

    into the number noted in the previous step.    

   For example if your "Simulation Id" from the previous step was 18538 then this line becomes:  simulationObj.id = 18538;  

   Save the file.  

5. If the url you used for the livesite in step 1 is "https://3di.live", then you can skip this step.  

   If the url you uses for the livesite in step 1 is something else then "https://3di.live", then change in `/dist/index.html` the line:

   `const apiUrl = 'api.3di.live/v3.0';`

   For example if you used the livesite on "https://staging.3di.live", then this line becomes:  

   `const apiUrl = 'api.staging.3di.live/v3.0';`

   Save the file.  

6. Now in this repo run:  

   `$ npm start`  

   Now in your browser go to the url you added to the "etc/hosts" file appended with :3000  

   If you used "dev.3di.live" then go to "dev.3di.live:3000"  

7. The waterdepth image should now show.  Maybe it is an empty waterdepth image.  You can go back to the your simulation in the 3di-livesite to add some rain and play the simulation.  To test if it works you can for example add 300mm rain for 1 hour.  The waterdepth image should show some serious blue patches !



## Code explanation

The code in /dist/index.html is setup very minimal.  

You can find comments within the code about which line does which.    

It is intended to help developers setup their own 3di-solution.  

Currently the only example here is to setup the websocket for waterdepth.  



## Help

Need help with runing this example code?  

Or maybe you like to see more examples? For instance adding rain or showing waterflow in pipes?  

Employees, Customers and partners may create a support ticket [here](https://nelen-schuurmans.topdesk.net/).

Employees may also make a github issue [here](https://github.com/nens/3di_starterkit/issues).