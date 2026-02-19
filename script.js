// Theme Toggle Functionality
document.addEventListener('DOMContentLoaded', function() {
    const themeBtn = document.getElementById('theme-btn');
    const volumeBtn = document.getElementById('volume-btn-corner');
    const body = document.body;
    const modalOverlay = document.getElementById('modal-overlay');
    const modalContent = document.getElementById('modal-content');
    const modalTabTitle = document.getElementById('modal-tab-title');
    const closeModal = document.getElementById('close-modal');

    // Welcome page functionality
    const welcomePage = document.getElementById('welcome-page');
    const focusBtn = document.getElementById('focus-btn');
    
    if (focusBtn && welcomePage) {
        focusBtn.addEventListener('click', function() {
            welcomePage.classList.add('hidden');
        });
    }

    // Image rotation functionality
    const rotatingImages = document.querySelectorAll('.rotating-image');
    const welcomeMountain = document.querySelector('.welcome-mountain');
    let currentImageIndex = 0;
    
    // Function to rotate to next image
    function rotateToNextImage() {
        if (rotatingImages.length > 0) {
            // Hide current image
            rotatingImages[currentImageIndex].classList.remove('active');
            
            // Move to next image
            currentImageIndex = (currentImageIndex + 1) % rotatingImages.length;
            
            // Show next image
            rotatingImages[currentImageIndex].classList.add('active');
        }
    }
    
    // Rotate on page load/restart (after a short delay)
    setTimeout(() => {
        rotateToNextImage();
    }, 1000);
    
    // Rotate every 3 minutes
    if (rotatingImages.length > 0) {
        setInterval(rotateToNextImage, 180000); // 3 minutes = 180,000 milliseconds
    }
    
    // Rotate on hover over the image area
    if (welcomeMountain) {
        welcomeMountain.addEventListener('mouseenter', rotateToNextImage);
    }

    // Rotating greeting
    const greetings = ['Hello', 'Allo', 'Xin chào'];
    let greetingIndex = 0;
    const greetingElement = document.getElementById('greeting');
    
    setInterval(() => {
        greetingIndex = (greetingIndex + 1) % greetings.length;
        greetingElement.textContent = greetings[greetingIndex];
    }, 5000);

    // Change greeting on hover
    greetingElement.addEventListener('mouseenter', () => {
        greetingIndex = (greetingIndex + 1) % greetings.length;
        greetingElement.textContent = greetings[greetingIndex];
    });

    // Theme toggle
    themeBtn.addEventListener('click', function() {
        body.classList.toggle('dark-mode');
        const img = themeBtn.querySelector('img');
        if (body.classList.contains('dark-mode')) {
            themeBtn.innerHTML = '<img src="assets/images/Moon.png" alt="theme" style="width: 45px; height: 45px; object-fit: contain;">';
        } else {
            themeBtn.innerHTML = '<img src="assets/images/Sun.png" alt="theme" style="width: 55px; height: 55px; object-fit: contain;">';
        }
    });

    // Volume toggle (placeholder functionality)
    let isMuted = false;
    volumeBtn.addEventListener('click', function() {
        isMuted = !isMuted;
        if (isMuted) {
            volumeBtn.innerHTML = '<img src="assets/images/Music.png" alt="muted" style="width: 45px; height: 45px; object-fit: contain; opacity: 0.4;">';
        } else {
            volumeBtn.innerHTML = '<img src="assets/images/Music.png" alt="music" style="width: 45px; height: 45px; object-fit: contain;">';
        }
    });

    // Modal content for each section
    const modalContents = {
        about: `
            <div class="about-content">
                <div class="profile-image">A</div>
                <div class="about-text">
                    <h2 class="about-name">Astra Nguyen</h2>
                    <p class="about-title">Full-Stack Applications, Artificial Intelligence (AI)</p>
                    <p class="about-company">Former web developer at <a href="#" target="_blank">MedGrocer</a></p>
                </div>
            </div>
            <p class="about-description">To me, the biggest appeal and excitement of computer science is the satisfaction of transforming an idea, into a real-world solution that can make a tangible impact. It's amazing the power a computer can hold and innovate. I plan to enhance my technical skills, creative skills, and soft skills to build meaningful innovations, and I look forward to leveraging my education to drive technology solutions that matter.</p>
            <ul class="about-list">
                <li>create <a href="#" target="_blank">hand-drawn animations</a>,</li>
                <li>create <a href="#" target="_blank">videos</a> talking about things i like,</li>
                <li>create website wireframes, and</li>
            </ul>
        `,
        About: `
            <div class="about-content">
                <div class="profile-image">A</div>
                <div class="about-text">
                    <h2 class="about-name">Astra Nguyen</h2>
                    <p class="about-title">Full-Stack Development, Artificial Intelligence (AI)/ Machine Learning</p>
                    <p class="about-company"> CS Student At <a href="https://www.ou.edu/" target="_blank"> Univeristy of Oklahoma</a></p>
                </div>
            </div>
            <p class="about-description">To me, the biggest appeal and excitement of computer science is the satisfaction of transforming an idea, into a real-world solution that can make a tangible impact. It's amazing the power a computer can hold and innovate. I plan to enhance my technical skills, creative skills, and soft skills to build meaningful innovations, and I look forward to leveraging my education to drive technology solutions that matter.</p>
            
            <h3 style="color: #FF8C00; margin-top: 30px; margin-bottom: 20px;">Tech Skills</h3>
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 20px; margin-bottom: 20px;">
                <div style="background: #f8f9fa; border-radius: 12px; padding: 15px; border: 2px solid #eee;">
                    <h4 style="color: #333; margin-bottom: 10px;">Frontend</h4>
                    <p style="color: #666; font-size: 14px;">React.js, Flutter, HTML/CSS, JavaScript</p>
                </div>
                <div style="background: #f8f9fa; border-radius: 12px; padding: 15px; border: 2px solid #eee;">
                    <h4 style="color: #333; margin-bottom: 10px;">Backend</h4>
                    <p style="color: #666; font-size: 14px;">Spring Boot, Django, Flask, Node.js, PostgreSQL</p>
                </div>
                <div style="background: #f8f9fa; border-radius: 12px; padding: 15px; border: 2px solid #eee;">
                    <h4 style="color: #333; margin-bottom: 10px;">DevOps</h4>
                    <p style="color: #666; font-size: 14px;">Docker, Git, CI/CD Pipeline, Azure, Postman, Software Testing</p>
                </div>
                <div style="background: #f8f9fa; border-radius: 12px; padding: 15px; border: 2px solid #eee;">
                    <h4 style="color: #333; margin-bottom: 10px;">AI/ML/Data</h4>
                    <p style="color: #666; font-size: 14px;">TensorFlow, Data Analysis, Tableau, PostgreSQL</p>
                </div>
            </div>
            
            <ul class="about-list">
                <li>create <a href="#" target="_blank">Software Development</a>,</li>
                <li>create <a href="#" target="_blank">Al/ ML Development </li>
            </ul>
        `,
        Experience: `
            <div style="text-align: center; padding: 20px;">
                <h2 style="color: #FF8C00; margin-bottom: 10px;">My Experience</h2>
                <div style="display: flex; flex-direction: column; gap: 25px; max-width: 600px; margin: 0 auto; text-align: left;">

                    <div style="padding: 20px; background: #f8f9fa; border-radius: 15px; border: 2px solid #eee;">
                        <h3 style="color: #333; margin-bottom: 5px;">Software Developer</h3>
                        <p style="color: #FF8C00; margin-bottom: 10px; font-weight: 500;">Knobull • Jan 2026-Present</p>
                        <p style="color: #666;">Developed and maintained web applications using modern frontend and backend technologies.</p>
                    </div>
                    <div style="padding: 20px; background: #f8f9fa; border-radius: 15px; border: 2px solid #eee;">
                        <h3 style="color: #333; margin-bottom: 5px;">AI Trainer - Multimodal Data Annotation </h3>
                        <p style="color: #FF8C00; margin-bottom: 10px; font-weight: 500;">Handshake AI• Dec 2025-Present</p>
                        <p style="color: #666;">Creating digital illustrations and animations for various clients and personal projects.</p>
                    </div>
                    <div style="padding: 20px; background: #f8f9fa; border-radius: 15px; border: 2px solid #eee;">
                        <h3 style="color: #333; margin-bottom: 5px;">Software Engineer Intern</h3>
                        <p style="color: #FF8C00; margin-bottom: 10px; font-weight: 500;">Springer Capital • Oct 2025-Jan 2026</p>
                        <p style="color: #666;">Helped engineered a Python-based DLT generator using Django and Flask-RESTX that automates creation of production-ready data
pipeline services from templates by modeled base data schemas and designed secure API communication patterns for the DLT frame-work.</p>
                    </div>
                    <div style="padding: 20px; background: #f8f9fa; border-radius: 15px; border: 2px solid #eee;">
                        <h3 style="color: #333; margin-bottom: 5px;">Undergraduate Researcher</h3>
                        <p style="color: #FF8C00; margin-bottom: 10px; font-weight: 500;">University of Oklahoma - Gallogly College of Engineering • May 2025-Jan 2026</p>
                        <p style="color: #666;">Addressed 15% misidentification rate in endoscopic surgeries by collaborating with Ph.D. researchers to develop deep learning models
for real-time medical image classification and anatomical structure identification using TensorFlow.</p>
                    </div>
                    <div style="padding: 20px; background: #f8f9fa; border-radius: 15px; border: 2px solid #eee;">
                        <h3 style="color: #333; margin-bottom: 5px;">Engineer Apprenticeship</h3>
                        <p style="color: #FF8C00; margin-bottom: 10px; font-weight: 500;">eBay • Jun 2025-Aug 2025</p>
                        <p style="color: #666;">Collaborated with senior eBay engineers to optimize problem-solving strategies and develop efficient software solutions.</p>
                    </div>
                     <div style="padding: 20px; background: #f8f9fa; border-radius: 15px; border: 2px solid #eee;">
                        <h3 style="color: #333; margin-bottom: 5px;">Software Engineer Intern</h3>
                        <p style="color: #FF8C00; margin-bottom: 10px; font-weight: 500;">Standard Bank • May 2025-Aug 2025</p>
                        <p style="color: #666;">Addressed critical security vulnerability in employee management system of intern project by designing and implementing JWT-based authentication
using Spring Security with HS512 algorithm to protect sensitive HR data for 500+ employees.</p>
                    </div>
                    <div style="padding: 20px; background: #f8f9fa; border-radius: 15px; border: 2px solid #eee;">
                        <h3 style="color: #333; margin-bottom: 5px;">Coding Expertise for AI Training </h3>
                        <p style="color: #FF8C00; margin-bottom: 10px; font-weight: 500;">Outlier • Oct 2024-Jun 2025</p>
                        <p style="color: #666;">Enhanced AI response quality by systematically evaluating 100+ prompts across programming (Java, Python, C#, JavaScript), Mathe-
matics, and research, improving AI accuracy.</p>
                    </div>

                </div>
            </div>

            <div style="text-align: center; padding: 20px;">
                <h2 style="color: #FF8C00; margin-bottom: 10px;">My Leadership</h2>
                <div style="display: flex; flex-direction: column; gap: 25px; max-width: 600px; margin: 0 auto; text-align: left;">
                    <div style="padding: 20px; background: #f8f9fa; border-radius: 15px; border: 2px solid #eee;">
                        <h3 style="color: #333; margin-bottom: 5px;">Outreach Director </h3>
                        <p style="color: #FF8C00; margin-bottom: 10px; font-weight: 500;">OU Gaming Development Association • Aug 2024-May 2025</p>
                        <p style="color: #666;">Developed and implemented creative marketing strategies and graphic designs for social media platforms.</p>
                    </div>
                    <div style="padding: 20px; background: #f8f9fa; border-radius: 15px; border: 2px solid #eee;">
                        <h3 style="color: #333; margin-bottom: 5px;">Undergraduate Organization Leader</h3>
                        <p style="color: #FF8C00; margin-bottom: 10px; font-weight: 500;">Undergraduate Organization Leader • Aug 2023-Oct 2023</p>
                        <p style="color: #666;">Led undergraduate student volunteer team of 15+ members, providing Vietnamese-English translation services for different patients.</p>
                    </div>
                    <div style="padding: 20px; background: #f8f9fa; border-radius: 15px; border: 2px solid #eee;">
                        <h3 style="color: #333; margin-bottom: 5px;">Surfing Instructor Assistant</h3>
                        <p style="color: #FF8C00; margin-bottom: 10px; font-weight: 500;">Shaka • Jun 2023-Jul 2023</p>
                        <p style="color: #666;">Supported lead instructors in managing equipment and lesson preparation for 20+ students daily in Tenerife, Spain and maintained and organized surfing equipment, ensuring the safety and optimal condition of surfboards.</p>
                    </div>
                </div>
            </div>
        `,
        Projects: `
            <div style="text-align: center;">
                <h2 style="color: #FF8C00; margin-bottom: 30px;">My Projects</h2>
                <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 20px;">
                    <div style="background: #f8f9fa; border-radius: 15px; padding: 20px; border: 2px solid #eee;">
                        <h2 style="color: #333; margin-bottom: 10px;">Pulse</h2>
                        <p style="color: #333; margin-bottom: 10px;">JP Morgan Code for Good Hackathon</p>
                        <p style="color: #666; margin-bottom: 15px;">Full-Stack | React, Flask, Fireworks AI, NewsAPI, Leaflet.js </p>
                        <p style="color: #666; margin-bottom: 15px;">Partnered with Black Heart Association (BHA) to address scheduling and prioritization challenges in their mission to improve heart health
in underserved communities by developing Pulse. </p>
                        <a href="https://github.com/wkeav/Pulse" style="color: #FF8C00; text-decoration: none;">View Project →</a>
                    </div>
                    <div style="background: #f8f9fa; border-radius: 15px; padding: 20px; border: 2px solid #eee;">
                        <h2 style="color: #333; margin-bottom: 10px;">Adventure Generator</h2>
                        <p style="color: #666; margin-bottom: 15px;">Full-Stack | Spring-Boot, PostgreSQL, Spring security, Openweather API, Geolocation API  </p>
                        <p style="color: #666; margin-bottom: 15px;">A personalized adventure recommendation platform that helps couples and friends discover meaningful activities based on their mood and the weather conditions. Whether you're together or miles apart, find your next memorable adventure!</p>
                        <a href="https://github.com/wkeav/Adventure_Generator" style="color: #FF8C00; text-decoration: none;">View Project →</a>
                    </div>
                    <div style="background: #f8f9fa; border-radius: 15px; padding: 20px; border: 2px solid #eee;">
                        <h2 style="color: #333; margin-bottom: 10px;">Pocket Penguin</h2>
                        <p style="color: #666; margin-bottom: 15px;">Full-Stack | Flutter/Dart, Django, SQLite, Docker</p>
                        <p style="color: #666; margin-bottom: 15px;">A gamified wellness and habit-tracking application with a Django REST API backend and
Flutter frontend, implementing features such as habit creation, progress analytics, and an interactive penguin companion to engage
users in healthy habit formation</p>
                        <a href="https://wkeav.github.io/Pocket_Penguin/" style="color: #FF8C00; text-decoration: none;">View Projects (Live server) → </a>
                        <br>
                        <a href="https://github.com/wkeav/Pocket_Penguin" style="color: #888; font-size: 13px; text-decoration: none; display: inline-block; margin-top: 2px;">GitHub Repo &rarr;</a>
                    </div>
                    <div style="background: #f8f9fa; border-radius: 15px; padding: 20px; border: 2px solid #eee;">
                        <h3 style="color: #333; margin-bottom: 10px;">National Park Service System (NPSS) Database Management Application</h3>
                        <p style="color: #666; margin-bottom: 15px;">Java, Azure SQL Database</p>
                        <p style="color: #666; margin-bottom: 15px;">This project is a comprehensive database management system for the National Park Service System. Features robust data modeling, complex entity relationships, and advanced reporting capabilities to manage parks, visitors, staff, and operations—demonstrating best practices in database design and implementation.</p>
                        <a href="https://github.com/wkeav/NPSS_Database_System" style="color: #FF8C00; text-decoration: none;">View Project →</a>
                    </div>
                </div>
            </div>
        `,
        Education: `
            <div style="text-align: center; padding: 20px;">
                <h2 style="color: #FF8C00; margin-bottom: 30px;">My Education</h2>
                <div style="display: flex; flex-direction: column; gap: 25px; max-width: 600px; margin: 0 auto; text-align: left;">
                    <div style="padding: 20px; background: #f8f9fa; border-radius: 15px; border: 2px solid #eee;">
                        <h3 style="color: #333; margin-bottom: 5px;">Bachelor of Science in Computer Science, minor in Mathemetics and Biology</h3>
                        <p style="color: #FF8C00; margin-bottom: 10px; font-weight: 500;">University of Oklahoma • Aug 2023 - Dec 2026</p>
                    </div>
                    <div style="padding: 20px; background: #f8f9fa; border-radius: 15px; border: 2px solid #eee;">
                        <h3 style="color: #333; margin-bottom: 5px;">Engineer Pathways Apprenticeship Certification</h3>
                        <p style="color: #FF8C00; margin-bottom: 10px; font-weight: 500;">eBay • 2025</p>
                    </div>
                    <div style="padding: 20px; background: #f8f9fa; border-radius: 15px; border: 2px solid #eee;">
                        <h3 style="color: #333; margin-bottom: 5px;">Java Spring Boot Certification</h3>
                        <p style="color: #FF8C00; margin-bottom: 10px; font-weight: 500;">Code Academy • 2023</p>
                    </div>
                </div>
                
                <h3 style="color: #FF8C00; margin-top: 40px; margin-bottom: 20px;">Scholarships & Awards</h3>
                <div style="display: flex; flex-direction: column; gap: 20px; max-width: 600px; margin: 0 auto; text-align: left;">
                    <div style="padding: 15px; background: #fff9f0; border-radius: 12px; border: 2px solid #FFE4B5;">
                        <h4 style="color: #333; margin-bottom: 5px;">Lisa M Morris End Scholarship</h4>
                        <p style="color: #FF8C00; margin-bottom: 5px; font-weight: 500;">University of Oklahoma</p>
                    </div>
                    <div style="padding: 15px; background: #fff9f0; border-radius: 12px; border: 2px solid #FFE4B5;">
                        <h4 style="color: #333; margin-bottom: 5px;">Dorothy Grace Barkow Scholarship</h4>
                        <p style="color: #FF8C00; margin-bottom: 5px; font-weight: 500;">University of Oklahoma</p>
                    </div>
                    <div style="padding: 15px; background: #fff9f0; border-radius: 12px; border: 2px solid #FFE4B5;">
                        <h4 style="color: #333; margin-bottom: 5px;">OU General Scholarship</h4>
                        <p style="color: #FF8C00; margin-bottom: 5px; font-weight: 500;">University of Oklahoma</p>
                    </div>
                </div>
            </div>
        `,
        Contact: `
            <div style="max-width: 500px; margin: 0 auto;">
                <h2 style="color: #FF8C00; margin-bottom: 30px; text-align: center;">Let's Work Together!</h2>
                <form style="display: flex; flex-direction: column; gap: 20px;">
                    <div>
                        <label style="display: block; margin-bottom: 5px; color: #333; font-weight: 500;">Name</label>
                        <input type="text" style="width: 100%; padding: 12px; border: 2px solid #eee; border-radius: 8px; font-size: 16px;" placeholder="Your name">
                    </div>
                    <div>
                        <label style="display: block; margin-bottom: 5px; color: #333; font-weight: 500;">Email</label>
                        <input type="email" style="width: 100%; padding: 12px; border: 2px solid #eee; border-radius: 8px; font-size: 16px;" placeholder="your@email.com">
                    </div>
                    <div>
                        <label style="display: block; margin-bottom: 5px; color: #333; font-weight: 500;">Project Type</label>
                        <select style="width: 100%; padding: 12px; border: 2px solid #eee; border-radius: 8px; font-size: 16px;">
                            <option>Web Development</option>
                            <option>Mobile Development</option>
                            <option>AI / Machine Learning</option>
                            <option>Other</option>
                        </select>
                    </div>
                    <div>
                        <label style="display: block; margin-bottom: 5px; color: #333; font-weight: 500;">Message</label>
                        <textarea style="width: 100%; padding: 12px; border: 2px solid #eee; border-radius: 8px; font-size: 16px; min-height: 100px; resize: vertical;" placeholder="Tell me about your project..."></textarea>
                    </div>
                    <button type="submit" style="background: #FF8C00; color: white; border: none; padding: 15px; border-radius: 8px; font-size: 16px; font-weight: 500; cursor: pointer; transition: background-color 0.3s ease;">
                        Send Message
                    </button>
                </form>
            </div>
        `,
        links: `
            <div style="text-align: center; padding: 20px;">
                <h2 style="color: #FF8C00; margin-bottom: 30px;">My Links</h2>
                <div style="display: flex; flex-direction: column; gap: 15px; max-width: 300px; margin: 0 auto;">
                    <a href="#" style="padding: 15px; background: #f8f9fa; border-radius: 10px; text-decoration: none; color: #333; border: 2px solid #eee; transition: all 0.3s ease;">
                        🎨 Portfolio Gallery
                    </a>
                    <a href="#" style="padding: 15px; background: #f8f9fa; border-radius: 10px; text-decoration: none; color: #333; border: 2px solid #eee; transition: all 0.3s ease;">
                        📺 YouTube Channel
                    </a>
                    <a href="#" style="padding: 15px; background: #f8f9fa; border-radius: 10px; text-decoration: none; color: #333; border: 2px solid #eee; transition: all 0.3s ease;">
                        📷 Instagram
                    </a>
                    <a href="#" style="padding: 15px; background: #f8f9fa; border-radius: 10px; text-decoration: none; color: #333; border: 2px solid #eee; transition: all 0.3s ease;">
                        🐦 Twitter
                    </a>
                    <a href="#" style="padding: 15px; background: #f8f9fa; border-radius: 10px; text-decoration: none; color: #333; border: 2px solid #eee; transition: all 0.3s ease;">
                        💼 LinkedIn
                    </a>
                </div>
            </div>
        `,
        work: `
            <div style="text-align: center;">
                <h2 style="color: #FF8C00; margin-bottom: 30px;">My Work</h2>
                <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 20px;">
                    <div style="background: #f8f9fa; border-radius: 15px; padding: 20px; border: 2px solid #eee;">
                        <h3 style="color: #333; margin-bottom: 10px;">🎬 Animations</h3>
                        <p style="color: #666; margin-bottom: 15px;">Hand-drawn character animations and motion graphics</p>
                        <a href="#" style="color: #FF8C00; text-decoration: none;">View Gallery →</a>
                    </div>
                    <div style="background: #f8f9fa; border-radius: 15px; padding: 20px; border: 2px solid #eee;">
                        <h3 style="color: #333; margin-bottom: 10px;">🎨 Illustrations</h3>
                        <p style="color: #666; margin-bottom: 15px;">Digital art and character design work</p>
                        <a href="#" style="color: #FF8C00; text-decoration: none;">View Gallery →</a>
                    </div>
                    <div style="background: #f8f9fa; border-radius: 15px; padding: 20px; border: 2px solid #eee;">
                        <h3 style="color: #333; margin-bottom: 10px;">💻 Web Development</h3>
                        <p style="color: #666; margin-bottom: 15px;">Frontend and backend web applications</p>
                        <a href="#" style="color: #FF8C00; text-decoration: none;">View Projects →</a>
                    </div>
                    <div style="background: #f8f9fa; border-radius: 15px; padding: 20px; border: 2px solid #eee;">
                        <h3 style="color: #333; margin-bottom: 10px;">📹 Video Content</h3>
                        <p style="color: #666; margin-bottom: 15px;">Educational and entertainment videos</p>
                        <a href="#" style="color: #FF8C00; text-decoration: none;">Watch Videos →</a>
                    </div>
                </div>
            </div>
        `,
        faq: `
            <div>
                <h2 style="color: #FF8C00; margin-bottom: 30px; text-align: center;">Frequently Asked Questions</h2>
                <div style="space-y: 20px;">
                    <div style="border-bottom: 1px solid #eee; padding-bottom: 20px; margin-bottom: 20px;">
                        <h3 style="color: #333; margin-bottom: 10px;">💰 What are your rates?</h3>
                        <p style="color: #666;">My rates vary depending on the project scope and complexity. Contact me for a custom quote!</p>
                    </div>
                    <div style="border-bottom: 1px solid #eee; padding-bottom: 20px; margin-bottom: 20px;">
                        <h3 style="color: #333; margin-bottom: 10px;">⏰ What's your typical turnaround time?</h3>
                        <p style="color: #666;">Most projects take 1-3 weeks depending on complexity. Rush orders may be accommodated with additional fees.</p>
                    </div>
                    <div style="border-bottom: 1px solid #eee; padding-bottom: 20px; margin-bottom: 20px;">
                        <h3 style="color: #333; margin-bottom: 10px;">🎨 What software do you use?</h3>
                        <p style="color: #666;">For animations: After Effects, Photoshop, Procreate. For web dev: React, Node.js, and various modern frameworks.</p>
                    </div>
                    <div style="border-bottom: 1px solid #eee; padding-bottom: 20px; margin-bottom: 20px;">
                        <h3 style="color: #333; margin-bottom: 10px;">🔄 Do you offer revisions?</h3>
                        <p style="color: #666;">Yes! I include 2-3 rounds of revisions in most projects to ensure you're completely satisfied.</p>
                    </div>
                    <div style="border-bottom: 1px solid #eee; padding-bottom: 20px; margin-bottom: 20px;">
                        <h3 style="color: #333; margin-bottom: 10px;">📧 How do we get started?</h3>
                        <p style="color: #666;">Simply reach out via the contact form or email me directly with your project details!</p>
                    </div>
                </div>
            </div>
        `,
        contact: `
            <div style="max-width: 500px; margin: 0 auto;">
                <h2 style="color: #FF8C00; margin-bottom: 30px; text-align: center;">Let's Work Together!</h2>
                <form style="display: flex; flex-direction: column; gap: 20px;">
                    <div>
                        <label style="display: block; margin-bottom: 5px; color: #333; font-weight: 500;">Name</label>
                        <input type="text" style="width: 100%; padding: 12px; border: 2px solid #eee; border-radius: 8px; font-size: 16px;" placeholder="Your name">
                    </div>
                    <div>
                        <label style="display: block; margin-bottom: 5px; color: #333; font-weight: 500;">Email</label>
                        <input type="email" style="width: 100%; padding: 12px; border: 2px solid #eee; border-radius: 8px; font-size: 16px;" placeholder="your@email.com">
                    </div>
                    <div>
                        <label style="display: block; margin-bottom: 5px; color: #333; font-weight: 500;">Project Type</label>
                        <select style="width: 100%; padding: 12px; border: 2px solid #eee; border-radius: 8px; font-size: 16px;">
                            <option>Web Development</option>
                            <option>Mobile Development</option>
                            <option>AI / Machine Learning</option>
                            <option>Other</option>
                        </select>
                    </div>
                    <div>
                        <label style="display: block; margin-bottom: 5px; color: #333; font-weight: 500;">Message</label>
                        <textarea style="width: 100%; padding: 12px; border: 2px solid #eee; border-radius: 8px; font-size: 16px; min-height: 100px; resize: vertical;" placeholder="Tell me about your project..."></textarea>
                    </div>
                    <button type="submit" style="background: #FF8C00; color: white; border: none; padding: 15px; border-radius: 8px; font-size: 16px; font-weight: 500; cursor: pointer; transition: background-color 0.3s ease;">
                        Send Message
                    </button>
                </form>
            
                </div>
            </div>
        `
    };

    // Navigation functionality
    const navItems = document.querySelectorAll('.nav-item');
    const navTabs = document.querySelectorAll('.nav-tab');
    
    function showModal(section) {
        modalTabTitle.textContent = section;
        modalContent.innerHTML = modalContents[section] || '<p>Content coming soon!</p>';
        modalOverlay.classList.add('active');
        
        // Update active tab
        navTabs.forEach(tab => tab.classList.remove('active'));
        document.querySelector(`[data-section="${section}"]`).classList.add('active');
    }

    function hideModal() {
        modalOverlay.classList.remove('active');
    }

    // Main navigation click handlers
    navItems.forEach(item => {
        item.addEventListener('click', function() {
            const section = this.querySelector('.nav-label').textContent;
            
            // Add click animation
            this.style.transform = 'translateY(-5px) scale(0.95)';
            setTimeout(() => {
                this.style.transform = 'translateY(-5px)';
            }, 150);
            
            showModal(section);
        });
    });

    // Modal navigation tabs
    navTabs.forEach(tab => {
        tab.addEventListener('click', function() {
            const section = this.dataset.section;
            showModal(section);
        });
    });

    // Close modal handlers
    closeModal.addEventListener('click', hideModal);
    
    modalOverlay.addEventListener('click', function(e) {
        if (e.target === modalOverlay) {
            hideModal();
        }
    });

    // Escape key to close modal
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && modalOverlay.classList.contains('active')) {
            hideModal();
        }
    });

    // Star animation enhancement
    const star = document.querySelector('.star-icon');
    star.addEventListener('click', function() {
        this.style.animation = 'none';
        setTimeout(() => {
            this.style.animation = 'bounce 2s infinite';
        }, 10);
    });

    // Frog interaction
    const frog = document.querySelector('.frog-character');
    frog.addEventListener('click', function() {
        this.style.transform = 'scale(1.2) rotate(360deg)';
        setTimeout(() => {
            this.style.transform = '';
        }, 500);
    });
});

// Smooth scrolling for any future internal links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Add some interactive hover effects
document.addEventListener('mousemove', function(e) {
    const star = document.querySelector('.star-icon');
    const mouseX = e.clientX;
    const mouseY = e.clientY;
    
    // Subtle star movement based on mouse position
    const moveX = (mouseX - window.innerWidth / 2) * 0.01;
    const moveY = (mouseY - window.innerHeight / 2) * 0.01;
    
    star.style.transform = `translateX(calc(-50% + ${moveX}px)) translateY(${moveY}px)`;
});