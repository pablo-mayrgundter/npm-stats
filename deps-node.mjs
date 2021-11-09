import deps from './deps.mjs';
import pkg from './pkgDeps.mjs';
import sizes from './sizes.mjs';

console.log(sizes);
console.log(deps(pkg, sizes));
