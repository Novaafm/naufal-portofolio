# Graph Report - .  (2026-08-01)

## Corpus Check
- cluster-only mode — file stats not available

## Summary
- 73 nodes · 89 edges · 10 communities
- Extraction: 94% EXTRACTED · 6% INFERRED · 0% AMBIGUOUS · INFERRED: 5 edges (avg confidence: 0.5)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `8a8ea0dc`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- Community 0
- Community 1
- Community 2
- Community 3
- Community 4
- Community 5
- Community 6

## God Nodes (most connected - your core abstractions)
1. `scripts` - 4 edges
2. `profile` - 3 edges
3. `@vitejs/plugin-react` - 2 edges
4. `autoprefixer` - 2 edges
5. `postcss` - 2 edges
6. `tailwindcss` - 2 edges
7. `vite` - 2 edges
8. `framer-motion` - 2 edges
9. `react` - 2 edges
10. `react-dom` - 2 edges

## Surprising Connections (you probably didn't know these)
- None detected - all connections are within the same source files.

## Import Cycles
- None detected.

## Communities (10 total, 0 thin omitted)

### Community 0 - "Community 0"
Cohesion: 0.19
Nodes (8): Experience(), Skills(), adminProjects, education, experience, networkProjects, skills, softwareProjects

### Community 1 - "Community 1"
Cohesion: 0.18
Nodes (4): LABEL_PROPS, TerminalBlock(), TOPOLOGIES, useTypewriter()

### Community 2 - "Community 2"
Cohesion: 0.18
Nodes (11): autoprefixer, devDependencies, autoprefixer, postcss, tailwindcss, vite, @vitejs/plugin-react, postcss (+3 more)

### Community 3 - "Community 3"
Cohesion: 0.27
Nodes (6): App(), Contact(), Hero(), links, Navbar(), profile

### Community 4 - "Community 4"
Cohesion: 0.22
Nodes (8): name, private, scripts, build, dev, preview, type, version

### Community 5 - "Community 5"
Cohesion: 0.29
Nodes (3): ProjectCarousel(), cardVariants, Projects()

### Community 6 - "Community 6"
Cohesion: 0.29
Nodes (7): framer-motion, dependencies, framer-motion, react, react-dom, react, react-dom

## Knowledge Gaps
- **19 isolated node(s):** `name`, `private`, `version`, `type`, `dev` (+14 more)
  These have ≤1 connection - possible missing edges or undocumented components.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `devDependencies` connect `Community 2` to `Community 4`?**
  _High betweenness centrality (0.078) - this node is a cross-community bridge._
- **Why does `dependencies` connect `Community 6` to `Community 4`?**
  _High betweenness centrality (0.052) - this node is a cross-community bridge._
- **What connects `name`, `private`, `version` to the rest of the system?**
  _19 weakly-connected nodes found - possible documentation gaps or missing edges._