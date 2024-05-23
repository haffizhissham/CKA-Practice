# Kubernetes Test Questions 5; 16 May 2024
##### Questions
```
1. Create a replicaset named "appychip" using the NGINX image with a replica count of 4. Ensure that the total count of pods running in the cluster does not exceed 4, considering that there is already a pod running in the cluster.


2. Create a network policy named "appychip" in the default namespace. This network policy should include both ingress and egress rules.
For ingress traffic, block all traffic from an IP range of your choice, except for specified IP ranges. Include namespace and pod selectors in the policy. Ensure that the ports allowed for ingress traffic are limited to 6379.
For egress traffic, allow traffic to an IP range of your choice on port 5978.

3. Imagine you're managing a Kubernetes cluster with various namespaces and pods. You need to create a script to help you find pods efficiently. Write a command to list all pods sorted by their status. Additionally, write another command to list pods sorted by their namespace. Provide the commands you would use for each sorting criterion.
```


## Question 1:
1. Create a YAML script for replicaset, set the **replica value to 1**
   * `nano appychip.yaml`
   * ```yaml
      apiVersion: apps/v1
      kind: ReplicaSet
      metadata:
         name: appychip
         labels:
            app-type: replicaset
      spec:
         # modify replicas amount according to your case
         replicas: 1
         selector:
            matchLabels:
               app-type: replicaset
         template:
            metadata:
               labels:
                  app-type: replicaset
            spec:
               containers:
               - name: nginx    
               image: nginx
      ```
2. Apply the YAML script to deploy the pod, and pod quantity
   * `kubectl apply -f appychip.yaml` & `kubectl get pods`
   * ![run script and check pods](Pictures/1.png)

3. Edit the YAML file to **change** the **replicas value to 4**
   * Reapply the YAML script and check pod quantity again
   * ![rerun script and check pods again](Pictures/2.png)


## Question 2:
1. Create