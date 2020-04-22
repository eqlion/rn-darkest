import { connect } from "react-redux";
import { changeLocation, changeDifficulty } from "../actions";
import { RootState } from "../reducers";
import RadioGroup from "../components/RadioGroup";

interface StateProps {
    location: string;
    difficulty: string;
}

interface DispatchProps {
    changeLocation: (location: string) => void;
    changeDifficulty: (difficulty: string) => void;
}

const mapStateToProps = (state: RootState) => ({
    location: state.location,
    difficulty: state.difficulty,
});

const mapDispatchToProps = {
    changeLocation,
    changeDifficulty,
};
export default connect<StateProps, DispatchProps, {}, RootState>(
    mapStateToProps,
    mapDispatchToProps
)(RadioGroup);
