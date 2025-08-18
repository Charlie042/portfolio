export function scrollToSection(
  event: React.MouseEvent<HTMLAnchorElement>,
  sectionId: string
) {
  event.preventDefault();

  // Update URL with hash
  const hash = `#${sectionId}`;
  window.history.pushState(null, "", hash);

  // Dispatch custom event for active state updates
  window.dispatchEvent(new CustomEvent("hashchange"));

  // Scroll to section
  const section = document.getElementById(sectionId);
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
}

// Function to handle initial hash on page load
export function handleInitialHash() {
  if (typeof window !== "undefined") {
    const hash = window.location.hash;
    if (hash) {
      const sectionId = hash.substring(1); // Remove the #
      const section = document.getElementById(sectionId);
      if (section) {
        // Small delay to ensure DOM is ready
        setTimeout(() => {
          section.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    }
  }
}

// Function to scroll to section without updating URL (for programmatic use)
export function scrollToSectionSilent(sectionId: string) {
  const section = document.getElementById(sectionId);
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
}
