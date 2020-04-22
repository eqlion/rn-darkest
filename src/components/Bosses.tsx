import React from "react";
import { View } from "react-native";
import ItemCard from "./ItemCard";
import { card } from "../styles";
import data from "../data/bosses.json";
import { Paragraph, Subheading, DataTable, Caption } from "react-native-paper";
import { bossImage } from "../../assets/images";
import { capitalize } from "../utils";
interface IProps {
    location: string;
    theme: boolean;
}

interface IBoss {
    name: string;
    type: string[];
    location: "ruins" | "weald" | "cove" | "warrens";
    size: 1 | 2 | 3 | 4;
    actions: 1 | 2 | 3 | 4;
    variations: [string, string, string];
    stats: {
        hp: [number, number, number];
        hp_hard: [number, number, number];
        dodge: [number, number, number];
        speed: [number, number, number];
        prot: [number, number, number];
        stealth: [string, string, string];
    };
    resistances: {
        stun: [number, number, number];
        blight: [number, number, number];
        bleed: [number, number, number];
        debuff: [number, number, number];
        move: [number, number, number];
    };
    strategy: [string, string][];
    trophy: {
        name: string;
        effects: string[];
    };
}

export default ({ location, theme }: IProps) => {
    const currentBosses = (data as IBoss[]).filter(
        (i) => i.location === location
    );

    const parseBoss = (boss: IBoss) => {
        let {
            name,
            type,
            size,
            variations,
            actions,
            stats,
            resistances,
            strategy,
            trophy,
        } = boss;

        const { hp, hp_hard, dodge, speed, prot, stealth } = stats;
        const { stun, bleed, blight, debuff, move } = resistances;
        const image = bossImage(name);
        const description = (
            <>
                <Paragraph>
                    Type: {type.map((t) => capitalize(t)).join(", ")}
                </Paragraph>
                <Paragraph>Size: {size}</Paragraph>
                <Paragraph>Actions: {actions}</Paragraph>
                <Subheading style={card.subheading}>Stats</Subheading>
                <DataTable>
                    <DataTable.Header>
                        <DataTable.Title>Variation</DataTable.Title>
                        {variations.map((v, i) => (
                            <DataTable.Title key={name + i + "vars"} numeric>
                                {v}
                            </DataTable.Title>
                        ))}
                    </DataTable.Header>
                    <DataTable.Row>
                        <DataTable.Cell>HP</DataTable.Cell>
                        {hp.map((v, i) => (
                            <DataTable.Cell key={name + i + "hp"} numeric>
                                {v}
                            </DataTable.Cell>
                        ))}
                    </DataTable.Row>
                    <DataTable.Row>
                        <DataTable.Cell>HP (Hard*)</DataTable.Cell>
                        {hp_hard.map((v, i) => (
                            <DataTable.Cell key={name + i + "hp_hard"} numeric>
                                {v}
                            </DataTable.Cell>
                        ))}
                    </DataTable.Row>
                    <DataTable.Row>
                        <DataTable.Cell>Dodge</DataTable.Cell>
                        {dodge.map((v, i) => (
                            <DataTable.Cell key={name + i + "dodge"} numeric>
                                {v}
                            </DataTable.Cell>
                        ))}
                    </DataTable.Row>
                    <DataTable.Row>
                        <DataTable.Cell>Speed</DataTable.Cell>
                        {speed.map((v, i) => (
                            <DataTable.Cell key={name + i + "speed"} numeric>
                                {v}
                            </DataTable.Cell>
                        ))}
                    </DataTable.Row>
                    <DataTable.Row>
                        <DataTable.Cell>PROT</DataTable.Cell>
                        {prot.map((v, i) => (
                            <DataTable.Cell key={name + i + "prot"} numeric>
                                {v}
                            </DataTable.Cell>
                        ))}
                    </DataTable.Row>
                    <DataTable.Row>
                        <DataTable.Cell>Stealth</DataTable.Cell>
                        {stealth.map((v, i) => (
                            <DataTable.Cell key={name + i + "stealth"} numeric>
                                {v}
                            </DataTable.Cell>
                        ))}
                    </DataTable.Row>
                </DataTable>
                <Caption>* — on Stygian or Bloodmoon difficulties</Caption>
                <Subheading style={card.subheading}>Resistances</Subheading>
                <DataTable>
                    <DataTable.Row>
                        <DataTable.Cell>Stun</DataTable.Cell>
                        {stun.map((v, i) => (
                            <DataTable.Cell key={name + i + "stun"} numeric>
                                {v}
                            </DataTable.Cell>
                        ))}
                    </DataTable.Row>
                    <DataTable.Row>
                        <DataTable.Cell>Bleed</DataTable.Cell>
                        {bleed.map((v, i) => (
                            <DataTable.Cell key={name + i + "bleed"} numeric>
                                {v}
                            </DataTable.Cell>
                        ))}
                    </DataTable.Row>
                    <DataTable.Row>
                        <DataTable.Cell>Blight</DataTable.Cell>
                        {blight.map((v, i) => (
                            <DataTable.Cell key={name + i + "blight"} numeric>
                                {v}
                            </DataTable.Cell>
                        ))}
                    </DataTable.Row>
                    <DataTable.Row>
                        <DataTable.Cell>Debuff</DataTable.Cell>
                        {debuff.map((v, i) => (
                            <DataTable.Cell key={name + i + "debuff"} numeric>
                                {v}
                            </DataTable.Cell>
                        ))}
                    </DataTable.Row>
                    <DataTable.Row>
                        <DataTable.Cell>Move</DataTable.Cell>
                        {move.map((v, i) => (
                            <DataTable.Cell key={name + i + "move"} numeric>
                                {v}
                            </DataTable.Cell>
                        ))}
                    </DataTable.Row>
                </DataTable>
                <Subheading style={card.subheading}>Strategy</Subheading>
                {strategy.map((v, i) => (
                    <View key={name + v[0]}>
                        <Paragraph>
                            {i + 1}. {v[0]}
                        </Paragraph>
                        <Paragraph style={card.result}>{v[1]}</Paragraph>
                    </View>
                ))}
                <Subheading style={card.subheading}>Trophy</Subheading>
                <Paragraph>{trophy.name}</Paragraph>
                {trophy.effects.map((v, i) => (
                    <View key={name + "trophyEffect" + i}>
                        <Paragraph style={card.result}>{v}</Paragraph>
                    </View>
                ))}
            </>
        );

        return (
            <ItemCard
                key={name}
                name={name}
                description={description}
                theme={theme}
                image={image}
            />
        );
    };

    return <View>{currentBosses.map((boss) => parseBoss(boss))}</View>;
};
