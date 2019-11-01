import * as React from "react";
import { Card } from "react-native-paper";

export default Curio = props => {
    const { name, description } = props;

    const images = (name) => {
        switch (name) {
            case "Ancient Artifact":
                return require("../icons/ancient_artifact.thumbnail.png");
            case "Crate":
                return require("../icons/crate.thumbnail.png");
            case "Discarded Pack":
                return require("../icons/discarded_pack.thumbnail.png");
            case "Eldritch Altar":
                return require("../icons/eldritch_altar.thumbnail.png");
            case "Heirloom Chest":
                return require("../icons/heirloom_chest.thumbnail.png");
            case "Sack":
                return require("../icons/sack.thumbnail.png");
            case "Sconce":
                return require("../icons/sconce.thumbnail.png");
            case "Shambler's Altar":
                return require("../icons/shamblers_altar.thumbnail.png");
            case "Unlocked Strongbox":
                return require("../icons/unlocked_strongbox.thumbnail.png");
            case "Alchemy Table":
                return require("../icons/alchemy_table.thumbnail.png");
            case "Altar of Light":
                return require("../icons/altar_of_light.thumbnail.png");
            case "Bookshelf":
                return require("../icons/bookshelf.thumbnail.png");
            case "Confession Booth":
                return require("../icons/confession_booth.thumbnail.png");
            case "Decorative Urn":
                return require("../icons/decorative_urn.thumbnail.png");
            case "Holy Fountain":
                return require("../icons/holy_fountain.thumbnail.png");
            case "Iron Maiden":
                return require("../icons/iron_maiden.thumbnail.png");
            case "Locked Display Cabinet":
                return require("../icons/locked_display_cabinet.thumbnail.png");
            case "Locked Sarcophagus":
                return require("../icons/locked_sarcophagus.thumbnail.png");
            case "Sarcophagus":
                return require("../icons/sarcophagus.thumbnail.png");
            case "Stack of books":
                return require("../icons/stack_of_books.thumbnail.png");
            case "Suit of Armor":
                return require("../icons/suit_of_armor.thumbnail.png");
            case "Bone Altar":
                return require("../icons/bone_altar.thumbnail.png");
            case "Dinner Cart":
                return require("../icons/dinner_cart.thumbnail.png");
            case "Makeshift dining table":
                return require("../icons/makeshift_dining_table.thumbnail.png");
            case "Moonshine Barrel":
                return require("../icons/moonshine_barrel.thumbnail.png");
            case "Occult Scrawlings":
                return require("../icons/occult_scrawlings.thumbnail.png");
            case "Pile of Bones":
                return require("../icons/pile_of_bones.thumbnail.png");
            case "Pile of Scrolls":
                return require("../icons/pile_of_scrolls.thumbnail.png");
            case "Rack of Blades":
                return require("../icons/rack_of_blades.thumbnail.png");
            case "Sacrificial Stone":
                return require("../icons/sacrificial_stone.thumbnail.png");
            case "Stack of Books":
                return require("../icons/stack_of_books.thumbnail.png");
            case "Ancient Coffin":
                return require("../icons/ancient_coffin.thumbnail.png");
            case "Beast Carcass":
                return require("../icons/beast_carcass.thumbnail.png");
            case "Eerie Spiderweb":
                return require("../icons/eerie_spiderweb.thumbnail.png");
            case "Left Luggage":
                return require("../icons/left_luggage.thumbnail.png");
            case "Mummified Remains":
                return require("../icons/mummified_remains.thumbnail.png");
            case "Old Tree":
                return require("../icons/old_tree.thumbnail.png");
            case "Pristine Fountain":
                return require("../icons/pristine_fountain.thumbnail.png");
            case "Shallow Grave":
                return require("../icons/shallow_grave.thumbnail.png");
            case "Traveler's Tent":
                return require("../icons/travelers_tent.thumbnail.png");
            case "Troubling Effigy":
                return require("../icons/troubling_effigy.thumbnail.png");
            case "Barnacle Crusted Chest":
                return require("../icons/barnacle_crusted_chest.thumbnail.png");
            case "Bas-Relief":
                return require("../icons/bas_relief.thumbnail.png");
            case "Brackish Tidepool":
                return require("../icons/brackish_tidepool.thumbnail.png");
            case "Eerie Coral":
                return require("../icons/eerie_coral.thumbnail.png");
            case "Fish Idol":
                return require("../icons/fish_idol.thumbnail.png");
            case "Giant Fish Carcass":
                return require("../icons/giant_fish_carcass.thumbnail.png");
            case "Giant Oyster":
                return require("../icons/giant_oyster.thumbnail.png");
            case "Ship's Figurehead":
                return require("../icons/ships_figurehead.thumbnail.png");
        }
    };

    return (
        <Card style={{ margin: 4 }}>
            <Card.Title 
                title={name}
            />
            <Card.Cover
                source={images(name)}
                style={{ height: 400 }}
            />
            <Card.Content>
                {description}
            </Card.Content>
        </Card>
    )
}