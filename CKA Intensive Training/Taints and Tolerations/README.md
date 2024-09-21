# Exercise - Taints and Tolerations

### Q1
```
create a taint on node01 that not allowd any new pod schedule on node.

node01 is the name of the node you want to taint.
key=value is the key-value pair for the taint. 
in this case use key=node-restriction and value=true. 

Run a pod pod1 with image=nginx that use the toleration.
Make sure pod is running .
```

### Q2
```
Create a single Pod of image httpd:2.4.41-alpine in Namespace default. 
The Pod should be named pod1 and the container should be named pod1-container. 

This Pod should only be scheduled on controlplane nodes. 
Do not add new labels to any nodes.
```