# Assembly Endgame

A React-based word-guessing game developed as part of the Scrimba React Basics course. Players must guess a mystery word before all programming languages are eliminated from existence. Each incorrect guess removes a coding language, adding narrative stakes to classic hangman gameplay.

**Figma Design:** [Assembly Endgame](https://www.figma.com/design/VJNO8MeMT3E0B2twQ1HajU/Assembly--Endgame?node-id=1-110&t=N4luv36kDHZ8UDvJ-1)

## Setup

```bash
npm install
npm run dev
```

## Key React Concepts

**Minimal State Management:** Used only two `useState` hooks (`currentWord`, `guessedLetters`) while deriving all game logic (`isGameWon`, `isGameLost`, `wrongGuessCount`) from these core state variables.

**Array Methods for Game Logic:** Leveraged `.map()` for rendering, `.filter()` for wrong guess counting, `.every()` for win conditions, and `.includes()` for letter validation and styling.

**Accessibility Implementation:** Integrated ARIA live regions, semantic roles, screen reader-only content, and proper button labeling for inclusive user experience.

**Dynamic CSS with clsx:** Applied conditional styling using the `clsx` utility for state-dependent visual feedback without complex inline styles.

**Component Organization:** Separated rendering logic into dedicated functions (`renderGameStatus()`) while maintaining single-component architecture.

## Learning Highlights

The project demonstrated advanced React patterns through minimal state with maximum derived calculations. Using only two state variables while computing complex game conditions reinforced functional programming principles and React's declarative paradigm.

Implementing comprehensive accessibility features provided real-world development skills, showing how ARIA attributes and screen reader considerations create inclusive applications that work for all users.

Working with derived state calculations and conditional rendering showcased the power of thinking in terms of data transformations rather than imperative state management, aligning with React best practices.
