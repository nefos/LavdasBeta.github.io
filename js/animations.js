const observer = new IntersectionObserver(entries => {
  // Loop over the entries
  entries.forEach(entry => {
    // If the element is visible
    if (entry.isIntersecting) {
      // Add the animation class
      entry.target.classList.add('leftSectionActive');
    }
  });
});

observer.observe(document.querySelector('.leftSection'));

const observer2 = new IntersectionObserver(entries => {
  // Loop over the entries
  entries.forEach(entry => {
    // If the element is visible
    if (entry.isIntersecting) {
      // Add the animation class
      entry.target.classList.add('centerSectionActive');
    }
  });
});

observer2.observe(document.querySelector('.centerSection'));

const observer3 = new IntersectionObserver(entries => {
  // Loop over the entries
  entries.forEach(entry => {
    // If the element is visible
    if (entry.isIntersecting) {
      // Add the animation class
      entry.target.classList.add('rightSectionActive');
    }
  });
});

observer3.observe(document.querySelector('.rightSection'));

function openBook() {
    document.getElementById("openBook").style.display = "block";
    document.querySelector("body").style.overflow = "hidden";
}

function closeBook() {
    document.getElementById("openBook").style.display = "none";
    document.querySelector("body").style.overflow = "visible";
}