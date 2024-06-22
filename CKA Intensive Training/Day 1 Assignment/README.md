# Assignment 1 for Day 1

## Questions
1. Create a new deployment called myproject, with image nginx:1.17 and 1 replica. Next upgrade the
deployment to version 1.18 using rolling update


Make sure that the version
upgrade is recorded in the resource annotation

---

2. Create a new deployment called
my-deployment. Scale the deployment to 5 replicas.

Make sure desired number of pod always
running.

---

3. Create a new pod called web-day1 with image busy box
Allow the pod to be able to set system_time
The container should sleep for 5500 seconds

---

4. Create a pod called test-pod in
"classic" namespace belonging to the test environment (env=ssd) and
backend tier (tier=frontend).

image: nginx:1.18

---

5. Create a ReplicaSet (Name: appychip, Image: nginx:1.18,Replica: 4)

There is already a Pod running in a
cluster.
Make sure that the total count of pods
running in the cluster is not more than 4