import * as React from "react";
import { View } from "react-native";
import { Title, Subheading, Paragraph, Caption } from "react-native-paper";

import ItemCard from "./ItemCard";

export default Curios = props => {
    const { location, query, theme } = props;

    const data = require("../data/curios.json");

    const search = query.toLowerCase();
    let curios = [];
    for (let curio of data) {
        if (
            curio["location"].includes(location) &&
            (!search || curio["name"].toLowerCase().includes(search))
        ) {
            curios.push(curio);
        }
    }

    const capitalize = word => word.charAt(0).toUpperCase() + word.substring(1);

    const renderCards = curios => {
        if (!curios.length) {
            return <Paragraph style={styles.text}>Nothing found!</Paragraph>;
        }
        const cards = [];
        for (let curio of curios) {
            const name = curio["name"];
            const use = curio["use"];
            const description = [];
            for (let item_ of use) {
                const item = item_["item"];
                const results = [];
                if (item === "nothing") {
                    for (let result of item_["result"]) {
                        results.push(
                            <Paragraph key={result} style={styles.result}>
                                {result}
                            </Paragraph>
                        );
                    }
                } else {
                    results.push(
                        <Paragraph key={item_["result"]} style={styles.result}>
                            {item_["result"]}
                        </Paragraph>
                    );
                }
                description.push(
                    <View key={item}>
                        <Subheading style={styles.item}>
                            {format(item)}
                        </Subheading>
                        <View>{results}</View>
                    </View>
                );
            }
            cards.push(
                <ItemCard
                    name={name}
                    key={name}
                    description={description}
                    theme={theme}
                    image={true}
                />
            );
        }
        return cards;
    };

    const format = name => {
        switch (name) {
            case "nothing":
                return "Nothing";
            case "key":
                return "Skeleton Key";
            case "herb":
                return "Medicinal Herb";
            case "water":
                return "Holy Water";
            case "torch":
                return "Torch";
            case "shovel":
                return "Shovel";
            case "antivenom":
                return "Antivenom";
            default:
                return "Dog Treats";
        }
    };

    return (
        <View>
            <View style={styles.text}>
                <Title>Curios</Title>
                <Caption>{capitalize(location)}</Caption>
            </View>
            {renderCards(curios)}
        </View>
    );
};

const styles = {
    text: {
        marginLeft: 20,
        marginTop: 16,
        marginBottom: 10
    },
    result: {
        marginLeft: 20
    },
    item: {
        fontWeight: "bold"
    }
};
