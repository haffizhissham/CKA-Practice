# Kubernetes Test Questions 2
##### Questions
```
1.
Create a static pod named 'nginx-pod' on node01 with the NGINX image. 
Ensure that the pod automatically restarts in case of any failure. 

Describe the steps you would take to achieve this, including the YAML configuration and the directory where you would place the configuration file.

____________


2.Design a Kubernetes pod named 'pod-multi' consisting of two containers.

Container 1 should be named 'nginx-container' and use the NGINX image, while Container 2 should be named 'busybox-container' and use the BusyBox image with a command to sleep for 4800 seconds. 

Provide the YAML configuration for this pod setup, ensuring that both containers are correctly defined. Additionally, discuss any considerations or potential issues when deploying pods with multiple containers.
```


## Question 1:
1. Connect to **node01**. Run this command, `ssh node01`
   * ![ssh node01](Pictures/1.png)

2. Find the path of kubelet config, `ps aux | grep kubelet`
   * ![kubelet config path](Pictures/2.png)

3. Find the path of the **pod manifest folder** from kubelet config file, `cat /var/lib/kubelet/config.yaml | grep static`
   * ![manifest path](Pictures/3.png)

4. Change the directory, go to the pod manifest folder. `cd /etc/kubernetes/manifests`
   * ![manifest folder](Pictures/4.png)

5. Create a config file for the manifest folder, `nano nginx-pod.yml`
   
6. Write a YAML script following question’s requirements:
   * ```yaml
      apiVersion: v1
      kind: Pod
      metadata:
        name: nginx-pod
      spec:
        containers:
        - name: nginx-container
        image: nginx
      ```
   * ![q1 script](Pictures/5.png)

7. Exit ssh connection, check pod status. `kubectl get pods`
   * ![check pods](Pictures/6.png)

8. Need to **fix** container **auto restart policy**. 
   * Add `restartPolicy: Always` in the YAML code. Connect to **node01** again to edit the **manifest file**
   * ![edit q1 script](Pictures/7.png)

## Question 2: