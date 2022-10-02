#include<bits/stdc++.h>
using namespace std;
const int N = 2e5+6;
vector<vector<int>> adj(N);
vector<bool> vis(N, false);

vector<int> bfs(int x) {
	vector<int> vect;
	vect.push_back(x);
	queue<int> q;
	q.push(x);
	vis[x] = true;
	while(!q.empty()) {
		int u = q.front();
		q.pop();
		for(auto v : adj[u]) {
			if(!vis[v]) {
				q.push(v);
				vect.push_back(v);
				vis[v] = true;
			}
		}
	}
	return vect;
}

int main() {
	ios_base::sync_with_stdio(false);
	cin.tie(NULL);
	
	int n, k;
	cin >> n >> k;
	while(k--) {
		int a, b;
		cin >> a >> b;
		adj[a].push_back(b);
		adj[b].push_back(a);
	}
	int cc = 0;
	vector<vector<int>> comp;
	for(int i = 1; i <= n; i++) {
		if(!vis[i]) {
			cc++;
			comp.push_back(bfs(i));
		}
	}
	cout << cc-1 << '\n';
	for(int i = 1; i < comp.size(); i++) {
		cout << comp[0][0] << " " << comp[i][0] << '\n';
	}
	return 0;
}