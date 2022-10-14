//Approach 1: using extra space : O(n)
//time : O(n)


class Solution {
public:
    int majorityElement(vector<int>& nums) {
       int major_ele=INT_MIN; //to store majority element
       int count=0;
       int n=nums.size();
        
        //using voting algo to find majority element
        for(int i=0;i<n;i++){
            if(nums[i] == major_ele)
                count++;
            else if(count==0){
                count=1;
                major_ele=nums[i];
            }
            else
                count--;
        }
        
        //not required of below steps we can return major_ele from here also
        //but i am doing here to check if majority elements exist or not
        
        //find frequency of major_ele
        count=0;
        for(int i=0;i<n;i++){
            if(nums[i] == major_ele)
                count++;
        }
        
        //check for majority
        if(count > floor(n/2))
            return major_ele;
        else
            return -1;
    }
};
