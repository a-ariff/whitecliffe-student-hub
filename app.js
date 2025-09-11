// Whitecliffe Student Hub - Ultimate Homepage
class WhitecliffeStudentHub {
    constructor() {
        // Initialize data from provided JSON
        this.currentDate = new Date('2025-09-11T11:00:00');
        this.isDarkMode = false;
        
        // Motivational quotes that change daily
        this.motivationalQuotes = [
            "The expert in anything was once a beginner. Keep going! 🚀",
            "Your future self is counting on what you do today. Make it count! 💪",
            "Every line of code, every concept learned, builds your digital future. 💻",
            "Technology doesn't wait. Neither should your learning journey! ⚡",
            "The best time to plant a tree was 20 years ago. The second best time is now! 🌱",
            "Success is not final, failure is not fatal: it is the courage to continue that counts. 🎯",
            "The only impossible journey is the one you never begin. Start today! 🏃‍♂️",
            "Innovation distinguishes between a leader and a follower. Lead! 🌟",
            "The beautiful thing about learning is nobody can take it away from you. 📚",
            "Your limitation—it's only your imagination. Think bigger! 🧠"
        ];

        // Assignments with detailed weekly topics
        this.assignments = [
            {
                id: 1,
                title: "Assessment 1: Business Case Report",
                course: "IT8102 Technology Strategy and Information Management",
                courseCode: "IT8102",
                dueDate: "2025-09-28",
                dueTime: "23:59",
                priority: "Critical",
                status: "Ready to Submit",
                progress: 95,
                notes: "Excellent work completed! Final template compliance check needed.",
                estimatedHours: 20,
                weeklyTopics: [
                    "Week 1: Digital Transformation Fundamentals - Understanding business digitization drivers",
                    "Week 2: IT Strategy Development - Aligning technology with business objectives",
                    "Week 3: ITSM/ITIL Frameworks - Service management best practices",
                    "Week 4: Risk Management - ISO 31000 principles and business continuity",
                    "Week 5: Data Governance - Privacy Act 2020 and information lifecycle",
                    "Week 6: Change Management - Kotter's model and stakeholder engagement",
                    "Week 7: Technology Maturity Models - CMMI framework application",
                    "Week 8: Business Case Development - ROI analysis and implementation roadmaps"
                ],
                studyTips: [
                    "Focus on real-world business scenarios like APL photography",
                    "Practice writing from ICT Manager perspective, not student voice",
                    "Use professional business terminology throughout",
                    "Emphasize ROI and business value in all recommendations",
                    "Template compliance is critical for full marks"
                ],
                resources: [
                    "Canvas IT Strategy Template",
                    "Smartsheet Risk Register Template", 
                    "NZ Government Data Management Template",
                    "Privacy Act 2020 Guidelines"
                ]
            },
            {
                id: 2,
                title: "Assessment 2: Systems Critique Report",
                course: "IT8103 Cyber Security",
                courseCode: "IT8103",
                dueDate: "2025-11-03",
                dueTime: "23:59",
                priority: "High",
                status: "Not Started",
                progress: 0,
                notes: "",
                estimatedHours: 30,
                weeklyTopics: [
                    "Week 1: Cybersecurity Fundamentals - CIA Triad and security principles",
                    "Week 2: Threat Landscape - Current cyber threats and attack vectors",
                    "Week 3: Risk Assessment - Identifying and evaluating security risks",
                    "Week 4: Security Controls - Technical, administrative, and physical safeguards",
                    "Week 5: Incident Response - Planning and executing security incident management",
                    "Week 6: Compliance Frameworks - ISO 27001, NIST, and regulatory requirements",
                    "Week 7: Network Security - Firewalls, intrusion detection, and monitoring",
                    "Week 8: Security Architecture - Designing secure systems and infrastructure"
                ],
                studyTips: [
                    "Focus on practical security implementations",
                    "Understand both technical and business perspectives",
                    "Practice threat modeling exercises",
                    "Study real-world cyber attack case studies",
                    "Learn to communicate security risks to management"
                ],
                resources: [
                    "NIST Cybersecurity Framework",
                    "ISO 27001 Standards",
                    "OWASP Security Guidelines",
                    "TryHackMe Practice Labs"
                ]
            },
            {
                id: 3,
                title: "Assessment 2: Research Proposal",
                course: "IT8101 Research Methods and Skills",
                courseCode: "IT8101",
                dueDate: "2025-11-05",
                dueTime: "23:59",
                priority: "High",
                status: "Not Started",
                progress: 0,
                notes: "",
                estimatedHours: 25,
                weeklyTopics: [
                    "Week 1: Research Philosophy - Positivism, interpretivism, and pragmatism",
                    "Week 2: Literature Review - Systematic searching and critical analysis",
                    "Week 3: Research Design - Quantitative, qualitative, and mixed methods",
                    "Week 4: Data Collection - Surveys, interviews, observations, and experiments",
                    "Week 5: Sampling Methods - Probability and non-probability sampling techniques",
                    "Week 6: Data Analysis - Statistical methods and qualitative analysis",
                    "Week 7: Research Ethics - Consent, privacy, and ethical considerations",
                    "Week 8: Research Proposal Writing - Structure, methodology, and presentation"
                ],
                studyTips: [
                    "Choose a research topic you're genuinely interested in",
                    "Start literature review early - it takes time",
                    "Practice APA referencing consistently",
                    "Develop clear research questions and hypotheses",
                    "Consider ethical implications throughout"
                ],
                resources: [
                    "APA Style Guide 7th Edition",
                    "Google Scholar for literature searches",
                    "Mendeley for reference management",
                    "Overleaf for LaTeX document preparation"
                ]
            },
            {
                id: 4,
                title: "Assessment 2: Design Solution Report", 
                course: "IT8106 Ubiquitous Computing and Intelligent Systems",
                courseCode: "IT8106",
                dueDate: "2025-11-07",
                dueTime: "23:59",
                priority: "High",
                status: "Not Started",
                progress: 0,
                notes: "",
                estimatedHours: 25,
                weeklyTopics: [
                    "Week 1: Ubiquitous Computing Concepts - Pervasive and ambient computing",
                    "Week 2: IoT Fundamentals - Sensors, actuators, and connectivity",
                    "Week 3: Human-Computer Interaction - User experience in ubiquitous systems",
                    "Week 4: Artificial Intelligence - Machine learning and intelligent systems",
                    "Week 5: System Architecture - Designing distributed and embedded systems",
                    "Week 6: Data Processing - Edge computing and real-time analytics",
                    "Week 7: Security and Privacy - Protecting ubiquitous computing systems",
                    "Week 8: Design Methodology - User-centered design for intelligent systems"
                ],
                studyTips: [
                    "Focus on practical applications of ubiquitous computing",
                    "Understand user experience principles",
                    "Practice system design thinking",
                    "Explore emerging technologies like AR/VR/IoT",
                    "Consider ethical implications of intelligent systems"
                ],
                resources: [
                    "Arduino and Raspberry Pi tutorials",
                    "Human-Computer Interaction guidelines",
                    "Machine Learning fundamentals",
                    "IoT development platforms"
                ]
            },
            {
                id: 5,
                title: "Assessment 2: Project Plan Report",
                course: "IT8102 Technology Management",
                courseCode: "IT8102", 
                dueDate: "2025-11-14",
                dueTime: "23:59",
                priority: "Medium",
                status: "Not Started",
                progress: 0,
                notes: "",
                estimatedHours: 20,
                weeklyTopics: [
                    "Week 9: Project Management Fundamentals - PM methodologies and frameworks",
                    "Week 10: Project Planning - Scope, schedule, and resource management",
                    "Week 11: Risk Management - Project risk identification and mitigation",
                    "Week 12: Quality Management - Standards, testing, and quality assurance",
                    "Week 13: Communication Management - Stakeholder engagement strategies",
                    "Week 14: Agile Methodologies - Scrum, Kanban, and iterative development",
                    "Week 15: Project Monitoring - KPIs, dashboards, and progress tracking",
                    "Week 16: Project Closure - Lessons learned and knowledge transfer"
                ],
                studyTips: [
                    "Apply project management to real scenarios",
                    "Practice creating Gantt charts and timelines",
                    "Understand stakeholder management",
                    "Learn both traditional and agile approaches",
                    "Focus on practical implementation challenges"
                ],
                resources: [
                    "Microsoft Project tutorials",
                    "PMBOK Guide fundamentals",
                    "Agile and Scrum methodology guides",
                    "Risk management templates"
                ]
            }
        ];

        this.upcomingEvents = [
            {
                title: "Q&A - Cyber Security",
                date: "2025-09-15",
                time: "12:00-13:00",
                course: "IT8103",
                type: "qa",
                location: "Online/Campus"
            },
            {
                title: "Weekly QA Session",
                date: "2025-09-17", 
                time: "15:00-16:00",
                course: "IT8101",
                type: "qa",
                location: "Online/Campus"
            },
            {
                title: "Seminar 3 - Cyber Security",
                date: "2025-09-23",
                time: "15:00-17:00",
                course: "IT8103",
                type: "seminar",
                location: "Campus"
            },
            {
                title: "UCIS - Third Seminar",
                date: "2025-09-23",
                time: "18:30-20:30",
                course: "IT8106", 
                type: "seminar",
                location: "Campus"
            },
            {
                title: "Seminar 3 - Research Methods",
                date: "2025-09-24",
                time: "14:00-16:00",
                course: "IT8101",
                type: "seminar",
                location: "Campus"
            }
        ];

        this.quickLinks = [
            {
                title: "Canvas LMS",
                url: "https://whitecliffe.instructure.com",
                icon: "📚",
                description: "Course materials and submissions"
            },
            {
                title: "Student Email",
                url: "https://outlook.office.com",
                icon: "✉️",
                description: "Whitecliffe student email"
            },
            {
                title: "Library Resources",
                url: "https://whitecliffe.libguides.com",
                icon: "🏛️",
                description: "Academic research databases"
            },
            {
                title: "TryHackMe",
                url: "https://tryhackme.com",
                icon: "🔒",
                description: "Cybersecurity practice labs"
            },
            {
                title: "GitHub",
                url: "https://github.com",
                icon: "💻",
                description: "Code repositories and projects"
            },
            {
                title: "Overleaf",
                url: "https://overleaf.com",
                icon: "📄",
                description: "LaTeX document preparation"
            }
        ];

        this.studyTips = [
            "🍅 Use Pomodoro Technique: 25min focused work, 5min break",
            "📝 Take handwritten notes for better retention", 
            "🎯 Set specific, measurable daily goals",
            "🔄 Review material within 24 hours to improve retention",
            "👥 Form study groups for difficult concepts",
            "🧘 Take regular breaks to maintain focus",
            "📱 Use apps to block distracting websites during study",
            "☕ Stay hydrated and maintain good nutrition"
        ];

        // Pomodoro timer state
        this.pomodoroState = {
            minutes: 25,
            seconds: 0,
            isRunning: false,
            isBreak: false,
            sessionCount: 0,
            dailyStudyMinutes: 135 // 2h 15m
        };

        // Study streak and achievements
        this.studyStats = {
            streak: 3,
            totalStudyTime: 135,
            completedSessions: 8,
            achievements: ['First Week', 'Early Bird', 'Consistent Learner']
        };

        // Timer interval holder
        this.pomodoroInterval = null;
    }

    init() {
        // Wait for DOM to be fully loaded
        this.updateCurrentTime();
        this.showDailyQuote();
        this.calculateDaysUntilDue();
        this.renderAssignments();
        this.renderQuickLinks();
        this.renderEvents();
        this.renderStudyTips();
        this.updateStats();
        this.startCountdown();
        this.initPomodoro();
        this.bindEvents();
        
        // Update every minute
        setInterval(() => {
            this.currentDate.setMinutes(this.currentDate.getMinutes() + 1);
            this.updateCurrentTime();
            this.updateCountdown();
        }, 60000);
    }

    showDailyQuote() {
        // Use current date to pick a consistent daily quote
        const dayOfYear = Math.floor((this.currentDate - new Date(this.currentDate.getFullYear(), 0, 0)) / (1000 * 60 * 60 * 24));
        const quoteIndex = dayOfYear % this.motivationalQuotes.length;
        const quoteElement = document.getElementById('quoteText');
        
        if (quoteElement) {
            quoteElement.textContent = this.motivationalQuotes[quoteIndex];
            quoteElement.parentElement.classList.add('fade-in');
        }
    }

    calculateDaysUntilDue() {
        this.assignments.forEach(assignment => {
            const dueDate = new Date(`${assignment.dueDate}T${assignment.dueTime}`);
            const diffTime = dueDate - this.currentDate;
            const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
            assignment.daysUntilDue = Math.max(0, diffDays);
        });
    }

    updateCurrentTime() {
        const timeElement = document.getElementById('currentTime');
        if (timeElement) {
            const options = { 
                weekday: 'long', 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric',
                hour: '2-digit',
                minute: '2-digit',
                timeZoneName: 'short'
            };
            timeElement.textContent = this.currentDate.toLocaleString('en-NZ', options);
        }
    }

    renderAssignments() {
        const grid = document.getElementById('assignmentsGrid');
        if (!grid) return;

        const sortedAssignments = [...this.assignments].sort((a, b) => new Date(a.dueDate) - new Date(b.dueDate));
        
        grid.innerHTML = sortedAssignments.map(assignment => `
            <div class="assignment-card ${assignment.priority.toLowerCase()}" data-id="${assignment.id}" style="cursor: pointer;">
                <div class="assignment-header">
                    <div class="assignment-info">
                        <h3 class="assignment-title">${assignment.title}</h3>
                        <p class="assignment-course">${assignment.course}</p>
                    </div>
                    <span class="assignment-priority ${assignment.priority.toLowerCase()}">${assignment.priority}</span>
                </div>
                
                <div class="assignment-due">
                    <span class="due-date">📅 Due: ${this.formatDate(assignment.dueDate)} at ${assignment.dueTime}</span>
                    <span class="days-remaining ${assignment.priority.toLowerCase()}">${assignment.daysUntilDue} days left</span>
                </div>
                
                <div class="progress-section">
                    <div class="progress-header">
                        <span class="progress-label">Progress</span>
                        <span class="progress-percentage">${assignment.progress}%</span>
                    </div>
                    <div class="progress-bar">
                        <div class="progress-fill" style="width: ${assignment.progress}%"></div>
                    </div>
                </div>
                
                <div class="assignment-status">
                    Status: ${assignment.status} • ${assignment.estimatedHours}h estimated
                </div>
            </div>
        `).join('');
    }

    renderQuickLinks() {
        const container = document.getElementById('quickLinks');
        if (!container) return;

        container.innerHTML = this.quickLinks.map(link => `
            <a href="${link.url}" class="quick-link" target="_blank" rel="noopener noreferrer">
                <div class="link-icon">${link.icon}</div>
                <div class="link-info">
                    <div class="link-title">${link.title}</div>
                    <div class="link-desc">${link.description}</div>
                </div>
            </a>
        `).join('');
    }

    renderEvents() {
        const container = document.getElementById('eventsList');
        if (!container) return;

        const upcomingEvents = this.upcomingEvents
            .filter(event => new Date(event.date) >= this.currentDate)
            .sort((a, b) => new Date(a.date) - new Date(b.date))
            .slice(0, 4);

        container.innerHTML = upcomingEvents.map(event => `
            <div class="event-item">
                <div class="event-title">${event.title}</div>
                <div class="event-time">📅 ${this.formatDate(event.date)} • ⏰ ${event.time}</div>
                <div class="event-course">${event.course}</div>
            </div>
        `).join('');
    }

    renderStudyTips() {
        const container = document.getElementById('studyTips');
        if (!container) return;

        // Show 3 random study tips
        const shuffledTips = [...this.studyTips].sort(() => 0.5 - Math.random()).slice(0, 3);
        
        container.innerHTML = shuffledTips.map(tip => `
            <div class="study-tip">${tip}</div>
        `).join('');
    }

    updateStats() {
        const totalAssignments = this.assignments.length;
        const completedAssignments = this.assignments.filter(a => a.progress >= 100).length;
        const averageProgress = Math.round(this.assignments.reduce((sum, a) => sum + a.progress, 0) / totalAssignments);

        const elements = {
            totalAssignments: document.getElementById('totalAssignments'),
            completedAssignments: document.getElementById('completedAssignments'),
            averageProgress: document.getElementById('averageProgress'),
            studyStreak: document.getElementById('studyStreak')
        };

        if (elements.totalAssignments) elements.totalAssignments.textContent = totalAssignments;
        if (elements.completedAssignments) elements.completedAssignments.textContent = completedAssignments;
        if (elements.averageProgress) elements.averageProgress.textContent = `${averageProgress}%`;
        if (elements.studyStreak) elements.studyStreak.textContent = `${this.studyStats.streak} days`;
    }

    startCountdown() {
        this.updateCountdown();
    }

    updateCountdown() {
        const criticalAssignment = this.assignments.find(a => a.priority === 'Critical');
        if (!criticalAssignment) return;
        
        const dueDate = new Date(`${criticalAssignment.dueDate}T${criticalAssignment.dueTime}`);
        const now = this.currentDate;
        const diff = dueDate - now;
        
        const elements = {
            days: document.getElementById('days'),
            hours: document.getElementById('hours'),
            minutes: document.getElementById('minutes')
        };
        
        if (diff <= 0) {
            if (elements.days) elements.days.textContent = '0';
            if (elements.hours) elements.hours.textContent = '0';
            if (elements.minutes) elements.minutes.textContent = '0';
            return;
        }
        
        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        
        if (elements.days) elements.days.textContent = days;
        if (elements.hours) elements.hours.textContent = hours.toString().padStart(2, '0');
        if (elements.minutes) elements.minutes.textContent = minutes.toString().padStart(2, '0');
    }

    initPomodoro() {
        this.updateTimerDisplay();
        this.updateDailyStudyTime();
        this.updateTimerButtons();
    }

    updateTimerDisplay() {
        const display = document.getElementById('timerDisplay');
        if (display) {
            const minutes = this.pomodoroState.minutes.toString().padStart(2, '0');
            const seconds = this.pomodoroState.seconds.toString().padStart(2, '0');
            display.textContent = `${minutes}:${seconds}`;
        }

        const session = document.getElementById('timerSession');
        if (session) {
            session.textContent = this.pomodoroState.isBreak ? 'Break Time' : 'Focus Session';
        }
    }

    updateDailyStudyTime() {
        const element = document.getElementById('dailyStudyTime');
        if (element) {
            const hours = Math.floor(this.pomodoroState.dailyStudyMinutes / 60);
            const minutes = this.pomodoroState.dailyStudyMinutes % 60;
            element.textContent = `${hours}h ${minutes}m`;
        }
    }

    startPomodoro() {
        if (this.pomodoroState.isRunning) return;
        
        this.pomodoroState.isRunning = true;
        this.pomodoroInterval = setInterval(() => {
            if (this.pomodoroState.seconds === 0) {
                if (this.pomodoroState.minutes === 0) {
                    // Session complete
                    this.completePomodoro();
                    return;
                }
                this.pomodoroState.minutes--;
                this.pomodoroState.seconds = 59;
            } else {
                this.pomodoroState.seconds--;
            }
            this.updateTimerDisplay();
        }, 1000);

        this.updateTimerButtons();
    }

    pausePomodoro() {
        this.pomodoroState.isRunning = false;
        if (this.pomodoroInterval) {
            clearInterval(this.pomodoroInterval);
            this.pomodoroInterval = null;
        }
        this.updateTimerButtons();
    }

    resetPomodoro() {
        this.pausePomodoro();
        this.pomodoroState.minutes = this.pomodoroState.isBreak ? 5 : 25;
        this.pomodoroState.seconds = 0;
        this.updateTimerDisplay();
        this.updateTimerButtons();
    }

    completePomodoro() {
        this.pausePomodoro();
        
        if (!this.pomodoroState.isBreak) {
            // Completed a focus session
            this.pomodoroState.sessionCount++;
            this.pomodoroState.dailyStudyMinutes += 25;
            this.updateDailyStudyTime();
        }

        // Switch between focus and break
        this.pomodoroState.isBreak = !this.pomodoroState.isBreak;
        this.pomodoroState.minutes = this.pomodoroState.isBreak ? 5 : 25;
        this.pomodoroState.seconds = 0;
        
        this.updateTimerDisplay();
        this.updateTimerButtons();

        // Show completion notification
        this.showNotification(
            this.pomodoroState.isBreak ? 
            '🎉 Focus session complete! Time for a break.' : 
            '☕ Break time over! Ready for another focus session?'
        );
    }

    updateTimerButtons() {
        const startBtn = document.getElementById('startTimer');
        const pauseBtn = document.getElementById('pauseTimer');
        
        if (startBtn) {
            startBtn.disabled = this.pomodoroState.isRunning;
            startBtn.textContent = this.pomodoroState.isRunning ? 'Running' : 'Start';
            startBtn.style.opacity = this.pomodoroState.isRunning ? '0.6' : '1';
        }
        
        if (pauseBtn) {
            pauseBtn.disabled = !this.pomodoroState.isRunning;
            pauseBtn.style.opacity = !this.pomodoroState.isRunning ? '0.6' : '1';
        }
    }

    showAssignmentDetails(assignmentId) {
        const assignment = this.assignments.find(a => a.id == assignmentId);
        if (!assignment) return;

        const modal = document.getElementById('assignmentModal');
        const modalTitle = document.getElementById('modalTitle');
        const modalBody = document.getElementById('modalBody');

        if (!modal || !modalTitle || !modalBody) return;

        modalTitle.textContent = assignment.title;

        modalBody.innerHTML = `
            <div class="assignment-overview">
                <h3>📚 Course: ${assignment.course}</h3>
                <p><strong>Due:</strong> ${this.formatDate(assignment.dueDate)} at ${assignment.dueTime}</p>
                <p><strong>Priority:</strong> <span class="assignment-priority ${assignment.priority.toLowerCase()}">${assignment.priority}</span></p>
                <p><strong>Estimated Time:</strong> ${assignment.estimatedHours} hours</p>
                <p><strong>Current Progress:</strong> ${assignment.progress}%</p>
            </div>

            <div class="weekly-topics">
                <h3>📖 Weekly Learning Topics</h3>
                <div class="topic-list">
                    ${assignment.weeklyTopics.map(topic => `
                        <div class="topic-item">
                            <div class="topic-week">${topic.split(':')[0]}:</div>
                            <div class="topic-content">${topic.split(':').slice(1).join(':').trim()}</div>
                        </div>
                    `).join('')}
                </div>
            </div>

            <div class="study-resources">
                <h3>📋 Study Tips</h3>
                <ul>
                    ${assignment.studyTips.map(tip => `<li>${tip}</li>`).join('')}
                </ul>

                <h3>🔗 Resources</h3>
                <div class="resource-list">
                    ${assignment.resources.map(resource => `
                        <div class="resource-item">${resource}</div>
                    `).join('')}
                </div>
            </div>
        `;

        modal.classList.remove('hidden');
    }

    closeModal() {
        const modal = document.getElementById('assignmentModal');
        if (modal) {
            modal.classList.add('hidden');
        }
    }

    toggleTheme() {
        this.isDarkMode = !this.isDarkMode;
        document.documentElement.setAttribute('data-color-scheme', this.isDarkMode ? 'dark' : 'light');
        
        const themeToggle = document.getElementById('themeToggle');
        if (themeToggle) {
            themeToggle.textContent = this.isDarkMode ? '☀️' : '🌙';
            themeToggle.title = this.isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode';
        }
    }

    exportData() {
        const exportData = {
            assignments: this.assignments,
            upcomingEvents: this.upcomingEvents,
            studyStats: this.studyStats,
            pomodoroStats: {
                dailyStudyMinutes: this.pomodoroState.dailyStudyMinutes,
                sessionsCompleted: this.pomodoroState.sessionCount
            },
            exportDate: this.currentDate.toISOString(),
            appName: 'Whitecliffe Student Hub',
            version: '2.0'
        };
        
        const blob = new Blob([JSON.stringify(exportData, null, 2)], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `whitecliffe-student-hub-${this.currentDate.toISOString().split('T')[0]}.json`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
        
        this.showNotification('📤 Progress exported successfully!');
    }

    printSchedule() {
        window.print();
    }

    resetProgress() {
        if (!confirm('Are you sure you want to reset all progress? This cannot be undone.')) {
            return;
        }

        this.assignments.forEach(assignment => {
            assignment.progress = 0;
            assignment.status = 'Not Started';
            assignment.notes = '';
        });

        this.studyStats = {
            streak: 0,
            totalStudyTime: 0,
            completedSessions: 0,
            achievements: []
        };

        this.pomodoroState.dailyStudyMinutes = 0;
        this.pomodoroState.sessionCount = 0;

        this.renderAssignments();
        this.updateStats();
        this.updateDailyStudyTime();
        
        this.showNotification('🔄 All progress has been reset!');
    }

    showNotification(message) {
        // Simple notification system
        const notification = document.createElement('div');
        notification.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background: var(--color-success);
            color: var(--color-white);
            padding: 12px 20px;
            border-radius: 8px;
            font-weight: 500;
            z-index: 1001;
            animation: slideIn 0.3s ease-out;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
        `;
        notification.textContent = message;
        
        document.body.appendChild(notification);
        
        setTimeout(() => {
            notification.style.animation = 'slideOut 0.3s ease-in forwards';
            setTimeout(() => {
                if (notification.parentNode) {
                    notification.remove();
                }
            }, 300);
        }, 3000);
    }

    bindEvents() {
        // Theme toggle
        const themeToggle = document.getElementById('themeToggle');
        if (themeToggle) {
            themeToggle.addEventListener('click', (e) => {
                e.preventDefault();
                this.toggleTheme();
            });
        }

        // Assignment cards click to show details - Use event delegation
        document.addEventListener('click', (e) => {
            const card = e.target.closest('.assignment-card');
            if (card) {
                const assignmentId = card.dataset.id;
                if (assignmentId) {
                    this.showAssignmentDetails(assignmentId);
                }
            }
        });

        // Modal events
        const modalClose = document.getElementById('modalClose');
        const modalOverlay = document.getElementById('modalOverlay');
        if (modalClose) modalClose.addEventListener('click', () => this.closeModal());
        if (modalOverlay) modalOverlay.addEventListener('click', () => this.closeModal());

        // Escape key to close modal
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                this.closeModal();
            }
        });

        // Pomodoro timer controls
        const startTimer = document.getElementById('startTimer');
        const pauseTimer = document.getElementById('pauseTimer');
        const resetTimer = document.getElementById('resetTimer');

        if (startTimer) {
            startTimer.addEventListener('click', (e) => {
                e.preventDefault();
                this.startPomodoro();
            });
        }
        if (pauseTimer) {
            pauseTimer.addEventListener('click', (e) => {
                e.preventDefault();
                this.pausePomodoro();
            });
        }
        if (resetTimer) {
            resetTimer.addEventListener('click', (e) => {
                e.preventDefault();
                this.resetPomodoro();
            });
        }

        // Action buttons
        const exportData = document.getElementById('exportData');
        const printSchedule = document.getElementById('printSchedule');
        const resetProgress = document.getElementById('resetProgress');

        if (exportData) {
            exportData.addEventListener('click', (e) => {
                e.preventDefault();
                this.exportData();
            });
        }
        if (printSchedule) {
            printSchedule.addEventListener('click', (e) => {
                e.preventDefault();
                this.printSchedule();
            });
        }
        if (resetProgress) {
            resetProgress.addEventListener('click', (e) => {
                e.preventDefault();
                this.resetProgress();
            });
        }
    }

    formatDate(dateStr) {
        const date = new Date(dateStr);
        const options = { 
            weekday: 'short',
            year: 'numeric', 
            month: 'short', 
            day: 'numeric' 
        };
        return date.toLocaleDateString('en-NZ', options);
    }
}

// Global instance
let studentHub;

// Initialize the application
document.addEventListener('DOMContentLoaded', () => {
    // Smooth loading transition
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease-in-out';
    
    // Initialize the student hub
    studentHub = new WhitecliffeStudentHub();
    studentHub.init();
    
    // Fade in the application
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);

    // Add CSS animations
    const style = document.createElement('style');
    style.textContent = `
        @keyframes slideIn {
            from {
                transform: translateX(100%);
                opacity: 0;
            }
            to {
                transform: translateX(0);
                opacity: 1;
            }
        }
        @keyframes slideOut {
            from {
                transform: translateX(0);
                opacity: 1;
            }
            to {
                transform: translateX(100%);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(style);
});
