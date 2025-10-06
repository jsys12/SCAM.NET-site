const list = document.querySelector('#list');

  list.addEventListener('change', function() {
    const page = this.value;
    if (page) {
      window.location.href = page;
    }
  });