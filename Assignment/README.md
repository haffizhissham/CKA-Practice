# CKA-Practice
##### Practice for CKA Examination, use [Killercoda](https://killercoda.com/) or [Killer Shell](https://killer.sh/) to simulate Kubernetes environment. 

00. [Create local Kubernetes cluster; 7 May 2024](./00.%20Kubernetes%20First%20Practice) | Using **Minikube** as locas cluster

<br>

01. [Question Set 1; 7 May 2024](./01.%20Kubernetes%20Test%20Questions%20–%201)
    *   Create a pod called **my-web**; image = **nginx**, **sleep after 2200 seconds**
    *   Create a new deployment called **my-project**; **upgrade** to version **nginx:1.25**, **recorded** in the resource annotation
    *   Create a new deployment called **app-server**; image = **haffizhissham0/node_app-demo:v1** , Scale it to **5 replicas**

<br>

02. [Question Set 2; 8 May 2024](./02.%20Kubernetes%20Test%20Questions%20–%202)
   * Create a static pod named 'nginx-pod' on node01 with the NGINX image. 
Ensure that the pod automatically restarts in case of any failure. 
        * Describe the steps you would take to achieve this, including the YAML configuration and the directory where you would place the configuration file.
   * Design a Kubernetes pod named 'pod-multi' consisting of two containers.
        * Container 1 should be named 'nginx-container' and use the NGINX image, while Container 2 should be named 'busybox-container' and use the BusyBox image with a command to sleep for 4800 seconds. 
        * Provide the YAML configuration for this pod setup, ensuring that both containers are correctly defined. Additionally, discuss any considerations or potential issues when deploying pods with multiple containers.

<br>

03. [Question Set 3; 9 May 2024](./03.%20Kubernetes%20Test%20Questions%20–%203)
   * Create a pod called test-pod in the "custom" namespace belonging to the test environment (env=test) and backend tier (tier=backend). Use the NGINX image with version 1.17.
   * Retrieve the node named node01 in JSON format and store it in a file named /node-info.json. 
   * Use JSON PATH query to retrieve the osimages of all the nodes and store it in a file named "all-nodes-os-info.txt" at the root location.

<br>

04. [Question Set 4; 10 May 2024](./04.%20Kubernetes%20Test%20Questions%20%E2%80%93%204)
   * Create a YAML file defining a Persistent Volume (PV) named user-data-pv with the following characteristics:
     * Uses the hostPath storage type with the path /mnt/ssd
     * Provides ReadWriteOnce access mode
     * Reclaims the storage automatically when the PV becomes unbound from a Persistent Volume Claim (PVC)
   * Create pod of mypod with the image of nginx+redis
   * Create an NGINX Pod named "dns-resolver" using the NGINX image. 
     * Expose it internally within the cluster with a Service named "dns-resolver-service". 
     * Verify whether both the Pod and the Service names are resolvable from within the cluster. Utilize the BusyBox image version 1.28 for DNS lookup. 
     * Save the result of the DNS lookup in the file "/root/nginx.svc".
   * Create a new Deployment named "my-project" with the NGINX image, configured to have one replica. 
     * Then, upgrade the deployment to version "nginx:1.25" using rolling update strategy. 
     * Ensure that the version upgrade is recorded in the resource annotation

<br>

05. [Question Set 5; 16 May 2024](./05.%20Kubernetes%20Test%20Questions%20%E2%80%93%205)
   * Create a replicaset named "appychip" using the NGINX image with a replica count of 4. 
     * Ensure that the total count of pods running in the cluster does not exceed 4, considering that there is already a pod running in the cluster.
   * Create a network policy named "appychip" in the default namespace.
     * This network policy should include both ingress and egress rules.
     * For ingress traffic, block all traffic from an IP range of your choice, except for specified IP ranges. 
     * Include namespace and pod selectors in the policy. 
     * Ensure that the ports allowed for ingress traffic are limited to 6379.
     * For egress traffic, allow traffic to an IP range of your choice on port 5978.
   * Imagine you're managing a Kubernetes cluster with various namespaces and pods. 
     * You need to create a script to help you find pods efficiently. 
     * Write a command to list all pods sorted by their status. 
     * Additionally, write another command to list pods sorted by their namespace. 
     * Provide the commands you would use for each sorting criterion.

<br>

06. [Question Set 6; 17 May 2024](./06.%20Kubernetes%20Test%20Questions%20%E2%80%93%206)
   * SSH into the control plane node with ssh cluster2-controlplane1
     * Check how the control plane components kubelet, kube-apiserver, kube-scheduler, kube-controller-manager, and etcd are started/installed on the control plane node. 
     * Also, find out the name of the monitoring application and how it is started/installed on the control plane node. 
     * Write your findings into the file /opt/training/10/controlplane-components.txt. 
     * The file should be structured like:
        * ```yaml
          #/opt/training/10/controlplane-components.txt
          Kubelet: [Type]
          Kube-apiserver: [Type]
          Kube-scheduler: [Type]
          Kube-controller-manager: [Type]
          Etcd: [Type]
          Monitoring: [Type] [Name]
            ```
   * Create a namespace named techhub.
     * Create a new network policy named internal-access in the techhub namespace.
     * Requirements:
       * Network policy should allow pods within the techhub namespace to connect to each other only on port 8080. 
       * No other ports should be allowed.No pods from outside of the techhub namespace should be able to connect to any pods inside the techhub namespace. 

<br>

07. [Question Set 7; 20 May 2024](./07.%20Kubernetes%20Test%20Questions%20%E2%80%93%207)
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

<br>

08. [Question Set 8; 21 May 2024](./08.%20Kubernetes%20Test%20Questions%20–%208)
    * Create a new user “sam” .Grant him access to the cluster.
      * User “sam” should have permission to **create**, **list**, **get**, **update** and **delete pods**. 
      * The private key exists at `/root/sam/.key` and csr at `/root/sam.csr`

<br>

09. [Question Set 9; 24 May 2024](./09.%20Kubernetes%20Test%20Questions%20%E2%80%93%209)
   * Create a CronJob in Kubernetes named "backup-job" that runs every 5 minutes. Use the mysql:5.7 image for the job and set it to execute the command mysqldump -h mysql-service -u root -p <database_name> > /backup/backup.sql. 
     * This job should back up a MySQL database named "mydatabase". After running the job, save one of the pod logs to the file path /home/ubuntu/backup_logs.txt.

<br>

10. [Question Set 10; 27 May 2024](./10.%20Kubernetes%20Test%20Questions%20–%2010)
   * There is a multiple pods running in node. 
     * Take a backup of the pod ETCD database and then
     * delete the pod and restore the pod again. 
   * You have a pod named my-web-pod running in your Kubernetes cluster
     * Capture the logs and the container ID of the app-container container and save them to the specified locations. 
     * Then, restart the app-container container and log the cluster events to the /root/cluster-events.log file.
       * Save the logs to /root/app-logs.txt
       * Save the container ID to /root/app-id.txt

<br>

11. [Question Set 11; 29 May 2024](./11.%20Kubernetes%20Test%20Questions%20%E2%80%93%2011)
   * Create a YAML file to define a pod named new-gpu that uses the busybox image. 
     * Use nodeSelector to ensure the pod is scheduled only on nodes with the label type=cpu a̶n̶d̶ ̶r̶e̶s̶t̶o̶r̶e̶ ̶t̶h̶e̶ ̶b̶a̶c̶k̶u̶p̶ ̶a̶t̶ ̶v̶a̶r̶/̶l̶i̶b̶/̶m̶y̶n̶e̶w̶b̶a̶c̶k̶u̶p̶.

<br>

12. [Question Set 12; 30 May 2024](./12.%20Kubernetes%20Test%20Questions%20–%2012)
   * Create a pod named secretpod1, using image nginx.
     * Setup the secret secret1 as a volume mount on the pod at path /etc/secret1
     * Verify that the secret was created with the correct data
   * Create a yaml file to create a secret named secret2, with key value pairs
       * user2=my_user2
       * password2=P@ssword2
     * Verify that the secret was created with the correct data

<br>

13. [Question Set 13; 31 May 2024](./13.%20Kubernetes%20Test%20Questions%20–%2013)
   * Create a new ClusterRole named resource-manager-clusterrole that only allows the deletion of the following resource types:
     * Resources:
       * Pods
       * Services
       * ConfigMaps
     * Create a new ServiceAccount named maintenance-token in a namespace named maintenance-ops.
     * Limited to the namespace maintenance-ops, bind the new ClusterRole to the new ServiceAccount maintenance-token.
