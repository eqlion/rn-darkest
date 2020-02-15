import { connect } from "react-redux";

import Provision from "../components/Provision";

const mapStateToProps = state => ({
    location: state.location,
    difficulty: state.difficulty
});

export default connect(mapStateToProps)(Provision);
