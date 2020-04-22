import { connect } from "react-redux";

import Provision from "../components/Provision";

import { RootState, IProvisionProps } from "../types";

const mapStateToProps = (state: RootState) => ({
    location: state.location,
    difficulty: state.difficulty,
});

export default connect<IProvisionProps, null, {}, RootState>(mapStateToProps)(
    Provision
);
