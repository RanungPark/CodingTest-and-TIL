var sumNumbers = function (root) {
  function dfs(node, current) {
    if (!node) return 0;

    current = current * 10 + node.val;

    if (!node.left && !node.right) {
      return current;
    }

    return dfs(node.left, current) + dfs(node.right, current);
  }

  return dfs(root, 0);
};
