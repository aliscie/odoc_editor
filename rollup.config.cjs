import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import {terser} from 'rollup-plugin-terser';
import external from 'rollup-plugin-peer-deps-external';
import postcss from 'rollup-plugin-postcss';
import resolve from '@rollup/plugin-node-resolve';

const packageJson = require('./package.json');

export default {
    input: 'src/components/pages/editor.tsx',
    output: [
        {
            file: packageJson.main,
            format: 'cjs',
            sourcemap: true,
            name: 'react-lib',
            inlineDynamicImports: true,
        },
        {
            file: packageJson.module,
            format: 'esm',
            sourcemap: true,
            inlineDynamicImports: true,

        }
    ],
    plugins: [
        external(),
        resolve(),
        commonjs(),
        typescript({tsconfig: './tsconfig.json'}),
        postcss(),
        terser()
    ]
}
