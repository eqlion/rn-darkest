import * as React from "react";
import { Card } from "react-native-paper";
import icon from "../icons";

export default ItemCard = props => {
    const { name, description, theme, image } = props;
    if (image) {
        return (
            <Card style={{ margin: 4 }}>
                <Card.Title title={name} />
                <Card.Cover source={icon(name)} style={style(theme)} />
                <Card.Content>{description}</Card.Content>
            </Card>
        );
    } else {
        return (
            <Card style={{ margin: 4 }}>
                <Card.Title title={name} />
                <Card.Content>{description}</Card.Content>
            </Card>
        );
    }
};

const style = theme => ({
    backgroundColor: theme ? "white" : "#1E1E1E",
    flex: 1,
    alignSelf: "center",
    aspectRatio: 1,
    resizeMode: "contain"
});
