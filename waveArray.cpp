    
    // problem link==https://practice.geeksforgeeks.org/problems/wave-array-1587115621/1?page=2&status[]=solved&sortBy=submissions
    
    #include<iostream>
    #include<vector>
    using namespace std;
    class Solution{
    public:
    // arr: input array
    // n: size of array
    //Function to sort the array into a wave-like array.
    void convertToWave(int n, vector<int>& arr){
        
        // Your code heregbfdsfdnbsdbb
          if(n%2!=0){
           for(int i=0;i<n;i++){
               if(i%2==0 && i<n-1){
                //   swap(arr[i],arr[i+1]);
                        int temp=arr[i];
           arr[i]=arr[i+1];
           arr[i+1]=temp;

               }
           }
       }
       else{
           for(int i=0;i<n;i++){
               if(i%2==0){
                //   swap(arr[i],arr[i+1]);
                        int temp=arr[i];
           arr[i]=arr[i+1];
           arr[i+1]=temp;

               }
           }
       }
        
    }
};