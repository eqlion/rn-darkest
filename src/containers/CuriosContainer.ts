import { connect } from "react-redux";

import { RootState } from "../reducers";

import Curios from "../components/Curios";

interface StateProps {
    location: string;
    theme: boolean;
}

const mapStateToProps = (state: RootState) => ({
    location: state.location,
    theme: state.theme,
});

export default connect<StateProps, null, {}, RootState>(mapStateToProps)(
    Curios
);
