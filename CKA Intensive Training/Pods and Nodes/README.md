# Exercise - Pods and Nodes

### Q1
```
Create a pod output-pod which write "You will passed CKA Exam!" into a file "output-pod.txt"
The Pod output-pod should be deleted automatically after writing the text to the file.
```

### Q2
```
Get the node node01 in JSON format and store it in a file at/node-info.json
```

### Q3
```
Create a single Pod of image httpd:2.4.41-alpine in Namespace default. The Pod should be named pod1 and the container should be named pod1-container. This Pod should only be scheduled on controlplane nodes using tolerations as well . Do not add new labels to any nodes.
```