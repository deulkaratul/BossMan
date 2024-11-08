

Steps 
1. Build 
    1.1 npm install 
    1.2 npm run build  (code is in dist/angular-practise)
2. Create docker file 
    2.1 get NGNIX image 
    2.2 set NGNIX hosting html folder as the working directory
    2.3 COPY dist/angular-practise to hosting folder
    2.4 expose port 80 on the container image
    2.5 use CMD to start ngnix 
3. Build the container 
    3.1 docker build -t username/yourImageName
    3.2 docker push    ( push image to public docker registry)
4. Deploy to K8 mini Kube
    4.1. create Yaml file
    4.2. add POD specification and image to use (docker image that you pushed)
    4.3  add Service to expose POD outside cluster (mini kube cluster)
    4.5 kubectl apply -f deployment.yaml
    4.6 kubectl get pod  (check if pod is running)
    4.7 kubectl get service (check if service created correctly)
    4.8 minikube tunnel  (to map PC port to minikube IPCluster service port)
5. Check if website load 
    5.1 browse http:localhost:4800

