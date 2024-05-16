# Kubernetes Test Questions 5
##### Questions
```
1. Create a replicaset named "appychip" using the NGINX image with a replica count of 4. Ensure that the total count of pods running in the cluster does not exceed 4, considering that there is already a pod running in the cluster.


2. Create a network policy named "appychip" in the default namespace. This network policy should include both ingress and egress rules.
For ingress traffic, block all traffic from an IP range of your choice, except for specified IP ranges. Include namespace and pod selectors in the policy. Ensure that the ports allowed for ingress traffic are limited to 6379.
For egress traffic, allow traffic to an IP range of your choice on port 5978.

3. Imagine you're managing a Kubernetes cluster with various namespaces and pods. You need to create a script to help you find pods efficiently. Write a command to list all pods sorted by their status. Additionally, write another command to list pods sorted by their namespace. Provide the commands you would use for each sorting criterion.
```


## Question 1:
1.	Run this command, ```kubectl run my-web --image=nginx --command sleep 2200 --dry-run=client -o yaml > nginx.yml```
   * ![question 1 step 1](Pictures/1.png)
