# Formspree J49
Project ID: `3101276555863654301` (public identifier).
Form key: `bfitAdmin`.

The repository secrets FORMSPREE_DEPLOY_KEY and BFIT_NOTIFICATION_EMAIL are consumed only by the manually triggered Formspree J49 workflow, restricted to main. It does not publish the website or expose secrets in frontend code.

Status: draft integration. Workflow has not run. CLI installation currently resolves the published version; pin a verified version before production deployment.

Remaining activation steps:
1. Verify the configuration and deploy workflow, then merge when ready.
2. Run Formspree J49 from Actions on main. Confirm the Deploy Key belongs to the intended J49 project.
3. Complete the browser integration for the CLI-created form. The CLI documentation describes the React provider; the current static questionnaire uses an endpoint placeholder and does not yet use that provider. Do not enable it until a supported integration is verified.
4. Test rendering, validation, error handling and successful receipt using synthetic answers.
5. Confirm notification delivery to the intended recipient before inviting respondents.

The questionnaire stays in review mode while bfit-admin/config.js has no endpoint. No homepage navigation link is added. noindex does not provide access control.

Future forms can be added to formspree.json under distinct keys, preserving existing entries. Other Formspree projects need their own deploy credentials.

Official docs: https://help.formspree.io/articles/using-the-cli/the-formspree-cli
