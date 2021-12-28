### [Docs](https://userfetch.js.org/actions/)

```yaml
- uses: userfetch/userfetch-action
  with:
    config: 'config.mjs'
    svg: 'card.svg'
  env:
    github_token: ${{ secrets.GH_PAT }}
```