import * as React from "react";
import { View } from "react-native";
import { Card, DataTable, Title, Caption } from "react-native-paper";

export default Provision = props => {
    const { location, difficulty } = props;

    const capitalize = word => word.charAt(0).toUpperCase() + word.substring(1);

    const _formatter = (item, number) => {
        switch (item) {
            case "food":
                return "Food";
            case "herb":
                return "Medicinal Herbs";
            case "logs":
                return "Firewood";
            case "torch":
                return number == 1 ? "Torch" : "Torches";
            case "key":
                return number == 1 ? "Skeleton Key" : "Skeleton Keys";
            case "water":
                return "Holy Water";
            default:
                const single = capitalize(item);
                const plural = single + "s";
                return number == 1 ? single : plural;
        }
    };

    const _Render = () => {
        const data = require("../provision.json");
        const entry = data[location][difficulty];
        return Object.keys(entry).map((key) => (
            <DataTable.Row key={key}>
                <DataTable.Cell>{_formatter(key, entry[key])}</DataTable.Cell>
                <DataTable.Cell numeric>{entry[key]}</DataTable.Cell>
            </DataTable.Row>
        ))
    };

    return (
        
        <View>
            <View style={styles.text}>
                <Title>Provision</Title>
                <Caption>{capitalize(location)} — {capitalize(difficulty)}</Caption>
            </View>
        <Card style={{ margin: 4 }}>
            <Card.Content>
                <DataTable>
                    <DataTable.Header>
                        <DataTable.Title>Item</DataTable.Title>
                        <DataTable.Title numeric>№</DataTable.Title>
                    </DataTable.Header>
                    {_Render()}
                </DataTable>
            </Card.Content>
        </Card>
        </View>
    )
}

const styles = {
    text: {
        marginLeft: 20,
        marginTop: 16,
        marginBottom: 10
    }
}