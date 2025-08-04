function openDetails(detailsRef, setIsOpen) {
  if (detailsRef.current) {
    detailsRef.current.ClassList.add("actived");
  }
}

function closeDetails(detailsRef, setIsOpen) {
  if (detailsRef.current) {
    detailsRef.current.removeAttribute("open");
    setIsOpen(false);
  }
}

export { openDetails, closeDetails };
