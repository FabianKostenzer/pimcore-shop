const mix = require("laravel-mix");
const path = require("path");
const tailwindcss = require("tailwindcss");

mix.copyDirectory("Resources/src/assets", "Resources/public/assets")
    .copyDirectory("Resources/src/fonts", "Resources/public/fonts")
    .sass("Resources/src/scss/main.scss", "css")
    .js("Resources/src/js/main.js", "js")
    .setPublicPath("Resources/public/")
    .options({
        postCss: [tailwindcss("./tailwind.config.js")],
    })
    .sourceMaps()
    .options({
        processCssUrls: false,
    })
    .webpackConfig({
        resolve: {
            extensions: [".js", ".json", ".scss", ".css"],
            alias: {
                "@": path.resolve(__dirname),
                "@modules": path.resolve(__dirname, "node_modules"),
                "@components": path.resolve(
                    __dirname,
                    "Resources",
                    "views",
                    "components"
                ),
                "@areabricks": path.resolve(
                    __dirname,
                    "Resources",
                    "views",
                    "Areas"
                ),
                "@scss": path.resolve(__dirname, "Resources", "src", "scss"),
                "@js": path.resolve(__dirname, "Resources", "src", "js"),
            },
        },
        plugins: [],
    });
