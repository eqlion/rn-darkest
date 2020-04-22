import React from "react";
import { View } from "react-native";
import ItemCard from "./ItemCard";
import { card } from "../styles";
import { Paragraph, Subheading } from "react-native-paper";
import data from "../data/trinkets.json";
import { ITrinket } from "../types";

export default () => (
    <View>
        <ItemCard
            name="Clarification"
            description={
                <Paragraph>
                    Below there are some Baker's Trinkets chosen for their
                    outstanding effects. To add one to your game, open the
                    trinket inventory, press Enter and type the trinket name
                    there (it is not case sensitive). The full list of trinkets
                    can be found on the internet.
                </Paragraph>
            }
        />
        {(data as ITrinket[]).map((trinket) => (
            <ItemCard
                key={trinket.name}
                name={trinket.name}
                description={trinket.effects.map((effect, i) => (
                    <Paragraph key={trinket.name + i}>{effect}</Paragraph>
                ))}
            />
        ))}
    </View>
);
