export function initTOC(): void {
  const tocLinks = document.querySelectorAll('.toc-link');
  const sections = Array.from(document.querySelectorAll('main h2, main h3, main h4'))
                        .map(section => ({
                          id: section.getAttribute('id'),
                          offset: section.getBoundingClientRect().top + window.scrollY
                        }));

  let throttleTimer = false;

  const throttle = (callback, time) => {
    if (throttleTimer) return;

    throttleTimer = true;
    setTimeout(() => {
      callback();
      throttleTimer = false;
    }, time);
  };

  function scrollHandler(): void {
    throttle(() => {
      let currentSectionId = '';

      for (const section of sections) {
        if (window.scrollY >= section.offset - 200) {
          currentSectionId = section.id;
        } else {
          break;
        }
      }

      tocLinks.forEach(link => {
        const isActive = link.getAttribute('href')?.substring(1) === currentSectionId;
        link.classList.toggle('active', isActive);
        if (isActive) {
          link.scrollIntoView({ block: 'nearest' });
        }
      });
    }, 100);
  }

  window.addEventListener('scroll', scrollHandler);

  tocLinks.forEach((link: Element) => {
    link.addEventListener('click', (e: Event) => {
      e.preventDefault();
      const targetId = (e.target as HTMLAnchorElement).getAttribute('href')?.substring(1) ?? '';
      const target = document.getElementById(targetId);
      target?.scrollIntoView({ behavior: 'smooth' });
    });
  });
}
