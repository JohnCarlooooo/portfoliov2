pipeline {
  agent any
  stages {
    stage("Build") {
      steps {
        script {
          echo "INFO: Build Stage"
          sh 'docker version'
          sh 'docker build -t nextjs-portfolio .'
        }
      }
    }
    stage("Deploy") {
      steps {
        script {
          echo "INFO: Deploy Stage"
          sh 'docker stop nextjs-portfolio || true && docker rm nextjs-portfolio || true'
					sh 'docker run --name nextjs-portfolio --restart=always --net main_network --ip 10.10.10.20 -d nextjs-portfolio'
        }
      }
    }
  }
}