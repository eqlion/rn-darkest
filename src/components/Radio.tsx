import * as React from "react";
import { View } from "react-native";
import { RadioButton, Text } from "react-native-paper";

import { radio } from "../styles";
import { IRadioProps as IProps } from "../types";

export default ({ labels, value, onPress }: IProps) => (
    <View
        style={{
            flexDirection: "column",
            alignItems: "flex-start",
        }}
    >
        <RadioButton.Group
            onValueChange={(value) => onPress(value)}
            value={value}
        >
            {labels.map((label) => (
                <View key={label} style={radio.containerStyle}>
                    <RadioButton value={label.toLowerCase()} />
                    <Text style={{ alignSelf: "center" }}>{label}</Text>
                </View>
            ))}
        </RadioButton.Group>
    </View>
);
