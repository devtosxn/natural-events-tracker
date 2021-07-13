# Natural Events Tracker
## Description
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

It fetches events data from the NASA Open API and filters natural wildfires in realtime to plot them on a map.

An onclick event on any of the markers gives more information about the wildfire, as provided by the API

## API Used
NASA Open API (http://eonet.sci.gsfc.nasa.gov/api/v2.1/events)

Source: http://api.nasa.gov

## Dependencies
- Google Map React
- Iconify Library

## How to Run App
Clone the repository by running 
```
git clone https://github.com/devtosxn/natural-events-tracker.git
```
In the project directory, you can run:
```
yarn install
```  
This installs all dependencies into your directory.

Before running the app, generate an API key from the console of your Google Cloud Platform account for the Google Maps API

Create the environment variable, **REACT_APP_API_KEY** in an `.env` file within the root directory and add your key as the value.

The Google Maps interface will not load correctly without it.

In the project directory, you can then run:
```
yarn start
```  
This runs the app in the development mode.
Open the address below to view it in the browser.
```
http://localhost:3000
```



