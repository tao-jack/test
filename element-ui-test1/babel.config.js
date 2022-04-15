module.exports = {
  presets: ["@vue/cli-plugin-babel/preset"],
  Plugin: [
    "component",
    {
      libraryName: "element-ui",
      styleLibraryName: "theme-chalk",
    },
  ],
};
