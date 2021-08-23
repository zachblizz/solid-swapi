import { Component, For, onMount, createSignal } from "solid-js";

import { getChars, state } from "../store";

import CharCard from "./CharCard";
import { Search } from "./Search";

import Loading from "./ui/Loading";

const Characters: Component = () => {
    let page = 1;
    onMount(getChars);

    const [searchName, setSearchName] = createSignal("");

    function onPageClick(p: number) {
        return function () {
            page = Math.max(page + p, 1);
            getChars(`?page=${page}`);
        };
    }

    function onSearch({ key, target }) {
        if (key.toLowerCase() === "enter") {
            getChars(`?search=${searchName()}`);

            return;
        }

        setSearchName(target.value);
    }

    return (
        <div class="w-3/4 sm:w-3/4 lg:w-2/6 flex flex-col items-center">
            <Search onClick={onPageClick} onSearch={onSearch} searchName={searchName} />
            <div class="w-full grid grid-cols-1 md:grid-cols-3 gap-4">
                <For each={state.results} fallback={<Loading msg="loading chars..." />}>
                    {(char) => <CharCard char={char} />}
                </For>
            </div>
        </div>
    );
};

export default Characters;
