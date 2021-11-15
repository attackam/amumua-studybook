var singleNumber = function(nums) {
      let map = new Map();
  
      for (let i = 0; i < nums.length; i++) {
          map.set(nums[i], (map.get(nums[i]) || 0) + 1);
      }
  
     
  
      for (let [key] of map) {
          if (map.get(key) === 1) {
              return key;
          }
      }
  };