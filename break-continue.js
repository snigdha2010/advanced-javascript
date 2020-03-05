const nums = [1,2,-3,-3,-3,4,5,5,0,5,5,5];
for(let i =0; i<nums.length;i++){
    if(nums[i]>3){
        break;
    }
   // console.log(nums[i]);
}

for(let i =0; i<nums.length;i++){
    if(nums[i]<0){
        continue;
    }
    console.log(nums[i]);
}