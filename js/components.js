// components.js - Functions to render data into HTML

export function renderHero(data) {
    return `
        <div class="hero-text-content">
            <h1 class="hero-title">Hello, I'm <span class="text-accent">${data.name}</span></h1>
            <h2 class="hero-subtitle">${data.title}</h2>
            <p class="hero-tagline">${data.tagline}</p>
            <div class="hero-cta">
                <a href="#projects" class="btn btn-primary">View Projects <i data-lucide="arrow-right" class="btn-icon"></i></a>
                <a href="public/resume.pdf" download="Megha_Resume.pdf" target="_blank" class="btn btn-secondary">Download Resume <i data-lucide="download" class="btn-icon"></i></a>
                <a href="#contact" class="btn btn-outline">Contact Me</a>
            </div>
        </div>
        <div class="hero-stats">
            ${data.stats.map(stat => `
                <div class="stat-card glass-card">
                    <span class="stat-value"><span class="counter" data-target="${stat.value}">${stat.value}</span>${stat.suffix}</span>
                    <span class="stat-label">${stat.label}</span>
                </div>
            `).join('')}
        </div>
    `;
}

export function renderAbout(data) {
    return `
        <div class="about-grid">
            <div class="about-text">
                <p>${data.description}</p>
            </div>
            <div class="about-visual">
                <div class="visual-card glass-card">
                    <img src="public/profile.jpg" alt="Megha - Profile Picture" class="profile-img" />
                    <div class="visual-bg-glow"></div>
                </div>
            </div>
        </div>
    `;
}

export function renderEducation(data) {
    return data.map((item, index) => `
        <div class="timeline-item">
            <div class="timeline-dot"></div>
            <div class="timeline-content glass-card">
                <span class="timeline-duration">${item.duration}</span>
                <h3 class="timeline-title">${item.degree}</h3>
                <p class="timeline-org">${item.institution}</p>
                <div class="timeline-metric">
                    <i data-lucide="award"></i> ${item.metric}
                </div>
            </div>
        </div>
    `).join('');
}

export function renderProjects(data) {
    return data.map((project, index) => `
        <div class="project-card glass-card group">
            <div class="project-header">
                <h3 class="project-title">${project.title}</h3>
                <div class="project-links">
                    ${project.links.github ? `<a href="${project.links.github}" target="_blank" aria-label="GitHub"><i data-lucide="github"></i></a>` : ''}
                    ${project.links.demo ? `<a href="${project.links.demo}" target="_blank" aria-label="Live Demo"><i data-lucide="external-link"></i></a>` : ''}
                </div>
            </div>
            <p class="project-desc">${project.description}</p>
            
            <div class="project-impact">
                <span class="impact-label">Impact / Outcome</span>
                <span class="impact-value">${project.metric}</span>
            </div>

            <div class="project-details-container">
                <button class="expand-btn" onclick="this.nextElementSibling.classList.toggle('expanded'); this.querySelector('i').classList.toggle('rotated')">
                    Read More <i data-lucide="chevron-down"></i>
                </button>
                <div class="project-details">
                    <ul>
                        ${project.details.map(detail => `<li>${detail}</li>`).join('')}
                    </ul>
                </div>
            </div>

            <div class="project-tech">
                ${project.tech.map(tech => `<span class="tech-badge">${tech}</span>`).join('')}
            </div>
        </div>
    `).join('');
}

export function renderExperience(data) {
    return data.map((item, index) => `
        <div class="timeline-item">
            <div class="timeline-dot"></div>
            <div class="timeline-content glass-card">
                <span class="timeline-duration">${item.duration}</span>
                <h3 class="timeline-title">${item.role}</h3>
                <p class="timeline-org">${item.organization}</p>
                <ul class="timeline-highlights">
                    ${item.highlights.map(highlight => `<li>${highlight}</li>`).join('')}
                </ul>
            </div>
        </div>
    `).join('');
}

export function renderSkills(data) {
    return data.map(category => `
        <div class="skill-category glass-card">
            <h3 class="skill-category-title">${category.category}</h3>
            <div class="skill-items">
                ${category.items.map(item => `<span class="skill-badge">${item}</span>`).join('')}
            </div>
        </div>
    `).join('');
}

export function renderContactInfo(data) {
    return `
        <a href="mailto:${data.email}" class="contact-link">
            <div class="contact-icon"><i data-lucide="mail"></i></div>
            <span>${data.email}</span>
        </a>
        <a href="tel:${data.phone.replace(/\\s/g, '')}" class="contact-link">
            <div class="contact-icon"><i data-lucide="phone"></i></div>
            <span>${data.phone}</span>
        </a>
        <a href="${data.linkedin}" target="_blank" class="contact-link">
            <div class="contact-icon"><i data-lucide="linkedin"></i></div>
            <span>LinkedIn Profile</span>
        </a>
        <a href="${data.github}" target="_blank" class="contact-link">
            <div class="contact-icon"><i data-lucide="github"></i></div>
            <span>GitHub Profile</span>
        </a>
    `;
}
