const { build } = require("esbuild")

const options = {   
    // the entry point file described above   
    entryPoints: ['app.js'],
    // the build folder location described above 
    outfile: 'app.min.js', 
    loader: { '.js': 'jsx' },
    bundle: true,
    minify: true,
    target: ['chrome60', 'firefox60', 'safari11', 'edge20'],
    sourcemap: 'inline'
}

build(options).catch(() => process.exit(1))