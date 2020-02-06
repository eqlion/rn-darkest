import * as React from "react";
import { Card } from "react-native-paper";
import icon from "../icons";

export default Curio = props => {
    const { name, description } = props;

    return (
        <Card style={{ margin: 4 }}>
            <Card.Title title={name} />
            <Card.Cover source={icon(name)} style={{ height: 400 }} />
            <Card.Content>{description}</Card.Content>
        </Card>
    );
};
