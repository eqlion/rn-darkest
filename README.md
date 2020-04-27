# What is it?

This is a companion app for the Darkest Dungeon game. It contains data on enemies, bosses, recommended parties, provision, and curio interaction tips. At the time of creating of this app, the competition is either plagued with ads, or hard to navigate and use. The app is ad free and solves navigation issues (and packs a night theme too!).

# What is used to build it?

-   TypeScript 3.8.3
-   React Native 61
       -   [react-native-paper](https://github.com/callstack/react-native-paper) for material design compliant UI elements
    -   [react-native-collapsible](https://github.com/oblador/react-native-collapsible) for these sweet accordions
-   Redux for state management
       -   [react-redux](https://github.com/reduxjs/react-redux) for connecting redux store to RN components
       -   [redux-persist](https://github.com/rt2zz/redux-persist) for saving state locally

## How to run it?

You can either install the apk from [here](https://github.com/eqlion/rn-darkest/releases) (don't forget to enable installation from unknown sources), or clone the repo, run `yarn install` to install the dependencies (I assume that you already have expo installed and configured) and run `yarn start` to start the local server.
