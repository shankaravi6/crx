export const colorTokens = {
  drops: {
    0: "#ffffff",
    50:  "#f2f2f2",
    100: "#fafafc",
    110: "#f0f0f3",
    120: "#e8e8eb",
    150: "#d8d8dc",
    200: "#c8c8cc",
    250: "#b8b8bd",
    300: "#a8a8af",
    400: "#f5f5f7",
    500: "#8f8f94",
    600: "#6f6f74",
    700: "#4f4f54",
    800: "#3f3f42",
    850: "#2f2f32",
    900: "#252527",
    1000: "#1D1D1F",
  },
  adap: {
    0: "#00e6e6",
    100: "#00cccc",
    200: "#00b3b3",
    300:"#009999",
    500: "#008080",
    600:"#006666",
    700:"#004d4d",
    800:"#003333",
    1000:"#001a1a"
  }
};

export const themeSettings = (mode) => {
  return {
    palette: {
      mode: mode,
      ...(mode === "dark"
        ? {
            // palette values for dark mode
            background: {
              high: colorTokens.drops[1000],
              mid: colorTokens.drops[900],
              low: colorTokens.drops[800],
            },
            text: {
              high: colorTokens.drops[100],
              mid: colorTokens.drops[120],
              low: colorTokens.drops[150],
            },
            shadow: {
              high: "rgba(0, 0, 0, 0.35)",
              low: "rgba(0, 0, 0, 0.25)",
            },
          }
        : {
            // palette values for light mode
            background: {
              high: colorTokens.drops[100],
              mid: colorTokens.drops[120],
              low: colorTokens.drops[150],
            },
            text: {
              high: colorTokens.drops[1000],
              mid: colorTokens.drops[900],
              low: colorTokens.drops[800],
            },
            sec: {
              high: colorTokens.adap[800],
              midhigh:colorTokens.adap[700],
              mid: colorTokens.adap[500],
              midlow: colorTokens.adap[300],
              low: colorTokens.adap[100]
            },
            shadow: {
              high: "rgba(0, 0, 0, 0.35)",
              low: "rgba(0, 0, 0, 0.25)",
            },
          }),
    },
  };
};
