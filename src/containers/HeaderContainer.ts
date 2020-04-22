import { connect } from "react-redux";
import { changeTheme } from "../actions";
import { RootState } from "../reducers";
import Header from "../components/Header";

interface StateProps {
    theme: boolean;
}

interface DispatchProps {
    changeTheme: () => void;
}

const mapStateToProps = (state: RootState) => ({
    theme: state.theme,
});

const mapDispatchToProps = {
    changeTheme,
};

export default connect<StateProps, DispatchProps, {}, RootState>(
    mapStateToProps,
    mapDispatchToProps
)(Header);
