import * as React from "react";
import { View } from "react-native";
import { Card, Title } from "react-native-paper";

import Radio from "./Radio";
import { radio } from "../styles";

export default RadioGroup = ({
    changeLocation,
    changeDifficulty,
    location,
    difficulty
}) => {
    return (
        <Card style={radio.card}>
            <Card.Content style={radio.containerStyle}>
                <View style={radio.radioButtons}>
                    <Title>Location</Title>
                    <Radio
                        labels={["Ruins", "Warrens", "Weald", "Cove"]}
                        onPress={changeLocation}
                        value={location}
                    />
                </View>
                <View style={radio.radioButtons}>
                    <Title>Difficulty</Title>
                    <Radio
                        labels={["Short", "Medium", "Long"]}
                        onPress={changeDifficulty}
                        value={difficulty}
                    />
                </View>
            </Card.Content>
        </Card>
    );
};
