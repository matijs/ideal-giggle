import babel from '@rollup/plugin-babel';
import commonjs from '@rollup/plugin-commonjs';
import json from '@rollup/plugin-json';
import nodeExternals from 'rollup-plugin-node-externals';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import nodeResolve from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';

export default {
  input: './src/index.ts',
  output: [
    {
      dir: 'dist',
      format: 'es',
      sourcemap: true,
    },
  ],
  plugins: [
    peerDepsExternal(),
    commonjs(),
    nodeExternals(),
    nodeResolve({ browser: true }),
    json(),
    typescript({
      tsconfig: 'tsconfig.build.json',
      outputToFilesystem: false,
    }),
    babel({
      presets: ['@babel/preset-react'],
      babelHelpers: 'runtime',
      exclude: ['node_modules/**'],
      extensions: ['.ts', '.tsx'],
      plugins: ['@babel/plugin-transform-runtime'],
    }),
  ],
};
