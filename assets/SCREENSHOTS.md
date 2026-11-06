# Tutorial screenshot sources

Updated 2026-11-06.

- `zh/ipad-invitation.png`, `en/ipad-invitation.png`, `ja/ipad-invitation.png`: real TestFlight invitation page, https://testflight.apple.com/join/NdJvT2Gt. Captured at 1200×1000 viewport after network idle. Apple `geo` cookies CN / US / JP select localized interface strings. The publisher's app name and description remain Chinese. No page text was replaced for these captures.
- `zh/android-download.png`: real current download page at https://tryon-mirror.lightchainai.com/d, captured at 900×1100. The page provides Chinese UI; English and Japanese manuals use translated, selectable HTML explanations beside the original image rather than fabricated localized UI.
- `android-updater.png`: existing supplied field photograph. No live Android device is connected; retain the original with localized button explanations. A new native screenshot requires a device running the updater.

The manual's application name and Android installation requirements take precedence over legacy labels in reference images. Keep original assets for provenance. Screenshot language selection and captions are owned by `stepImage` in `app.js`.

## Localized application names (2026-11-06)

Active `*/ipad-invitation-named.png` and `*/android-download-named.png` are reference captures with the application name corrected in the browser DOM before capture: Chinese `试衣终端`; English and Japanese `Live Fitting`. Only application-name text nodes were changed. These do not assert that the remote publisher updated its metadata. The original unmodified captures above are retained for provenance. The manual captions disclose the name correction. The updater photograph names a different application (LightChain Updater), so its name is unchanged.
