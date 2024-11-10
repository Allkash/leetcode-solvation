var merge = function(nums1, m, nums2, n) {
    let i = m - 1;      
    let j = n - 1;      
    let k = m + n - 1;  
    while (j >= 0) {
      if (i >= 0 && nums1[i] > nums2[j]) {
        nums1[k--] = nums1[i--];
      } else {
        nums1[k--] = nums2[j--];
      }
    }
  };
  //easy way
  var merge = function(nums1, m, nums2, n) {
    let merge=nums1.slice(0,m);
    merge.concat(nums2);
    merge.sort();
    for(let i=0;i<merge.length;i++){
        nums1[i]=merge[i]
       }
};