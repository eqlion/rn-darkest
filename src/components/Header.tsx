import * as React from "react";
import { Appbar } from "react-native-paper";

// type Props = { changeTheme: () => void; theme: boolean };

interface Props {
    theme: boolean;
    changeTheme: () => void;
}

export default ({ changeTheme, theme }: Props) => {
    return (
        <Appbar.Header>
            <Appbar.Action
                icon={theme ? "brightness-4" : "brightness-7"}
                onPress={changeTheme}
            />
            <Appbar.Content title="Prepare" />
        </Appbar.Header>
    );
};
