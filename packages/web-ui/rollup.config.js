import ts from '@wessberg/rollup-plugin-ts';
import svgr from '@svgr/rollup';
import resolve from '@rollup/plugin-node-resolve';
import json from '@rollup/plugin-json';

export default {
  input: {
    'web-ui': 'src/index.ts',
  },
  output: {
    dir: 'dist',
    format: 'esm',
    sourcemap: true,
  },
  external: [
    '@emotion/core',
    'classnames',
    'node-vibrant',
    'polished',
    'react',
  ],
  plugins: [
    resolve(),
    json(),
    svgr({
      babel: false,
      include: ['**/*.svg', '../**/*.svg', '../../**/*.svg'],
    }),
    ts({
      transpiler: 'babel',
    }),
  ],
};
