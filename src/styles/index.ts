import { StyleSheet } from "react-native";
import { DefaultTheme, DarkTheme } from "react-native-paper";

// MainScreen

export const lightTheme = {
    ...DefaultTheme,
    dark: true,
    colors: {
        ...DefaultTheme.colors,
        primary: "#ffc107",
        accent: "#ff7043",
    },
};

export const darkTheme = {
    ...DarkTheme,
    colors: {
        ...DarkTheme.colors,
        primary: "#ffcc80",
        accent: "#ffab91",
    },
};

// Curios, Tips, Provision

export const card = StyleSheet.create({
    text: {
        marginHorizontal: 20,
        marginTop: 16,
        marginBottom: 10,
    },
    result: {
        marginLeft: 20,
    },
    subheading: {
        fontWeight: "bold",
    },
    card: {
        margin: 4,
    },
    searchbar: { marginHorizontal: 4, marginBottom: 4 },
});

export const accordion = StyleSheet.create({
    container: {
        marginVertical: 8,
        marginHorizontal: 20,
        alignItems: "center",
        justifyContent: "space-between",
        flexDirection: "row",
    },
    iconTitleContainer: {
        flexDirection: "row",
        alignItems: "center",
    },
    title: { marginHorizontal: 16 },
});

export const cardCover = StyleSheet.create({
    common: {
        alignSelf: "center",
        aspectRatio: 1,
        resizeMode: "contain",
    },
    light: {
        backgroundColor: "white",
    },
    dark: {
        backgroundColor: "#1E1E1E",
    },
});

// RadioGroup. Radio

export const radio = StyleSheet.create({
    buttonLabel: {
        padding: 5,
        justifyContent: "space-around",
        flexDirection: "row",
        alignItems: "flex-start",
    },

    radioButtons: {
        alignItems: "center",
        flexDirection: "column",
    },
    card: {
        margin: 4,
    },
    label: { alignSelf: "center" },
    container: {
        flexDirection: "column",
        alignItems: "flex-start",
    },
});
