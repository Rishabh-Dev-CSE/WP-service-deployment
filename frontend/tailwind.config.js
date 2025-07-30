// tailwind.config.js
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            animation: {
                moveLine: "moveLine 10s linear infinite",
                waveMotion: 'waveMotion 20s linear infinite',
            },
            keyframes: {
                moveLine: {
                    "0%": { transform: "translateX(0)" },
                    "100%": { transform: "translateX(-50%)" },
                },
                waveMotion: {
                    '0%': { transform: 'translateX(0)' },
                    '100%': { transform: 'translateX(-50%)' },
                },
            },
        },

    },
    plugins: [],
};
