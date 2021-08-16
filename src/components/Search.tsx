import { Component, Accessor } from "solid-js";

import { swapiResp } from "../store";

import Button from "./ui/Button";
import { Input } from "./ui/Input";

type Props = {
    onClick: (pn: number) => () => void;
    onSearch: (evt: KeyboardEvent) => void;
    searchName: Accessor<string>;
};

export const Search: Component<Props> = ({ onClick, onSearch, searchName }) => {
    return (
        <div class="w-full flex flex-col md:flex-row items-center justify-between mb-6">
            <Button
                text="previous"
                onClick={onClick(-1)}
                state={swapiResp}
                disableStateProp="previous"
            />
            <Input value={searchName} onKeyUp={onSearch} />
            <Button text="next" onClick={onClick(1)} state={swapiResp} disableStateProp="next" />
        </div>
    );
};
