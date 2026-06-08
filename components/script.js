document.addEventListener('DOMContentLoaded', () => {

  // === Theme Toggle ===
  const themeToggle = document.querySelector('.theme-toggle');
  const savedTheme = localStorage.getItem('theme') || 'light';
  document.documentElement.setAttribute('data-theme', savedTheme);

  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      const current = document.documentElement.getAttribute('data-theme');
      const next = current === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', next);
      localStorage.setItem('theme', next);
    });
  }

  // === Intersection Observer — Section Reveal ===
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('visible');
      if (entry.target.hasAttribute('data-stagger')) {
        entry.target.classList.add('staggered');
      }
      observer.unobserve(entry.target);
    });
  }, {
    threshold: 0.15,
    rootMargin: '0px 0px -50px 0px'
  });

  document.querySelectorAll('.section').forEach(section => observer.observe(section));

  // === Navbar Scroll Effects ===
  const navbar = document.getElementById('navbar');
  const hero = document.getElementById('home');
  let heroHeight = hero.offsetHeight;

  navbar.classList.add('transparent');

  const updateHeroHeight = () => { heroHeight = hero.offsetHeight; };
  window.addEventListener('resize', updateHeroHeight, { passive: true });

  let ticking = false;
  const handleScroll = () => {
    if (!ticking) {
      requestAnimationFrame(() => {
        if (window.scrollY > heroHeight - 10) {
          navbar.classList.remove('transparent');
          navbar.classList.add('scrolled');
        } else {
          navbar.classList.remove('scrolled');
          navbar.classList.add('transparent');
        }
        ticking = false;
      });
      ticking = true;
    }
  };

  window.addEventListener('scroll', handleScroll, { passive: true });

  // === Active Nav Link Highlighting ===
  const navLinks = document.querySelectorAll('.nav-links a');
  const sections = document.querySelectorAll('section[id]');

  const updateActiveLink = () => {
    let current = '';
    sections.forEach(section => {
      const rect = section.getBoundingClientRect();
      if (rect.top <= 150) {
        current = section.id;
      }
    });
    navLinks.forEach(link => {
      link.classList.toggle('active', link.getAttribute('href') === `#${current}`);
    });
  };

  window.addEventListener('scroll', updateActiveLink, { passive: true });
  updateActiveLink();

  // === Mobile Hamburger Toggle ===
  const navToggle = document.querySelector('.nav-toggle');
  const navLinksEl = document.querySelector('.nav-links');

  if (navToggle && navLinksEl) {
    navToggle.addEventListener('click', () => {
      navToggle.classList.toggle('active');
      navLinksEl.classList.toggle('active');
    });

    navLinksEl.addEventListener('click', (e) => {
      if (e.target.tagName === 'A') {
        navToggle.classList.remove('active');
        navLinksEl.classList.remove('active');
      }
    });
  }

  // === Typewriter Effect ===
  const typewriterEl = document.getElementById('typewriter');
  if (typewriterEl) {
    const phrases = ['WEB DEVELOPER', 'CREATIVE DESIGNER', 'MEDIA EDITOR'];
    let phraseIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    const type = () => {
      const current = phrases[phraseIndex];
      if (!isDeleting) {
        typewriterEl.textContent = current.substring(0, charIndex + 1);
        charIndex++;
        if (charIndex === current.length) {
          isDeleting = true;
          setTimeout(type, 2000);
        } else {
          setTimeout(type, 100);
        }
      } else {
        typewriterEl.textContent = current.substring(0, charIndex - 1);
        charIndex--;
        if (charIndex === 0) {
          isDeleting = false;
          phraseIndex = (phraseIndex + 1) % phrases.length;
          setTimeout(type, 500);
        } else {
          setTimeout(type, 50);
        }
      }
    };

    type();
  }

  // === Cursor Glow Effect ===
  const glow = document.getElementById('cursor-glow');
  let glowTicking = false;
  let glowX = -999;
  let glowY = -999;

  document.addEventListener('mousemove', (e) => {
    glowX = e.clientX;
    glowY = e.clientY;
    if (!glowTicking) {
      requestAnimationFrame(() => {
        glow.style.transform = `translate(${glowX}px, ${glowY}px) translate(-50%, -50%)`;
        glowTicking = false;
      });
      glowTicking = true;
    }
  });

  document.addEventListener('mouseleave', () => {
    glow.classList.add('hidden');
  });

  document.addEventListener('mouseenter', () => {
    glow.classList.remove('hidden');
  });

  // === EmailJS Contact Form ===
  // ⚠️ Set your EmailJS credentials in the .env file (project root).
  //    Then replace the placeholder values below with your actual keys.
  //    .env reference:
  //      EMAILJS_PUBLIC_KEY=your_public_key
  //      EMAILJS_SERVICE_ID=your_service_id
  //      EMAILJS_TEMPLATE_ID=your_template_id
  //
  // 1. Sign up at https://www.emailjs.com/
  // 2. Create an Email Service → get Service ID
  // 3. Create an Email Template → get Template ID
  //    Template variables: {{from_name}}, {{from_email}}, {{message}}
  // 4. Go to Account → API Keys → get Public Key
  const EMAILJS_PUBLIC_KEY = 'NQJsmC0nLbWXtRdB0';
  const EMAILJS_SERVICE_ID = 'service_w08gk5t';
  const EMAILJS_TEMPLATE_ID = 'template_xu4jx41';

  const contactForm = document.getElementById('contact-form');
  const submitBtn = document.getElementById('submit-btn');
  const btnText = submitBtn?.querySelector('.btn-text');
  const btnLoading = submitBtn?.querySelector('.btn-loading');
  const formStatus = document.getElementById('form-status');

  if (contactForm && EMAILJS_PUBLIC_KEY !== 'YOUR_PUBLIC_KEY') {
    emailjs.init(EMAILJS_PUBLIC_KEY);

    contactForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      formStatus.textContent = '';
      formStatus.className = 'form-status';
      submitBtn.disabled = true;
      btnText.style.display = 'none';
      btnLoading.style.display = 'inline';

      const formData = {
        from_name: document.getElementById('form-name').value.trim(),
        from_email: document.getElementById('form-email').value.trim(),
        message: document.getElementById('form-message').value.trim(),
      };

      try {
        await emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, formData);
        formStatus.textContent = 'Message sent successfully! I\'ll get back to you soon.';
        formStatus.className = 'form-status success';
        contactForm.reset();
      } catch (err) {
        formStatus.textContent = 'Something went wrong. Please try again later.';
        formStatus.className = 'form-status error';
        console.error('EmailJS error:', err);
      } finally {
        submitBtn.disabled = false;
        btnText.style.display = 'inline';
        btnLoading.style.display = 'none';
      }
    });
  } else if (contactForm) {
    formStatus.textContent = 'EmailJS is not configured. Update credentials in script.js';
    formStatus.className = 'form-status error';
  }

  // === Certificates Modal ===
  const modal = document.getElementById('cert-modal');
  const modalImg = document.getElementById('modal-img');
  const modalTitle = document.getElementById('modal-title');
  const modalBody = document.getElementById('modal-body');
  const modalClose = document.getElementById('modal-close');
  const zoomIn = document.getElementById('modal-zoom-in');
  const zoomOut = document.getElementById('modal-zoom-out');
  const zoomReset = document.getElementById('modal-zoom-reset');
  const certCards = document.querySelectorAll('.cert-card');

  let zoomLevel = 1;
  const ZOOM_MIN = 0.5;
  const ZOOM_MAX = 4;
  const ZOOM_STEP = 0.5;

  const applyZoom = () => {
    modalImg.style.transform = `scale(${zoomLevel})`;
  };

  const openModal = (card) => {
    const img = card.querySelector('.cert-image img');
    const title = card.querySelector('.cert-info h3').textContent;
    modalImg.src = img.src;
    modalImg.alt = img.alt;
    modalTitle.textContent = title;
    zoomLevel = 1;
    applyZoom();
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    modal.classList.remove('active');
    document.body.style.overflow = '';
    zoomLevel = 1;
    applyZoom();
  };

  certCards.forEach((card) => {
    card.addEventListener('click', () => openModal(card));
  });

  if (modalClose) {
    modalClose.addEventListener('click', closeModal);
  }

  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) closeModal();
  });

  if (zoomIn) {
    zoomIn.addEventListener('click', () => {
      zoomLevel = Math.min(zoomLevel + ZOOM_STEP, ZOOM_MAX);
      applyZoom();
    });
  }

  if (zoomOut) {
    zoomOut.addEventListener('click', () => {
      zoomLevel = Math.max(zoomLevel - ZOOM_STEP, ZOOM_MIN);
      applyZoom();
    });
  }

  if (zoomReset) {
    zoomReset.addEventListener('click', () => {
      zoomLevel = 1;
      applyZoom();
    });
  }

  // === AID Chat ===
  const chatBubble = document.getElementById('chat-bubble');
  const chatDrawer = document.getElementById('chat-drawer');
  const chatClose = document.getElementById('chat-close');
  const chatMessages = document.getElementById('chat-messages');
  const chatInput = document.getElementById('chat-input');
  const chatSend = document.getElementById('chat-send');

  let chatOpen = false;

  const toggleChat = () => {
    chatOpen = !chatOpen;
    chatBubble.classList.toggle('open', chatOpen);
    chatDrawer.classList.toggle('open', chatOpen);
    if (chatOpen) {
      chatInput.focus();
      chatMessages.scrollTop = chatMessages.scrollHeight;
    }
  };

  const closeChat = () => {
    chatOpen = false;
    chatBubble.classList.remove('open');
    chatDrawer.classList.remove('open');
  };

  if (chatBubble) {
    chatBubble.addEventListener('click', toggleChat);
  }

  if (chatClose) {
    chatClose.addEventListener('click', closeChat);
  }

  const addMessage = (text, role, source) => {
    const div = document.createElement('div');
    div.className = `chat-message ${role}`;

    const bubble = document.createElement('div');
    bubble.className = 'chat-bubble-text';
    bubble.textContent = text;
    div.appendChild(bubble);

    if (source) {
      const tag = document.createElement('span');
      tag.className = 'chat-source';
      tag.textContent = source;
      div.appendChild(tag);
    }

    chatMessages.appendChild(div);
    chatMessages.scrollTop = chatMessages.scrollHeight;
  };

  const showTyping = () => {
    const div = document.createElement('div');
    div.className = 'typing-indicator';
    div.id = 'chat-typing';
    for (let i = 0; i < 3; i++) {
      const dot = document.createElement('span');
      div.appendChild(dot);
    }
    chatMessages.appendChild(div);
    chatMessages.scrollTop = chatMessages.scrollHeight;
  };

  const removeTyping = () => {
    const el = document.getElementById('chat-typing');
    if (el) el.remove();
  };

  const handleSend = async () => {
    const text = chatInput.value.trim();
    if (!text) return;

    chatInput.value = '';
    addMessage(text, 'user');

    showTyping();

    try {
      const res = await fetch('http://localhost:3001/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: text }),
      });

      if (!res.ok) throw new Error(`HTTP ${res.status}`);

      const data = await res.json();

      const sourceLabels = {
        knowledge_base: 'Knowledge Base',
        web_search: 'Web Search',
        unavailable: null,
      };

      removeTyping();
      const cleanAnswer = data.answer.replace(/\n?\[source: \w+\]/g, '');
      addMessage(cleanAnswer, 'aid', sourceLabels[data.source] || null);
    } catch (err) {
      removeTyping();
      addMessage(
        "I'm having trouble connecting to my brain right now. Please try again in a moment.",
        'aid',
        'Connection Error'
      );
    }
  };

  if (chatSend) {
    chatSend.addEventListener('click', handleSend);
  }

  if (chatInput) {
    chatInput.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' && !e.shiftKey) {
        e.preventDefault();
        handleSend();
      }
    });
  }

  // Close chat on Escape
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && chatOpen) {
      closeChat();
    }
  });
});
