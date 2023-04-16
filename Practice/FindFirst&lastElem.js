// find first and Last position in arr 
var upperBound = function(nums, x, n) {
    let l=0;
    let r=n-1;
    let ans=n
    while(l<=r){
        let mid=Math.floor((l+r)/2)
        if(nums[mid]>x){
            ans=mid;
            r=mid-1;
        }
        else{
            l=mid+1;
        }
    }
    return ans
};
var lowerBound = function(nums, x, n) {
    let l=0;
    let r=n-1;
    let ans=n
    while(l<=r){
        let mid=Math.floor((l+r)/2)
        if(nums[mid]>=x){
            ans=mid;
            r=mid-1;
        }
        else{
            l=mid+1;
        }
    }
    return ans
};
var searchRange = function(nums, target) {
    var n=nums.length
    let lb=lowerBound(nums,target,n)
    let ub=upperBound(nums,target,n)

    if(lb==ub){
        return [-1,-1]
    }

    return [lb,ub-1]
};