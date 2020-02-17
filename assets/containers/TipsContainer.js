import { connect } from "react-redux";

import Tips from "../components/Tips";

const mapStateToProps = state => ({
    location: state.location
});

export default connect(mapStateToProps)(Tips);
