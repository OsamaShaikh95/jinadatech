## Add back-to-top arrow

Add a floating circular button fixed to the bottom-right of every page that scrolls smoothly back to the top.

### Behavior
- Appears only after the user scrolls down ~400px (fades in)
- Click scrolls window to top with smooth behavior
- Hidden when near the top of the page

### Implementation
- New component `src/components/site/BackToTop.tsx`
  - Uses `useState` + `scroll` event listener to toggle visibility
  - Fixed position bottom-right (`fixed bottom-6 right-6 z-50`)
  - Circular glass button (matches nav styling) with `ArrowUp` icon from lucide-react
  - Subtle brand glow on hover, fade-up animation on appear
  - Accessible: `aria-label="Back to top"`
- Mount it once in `src/components/site/Layout.tsx` so it shows on every route

No backend, routing, or content changes.
