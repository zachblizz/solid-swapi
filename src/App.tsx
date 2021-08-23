import { Component } from "solid-js";

import Characters from "./components/Characters";

const App: Component = () => {
    return (
        <div class="w-full h-full flex flex-col mt-16 items-center" data-testid="fooie">
            <Characters />
        </div>
    );
};

export default App;
