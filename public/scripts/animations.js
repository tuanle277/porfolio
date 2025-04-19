// FILE: public/scripts/animations.js
// Enhanced JavaScript for scroll-triggered animations using Intersection Observer.
// Supports different animation types via data-animation attribute.

document.addEventListener("DOMContentLoaded", () => {
  // Select all elements that should be animated on scroll
  const animatedElements = document.querySelectorAll(".animate-on-scroll");

  // Fallback for browsers that don't support IntersectionObserver
  if (!("IntersectionObserver" in window)) {
    console.warn("IntersectionObserver not supported, animations disabled.");
    animatedElements.forEach((el) => {
      // Make elements visible immediately if observer isn't supported
      el.style.opacity = "1";
      el.classList.add("animated"); // Add base class anyway if needed for non-animation styles
    });
    return; // Exit if observer is not supported
  }

  // Create an Intersection Observer instance
  const observer = new IntersectionObserver(
    (entries, observerInstance) => {
      entries.forEach((entry) => {
        // If the element is intersecting (visible)
        if (entry.isIntersecting) {
          const target = entry.target;
          // Get the specific animation type from data attribute (e.g., data-animation="fade-in-up")
          // Default to 'fade-in' if not specified
          const animationType = target.dataset.animation || "fade-in";

          // Add the base 'animated' class and the specific animation class
          target.classList.add("animated", `anim-${animationType}`);

          // Ensure opacity is set to 1 AFTER the animation class is added
          // The animation itself should handle the transition from opacity 0 to 1
          // target.style.opacity = '1'; // Usually handled by the animation keyframes now

          // Unobserve the element after animation so it doesn't re-trigger
          observerInstance.unobserve(target);
        }
      });
    },
    {
      threshold: 0.15, // Trigger when 15% of the element is visible
      // rootMargin: '0px 0px -50px 0px' // Optional: Adjust trigger margin
    }
  );

  // Observe each targeted element
  animatedElements.forEach((el) => {
    // Initial state (opacity 0) should be set by the .animate-on-scroll class in CSS
    observer.observe(el);
  });

  // --- Optional: Add any other page-load or interactive animations here ---
  // Example: Could add typewriter effect logic, etc.
});
