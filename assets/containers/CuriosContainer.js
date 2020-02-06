import { connect } from "react-redux";

import Curios from "../components/Curios";

const mapStateToProps = state => ({
    location: state.location,
    query: state.query
});

export default connect(mapStateToProps)(Curios);
