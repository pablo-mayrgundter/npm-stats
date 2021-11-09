export default function getInfo(pkg, bytes) {
  const info = {$count: 1, $depsByCount: {}, $_size: 0, $_depsBySize: {}};
  if (pkg.dependencies) {
    for (const d in pkg.dependencies) {
      const sub = getInfo(pkg.dependencies[d], bytes);
      info[d] = sub;
      info.$count += sub.$count;
      info.$depsByCount[sub.$count] = d;
      const size = bytes[d];
      if (size) {
        info.$_size += (sub.$_size = size);
        info.$_depsBySize[size] = d;
      } else {
        console.error('no size for: ', d);
      }
    }
  }
  return info;
}

