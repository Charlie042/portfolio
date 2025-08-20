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

/**
 * Handles PDF resume viewing with error handling and analytics
 * @param url - The PDF URL to open
 * @param fallbackUrl - Optional fallback URL if PDF fails
 */
export const handleResumeView = (url: string, fallbackUrl?: string) => {
  try {

    console.log("Resume PDF accessed:", url);


    let newWindow = window.open(url, "_blank", "noopener,noreferrer");


    if (newWindow) {

      newWindow.onerror = () => {
        console.error("Failed to load PDF in new window");
        if (fallbackUrl) {
          newWindow!.location.href = fallbackUrl;
        }
      };
      return; 
    }


    console.warn("First popup attempt failed, trying alternative approach");
    newWindow = window.open(
      url,
      "_blank",
      "noopener,noreferrer,scrollbars=yes,resizable=yes"
    );

    if (newWindow) {
      newWindow.onerror = () => {
        console.error("Failed to load PDF in alternative window");
        if (fallbackUrl) {
          newWindow!.location.href = fallbackUrl;
        }
      };
      return; 
    }


    console.warn("Popup blocked, attempting link-based approach");
    const tempLink = document.createElement("a");
    tempLink.href = url;
    tempLink.target = "_blank";
    tempLink.rel = "noopener noreferrer";
    tempLink.style.display = "none";
    document.body.appendChild(tempLink);
    tempLink.click();
    document.body.removeChild(tempLink);

    setTimeout(() => {
      if (document.hasFocus()) {
        console.error("All popup attempts failed");
        alert(
          "Please allow popups for this site to view the resume, or right-click and select 'Open in new tab'."
        );
      }
    }, 100);
  } catch (error) {
    console.error("Error opening resume PDF:", error);

    alert(
      "Unable to open resume. Please try right-clicking the link and selecting 'Open in new tab'."
    );
  }
};
