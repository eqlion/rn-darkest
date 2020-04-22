import * as React from "react";
import { Appbar } from "react-native-paper";

import { IHeaderProps as IProps } from "../types";

export default ({ changeTheme, theme }: IProps) => {
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
