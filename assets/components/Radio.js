import * as React from "react";
import { View } from "react-native";
import { RadioButton, Text } from "react-native-paper";

export default Radio = ({ labels, value, onPress }) => {
    const renderButtons = () => {
        return labels.map(label => (
            <View key={label} style={styles.containerStyle}>
                <RadioButton value={label.toLowerCase()} />
                <Text style={{ alignSelf: "center" }}>{label}</Text>
            </View>
        ));
    };

    return (
        <View
            style={{
                flexDirection: "column",
                alignItems: "flex-start"
            }}
        >
            <RadioButton.Group onValueChange={onPress} value={value}>
                {renderButtons()}
            </RadioButton.Group>
        </View>
    );
};

const styles = {
    containerStyle: {
        padding: 5,
        justifyContent: "flex-start",
        flexDirection: "row",
        position: "relative"
        // flex: 1
    }
};
