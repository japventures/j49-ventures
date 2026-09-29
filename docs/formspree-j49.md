# Formspree J49
Project ID: `3101276555863654301`. Form key: `bfitAdmin`.
Public submission URL: https://formspree.io/p/3101276555863654301/f/bfitAdmin

The URL format is the project route implemented by the official @formspree/core 4.0.0 submitForm client. No React migration or deploy credential is required in the browser.

GitHub Actions runs browser tests and then deploys formspree.json with @formspree/cli 0.9.6. The secrets FORMSPREE_DEPLOY_KEY and BFIT_NOTIFICATION_EMAIL are available only to the deployment step. The initial integration branch and main trigger the workflow; remove the integration branch trigger after launch. A manual trigger is also available.

Tests cover identity validation, row addition/removal, percentage total, consent, 24 answers in payload, failed submission retention, successful submission UI and mobile overflow. Test requests are intercepted and never submit respondent data.

Real submission and notification delivery must be verified separately. Do not claim email delivery based solely on an HTTP response. GitHub Pages publishes the static folder after merge; verify the Pages workflow and live URL.

For future questionnaires, add distinct form keys to formspree.json without removing existing forms. Each independent project needs its own deploy credential. Public project identifiers are not secrets.

No homepage links are added. noindex is not authentication.
