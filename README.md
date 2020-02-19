# Why?

At the time of creating this app, I could not find a convenient Android app that could supply me with information about Darkest Dungeon (what provision to buy, how to interact with certain curios). Those that exist are ether buggy and slow, or contain a lot of annoying ads, or do not use Google's Material Design guideline. To solve this issue while learning JS and React on practice I decided to create this app.

# Stack

-   React Native
    -   [react-native-paper](https://github.com/callstack/react-native-paper) for all the major ui elements
    -   [react-native-material-ui](https://github.com/xotahal/react-native-material-ui) for the animated header
-   Redux
    -   [react-redux](https://github.com/reduxjs/react-redux) for connecting the components to the store
    -   [redux-persist](https://github.com/rt2zz/redux-persist) to save and load theme preference locally

# TODO

1. [x] Actually integrate Redux

2. [x] Restructure curio interaction outcomes in order to increase clarity

4) [x] Reorganize loading images

5) [x] Resize images properly

6) [x] Add tips on what would be effective during the expedition

7) [x] Add dark theme

8) [x] Save theme preference locally

9) [x] Add icon and loading screen (splash screen) image

10) [ ] (Optional) Refactor the code and file structure
