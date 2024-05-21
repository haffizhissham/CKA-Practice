# CKA-Practice
##### Practice for CKA Examination, use [Killercoda](https://killercoda.com/) or [Killer Shell](https://killer.sh/) to simulate Kubernetes environment. 

0. [Create local Kubernetes cluster; 7 May 2024](https://github.com/haffizhissham/CKA-Practice/tree/main/0.%20Kubernetes%20First%20Practice) | Using **Minikube**

1. [Question Set 1; 7 May 2024](https://github.com/haffizhissham/CKA-Practice/tree/main/1.%20Kubernetes%20Test%20Questions%20%E2%80%93%201)
    *   Create a pod called **my-web**; image = **nginx**, **sleep after 2200 seconds**
    *   Create a new deployment called **my-project**; **upgrade** to version **nginx:1.25**, **recorded** in the resource annotation
    *   Create a new deployment called **app-server**; image = **haffizhissham0/node_app-demo:v1** , Scale it to **5 replicas**
   

2. [Question Set 2; 8 May 2024](https://github.com/haffizhissham/CKA-Practice/tree/main/2.%20Kubernetes%20Test%20Questions%20%E2%80%93%202)
   * Create a static pod named 'nginx-pod' on node01 with the NGINX image. 
Ensure that the pod automatically restarts in case of any failure. 
        * Describe the steps you would take to achieve this, including the YAML configuration and the directory where you would place the configuration file.
   * Design a Kubernetes pod named 'pod-multi' consisting of two containers.
        * Container 1 should be named 'nginx-container' and use the NGINX image, while Container 2 should be named 'busybox-container' and use the BusyBox image with a command to sleep for 4800 seconds. 
        * Provide the YAML configuration for this pod setup, ensuring that both containers are correctly defined. Additionally, discuss any considerations or potential issues when deploying pods with multiple containers.

3. [Question Set 3; 9 May 2024](https://github.com/haffizhissham/CKA-Practice/tree/main/3.%20Kubernetes%20Test%20Questions%20%E2%80%93%203)

4. [Question Set 4; 10 May 2024](https://github.com/haffizhissham/CKA-Practice/tree/main/4.%20Kubernetes%20Test%20Questions%20%E2%80%93%204)

5. [Question Set 5; 16 May 2024](https://github.com/haffizhissham/)

6. [Question Set 6; 17 May 2024](https://github.com/haffizhissham/)

7. [Question Set 7; 20 May 2024](https://github.com/haffizhissham/)
    * Create a **Persistent Volume (PV)** and a corresponding **Persistent Volume Claim (PVC)** and then use it in a Pod.
      * Create a Persistent Volume named **data-pv** with the following specifications:
        * Capacity: 2Gi
        * Access Modes: ReadWriteMany
        * HostPath: /mnt/storage
        * Storage Class: local-storage
      * Create a Persistent Volume Claim named **data-pvc** with the following specifications:
        * Requested Storage: 2Gi
        * Access Modes: ReadWriteMany
        * Storage Class: local-storage
      * Create a Pod named app-pod that **uses the PVC data-pvc** to **mount** the volume at **/data/app**.
      * **Verify** that the Pod is **running** and **using** the **Persistent Volume**.
