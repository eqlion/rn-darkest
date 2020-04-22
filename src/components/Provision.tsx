import * as React from "react";
import { View } from "react-native";
import { Card, DataTable } from "react-native-paper";

import { card } from "../styles";
import { capitalize } from "../utils";

interface IProps {
    location: "ruins" | "warrens" | "weald" | "cove";
    difficulty: "short" | "medium" | "long";
}

export default ({ location, difficulty }: IProps) => {
    const formatItemName = (item: string, number: number) => {
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
                const singular = capitalize(item);
                const plural = singular + "s";
                return number == 1 ? singular : plural;
        }
    };

    const data = require("../data/provision.json");
    const entry = data[location][difficulty];
    const table = Object.keys(entry).map((key) => (
        <DataTable.Row key={key}>
            <DataTable.Cell>{formatItemName(key, entry[key])}</DataTable.Cell>
            <DataTable.Cell numeric>{entry[key]}</DataTable.Cell>
        </DataTable.Row>
    ));

    return (
        <View>
            <Card style={card.card}>
                <Card.Content>
                    <DataTable>
                        <DataTable.Header>
                            <DataTable.Title>Item</DataTable.Title>
                            <DataTable.Title numeric>№</DataTable.Title>
                        </DataTable.Header>
                        {table}
                    </DataTable>
                </Card.Content>
            </Card>
        </View>
    );
};
