import postcss from 'rollup-plugin-postcss';

export default {
  input: './src/index.scss',
  output: [
    {
      dir: 'dist',
    },
  ],
  plugins: [
    postcss({
      extensions: ['.scss'],
      extract: true,
      minimize: true,
      use: ['sass'],
    }),
  ],
};
