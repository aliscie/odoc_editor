import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import { terser } from "rollup-plugin-terser";
import external from "rollup-plugin-peer-deps-external";
import postcss from "rollup-plugin-postcss";
import json from "@rollup/plugin-json";
import alias from "@rollup/plugin-alias";
import babel from "@rollup/plugin-babel";
import dynamicImportVars from "@rollup/plugin-dynamic-import-vars";
const packageJson = require("./package.json");

export default {
  input: "./src/components/pages/editor.tsx",
  output: [
    {
      file: packageJson.main,
      format: "cjs",
      sourcemap: true,
      name: "odoc_editor_v2",
      inlineDynamicImports: true,
      exports: "auto",
    },
    {
      file: packageJson.module,
      format: "esm",
      sourcemap: true,
      inlineDynamicImports: true,
      esModule: true,
    },
  ],
  plugins: [
    alias({
      entries: [{ find: "stream", replacement: "readable-stream" }],
    }),
    json(),
    external(),
    resolve(),
    commonjs(),
    typescript({
      tsconfig: "./tsconfig.json",
      noEmit: true, // Add this line
    }),
    // babel({
    //   presets: [
    //     [
    //       "@babel/preset-env",
    //       {
    //         modules: false, // Add this line
    //       },
    //     ],
    //   ],
    //   extensions: [".ts", ".tsx"],
    //   babelHelpers: "bundled", // Add this line
    // }),
    postcss(),
    dynamicImportVars(),
    terser(),
  ],
  external: [
    ...Object.keys(packageJson.peerDependencies || {}),
    ...Object.keys(packageJson.dependencies || {}),
  ],
};
