import * as React from 'react';
import { View } from 'react-native';
import { Title, Subheading, Paragraph, Caption } from 'react-native-paper';

import Curio from "./Curio"

export default Curios = props => {
    const { curios, location } = props;
    
    const capitalize = word => word.charAt(0).toUpperCase() + word.substring(1);

    const _renderCards = () => {
        if (!curios.length) {
            return (
                <Paragraph>Nothing found!</Paragraph>
            )
        }
        const cards = [];
        for (let curio of curios) {
            const name = curio["name"];
            const use = curio["use"];
            const description = [];
            for (let item_ of use) {
                const item = item_["item"];
                const results = [];
                if (item === "nothing") {
                    for (let result of item_["result"]) {
                        results.push(<Paragraph key={result}>{result}</Paragraph>)
                    }
                } else {
                    results.push(<Paragraph key={item_["result"]}>{item_["result"]}</Paragraph>);
                }
                description.push(<View key={item}><Subheading>{_format(item)}</Subheading><View>{results}</View></View>);
            }
            cards.push(<Curio name={name} key={name} description={description}/>);
        }
        return cards;
    }

    const _format = name => {
        switch(name) {
            case "nothing":
                return "Nothing";
            case "key":
                return "Skeleton Key";
            case "herb":
                return "Medicinal Herb";
            case "water":
                return "Holy Water";
            case "torch":
                return "Torch";
            case "shovel":
                return "Shovel";
            case "antivenom":
                return "Antivenom";
            default:
                return "Dog Treats";
        }
    }


    return (
        <View>
            <View style={styles.text}>
                <Title>Curios</Title>
                <Caption>{capitalize(location)}</Caption>
            </View>
            {_renderCards()}
        </View>
    )
}

const styles = {
    text: {
        marginLeft: 20,
        marginTop: 16,
        marginBottom: 10
    }
}