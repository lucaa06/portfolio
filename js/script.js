document.addEventListener('DOMContentLoaded', () => {

    // ----------------------------------------------------
    // Sezione: Traduzioni e cambio lingua
    // ----------------------------------------------------
    const translations = {
       it': {
            'p1': 'Fin da piccolo sono stato affascinato dalla tecnologia e dal funzionamento delle cose. Con il tempo, ho sviluppato interessi diversi: dalla programmazione web alla robotica, passando per la pallavolo e, oggi, il mondo delle startup.',
           
            'p2': 'La mia passione per la pallavolo è nata alle scuole elementari, quando ho scoperto il valore del lavoro di squadra. Dopo nove anni di esperienza in campo, ho allenato una squadra Under 13 perché credevo fortemente nello sport come scuola di vita: mi ha insegnato disciplina, spirito collaborativo e capacità di affrontare le sfide. Negli ultimi tempi ho trovato nella corsa una nuova valvola di sfogo, che mi ha trasmesso costanza e motivazione.',
            'p3': 'L’interesse per il mondo delle startup è esploso dopo aver conosciuto Vittorio Viarengo, figura che mi ha ispirato profondamente. Grazie anche al supporto e agli insegnamenti di persone come Paolo Marenco e Simona Borghi, e alla partecipazione a conferenze di grande valore, mi sono avvicinato a questo ambiente stimolante. Nel 2024 ho conseguito la certificazione CISCO in Cybersecurity e, più recentemente, la AWS Cloud 101.',
            'p4': 'Il mio obiettivo è chiaro: creare soluzioni tecnologiche utili e accessibili, capaci di migliorare concretamente la vita quotidiana. Ogni giorno rappresenta per me un’opportunità per crescere, imparare e diventare un professionista migliore.',
            'p5': 'Di recente ho riscoperto il mondo dei bambini lavorando come animatore alle feste. In mezzo a risate, giochi e colori, ho imparato a mettermi in gioco in un modo nuovo: rallentando, ascoltando davvero e lasciandomi stupire dalle piccole cose. È un’attività che mi permette di tornare bambino, osservando la realtà con occhi curiosi, pieni di immaginazione e spontaneità. Lavorare con i più piccoli richiede empatia, creatività e la capacità di reinventarsi continuamente, qualità che considero preziose anche per la mia crescita personale e professionale.',
            'p6': 'Credo profondamente che mantenere vivo questo sguardo fresco e autentico sia fondamentale per affrontare le sfide del presente con leggerezza e lucidità. In fondo, restare un po’ bambini per tutta la vita è forse il segreto per non smettere mai di imparare davvero.',
            'coach-text': 'Per un anno, ho guidato una squadra Under 13 del CUS Genova Volley. L\'obiettivo non era solo vincere, ma anche trasmettere l\'amore per la pallavolo. Li ho accompagnati nello sviluppo di tutte le tecniche di difesa, attacco, ricezione e battuta, aiutandoli a migliorare la coordinazione e a capire l\'importanza del gioco di squadra. Questa esperienza mi ha insegnato il valore della leadership, della comunicazione e della pazienza.',
            'animator-text': 'Come animatore, ho trasformato feste di compleanno e matrimoni in eventi indimenticabili. La mia specialità? Le capriole sulle nuvole! Nonostante il nome giocoso, questa esperienza mi ha insegnato a gestire un pubblico, a lavorare sotto pressione e a pensare in modo creativo per risolvere problemi sul momento. Ho affinato le mie capacità comunicative e ho imparato a creare un ambiente di gioia e spensieratezza, rendendo ogni celebrazione un successo.',
            'contact-title': 'Contatti',
            'contact-description': 'Se desideri metterti in contatto con me, inviami una mail o cercami sui social.',
            'email-text': 'Email',
            'linkedin-text': 'LinkedIn',
            'github-text': 'GitHub',
            'hero-title': 'Ciao, sono Luca.',
            'hero-subtitle': 'student and startup enthusiast',
            'about-title': 'About',
            'projects-title': 'Progetti',
            'certifications-title': 'Certificazioni',
            'education-title': 'Esperienze formative',
            'education-silicon': 'SILICON VALLEY STUDY TOUR 2025',
            'experience-title': 'Esperienze lavorative',
            'experience-coach': 'allenatore',
            'experience-animator': 'animatore',
            'cert-cybersecurity-name': 'Introduction to Cybersecurity',
            'cert-aws-name': 'AWS Educate Introduction to Cloud 101',
            'cert-business-name': 'Managing a Business Venture',
            'cert-placeholder': 'Seleziona una certificazione per vederne i dettagli.',
            'cert-cybersecurity-desc': 'Certificazione CISCO Cybersecurity ottenuta nel 2024. Ho imparato le basi della sicurezza informatica, la protezione dei dati e la prevenzione delle minacce online.', 
            'cert-aws-desc': 'Certificazione AWS Cloud 101. Ho acquisito le nozioni fondamentali del cloud computing, i servizi AWS e i vantaggi della migrazione al cloud per le aziende.',
            'cert-business-desc': 'Certificazione "Managing a Business Venture". Ho appreso i principi chiave della gestione aziendale, della pianificazione strategica e dello sviluppo di un’idea di startup.',
            'github-profile-title': 'Il mio profilo GitHub',
            'launch-demo-btn-text': 'Lancia demo',
            'view-code-btn-text': 'Vedi codice',
            'project-portfolio-title': 'Portfolio',
            'project-portfolio-description': 'Il mio portfolio personale per mostrare le mie competenze e i miei lavori.',
            'project-alarion-title': 'Alarion',
            'project-alarion-description': 'Un progetto di sviluppo web per imparare le basi di HTML e CSS.',
            'project-3d-title': '3D Website Tree',
            'project-3d-description': 'Un sito web 3D creato con three.js per esplorare le potenzialità della libreria.',
            'project-cookie-title': 'Cookie Analyzer',
            'project-cookie-description': 'Un\'estensione web per analizzare i cookie di un sito e le loro proprietà.',
            'project-dopamine-title': 'Dopamine Preview',
            'project-dopamine-description': 'Un\'anteprima di un sito web, focalizzata sul design e l\'esperienza utente.',
            'project-taskforge-title': 'Task Forge',
            'project-taskforge-description': 'Un gestore di attività per Windows, che mostra l\'utilizzo di Python.',
            'cert-css3-name': 'CSS3 Essentials',
            'cert-css3-desc': 'Certificazione "CSS3 Essentials". Ho appreso le basi di CSS3, inclusi layout, design responsivo e animazioni per migliorare l\'aspetto dei siti web.',
            'view-experience-btn': 'Vedi Esperienza'
        },
        'en': {
            'p1': 'Since I was a child, I\'ve been fascinated by technology and how things work. Over time, I developed interests ranging from web programming to robotics, and today, the startup world.',
            // MODIFICATO DA 'I now coach' a 'I coached'
            'p2': 'My passion for volleyball began in elementary school, where I discovered the value of teamwork. After nine years of playing experience, I coached an Under 13 team because I strongly believed that sports are a true school of life: they taught me discipline, collaboration, and how to face challenges. More recently, I found in running a new outlet that has taught me perseverance and motivation.',
            'p3': 'My interest in the startup world sparked after meeting Vittorio Viarengo, a figure who deeply inspired me. Thanks also to the support and teachings of people like Paolo Marenco and Simona Borghi, and by attending valuable conferences, I got closer to this stimulating environment. In 2024, I obtained the CISCO certification in Cybersecurity and, more recently, the AWS Cloud 101.',
            'p4': 'My goal is clear: to create useful and accessible technological solutions capable of concretely improving daily life. Every day is an opportunity for me to grow, learn, and become a better professional.',
            'p5': 'Recently, I rediscovered the world of children by working as a party entertainer. Amidst laughter, games, and colors, I learned to engage in a new way: by slowing down, truly listening, and letting myself be amazed by the little things. It’s an activity that allows me to be a child again, observing reality with curious eyes, full of imagination and spontaneity. Working with young children requires empathy, creativity, and the ability to reinvent oneself continuously—qualities I consider precious for my personal and professional growth as well.',
            'p6': 'I deeply believe that keeping this fresh and authentic perspective alive is essential for facing present challenges with lightness and clarity. After all, perhaps the secret to never truly stopping learning is to remain a bit of a child for life.',
            'coach-text': 'For a year, I led an Under 13 team at CUS Genova Volley. The goal was not just to win, but also to pass on the love for volleyball. I guided them in developing all the techniques of defense, attack, reception, and serving, helping them improve their coordination and understand the importance of teamwork. This experience taught me the value of leadership, communication, and patience.',
            'animator-text': 'As an entertainer, I have turned birthday parties and weddings into unforgettable events. My specialty? Somersaults on the clouds! Despite the playful name, this experience taught me how to manage an audience, work under pressure, and think creatively to solve problems on the spot. I honed my communication skills and learned how to create an environment of joy and lightheartedness, making every celebration a success.',
            'contact-title': 'Contact',
            'contact-description': 'If you\'d like to get in touch with me, send me an email or find me on social media.',
            'email-text': 'Email',
            'linkedin-text': 'LinkedIn',
            'github-text': 'GitHub',
            'hero-title': 'Hi, I\'m Luca.',
            'hero-subtitle': 'student and startup enthusiast',
            'about-title': 'About',
            'projects-title': 'Projects',
            'certifications-title': 'Certifications',
            'education-title': 'Educational Experiences',
            'education-silicon': 'SILICON VALLEY STUDY TOUR 2025',
            'experience-title': 'Work Experience',
            'experience-coach': 'coach',
            'experience-animator': 'entertainer',
            'cert-cybersecurity-name': 'Introduction to Cybersecurity',
            'cert-aws-name': 'AWS Educate Introduction to Cloud 101',
            'cert-business-name': 'Managing a Business Venture',
            'cert-placeholder': 'Select a certification to see the details.',
            'cert-cybersecurity-desc': 'CISCO Cybersecurity certification obtained in 2024. I learned the basics of cybersecurity, data protection, and prevention of online threats.',
            'cert-aws-desc': 'AWS Cloud 101 certification. I acquired fundamental knowledge of cloud computing, AWS services, and the benefits of migrating to the cloud for businesses.',
            'cert-business-desc': 'Certification in "Managing a Business Venture". I learned the key principles of business management, strategic planning, and developing a startup idea.',
            'github-profile-title': 'My GitHub Profile',
            'launch-demo-btn-text': 'Launch Demo',
            'view-code-btn-text': 'View Code',
            'project-portfolio-title': 'Portfolio',
            'project-portfolio-description': 'My personal portfolio to showcase my skills and work.',
            'project-alarion-title': 'Alarion',
            'project-alarion-description': 'A web development project to learn the basics of HTML and CSS.',
            'project-3d-title': '3D Website Tree',
            'project-3d-description': 'A 3D website created with three.js to explore the library\'s potential.',
            'project-cookie-title': 'Cookie Analyzer',
            'project-cookie-description': 'A web extension to analyze a site\'s cookies and their properties.',
            'project-dopamine-title': 'Dopamine Preview',
            'project-dopamine-description': 'A preview of a website, focusing on design and user experience.',
            'project-taskforge-title': 'Task Forge',
            'project-taskforge-description': 'A task manager for Windows, showcasing the use of Python.',
            'cert-css3-name': 'CSS3 Essentials',
            'cert-css3-desc': 'Certification in "CSS3 Essentials". I learned the basics of CSS3, including layout, responsive design, and animations to enhance website appearance.',
            'view-experience-btn': 'View Experience'
        }
    };

    const langBtn = document.getElementById('lang-btn');
    const flagImg = document.getElementById('flag-img');
    let currentLang = 'it';

    const updateContent = (lang) => {
        document.querySelectorAll('[data-key]').forEach(element => {
            const key = element.getAttribute('data-key');
            if (translations[lang] && translations[lang][key]) {
                if (element.tagName === 'A' && element.hasAttribute('title')) {
                    element.setAttribute('title', translations[lang][key]);
                } else if (element.tagName === 'SPAN' && element.hasAttribute('data-key')) {
                    element.textContent = translations[lang][key];
                } else {
                    element.textContent = translations[lang][key];
                }
            }
        });
    };
    
    updateContent(currentLang);

    langBtn.addEventListener('click', () => {
        if (currentLang === 'it') {
            currentLang = 'en';
            flagImg.src = 'https://flagcdn.com/24x18/gb.png';
            flagImg.alt = 'English Flag';
        } else {
            currentLang = 'it';
            flagImg.src = 'https://flagcdn.com/24x18/it.png';
            flagImg.alt = 'Italian Flag';
        }
        updateContent(currentLang);
    });

    // ----------------------------------------------------
    // Sezione: Scorrimento "full-page"
    // ----------------------------------------------------
    const sections = document.querySelectorAll('.full-screen-section');
    const scrollableSections = ['skills', 'projects', 'experience'];

    let isScrolling = false;
    let currentSectionIndex = 0;

    const getSectionIndex = (scrollPosition) => {
        for (let i = 0; i < sections.length; i++) {
            const section = sections[i];
            const sectionTop = section.offsetTop;
            const sectionBottom = sectionTop + section.offsetHeight;
            if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
                return i;
            }
        }
        return 0;
    };
    
    const setInitialSection = () => {
        currentSectionIndex = getSectionIndex(window.scrollY);
    };

    setInitialSection();
    window.addEventListener('resize', setInitialSection);

    window.addEventListener('wheel', (e) => {
        if (isScrolling || document.body.classList.contains('details-open')) {
            e.preventDefault();
            return;
        }

        const delta = e.deltaY;
        const currentSection = sections[currentSectionIndex];

        // Controlla se l'utente è all'interno di una sezione con scroll interno
        const isScrollingInternal = scrollableSections.includes(currentSection.id);
        
        if (isScrollingInternal) {
            const isAtEnd = currentSection.scrollHeight - currentSection.scrollTop <= currentSection.clientHeight;
            const isAtTop = currentSection.scrollTop === 0;

            if (delta > 0 && !isAtEnd) {
                return; // Permette lo scroll interno verso il basso
            } else if (delta < 0 && !isAtTop) {
                return; // Permette lo scroll interno verso l'alto
            }
        }
        
        // Gestione dello scroll tra le sezioni
        e.preventDefault();
        
        let nextSectionIndex = currentSectionIndex;
        if (delta > 0) {
            nextSectionIndex++;
        } else {
            nextSectionIndex--;
        }

        if (nextSectionIndex >= 0 && nextSectionIndex < sections.length) {
            isScrolling = true;
            sections[nextSectionIndex].scrollIntoView({ behavior: 'smooth' });
            setTimeout(() => {
                isScrolling = false;
                currentSectionIndex = nextSectionIndex;
            }, 1000); // Ritardo per l'animazione
        }
    }, { passive: false });

    // ----------------------------------------------------
    // Sezione: Animazioni on scroll (About)
    // ----------------------------------------------------
    const aboutSection = document.getElementById('about');
    const aboutText = aboutSection.querySelector('.about-text');
    const aboutParagraphs = document.querySelectorAll('.about-text p');
    
    const isMobile = window.innerWidth <= 768;

    if (!isMobile) {
        // Applica l'animazione solo su desktop
        const aboutObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    aboutText.classList.add('visible');
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });
        aboutObserver.observe(aboutSection);
    } else {
        // Su mobile, rendi i paragrafi visibili immediatamente
        aboutText.classList.add('visible');
    }

    // ----------------------------------------------------
    // Sezione: Gestione Certificazioni
    // ----------------------------------------------------
    const certItems = document.querySelectorAll('.cert-item');
    const certDetails = document.querySelector('.cert-details');
    const certDescription = document.querySelector('.cert-description');
    const certImageContainer = document.querySelector('.cert-image-container');
    
    const images = {
        'cybersecurity': './img/introduction-to-cybersecurity.png',
        'aws': './img/aws.png',
        'business': './img/managing-a-business-venture.png',
        'css3': './img/css-essentials.png'
    };

    certItems.forEach(item => {
        item.addEventListener('click', () => {
            certItems.forEach(i => i.classList.remove('selected'));
            item.classList.add('selected');
            const certType = item.dataset.cert;
            const descKey = `cert-${certType}-desc`;
            
            certDetails.classList.remove('visible');
            certImageContainer.innerHTML = '';
            
            setTimeout(() => {
                certDescription.textContent = translations[currentLang][descKey];

                const img = new Image();
                img.src = images[certType];
                img.alt = `Certificate for ${certType}`;
                
                img.onload = () => {
                    certImageContainer.appendChild(img);
                    certDetails.classList.add('visible');
                };
                
                img.onerror = () => {
                    console.error(`Error loading image for certification: ${certType}`);
                    certDetails.classList.add('visible');
                };

            }, 300);
        });
    });

    // ----------------------------------------------------
    // Sezione: Galleria SVST (freccette)
    // ----------------------------------------------------
    const galleryTrack = document.querySelector('.svst-gallery-track');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    const galleryImages = document.querySelectorAll('.svst-img');
    let currentImageIndex = 0;

    const updateGalleryPosition = () => {
        if (galleryImages.length > 0) {
            const imageWidth = galleryImages[0].offsetWidth + 15;
            galleryTrack.style.transform = `translateX(-${currentImageIndex * imageWidth}px)`;
        }
    };

    if (galleryTrack && prevBtn && nextBtn && galleryImages.length > 0) {
        prevBtn.addEventListener('click', () => {
            if (currentImageIndex > 0) {
                currentImageIndex--;
                updateGalleryPosition();
            }
        });
        nextBtn.addEventListener('click', () => {
            if (currentImageIndex < galleryImages.length - 1) {
                currentImageIndex++;
                updateGalleryPosition();
            }
        });
    }

    // ----------------------------------------------------
    // Sezione: Coriandoli SVST e dettagli esperienza
    // ----------------------------------------------------
    
    function startConfettiShow() {
        setTimeout(() => {
            shootConfettiFrom(0);
        }, 500);
        setTimeout(() => {
            shootConfettiFrom(1);
        }, 200);
    }
    
    const svstSection = document.querySelector('#education');
    const confettiDefaults = {
        startVelocity: 40,
        spread: 260,
        ticks: 100,
        gravity: 0,
        decay: 0.93,
        colors: ['#FFE55C', '#FF6363', '#77DD77', '#C8A2C8', '#4285F4', '#EA4335', '#FBBC05', '#34A853']
    };

    function shootConfettiFrom(side) {
        if (typeof confetti === 'function') {
             confetti({
                ...confettiDefaults,
                particleCount: 650,
                origin: { x: side, y: 0.7 }
            });
        }
    }

    const confettiObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                startConfettiShow();
                confettiObserver.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.5
    });

    if (svstSection) {
        confettiObserver.observe(svstSection);
    }

    const viewExperienceBtn = document.getElementById('view-experience-btn');
    const experienceDetails = document.getElementById('experience-details');
    const closeBtn = experienceDetails.querySelector('.close-btn');

    if (viewExperienceBtn && experienceDetails && closeBtn) {
        viewExperienceBtn.addEventListener('click', () => {
            experienceDetails.classList.add('open');
            document.body.classList.add('details-open', 'no-scroll');
        });
        closeBtn.addEventListener('click', () => {
            experienceDetails.classList.remove('open');
            document.body.classList.remove('details-open', 'no-scroll');
        });
    }

    document.body.addEventListener('click', (e) => {
        if (e.target.classList.contains('details-open')) {
            experienceDetails.classList.remove('open');
            document.body.classList.remove('details-open', 'no-scroll');
        }
    });

    // ----------------------------------------------------
    // Sezione: Animazione esperienze lavorative
    // ----------------------------------------------------
    const experienceCards = document.querySelectorAll('.experience-card');

    experienceCards.forEach(card => {
        card.addEventListener('click', (event) => {
            const isClosing = event.target.closest('.close-card');

            if (isClosing) {
                card.classList.remove('active');
                return;
            }

            experienceCards.forEach(c => {
                if (c !== card && c.classList.contains('active')) {
                    c.classList.remove('active');
                }
            });

            card.classList.toggle('active');
        });
    });
    
    // ----------------------------------------------------
    // Sezione: Navigazione
    // ----------------------------------------------------
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            if (targetSection) {
                targetSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    if (experienceDetails) {
        experienceDetails.addEventListener('wheel', (e) => {
            e.stopPropagation();
        }, { passive: false });
    }

    // Gestione dell'effetto "gratta e vinci"
    const skillsWrappers = document.querySelectorAll('.skills-card-wrapper');
    skillsWrappers.forEach(wrapper => {
      const canvas = wrapper.querySelector('.scratch-canvas');
      if (!canvas) return;
      
      const ctx = canvas.getContext('2d');
      let isDrawing = false;
      
      const resizeCanvas = () => {
        canvas.width = wrapper.offsetWidth;
        canvas.height = wrapper.offsetHeight;
        drawScratchLayer();
      };
      
      resizeCanvas();
      window.addEventListener('resize', resizeCanvas);

      function drawScratchLayer() {
        const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
        gradient.addColorStop(0, '#ccc');
        gradient.addColorStop(0.5, '#999');
        gradient.addColorStop(1, '#ccc');
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
      }
      
      function scratch(e) {
        if (!isDrawing) return;
        const rect = canvas.getBoundingClientRect();
        const x = (e.clientX || (e.touches[0] ? e.touches[0].clientX : 0)) - rect.left;
        const y = (e.clientY || (e.touches[0] ? e.touches[0].clientY : 0)) - rect.top;
        
        ctx.globalCompositeOperation = 'destination-out';
        ctx.beginPath();
        ctx.arc(x, y, 30, 0, Math.PI * 3, false);
        ctx.fill();
      }
      
      canvas.addEventListener('mousedown', (e) => {
        isDrawing = true;
        scratch(e);
      });
      
      canvas.addEventListener('mousemove', scratch);
      
      canvas.addEventListener('mouseup', () => {
        isDrawing = false;
      });
      
      canvas.addEventListener('mouseleave', () => {
        isDrawing = false;
      });
      
      canvas.addEventListener('touchstart', (e) => {
        e.preventDefault();
        isDrawing = true;
        scratch(e);
      }, { passive: false });
      
      canvas.addEventListener('touchmove', (e) => {
        e.preventDefault();
        scratch(e);
      }, { passive: false });
      
      canvas.addEventListener('touchend', () => {
        isDrawing = false;
      });
      
      drawScratchLayer();
    });
});
