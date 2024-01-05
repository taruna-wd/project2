
document.addEventListener('DOMContentLoaded', function () {
  // Get all elements with class "accordion-header"
  const accordionHeaders = document.querySelectorAll('.accordion-title');

  // Add click event listeners to each accordion header
  accordionHeaders.forEach(function (header) {
    header.addEventListener('click', function () {
      // Toggle the "active" class to style the active header
      header.classList.toggle('active');

      // Get the next sibling element, which is the content
      const content = header.nextElementSibling;

      // Toggle the display of the content
      if (content.style.display === 'block') {
        content.style.display = 'none';
        header.querySelector('.icon i').classList.replace('fa-xmark', 'fa-plus');
      } else {
        content.style.display = 'block';
        header.querySelector('.icon i').classList.replace('fa-plus', 'fa-xmark');
      }
    });
  });
});

