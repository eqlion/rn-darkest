import * as React from "react";
import { View, StatusBar } from "react-native";
import { Toolbar } from "react-native-material-ui";
import { connect } from "react-redux";

import { changeQuery } from "../actions";

const STATUSBAR_HEIGHT = StatusBar.currentHeight;

class Header extends React.Component {
    search = (query = "") => {
        this.props.changeQuery(query);
    };

    render() {
        return (
            <View>
                <View style={styles.statusbar} />
                <Toolbar
                    style={styles.toolbar}
                    centerElement="Prepare"
                    searchable={{
                        autoFocus: true,
                        placeholder: "Curio",
                        onChangeText: this.search,
                        onSearchClosed: this.search
                    }}
                />
            </View>
        );
    }
}

// const mapStateToProps = state => ({
//     query: state.query
// });

const mapDispatchToProps = {
    changeQuery
};

export default connect(null, mapDispatchToProps)(Header);

const styles = {
    statusbar: {
        height: STATUSBAR_HEIGHT,
        backgroundColor: "#ffcc80"
    },
    toolbar: {
        container: {
            backgroundColor: "#ffcc80"
        }
    }
};
