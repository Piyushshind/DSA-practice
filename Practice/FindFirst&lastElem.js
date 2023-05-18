// find first and Last position in arr 
// bimary search method
var upperBound = function (nums, x, n) {
    let l = 0;
    let r = n - 1;
    let ans = n
    while (l <= r) {
        let mid = Math.floor((l + r) / 2)
        if (nums[mid] > x) {
            ans = mid;
            r = mid - 1;
        }
        else {
            l = mid + 1;
        }
    }
    return ans
};
var lowerBound = function (nums, x, n) {
    let l = 0;
    let r = n - 1;
    let ans = n
    while (l <= r) {
        let mid = Math.floor((l + r) / 2)
        if (nums[mid] >= x) {
            ans = mid;
            r = mid - 1;
        }
        else {
            l = mid + 1;
        }
    }
    return ans
};
var searchRange = function (nums, target) {
    var n = nums.length
    let lb = lowerBound(nums, target, n)
    let ub = upperBound(nums, target, n)

    if (lb == ub) {
        return [-1, -1]
    }

    return [lb, ub - 1]
};

//  Find First and Last Position of Element in Sorted Array

var searchRange = function (nu, tr) {

    let check = nu.includes(tr)
    function cheachLength(arr) {
        let ans1 = []
        if (arr.length > 1) {
            ans1.push(arr[0], arr[arr.length - 1])
            return ans1
        } else {
            ans1.push(arr[0], arr[0])
            return ans1
        }

    }
    let out = [-1, -1];
    let out2 = [0, 0];
    let index = [];
    let n = nu.length;
    if (n == 0) return out
    if (check == false) return out
    if (n == 1 && nu[0] == 1) return out2
    else {
        for (let i = 0; i < n; i++) {
            if (tr == nu[i]) index.push(i)

        }
        return cheachLength(index)
    }

};


//  Find First and Last Position of Element in Sorted Array by binary search 

// Q1:
//sorted array of integers, return the low and high index of the given key

//index 0,1,2,3,4,5,6,7,8,9,0,1,2
// arr: [1,2,3,3,3,4,4,4,4,4,5,5,5]

//key = 3
// op: (2,4)

//key = 5
// op: 10,12

//key = 6
// op = -1
//val=1<13 && 3===3

function findFirstLast(arr, key) {
    let i = 0;
    let  r = arr.length - 1;

    while (i <= r) {
        let mid = Math.floor((i + r) / 2);
        if (arr[mid] == key) {
            let leftMid = mid;
            let rightMid = mid;
            while (arr[leftMid -1] == key || arr[rightMid +1] == key) {
                if (arr[leftMid -1] == key) leftMid--
                if (arr[rightMid + 1] == key) rightMid++
            }
            return [leftMid, rightMid]
        }
        if (arr[mid] > key){
            i = mid + 1
        } i = mid + 1
        if (arr[mid] < key){
            r = mid - 1
        } 
    }
    // return [-1,-1]
}

console.log(findFirstLast([1, 2, 3, 3, 3, 4, 4, 4, 4, 4, 5, 5, 5], 3));



function searchRange(nums,target) {
    let l = 0;
    let r = nums.length - 1;
  
    if (nums.length < 1) {
      return [-1, -1];
    }
    
    while(l <= r) {
      let mid = Math.floor((l + r) / 2);
  
      if (nums[mid] == target) {
        let lM = mid;
        let rM = mid;
  
        while (nums[lM - 1] == target || nums[rM + 1] == target) {
          if (nums[lM - 1] == target) lM--;
          if (nums[rM + 1] == target) rM++;
        }
        return [lM, rM];
      }
  
      if (nums[mid] < target) {
        l = mid + 1;
      }
      if (nums[mid] > target) {
        r = mid - 1;
      }
    }
    return [-1, -1];
  };

//   console.log(searchRange([1,2,3,3,3,4,4,4,4,4,5,5,5],4));
 