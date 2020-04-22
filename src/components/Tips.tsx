import * as React from "react";
import { View } from "react-native";
import { Paragraph, Subheading } from "react-native-paper";

import ItemCard from "./ItemCard";
import { card } from "../styles";
import data from "../data/tips.json";

interface IDataInstance {
    location: "ruins" | "weald" | "cove" | "warrens";
    Effective: string[][];
    Ineffective?: string[][];
    Dangers: string[][];
}

export default ({ location }: { location: string }) => {
    const current = (data as IDataInstance[]).filter(
        (i) => i.location === location
    )[0];

    const effective = current.Effective;
    const ineffective = current.Ineffective;
    const dangers = current.Dangers;

    const parseEfficiency = (e: string[][]) => {
        const tips = [];
        for (let item of e) {
            const reason = item[0];
            const result = item[1];
            tips.push(
                <View key={reason}>
                    <Subheading style={card.subheading}>{reason}</Subheading>
                    <Paragraph style={card.result}>{result}</Paragraph>
                </View>
            );
        }
        return <View>{tips}</View>;
    };
    return (
        <View>
            <View>
                <ItemCard
                    name="Effective"
                    description={parseEfficiency(effective)}
                />
                {ineffective && (
                    <ItemCard
                        name="Ineffective"
                        description={parseEfficiency(ineffective)}
                    />
                )}
                <ItemCard
                    name="Dangers"
                    description={parseEfficiency(dangers)}
                />
            </View>
        </View>
    );
};
