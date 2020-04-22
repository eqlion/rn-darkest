import { connect } from "react-redux";
import Header from "../components/Header";

import { changeTheme } from "../actions";

import { RootState, IHeaderDispatch, IHeaderState } from "../types";

const mapStateToProps = (state: RootState) => ({
    theme: state.theme,
});

const mapDispatchToProps = {
    changeTheme,
};

export default connect<IHeaderState, IHeaderDispatch, {}, RootState>(
    mapStateToProps,
    mapDispatchToProps
)(Header);
