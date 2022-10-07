const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isInstersecting){
        entry.target.classList.add('show');
      }
    });
  });
  
  const hiddenElements = document.querySelectorAll('.hidden');