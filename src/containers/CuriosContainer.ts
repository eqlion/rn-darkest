import { connect } from "react-redux";

import Curios from "../components/Curios";

import { RootState, ICuriosProps } from "../types";

const mapStateToProps = (state: RootState) => ({
    location: state.location,
    theme: state.theme,
});

export default connect<ICuriosProps, null, {}, RootState>(mapStateToProps)(
    Curios
);
