export { RootState } from "../reducers";

type location = "ruins" | "weald" | "cove" | "warrens";
type theme = boolean;
type difficulty = "short" | "medium" | "long";

export interface IAccordionProps {
    theme: theme;
    location: location;
    difficulty: difficulty;
}

export type IMainProps = IAccordionProps;

export interface IDropdownSection {
    title: string;
    content: JSX.Element;
    caption: JSX.Element;
}

export interface IBossesProps {
    location: location;
    theme: boolean;
}

export interface IBoss {
    name: string;
    type: string[];
    location: location;
    size: 1 | 2 | 3 | 4;
    actions: 1 | 2 | 3 | 4;
    variations: [string, string, string];
    stats: {
        hp: [number, number, number];
        hp_hard: [number, number, number];
        dodge: [number, number, number];
        speed: [number, number, number];
        prot: [number, number, number];
        stealth: [string, string, string];
    };
    resistances: {
        stun: [number, number, number];
        blight: [number, number, number];
        bleed: [number, number, number];
        debuff: [number, number, number];
        move: [number, number, number];
    };
    strategy: [string, string][];
    trophy: {
        name: string;
        effects: string[];
    };
}

export interface ICuriosProps {
    location: location;
    theme: theme;
}

export interface ICurio {
    name: string;
    location: location[];
    use: { item: string; result: string | string[] }[];
}

export interface IEvent {
    name: string;
    effect: string;
}

export interface ICategory {
    category: string;
    events: IEvent[];
}

export type IHeaderProps = IHeaderState & IHeaderDispatch;

export interface IHeaderState {
    theme: theme;
}

export interface IHeaderDispatch {
    changeTheme: () => void;
}

export interface IItemCardProps {
    name: string;
    description: JSX.Element[] | JSX.Element;
    theme?: theme;
    image?: number;
}

export interface IProvisionProps {
    location: location;
    difficulty: difficulty;
}

interface IProvisionDifficulty {
    logs?: number;
    food: number;
    shovel: number;
    bondage: number;
    herb: number;
    key: number;
    water?: number;
    antivenom?: 1;
    torch: number;
}

export interface IProvisionItem {
    location: location;
    provision: IProvisionDifficulty[];
}
export type ProvisionKeys = keyof IProvisionDifficulty;

export interface IRadioProps {
    labels: string[];
    value: string;
    onPress: (value: any) => void;
}

export interface IRadioGroupState {
    location: location;
    difficulty: difficulty;
}
export interface IRadioGroupDispatch {
    changeLocation: (location: location) => void;
    changeDifficulty: (difficulty: difficulty) => void;
}

export type IRadioGroupProps = IRadioGroupState & IRadioGroupDispatch;

export interface ITipsProps {
    location: location;
}

export interface IDataInstance {
    location: location;
    Effective: string[][];
    Ineffective?: string[][];
    Dangers: string[][];
    enemies: string[];
}

export interface ITrinket {
    name: string;
    effects: string[];
}
