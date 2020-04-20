/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */

var intersect = function(nums1, nums2) {
  let finalAr = []; 

  let smaller = nums1.length < nums2.length ? nums1 : nums2 ;

  let larger = nums1.length > nums2.length ? nums1 : nums2;

  if (nums1.length === nums2.length){
    smaller = nums1;
    larger = nums2;
  }
 
  for (let i = smaller.length - 1; i >= 0 ;i--){
    for (let j = larger.length -1; j >=0; j--){
      if (smaller[i] === larger[j]){
      let addToFinal = finalAr.push(smaller[i]);
      // add to final
      let removeFromSmaller = smaller.splice(i,1);
      let removeFromLarger = larger.splice(j,1)
      break;
      // remove from the smaller to prevent duplicates
      }
    }
  }
  return finalAr;
  // return finalAr;
};
const ar2 = [1,2];
const ar1= [1,1];
intersect(ar1,ar2)




// solve it as if im a human

// look at both arrays, if the both have a value, in the return structure place that number

// if a number occurs more than once in both arrays, have it show up that many number of times in the return structure

// solve as a developer in sudo
// sort them 

// iterate from the back of ar1 
// nested loop over ar2 check for the values,
// if values are the same, then delete it from both and add it to the final structure 

// size of the array influences duplicates 
// find the smaller size of