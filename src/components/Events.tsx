import React, { useState } from "react";
import { View } from "react-native";
import { Searchbar, Paragraph, Subheading } from "react-native-paper";

import ItemCard from "./ItemCard";

import { card } from "../styles";
import { ICategory } from "../types";

import data from "../data/events.json";

export default () => {
    const [query, setQuery] = useState<string>("");

    const [pnq, nnq, pta, nta, xp, sp] = (data as ICategory[]).map((i) =>
        i.events
            .filter((event) =>
                event.name.toLowerCase().includes(query.toLocaleLowerCase())
            )
            .map((event) => (
                <View key={event.name}>
                    <Subheading style={card.subheading}>
                        {event.name}
                    </Subheading>
                    <Paragraph style={card.result}>{event.effect}</Paragraph>
                </View>
            ))
    );
    return (
        <>
            <Searchbar
                placeholder="Search events"
                onChangeText={(text) => setQuery(text)}
                value={query}
                style={{ marginHorizontal: 4, marginBottom: 4 }}
            />
            <ItemCard
                name="Positive next quest"
                description={
                    pnq.length !== 0 ? (
                        pnq
                    ) : (
                        <Paragraph>Nothing found!</Paragraph>
                    )
                }
            />
            <ItemCard
                name="Negative next quest"
                description={
                    nnq.length !== 0 ? (
                        nnq
                    ) : (
                        <Paragraph>Nothing found!</Paragraph>
                    )
                }
            />
            <ItemCard
                name="Positive town activities"
                description={
                    pta.length !== 0 ? (
                        pta
                    ) : (
                        <Paragraph>Nothing found!</Paragraph>
                    )
                }
            />
            <ItemCard
                name="Negative town activities"
                description={
                    nta.length !== 0 ? (
                        nta
                    ) : (
                        <Paragraph>Nothing found!</Paragraph>
                    )
                }
            />
            <ItemCard
                name="Resolve XP and Heroes"
                description={
                    xp.length !== 0 ? xp : <Paragraph>Nothing found!</Paragraph>
                }
            />
            <ItemCard
                name="Special events"
                description={
                    sp.length !== 0 ? sp : <Paragraph>Nothing found!</Paragraph>
                }
            />
        </>
    );
};
