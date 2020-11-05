module.exports = {
  "stories": [
    "../../stories/**/*.stories.@(js|ts)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials"
  ],
  "refs": {
    react: {
      title: "React",
      url: "http://localhost:7007"
    }
  }
}