// import * as React from "react";
import { connect } from "react-redux";
// import { DataTable } from "react-native-paper";

import Provision from "../components/Provision";

// class ProvisionContainer extends React.Component {
//     constructor(props) {
//         super(props);
//         this.location = this.props.location;
//         this.difficulty = this.props.difficulty;
//         this.data = require("../provision.json");
//         this.entry = this.data[this.location][this.difficulty];
//         this.table = Object.keys(this.entry).map(key => (
//             <DataTable.Row key={key}>
//                 <DataTable.Cell>
//                     {this.format(key, this.entry[key])}
//                 </DataTable.Cell>
//                 <DataTable.Cell numeric>{this.entry[key]}</DataTable.Cell>
//             </DataTable.Row>
//         ));
//     }

//     capitalize = word => word.charAt(0).toUpperCase() + word.substring(1);

//     format = (item, number) => {
//         switch (item) {
//             case "food":
//                 return "Food";
//             case "herb":
//                 return "Medicinal Herbs";
//             case "logs":
//                 return "Firewood";
//             case "torch":
//                 return number == 1 ? "Torch" : "Torches";
//             case "key":
//                 return number == 1 ? "Skeleton Key" : "Skeleton Keys";
//             case "water":
//                 return "Holy Water";
//             default:
//                 const single = this.capitalize(item);
//                 const plural = single + "s";
//                 return number == 1 ? single : plural;
//         }
//     };

//     render() {
//         return (
//             <Provision
//                 location={this.capitalize(this.location)}
//                 difficulty={this.capitalize(this.difficulty)}
//                 table={this.table}
//             />
//         );
//     }
// }

const mapStateToProps = state => {
    return {
        location: state.location,
        difficulty: state.difficulty
    };
};

export default connect(mapStateToProps)(Provision);
