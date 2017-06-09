# cluster.k8s.testserver
A containerized node web server to use as a test application for k8s.

## About
...

## Commands

* Build the docker: `docker build . -t epflsti/k8s-testserver`
* To test localy the docker: `docker run epflsti/k8s-testserver`
* Login into dockerhub: `docker login`
* Push the docker on dockerhub: `docker push epfldojo/k8s-testserver`
* Create the pods and service with kubectl: `kubectl create -f k8s-testserver-deploy.yaml` or `kubectl create -f https://github.com/epfl-sti/cluster.k8s.testserver/blob/master/k8s-testserver-deploy.yaml`
* Check the deployment with: `kubectl get all -o wide`
* To expose the pod with a k8s service, use: `kubectl expose rs k8s-testserver-1234567890`
