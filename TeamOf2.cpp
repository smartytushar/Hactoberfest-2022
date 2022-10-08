#include <bits/stdc++.h>
using namespace std; 

bool check(vector < int> a,vector < int> b)
{
    set < int> quest; 
    for(int i = 0; i < a.size(); i++)
    {
        quest.insert(a[i]); 
    }
    for(int i = 0; i < b.size(); i++)
    {
        quest.insert(b[i]); 
    }
    return {quest.size()==5}; 

}


int main() 
{
    int t; 
    cin>>t; 
    while(t--)
    {
        int n; 
        cin>>n; 
        vector < vector < int>> A; 
        for(int i = 0; i < n; i++)
        {
            vector < int> vtr; 
            int temp; 
            cin >> temp; 
            for(int j = 0; j < temp; j++)
            {
               int y; 
               cin >> y; 
               vtr.push_back(y); 
            }
            A.push_back(vtr); 
        }

        bool tequest = false; 
        for(int i = 0; i < n; i++)
        {
            for(int j = i+1; j < n; j++)
            {
                bool ch = check(A[i], A[j]); 
                if(ch)
                {
                    tequest = true; 
                    break; 
                }
            }
            if(tequest)
            {
                break; 
            }
        }

        if(tequest)
        {
            cout << "YES" << endl; 
        }
        else
        {
            cout << "NO" << endl; 
        }


    }


    return 0; 
}
