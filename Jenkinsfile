pipeline {
  agent any

  options {
    timeout(time: 60, unit: 'MINUTES')
  }

  stages {

    stage('Setup Node + Install deps') {
      steps {
        bat 'npm ci'
      }
    }

    stage('Install Playwright browsers') {
      steps {
        bat 'npx playwright install'
      }
    }

    stage('Install Allure CLI') {
      steps {
        bat 'npm install -D allure-commandline'
      }
    }

    stage('Run Playwright tests') {
      steps {
        // xvfb is Linux only, remove it on Windows
        bat 'npx playwright test || exit /b 0'
      }
    }

    stage('Generate Allure Report') {
      steps {
        bat '''
        npx allure-commandline generate results_reports\\allure-results ^
        --clean ^
        -o results_reports\\allure-report
        '''
      }
    }
  }

  post {
    always {

      archiveArtifacts artifacts: 'results_reports\\test-results\\**', allowEmptyArchive: true
      archiveArtifacts artifacts: 'artifacts\\**', allowEmptyArchive: true

      publishHTML([
        reportDir: 'results_reports\\playwright-report',
        reportFiles: 'index.html',
        reportName: 'Playwright Report',
        keepAll: true,
        allowMissing: true,
        alwaysLinkToLastBuild: true
      ])

      publishHTML([
        reportDir: 'results_reports\\allure-report',
        reportFiles: 'index.html',
        reportName: 'Allure Report',
        keepAll: true,
        allowMissing: true,
        alwaysLinkToLastBuild: true
      ])
    }
  }
}
