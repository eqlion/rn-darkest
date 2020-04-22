import { connect } from "react-redux";

import { RootState } from "../reducers";

import Bosses from "../components/Bosses";

interface StateProps {
    location: string;
    theme: boolean;
}

const mapStateToProps = (state: RootState) => ({
    location: state.location,
    theme: state.theme,
});

export default connect<StateProps, null, {}, RootState>(mapStateToProps)(
    Bosses
);
