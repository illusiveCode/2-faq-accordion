document.addEventListener('DOMContentLoaded', () => {
  const faqs = document.querySelectorAll('.faq');

  faqs.forEach((faq, index) => {
    faq.addEventListener('click', () => handleFaqClick(index));
    
  });

  function handleFaqClick(clickedIndex) {
    faqs.forEach((faq, index) => {
      const answer = faq.nextElementSibling;
      const icon = faq.querySelector('img');
      
      if (index === clickedIndex) {
        toggleVisibility(answer, icon);
      } else {
        hideElement(answer, icon);
      }
    });
  }

  function toggleVisibility(answer, icon) {
    if (answer.hasAttribute('hidden')) {
      showElement(answer, icon);
    } else {
      hideElement(answer, icon);
    }
  }

  function showElement(answer, icon) {
    answer.removeAttribute('hidden');
    icon.src = '/assets/images/icon-minus.svg';
    icon.alt = 'minus icon';
  }

  function hideElement(answer, icon) {
    answer.setAttribute('hidden', true);
    icon.src = '/assets/images/icon-plus.svg';
    icon.alt = 'plus sign icon';
  }
});
