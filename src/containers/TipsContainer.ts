import { connect } from "react-redux";

import { RootState } from "../reducers";
import Tips from "../components/Tips";

interface StateProps {
    location: string;
}

const mapStateToProps = (state: RootState) => ({
    location: state.location,
});

export default connect<StateProps, null, {}, RootState>(mapStateToProps)(Tips);
