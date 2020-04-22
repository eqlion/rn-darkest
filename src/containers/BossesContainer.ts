import { connect } from "react-redux";

import Bosses from "../components/Bosses";

import { RootState, IBossesProps } from "../types";

const mapStateToProps = (state: RootState) => ({
    location: state.location,
    theme: state.theme,
});

export default connect<IBossesProps, null, {}, RootState>(mapStateToProps)(
    Bosses
);
