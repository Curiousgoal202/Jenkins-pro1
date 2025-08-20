pipeline{
      agent any
             environment {
                        DOCKER_IMAGE = "html-webapp"
                        DOCKER_CONTAINER = "html-container"
                        HOST_PORT = "8085" 
                        CONTAINER_PORT = "80"  
                      } 
         stages{
                    stage('checkout'){
                        steps{
                               git 'https://github.com/Curiousgoal202/Jenkins-pro1.git'
                              }
                           }
                    stage('Build Docker Image'){
                        steps{
                              sh """
                              docker build -t ${IMAGE_NAME}:${BUILD_NUMBER} .
                                """
                               }
                             }
                    stage('Stop Old Container'){
                           steps {
                              sh """ 
                             docker rm -f ${CONTAINER_NAME} || true
                               """
                                  } 
                               }
                        stage('Run New Container') {
            steps {
                sh """
                  docker run -d --name ${CONTAINER_NAME} -p ${HOST_PORT}:${CONTAINER_PORT} ${IMAGE_NAME}:${BUILD_NUMBER}
                """
                        }
                 }
                       
              }


post {
        success {
            echo "Website deployed successfully on http://50.18.237.130:${HOST_PORT}"
        }
        failure {
            echo "Build failed. Please check logs."
        }
    }
} 

