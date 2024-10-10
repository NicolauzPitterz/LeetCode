/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
// Time complexity O(m+n)
var findMedianSortedArrays = function (nums1, nums2) {
  let mergedArray = [];
  let i = 0,
    j = 0;

  while (i < nums1.length && j < nums2.length) {
    if (nums1[i] < nums2[j]) {
      mergedArray.push(nums1[i++]);
    } else {
      mergedArray.push(nums2[j++]);
    }
  }

  while (i < nums1.length) {
    mergedArray.push(nums1[i++]);
  }

  while (j < nums2.length) {
    mergedArray.push(nums2[j++]);
  }

  const totalLength = mergedArray.length;

  if (totalLength % 2 === 0) {
    return (
      (mergedArray[totalLength / 2 - 1] + mergedArray[totalLength / 2]) / 2
    );
  } else {
    return mergedArray[Math.floor(totalLength / 2)];
  }
};
