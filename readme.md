# Blueprint React

# WebPack vs SWC vs ESBuild

This project will be used to compare build time between several react built tools.
Currently the result is as follow. Using alternative build system is 50% fastr compared to webpack.

### yarn build

```
 5.1234s   assets by path *.js 3.62 MiB
   0.0004s     asset main.3cb4d43afed30995432e.js 3.61 MiB [emitted] [immutable] (name: main)
   0.0001s     asset src_pages_Home_index_tsx.7228cb98a9496c891d40.js 7.64 KiB [emitted] [immutable]
   0.0001s     asset src_pages_About_index_tsx.cc4b9df21e4e4c69d87a.js 2.86 KiB [emitted] [immutable]
   0.0002s   asset 3a94c6378e5c4ee797c2.jpg 4.27 KiB [emitted] [immutable] [from: src/assets/images/logo.jpg]
   0.0002s   asset ./index.html 431 bytes [emitted]
   0.0002s   runtime modules 6.17 KiB 10 modules
   0.0001s   modules by path ./node_modules/ 1.37 MiB 60 modules
   0.0001s   modules by path ./src/ 3.42 KiB (javascript) 4.27 KiB (asset)
   0.0001s     modules by path ./src/store/ 550 bytes
   0.0001s       ./src/store/index.ts 188 bytes [built] [code generated]
   0.0001s       ./src/store/slice/post_slice.ts 362 bytes [built] [code generated]
   0.0001s     modules by path ./src/pages/ 1.31 KiB
   0.0000s       ./src/pages/Home/index.tsx 993 bytes [built] [code generated]
   0.0000s       ./src/pages/About/index.tsx 352 bytes [built] [code generated]
   0.0002s     ./src/app.tsx 1.07 KiB [built] [code generated]
   0.0000s     ./src/services/posts.ts 465 bytes [built] [code generated]
   0.0001s     ./src/assets/images/logo.jpg 42 bytes (javascript) 4.27 KiB (asset) [built] [code generated]
   0.0427s   webpack 5.74.0 compiled successfully in 4245 ms
   0.0002s

     Total   5.1713s
✨  Done in 5.41s.
```

### yarn esbuild

```
2.1039s   assets by path *.js 1.44 MiB
   0.0005s     asset main.8c77764620b8727f72db.js 1.44 MiB [emitted] [immutable] (name: main) 1 related asset
   0.0002s     asset src_pages_Home_index_tsx.73ba04d75407a50f0c20.js 3.77 KiB [emitted] [immutable] 1 related asset
   0.0002s     asset src_pages_About_index_tsx.ef4d1a7090ca24769761.js 2 KiB [emitted] [immutable] 1 related asset
   0.0002s   asset 3a94c6378e5c4ee797c2.jpg 4.27 KiB [emitted] [immutable] [from: src/assets/images/logo.jpg]
   0.0002s   asset ./index.html 431 bytes [emitted]
   0.0002s   runtime modules 6.17 KiB 10 modules
   0.0002s   modules by path ./node_modules/ 1.37 MiB 60 modules
   0.0001s   modules by path ./src/ 3.49 KiB (javascript) 4.27 KiB (asset)
   0.0003s     modules by path ./src/store/ 517 bytes
   0.0001s       ./src/store/index.ts 179 bytes [built] [code generated]
   0.0002s       ./src/store/slice/post_slice.ts 338 bytes [built] [code generated]
   0.0002s     modules by path ./src/pages/ 1.38 KiB
   0.0000s       ./src/pages/Home/index.tsx 1020 bytes [built] [code generated]
   0.0000s       ./src/pages/About/index.tsx 392 bytes [built] [code generated]
   0.0000s     ./src/app.tsx 1.2 KiB [built] [code generated]
   0.0000s     ./src/services/posts.ts 379 bytes [built] [code generated]
   0.0000s     ./src/assets/images/logo.jpg 42 bytes (javascript) 4.27 KiB (asset) [built] [code generated]
   0.0212s   webpack 5.74.0 compiled successfully in 1216 ms
   0.0002s

     Total   2.1303s
✨  Done in 2.38s.
```

### yarn swcbuild

```
2.2685s   assets by path *.js 3.72 MiB
   0.0005s     asset main.fc799be3cb423c3f1375.js 3.71 MiB [emitted] [immutable] (name: main)
   0.0002s     asset src_pages_Home_index_tsx.5ff2848d9e7dc472fa9d.js 8.74 KiB [emitted] [immutable]
   0.0001s     asset src_pages_About_index_tsx.7ccb1123a663fd89605b.js 3.33 KiB [emitted] [immutable]
   0.0001s   asset 3a94c6378e5c4ee797c2.jpg 4.27 KiB [emitted] [immutable] [from: src/assets/images/logo.jpg]
   0.0000s   asset ./index.html 431 bytes [emitted]
   0.0000s   runtime modules 6.17 KiB 10 modules
   0.0001s   modules by path ./node_modules/ 1.41 MiB 62 modules
   0.0001s   modules by path ./src/ 4.47 KiB (javascript) 4.27 KiB (asset)
   0.0000s     modules by path ./src/store/ 548 bytes
   0.0000s       ./src/store/index.ts 187 bytes [built] [code generated]
   0.0000s       ./src/store/slice/post_slice.ts 361 bytes [built] [code generated]
   0.0000s     modules by path ./src/pages/ 1.98 KiB
   0.0000s       ./src/pages/Home/index.tsx 1.45 KiB [built] [code generated]
   0.0000s       ./src/pages/About/index.tsx 549 bytes [built] [code generated]
   0.0000s     ./src/app.tsx 1.46 KiB [built] [code generated]
   0.0000s     ./src/services/posts.ts 455 bytes [built] [code generated]
   0.0000s     ./src/assets/images/logo.jpg 42 bytes (javascript) 4.27 KiB (asset) [built] [code generated]
   0.0243s   webpack 5.74.0 compiled successfully in 1301 ms
   0.0002s

     Total   2.2959s
✨  Done in 2.55s.
```
