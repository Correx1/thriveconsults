/* =============================================
   THRIVE CONSULTS — custom.js
   Initialisation + mega menu
   ============================================= */

document.addEventListener('DOMContentLoaded', function() {
  initNav();
  initFooter();
});

/* =============================================
   NAV INITIALISATION
   ============================================= */
function initNav() {
  // Canvas parses elPrimaryMenus/elPrimaryMenuTriggers at load time (line 54-55
  // of functions.bundle.js). We attach toggle behaviour here to ensure it fires
  // after the DOM is ready, replicating Canvas's exact toggle behaviour.
  var menuTrigger = document.querySelector('.primary-menu-trigger');
  var primaryMenu = document.querySelector('.primary-menu');

  if (menuTrigger && primaryMenu) {
    menuTrigger.onclick = function(e) {
      e.preventDefault();
      var menuContainer = primaryMenu.querySelector('.menu-container');
      if (menuContainer) menuContainer.classList.toggle('d-block');
      menuTrigger.classList.toggle('primary-menu-trigger-active');
      primaryMenu.classList.toggle('primary-menu-active');
      document.body.classList.toggle('primary-menu-open');
      document.body.classList.toggle('primary-menu-open-all');
    };

    // Close menu when clicking outside
    document.addEventListener('click', function(e) {
      if (!e.target.closest('.primary-menu-trigger') && !e.target.closest('.primary-menu')) {
        var menuContainer = primaryMenu.querySelector('.menu-container');
        if (menuContainer) menuContainer.classList.remove('d-block');
        menuTrigger.classList.remove('primary-menu-trigger-active');
        primaryMenu.classList.remove('primary-menu-active');
        document.body.classList.remove('primary-menu-open');
        document.body.classList.remove('primary-menu-open-all');
      }
    });

    // Close menu on Escape key
    document.addEventListener('keydown', function(e) {
      if (e.key === 'Escape' && document.body.classList.contains('primary-menu-open')) {
        var menuContainer = primaryMenu.querySelector('.menu-container');
        if (menuContainer) menuContainer.classList.remove('d-block');
        menuTrigger.classList.remove('primary-menu-trigger-active');
        primaryMenu.classList.remove('primary-menu-active');
        document.body.classList.remove('primary-menu-open');
        document.body.classList.remove('primary-menu-open-all');
        menuTrigger.querySelector('.cnvs-hamburger').focus();
      }
    });
  }

  // --- Mobile accordion for mega menu parents ---
  // On mobile (<= 991px), clicking a mega-menu parent link expands its panel
  // inline instead of navigating. On desktop, hover handles it via CSS.
  function closeAllAccordionPanels() {
    document.querySelectorAll('.mega-menu-panel.is-open').forEach(function(p) {
      p.classList.remove('is-open');
      var parentLink = p.closest('.mega-menu-parent').querySelector('.menu-link');
      if (parentLink) parentLink.setAttribute('aria-expanded', 'false');
    });
  }

  document.querySelectorAll('.mega-menu-parent > .menu-link').forEach(function(link) {
    link.addEventListener('click', function(e) {
      if (window.innerWidth > 991) return;
      e.preventDefault();
      var panel = link.closest('.mega-menu-parent').querySelector('.mega-menu-panel');
      if (!panel) return;
      var isOpen = panel.classList.contains('is-open');
      closeAllAccordionPanels();
      if (!isOpen) {
        panel.classList.add('is-open');
        link.setAttribute('aria-expanded', 'true');
      }
    });
  });

  // Clean up open panels whenever the menu overlay closes
  if (menuTrigger) {
    var origOnclick = menuTrigger.onclick;
    menuTrigger.onclick = function(e) {
      if (origOnclick) origOnclick.call(this, e);
      // Toggle has run — if menu is now closed, reset panels
      if (!document.body.classList.contains('primary-menu-open')) {
        closeAllAccordionPanels();
      }
    };
  }

  // --- Highlight current page in nav ---
  var path = window.location.pathname;
  document.querySelectorAll('.menu-container .menu-item > .menu-link').forEach(function(link) {
    var href = link.getAttribute('href');
    if (!href) return;
    if (href === path || (href !== '/' && path.startsWith(href))) {
      link.closest('.menu-item').classList.add('current');
    }
  });
}

/* =============================================
   FOOTER INITIALISATION
   ============================================= */
function initFooter() {
  // Year is set inline in footer.php — nothing extra needed here
}

/* =============================================
   BLOG CAROUSEL
   Fetches posts from WP REST API via api.js
   Renders into #blog-carousel (Owl Carousel)
   ============================================= */
function renderBlogCarousel() {
  var carousel = document.getElementById('blog-carousel');
  if (!carousel) return;

  loadBlogPosts(6)
    .then(function(posts) {
      var html = posts.map(function(post) {
        var img = (post._embedded &&
                   post._embedded['wp:featuredmedia'] &&
                   post._embedded['wp:featuredmedia'][0] &&
                   post._embedded['wp:featuredmedia'][0].source_url)
          ? post._embedded['wp:featuredmedia'][0].source_url
          : 'https://placehold.co/600x400/0e2a4a/ffffff';

        var cat = (post._embedded &&
                   post._embedded['wp:term'] &&
                   post._embedded['wp:term'][0] &&
                   post._embedded['wp:term'][0][0])
          ? post._embedded['wp:term'][0][0].name
          : 'Blog';

        var title = post.title.rendered;
        var excerpt = post.excerpt.rendered
          .replace(/<[^>]+>/g, '')
          .substring(0, 120) + '...';

        return '<div class="item">' +
          '<div class="blog-card">' +
            '<div class="blog-card-img">' +
              '<img src="' + img + '" alt="' + title + '" loading="lazy">' +
              '<span class="blog-cat-badge">' + cat + '</span>' +
            '</div>' +
            '<div class="blog-card-body">' +
              '<h4>' + title + '</h4>' +
              '<p>' + excerpt + '</p>' +
              '<a href="' + post.link + '" class="blog-card-link">' +
                'Read Article <i class="bi-arrow-right"></i>' +
              '</a>' +
            '</div>' +
          '</div>' +
        '</div>';
      }).join('');

      carousel.innerHTML = html;

      // Initialise Owl Carousel after content is injected
      if (typeof jQuery !== 'undefined' && jQuery.fn.owlCarousel) {
        jQuery('#blog-carousel').owlCarousel({
          loop: true,
          autoplay: true,
          autoplayTimeout: 4000,
          autoplayHoverPause: true,
          nav: true,
          dots: true,
          navText: [
            '<i class="bi-chevron-left"></i>',
            '<i class="bi-chevron-right"></i>'
          ],
          responsive: {
            0:   { items: 1 },
            768: { items: 2 },
            992: { items: 3 }
          }
        });
      }
    })
    .catch(function() {
      // On error, hide the entire blog section gracefully
      var section = document.getElementById('blog-section');
      if (section) section.style.display = 'none';
    });
}

/* =============================================
   STATS COUNTER
   Triggered once when #counter scrolls into view
   Uses jquery-countTo (counterup.min.js)
   ============================================= */
function initCounter() {
  var counterSection = document.getElementById('counter');
  if (!counterSection) return;

  var triggered = false;

  var observer = new IntersectionObserver(function(entries) {
    if (entries[0].isIntersecting && !triggered) {
      triggered = true;
      document.querySelectorAll('.counter-number').forEach(function(el) {
        var from  = parseInt(el.getAttribute('data-from'), 10)  || 0;
        var to    = parseInt(el.getAttribute('data-to'), 10)    || 0;
        var speed = parseInt(el.getAttribute('data-speed'), 10) || 1500;
        var interval = parseInt(el.getAttribute('data-refresh-interval'), 10) || 50;

        if (typeof jQuery !== 'undefined' && jQuery.fn.countTo) {
          jQuery(el).countTo({ from: from, to: to, speed: speed, refreshInterval: interval });
        } else {
          el.textContent = to;
        }
      });
    }
  }, { threshold: 0.3 });

  observer.observe(counterSection);
}

/* =============================================
   PARTICLES — desktop only
   (Initialise per-page after checking viewport)
   Full config extracted from demo-seo-about.html
   ============================================= */
function initParticles(elementId, config) {
  if (window.innerWidth <= 768) return;
  if (typeof particlesJS === 'undefined') return;
  particlesJS(elementId, config || {
    particles: {
      number:   { value: 80, density: { enable: true, value_area: 800 } },
      color:    { value: '#24db8d' },
      shape:    { type: 'circle' },
      opacity:  { value: 0.15, random: true },
      size:     { value: 3, random: true },
      line_linked: { enable: true, distance: 150, color: '#0e2a4a', opacity: 0.1, width: 1 },
      move:     { enable: true, speed: 2, direction: 'none', random: false, straight: false, out_mode: 'out' }
    },
    interactivity: {
      detect_on: 'canvas',
      events:    { onhover: { enable: false }, onclick: { enable: false }, resize: true }
    },
    retina_detect: true
  });
}

/* =============================================
   B.E.E.P. DIAGNOSTIC — tools/beep-diagnostic.html
   Self-contained quiz logic.
   State stored in plain JS object — no localStorage.
   Called from page after DOMContentLoaded.
   ============================================= */
function initBEEPDiagnostic() {

  // ---- Questions ----
  var questions = [
    // Branding (B) — indices 0-4
    { cat: 'Branding', text: 'When a potential customer hears your business name for the first time, do they immediately understand what you do and who you serve?' },
    { cat: 'Branding', text: 'Does your business have a consistent visual identity (logo, colours, font) that appears the same across your signage, social media, documents, and packaging?' },
    { cat: 'Branding', text: 'Can your staff explain what makes your business different from your competitors in one or two sentences?' },
    { cat: 'Branding', text: 'When customers are asked why they chose you over a competitor, do they give specific, consistent reasons?' },
    { cat: 'Branding', text: 'Does your business have a clear ideal customer profile that guides every marketing and sales decision?' },
    // Efficiency (E1) — indices 5-9
    { cat: 'Efficiency', text: 'Can your business operate for a full week at normal performance without you being physically present or available by phone?' },
    { cat: 'Efficiency', text: 'Do you have written processes (SOPs) for the most critical tasks in your business?' },
    { cat: 'Efficiency', text: 'Do new staff members receive structured onboarding that gets them productive without the founder training them personally?' },
    { cat: 'Efficiency', text: 'Are decisions in your business made consistently by your team, or do most things wait for you to decide?' },
    { cat: 'Efficiency', text: 'Do you have a clear picture of your actual cost of operations and profit margin at any given time?' },
    // Excellence (E2) — indices 10-14
    { cat: 'Excellence', text: 'Does every customer who interacts with your business receive the same standard of service regardless of which staff member handles them?' },
    { cat: 'Excellence', text: 'Do you have a formal performance management system that holds staff accountable to specific, measurable standards?' },
    { cat: 'Excellence', text: 'When a customer complaint is raised, is there a documented process your team follows to resolve it?' },
    { cat: 'Excellence', text: 'Do you track customer satisfaction or retention metrics in any structured way?' },
    { cat: 'Excellence', text: 'Are the quality standards in your business written down and trained into your team — or do they exist only in the founder\'s head?' },
    // Promotion (P) — indices 15-19
    { cat: 'Promotion', text: 'Does your business generate a consistent flow of new enquiries each week without the founder making personal sales calls?' },
    { cat: 'Promotion', text: 'Do you have a documented sales process that your team follows from first contact to closed deal?' },
    { cat: 'Promotion', text: 'Is your business findable online when a potential customer searches for what you offer in your city or market?' },
    { cat: 'Promotion', text: 'Do you have a system for following up with leads who did not convert the first time?' },
    { cat: 'Promotion', text: 'Do satisfied customers regularly refer others to your business as a result of a deliberate referral programme?' }
  ];

  var OPTIONS = [
    { label: 'Never',     value: 0 },
    { label: 'Rarely',    value: 1 },
    { label: 'Sometimes', value: 2 },
    { label: 'Always',    value: 3 }
  ];

  var TOTAL = questions.length; // 20

  // ---- Result copy by band ----
  var COPY = {
    Branding: {
      critical:   'Your brand is not clearly communicating who you are or who you serve. Potential customers cannot tell what makes you different. This is costing you sales before a conversation even starts.',
      developing: 'Your brand identity exists but it is not consistent or compelling enough to do real work for your business. There is a gap between what you know your business offers and what customers understand when they encounter it.',
      strong:     'Your brand is working. Customers understand who you are, what you stand for, and why they should choose you. Keep this standard up as you scale.'
    },
    Efficiency: {
      critical:   'Your business cannot run without you. Everything depends on your personal presence, your memory, or your direct involvement. This is the most common bottleneck we see and it is the one that limits everything else.',
      developing: 'Some systems exist but they are incomplete or inconsistently followed. You can step away briefly but not confidently. The foundation is there — it needs to be built on properly.',
      strong:     'Your operations have real structure. Your team can execute without you being the answer to every question. This is what a scalable business looks like.'
    },
    Excellence: {
      critical:   'Service quality in your business is inconsistent. Different customers get different experiences depending on who serves them, what day it is, or how busy the business is. This is quietly costing you repeat business and referrals every week.',
      developing: 'Standards exist in your business but they live in people\'s heads rather than in documented systems. You get good results when the right people are on duty. You do not always get them otherwise.',
      strong:     'Your team delivers consistently. Customers know what to expect from your business and they get it. This is a real competitive advantage — protect it as you grow.'
    },
    Promotion: {
      critical:   'Your business is not generating consistent new enquiries. You depend on word of mouth, chance encounters, and the founder\'s personal network to bring in revenue. This makes growth unpredictable and exhausting.',
      developing: 'Some marketing is happening but it is not systematic. Some leads come in but the pipeline is irregular. You are not confidently in control of how new business arrives.',
      strong:     'Your business has a working promotional engine. New enquiries arrive consistently. Your sales process converts them at a reasonable rate. Growth is within your control.'
    }
  };

  // CTA links per lowest category
  var CAT_LINKS = {
    Branding:   '/services/digital-business-strategy',
    Efficiency: '/services/operational-systems',
    Excellence: '/services/customer-service-systems',
    Promotion:  '/services/marketing-and-sales'
  };

  // ---- State ----
  var state = {
    current: 0,       // current question index (0-based)
    answers: []       // array of int scores, one per question
  };

  // Pre-fill answers array
  for (var i = 0; i < TOTAL; i++) { state.answers.push(null); }

  // ---- DOM references ----
  var quizStep      = document.getElementById('beep-quiz-step');
  var leadStep      = document.getElementById('beep-lead-step');
  var resultsStep   = document.getElementById('beep-results-step');
  var qCurrent      = document.getElementById('beep-q-current');
  var qTotal        = document.getElementById('beep-q-total');
  var progressFill  = document.getElementById('beep-progress-fill');
  var categoryBadge = document.getElementById('beep-category-badge');
  var questionText  = document.getElementById('beep-question-text');
  var optionsEl     = document.getElementById('beep-options');
  var btnBack       = document.getElementById('beep-btn-back');
  var btnNext       = document.getElementById('beep-btn-next');
  var leadForm      = document.getElementById('beep-lead-form');

  if (!quizStep || !leadStep || !resultsStep) return; // not on the diagnostic page

  // Set total
  if (qTotal) qTotal.textContent = TOTAL;

  // ---- Render question ----
  function renderQuestion(idx) {
    var q = questions[idx];
    state.current = idx;

    // Progress
    var pct = Math.round(((idx + 1) / TOTAL) * 100);
    if (progressFill) progressFill.style.width = pct + '%';
    if (qCurrent)      qCurrent.textContent      = idx + 1;
    if (categoryBadge) categoryBadge.textContent  = q.cat;

    // Question text
    if (questionText) questionText.textContent = q.text;

    // Options
    if (optionsEl) {
      optionsEl.innerHTML = '';
      OPTIONS.forEach(function(opt, oi) {
        var btn = document.createElement('button');
        btn.type      = 'button';
        btn.className = 'beep-option' + (state.answers[idx] === opt.value ? ' selected' : '');
        btn.setAttribute('aria-pressed', state.answers[idx] === opt.value ? 'true' : 'false');
        btn.innerHTML =
          '<span class="beep-option-dot"></span>' +
          '<span>' + opt.label + '</span>';
        btn.addEventListener('click', function() {
          state.answers[idx] = opt.value;
          // Update all button states
          optionsEl.querySelectorAll('.beep-option').forEach(function(b) {
            b.classList.remove('selected');
            b.setAttribute('aria-pressed', 'false');
          });
          btn.classList.add('selected');
          btn.setAttribute('aria-pressed', 'true');
          // Enable Next
          if (btnNext) {
            btnNext.disabled = false;
          }
        });
        optionsEl.appendChild(btn);
      });
    }

    // Back button
    if (btnBack) {
      btnBack.style.display = idx === 0 ? 'none' : 'inline-flex';
    }

    // Next button state
    if (btnNext) {
      btnNext.disabled = state.answers[idx] === null;
      btnNext.textContent = '';
      if (idx === TOTAL - 1) {
        btnNext.innerHTML = 'See My Results <i class="bi-arrow-right ms-2"></i>';
      } else {
        btnNext.innerHTML = 'Next <i class="bi-arrow-right ms-2"></i>';
      }
    }
  }

  // ---- Nav: Next ----
  if (btnNext) {
    btnNext.addEventListener('click', function() {
      if (state.answers[state.current] === null) return;
      if (state.current < TOTAL - 1) {
        renderQuestion(state.current + 1);
      } else {
        // Move to lead capture
        quizStep.hidden = true;
        leadStep.hidden = false;
        leadStep.querySelector('h3') && leadStep.querySelector('h3').focus();
      }
    });
  }

  // ---- Nav: Back ----
  if (btnBack) {
    btnBack.addEventListener('click', function() {
      if (state.current > 0) {
        renderQuestion(state.current - 1);
      }
    });
  }

  // ---- Lead form submit ----
  if (leadForm) {
    leadForm.addEventListener('submit', function(e) {
      e.preventDefault();
      var nameEl  = document.getElementById('beep-name');
      var phoneEl = document.getElementById('beep-phone');
      var typeEl  = document.getElementById('beep-business-type');
      if (!nameEl.value.trim() || !phoneEl.value.trim() || !typeEl.value) {
        // Simple inline validation
        if (!nameEl.value.trim()) nameEl.style.borderColor = '#ef4444';
        if (!phoneEl.value.trim()) phoneEl.style.borderColor = '#ef4444';
        if (!typeEl.value) typeEl.style.borderColor = '#ef4444';
        return;
      }
      // Show results
      leadStep.hidden   = true;
      resultsStep.hidden = false;
      renderResults();
      resultsStep.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
    // Clear error state on input
    ['beep-name', 'beep-phone', 'beep-business-type'].forEach(function(id) {
      var el = document.getElementById(id);
      if (el) el.addEventListener('input', function() { el.style.borderColor = ''; });
    });
  }

  // ---- Compute scores ----
  function computeScores() {
    var cats = ['Branding', 'Efficiency', 'Excellence', 'Promotion'];
    var scores = {};
    cats.forEach(function(cat) { scores[cat] = 0; });
    questions.forEach(function(q, idx) {
      var ans = state.answers[idx];
      if (ans !== null) scores[q.cat] += ans;
    });
    return scores;
  }

  function bandFor(score) {
    if (score <= 5)  return 'critical';
    if (score <= 10) return 'developing';
    return 'strong';
  }

  function bandLabel(b) {
    if (b === 'critical')   return 'Critical';
    if (b === 'developing') return 'Developing';
    return 'Strong';
  }

  // ---- Render results ----
  function renderResults() {
    var scores = computeScores();
    var cats   = ['Branding', 'Efficiency', 'Excellence', 'Promotion'];
    var total  = cats.reduce(function(sum, c) { return sum + scores[c]; }, 0);

    // Overall score ring
    var scoreNumEl = document.getElementById('beep-score-number');
    var ringFill   = document.getElementById('beep-ring-fill');
    var summaryEl  = document.getElementById('beep-results-summary');

    if (scoreNumEl) scoreNumEl.textContent = total;
    if (summaryEl) {
      var pct60 = Math.round((total / 60) * 100);
      if (pct60 >= 75) {
        summaryEl.textContent = 'Your business is in good health across most vital signs. Focus on your weakest area to unlock the next stage of growth.';
      } else if (pct60 >= 50) {
        summaryEl.textContent = 'Your business has a solid foundation but there are meaningful gaps to address. Your weakest vital sign is the priority.';
      } else {
        summaryEl.textContent = 'Your business has significant systems gaps that are limiting growth and costing you daily. The areas below show you exactly where to focus first.';
      }
    }

    // Animate score ring (circumference = 2 * pi * 50 ≈ 314)
    if (ringFill) {
      var circumference = 314;
      var dashOffset    = circumference - (total / 60) * circumference;
      setTimeout(function() {
        ringFill.style.strokeDashoffset = dashOffset;
      }, 100);
    }

    // Category bars
    var catsEl  = document.getElementById('beep-category-results');
    if (catsEl) {
      catsEl.innerHTML = '';
      cats.forEach(function(cat) {
        var score = scores[cat];
        var band  = bandFor(score);
        var pct   = Math.round((score / 15) * 100);
        var div   = document.createElement('div');
        div.className = 'beep-cat-result';
        div.innerHTML =
          '<div class="beep-cat-header">' +
            '<span class="beep-cat-title">' + cat + '</span>' +
            '<span class="beep-cat-score-label ' + band + '">' +
              score + '/15 &mdash; ' + bandLabel(band) +
            '</span>' +
          '</div>' +
          '<div class="beep-cat-bar-track">' +
            '<div class="beep-cat-bar-fill ' + band + '" style="width:0%"></div>' +
          '</div>' +
          '<p class="beep-cat-summary">' + COPY[cat][band] + '</p>';
        catsEl.appendChild(div);
        // Animate bar
        setTimeout(function(el, p) {
          var fill = el.querySelector('.beep-cat-bar-fill');
          if (fill) fill.style.width = p + '%';
        }.bind(null, div, pct), 200);
      });
    }

    // Lowest scoring category recommendation
    var lowestCat   = cats[0];
    var lowestScore = scores[cats[0]];
    cats.forEach(function(cat) {
      if (scores[cat] < lowestScore) {
        lowestScore = scores[cat];
        lowestCat   = cat;
      }
    });
    var recEl = document.getElementById('beep-recommendation');
    if (recEl) {
      var lowestBand = bandFor(lowestScore);
      recEl.innerHTML =
        '<span class="beep-recommendation-label">Priority Area</span>' +
        '<h3>Your Biggest Opportunity: ' + lowestCat + '</h3>' +
        '<p>' + COPY[lowestCat][lowestBand] + '</p>' +
        '<a href="' + CAT_LINKS[lowestCat] + '" class="button button-rounded btn-thrive-cta">' +
          'See How We Fix ' + lowestCat + ' <i class="bi-arrow-right ms-2"></i>' +
        '</a>';
    }
  }

  // ---- Start ----
  renderQuestion(0);
}

/* =============================================
   CONTACT FORM — contact.html
   Submits via fetch() to /form/submit.php
   Shows success or inline error — no alert()
   Called from page after DOMContentLoaded.
   ============================================= */
function initContactForm() {
  var form       = document.getElementById('contact-form');
  var submitBtn  = document.getElementById('contact-submit-btn');
  var successMsg = document.getElementById('form-success');
  var errorMsg   = document.getElementById('form-error');

  if (!form) return;

  form.addEventListener('submit', function(e) {
    e.preventDefault();

    // Hide any previous messages
    if (successMsg) successMsg.hidden = true;
    if (errorMsg)   errorMsg.hidden   = true;

    // Disable submit to prevent double submission
    if (submitBtn) {
      submitBtn.disabled    = true;
      submitBtn.textContent = 'Sending...';
    }

    var data = new FormData(form);

    fetch('/form/submit.php', {
      method:  'POST',
      body:    data,
      headers: { 'X-Requested-With': 'XMLHttpRequest' }
    })
    .then(function(res) {
      return res.json().then(function(json) {
        return { ok: res.ok, json: json };
      });
    })
    .then(function(result) {
      if (result.ok && result.json.status === 'success') {
        // Success — hide form, show message
        form.hidden = true;
        if (successMsg) {
          successMsg.hidden = false;
          successMsg.focus();
        }
      } else {
        // Server returned an error
        if (errorMsg) {
          errorMsg.textContent = result.json.message ||
            'Something went wrong. Please try WhatsApp or email us directly.';
          errorMsg.hidden = false;
        }
        // Re-enable submit
        if (submitBtn) {
          submitBtn.disabled    = false;
          submitBtn.textContent = 'Send My Message';
        }
      }
    })
    .catch(function() {
      // Network error
      if (errorMsg) {
        errorMsg.innerHTML =
          'Could not reach our server. Please ' +
          '<a href="https://wa.me/2347032681154" target="_blank" rel="noopener">send us a WhatsApp message</a> ' +
          'or email <a href="mailto:hello@thriveconsults.com">hello@thriveconsults.com</a>.';
        errorMsg.hidden = false;
      }
      if (submitBtn) {
        submitBtn.disabled    = false;
        submitBtn.textContent = 'Send My Message';
      }
    });
  });
}

/* =============================================
   PAGE-SPECIFIC AUTO-INIT
   Run the right init function based on page
   ============================================= */
document.addEventListener('DOMContentLoaded', function() {
  // B.E.E.P. Diagnostic page
  if (document.getElementById('beep-quiz-wrapper')) {
    initBEEPDiagnostic();
  }
  // Contact form
  if (document.getElementById('contact-form')) {
    initContactForm();
  }
});
