import * as React from "react";
import { Card } from "react-native-paper";

import { cardCover, card } from "../styles";

interface Props {
    name: string;
    description: JSX.Element[] | JSX.Element;
    theme?: boolean;
    image?: number;
    location?: string[];
}

export default ({ name, description, theme, image }: Props) => (
    <Card style={card.card}>
        <Card.Title title={name} />
        {image && (
            <Card.Cover
                source={image}
                style={
                    theme
                        ? { ...cardCover.common, ...cardCover.light }
                        : { ...cardCover.common, ...cardCover.dark }
                }
            />
        )}
        <Card.Content>{description}</Card.Content>
    </Card>
);
