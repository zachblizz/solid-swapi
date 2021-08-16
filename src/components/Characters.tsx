import { Component, For, onMount, createMemo, createSignal } from "solid-js";

import { getChars, swapiResp } from "../store";

import CharCard from "./CharCard";
import { Search } from "./Search";
import Loading from "./ui/Loading";

const Characters: Component = () => {
    let page = 1;
    onMount(getChars);

    const [searchName, setSearchName] = createSignal("");

    const isLoading = createMemo(() => swapiResp.isLoading);

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

    if (isLoading()) return <Loading msg="loading chars..." />;

    return (
        <div class="w-3/4 sm:w-3/4 lg:w-2/6 flex flex-col items-center">
            <Search onClick={onPageClick} onSearch={onSearch} searchName={searchName} />
            <div class="w-full grid grid-cols-1 md:grid-cols-3 gap-4">
                <For each={swapiResp.results}>
                    {(char) => <CharCard char={char} />}
                </For>
            </div>
        </div>
    );
};

export default Characters;
