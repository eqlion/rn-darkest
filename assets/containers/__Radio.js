import * as React from "react";
import { View } from "react-native";
import { RadioButton, Text } from "react-native-paper";

export default class Radio extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: props.labels[0].toLowerCase()
        };
    }

    _renderButtons = () => {
        return this.props.labels.map(label => (
            <View key={label} style={styles.containerStyle}>
                <RadioButton value={label.toLowerCase()} />
                <Text style={{ alignSelf: "center" }}>{label}</Text>
            </View>
        ));
    };

    _handlePress = value => {
        // console.log(value);
        this.setState({ value });
        this.props.handler(value);
    };

    render() {
        return (
            <View
                style={{
                    flexDirection: "column",
                    alignItems: "flex-start"
                }}
            >
                <RadioButton.Group
                    onValueChange={this._handlePress}
                    value={this.state.value}
                >
                    {this._renderButtons()}
                </RadioButton.Group>
            </View>
        );
    }
}

const styles = {
    containerStyle: {
        padding: 5,
        justifyContent: "flex-start",
        flexDirection: "row",
        position: "relative"
        // flex: 1
    }
};
