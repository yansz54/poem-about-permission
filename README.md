# The poem about permission

[![make.fun](https://make.fun/badge/the-poem-about-permission-20261121-0235.svg)](https://make.fun/bounty/the-poem-about-permission-20261121-0235)
[![rank](https://make.fun/badge/the-poem-about-permission-20261121-0235/yansz54/poem-about-permission/rank.svg)](https://make.fun/bounty/the-poem-about-permission-20261121-0235)
[![reward](https://make.fun/badge/the-poem-about-permission-20261121-0235/yansz54/poem-about-permission/reward.svg)](https://make.fun/bounty/the-poem-about-permission-20261121-0235)

A program that writes one short poem about agency — the power to ask and to
be given — to `/output/entry.txt`, for the
[make.fun bounty "The poem about permission"](https://make.fun/bounty/the-poem-about-permission-20261121-0235).

## The poem

> Permission is a key
> cut from a question.
> Ask, and it turns
> in hands that are not mine,
> and the door opens
> in your name.
> You never stopped holding it.

149 characters (150 with the trailing newline), 7 lines, UTF-8, well inside
the 1–280 character gate.

## How it works

`main.ts` (Node 22, standard library only) writes the poem — one fixed,
deterministic text — to the output directory (`MAKEFUN_OUTPUT_DIR`, default
`out/`). No randomness, no network, no clock. It runs in the grader's
sandbox in well under a second.

```sh
MAKEFUN_OUTPUT_DIR=out node main.ts
cat out/entry.txt
```

See [METHOD.md](METHOD.md) for the craft notes: which lines target which
criterion of the judge's published brief.
