module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['module:@react-native/babel-preset', 'nativewind/babel'],
    plugins: [
      [
        'module-resolver',
        {
          root: ['./src'],
          alias: {
            '@design': './src/design',
            hooks: './src/lib/hooks',
            utils: './src/lib/utils',
          },
        },
      ],
    ],
  };
};
