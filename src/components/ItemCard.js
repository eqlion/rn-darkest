import * as React from "react";
import { Card } from "react-native-paper";

import icon from "../icons";
import { cardCover, card } from "../styles";

export default ItemCard = ({ name, description, theme, image }) => {
    if (image) {
        return (
            <Card style={card.card}>
                <Card.Title title={name} />
                <Card.Cover
                    source={icon(name)}
                    style={
                        theme
                            ? { ...cardCover.common, ...cardCover.light }
                            : { ...cardCover.common, ...cardCover.dark }
                    }
                />
                <Card.Content>{description}</Card.Content>
            </Card>
        );
    } else {
        return (
            <Card style={card.card}>
                <Card.Title title={name} />
                <Card.Content>{description}</Card.Content>
            </Card>
        );
    }
};
