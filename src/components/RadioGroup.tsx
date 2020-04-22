import * as React from "react";
import { View } from "react-native";
import { Card, Title } from "react-native-paper";

import Radio from "./Radio";

import { radio } from "../styles";
import { IRadioGroupProps as IProps } from "../types";

export default ({
    changeLocation,
    changeDifficulty,
    location,
    difficulty,
}: IProps) => {
    return (
        <Card style={radio.card}>
            <Card.Content style={radio.containerStyle}>
                <View style={radio.radioButtons}>
                    <Title>Location</Title>
                    <Radio
                        labels={["Ruins", "Warrens", "Weald", "Cove"]}
                        onPress={(location) => changeLocation(location)}
                        value={location}
                    />
                </View>
                <View style={radio.radioButtons}>
                    <Title>Difficulty</Title>
                    <Radio
                        labels={["Short", "Medium", "Long"]}
                        onPress={(difficulty) => changeDifficulty(difficulty)}
                        value={difficulty}
                    />
                </View>
            </Card.Content>
        </Card>
    );
};
