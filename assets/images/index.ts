export const icon = (name: string): number => {
    switch (name) {
        case "Ancient Artifact":
            return require("./curios/ancient_artifact.thumbnail.png");
        case "Crate":
            return require("./curios/crate.thumbnail.png");
        case "Discarded Pack":
            return require("./curios/discarded_pack.thumbnail.png");
        case "Eldritch Altar":
            return require("./curios/eldritch_altar.thumbnail.png");
        case "Heirloom Chest":
            return require("./curios/heirloom_chest.thumbnail.png");
        case "Sack":
            return require("./curios/sack.thumbnail.png");
        case "Sconce":
            return require("./curios/sconce.thumbnail.png");
        case "Shambler's Altar":
            return require("./curios/shamblers_altar.thumbnail.png");
        case "Unlocked Strongbox":
            return require("./curios/unlocked_strongbox.thumbnail.png");
        case "Alchemy Table":
            return require("./curios/alchemy_table.thumbnail.png");
        case "Altar of Light":
            return require("./curios/altar_of_light.thumbnail.png");
        case "Bookshelf":
            return require("./curios/bookshelf.thumbnail.png");
        case "Confession Booth":
            return require("./curios/confession_booth.thumbnail.png");
        case "Decorative Urn":
            return require("./curios/decorative_urn.thumbnail.png");
        case "Holy Fountain":
            return require("./curios/holy_fountain.thumbnail.png");
        case "Iron Maiden":
            return require("./curios/iron_maiden.thumbnail.png");
        case "Locked Display Cabinet":
            return require("./curios/locked_display_cabinet.thumbnail.png");
        case "Locked Sarcophagus":
            return require("./curios/locked_sarcophagus.thumbnail.png");
        case "Sarcophagus":
            return require("./curios/sarcophagus.thumbnail.png");
        case "Stack of books":
            return require("./curios/stack_of_books.thumbnail.png");
        case "Suit of Armor":
            return require("./curios/suit_of_armor.thumbnail.png");
        case "Bone Altar":
            return require("./curios/bone_altar.thumbnail.png");
        case "Dinner Cart":
            return require("./curios/dinner_cart.thumbnail.png");
        case "Makeshift dining table":
            return require("./curios/makeshift_dining_table.thumbnail.png");
        case "Moonshine Barrel":
            return require("./curios/moonshine_barrel.thumbnail.png");
        case "Occult Scrawlings":
            return require("./curios/occult_scrawlings.thumbnail.png");
        case "Pile of Bones":
            return require("./curios/pile_of_bones.thumbnail.png");
        case "Pile of Scrolls":
            return require("./curios/pile_of_scrolls.thumbnail.png");
        case "Rack of Blades":
            return require("./curios/rack_of_blades.thumbnail.png");
        case "Sacrificial Stone":
            return require("./curios/sacrificial_stone.thumbnail.png");
        case "Stack of Books":
            return require("./curios/stack_of_books.thumbnail.png");
        case "Ancient Coffin":
            return require("./curios/ancient_coffin.thumbnail.png");
        case "Beast Carcass":
            return require("./curios/beast_carcass.thumbnail.png");
        case "Eerie Spiderweb":
            return require("./curios/eerie_spiderweb.thumbnail.png");
        case "Left Luggage":
            return require("./curios/left_luggage.thumbnail.png");
        case "Mummified Remains":
            return require("./curios/mummified_remains.thumbnail.png");
        case "Old Tree":
            return require("./curios/old_tree.thumbnail.png");
        case "Pristine Fountain":
            return require("./curios/pristine_fountain.thumbnail.png");
        case "Shallow Grave":
            return require("./curios/shallow_grave.thumbnail.png");
        case "Traveler's Tent":
            return require("./curios/travelers_tent.thumbnail.png");
        case "Troubling Effigy":
            return require("./curios/troubling_effigy.thumbnail.png");
        case "Barnacle Crusted Chest":
            return require("./curios/barnacle_crusted_chest.thumbnail.png");
        case "Bas-Relief":
            return require("./curios/bas_relief.thumbnail.png");
        case "Brackish Tidepool":
            return require("./curios/brackish_tidepool.thumbnail.png");
        case "Eerie Coral":
            return require("./curios/eerie_coral.thumbnail.png");
        case "Fish Idol":
            return require("./curios/fish_idol.thumbnail.png");
        case "Giant Fish Carcass":
            return require("./curios/giant_fish_carcass.thumbnail.png");
        case "Giant Oyster":
            return require("./curios/giant_oyster.thumbnail.png");
        case "Ship's Figurehead":
            return require("./curios/ships_figurehead.thumbnail.png");
        default:
            return fileMissing(name);
    }
};

export const bossImage = (name: string): number => {
    switch (name) {
        case "Necromancer":
            return require("./bosses/Necromancer.png");
        case "Prophet":
            return require("./bosses/Prophet.png");
        case "Hag":
            return require("./bosses/Hag.png");
        case "Brigand Pounder":
            return require("./bosses/Brigand.png");
        case "Swine":
            return require("./bosses/Swine.png");
        case "Flesh":
            return require("./bosses/Flesh.png");
        case "Siren":
            return require("./bosses/Siren.png");
        case "Crew":
            return require("./bosses/Crew.png");
        default:
            return fileMissing(name);
    }
};

const fileMissing = (f: string): never => {
    throw new Error(`${f} is missing!`);
};
