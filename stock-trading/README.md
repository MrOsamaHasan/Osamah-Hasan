# Stock Trading (private workspace)

Personal workspace for stock research, trade planning and journaling with Claude.

> **Privacy:** this repo deploys to GitHub Pages from `main`. Keep this folder on its
> own branch, or move it to a private repo, before putting real positions, balances
> or account numbers here. Never commit API keys or broker credentials.

## Layout

| Folder | What goes there |
|---|---|
| `research/` | Company notes, earnings notes, theses (one file per ticker) |
| `watchlists/` | Tickers you track and why |
| `journal/` | One entry per trade: plan, entry, exit, lesson |
| `RISK_RULES.md` | Your rules. Claude checks every trade idea against them |

## Tools connected / recommended

- **Questrade connector** (already connected): quotes, positions, option chains,
  watchlists, price-alert Flows. Orders are never placed directly: each one is a
  push-to-approve request in your Questrade mobile app.
- **Equity Research plugin** (Anthropic, recommended): earnings analysis and previews,
  idea screening, sector overviews, thesis tracking, catalyst calendar, morning note.
- **EODHD Financial Data** (optional, community, needs an EODHD API key): stock
  screener, technicals, options analyzer, portfolio risk, macro dashboard.

## Example prompts

- "Check my Questrade positions against RISK_RULES.md"
- "/earnings-preview NVDA" then "save a summary to research/NVDA.md"
- "Screen for profitable mid-caps with rising revenue" (Equity Research `/screen`)
- "Create a Flow that alerts me if SHOP drops below $90"
- "Log this trade in the journal using the template"

*Educational tooling only, not financial advice.*
