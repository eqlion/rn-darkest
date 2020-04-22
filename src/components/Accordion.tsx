import React, { useState } from "react";
import Accordion from "react-native-collapsible/Accordion";
import { View, TouchableOpacity } from "react-native";
import { Title, Caption } from "react-native-paper";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

import Curios from "../containers/CuriosContainer";
import Tips from "../containers/TipsContainer";
import Provision from "../containers/ProvisionContainer";
import Bosses from "../containers/BossesContainer";

import Events from "../components/Events";

import { capitalize } from "../utils";

import { card } from "../styles";

interface ISection {
    title: string;
    content: JSX.Element;
}

interface IProps {
    location: string;
    difficulty: string;
    theme: boolean;
}

const icons = ["briefcase", "lightbulb", "shape", "sword", "bell"];

export default (props: IProps) => {
    const SECTIONS = [
        {
            title: "Provision",
            content: <Provision />,
        },
        {
            title: "Tips",
            content: <Tips />,
        },
        {
            title: "Curio",
            content: <Curios />,
        },
        {
            title: "Bosses",
            content: <Bosses />,
        },
        {
            title: "Town events",
            content: <Events />,
        },
    ];
    const [activeSections, setActiveSections] = useState<number[]>([]);

    const _renderHeader = (
        section: ISection,
        index: number,
        isActive: boolean
    ) => {
        return (
            <View
                style={{
                    ...card.text,
                    flex: 1,
                    alignItems: "center",
                    justifyContent: "space-between",
                    flexDirection: "row",
                }}
            >
                <View
                    style={{
                        flex: 1,
                        flexDirection: "row",
                        alignItems: "center",
                    }}
                >
                    <Icon
                        name={icons[index]}
                        size={25}
                        color={props.theme ? "black" : "white"}
                    />
                    <View style={{ marginHorizontal: 16 }}>
                        <Title>{section.title}</Title>
                        <Caption>
                            {capitalize(props.location)}
                            {section.title === "Provision"
                                ? " — " + capitalize(props.difficulty)
                                : ""}
                        </Caption>
                    </View>
                </View>
                <Icon
                    name={isActive ? "chevron-up" : "chevron-down"}
                    size={25}
                    color={props.theme ? "black" : "white"}
                />
            </View>
        );
    };

    const _renderContent = (section: ISection) => {
        return section.content;
    };

    const _updateSections = (newActiveSections: number[]) =>
        setActiveSections(newActiveSections);

    return (
        <Accordion
            sections={SECTIONS}
            activeSections={activeSections}
            renderHeader={_renderHeader}
            renderContent={_renderContent}
            onChange={_updateSections}
            touchableComponent={TouchableOpacity}
            expandMultiple={true}
        />
    );
};
