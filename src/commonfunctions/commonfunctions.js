//functions for remove duplicates array from main array
const isDuplicate = (arr, id) => {
  return arr.some((item) => item.node.parentId !== id);
};
export const removeDuplicatesArray = (arr) => {
  const uniqueArray = [];
  arr.forEach((item) => {
    const parentId = item.node.parentId;
    const childItems = item.node.childItems.nodes;
    if (
      !isDuplicate(uniqueArray, parentId) &&
      !isDuplicate(uniqueArray, item.node.parentId)
    ) {
      uniqueArray.push(item);
    }
    childItems.forEach((childItem) => {
      if (
        !isDuplicate(uniqueArray, childItem.parentId) &&
        !isDuplicate(uniqueArray, childItem.parentId)
      ) {
        uniqueArray.push({ node: childItem });
      }
    });
  });
  return uniqueArray;
};
