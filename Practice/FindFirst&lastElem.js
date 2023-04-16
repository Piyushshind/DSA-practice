// find first and Last position in arr 
// bimary search method
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

//  Find First and Last Position of Element in Sorted Array

var searchRange = function (nu, tr) {

    let check = nu.includes(tr)
    function cheachLength(arr) {
        let ans1 = []
        if (arr.length > 1) {
            ans1.push(arr[0], arr[arr.length - 1])
            return ans1
        } else{
                    ans1.push(arr[0],arr[0])
                    return ans1
        }
        
    }
    let out = [-1, -1];
    let out2 = [0,0];
    let index = [];
    let n = nu.length;
    if (n == 0) return out
    if (check == false) return out
    if(n==1 && nu[0]==1) return out2
    else {
        for (let i = 0; i < n; i++) {
            if (tr == nu[i]) index.push(i)

        }
        return cheachLength(index)
    }

};
