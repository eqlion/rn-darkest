import React, { useState } from "react";
import Accordion from "react-native-collapsible/Accordion";
import { View, TouchableOpacity } from "react-native";
import { Title, Caption } from "react-native-paper";
import Icon from "react-native-vector-icons/MaterialIcons";

import Curios from "../containers/CuriosContainer";
import Tips from "../containers/TipsContainer";
import Provision from "../containers/ProvisionContainer";
import Bosses from "../containers/BossesContainer";
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
                <View>
                    <Title>{section.title}</Title>
                    <Caption>
                        {capitalize(props.location)}
                        {section.title === "Provision"
                            ? " — " + capitalize(props.difficulty)
                            : ""}
                    </Caption>
                </View>
                <Icon
                    name={isActive ? "expand-less" : "expand-more"}
                    size={32}
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
