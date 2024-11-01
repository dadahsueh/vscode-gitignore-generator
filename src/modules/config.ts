export const API_URL = "https://www.toptal.com/developers/gitignore/api";
export const ALTERNATIVE_API_URL = "https://gitignore.palarz.pl";
export const FILE_NAME = ".gitignore";

export const MESSAGES = {
    network_error: "There was a problem reaching gitignore.io. Try again.",
    fetching: "Fetching list from gitignore.io...",
    generated: `Your ${FILE_NAME} file has been [action]!`,
    generating: `Generating ${FILE_NAME} file...`,
    save_error: `There was an error while saving ${FILE_NAME} file.`,
    no_selection: `Nothing selected.`,
};

export const PLACEHOLDERS = {
    location: `Where should ${FILE_NAME} file be generated?`,
    override: `${FILE_NAME} file exists. Do you want to override it?`,
    selection_hint: "Select using Space or by clicking",
};

export const USER_RULES =
    "## Custom ###";

export const OVERRIDE_OPTIONS = [
    {
        label: "Update",
        description: `Updates ${FILE_NAME} file keeping existing and user-defined rules`,
    },
    {
        label: "Override",
        description: `Overrides entire ${FILE_NAME} file`,
    },
];
