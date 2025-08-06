function openDetails(detailsRef, setIsOpen) {
  if (detailsRef.current) {
    detailsRef.current.classList.add("actived");
    detailsRef.current.setAttribute("open", "");
    setIsOpen(true);
  }
}

function closeDetails(detailsRef, setIsOpen) {
  if (detailsRef.current) {
    detailsRef.current.classList.remove("actived");
    detailsRef.current.removeAttribute("open");
    setIsOpen(false);
  }
}

export { openDetails, closeDetails };
