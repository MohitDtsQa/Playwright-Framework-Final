pipeline {
  agent any

  // Trigger configuration
  triggers {
    // Run daily at 2 AM
    cron('0 2 * * *')
    // Poll GitHub every hour for changes
    pollSCM('H * * * *')
  }

  options {
    timeout(time: 60, unit: 'MINUTES')
    // Keep last 30 builds
    buildDiscarder(logRotator(numToKeepStr: '30', daysToKeepStr: '90'))
    // Disable concurrent builds to avoid conflicts
    disableConcurrentBuilds()
    // Add timestamps to console output
    timestamps()
  }

  environment {
    // Playwright browser cache directory
    PLAYWRIGHT_BROWSERS_PATH = "${WORKSPACE}\\.cache\\ms-playwright"
    // Node modules cache
    npm_config_cache = "${WORKSPACE}\\.npm-cache"
  }

  stages {

    stage('Checkout') {
      steps {
        script {
          // Display build information
          echo "Build Number: ${env.BUILD_NUMBER}"
          echo "Build URL: ${env.BUILD_URL}"
          echo "Git Branch: ${env.GIT_BRANCH}"
          echo "Git Commit: ${env.GIT_COMMIT}"
        }
        // Clean workspace (optional - remove if you want to keep cache)
        // cleanWs()
        checkout scm
      }
    }

    stage('Setup Node + Install deps') {
      steps {
        script {
          echo 'Installing Node dependencies...'
          // Use npm ci for faster, deterministic installs
          bat 'npm ci --prefer-offline --no-audit'
        }
      }
    }

    stage('Install Playwright browsers') {
      steps {
        script {
          echo 'Installing Playwright browsers (cached)...'
          // Check if browsers are already installed
          def browsersInstalled = bat(
            script: 'if exist "%PLAYWRIGHT_BROWSERS_PATH%" (exit 0) else (exit 1)',
            returnStatus: true
          )
          
          if (browsersInstalled != 0) {
            echo 'Browsers not found in cache. Installing...'
            bat 'npx playwright install --with-deps'
          } else {
            echo 'Browsers found in cache. Verifying installation...'
            bat 'npx playwright install --with-deps'
          }
        }
      }
    }

    stage('Install Allure CLI') {
      steps {
        script {
          echo 'Installing Allure CLI...'
          bat 'npm install -D allure-commandline'
        }
      }
    }

    stage('Run Playwright tests') {
      steps {
        script {
          echo 'Running Playwright tests...'
          // Continue pipeline even if tests fail
          bat(script: 'npx playwright test', returnStatus: true)
        }
      }
    }

    stage('Generate Allure Report') {
      steps {
        script {
          echo 'Generating Allure Report...'
          bat '''
          if exist results_reports\\allure-results (
            npx allure-commandline generate results_reports\\allure-results ^
            --clean ^
            -o results_reports\\allure-report
          ) else (
            echo "No Allure results found to generate report"
          )
          '''
        }
      }
    }
  }

  post {
    always {
      script {
        echo 'Archiving test results and reports...'
      }

      // Archive test results
      archiveArtifacts artifacts: 'results_reports\\test-results\\**', allowEmptyArchive: true, fingerprint: true
      archiveArtifacts artifacts: 'artifacts\\**', allowEmptyArchive: true, fingerprint: true
      archiveArtifacts artifacts: 'results_reports\\allure-results\\**', allowEmptyArchive: true
      
      // Archive screenshots and videos if tests fail
      archiveArtifacts artifacts: 'test-results\\**\\*.png', allowEmptyArchive: true
      archiveArtifacts artifacts: 'test-results\\**\\*.webm', allowEmptyArchive: true

      // Publish HTML reports
      publishHTML([
        reportDir: 'results_reports\\playwright-report',
        reportFiles: 'index.html',
        reportName: 'Playwright HTML Report',
        keepAll: true,
        allowMissing: true,
        alwaysLinkToLastBuild: true
      ])

      publishHTML([
        reportDir: 'results_reports\\allure-report',
        reportFiles: 'index.html',
        reportName: 'Allure HTML Report',
        keepAll: true,
        allowMissing: true,
        alwaysLinkToLastBuild: true
      ])

      // Publish test results (for Jenkins test results trend)
      junit(
        testResults: 'results_reports\\test-results\\*.xml',
        allowEmptyResults: true,
        skipPublishingChecks: false
      )

      // Display report links in console
      script {
        def playwrightReportUrl = "${env.BUILD_URL}Playwright_20HTML_20Report/"
        def allureReportUrl = "${env.BUILD_URL}Allure_20HTML_20Report/"
        def artifactsUrl = "${env.BUILD_URL}artifact/"
        
        echo """
        ═══════════════════════════════════════════════════════════
        📊 TEST REPORTS & ARTIFACTS
        ═══════════════════════════════════════════════════════════
        
        🎭 Playwright Report: ${playwrightReportUrl}
        📈 Allure Report:     ${allureReportUrl}
        📦 Artifacts:         ${artifactsUrl}
        
        ═══════════════════════════════════════════════════════════
        """
      }
    }

    success {
      script {
        echo '✅ Pipeline completed successfully!'
      }
      // Optional: Send notifications on success
      // emailext (
      //   subject: "✅ Jenkins Build Success: ${env.JOB_NAME} #${env.BUILD_NUMBER}",
      //   body: "Build succeeded. View reports at: ${env.BUILD_URL}",
      //   to: "team@example.com"
      // )
    }

    failure {
      script {
        echo '❌ Pipeline failed!'
      }
      // Optional: Send notifications on failure
      // emailext (
      //   subject: "❌ Jenkins Build Failed: ${env.JOB_NAME} #${env.BUILD_NUMBER}",
      //   body: "Build failed. Check logs at: ${env.BUILD_URL}console",
      //   to: "team@example.com"
      // )
    }

    unstable {
      script {
        echo '⚠️ Pipeline is unstable (some tests failed)'
      }
    }

    cleanup {
      script {
        echo 'Cleaning up workspace...'
        // Optional: Clean up old artifacts to save space
        // bat 'if exist results_reports\\allure-results rmdir /s /q results_reports\\allure-results'
      }
    }
  }
}