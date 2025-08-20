pipeline {
    agent any

    environment {
        IMAGE_NAME = "html-webserver"
        CONTAINER_NAME = "html-webserver-container"
        HOST_PORT = "8085"
        CONTAINER_PORT = "80"
    }

    stages {
        stage('Checkout Code') {
            steps {
                checkout scm
            }
        }

        stage('Build Docker Image') {
            steps {
                sh """
                  docker build -t ${env.IMAGE_NAME}:${env.BUILD_NUMBER} .
                """
            }
        }

        stage('Stop Old Container') {
            steps {
                sh """
                  docker rm -f ${env.CONTAINER_NAME} || true
                """
            }
        }

        stage('Run New Container') {
            steps {
                sh """
                  docker run -d --name ${env.CONTAINER_NAME} -p ${env.HOST_PORT}:${env.CONTAINER_PORT} ${env.IMAGE_NAME}:${env.BUILD_NUMBER}
                """
            }
        }
    }

    post {
        success {
            echo "Website deployed successfully on http://50.18.237.130:${env.HOST_PORT}"
        }
        failure {
            echo "Build failed. Please check logs."
        }
    }
}
