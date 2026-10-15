
pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                checkout scm
                echo 'Source code checked out from GitHub'
            }
        }

        stage('Verify Tools') {
            steps {
                bat 'node --version'
                bat 'npm --version'
                bat 'git --version'
            }
        }

        stage('Install Dependencies') {
            steps {
                bat 'npm ci --no-audit --no-fund'
            }
        }

        stage('Build') {
            steps {
                bat 'npm run build'
            }
        }

        stage('Test') {
            steps {
                bat 'npm test'
            }
        }

        stage('Deploy') {
            steps {
                bat '''
                    if not exist "C:\\JenkinsDeploy\\college-node-app" mkdir "C:\\JenkinsDeploy\\college-node-app"
                    copy /Y server.js "C:\\JenkinsDeploy\\college-node-app\\server.js"
                    if errorlevel 1 exit /b 1
                    copy /Y package.json "C:\\JenkinsDeploy\\college-node-app\\package.json"
                    if errorlevel 1 exit /b 1
                    echo Deployment completed
                '''
            }
        }
    }

    post {
        success {
            echo 'SUCCESS: CI/CD pipeline completed'
        }
        failure {
            echo 'FAILED: Check Console Output'
        }
    }
}
