module.exports = {
  getTransformModulePath() {
    return require.resolve("./vueTransformerPlugin.js");
  },
  getSourceExts() {
    return ["vue"];
  },
  getPlatforms() {
    return ["dom"];
  },
  getProvidesModuleNodeModules() {
    return ["react-native", "react-native-dom"];
  }
};