# How The Sims 4 Works

An unofficial reverse-engineering book about The Sims 4, game version 1.128.90.1030 (Steam, Linux/Proton; base game plus EP04, EP06, EP09, EP12, GP04, GP12, SP01 and SP42). It explains how the game's systems work and the numbers they use, read from the game's own code, tuning and file formats. It is written for players, modders, designers and programmers, and no chapter assumes you have opened the files yourself.

Read it online: https://sudo-ezekiel.github.io/how-the-sims-4-works/

Start with the reading guide (chapter 0.01): it explains the chapter layout, the Observed and Inferred labels, the check line under each system chapter's title, and how to reproduce the results from your own copy of the game.

[ROADMAP.md](ROADMAP.md) shows how far the book has read each of the game's 118 packs and which packs come next.

## How it was made

One person asked for this book, set its limits and decides what is published. AI agents (Anthropic's Claude models) did the writing, the fact-checking and the coordination. Most chapters were drafted by one agent from the decompiled code, the tuning and the file bytes, then checked by a second agent that re-derived the draft's load-bearing claims from the same sources; nine began as earlier research notes by other agents and were converted and checked by one agent. The How it works sections label their claims Observed or Inferred and cite the code or tuning they were read from. The person who asked for the book did not re-check the claims by hand, so where the book and the game disagree, the game is right. Chapter 0.01 describes the method in full.

## What is and is not here

The book holds knowledge only: descriptions, names, identifiers and numbers. It contains no game files, no decompiled modules, no tuning dumps, no game assets and no save files, and it quotes EA's code only a few lines at a time. Three chapters (1.02, 1.03 and 8.04) give sizes and counts read from sample saves, as examples. The scripts the authors used are described in chapter 0.01 by what they do and are not published. Nothing here unlocks content you have not bought.

## Reporting an error

Open an issue with the chapter id, the claim as written, and what you found in the game's files or in play. Say which game version you checked.

## Building locally

Install mdBook and mdbook-mermaid. In this directory, run `mdbook-mermaid install .` once: it writes the two scripts `book.toml` loads (`mermaid.min.js` and `mermaid-init.js`). Then run `mdbook build` (or `mdbook serve`); the site is written to `book/`. The chapters are plain Markdown in `src/`; `chapters.tsv` lists them, `packs.tsv` lists the 118 pack ids of the game's UI tuning with the English name the game shows, and `src/glossary.md` was generated from the terms each chapter defines.

## Licence

The authors' text is licensed under Creative Commons Attribution 4.0 International (CC BY 4.0); see LICENSE. The Sims 4, its code, data, names and identifiers belong to Electronic Arts Inc. and are not covered by that licence; see NOTICE.md.
