import { connect } from "react-redux";

import { RootState } from "../reducers";

import Provision from "../components/Provision";

interface StateProps {
    location: string;
    difficulty: string;
}

const mapStateToProps = (state: RootState) => ({
    location: state.location,
    difficulty: state.difficulty,
});

export default connect<StateProps, null, {}, RootState>(mapStateToProps)(
    Provision
);
