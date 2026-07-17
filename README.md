# J49 Ventures — Mixecan Microsite

Static, responsive investment-deck microsite intended for deployment at:

`https://j49.mx/mixecan/`

## GitHub deployment

Copy the entire `mixecan` folder into the root of the existing `j49.mx` repository so the structure is:

```
/index.html
/mixecan/index.html
/mixecan/assets/styles.css
/mixecan/assets/app.js
```

Commit and push to the branch used by GitHub Pages. The page will then resolve at `/mixecan/`.

## Notes

- The page is intentionally marked `noindex,nofollow` because it is a private investment opportunity.
- The site uses Google Fonts. If fully offline hosting is required, replace those font imports with local/system fonts.
- Contact email is set to `contact@j49.mx`.
- All financial figures are presented as preliminary management projections.
