import { connect } from "react-redux";

import { RootState, ITipsProps } from "../types";

import Tips from "../components/Tips";

const mapStateToProps = (state: RootState) => ({
    location: state.location,
});

export default connect<ITipsProps, null, {}, RootState>(mapStateToProps)(Tips);
