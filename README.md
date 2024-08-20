"# VinayM6-Dockerized-CI-CD-Pipeline-with-Azure-DevOps" 

**Introduction:**
The objective of this project is to build a Continuous Integration and Continuous Deployment (CI/CD) pipeline using Azure DevOps to automate the deployment of Dockerized applications. Automation in software development has become crucial in ensuring efficient and reliable deployments. By integrating Docker with Azure DevOps, this project demonstrates how to streamline the process of building, testing, and deploying applications within a cloud environment. The steps detailed in this report illustrate the process from creating a simple Node.js application, containerizing it using Docker, to deploying it on an Azure Kubernetes Service (AKS) cluster through an automated CI/CD pipeline.

1. Developed a Sample Web Application (Node.js) for Containerization with Docker:
	a) Designed a sample Node.js application to demonstrate a basic integration between Node.js and a front-end HTML page.
	b) The application was utilized to build a CI/CD pipeline using Azure DevOps, automating the deployment of Dockerized applications.
	c) Commands used to run the application in VS Code Terminal locally
		npm init -y
		npm install express
		node app.js
	d) Link to access my Node.js application: http://localhost:3000

2. Created a Dockerfile to Define the Application's Environment and Dependencies:

	Followed the steps below to create a Dockerfile:
	
		FROM node:14           # Use the official Node.js image as the base image.
		WORKDIR /usr/src/app   # Set the working directory in the container.
		COPY package*.json ./  # Copy package.json and package-lock.json.
		RUN npm install        # Install dependencies.
		COPY . .               # Copy the rest of the application code.
		RUN chmod -R +x /usr/src/app/node_modules/.bin   # Ensure all files in node_modules/.bin are executable.
		RUN npm test -- --coverage --coverageDirectory=coverage  # Run tests with coverage reporting, storing results in the coverage directory.
		EXPOSE 3000            # Expose port 3000, used by the application.
		CMD ["npm", "start"]   # Command to keep the container running for debugging.
		
3. Stored the Containerized Image in Docker Desktop:

	Used the following commands to store the image:
		docker login       # Log into Docker Hub account.
		docker version     # Check the Docker version.
		docker images      # List existing images.
		docker build -t my-node-app .  # Build the Docker image.
		
4. Ran the Docker Container to Ensure the Web Application is Up and Running:

	Successfully ran the Docker container using:
	docker run -p 3000:3000 my-node-app   # Run the Docker container.
	docker images                        # List deployed images.
	docker ps                            # Get details of the running container.
	docker stop <container ID>           # Stop the running container.
	
5. Pushed the Working Code to a GitHub Repository:

	Steps to push the code:
		Created a new public GitHub repository.
		In the code folder, opened Command Prompt and ran the following commands:
			echo "# Dockerized-CI-CD-Pipeline-with-Azure-DevOps" >> README.md
			git init
			git add README.md
			git add .
			git commit -m "first commit"
			git branch -M main
			git remote add origin <GitHub repository link>
			git push -u origin main
			
6. Created a New Project in Azure DevOps:

	Configured the necessary permissions and settings for the project.
	
7. Initialized the Git Repository within the Azure DevOps Project:

	Stored the application code and Docker configurations in the repository.
	
8. Pushed the Docker Image to the Registry:

	Created a Container Registry in Azure Portal.
	Used the following Azure CLI commands to push the Docker image to the registry:	
		az login --tenant <tenant ID> --use-device-code
		az acr login --name <Azure Container Registry name>
		docker tag your-image:tag nodeappimagecr.azurecr.io/your-repository-name/your-image:tag
		docker push nodeappimagecr.azurecr.io/your-repository-name/your-image:tag
		
9. Created a CI Pipeline in Azure DevOps:

	Set up a CI pipeline to automate the build process of the Dockerized application.
	Configured the pipeline to trigger whenever changes are pushed to the Git repository.
	Built a Docker image and pushed it to Azure Container Registry using azure-pipeline.yml created by Azure DevOps for the CI pipeline.

10. Verified the Image in Azure Portal:

	Checked the registry to ensure the image was successfully pushed.
	
11. Built an Azure Kubernetes Cluster for Node.js App Deployment:

	Created a Kubernetes cluster using the "Cluster Preset Configuration" for DEV/TEST environments.

12. Attached the Azure Container Registry to Azure Kubernetes Services:

		Verified the connection using the following PowerShell command:
		az aks list --output table
		
13.Configured CD Release Pipeline:

	Set up a CD release pipeline in Azure DevOps to automate the deployment of the Dockerized application to my target environment (Azure Kubernetes Service - AKS).
	The pipeline was configured to build and push the Docker image to Azure Container Registry and deploy it to AKS using azure-pipeline-1.yml, which was created by Azure DevOps for the CD pipeline.
	Defined the deployment stage as "deploy stage" in the YAML file.
	
14. Monitored Deployment and Rollback:

	Monitored the deployment in the Azure DevOps project, Azure Portal, and using kubectl commands.
	Used the following commands to interact with AKS:
		az aks get-credentials --resource-group <resource-group-name> --name <aks-cluster-name>   # Login to AKS.
		kubectl version                                      # Check the version of kubectl and the API server.
		kubectl get deployment                               # Get the status of the deployment.
		kubectl get all                                      # Get the status of all resources in the namespace.

**Conclusion:**
This project successfully demonstrated the creation and implementation of a CI/CD pipeline using Azure DevOps to automate the deployment of Dockerized applications. By following the steps outlined, from developing a Node.js application to configuring a release pipeline for deployment on AKS, the project showcases the practical integration of Docker and Azure DevOps for modern application development. The automation achieved in this project not only enhances deployment efficiency but also ensures that the application is consistently and reliably deployed across environments. This process is essential for maintaining the stability and scalability of applications in a cloud environment.
