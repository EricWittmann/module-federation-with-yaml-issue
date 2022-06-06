# module-federation-with-yaml-issue

Reproduction steps:
 1. `npm install ; npm run build` in app2
 2. Receive warning:
```
WARNING in shared module yaml -> C:\Users\Eric\git\other\module-federation-with-yaml-issue\app2\node_modules\yaml\browser\index.js
No version specified and unable to automatically determine one. No version in description file (usually package.json). Add version to description file, or manually specify version in shared config.
```
