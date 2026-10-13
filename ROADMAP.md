# Roadmap

*Generated on 2026-10-13 for game version 1.128.90.1030 from `packs.tsv`, the decoded patch data and the text of every chapter. Do not edit by hand.*

The book reads one install of the game. The Python code for every pack ships with the base game, so every pack's scripts are already decompiled and covered by the chapters. What differs from pack to pack is the tuning (the numbers and records the code runs on) and the content files, and those the book can only observe live for a pack that is installed.

## Where the book stands

| Level | What the book has read | Packs |
|---|---|---|
| Read in full | installed: code, live tuning, client and simulation packages, string tables | 9 |
| Patch tuning read | not installed: code, plus the pack's tuning decoded from its `Delta/` patch data, which never runs here and is never counted as live | 75 |
| Patch tuning not decoded | not installed: code only; the patch data carries tuning, but only in its preload package, which was not decoded | 0 |
| No tuning in patch data | not installed: code only; the patch data holds content (CAS parts, build objects, strings) and no tuning | 34 |
| All | | 118 |

Read in full: BASE_GAME (Base Game), EP04 (Cats & Dogs), EP06 (Get Famous), EP09 (Eco Lifestyle), EP12 (High School Years), GP04 (Vampires), GP12 (Werewolves), SP01 (Luxury Party), SP42 (Grunge Revival).

## What comes next

1. **Install and read more packs.** A pack can only be read live once it is installed. The order below puts first the packs the book already describes most often from their patch data (the number of chapter sections that name the pack), so each install turns the most "patch data, pack not installed" text into live, observed text. The order is a proposal and may change.
2. **Recount after every batch.** The live tuning is the base game's delta build plus each installed pack's delta build, so installing a pack changes live counts in every chapter, not only in the pack's own sections. Packs are best added in batches, each followed by one recount of the whole book and a new check line under every chapter title. A game update has the same effect.
3. **Other gaps** (failed decompiles, the native engine read only from its strings, file kinds not yet indexed) are listed in [9.03 Coverage and known gaps](src/9.03-coverage-and-gaps.md).

### Proposed order for installing packs

| Order | Pack | Name | Type | Sections | Chapters |
|---|---|---|---|---|---|
| 1 | EP21 | Royalty & Legacy | Expansion | 89 | 27 |
| 2 | EP18 | Businesses & Hobbies | Expansion | 76 | 23 |
| 3 | EP05 | Seasons | Expansion | 74 | 20 |
| 4 | EP17 | Life & Death | Expansion | 71 | 21 |
| 5 | EP19 | Enchanted by Nature | Expansion | 70 | 20 |
| 6 | EP20 | Adventure Awaits | Expansion | 67 | 21 |
| 7 | EP07 | Island Living | Expansion | 63 | 20 |
| 8 | EP01 | Get To Work | Expansion | 62 | 22 |
| 9 | EP08 | Discover University | Expansion | 62 | 21 |
| 10 | EP13 | Growing Together | Expansion | 57 | 18 |
| 11 | EP14 | Horse Ranch | Expansion | 55 | 18 |
| 12 | EP11 | Cottage Living | Expansion | 47 | 20 |
| 13 | EP03 | City Living | Expansion | 43 | 17 |
| 14 | EP10 | Snowy Escape | Expansion | 43 | 13 |
| 15 | EP15 | For Rent | Expansion | 43 | 14 |
| 16 | EP02 | Get Together | Expansion | 38 | 13 |
| 17 | GP06 | Jungle Adventure | Game | 38 | 11 |
| 18 | EP16 | Lovestruck | Expansion | 31 | 12 |
| 19 | GP08 | Realm of Magic | Game | 27 | 12 |
| 20 | GP09 | Journey to Batuu | Game | 25 | 12 |
| 21 | GP01 | Outdoor Retreat | Game | 21 | 9 |
| 22 | GP03 | Dine Out | Game | 20 | 6 |
| 23 | GP07 | StrangerVille | Game | 19 | 8 |
| 24 | SP82 | Yard Charm | Stuff | 19 | 8 |
| 25 | SP49 | Crystal Creations | Stuff | 18 | 5 |
| 26 | GP10 | Dream Home Decorator | Game | 15 | 6 |
| 27 | GP05 | Parenthood | Game | 14 | 6 |
| 28 | SP57 | Cozy Kitsch | Stuff | 14 | 7 |
| 29 | SP70 | SpongeBob Kid's Room | Stuff | 14 | 7 |
| 30 | GP11 | My Wedding Stories | Game | 9 | 3 |
| 31 | SP02 | Perfect Patio | Stuff | 9 | 3 |
| 32 | SP18 | Paranormal | Stuff | 9 | 5 |
| 33 | SP22 | Bust The Dust | Stuff | 9 | 4 |
| 34 | GP02 | Spa Day | Game | 6 | 5 |
| 35 | SP13 | Laundry Day | Stuff | 6 | 2 |
| 36 | SP46 | Home Chef Hustle | Stuff | 6 | 2 |
| 37 | SP15 | Moschino | Stuff | 5 | 2 |
| 38 | SP16 | Tiny Living | Stuff | 5 | 4 |
| 39 | SP17 | Nifty Knitting | Stuff | 5 | 1 |
| 40 | SP04 | Spooky Stuff | Stuff | 4 | 1 |
| 41 | FP01 | Holiday | Free | 3 | 2 |
| 42 | SP09 | Vintage Glamour | Stuff | 3 | 2 |
| 43 | SP12 | Toddler | Stuff | 3 | 1 |
| 44 | SP06 | Romantic Garden | Stuff | 1 | 1 |
| 45 | SP14 | My First Pet | Stuff | 1 | 1 |
| 46 | SP24 | Fashion Street | Stuff | 1 | 1 |
| 47 | SP03 | Cool Kitchen | Stuff | 0 | 0 |
| 48 | SP05 | Movie Hangout | Stuff | 0 | 0 |
| 49 | SP07 | Kids Room | Stuff | 0 | 0 |
| 50 | SP08 | Backyard | Stuff | 0 | 0 |
| 51 | SP10 | Bowling Night | Stuff | 0 | 0 |
| 52 | SP11 | Fitness | Stuff | 0 | 0 |
| 53 | SP23 | Courtyard Oasis | Stuff | 0 | 0 |
| 54 | SP25 | Industrial Loft | Stuff | 0 | 0 |
| 55 | SP31 | Décor to the Max | Stuff | 0 | 0 |
| 56 | SP33 | Little Campers | Stuff | 0 | 0 |
| 57 | SP36 | Pastel Pop | Stuff | 0 | 0 |
| 58 | SP37 | Everyday Clutter | Stuff | 0 | 0 |
| 59 | SP39 | Bathroom Clutter | Stuff | 0 | 0 |
| 60 | SP41 | Basement Treasures | Stuff | 0 | 0 |
| 61 | SP43 | Book Nook | Stuff | 0 | 0 |
| 62 | SP45 | Modern Luxe | Stuff | 0 | 0 |
| 63 | SP51 | Party Essentials | Stuff | 0 | 0 |
| 64 | SP52 | Riviera Retreat | Stuff | 0 | 0 |
| 65 | SP53 | Cozy Bistro | Stuff | 0 | 0 |
| 66 | SP55 | Storybook Nursery | Stuff | 0 | 0 |
| 67 | SP58 | Comfy Gamer | Stuff | 0 | 0 |
| 68 | SP59 | Secret Sanctuary | Stuff | 0 | 0 |
| 69 | SP60 | Casanova Cave | Stuff | 0 | 0 |
| 70 | SP63 | Sleek Bathroom | Stuff | 0 | 0 |
| 71 | SP65 | Restoration Workshop | Stuff | 0 | 0 |
| 72 | SP67 | Kitchen Clutter | Stuff | 0 | 0 |
| 73 | SP68 | SpongeBob's House | Stuff | 0 | 0 |
| 74 | SP75 | Wonderland Playroom | Stuff | 0 | 0 |
| 75 | SP77 | Tea Time Solarium | Stuff | 0 | 0 |

Last, the 34 stuff packs whose patch data holds no tuning and which no chapter names yet (mostly kits of CAS parts and build objects): reading them would add content counts and no new systems. SP20 (Throwback Fit), SP21 (Country Kitchen), SP26 (Incheon Arrivals), SP28 (Modern Menswear), SP29 (Blooming Rooms), SP30 (Carnaval Streetwear), SP32 (Moonlight Chic), SP34 (First Fits), SP35 (Desert Luxe), SP38 (Simtimates Collection), SP40 (Greenhouse Haven), SP44 (Poolside Splash), SP47 (Castle Estate), SP48 (Goth Galore), SP50 (Urban Homage), SP54 (Artist Studio), SP56 (Sweet Slumber Party), SP61 (Refined Living Room), SP62 (Business Chic), SP64 (Sweet Allure), SP66 (Golden Years), SP69 (Autumn Apparel), SP71 (Grange Mudroom), SP72 (Essential Glam), SP73 (Modern Retreat), SP74 (Garden to Table), SP76 (Silver Screen Style), SP78 (Lady Bridgerton's Masquerade Ball Fashion), SP79 (Lady Bridgerton's Masquerade Ballroom), SP80 (Music Den), SP81 (Prairie Dreams), SP83 (Mean Girls Capsule), SP84 (Clueless Capsule), SP87 (Coach RePurposed Capsule).

## Every pack

Sections and Chapters count the chapter sections that name the pack's code; [9.04 Pack index](src/9.04-pack-index.md) links each one.

### Base game

| Pack | Name | Level | Sections | Chapters |
|---|---|---|---|---|
| BASE_GAME | Base Game | Read in full | 5 | 4 |

### Expansion packs

| Pack | Name | Level | Sections | Chapters |
|---|---|---|---|---|
| EP01 | Get To Work | Patch tuning read | 62 | 22 |
| EP02 | Get Together | Patch tuning read | 38 | 13 |
| EP03 | City Living | Patch tuning read | 43 | 17 |
| EP04 | Cats & Dogs | Read in full | 194 | 35 |
| EP05 | Seasons | Patch tuning read | 74 | 20 |
| EP06 | Get Famous | Read in full | 141 | 33 |
| EP07 | Island Living | Patch tuning read | 63 | 20 |
| EP08 | Discover University | Patch tuning read | 62 | 21 |
| EP09 | Eco Lifestyle | Read in full | 149 | 38 |
| EP10 | Snowy Escape | Patch tuning read | 43 | 13 |
| EP11 | Cottage Living | Patch tuning read | 47 | 20 |
| EP12 | High School Years | Read in full | 140 | 37 |
| EP13 | Growing Together | Patch tuning read | 57 | 18 |
| EP14 | Horse Ranch | Patch tuning read | 55 | 18 |
| EP15 | For Rent | Patch tuning read | 43 | 14 |
| EP16 | Lovestruck | Patch tuning read | 31 | 12 |
| EP17 | Life & Death | Patch tuning read | 71 | 21 |
| EP18 | Businesses & Hobbies | Patch tuning read | 76 | 23 |
| EP19 | Enchanted by Nature | Patch tuning read | 70 | 20 |
| EP20 | Adventure Awaits | Patch tuning read | 67 | 21 |
| EP21 | Royalty & Legacy | Patch tuning read | 89 | 27 |

### Game packs

| Pack | Name | Level | Sections | Chapters |
|---|---|---|---|---|
| GP01 | Outdoor Retreat | Patch tuning read | 21 | 9 |
| GP02 | Spa Day | Patch tuning read | 6 | 5 |
| GP03 | Dine Out | Patch tuning read | 20 | 6 |
| GP04 | Vampires | Read in full | 104 | 35 |
| GP05 | Parenthood | Patch tuning read | 14 | 6 |
| GP06 | Jungle Adventure | Patch tuning read | 38 | 11 |
| GP07 | StrangerVille | Patch tuning read | 19 | 8 |
| GP08 | Realm of Magic | Patch tuning read | 27 | 12 |
| GP09 | Journey to Batuu | Patch tuning read | 25 | 12 |
| GP10 | Dream Home Decorator | Patch tuning read | 15 | 6 |
| GP11 | My Wedding Stories | Patch tuning read | 9 | 3 |
| GP12 | Werewolves | Read in full | 124 | 35 |

### Stuff packs

| Pack | Name | Level | Sections | Chapters |
|---|---|---|---|---|
| SP01 | Luxury Party | Read in full | 38 | 16 |
| SP02 | Perfect Patio | Patch tuning read | 9 | 3 |
| SP03 | Cool Kitchen | Patch tuning read | 0 | 0 |
| SP04 | Spooky Stuff | Patch tuning read | 4 | 1 |
| SP05 | Movie Hangout | Patch tuning read | 0 | 0 |
| SP06 | Romantic Garden | Patch tuning read | 1 | 1 |
| SP07 | Kids Room | Patch tuning read | 0 | 0 |
| SP08 | Backyard | Patch tuning read | 0 | 0 |
| SP09 | Vintage Glamour | Patch tuning read | 3 | 2 |
| SP10 | Bowling Night | Patch tuning read | 0 | 0 |
| SP11 | Fitness | Patch tuning read | 0 | 0 |
| SP12 | Toddler | Patch tuning read | 3 | 1 |
| SP13 | Laundry Day | Patch tuning read | 6 | 2 |
| SP14 | My First Pet | Patch tuning read | 1 | 1 |
| SP15 | Moschino | Patch tuning read | 5 | 2 |
| SP16 | Tiny Living | Patch tuning read | 5 | 4 |
| SP17 | Nifty Knitting | Patch tuning read | 5 | 1 |
| SP18 | Paranormal | Patch tuning read | 9 | 5 |
| SP20 | Throwback Fit | No tuning in patch data | 0 | 0 |
| SP21 | Country Kitchen | No tuning in patch data | 0 | 0 |
| SP22 | Bust The Dust | Patch tuning read | 9 | 4 |
| SP23 | Courtyard Oasis | Patch tuning read | 0 | 0 |
| SP24 | Fashion Street | Patch tuning read | 1 | 1 |
| SP25 | Industrial Loft | Patch tuning read | 0 | 0 |
| SP26 | Incheon Arrivals | No tuning in patch data | 0 | 0 |
| SP28 | Modern Menswear | No tuning in patch data | 0 | 0 |
| SP29 | Blooming Rooms | No tuning in patch data | 0 | 0 |
| SP30 | Carnaval Streetwear | No tuning in patch data | 0 | 0 |
| SP31 | Décor to the Max | Patch tuning read | 0 | 0 |
| SP32 | Moonlight Chic | No tuning in patch data | 0 | 0 |
| SP33 | Little Campers | Patch tuning read | 0 | 0 |
| SP34 | First Fits | No tuning in patch data | 0 | 0 |
| SP35 | Desert Luxe | No tuning in patch data | 0 | 0 |
| SP36 | Pastel Pop | Patch tuning read | 0 | 0 |
| SP37 | Everyday Clutter | Patch tuning read | 0 | 0 |
| SP38 | Simtimates Collection | No tuning in patch data | 0 | 0 |
| SP39 | Bathroom Clutter | Patch tuning read | 0 | 0 |
| SP40 | Greenhouse Haven | No tuning in patch data | 0 | 0 |
| SP41 | Basement Treasures | Patch tuning read | 0 | 0 |
| SP42 | Grunge Revival | Read in full | 21 | 10 |
| SP43 | Book Nook | Patch tuning read | 0 | 0 |
| SP44 | Poolside Splash | No tuning in patch data | 0 | 0 |
| SP45 | Modern Luxe | Patch tuning read | 0 | 0 |
| SP46 | Home Chef Hustle | Patch tuning read | 6 | 2 |
| SP47 | Castle Estate | No tuning in patch data | 0 | 0 |
| SP48 | Goth Galore | No tuning in patch data | 0 | 0 |
| SP49 | Crystal Creations | Patch tuning read | 18 | 5 |
| SP50 | Urban Homage | No tuning in patch data | 0 | 0 |
| SP51 | Party Essentials | Patch tuning read | 0 | 0 |
| SP52 | Riviera Retreat | Patch tuning read | 0 | 0 |
| SP53 | Cozy Bistro | Patch tuning read | 0 | 0 |
| SP54 | Artist Studio | No tuning in patch data | 0 | 0 |
| SP55 | Storybook Nursery | Patch tuning read | 0 | 0 |
| SP56 | Sweet Slumber Party | No tuning in patch data | 0 | 0 |
| SP57 | Cozy Kitsch | Patch tuning read | 14 | 7 |
| SP58 | Comfy Gamer | Patch tuning read | 0 | 0 |
| SP59 | Secret Sanctuary | Patch tuning read | 0 | 0 |
| SP60 | Casanova Cave | Patch tuning read | 0 | 0 |
| SP61 | Refined Living Room | No tuning in patch data | 0 | 0 |
| SP62 | Business Chic | No tuning in patch data | 0 | 0 |
| SP63 | Sleek Bathroom | Patch tuning read | 0 | 0 |
| SP64 | Sweet Allure | No tuning in patch data | 0 | 0 |
| SP65 | Restoration Workshop | Patch tuning read | 0 | 0 |
| SP66 | Golden Years | No tuning in patch data | 0 | 0 |
| SP67 | Kitchen Clutter | Patch tuning read | 0 | 0 |
| SP68 | SpongeBob's House | Patch tuning read | 0 | 0 |
| SP69 | Autumn Apparel | No tuning in patch data | 0 | 0 |
| SP70 | SpongeBob Kid's Room | Patch tuning read | 14 | 7 |
| SP71 | Grange Mudroom | No tuning in patch data | 0 | 0 |
| SP72 | Essential Glam | No tuning in patch data | 0 | 0 |
| SP73 | Modern Retreat | No tuning in patch data | 0 | 0 |
| SP74 | Garden to Table | No tuning in patch data | 0 | 0 |
| SP75 | Wonderland Playroom | Patch tuning read | 0 | 0 |
| SP76 | Silver Screen Style | No tuning in patch data | 0 | 0 |
| SP77 | Tea Time Solarium | Patch tuning read | 0 | 0 |
| SP78 | Lady Bridgerton's Masquerade Ball Fashion | No tuning in patch data | 0 | 0 |
| SP79 | Lady Bridgerton's Masquerade Ballroom | No tuning in patch data | 0 | 0 |
| SP80 | Music Den | No tuning in patch data | 0 | 0 |
| SP81 | Prairie Dreams | No tuning in patch data | 0 | 0 |
| SP82 | Yard Charm | Patch tuning read | 19 | 8 |
| SP83 | Mean Girls Capsule | No tuning in patch data | 0 | 0 |
| SP84 | Clueless Capsule | No tuning in patch data | 0 | 0 |
| SP87 | Coach RePurposed Capsule | No tuning in patch data | 0 | 0 |

### Free packs

| Pack | Name | Level | Sections | Chapters |
|---|---|---|---|---|
| FP01 | Holiday | Patch tuning read | 3 | 2 |
