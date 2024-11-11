var removeElement = function(nums, val) {
    let k=nums.length-1;
    let i=0;
    while (i<=k)
    {
        if(nums[i]===val)
        {
            nums[i]=nums[k];
            k--;
        }
        else
        {
            i++;
        }
    }
    return k+1;
};

//easy way
/*
var removeElement = function(nums, val) {
    let k;
    let len = k =  nums.length;
    for(let i=0;i<len;i++)
    {
        if(nums[i]===val)
        {
            nums[i]=undefined;
            k--;
        }
    }
     nums.sort();
    return k
};
*/
