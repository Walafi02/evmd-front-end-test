/* module.exports = {
  resolver: {
    assetExts: ['db', 'png', 'ttf'],
  },
}; */
const { getDefaultConfig } = require('@expo/metro-config');

const defaultConfig = getDefaultConfig(__dirname);

defaultConfig.resolver.assetExts.push('db');

module.exports = defaultConfig;