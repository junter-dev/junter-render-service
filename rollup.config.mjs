import typescript from '@rollup/plugin-typescript';
import commonjs from '@rollup/plugin-commonjs';
export default {
    input: 'src/service.ts',
    output: {
        file: 'build/bundle.js',
        format: 'cjs'
    },
    plugins: [
        typescript({compilerOptions: {module: 'CommonJS'}}),
        commonjs({extensions: ['.js', '.ts']})
    ]
};