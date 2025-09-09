// --- Translations ---
const flagUrls = {
    es: 'https://flagcdn.com/es.svg', en: 'https://flagcdn.com/us.svg',
    zh: 'https://flagcdn.com/cn.svg', ja: 'https://flagcdn.com/jp.svg',
    de: 'https://flagcdn.com/de.svg', fr: 'https://flagcdn.com/fr.svg',
};

const translations = {
    es: {
        nav_home: "Inicio", nav_products: "Productos", nav_terms: "Términos", nav_privacy: "Privacidad", nav_contact: "Contacto",
        auth_register: "Registrarse",
        hero_title: `El software no es el límite. <br class="hidden md:block"> <span class="text-[#22a7d0]">Es el punto de partida.</span>`,
        hero_subtitle: "En Frostware®, creamos herramientas, cursos y simuladores de vanguardia diseñados para eliminar la fricción entre tu visión y su ejecución.",
        hero_cta: "Explora Nuestras Herramientas",
        cta_title: "¿Listo para dar el siguiente paso?",
        cta_subtitle: "Únete a miles de creadores y profesionales que ya están construyendo el futuro.",
        cta_button: "Ver Todos los Productos",
        products_tagline: "SOLUCIONES DIGITALES",
        products_title: "Un ecosistema para tu crecimiento",
        terms_title: "Términos y Condiciones",
        privacy_title: "Política de Privacidad",
        contact_title: "Ponte en contacto",
        contact_tagline: "¿TIENES PREGUNTAS?",
        contact_subtitle: "Nos encantaría saber de ti.",
        footer_legal: "Legal", footer_terms: "Términos y Condiciones", footer_privacy: "Política de Privacidad", footer_follow: "Síguenos",
        cart_title: "Tu Carrito",
        register_title: "Crear Cuenta",
        register_tagline: "ÚNETE A NOSOTROS",
        register_subtitle: "Crea tu cuenta y accede a todo nuestro ecosistema de herramientas.",
        form_name: "Nombre completo",
        form_email: "Correo electrónico",
        form_password: "Contraseña",
        form_confirm_password: "Confirmar contraseña",
        form_company: "Empresa (opcional)",
        form_terms: "Acepto los términos y condiciones",
        form_newsletter: "Quiero recibir actualizaciones por correo",
        form_submit: "Crear Cuenta",
        form_login_text: "¿Ya tienes cuenta?",
        form_login_link: "Iniciar sesión",
        // Product descriptions
        product_focusflow_desc: "Organiza tus tareas, bloquea distracciones y encuentra tu estado de máxima concentración.",
        product_flight_desc: "Aprende a volar desde cero con nuestros módulos interactivos y escenarios realistas.",
        product_codesynth_desc: "Asistente de código inteligente que autocompleta, depura y optimiza tu trabajo en tiempo real.",
        product_pixelforge_desc: "Edición de video, diseño gráfico y modelado 3D en una sola plataforma colaborativa.",
        product_dataviz_desc: "Convierte datos complejos en insights accionables con visualizaciones interactivas y análisis en tiempo real.",
        product_devflow_desc: "Suite completa de herramientas de desarrollo: debug, testing, profiling y deployment automatizado.",
        product_skillboost_desc: "Plataforma de aprendizaje adaptivo con más de 200 cursos, certificaciones y proyectos prácticos.",
        product_mindflow_desc: "Asistente de IA personalizado que entiende tu flujo de trabajo y optimiza tu productividad automáticamente.",
        product_teamsync_desc: "Espacio de trabajo colaborativo con chat, videollamadas, pizarras digitales y gestión de proyectos integrada.",
        // Contact form
        contact_form_name: "Nombre",
        contact_form_lastname: "Apellido", 
        contact_form_email: "Correo Electrónico",
        contact_form_subject: "Asunto",
        contact_form_message: "Mensaje",
        contact_form_send: "Enviar Mensaje",
        contact_subtitle_full: "Nos encantaría saber de ti. Completa el formulario a continuación y nos pondremos en contacto contigo lo antes posible.",
        // Terms content
        terms_last_updated: "Última actualización: 07 de Septiembre de 2025",
        terms_section1_title: "1. Aceptación de los Términos",
        terms_section1_content: "Al acceder y utilizar los servicios de Frostware® (en adelante, \"el Servicio\"), usted acepta estar sujeto a estos Términos y Condiciones. Si no está de acuerdo con alguna parte de los términos, no podrá utilizar el Servicio.",
        terms_section2_title: "2. Licencia de Uso",
        terms_section2_content: "Frostware® le concede una licencia limitada, no exclusiva, intransferible y revocable para utilizar nuestro software y servicios para sus fines personales o comerciales internos, sujeto a estos Términos.",
        terms_section3_title: "3. Cuentas de Usuario",
        terms_section3_content: "Para acceder a ciertas funciones del Servicio, es posible que deba crear una cuenta. Usted es responsable de mantener la confidencialidad de su contraseña y de todas las actividades que ocurran en su cuenta.",
        terms_section4_title: "4. Propiedad Intelectual",
        terms_section4_content: "El Servicio y su contenido original, características y funcionalidades son y seguirán siendo propiedad exclusiva de Frostware® y sus licenciantes. El Servicio está protegido por derechos de autor, marcas registradas y otras leyes tanto de España como de países extranjeros.",
        terms_section5_title: "5. Terminación",
        terms_section5_content: "Podemos rescindir o suspender su acceso a nuestro Servicio de inmediato, sin previo aviso ni responsabilidad, por cualquier motivo, incluido, entre otros, el incumplimiento de los Términos.",
        terms_section6_title: "6. Limitación de Responsabilidad",
        terms_section6_content: "En ningún caso Frostware®, ni sus directores, empleados, socios, agentes, proveedores o afiliados, serán responsables de daños indirectos, incidentales, especiales, consecuentes o punitivos, incluidos, entre otros, la pérdida de beneficios, datos, uso, buena voluntad u otras pérdidas intangibles.",
        terms_section7_title: "7. Cambios en los Términos",
        terms_section7_content: "Nos reservamos el derecho, a nuestra entera discreción, de modificar o reemplazar estos Términos en cualquier momento. Le notificaremos cualquier cambio publicando los nuevos Términos en esta página.",
        terms_section8_title: "8. Contáctenos",
        terms_section8_content: "Si tiene alguna pregunta sobre estos Términos, por favor contáctenos.",
        terms_contact_link: "contáctenos",
        // Privacy policy content
        privacy_last_updated: "Última actualización: 07 de Septiembre de 2025",
        privacy_section1_title: "1. Información que Recopilamos",
        privacy_section1_content: "Recopilamos información que usted nos proporciona directamente, como cuando crea una cuenta, se suscribe a un boletín informativo o se pone en contacto con nosotros. Esto puede incluir su nombre, dirección de correo electrónico y cualquier otra información que decida proporcionar.",
        privacy_section2_title: "2. Cómo Usamos Su Información",
        privacy_section2_content: "Utilizamos la información que recopilamos para operar, mantener y mejorar nuestros servicios. Esto incluye el uso de su información para:",
        privacy_section3_title: "3. Intercambio de Información",
        privacy_section3_content: "No compartimos su información personal con terceros, excepto en las siguientes circunstancias limitadas:",
        // Missing homepage content
        featured_products_tagline: "PRODUCTOS DESTACADOS",
        featured_products_title: "Herramientas para la Innovación",
        product_focusflow_name: "FocusFlow",
        product_flight_name: "Guía de Vuelo Simulado",
        product_codesynth_name: "CodeSynth AI",
        product_pixelforge_name: "PixelForge Suite",
        product_btn_details: "Ver Detalles",
        product_btn_learn: "Comenzar a Aprender",
        product_btn_beta: "Probar la Beta",
        product_btn_discover: "Descubrir Suite",
        stats_users: "Usuarios Activos",
        stats_downloads: "Descargas Totales",
        stats_reviews: "Reseñas Positivas",
        testimonials_tagline: "TESTIMONIOS",
        testimonials_title: "Lo que dicen nuestros usuarios",
        testimonial1_content: "FocusFlow ha transformado mi productividad. Es simple, potente y exactamente lo que necesitaba para mantenerme enfocado.",
        testimonial1_name: "Carlos Rodríguez",
        testimonial1_title: "Desarrollador de Software",
        testimonial2_content: "La Guía de Vuelo Simulado es increíblemente detallada. He aprendido más en una semana que en meses de ver videos.",
        testimonial2_name: "Ana Gómez",
        testimonial2_title: "Piloto Estudiante",
        testimonial3_content: "CodeSynth AI es el compañero de programación que siempre quise. Me ahorra horas de trabajo cada día.",
        testimonial3_name: "David Chen",
        testimonial3_title: "Ingeniero Full-Stack",
        copyright_text: "© 2024 Frostware®. Todos los derechos reservados.",
    },
    en: {
        nav_home: "Home", nav_products: "Products", nav_terms: "Terms", nav_privacy: "Privacy", nav_contact: "Contact",
        auth_register: "Sign Up",
        hero_title: `Software isn't the limit. <br class="hidden md:block"> <span class="text-[#22a7d0]">It's the starting point.</span>`,
        hero_subtitle: "At Frostware®, we create cutting-edge tools, courses, and simulators designed to eliminate the friction between your vision and its execution.",
        hero_cta: "Explore Our Tools",
        cta_title: "Ready to take the next step?",
        cta_subtitle: "Join thousands of creators and professionals already building the future.",
        cta_button: "View All Products",
        products_tagline: "DIGITAL SOLUTIONS",
        products_title: "An Ecosystem for Your Growth",
        terms_title: "Terms and Conditions",
        privacy_title: "Privacy Policy",
        contact_title: "Get in Touch",
        contact_tagline: "HAVE QUESTIONS?",
        contact_subtitle: "We'd love to hear from you.",
        footer_legal: "Legal", footer_terms: "Terms & Conditions", footer_privacy: "Privacy Policy", footer_follow: "Follow Us",
        cart_title: "Your Cart",
        register_title: "Create Account",
        register_tagline: "JOIN US",
        register_subtitle: "Create your account and access our entire ecosystem of tools.",
        form_name: "Full name",
        form_email: "Email address",
        form_password: "Password",
        form_confirm_password: "Confirm password",
        form_company: "Company (optional)",
        form_terms: "I accept the terms and conditions",
        form_newsletter: "I want to receive email updates",
        form_submit: "Create Account",
        form_login_text: "Already have an account?",
        form_login_link: "Sign in",
        // Product descriptions
        product_focusflow_desc: "Organize your tasks, block distractions and find your state of maximum concentration.",
        product_flight_desc: "Learn to fly from scratch with our interactive modules and realistic scenarios.",
        product_codesynth_desc: "Intelligent code assistant that autocompletes, debugs and optimizes your work in real time.",
        product_pixelforge_desc: "Video editing, graphic design and 3D modeling in a single collaborative platform.",
        product_dataviz_desc: "Turn complex data into actionable insights with interactive visualizations and real-time analysis.",
        product_devflow_desc: "Complete suite of development tools: debug, testing, profiling and automated deployment.",
        product_skillboost_desc: "Adaptive learning platform with over 200 courses, certifications and hands-on projects.",
        product_mindflow_desc: "Personalized AI assistant that understands your workflow and automatically optimizes your productivity.",
        product_teamsync_desc: "Collaborative workspace with chat, video calls, digital whiteboards and integrated project management.",
        // Contact form
        contact_form_name: "First Name",
        contact_form_lastname: "Last Name", 
        contact_form_email: "Email Address",
        contact_form_subject: "Subject",
        contact_form_message: "Message",
        contact_form_send: "Send Message",
        contact_subtitle_full: "We'd love to hear from you. Fill out the form below and we'll get back to you as soon as possible.",
        // Terms content
        terms_last_updated: "Last updated: September 7, 2025",
        terms_section1_title: "1. Acceptance of Terms",
        terms_section1_content: "By accessing and using Frostware®'s services (hereinafter \"the Service\"), you agree to be bound by these Terms and Conditions. If you disagree with any part of the terms, then you may not use the Service.",
        terms_section2_title: "2. License to Use",
        terms_section2_content: "Frostware® grants you a limited, non-exclusive, non-transferable, and revocable license to use our software and services for your personal or internal commercial purposes, subject to these Terms.",
        terms_section3_title: "3. User Accounts",
        terms_section3_content: "To access certain features of the Service, you may be required to create an account. You are responsible for maintaining the confidentiality of your password and for all activities that occur under your account.",
        terms_section4_title: "4. Intellectual Property",
        terms_section4_content: "The Service and its original content, features and functionality are and will remain the exclusive property of Frostware® and its licensors. The Service is protected by copyright, trademark and other laws of both Spain and foreign countries.",
        terms_section5_title: "5. Termination",
        terms_section5_content: "We may terminate or suspend your access to our Service immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms.",
        terms_section6_title: "6. Limitation of Liability",
        terms_section6_content: "In no event shall Frostware®, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses.",
        terms_section7_title: "7. Changes to Terms",
        terms_section7_content: "We reserve the right, at our sole discretion, to modify or replace these Terms at any time. We will notify you of any changes by posting the new Terms on this page.",
        terms_section8_title: "8. Contact Us",
        terms_section8_content: "If you have any questions about these Terms, please contact us.",
        terms_contact_link: "contact us",
        // Privacy policy content
        privacy_last_updated: "Last updated: September 7, 2025",
        privacy_section1_title: "1. Information We Collect",
        privacy_section1_content: "We collect information you provide directly to us, such as when you create an account, subscribe to a newsletter, or contact us. This may include your name, email address, and any other information you choose to provide.",
        privacy_section2_title: "2. How We Use Your Information",
        privacy_section2_content: "We use the information we collect to operate, maintain, and improve our services. This includes using your information to:",
        privacy_section3_title: "3. Information Sharing",
        privacy_section3_content: "We do not share your personal information with third parties except in the following limited circumstances:",
        // Missing homepage content
        featured_products_tagline: "FEATURED PRODUCTS",
        featured_products_title: "Tools for Innovation",
        product_focusflow_name: "FocusFlow",
        product_flight_name: "Flight Simulation Guide",
        product_codesynth_name: "CodeSynth AI",
        product_pixelforge_name: "PixelForge Suite",
        product_btn_details: "View Details",
        product_btn_learn: "Start Learning",
        product_btn_beta: "Try Beta",
        product_btn_discover: "Discover Suite",
        stats_users: "Active Users",
        stats_downloads: "Total Downloads",
        stats_reviews: "Positive Reviews",
        testimonials_tagline: "TESTIMONIALS",
        testimonials_title: "What our users say",
        testimonial1_content: "FocusFlow has transformed my productivity. It's simple, powerful and exactly what I needed to stay focused.",
        testimonial1_name: "Carlos Rodriguez",
        testimonial1_title: "Software Developer",
        testimonial2_content: "The Flight Simulation Guide is incredibly detailed. I've learned more in a week than in months of watching videos.",
        testimonial2_name: "Ana Gomez",
        testimonial2_title: "Student Pilot",
        testimonial3_content: "CodeSynth AI is the programming companion I always wanted. It saves me hours of work every day.",
        testimonial3_name: "David Chen",
        testimonial3_title: "Full-Stack Engineer",
        copyright_text: "© 2024 Frostware®. All rights reserved.",
    },
    de: {
        nav_home: "Startseite", nav_products: "Produkte", nav_terms: "AGB", nav_privacy: "Datenschutz", nav_contact: "Kontakt", auth_register: "Anmelden",
        hero_title: `Software ist nicht die Grenze. <br class="hidden md:block"> <span class="text-[#22a7d0]">Es ist der Ausgangspunkt.</span>`,
        hero_subtitle: "Bei Frostware® erstellen wir modernste Tools, Kurse und Simulatoren, die die Reibung zwischen Ihrer Vision und ihrer Umsetzung eliminieren.",
        hero_cta: "Entdecken Sie unsere Tools", cta_title: "Bereit für den nächsten Schritt?",
        cta_subtitle: "Schließen Sie sich Tausenden von Entwicklern und Fachleuten an, die bereits die Zukunft gestalten.", cta_button: "Alle Produkte anzeigen",
        products_tagline: "DIGITALE LÖSUNGEN", products_title: "Ein Ökosystem für Ihr Wachstum", terms_title: "Allgemeine Geschäftsbedingungen",
        privacy_title: "Datenschutz-Bestimmungen", contact_title: "Kontakt aufnehmen", contact_tagline: "HABEN SIE FRAGEN?", contact_subtitle: "Wir würden uns freuen, von Ihnen zu hören.",
        footer_legal: "Rechtliches", footer_terms: "AGB", footer_privacy: "Datenschutz", footer_follow: "Folgen Sie uns", cart_title: "Ihr Warenkorb",
        register_title: "Konto erstellen", register_tagline: "TRETEN SIE UNS BEI", register_subtitle: "Erstellen Sie Ihr Konto und erhalten Sie Zugang zu unserem gesamten Tool-Ökosystem.",
        form_name: "Vollständiger Name", form_email: "E-Mail-Adresse", form_password: "Passwort", form_confirm_password: "Passwort bestätigen",
        form_company: "Unternehmen (optional)", form_terms: "Ich akzeptiere die Geschäftsbedingungen", form_newsletter: "Ich möchte E-Mail-Updates erhalten",
        form_submit: "Konto erstellen", form_login_text: "Haben Sie bereits ein Konto?", form_login_link: "Anmelden",
        featured_products_tagline: "AUSGEWÄHLTE PRODUKTE", featured_products_title: "Tools für Innovation",
        product_focusflow_name: "FocusFlow", product_flight_name: "Flugsimulator-Leitfaden", product_codesynth_name: "CodeSynth AI", product_pixelforge_name: "PixelForge Suite",
        product_dataviz_name: "DataViz Pro", product_devflow_name: "DevFlow Studio", product_skillboost_name: "SkillBoost", product_mindflow_name: "MindFlow AI", product_teamsync_name: "TeamSync",
        product_btn_details: "Details anzeigen", product_btn_learn: "Lernen beginnen", product_btn_beta: "Beta testen", product_btn_discover: "Suite entdecken",
        product_focusflow_desc: "Organisieren Sie Ihre Aufgaben, blockieren Sie Ablenkungen und finden Sie Ihren maximalen Konzentrationszustand.",
        product_flight_desc: "Lernen Sie von Grund auf das Fliegen mit unseren interaktiven Modulen und realistischen Szenarien.",
        product_codesynth_desc: "Intelligenter Code-Assistent, der Ihre Arbeit in Echtzeit vervollständigt, debuggt und optimiert.",
        product_pixelforge_desc: "Videobearbeitung, Grafikdesign und 3D-Modellierung auf einer kollaborativen Plattform.",
        product_dataviz_desc: "Verwandeln Sie komplexe Daten in umsetzbare Erkenntnisse mit interaktiven Visualisierungen und Echtzeitanalysen.",
        product_devflow_desc: "Komplette Suite von Entwicklungstools: Debug, Testing, Profiling und automatisierte Bereitstellung.",
        product_skillboost_desc: "Adaptive Lernplattform mit über 200 Kursen, Zertifizierungen und praktischen Projekten.",
        product_mindflow_desc: "Personalisierter KI-Assistent, der Ihren Arbeitsablauf versteht und Ihre Produktivität automatisch optimiert.",
        product_teamsync_desc: "Kollaborativer Arbeitsbereich mit Chat, Videoanrufen, digitalen Whiteboards und integriertem Projektmanagement.",
        stats_users: "Aktive Benutzer", stats_downloads: "Gesamte Downloads", stats_reviews: "Positive Bewertungen",
        testimonials_tagline: "ERFAHRUNGSBERICHTE", testimonials_title: "Was unsere Benutzer sagen",
        testimonial1_content: "FocusFlow hat meine Produktivität transformiert. Es ist einfach, kraftvoll und genau das, was ich brauchte, um konzentriert zu bleiben.",
        testimonial1_name: "Carlos Rodriguez", testimonial1_title: "Software-Entwickler",
        testimonial2_content: "Der Flugsimulator-Leitfaden ist unglaublich detailliert. Ich habe in einer Woche mehr gelernt als in monatelangem Videoschauen.",
        testimonial2_name: "Ana Gomez", testimonial2_title: "Flugschülerin",
        testimonial3_content: "CodeSynth AI ist der Programmierbegleiter, den ich immer wollte. Es spart mir jeden Tag Stunden Arbeit.",
        testimonial3_name: "David Chen", testimonial3_title: "Full-Stack-Ingenieur",
        copyright_text: "© 2024 Frostware®. Alle Rechte vorbehalten.",
        contact_form_name: "Name", contact_form_email: "E-Mail", contact_form_subject: "Betreff", contact_form_message: "Nachricht", contact_form_submit: "Nachricht senden",
        privacy_last_updated: "Letzte Aktualisierung: 07. September 2025", terms_last_updated: "Letzte Aktualisierung: 07. September 2025",
        privacy_section1_title: "1. Informationen, die wir sammeln", terms_section1_title: "1. Akzeptanz der Bedingungen",
        privacy_section2_title: "2. Wie wir Ihre Informationen verwenden", terms_section2_title: "2. Nutzungslizenz",
        privacy_section3_title: "3. Informationsaustausch", terms_section3_title: "3. Benutzerkonten",
        terms_section4_title: "4. Geistiges Eigentum", terms_section5_title: "5. Kündigung",
        terms_section6_title: "6. Haftungsbeschränkung", terms_section7_title: "7. Änderungen der Bedingungen", terms_section8_title: "8. Kontaktieren Sie uns",
        terms_contact_link: "kontaktieren Sie uns",
        privacy_section1_content: "Wir sammeln Informationen, die Sie uns direkt zur Verfügung stellen, beispielsweise wenn Sie ein Konto erstellen, sich für einen Newsletter anmelden oder uns kontaktieren. Dies kann Ihren Namen, Ihre E-Mail-Adresse und alle anderen Informationen umfassen, die Sie bereitstellen möchten.",
        privacy_section2_content: "Wir verwenden die von uns gesammelten Informationen, um unsere Dienste zu betreiben, zu warten und zu verbessern. Dies umfasst die Verwendung Ihrer Informationen für:",
        privacy_section3_content: "Wir teilen Ihre persönlichen Informationen nicht mit Dritten, außer unter den folgenden begrenzten Umständen:",
        terms_section1_content: "Durch den Zugriff auf und die Nutzung der Dienste von Frostware® (im Folgenden \"der Dienst\") stimmen Sie zu, diesen Geschäftsbedingungen unterworfen zu sein. Wenn Sie mit einem Teil der Bedingungen nicht einverstanden sind, können Sie den Dienst nicht nutzen.",
        terms_section2_content: "Frostware® gewährt Ihnen eine begrenzte, nicht-exklusive, nicht übertragbare und widerrufbare Lizenz zur Nutzung unserer Software und Dienste für Ihre persönlichen oder internen kommerziellen Zwecke, vorbehaltlich dieser Bedingungen.",
        terms_section3_content: "Um auf bestimmte Funktionen des Dienstes zugreifen zu können, müssen Sie möglicherweise ein Konto erstellen. Sie sind dafür verantwortlich, die Vertraulichkeit Ihres Passworts zu wahren und für alle Aktivitäten, die unter Ihrem Konto auftreten.",
        terms_section4_content: "Der Dienst und sein ursprünglicher Inhalt, seine Funktionen und Funktionalitäten sind und bleiben ausschließliches Eigentum von Frostware® und seinen Lizenzgebern. Der Dienst ist durch Urheberrechts-, Marken- und andere Gesetze sowohl Spaniens als auch anderer Länder geschützt.",
        terms_section5_content: "Wir können Ihren Zugang zu unserem Dienst sofort beenden oder aussetzen, ohne vorherige Ankündigung oder Haftung, aus jedem Grund, einschließlich, aber nicht beschränkt auf einen Verstoß gegen die Bedingungen.",
        terms_section6_content: "In keinem Fall sind Frostware®, noch seine Direktoren, Mitarbeiter, Partner, Vertreter, Lieferanten oder Tochtergesellschaften für indirekte, zufällige, besondere, Folge- oder Strafschäden verantwortlich, einschließlich, aber nicht beschränkt auf Verlust von Gewinnen, Daten, Nutzung, Goodwill oder andere immaterielle Verluste.",
        terms_section7_content: "Wir behalten uns das Recht vor, nach unserem alleinigen Ermessen, diese Bedingungen jederzeit zu ändern oder zu ersetzen. Wir werden Sie über alle Änderungen informieren, indem wir die neuen Bedingungen auf dieser Seite veröffentlichen.",
        terms_section8_content: "Wenn Sie Fragen zu diesen Bedingungen haben, bitte",
    },
    fr: {
        nav_home: "Accueil", nav_products: "Produits", nav_terms: "Termes", nav_privacy: "Confidentialité", nav_contact: "Contact", auth_register: "S'inscrire",
        hero_title: `Le logiciel n'est pas la limite. <br class="hidden md:block"> <span class="text-[#22a7d0]">C'est le point de départ.</span>`, hero_cta: "Découvrez nos outils", cta_title: "Prêt à passer à l'étape suivante ?",
        cta_subtitle: "Rejoignez des milliers de créateurs et de professionnels qui construisent déjà l'avenir.", cta_button: "Voir tous les produits",
        products_tagline: "SOLUTIONS NUMÉRIQUES", products_title: "Un écosystème pour votre croissance", terms_title: "Termes et Conditions",
        privacy_title: "Politique de confidentialité", contact_title: "Nous contacter", contact_tagline: "AVEZ-VOUS DES QUESTIONS ?", contact_subtitle: "Nous aimerions avoir de vos nouvelles.",
        footer_legal: "Légal", footer_terms: "Termes et Conditions", footer_privacy: "Politique de confidentialité", footer_follow: "Suivez-nous", cart_title: "Votre panier",
        // Missing homepage content
        featured_products_tagline: "PRODUITS VEDETTES",
        featured_products_title: "Outils pour l'Innovation",
        product_focusflow_name: "FocusFlow",
        product_flight_name: "Guide de Simulation de Vol",
        product_codesynth_name: "CodeSynth AI",
        product_pixelforge_name: "Suite PixelForge",
        product_btn_details: "Voir Détails",
        product_btn_learn: "Commencer à Apprendre",
        product_btn_beta: "Essayer la Bêta",
        product_btn_discover: "Découvrir la Suite",
        stats_users: "Utilisateurs Actifs",
        stats_downloads: "Téléchargements Totaux",
        stats_reviews: "Avis Positifs",
        testimonials_tagline: "TÉMOIGNAGES",
        testimonials_title: "Ce que disent nos utilisateurs",
        testimonial1_content: "FocusFlow a transformé ma productivité. C'est simple, puissant et exactement ce dont j'avais besoin pour rester concentré.",
        testimonial1_name: "Carlos Rodriguez",
        testimonial1_title: "Développeur Logiciel",
        testimonial2_content: "Le Guide de Simulation de Vol est incroyablement détaillé. J'ai appris plus en une semaine qu'en des mois de visionnage de vidéos.",
        testimonial2_name: "Ana Gomez",
        testimonial2_title: "Pilote Étudiante",
        testimonial3_content: "CodeSynth AI est le compagnon de programmation que j'ai toujours voulu. Il me fait économiser des heures de travail chaque jour.",
        testimonial3_name: "David Chen",
        testimonial3_title: "Ingénieur Full-Stack",
        copyright_text: "© 2024 Frostware®. Tous droits réservés.",
    },
    zh: {
        nav_home: "首页", nav_products: "产品", nav_terms: "条款", nav_privacy: "隐私", nav_contact: "联系", auth_register: "注册",
        hero_title: `软件不是终点. <br class="hidden md:block"> <span class="text-[#22a7d0]">而是起点.</span>`,
        hero_subtitle: "在Frostware®，我们创造尖端的工具、课程和模拟器，旨在消除您的愿景与执行之间的摩擦。",
        hero_cta: "探索我们的工具", cta_title: "准备好迈出下一步了吗？",
        cta_subtitle: "加入成千上万已经在构建未来的创作者和专业人士的行列。", cta_button: "查看所有产品",
        products_tagline: "数字解决方案", products_title: "一个为您的成长而生的生态系统", terms_title: "条款和条件",
        privacy_title: "隐私政策", contact_title: "联系我们", contact_tagline: "有问题吗？", contact_subtitle: "我们很乐意听取您的意见。",
        footer_legal: "法律", footer_terms: "条款和条件", footer_privacy: "隐私政策", footer_follow: "关注我们", cart_title: "您的购物车",
        register_title: "创建账户", register_tagline: "加入我们", register_subtitle: "创建您的账户并访问我们完整的工具生态系统。",
        form_name: "全名", form_email: "电子邮件地址", form_password: "密码", form_confirm_password: "确认密码",
        form_company: "公司（可选）", form_terms: "我接受条款和条件", form_newsletter: "我想接收电子邮件更新",
        form_submit: "创建账户", form_login_text: "已有账户？", form_login_link: "登录",
        featured_products_tagline: "精选产品", featured_products_title: "创新工具",
        product_focusflow_name: "专注流", product_flight_name: "飞行模拟指南", product_codesynth_name: "代码合成AI", product_pixelforge_name: "像素锻造套件",
        product_dataviz_name: "数据可视化专业版", product_devflow_name: "开发流工作室", product_skillboost_name: "技能提升", product_mindflow_name: "思维流AI", product_teamsync_name: "团队同步",
        product_btn_details: "查看详情", product_btn_learn: "开始学习", product_btn_beta: "试用测试版", product_btn_discover: "探索套件",
        product_focusflow_desc: "整理您的任务，屏蔽干扰，找到您的最大专注状态。",
        product_flight_desc: "通过我们的互动模块和真实场景从零开始学习飞行。",
        product_codesynth_desc: "智能代码助手，实时自动完成、调试和优化您的工作。",
        product_pixelforge_desc: "在一个协作平台上进行视频编辑、图形设计和3D建模。",
        product_dataviz_desc: "通过交互式可视化和实时分析将复杂数据转化为可操作的洞察。",
        product_devflow_desc: "完整的开发工具套件：调试、测试、性能分析和自动化部署。",
        product_skillboost_desc: "自适应学习平台，拥有200多个课程、认证和实践项目。",
        product_mindflow_desc: "个性化AI助手，理解您的工作流程并自动优化您的生产力。",
        product_teamsync_desc: "集成聊天、视频通话、数字白板和项目管理的协作工作区。",
        stats_users: "活跃用户", stats_downloads: "总下载量", stats_reviews: "正面评价",
        testimonials_tagline: "用户评价", testimonials_title: "用户怎么说",
        testimonial1_content: "专注流改变了我的生产力。它简单、强大，正是我保持专注所需要的。",
        testimonial1_name: "卡洛斯·罗德里格斯", testimonial1_title: "软件开发者",
        testimonial2_content: "飞行模拟指南非常详细。我在一周内学到的比看几个月视频还要多。",
        testimonial2_name: "安娜·戈麦斯", testimonial2_title: "学生飞行员",
        testimonial3_content: "代码合成AI是我一直想要的编程伴侣。它每天为我节省数小时的工作。",
        testimonial3_name: "陈大伟", testimonial3_title: "全栈工程师",
        copyright_text: "© 2024 Frostware®。保留所有权利。",
        contact_form_name: "姓名", contact_form_email: "电子邮件", contact_form_subject: "主题", contact_form_message: "消息", contact_form_submit: "发送消息",
        privacy_last_updated: "最后更新：2025年9月7日", terms_last_updated: "最后更新：2025年9月7日",
        privacy_section1_title: "1. 我们收集的信息", terms_section1_title: "1. 接受条款",
        privacy_section2_title: "2. 我们如何使用您的信息", terms_section2_title: "2. 使用许可",
        privacy_section3_title: "3. 信息共享", terms_section3_title: "3. 用户账户",
        terms_section4_title: "4. 知识产权", terms_section5_title: "5. 终止",
        terms_section6_title: "6. 责任限制", terms_section7_title: "7. 条款变更", terms_section8_title: "8. 联系我们",
        terms_contact_link: "联系我们",
        privacy_section1_content: "我们收集您直接提供给我们的信息，例如当您创建账户、订阅新闻通讯或联系我们时。这可能包括您的姓名、电子邮件地址和您选择提供的任何其他信息。",
        privacy_section2_content: "我们使用收集的信息来运营、维护和改进我们的服务。这包括将您的信息用于：",
        privacy_section3_content: "我们不与第三方共享您的个人信息，除非在以下有限情况下：",
        terms_section1_content: "通过访问和使用Frostware®的服务（以下简称\"服务\"），您同意受这些条款和条件的约束。如果您不同意任何部分条款，您不得使用该服务。",
        terms_section2_content: "Frostware®向您授予有限的、非排他性的、不可转让的和可撤销的许可，以便为您的个人或内部商业目的使用我们的软件和服务，但须遵守这些条款。",
        terms_section3_content: "要访问服务的某些功能，您可能需要创建一个账户。您有责任维护密码的保密性并对您账户下发生的所有活动负责。",
        terms_section4_content: "服务及其原始内容、功能和功能是并将继续是Frostware®及其许可方的专有财产。该服务受西班牙和外国的版权、商标和其他法律的保护。",
        terms_section5_content: "我们可能会立即终止或暂停您对我们服务的访问，无需事先通知或承担责任，无论出于何种原因，包括但不限于违反条款。",
        terms_section6_content: "在任何情况下，Frostware®及其董事、员工、合作伙伴、代理商、供应商或关联公司都不对任何间接、偶然、特殊、后果性或惩罚性损害负责，包括但不限于利润损失、数据、使用、商誉或其他无形损失。",
        terms_section7_content: "我们保留随时自行决定修改或替换这些条款的权利。我们将通过在此页面上发布新条款来通知您任何更改。",
        terms_section8_content: "如果您对这些条款有任何疑问，请",
    },
    ja: {
        nav_home: "ホーム", nav_products: "製品", nav_terms: "規約", nav_privacy: "プライバシー", nav_contact: "お問い合わせ", auth_register: "登録",
        hero_title: `ソフトウェアは限界ではない. <br class="hidden md:block"> <span class="text-[#22a7d0]">出発点です.</span>`,
        hero_subtitle: "Frostware®では、あなたのビジョンとその実行の間の摩擦を取り除くように設計された最先端のツール、コース、シミュレーターを作成しています。",
        hero_cta: "ツールを探す", cta_title: "次の一歩を踏み出す準備はできましたか？",
        cta_subtitle: "すでに未来を築いている何千人ものクリエイターやプロフェッショナルに加わりましょう。", cta_button: "すべての製品を見る",
        products_tagline: "デジタルソリューション", products_title: "あなたの成長のためのエコシステム", terms_title: "利用規約",
        privacy_title: "プライバシーポリシー", contact_title: "お問い合わせ", contact_tagline: "ご質問はありますか？", contact_subtitle: "ご連絡をお待ちしております。",
        footer_legal: "法的", footer_terms: "利用規約", footer_privacy: "プライバシーポリシー", footer_follow: "フォローしてください", cart_title: "あなたのカート",
        register_title: "アカウント作成", register_tagline: "参加しましょう", register_subtitle: "アカウントを作成して、私たちの完全なツールエコシステムにアクセスしてください。",
        form_name: "フルネーム", form_email: "メールアドレス", form_password: "パスワード", form_confirm_password: "パスワード確認",
        form_company: "会社（オプション）", form_terms: "利用規約に同意します", form_newsletter: "メール更新を受け取りたい",
        form_submit: "アカウント作成", form_login_text: "すでにアカウントをお持ちですか？", form_login_link: "ログイン",
        featured_products_tagline: "注目製品", featured_products_title: "イノベーションのためのツール",
        product_focusflow_name: "フォーカスフロー", product_flight_name: "フライトシミュレーションガイド", product_codesynth_name: "コードシンスAI", product_pixelforge_name: "ピクセルフォージスイート",
        product_dataviz_name: "データビズプロ", product_devflow_name: "デブフロースタジオ", product_skillboost_name: "スキルブースト", product_mindflow_name: "マインドフローAI", product_teamsync_name: "チームシンク",
        product_btn_details: "詳細を見る", product_btn_learn: "学習開始", product_btn_beta: "ベータ版を試す", product_btn_discover: "スイートを発見",
        product_focusflow_desc: "タスクを整理し、注意散漫をブロックし、最大限の集中状態を見つけましょう。",
        product_flight_desc: "インタラクティブなモジュールと現実的なシナリオでゼロから飛行を学びましょう。",
        product_codesynth_desc: "リアルタイムであなたの作業を自動補完、デバッグ、最適化するインテリジェントなコードアシスタント。",
        product_pixelforge_desc: "一つの協力的プラットフォームでビデオ編集、グラフィックデザイン、3Dモデリング。",
        product_dataviz_desc: "インタラクティブな可視化とリアルタイム分析で複雑なデータを実用的な洞察に変換します。",
        product_devflow_desc: "完全な開発ツールスイート：デバッグ、テスト、プロファイリング、自動デプロイメント。",
        product_skillboost_desc: "200以上のコース、認定、実践プロジェクトを持つ適応学習プラットフォーム。",
        product_mindflow_desc: "あなたのワークフローを理解し、生産性を自動的に最適化するパーソナライズされたAIアシスタント。",
        product_teamsync_desc: "チャット、ビデオ通話、デジタルホワイトボード、統合プロジェクト管理を備えた協力的ワークスペース。",
        stats_users: "アクティブユーザー", stats_downloads: "総ダウンロード数", stats_reviews: "ポジティブレビュー",
        testimonials_tagline: "お客様の声", testimonials_title: "ユーザーの声",
        testimonial1_content: "フォーカスフローは私の生産性を変革しました。シンプルで強力で、集中を保つために必要だったものです。",
        testimonial1_name: "カルロス・ロドリゲス", testimonial1_title: "ソフトウェア開発者",
        testimonial2_content: "フライトシミュレーションガイドは信じられないほど詳細です。数ヶ月のビデオ視聴より一週間で多くを学びました。",
        testimonial2_name: "アナ・ゴメス", testimonial2_title: "学生パイロット",
        testimonial3_content: "コードシンスAIは私がずっと欲しかったプログラミングの相棒です。毎日何時間もの作業を節約してくれます。",
        testimonial3_name: "デイビッド・チェン", testimonial3_title: "フルスタックエンジニア",
        copyright_text: "© 2024 Frostware®。すべての権利予約。",
        contact_form_name: "名前", contact_form_email: "メール", contact_form_subject: "件名", contact_form_message: "メッセージ", contact_form_submit: "メッセージ送信",
        privacy_last_updated: "最終更新：2025年9月7日", terms_last_updated: "最終更新：2025年9月7日",
        privacy_section1_title: "1. 収集する情報", terms_section1_title: "1. 規約の受諾",
        privacy_section2_title: "2. 情報の使用方法", terms_section2_title: "2. 使用ライセンス",
        privacy_section3_title: "3. 情報共有", terms_section3_title: "3. ユーザーアカウント",
        terms_section4_title: "4. 知的財産", terms_section5_title: "5. 終了",
        terms_section6_title: "6. 責任制限", terms_section7_title: "7. 規約変更", terms_section8_title: "8. お問い合わせ",
        terms_contact_link: "お問い合わせください",
        privacy_section1_content: "アカウント作成、ニュースレター購読、お問い合わせの際など、お客様が直接提供する情報を収集します。これには、お名前、メールアドレス、およびお客様が提供することを選択したその他の情報が含まれる場合があります。",
        privacy_section2_content: "収集した情報を使用して、サービスの運営、維持、改善を行います。これには、以下の目的での情報使用が含まれます：",
        privacy_section3_content: "以下の限定的な状況を除き、お客様の個人情報を第三者と共有することはありません：",
        terms_section1_content: "Frostware®のサービス（以下「サービス」）にアクセスして使用することにより、お客様はこれらの利用規約に拘束されることに同意します。条項の一部に同意しない場合は、サービスを使用できません。",
        terms_section2_content: "Frostware®は、これらの条項に従い、お客様の個人的または内部商業目的でのソフトウェアおよびサービスの使用について、限定的、非独占的、譲渡不可、および取り消し可能なライセンスを付与します。",
        terms_section3_content: "サービスの特定の機能にアクセスするには、アカウントを作成する必要がある場合があります。パスワードの機密性を維持し、アカウントで発生するすべての活動に責任を負います。",
        terms_section4_content: "サービスおよびその元のコンテンツ、機能、および機能は、Frostware®およびそのライセンサーの独占的財産であり、今後もそうであり続けます。サービスは、スペインおよび外国の著作権、商標、その他の法律によって保護されています。",
        terms_section5_content: "条項違反を含むがこれに限定されない理由により、事前の通知や責任なしに、お客様のサービスへのアクセスを即座に終了または停止することがあります。",
        terms_section6_content: "いかなる場合も、Frostware®、その取締役、従業員、パートナー、代理人、サプライヤー、または関連会社は、利益、データ、使用、のれん、その他の無形損失を含むがこれに限定されない間接的、偶発的、特別、結果的、または懲罰的損害について責任を負いません。",
        terms_section7_content: "独自の裁量により、いつでもこれらの条項を変更または置き換える権利を留保します。このページに新しい条項を投稿することにより、変更をお知らせします。",
        terms_section8_content: "これらの条項について質問がある場合は、",
    },
};

function changeLanguage(lang) {
    if (!translations[lang]) lang = 'es';
    localStorage.setItem('selectedLanguage', lang);
    
    document.querySelectorAll('[data-translate-key]').forEach(el => {
        const key = el.getAttribute('data-translate-key');
        const translation = translations[lang][key] || translations.es[key];
        if (translation) {
            el.innerHTML = translation;
        }
    });

    const langButton = document.getElementById('language-button');
    if (langButton) {
        langButton.querySelector('#current-lang').textContent = lang.toUpperCase();
        langButton.querySelector('#current-flag').src = flagUrls[lang];
    }
    
    const langMenu = document.getElementById('language-menu');
    if (langMenu && !langMenu.classList.contains('hidden')) {
        langMenu.classList.add('hidden');
    }
    if(event) event.preventDefault();
}

document.addEventListener('DOMContentLoaded', () => {
    // --- Smooth Page Navigation ---
    document.querySelectorAll('a[href$=".html"]').forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href && href !== '#' && !href.startsWith('http')) {
                e.preventDefault();
                const main = document.querySelector('main');
                if (main) {
                    main.style.opacity = '0';
                    main.style.transform = 'scale(1.05)';
                }
                setTimeout(() => {
                    window.location.href = href;
                }, 300);
            }
        });
    });

    // --- Inject Reusable HTML ---
    const headerElement = document.querySelector('header');
    const footerElement = document.querySelector('footer');
    const cartModalElement = document.getElementById('cart-modal');

    const headerContent = `
        <div class="container mx-auto px-6 py-3 flex justify-between items-center">
            <a href="index.html" class="flex items-center">
                <div class="logo-icon mr-2"><div class="arc-1"></div><div class="arc-2"></div></div>
                <span class="text-2xl font-bold tracking-tight">Frostware®</span>
            </a>
            <nav class="hidden md:flex items-center space-x-2 text-sm">
                <a href="index.html" class="nav-link px-3 py-2 rounded-md" data-page="index" data-translate-key="nav_home">Inicio</a>
                <a href="products.html" class="nav-link px-3 py-2 rounded-md" data-page="products" data-translate-key="nav_products">Productos</a>
                <a href="terms.html" class="nav-link px-3 py-2 rounded-md" data-page="terms" data-translate-key="nav_terms">Términos</a>
                <a href="privacy.html" class="nav-link px-3 py-2 rounded-md" data-page="privacy" data-translate-key="nav_privacy">Privacidad</a>
                <a href="contact.html" class="nav-link px-3 py-2 rounded-md" data-page="contact" data-translate-key="nav_contact">Contacto</a>
            </nav>
            <div class="flex items-center space-x-4">
                <div class="relative">
                    <button id="language-button" class="flex items-center space-x-2 text-gray-300 hover:text-white">
                        <img id="current-flag" src="https://flagcdn.com/es.svg" class="w-5 h-auto rounded-sm" alt="Bandera">
                        <span id="current-lang" class="text-sm font-medium">ES</span>
                    </button>
                    <div id="language-menu" class="hidden absolute right-0 mt-4 w-48 bg-white rounded-lg shadow-xl z-20 border text-gray-800">
                        <a href="#" class="flex items-center px-4 py-2 text-sm hover:bg-gray-100" onclick="changeLanguage('es')"><img src="https://flagcdn.com/es.svg" class="w-5 h-auto mr-3 rounded-sm"> <span>Español</span></a>
                        <a href="#" class="flex items-center px-4 py-2 text-sm hover:bg-gray-100" onclick="changeLanguage('en')"><img src="https://flagcdn.com/us.svg" class="w-5 h-auto mr-3 rounded-sm"> <span>English</span></a>
                        <a href="#" class="flex items-center px-4 py-2 text-sm hover:bg-gray-100" onclick="changeLanguage('zh')"><img src="https://flagcdn.com/cn.svg" class="w-5 h-auto mr-3 rounded-sm"> <span>中文</span></a>
                        <a href="#" class="flex items-center px-4 py-2 text-sm hover:bg-gray-100" onclick="changeLanguage('ja')"><img src="https://flagcdn.com/jp.svg" class="w-5 h-auto mr-3 rounded-sm"> <span>日本語</span></a>
                        <a href="#" class="flex items-center px-4 py-2 text-sm hover:bg-gray-100" onclick="changeLanguage('de')"><img src="https://flagcdn.com/de.svg" class="w-5 h-auto mr-3 rounded-sm"> <span>Deutsch</span></a>
                        <a href="#" class="flex items-center px-4 py-2 text-sm hover:bg-gray-100" onclick="changeLanguage('fr')"><img src="https://flagcdn.com/fr.svg" class="w-5 h-auto mr-3 rounded-sm"> <span>Français</span></a>
                    </div>
                </div>
                <button id="cart-button" class="text-gray-300 hover:text-white"><svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path></svg></button>
                <div class="border-l border-gray-600 pl-4"><a href="register.html" class="text-sm font-semibold text-gray-300 hover:text-white" data-translate-key="auth_register">Registrarse</a></div>
            </div>
        </div>`;
    if (headerElement) headerElement.innerHTML = headerContent;

    const footerContent = `
        <div class="container mx-auto px-6 py-12">
             <div class="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
                <div>
                    <a href="index.html" class="flex items-center justify-center md:justify-start mb-4">
                       <div class="logo-icon mr-2"><div class="arc-1"></div><div class="arc-2"></div></div>
                       <span class="text-2xl font-bold text-white tracking-tight">Frostware®</span>
                    </a>
                    <p class="text-sm text-gray-400" data-translate-key="copyright_text">&copy; 2024 Frostware®. <br>Todos los derechos reservados.</p>
                </div>
                <div>
                    <h3 class="font-bold uppercase tracking-wider mb-4" data-translate-key="footer_legal">Legal</h3>
                    <nav class="flex flex-col space-y-2">
                        <a href="terms.html" class="text-gray-400 hover:text-white transition-colors" data-translate-key="footer_terms">Términos y Condiciones</a>
                        <a href="privacy.html" class="text-gray-400 hover:text-white transition-colors" data-translate-key="footer_privacy">Política de Privacidad</a>
                    </nav>
                </div>
                <div>
                     <h3 class="font-bold uppercase tracking-wider mb-4" data-translate-key="footer_follow">Síguenos</h3>
                     <div class="flex space-x-4 justify-center md:justify-start">
                        <a href="#" class="text-gray-400 hover:text-white"><svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.71v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path></svg></a>
                        <a href="#" class="text-gray-400 hover:text-white"><svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path fill-rule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.286 2.866 7.922 6.736 9.143.51.094.696-.22.696-.492 0-.242-.009-.884-.014-1.736-2.782.604-3.368-1.34-3.368-1.34-.464-1.176-1.132-1.49-1.132-1.49-.926-.632.07-.62.07-.62 1.024.072 1.562 1.05 1.562 1.05.91 1.558 2.384 1.108 2.964.848.092-.66.358-1.108.648-1.362-2.264-.258-4.644-1.132-4.644-5.042 0-1.114.398-2.024 1.05-2.736-.106-.258-.456-1.294.1-2.696 0 0 .856-.274 2.8 1.044A9.853 9.853 0 0112 6.82c.868 0 1.748.114 2.574.336 1.942-1.318 2.796-1.044 2.796-1.044.558 1.402.208 2.438.1 2.696.654.712 1.05 1.622 1.05 2.736 0 3.92-2.384 4.78-4.656 5.032.368.318.694.946.694 1.904 0 1.374-.012 2.484-.012 2.82 0 .274.184.59.704.49C19.138 19.92 22 16.284 22 12c0-5.523-4.477-10-10-10z" clip-rule="evenodd"></path></svg></a>
                     </div>
                </div>
            </div>
        </div>`;
    if (footerElement) footerElement.innerHTML = footerContent;

    const cartModalContent = `
        <div id="modal-backdrop" class="fixed inset-0 bg-black/50"></div>
        <div class="relative bg-white w-full max-w-md m-auto flex-col flex rounded-lg shadow-lg" style="top: 50%; transform: translateY(-50%);">
            <div class="p-6 border-b"><div class="flex justify-between items-center"><h2 class="text-xl font-bold text-gray-900" data-translate-key="cart_title">Tu Carrito</h2><button id="close-modal-button" class="text-2xl font-light">&times;</button></div></div>
            <div class="p-6 overflow-y-auto max-h-[60vh]">
                <div class="flex items-center space-x-4 mb-4"><img src="https://placehold.co/80x80/1a202c/FFFFFF?text=App&font=inter" class="w-16 h-16 rounded-md"><div class="flex-grow"><p class="font-semibold">FocusFlow App</p><p class="text-sm text-gray-500">Licencia de por vida</p></div><p class="font-semibold">$19.99</p></div>
                <div class="flex items-center space-x-4"><img src="https://placehold.co/80x80/22a7d0/FFFFFF?text=Curso&font=inter" class="w-16 h-16 rounded-md"><div class="flex-grow"><p class="font-semibold">Guía: Fundamentos de Vuelo</p><p class="text-sm text-gray-500">Acceso completo</p></div><p class="font-semibold">$49.99</p></div>
            </div>
            <div class="p-6 bg-gray-50 rounded-b-lg">
                <div class="flex justify-between items-center mb-2"><span data-translate-key="cart_subtotal">Subtotal</span><span>$69.98</span></div>
                <div class="flex justify-between items-center font-bold text-lg"><span data-translate-key="cart_total">Total</span><span>$69.98</span></div>
                <button class="w-full mt-4 cta-button bg-gray-900 text-white font-bold py-3 rounded-lg">Proceder al Pago</button>
            </div>
        </div>`;
    if(cartModalElement) cartModalElement.innerHTML = cartModalContent;


    // --- Active Page Link ---
    const currentPage = window.location.pathname.split('/').pop().replace('.html', '') || 'index';
    document.querySelectorAll('header nav a.nav-link').forEach(link => {
        if (link.getAttribute('data-page') === currentPage) {
            link.classList.add('active');
        }
    });

    // --- Language Dropdown ---
    const langButton = document.getElementById('language-button');
    const langMenu = document.getElementById('language-menu');
    if (langButton) {
        langButton.addEventListener('click', (e) => {
            e.stopPropagation();
            langMenu.classList.toggle('hidden');
        });
    }
    document.addEventListener('click', () => {
        if (langMenu && !langMenu.classList.contains('hidden')) {
            langMenu.classList.add('hidden');
        }
    });
    
    // --- Cart Modal ---
    const cartButton = document.getElementById('cart-button');
    const closeModalButton = document.getElementById('close-modal-button');
    const modalBackdrop = document.getElementById('modal-backdrop');
    if (cartButton) {
        cartButton.addEventListener('click', () => cartModalElement.classList.remove('hidden'));
        closeModalButton.addEventListener('click', () => cartModalElement.classList.add('hidden'));
        modalBackdrop.addEventListener('click', () => cartModalElement.classList.add('hidden'));
    }

    // --- Load Saved Language ---
    const savedLang = localStorage.getItem('selectedLanguage') || 'es';
    changeLanguage(savedLang);
});

