# Eddie Bauer FW27 Buying Board

Private buying workspace for 333 style-colour options across 97 styles, from the supplied Eddie Bauer FW27 outerwear line list.

## Use

Run `npm start` with Node.js 22 or later, then open the local address printed by the server. No dependency installation is needed to use the board. On Windows, `Start-FW27.cmd` starts it directly.

Drag catalogue cards onto the blank white board, move them by their header and resize them from the lower-right corner. Select a card to enter quantities, buying decisions, final MRP and notes. Compare checkboxes produce a side-by-side feature table. The MRP grid counts shortlisted style-colours and provides editable targets. Pricing & bands controls the exchange rate and multipliers.

Pricing follows the user's Excel columns R, S and T: landed USD = FOB × 1.4; landed INR = landed USD × 98; calculated MRP = landed INR × 4. Final MRP is a separate optional override. Prices are not rounded to commercial price points automatically.

Export selected to Excel includes every card on the board, including Hold/Reject decisions. The workbook contains embedded photographs, all 20 original line-list fields, formulas, quantities, final MRP and notes. A separate Source line list tab preserves the original supplier values. Full-catalogue export is also available.

Boards save in this browser's local storage, not in GitHub or across devices. Download a JSON backup to move a board between browsers or retain a portable copy. Excel exports are snapshots and do not automatically update the board. No shared-team synchronization is implemented.

## Source and image limitations

Sources: `EBR - FALL 27 ECOM Outerwear- FOB INTERNATIONAL 110626 - India.xlsx`, `F27 EB OWT-Men's LINESHEET-11.05.26 1.pdf`, and `F27 EB OWT-Women's LINESHEET-11.02.26.pdf`, received 18 November 2026. Source originals are not changed.

The PDFs contain supplier illustrations rather than studio photography. 268 colour names/codes matched automatically; 65 options could not be matched by colour and retain the complete style sheet, visibly flagged. One matched layered-product crop also uses the full sheet to avoid clipping. Some drawings overlap within the original sheet. Always consult the full source sheet when resolving colour differences. A matching colour code is reported separately from a matching colour name. Extracted features and performance specifications come from the matching PDF style page; not every feature is specified for every item.

## OpenAI competitor research

The connection is prepared, but live results require a server-side `OPENAI_API_KEY`. Copy `.env.example` to `.env`, enter the key locally, and restart. Never commit `.env`, put a key in browser code or paste a key into a public issue. `OPENAI_MODEL` defaults to `gpt-6.2-astra` and can be changed to a web-search-capable Responses API model available to your account.

Search runs only after clicking Find competitors with AI. It sends product name, gender, category and specifications to the OpenAI Responses API, not costs, quantities, notes or the whole line list. The request uses live web search, prioritises India/INR offers from Columbia, The North Face and Decathlon, preserves citation links and dates results. Results remain research suggestions; missing specifications and uncertain India availability must be checked. Cached results show their search date and can be refreshed by clicking again. Missing connection, provider failures and timeouts are explicit errors. Live provider behavior has not been tested without a key.

API references: https://developers.openai.com/api/docs/guides/tools-web-search and https://developers.openai.com/api/docs/quickstart

## Hosting

The Node server binds only to this computer. The private hosted board is a static version: its catalogue, white board, comparisons, MRP grid and browser-generated Excel exports work without a backend. Its AI button reports that activation is needed. Live AI is prepared in the Node server and needs a server deployment/private API setting before it can run on the hosted board. Do not publish supplier costs to a public website. GitHub repository privacy alone does not protect a separate website. GitHub Pages cannot run the server-side OpenAI connection.

## Validation

`npm test` checks catalogue keys and original columns, pricing/export formulas and embedded image count, plus the disconnected research behavior. Browser checks cover adding a card, updating quantity, the MRP grid and downloading a selected workbook. The exported file is independently reopened for source-column and image checks. Live AI results require a configured account and remain unverified until then.
