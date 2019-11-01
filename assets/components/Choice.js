import * as React from "react";
import { View } from "react-native"
import { Card, Title } from "react-native-paper";
import Radio from "./Radio";

export default Choice = props => (
    <Card style={styles.card}>
        <Card.Content style={styles.containerStyle}>
            <View style={styles.radioButtos}>
                <Title>Location</Title>
                <Radio labels={["Ruins", "Warrens", "Weald", "Cove"]} handler={props.firstHandler} />
            </View>
            <View style={styles.radioButtos}>
                <Title>Difficulty</Title>
                <Radio labels={["Short", "Medium", "Long"]} handler={props.secondHandler} />
            </View>
        </Card.Content>
    </Card>
);

const styles = {
    containerStyle: {
        padding: 5,
        justifyContent: "space-around",
        flexDirection: "row",
        alignItems: "flex-start",
        position: "relative",
        
    },
    radioButtos: {
        alignItems: "center",
        flexDirection: "column"
    },
    card: {
        margin: 4
    }
};