import { build } from 'esbuild';

build({
  entryPoints: ['src/main.js'],
  bundle: true,
  outfile: 'public/bundle.js',
  minify: true,
  sourcemap: true,
  target: ['es2015']
}).catch(() => process.exit(1));
