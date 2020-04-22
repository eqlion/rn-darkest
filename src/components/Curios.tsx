import React, { useState } from "react";
import { View } from "react-native";
import { Subheading, Paragraph, Searchbar } from "react-native-paper";

import ItemCard from "./ItemCard";

import { card } from "../styles";
import { ICuriosProps as IProps, ICurio } from "../types";

import { icon } from "../../assets/images";

const format = (name: string) => {
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

export default ({ location, theme }: IProps) => {
    const [query, setQuery] = useState<string>("");

    const data = require("../data/curios.json");

    const search = query.toLowerCase();
    let curios: ICurio[] = [];
    for (let curio of data) {
        if (
            curio["location"].includes(location) &&
            (!search || curio["name"].toLowerCase().includes(search))
        ) {
            curios.push(curio);
        }
    }

    const renderCards = (curios: ICurio[]): JSX.Element[] => {
        if (!curios.length) {
            return [<Paragraph style={card.text}>Nothing found!</Paragraph>];
        }
        const cards = [];
        for (let curio of curios) {
            const name = curio["name"];
            const use = curio["use"];
            const description = [];
            for (let item_ of use) {
                const item = item_["item"];
                const results = [];
                if (typeof item_["result"] === "object") {
                    for (let result of item_["result"]) {
                        results.push(
                            <Paragraph key={result} style={card.result}>
                                {result}
                            </Paragraph>
                        );
                    }
                } else {
                    results.push(
                        <Paragraph key={item_["result"]} style={card.result}>
                            {item_["result"]}
                        </Paragraph>
                    );
                }
                description.push(
                    <View key={item}>
                        <Subheading style={card.subheading}>
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
                    image={icon(name)}
                />
            );
        }
        return cards;
    };
    return (
        <View>
            <Searchbar
                placeholder="Search curio"
                onChangeText={(query) => setQuery(query)}
                value={query}
                style={{ marginHorizontal: 4, marginBottom: 4 }}
            />
            {renderCards(curios)}
        </View>
    );
};
