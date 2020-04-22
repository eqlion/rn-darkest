import * as React from "react";
import { View } from "react-native";
import { RadioButton, Text } from "react-native-paper";

import { radio } from "../styles";

interface Props {
    labels: string[];
    value: string;
    onPress: () => void;
}

export default ({ labels, value, onPress }: Props) => (
    <View
        style={{
            flexDirection: "column",
            alignItems: "flex-start",
        }}
    >
        <RadioButton.Group onValueChange={onPress} value={value}>
            {labels.map((label) => (
                <View key={label} style={radio.containerStyle}>
                    <RadioButton value={label.toLowerCase()} />
                    <Text style={{ alignSelf: "center" }}>{label}</Text>
                </View>
            ))}
        </RadioButton.Group>
    </View>
);
