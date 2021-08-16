import { Component, createMemo } from "solid-js";
import classnames from "classnames";

type Props = {
    text: string;
    onClick: () => void;
    state?: any;
    disableStateProp?: string;
};

const Button: Component<Props> = ({ text, onClick, state, disableStateProp }) => {
    const isDisabled = createMemo(() => state && !state[disableStateProp]);

    return (
        <button
            class={classnames(
                "w-full md:w-auto rounded px-3 py-2 my-1 font-semibold border-2 duration-150 border-indigo-500 text-indigo-500",
                { "hover:bg-indigo-500 hover:text-white": !isDisabled() },
                { "disabled:opacity-40 cursor-not-allowed": isDisabled() }
            )}
            disabled={isDisabled()}
            onClick={onClick}
        >
            {text}
        </button>
    );
};

export default Button;
