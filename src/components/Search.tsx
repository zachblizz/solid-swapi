import { Component, Accessor } from "solid-js";

import { state } from "../store";

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
                isDisabled={!Boolean(state.previous)}
                data-testid="prev-btn"
            />
            <Input value={searchName} onKeyUp={onSearch} data-testid="search-input" />
            <Button
                text="next"
                onClick={onClick(1)}
                isDisabled={!Boolean(state.next)}
                data-testid="prev-btn"
            />
        </div>
    );
};
