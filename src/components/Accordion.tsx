import React, { useState } from "react";
import Accordion from "react-native-collapsible/Accordion";
import { View, TouchableOpacity } from "react-native";
import { Title, Caption, Paragraph } from "react-native-paper";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

import Curios from "../containers/CuriosContainer";
import Tips from "../containers/TipsContainer";
import Provision from "../containers/ProvisionContainer";
import Bosses from "../containers/BossesContainer";
import Events from "../components/Events";
import Trinkets from "../components/Triknets";

import { capitalize } from "../utils";

import { accordion } from "../styles";

import {
    IAccordionProps as IProps,
    IDropdownSection as ISection,
} from "../types";

enum icons {
    "briefcase",
    "lightbulb",
    "shape",
    "sword",
    "bell",
    "shield",
}

export default ({ theme, location, difficulty }: IProps) => {
    const color = theme ? "black" : "white";
    const SECTIONS = [
        {
            title: "Provision",
            content: <Provision />,
            caption: (
                <Caption>
                    {capitalize(location) + " — " + capitalize(difficulty)}
                </Caption>
            ),
        },
        {
            title: "Tips",
            content: <Tips />,
            caption: <Caption>{capitalize(location)}</Caption>,
        },
        {
            title: "Curio",
            content: <Curios />,
            caption: <Caption>{capitalize(location)}</Caption>,
        },
        {
            title: "Bosses",
            content: <Bosses />,
            caption: <Caption>{capitalize(location)}</Caption>,
        },
        {
            title: "Town events",
            content: <Events />,
            caption: <Paragraph> </Paragraph>,
        },
        {
            title: "Kickstarter Trinkets",
            content: <Trinkets />,
            caption: <Paragraph> </Paragraph>,
        },
    ];
    const [activeSections, setActiveSections] = useState<number[]>([]);

    const _renderHeader = (
        section: ISection,
        index: number,
        isActive: boolean
    ) => {
        return (
            <View style={accordion.container}>
                <View style={accordion.iconTitleContainer}>
                    <Icon name={icons[index]} size={25} color={color} />
                    <View style={accordion.title}>
                        <Title>{section.title}</Title>
                        {section.caption}
                    </View>
                </View>
                <Icon
                    name={isActive ? "chevron-up" : "chevron-down"}
                    size={25}
                    color={color}
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
            expandMultiple
        />
    );
};
