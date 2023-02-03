function threeSum(arr, target) {
	arr.sort();
  let diff = MAX_VALUE;
	let n = arr.length;
	let result = 0;
	for(int i=0;i<n;i++){
		let j = i+1;
		let k =n-2;
		while(j<k){
			int sum = arr[i]+arr[j]+arr[k];
			if(Math.abs(diff)>Math.abs(sum-target)){
				diff = sum - target;
				result = sum;
			}
			if(sum<target){
				j++;
			}
			else{
				k--;
			}
		}
	}
	return result;
}

module.exports = threeSum;
