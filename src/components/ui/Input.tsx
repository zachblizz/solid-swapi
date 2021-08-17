import { Component, Accessor } from "solid-js";

type Props = {
  onKeyUp: (evt: KeyboardEvent) => void;
  value?: Accessor<string>;
}

export const Input: Component<Props> = ({ value, onKeyUp }) => {
    return (
        <input
            class="rounded focus:border-indigo-500 focus:ring-indigo-700 border-2 border-indigo-500 w-full p-2 mx-3"
            onKeyUp={onKeyUp}
            value={value() ?? ""}
        />
    );
};
