import { Component } from "solid-js";

const Loading: Component<{msg: string}> = ({ msg }) => {
  return (
    <div
      class="text-indigo-500 font-semibold text-md"
    >{msg}</div>
  )
}

export default Loading;
