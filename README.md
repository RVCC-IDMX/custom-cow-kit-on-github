# Week 4: Custom Cow

Welcome to Week 4! This two-session assignment builds on Fortunate Cow by teaching you JSON Schema design, working with objects, CLI argument handling, and the Plan → Build → Review workflow.

## Getting started

1. Open this folder in VS Code
2. Run `npm install` in the terminal
3. Run `npm start` to see a fortune
4. Read [docs/INSTRUCTIONS.md](docs/INSTRUCTIONS.md) for the full assignment

## Learning objectives

### Session 1

- Work with JavaScript objects (arrays of objects)
- Design your own JSON schema
- Separate data from code (refactoring)
- Use VS Code's JSON validation
- Practice the Plan → Build → Review workflow

### Session 2

- Parse command-line arguments with `process.argv`
- Filter arrays with the `.filter()` method
- Read and understand `package.json` files
- Explore real-world code (code archaeology)

## Files in this repository

| File/Folder                                                                  | Purpose                         |
| ---------------------------------------------------------------------------- | ------------------------------- |
| [docs/INSTRUCTIONS.md](docs/INSTRUCTIONS.md)                                 | Complete assignment walkthrough |
| [docs/tutorials/](docs/tutorials/)                                           | Background reading              |
| [docs/guides/](docs/guides/)                                                 | How-to guides                   |
| [docs/reference/](docs/reference/)                                           | Quick reference docs            |
| [docs/json-playground/](docs/json-playground/)                               | Example schemas to study        |
| [fortune.js](fortune.js)                                                     | Your main script                |
| [ai-collaboration-summary-template.md](ai-collaboration-summary-template.md) | Reflection template             |

## Quick links

### Core

- [Full instructions](docs/INSTRUCTIONS.md)
- [Checklist](docs/CHECKLIST.md)

### Session 1 tutorials

- [Objects basics](docs/tutorials/objects-basics.md)
- [JSON files](docs/tutorials/json-files.md)
- [Adding upgrades](docs/guides/adding-upgrades.md)
- [Choosing models wisely](docs/reference/choosing-models.md)
- [JSON Schema validation guide](docs/reference/json-schema-validation.md)
- [Cowsay options](docs/reference/cowsay-options.md)

### Session 2 tutorials

- [CLI basics (process.argv)](docs/tutorials/cli-basics.md)
- [Filter method](docs/tutorials/filter-method.md)
- [Reading package.json](docs/tutorials/reading-package-json.md)
- [CLI libraries reference](docs/reference/cli-libraries.md)

### Schema examples

- [Simple schema](docs/json-playground/example-schema-simple.json)
- [Categories schema](docs/json-playground/example-schema-categories.json)
- [Full schema](docs/json-playground/example-schema-full.json)

## Sample output

### Random fortune
```text
 ____________________________________________
< Good morning! Cause baby you're a firework >
 --------------------------------------------
  \
   \   \
        \ /\
        ( )
      .( o ).
```

### Filtered by category (e.g., rock)
```text
 ____________________________________________________________
< Good morning! Is this the real life? Is this just fantasy? >
 ------------------------------------------------------------
  \
   \   \
        \ /\
        ( )
      .( o ).
```

### List categories
```text
Available categories:
  - rock
  - pop
  - jazz
```

### Count fortunes
```text
Fortune counts by category:
  rock: 5
  pop: 1
  jazz: 1
  Total: 7
```

### Error for invalid category
```text
No fortunes found for category "fakecategory".
Available categories: rock, pop, jazz
```
