# Eddie Bauer FW27 Buying Board

Private buying workspace for 333 style-colour options across 97 styles, from the supplied Eddie Bauer FW27 outerwear line list. It also holds 13 style-colours (6 styles) that appear only on the supplier PDF line sheets and are not on the FOB line list yet; they show “No FOB yet” in place of a price.

## Use

Run `npm start` with Node.js 22 or later, then open the local address printed by the server. No dependency installation is needed to use the board. On Windows, `Start-FW27.cmd` starts it directly.

Drag catalogue cards onto the blank white board, move them by their header and resize them from the lower-right corner. Select a card to enter quantities, buying decisions, final MRP and notes. Compare checkboxes produce a side-by-side feature table. The MRP grid counts shortlisted style-colours and provides editable targets. Pricing & bands controls the exchange rate and multipliers.

Pricing follows the user's Excel columns R, S and T: landed USD = FOB × 1.4; landed INR = landed USD × 98; calculated MRP = landed INR × 4. Final MRP is a separate optional override. Prices are not rounded to commercial price points automatically. Style-colours with no FOB yet show “No FOB yet” for landed cost and MRP, sort after priced items, have their own MRP-band filter option and grid column, and are left out of the planned landed value (the total says how many are excluded). A final MRP can still be typed in for them.

Export selected to Excel includes every card on the board, including Hold/Reject decisions. The workbook contains embedded photographs, all 20 original line-list fields, formulas, quantities, final MRP and notes. A separate Source line list tab preserves the original supplier values. Full-catalogue export is also available.

Boards save in this browser's local storage, not in GitHub or across devices. Download a JSON backup to move a board between browsers or retain a portable copy. Excel exports are snapshots and do not automatically update the board. No shared-team synchronization is implemented.

## Source and image limitations

Sources: `EBR - FALL 27 ECOM Outerwear- FOB INTERNATIONAL 110626 - India.xlsx`, `F27 EB OWT-Men's LINESHEET-11.05.26 1.pdf`, and `F27 EB OWT-Women's LINESHEET-11.02.26.pdf`, received 18 November 2026. Source originals are not changed.

The PDFs contain supplier illustrations rather than studio photography. Of the 333 options, 301 show the drawing for their own colour: 267 matched on exact colour name or code, 33 matched in a second pass, and 1 layered product that uses the full sheet to avoid clipping. The second pass tolerates spelling differences, uses the Pantone shade (learned only from colours that already matched exactly on the same sheet), partial names, or elimination when one drawing and one colour remain. Each of those says how it was matched in its Image matching text, for example `Matched by Pantone shade (line sheet calls it "Alder")`. The two INCENSE options rest on a shared colour number with CHINCHILLA and are the weakest of these matches: check them against the sheet.

The other 32 options are on the Excel line list but are not drawn on the supplier line sheet in that colour. They show the style's own drawing in another colour and are flagged `Colour not shown on the supplier line sheet; style drawing only`. Do not read the colour from those drawings. Some drawings overlap within the original sheet. Always consult the full source sheet when resolving colour differences. A matching colour code is reported separately from a matching colour name. Extracted features and performance specifications come from the matching PDF style page; not every feature is specified for every item.

The board contains the 333 options on the Excel FOB list plus 13 PDF-only style-colours with no FOB yet (category “No FOB yet”): EB000574 Cloud Cap Stretch 3L Rain Jacket, men's (3 colours), EB005921 1936 Skyliner Down Jacket-Print (1), EB001715 Rainy Pass Jacket (4), EB001716 Rainy Pass Trench (3), EB003733 Alpenglow High Rise Stretch Ski Pant (1) and EB000779 Cloud Cap Stretch 3L Rain Jacket, women's (1). Their name, fabric, performance, features, colour and Pantone come from the line-sheet page and each shows its own colour drawing. Vendor, origin, size range, department, FOB and retail are not on the line sheet and are left blank. They are not in the Photographic Buy Workbook, which mirrors the FOB line list. Some line-sheet pages show more colourways than the FOB list offers for the same style (for example EB000676 and EB000678); those extra colours are not on the board.

## OpenAI competitor research

The connection is prepared, but live results require a server-side `OPENAI_API_KEY`. Copy `.env.example` to `.env`, enter the key locally, and restart. Never commit `.env`, put a key in browser code or paste a key into a public issue. `OPENAI_MODEL` defaults to `gpt-6.2-astra` and can be changed to a web-search-capable Responses API model available to your account.

Search runs only after clicking Find competitors with AI. It sends product name, gender, category and specifications to the OpenAI Responses API, not costs, quantities, notes or the whole line list. The request uses live web search, prioritises India/INR offers from Columbia, The North Face and Decathlon, preserves citation links and dates results. Results remain research suggestions; missing specifications and uncertain India availability must be checked. Cached results show their search date and can be refreshed by clicking again. Missing connection, provider failures and timeouts are explicit errors. Live provider behavior has not been tested without a key.

API references: https://developers.openai.com/api/docs/guides/tools-web-search and https://developers.openai.com/api/docs/quickstart

## Hosting

The Node server binds only to this computer. The private hosted board is a static version: its catalogue, white board, comparisons, MRP grid and browser-generated Excel exports work without a backend. Its AI button reports that activation is needed. Live AI is prepared in the Node server and needs a server deployment/private API setting before it can run on the hosted board. Do not publish supplier costs to a public website. GitHub repository privacy alone does not protect a separate website. GitHub Pages cannot run the server-side OpenAI connection.

## Validation

`npm test` checks catalogue keys and original columns (333 priced and 13 no-FOB style-colours), pricing/export formulas, blank-price export for no-FOB items and embedded image count, plus the disconnected research behavior. Browser checks cover adding a card, updating quantity, the MRP grid and downloading a selected workbook. The exported file is independently reopened for source-column and image checks. Live AI results require a configured account and remain unverified until then.
