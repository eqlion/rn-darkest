import * as React from "react";
import { View } from "react-native";
import {
    Card,
    Title,
    Paragraph,
    Caption,
    Subheading
} from "react-native-paper";

import ItemCard from "../components/ItemCard";

// TODO: Rewrite Curio component to be usable here

export default Tips = ({ location }) => {
    const capitalize = word => word.charAt(0).toUpperCase() + word.substring(1);

    const data = require("../data/tips.json");

    const effective = data[location].Effective;
    const ineffective = data[location].Ineffective;
    const dangers = data[location].Dangers;

    const parseEfficiency = e => {
        const tips = [];
        for (let item of e) {
            const reason = item[0];
            const result = item[1];
            tips.push(
                <View key={reason}>
                    <Subheading style={style.subheading}>{reason}</Subheading>
                    <Paragraph style={style.result}>{result}</Paragraph>
                </View>
            );
        }
        return <View>{tips}</View>;
    };
    if (ineffective) {
        return (
            <View>
                <View style={style.text}>
                    <Title>Tips</Title>
                    <Caption>{capitalize(location)}</Caption>
                </View>
                <View>
                    <ItemCard
                        name="Effective"
                        description={parseEfficiency(effective)}
                        image={false}
                    />
                    <ItemCard
                        name="Ineffective"
                        description={parseEfficiency(ineffective)}
                        image={false}
                    />
                    <ItemCard
                        name="Dangers"
                        description={parseEfficiency(dangers)}
                        image={false}
                    />
                </View>
            </View>
        );
    } else {
        return (
            <View>
                <View style={style.text}>
                    <Title>Tips</Title>
                    <Caption>{capitalize(location)}</Caption>
                </View>
                <View>
                    <ItemCard
                        name="Effective"
                        description={parseEfficiency(effective)}
                        image={false}
                    />
                    <ItemCard
                        name="Dangers"
                        description={parseEfficiency(dangers)}
                        image={false}
                    />
                </View>
            </View>
        );
    }
};

const style = {
    subheading: {
        fontWeight: "bold"
    },
    text: {
        marginLeft: 20,
        marginTop: 16,
        marginBottom: 10
    },
    result: {
        marginLeft: 20
    }
};
