function handleNext(ul) {
  if (!ul.current) return;

  const slider = ul.current;
  const scrollAmount = slider.offsetWidth; // Scroll 1 full view

  slider.scrollTo({
    left: slider.scrollLeft + scrollAmount,
    behavior: "smooth",
  });
}

function handleBack(ul) {
  if (!ul.current) return;

  const slider = ul.current;
  const scrollAmount = slider.offsetWidth;

  slider.scrollTo({
    left: slider.scrollLeft - scrollAmount,
    behavior: "smooth",
  });
}

export { handleBack, handleNext };
