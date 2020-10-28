# Yep App

Server for the smart fucking machine [video](https://twitter.com/yepdev_/status/1321421143283294208)

## Project features

- Fully customizable thrust time, speed, ramp up/down and patterns (for now only time changeable in UI)
- Moves generated based on position graphs generated in Python
- Limit switches handling
- Automatic calibration
- Visible machine state

## What this repo does

- Sending commands to the server
- Displaying waves and sending parameters to the server to generate them
- Displaying machine state

## Architecture

This is just UI app code, it needs other modules to function:

- [yep-machine](https://github.com/yep-dev/yep-machine) - controlling stepper motor and other hardware
- [yep-server](https://github.com/yep-dev/yep-app) - generating moves waves, synchronizing state

![architecture](https://github.com/yep-dev/yep-machine/blob/master/docs/architecture.png?raw=true)


## Running the project

Install dependencies
```
npm install
```

Run the app
```
npm start
```

Open [http://localhost:3042/](http://localhost:3042/)
