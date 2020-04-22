import * as React from "react";
import { Card } from "react-native-paper";

import { cardCover, card } from "../styles";
import { IItemCardProps as IProps } from "../types";

export default ({ name, description, theme, image }: IProps) => (
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
