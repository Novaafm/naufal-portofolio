// Shared motion language, as physics springs: unlike duration-based springs,
// these keep the velocity of an interrupted animation or a released drag.
// No overshoot by default. Bounce is reserved for gestures that carried
// momentum (see `flick`).
export const spring = { type: 'spring', stiffness: 247, damping: 31.4 } // response 0.4s, ratio 1.0
export const snappy = { type: 'spring', stiffness: 632, damping: 50.3 } // response 0.25s, ratio 1.0
export const flick = { type: 'spring', stiffness: 247, damping: 25.1 } // response 0.4s, ratio 0.8

// Entrance for one block of content when it scrolls into view.
export const reveal = {
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: spring,
}

// Feedback for pressable elements. Opacity keeps the press visible when
// reduced motion removes the scale.
export const press = {
  whileHover: { scale: 1.02 },
  whileTap: { scale: 0.97, opacity: 0.85 },
  transition: snappy,
}
