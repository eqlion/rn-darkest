import { connect } from "react-redux";
import RadioGroup from "../components/RadioGroup";

import { changeLocation, changeDifficulty } from "../actions";

import { RootState, IRadioGroupState, IRadioGroupDispatch } from "../types";

const mapStateToProps = (state: RootState) => ({
    location: state.location,
    difficulty: state.difficulty,
});

const mapDispatchToProps = {
    changeLocation,
    changeDifficulty,
};
export default connect<IRadioGroupState, IRadioGroupDispatch, {}, RootState>(
    mapStateToProps,
    mapDispatchToProps
)(RadioGroup);
