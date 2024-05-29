# Kubernetes Test Questions 9; 24 May 2024

##### Questions
```
1.
Create a CronJob in Kubernetes named "backup-job" that runs every 5 minutes. 

Use the mysql:5.7 image for the job and set it 
    • to execute the command mysqldump -h mysql-service -u root -p <database_name> > /backup/backup.sql .
    • This job should back up a MySQL database named "mydatabase". 
    • After running the job, save one of the pod logs to the file path /home/ubuntu/backup_logs.txt.
```

## References:
1. [Cron expression generator by Cronhub](https://crontab.cronhub.io/)
2. [Export MySQL DB dump from Kubernetes pod and Restore MySQL DB on Kubernetes pod](https://medium.com/@madushagunasekara/export-mysql-db-dump-from-kubernetes-pod-and-restore-mysql-db-on-kubernetes-pod-6f4ecc6b5a64)


## Steps:
1. **Create private key** for user and store it under **/root/sam** folder as **sam.key**, `openssl genrsa -out /root/sam.key 2048`

<br>

2. Create a CertificateSigningRequest (CSR) and under **/root/** folder store it as **sam.csr**, `openssl req -new -key /root/sam.key -out /root/sam.csr`
   * View **sam.csr** file to copy request code