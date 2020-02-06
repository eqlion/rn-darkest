import * as React from "react";
import { View } from "react-native";
import { Card, Title } from "react-native-paper";
import { connect } from "react-redux";
import { changeLocation, changeDifficulty, changeQuery } from "../actions";

import Radio from "../components/Radio";

const Choice = props => {
    const { location, difficulty } = props;

    const changeLocation = location => {
        props.changeLocation(location);
    };

    const changeDifficulty = difficulty => {
        props.changeDifficulty(difficulty);
    };

    return (
        <Card style={styles.card}>
            <Card.Content style={styles.containerStyle}>
                <View style={styles.radioButtons}>
                    <Title>Location</Title>
                    <Radio
                        labels={["Ruins", "Warrens", "Weald", "Cove"]}
                        onPress={changeLocation}
                        value={location}
                    />
                </View>
                <View style={styles.radioButtons}>
                    <Title>Difficulty</Title>
                    <Radio
                        labels={["Short", "Medium", "Long"]}
                        onPress={changeDifficulty}
                        value={difficulty}
                    />
                </View>
            </Card.Content>
        </Card>
    );
};

const mapStateToProps = state => ({
    location: state.location,
    difficulty: state.difficulty
});

const mapDispatchToProps = {
    changeLocation,
    changeDifficulty
};
export default connect(mapStateToProps, mapDispatchToProps)(Choice);

const styles = {
    containerStyle: {
        padding: 5,
        justifyContent: "space-around",
        flexDirection: "row",
        alignItems: "flex-start",
        position: "relative"
    },
    radioButtons: {
        alignItems: "center",
        flexDirection: "column"
    },
    card: {
        margin: 4
    }
};
