import React, { useState } from "react";
import { View } from "react-native";
import {
    Title,
    Subheading,
    Paragraph,
    Caption,
    List,
    Searchbar,
} from "react-native-paper";

import ItemCard from "./ItemCard";
import { card } from "../styles";
import { capitalize } from "../utils";
import { icon } from "../../assets/images";
interface ICuriosParams {
    location: string;
    theme: boolean;
}
interface ICurio {
    name: string;
    location: string[];
    use: { item: string; result: string | string[] }[];
}

interface IItemCard extends JSX.Element {
    name: string;
    location: string[];
    description: JSX.Element[];
    theme: boolean;
    image: boolean;
    key: string;
}
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

export default ({ location, theme }: ICuriosParams) => {
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
            const curioLocation = curio.location;
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
                    location={curioLocation}
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
