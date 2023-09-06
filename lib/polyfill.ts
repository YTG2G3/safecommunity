const f = require('next/dist/compiled/undici')

globalThis.File = globalThis.File ?? f.File;