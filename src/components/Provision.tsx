import * as React from "react";
import { View } from "react-native";
import { Card, DataTable } from "react-native-paper";

import { card } from "../styles";
import {
    IProvisionProps as IProps,
    IProvisionItem,
    ProvisionKeys,
} from "../types";

import { capitalize } from "../utils";

import data from "../data/provision.json";

export default ({ location, difficulty }: IProps) => {
    const formatItemName = (item: string, number: number | undefined) => {
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

    const d = (data as IProvisionItem[]).filter(
        (l) => l.location === location
    )[0].provision;
    const entry =
        difficulty === "short" ? d[0] : difficulty === "medium" ? d[1] : d[2];
    const table = Object.keys(entry).map((key) => {
        const num = entry[key as ProvisionKeys];
        return (
            <DataTable.Row key={key}>
                <DataTable.Cell>{formatItemName(key, num)}</DataTable.Cell>
                <DataTable.Cell numeric>{num}</DataTable.Cell>
            </DataTable.Row>
        );
    });

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
