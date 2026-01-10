pipeline {
    agent any

    stages {

        stage('Checkout') {
            steps {
                echo '📥 Clonando repositorio frontend'
                git branch: 'develop',
                    url: 'https://github.com/kamilozzzXD/calculadora-frontend.git'
            }
        }

        stage('Build Docker Image') {
            steps {
                echo '🐳 Construyendo imagen Docker del frontend'
                sh 'docker build -t calculadora-frontend:latest .'
            }
        }

        stage('Deploy') {
            steps {
                echo '🚀 Desplegando frontend'
                sh '''
                  docker stop calculadora-frontend || true
                  docker rm calculadora-frontend || true
                  docker run -d \
                    --name calculadora-frontend \
                    -p 3000:80 \
                    --network calculadora-network \
                    calculadora-frontend:latest
                '''
            }
        }
    }

    post {
        success {
            echo '✅ Frontend desplegado correctamente'
        }
        failure {
            echo '❌ Error en el pipeline del frontend'
        }
    }
}
