import { connect } from "react-redux";
import { changeLocation, changeDifficulty } from "../actions";
import RadioGroup from "../components/RadioGroup";

const mapStateToProps = state => ({
    location: state.location,
    difficulty: state.difficulty
});

const mapDispatchToProps = {
    changeLocation,
    changeDifficulty
};
export default connect(mapStateToProps, mapDispatchToProps)(RadioGroup);
