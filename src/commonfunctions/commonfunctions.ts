//functions for remove duplicates array from main array
const isDuplicate = (arr: any, id: any) => {
  return arr.some((item: any) => item.node.parentId !== id);
};
export const removeDuplicatesArray = (arr: any) => {
  const uniqueArray: any = [];
  arr.forEach((item: any) => {
    const parentId = item.node.parentId;
    const childItems = item.node.childItems.nodes;
    if (
      !isDuplicate(uniqueArray, parentId) &&
      !isDuplicate(uniqueArray, item.node.parentId)
    ) {
      uniqueArray.push(item);
    }
    childItems.forEach((childItem: any) => {
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
