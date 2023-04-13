

type AppState = {
  mode: string;
};

const initialState: AppState = {
  mode: localStorage.getItem("mode")
    ? localStorage.getItem("mode")!
    : window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light",
};

type Action = {type: 'SWITCH_MODE'}