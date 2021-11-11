/**
 * @param {number} k
 * @param {number[]} nums
 */
 var KthLargest = function(k, nums) {
  this.k = k;
  this.nums = nums;
};

/** 
 * @param {number} val
 * @return {number}
 */
KthLargest.prototype.add = function(val) {
  this.nums.unshift(val);
  const n = this.nums.length;

  for (let i = 1; i < n; i++) {
    if (this.nums[i] < this.nums[i - 1]) {
      [this.nums[i], this.nums[i - 1]] = [this.nums[i - 1], this.nums[i]];
    }
    break;
  }

  return nums[n - k];
};

/**
 * Your KthLargest object will be instantiated and called as such:
 * var obj = new KthLargest(k, nums)
 * var param_1 = obj.add(val)
 */