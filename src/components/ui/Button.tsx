import { Component } from "solid-js";
import classnames from "classnames";

type Props = {
    text: string;
    onClick: () => void;
    isDisabled?: boolean;
};

const Button: Component<Props> = (props) => {
    return (
        <button
            class={classnames(
                "w-full md:w-auto rounded px-3 py-2 my-1 font-semibold border-2 duration-150 border-indigo-500 text-indigo-500",
                { "hover:bg-indigo-500 hover:text-white": !props.isDisabled },
                { "disabled:opacity-40 cursor-not-allowed": props.isDisabled }
            )}
            disabled={props.isDisabled}
            onClick={props.onClick}
        >
            {props.text}
        </button>
    );
};

export default Button;
