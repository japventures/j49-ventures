# BFIT / FTN questionnaire

Static, isolated route for the existing GitHub Pages site: `/bfit-admin/`.
The home page, its stylesheet and navigation are unchanged. The page includes
`noindex,nofollow,noarchive`; an unlisted URL is not authentication. The repository
is public. Do not commit responses, meeting notes, employee assessments or credentials.

## Activate
1. Create a dedicated form in the authorized Formspree account.
2. Verify the recipient with the owner; configure notification delivery and spam protection there.
3. Set only its public `https://formspree.io/f/FORM_ID` endpoint in `config.js`.
4. Test one clearly synthetic submission with the owner's authorization and confirm receipt.
5. Merge/deploy after checking the form and the unchanged homepage.

Without an endpoint, the page visibly says review mode, prohibits use of real data,
and cannot submit. No API keys are needed in frontend code.

## Behavior
24 questions across eight sections plus review. Repeatable rows, multiple-choice
with text detail, and percentage sliders paired with number inputs. Name, valid email,
100% time distribution and consent are validated before POST. Other answers may be
pending. Review uses textContent (never HTML from user answers). No localStorage,
analytics, uploads or third-party response database. Responses remain only in page
memory until submit; refreshing or closing loses unsent answers. A successful HTTP
response shows receipt; failed/timeout submissions preserve inputs. No real responses
should be used for testing.
