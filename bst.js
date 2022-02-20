const isValidBST = (
    root,
    min = Number.MIN_SAFE_INTEGER,
    max = Number.MAX_SAFE_INTEGER
  ) => {
    if (root == null) return true;
    if (root.val >= max || root.val <= min) return false;
    return (
      isValidBST(root.left, min, root.val) &&
      isValidBST(root.right, root.val, max)
    );
  };