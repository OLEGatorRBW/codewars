function recordDepth(tree, depth = 0) {
  if (typeof tree !== 'object' || tree === null || Array.isArray(tree)) {
      return null; 
  }
  tree.depth = depth;
  for (let key in tree) {
      if (typeof tree[key] === 'object' && tree[key] !== null && !Array.isArray(tree[key])) {
          recordDepth(tree[key], depth + 1);
      }
  }
  return tree;
}