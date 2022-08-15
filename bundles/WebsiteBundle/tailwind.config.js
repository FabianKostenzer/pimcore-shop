module.exports = {
    prefix: "tw-",
    content: ["./Resources/views/**/*.html.twig"],
    theme: {
        container: {
            center: true,
            padding: {
                DEFAULT: "1rem",
                sm: "2rem",
                lg: "4rem",
                xl: "5rem",
                "2xl": "6rem",
            },
        },
        colors: {
            transparent: "transparent",
            current: "currentColor",
            brand: "#ff7849",
            blue: "#1fb6ff",
            purple: "#7e5bef",
            pink: "#ff49db",
            orange: "#ff7849",
            green: "#13ce66",
            yellow: "#ffc82c",
            white: "#fff",
            black: "#000",
            gray: {
                100: "#EEEEEE",
                500: "#979797",
                800: "#565656",
            },
        },
        fontFamily: {
            sans: ["Roboto", "sans-serif"],
            serif: ["Merriweather", "serif"],
        },
        extend: {
            fontSize: {
                "2xs": "10px",
            },
        },
    },
    plugins: [],
};
