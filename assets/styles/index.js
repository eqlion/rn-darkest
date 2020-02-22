import { StatusBar } from "react-native";
import { DefaultTheme, DarkTheme } from "react-native-paper";

const STATUSBAR_HEIGHT = StatusBar.currentHeight;

// MainScreen

export const lightTheme = {
    ...DefaultTheme,
    dark: true,
    colors: {
        ...DefaultTheme.colors,
        primary: "#ffc107",
        accent: "#ff7043"
    }
};

export const darkTheme = {
    ...DarkTheme,
    colors: {
        ...DarkTheme.colors,
        primary: "#ffcc80",
        accent: "#ffab91"
    }
};

// Curios, Tips, Provision

export const card = {
    text: {
        marginLeft: 20,
        marginTop: 16,
        marginBottom: 10
    },
    result: {
        marginLeft: 20
    },
    subheading: {
        fontWeight: "bold"
    },
    card: {
        margin: 4
    }
};

// Header

export const header = {
    common: {
        height: STATUSBAR_HEIGHT
    },
    light: {
        backgroundColor: "#ffcc80"
    },
    dark: {
        backgroundColor: "#121212"
    }
};

// ItemCard

export const cardCover = {
    common: {
        flex: 1,
        alignSelf: "center",
        aspectRatio: 1,
        resizeMode: "contain"
    },
    light: {
        backgroundColor: "white"
    },
    dark: {
        backgroundColor: "#1E1E1E"
    }
};

// RadioGroup. Radio

export const radio = {
    containerStyle: {
        padding: 5,
        justifyContent: "space-around",
        flexDirection: "row",
        alignItems: "flex-start",
        position: "relative"
    },
    radioButtons: {
        alignItems: "center",
        flexDirection: "column"
    },
    card: {
        margin: 4
    }
};
