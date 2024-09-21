# Exercise - Volumes

### Q1
```
Create a new PersistentVolumeClaim:
✑ Name: pv-volume
✑ Class: csi-hostpath-sc
✑ Capacity: 10Mi
Create a new Pod which mounts the PersistentVolumeClaim as a volume:
✑ Name: web-server
✑ Image: nginx
✑ Mount path: /usr/share/nginx/html
Configure the new Pod to have ReadWriteOnce access on the volume.
Finally, using kubectl edit or kubectl patch expand the PersistentVolumeClaim to a capacity of 70Mi and record that change.
```

### Q2
```
schedule a pod as follows:
✑ name: nginx-kusc00401
✑ image: nginx
✑ node selector: disk=ssd
```

### Q3
```
Create a new pod called web-pod with image busy box
Allow the pod to be able to set system_time
The container should sleep for 3200 seconds
```

### Q4
```
Create a new PersistentVolume named safari-pv. It should have a capacity of 2Gi, accessMode ReadWriteOnce, hostPath /Volumes/Data and no storageClassName defined.

Next create a new PersistentVolumeClaim in Namespace project-tiger named safari-pvc . It should request 2Gi storage, accessMode ReadWriteOnce and should not define a storageClassName. The PVC should bound to the PV correctly.

Finally create a new Deployment safari in Namespace project-tiger which mounts that volume at /tmp/safari-data. The Pods of that Deployment should be of image httpd:2.4.41-alpine.
```