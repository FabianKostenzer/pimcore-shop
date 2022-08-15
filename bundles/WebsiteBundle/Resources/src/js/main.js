import * as components from "./components";

const Loader = window.Loader || {
    vars: {},
    methods: {
        initializeComponents: () => {
            const componentNodes =
                Array.from(document.querySelectorAll("[data-component]")) || [];

            componentNodes.forEach((node) => {
                const componentName = node.getAttribute("data-component");

                let props = node.getAttribute("data-props");
                if (props) props = JSON.parse(props);

                /* eslint-disable no-new */
                console.log(node);
                new components[componentName](node, props);
            });
        },
    },
};

// load/initialize complex js-components
document.addEventListener("DOMContentLoaded", () =>
    Loader.methods.initializeComponents()
);
