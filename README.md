# Node.js Web Application with CI/CD Pipeline Using Docker and Github Actions

This repository contains a basic Node.js web application integrated with a CI/CD pipeline. The pipeline automates the process of testing, building, and deploying the application using GitHub Actions and Docker.

---

## Features

- Automated testing with Jest and Supertest.
- Dockerized application for easy deployment.
- CI/CD pipeline triggered on every push to the `main` branch.
- Docker image pushed to Docker Hub for seamless deployments.

---

## CI/CD Pipeline Flow

### **1. Code Push**
- Developers commit and push code changes to the `main` branch.
- This action triggers the CI/CD pipeline workflow.

---

### **2. CI/CD Pipeline Overview**

The pipeline, defined in `.github/workflows/main.yml`, runs the following steps:

1. **Checkout Code:**
   - Pulls the latest code from the repository using `actions/checkout@v3`.

2. **Environment Setup:**
   - Sets up Node.js (version 16) using `actions/setup-node@v3`.

3. **Dependency Installation:**
   - Installs project dependencies from `package.json` using:
     ```bash
     npm install
     ```

4. **Fix Jest Permissions (Optional):**
   - Adds executable permission to Jest binary if needed:
     ```bash
     chmod +x ./node_modules/.bin/jest
     ```

5. **Unit Testing:**
   - Runs Jest test suite to verify application functionality:
     ```bash
     npm test
     ```

6. **Docker Build:**
   - Builds a Docker image for the application:
     ```bash
     docker build -t <username>/nodejs-web-app:latest .
     ```

7. **Docker Authentication:**
   - Logs in to Docker Hub using GitHub secrets `DOCKER_USERNAME` and `DOCKER_PASSWORD`.

8. **Docker Push:**
   - Pushes the Docker image to Docker Hub:
     ```bash
     docker push <username>/nodejs-web-app:latest
     ```

---

### **3. Deployment**

Once the Docker image is successfully pushed to Docker Hub, it can be deployed on any server:

![Docker Pushed](./pictures/Docker-image-push.png)

```bash
docker pull <username>/nodejs-web-app:latest
docker run -d -p 3000:3000 <username>/nodejs-web-app:latest # you can choose the lister port that you want ex: 8000,8080 
```
### CI/CD Running Successfull 

![Container is Running](./pictures/Nodejs-app-running.png)

- The application will then be accessible at `http://<server-ip>:3000`.


![CI/CD](./pictures/CICD%20success.png)
---

##  Operations Summary

Here is a summary of the steps i performed During the CI/CD:

1. Verified all files were in place: `index.js`, `app.test.js`, `package.json`, `Dockerfile`, and workflow YAML.
2. Writed and tested the Node.js application using Express.
3. Created and tested `app.test.js` using Jest and Supertest.
4. Fixed "Jest did not exit" warning by properly exporting `app` and avoiding unclosed resources.
5. Built and run Docker image locally to ensure app runs on port 3000.
6. Created a GitHub Actions workflow (`main.yml`) for CI/CD.
7. Installed required secrets (`DOCKER_USERNAME`, `DOCKER_PASSWORD`) in GitHub.
8. Resolved Jest permission error using `chmod +x`.
9. Successfully ran GitHub Actions workflow — code tested, Docker image built and pushed.

---

## Project Structure

```
Nodejs-web-app/
├── index.js                # Core application logic
├── package.json            # Project metadata and dependencies
├── tests/
│   └── app.test.js         # Test suite for the application
├── Dockerfile              # Docker configuration
└── .github/workflows/
    └── main.yml            # CI/CD pipeline definition
```

---

## Learnings from this

- **Automated Testing:** Prevents bugs by ensuring each code change is verified.
- **Simplified Deployment:** Containerization with Docker makes deployments consistent and portable.
- **Continuous Integration:** Ensures the app is always in a deployable state.
- **Real-time Validation:** Every code push triggers build and test pipeline ensuring reliability.

---

