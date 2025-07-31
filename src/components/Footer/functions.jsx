function openDetails(detailsRef, setIsOpen) {
  if (detailsRef.current) {
    detailsRef.current.setAttribute("open", "");
    setIsOpen(true);
  }
}

function closeDetails(detailsRef, setIsOpen) {
  if (detailsRef.current) {
    detailsRef.current.removeAttribute("open");
    setIsOpen(false);
  }
}

export { openDetails, closeDetails };
