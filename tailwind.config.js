module.exports = {
    mode: "jit",
    purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
    darkMode: false,
    theme: {
        extend: {
            colors: {
                primary: {
                    light: "#D5EAE3",
                    "extra-light": "#F1F8F6",
                    dark: "#D4E9E2"
                },
                secondary: {
                    light: "#F3F1E7",
                    dark: "#008248",
                },
                gold: "#cba258",
            },
            backgroundImage: theme => ({
                'star-pattern-small': "url('./Images/hero-mobile.webp')",
                'star-pattern-big': "url('./Images/hero-desktop.webp')",
            }),
            minHeight: {
                small: "78vh",
                bgSmall: "50%",
                imgS: "56px"
            },
            maxHeight: {
                medium: "60%",
            },
            width: {
                bgSmall: "50%",
                verySm: "2px",
                sidebar: "80%"
            },
            maxWidth: {
                small: "50px",
                medium: "110px"
            },
            padding: {
                "eighty": "80%",
                "fifty": "50%",
                "forty-eight": "48%",
            },
            screens: {
                smMd: "375px",
                mdLg: "782px",
                full: "1025px",
            },
            backgroundPosition: {
                half: "50%",
            },
            backgroundSize: {
                full: "100%",
            },
            fontFamily: {
                default: "'Helvetica Neue', Helvetica, Arial, 'sans-serif'",
            },
            spacing: {
                "18": "4.5rem"
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
}