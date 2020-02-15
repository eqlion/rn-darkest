import * as React from "react";
import { Card } from "react-native-paper";
import icon from "../icons";

export default Curio = props => {
    const { name, description, theme } = props;

    return (
        <Card style={{ margin: 4 }}>
            <Card.Title title={name} />
            <Card.Cover source={icon(name)} style={style(theme)} />
            <Card.Content>{description}</Card.Content>
        </Card>
    );
};

const style = theme => ({
    backgroundColor: theme ? "white" : "#1E1E1E",
    // height: 150,
    flex: 1,
    alignSelf: "center",
    aspectRatio: 1,
    resizeMode: "contain"
});
