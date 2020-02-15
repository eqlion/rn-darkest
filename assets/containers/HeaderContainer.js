import { connect } from "react-redux";
import { changeQuery, changeTheme } from "../actions";

import Header from "../components/Header";

const mapStateToProps = state => ({
    theme: state.theme
});

const mapDispatchToProps = {
    changeQuery,
    changeTheme
};
export default connect(mapStateToProps, mapDispatchToProps)(Header);
