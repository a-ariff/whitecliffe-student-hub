// Toast notification system
function showToast(title, message, type = 'success') {
  document.querySelectorAll('.toast').forEach(toast => toast.remove());
  
  const toast = document.createElement('div');
  toast.className = `toast toast--${type}`;
  toast.innerHTML = `
    ${type === 'success' ? '✅' : '❌'}
    <div class="toast__content">
      <div class="toast__title">${title}</div>
      <div class="toast__message">${message}</div>
    </div>
    <button class="toast__close">×</button>
  `;
  
  document.body.appendChild(toast);
  setTimeout(() => toast.classList.add('show'), 100);
  setTimeout(() => {
    toast.classList.remove('show');
    setTimeout(() => toast.remove(), 250);
  }, 5000);
  
  toast.querySelector('.toast__close').onclick = () => {
    toast.classList.remove('show');
    setTimeout(() => toast.remove(), 250);
  };
}

// localStorage helper functions
function saveToStorage(key, data) {
  try {
    localStorage.setItem(key, JSON.stringify({
      data,
      timestamp: Date.now()
    }));
  } catch (e) {
    console.warn('Could not save to localStorage:', e);
  }
}

function loadFromStorage(key, maxAgeMs = 30 * 60 * 1000) {
  try {
    const stored = localStorage.getItem(key);
    if (!stored) return null;
    
    const parsed = JSON.parse(stored);
    const age = Date.now() - parsed.timestamp;
    
    if (age > maxAgeMs) {
      localStorage.removeItem(key);
      return null;
    }
    
    return parsed.data;
  } catch (e) {
    console.warn('Could not load from localStorage:', e);
    return null;
  }
}

// Helper functions for countdown
function computeCountdown(dueISO) {
  const now = new Date();
  const due = new Date(dueISO);
  const diff = Math.max(0, due - now);
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);
  return { diff, days, hours, minutes, seconds };
}

function getUrgency(diffMs) {
  const oneDay = 24 * 60 * 60 * 1000;
  const threeDays = 3 * oneDay;
  if (diffMs <= oneDay) return 'critical';
  if (diffMs <= threeDays) return 'high';
  return 'medium';
}

// Main class
class WhitecliffeStudentHub {
  constructor() {
    this.currentDate = new Date();
    this.isDarkMode = false;
    
    // Motivational quotes
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
    
    // ===== REAL WHITECLIFFE ASSIGNMENTS =====
    // Replace these with your actual assignments from Canvas
   this.assignments = [
  {
    id: 'assignment-17947',
    title: 'Assessment 1: Research and Requirements',
    course: 'IT8106 Ubiquitous Computing and Intelligent Systems',
    courseCode: 'IT8106',
    dueDate: '2025-09-05',
    dueTime: '23:59',
    priority: 'High',
    status: 'In Progress',
    progress: 85,
    estimatedHours: 15,
    sourceUrl: 'https://learn.mywhitecliffe.com/courses/2265/assignments/17947'
  },
  {
    id: 'assignment-17991',
    title: 'Assessment 1: Scenario-based Business Case Report',
    course: 'IT8102 Technology Strategy & Information Management',
    courseCode: 'IT8102',
    dueDate: '2025-09-28',
    dueTime: '23:59',
    priority: 'Medium',
    status: 'Planning',
    progress: 25,
    estimatedHours: 20,
    sourceUrl: 'https://whitecliffe.instructure.com/courses/2261/assignments/17991'
  },
  {
    id: 'it8103-risk-assessment',
    title: 'Assessment 2: Risk Assessment Report',
    course: 'IT8103 Cyber Security',
    courseCode: 'IT8103',
    dueDate: '2025-10-12',
    dueTime: '23:59',
    priority: 'Medium',
    status: 'Not Started',
    progress: 0,
    estimatedHours: 12,
    sourceUrl: null
  },
  {
    id: 'it8101-literature-review',
    title: 'Literature Review Draft',
    course: 'IT8101 Research Methods and Skills',
    courseCode: 'IT8101',
    dueDate: '2025-10-20',
    dueTime: '23:59',
    priority: 'Medium',
    status: 'Research',
    progress: 15,
    estimatedHours: 18,
    sourceUrl: null
  }
];
    
    // ===== REAL WHITECLIFFE EVENTS =====
    // Replace these with your actual events from Canvas
    this.upcomingEvents = [
      {
        title: 'UCIS- Third Seminar',
        courseCode: 'IT8106',
        start: '2025-09-23T06:30:00.000Z',
        end: '2025-09-23T08:30:00.000Z'
      },
      {
        title: 'Seminar 3 - Research Methods & Skills',
        courseCode: 'IT8101', 
        start: '2025-09-24T02:00:00.000Z',
        end: '2025-09-24T04:00:00.000Z'
      },
      {
        title: 'Weekly QA Session',
        courseCode: 'IT8101',
        start: '2025-09-24T03:00:00.000Z', 
        end: '2025-09-24T04:00:00.000Z'
      },
      {
        title: 'IT8102 Assignment Workshop',
        courseCode: 'IT8102',
        start: '2025-09-26T13:00:00.000Z',
        end: '2025-09-26T15:00:00.000Z'
      }
    ];
    
    this.quickLinks = [
      { title: "Canvas LMS", url: "https://whitecliffe.instructure.com", icon: "📚", description: "Course materials and submissions" },
      { title: "Student Email", url: "https://outlook.office.com", icon: "✉️", description: "Whitecliffe student email" },
      { title: "Library Resources", url: "https://whitecliffe.libguides.com", icon: "🏛️", description: "Academic research databases" },
      { title: "TryHackMe", url: "https://tryhackme.com", icon: "🔒", description: "Cybersecurity practice labs" },
      { title: "GitHub", url: "https://github.com", icon: "💻", description: "Code repositories and projects" },
      { title: "Overleaf", url: "https://overleaf.com", icon: "📄", description: "LaTeX document preparation" }
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
    
    this.pomodoroState = {
      minutes: 25,
      seconds: 0,
      isRunning: false,
      isBreak: false,
      sessionCount: 0,
      dailyStudyMinutes: 135
    };
    
    this.studyStats = {
      streak: 3,
      totalStudyTime: 135,
      completedSessions: 8,
      achievements: ['First Week', 'Early Bird', 'Consistent Learner']
    };
    
    this.pomodoroInterval = null;
    this.countdownInterval = null;
    this._tickInterval = null;
  }

  async init() {
    // Load from localStorage first for instant display
    const storedAssignments = loadFromStorage('canvas_assignments', 30 * 60 * 1000);
    const storedEvents = loadFromStorage('canvas_events', 30 * 60 * 1000);
    
    if (storedAssignments && storedEvents) {
      this.assignments = storedAssignments;
      this.upcomingEvents = storedEvents;
    }
    
    // Initial render with cached/fallback data
    this.currentDate = new Date();
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
    
    // Start real-time clock
    if (this._tickInterval) clearInterval(this._tickInterval);
    this._tickInterval = setInterval(() => {
      this.currentDate = new Date();
      this.updateCurrentTime();
      this.updateCountdown();
    }, 1000);
    
    // Using real data from Canvas ICS feed - no sync needed
    showToast(
      'Student Hub Ready!',
      `Loaded ${this.assignments.length} assignments and ${this.upcomingEvents.length} events`,
      'success'
    );
  }

  showDailyQuote() {
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

  startCountdown() {
    this.updateCountdown();
    if (this.countdownInterval) clearInterval(this.countdownInterval);
    this.countdownInterval = setInterval(() => this.updateCountdown(), 1000);
  }

  updateCountdown() {
    const cards = document.querySelectorAll('.assignment-card');
    cards.forEach(card => {
      const dueISO = card.getAttribute('data-due-iso');
      if (!dueISO) return;
      
      const { diff, days, hours, minutes, seconds } = computeCountdown(dueISO);
      const dd = card.querySelector('[data-countdown-days]');
      const hh = card.querySelector('[data-countdown-hours]');
      const mm = card.querySelector('[data-countdown-minutes]');
      const ss = card.querySelector('[data-countdown-seconds]');
      
      if (dd) dd.textContent = days;
      if (hh) hh.textContent = String(hours).padStart(2, '0');
      if (mm) mm.textContent = String(minutes).padStart(2, '0');
      if (ss) ss.textContent = String(seconds).padStart(2, '0');
      
      card.classList.remove('critical', 'high', 'medium');
      card.classList.add(getUrgency(diff));
    });

    // Update main countdown in hero
    const countdownDays = document.getElementById('countdownDays');
    const countdownHours = document.getElementById('countdownHours');
    const countdownMinutes = document.getElementById('countdownMinutes');
    
    if (this.assignments.length > 0) {
      const nextAssignment = this.assignments.sort((a, b) => new Date(`${a.dueDate}T${a.dueTime}`) - new Date(`${b.dueDate}T${b.dueTime}`))[0];
      const { days, hours, minutes } = computeCountdown(`${nextAssignment.dueDate}T${nextAssignment.dueTime}`);
      if (countdownDays) countdownDays.textContent = days;
      if (countdownHours) countdownHours.textContent = String(hours).padStart(2, '0');
      if (countdownMinutes) countdownMinutes.textContent = String(minutes).padStart(2, '0');
    }
  }

  renderAssignments() {
    const grid = document.getElementById('assignmentsGrid');
    if (!grid) return;
    
    const sortedAssignments = [...this.assignments].sort((a, b) => 
      new Date(`${a.dueDate}T${a.dueTime}`) - new Date(`${b.dueDate}T${b.dueTime}`)
    );
    
    grid.innerHTML = sortedAssignments.map(assignment => `
      <div class="assignment-card ${assignment.priority.toLowerCase()}" 
           data-due-iso="${assignment.dueDate}T${assignment.dueTime}" 
           onclick="hub.showAssignmentDetails('${assignment.id}')">
        <div class="assignment-header">
          <div class="assignment-info">
            <h3 class="assignment-title">${assignment.title}</h3>
            <div class="assignment-course">${assignment.course}</div>
          </div>
          <div class="assignment-priority ${assignment.priority.toLowerCase()}">${assignment.priority}</div>
        </div>
        <div class="assignment-due">
          <span class="due-date">Due: ${this.formatDate(assignment.dueDate)} at ${assignment.dueTime}</span>
          <span class="days-remaining ${assignment.priority.toLowerCase()}">${assignment.daysUntilDue} days left</span>
        </div>
        <div class="countdown">
          <div class="countdown-item">
            <span class="countdown-number" data-countdown-days>0</span>
            <span class="countdown-label">Days</span>
          </div>
          <div class="countdown-item">
            <span class="countdown-number" data-countdown-hours>00</span>
            <span class="countdown-label">Hours</span>
          </div>
          <div class="countdown-item">
            <span class="countdown-number" data-countdown-minutes>00</span>
            <span class="countdown-label">Minutes</span>
          </div>
          <div class="countdown-item">
            <span class="countdown-number" data-countdown-seconds>00</span>
            <span class="countdown-label">Seconds</span>
          </div>
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
      </div>
    `).join('');
  }

  formatDate(dateStr) {
    const date = new Date(dateStr);
    return date.toLocaleDateString('en-NZ', { 
      weekday: 'short', 
      month: 'short', 
      day: 'numeric' 
    });
  }

  renderQuickLinks() {
    const container = document.getElementById('quickLinks');
    if (!container) return;
    
    container.innerHTML = this.quickLinks.map(link => `
      <a href="${link.url}" target="_blank" class="quick-link">
        <span class="link-icon">${link.icon}</span>
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
    
    const upcomingEvents = this.upcomingEvents.slice(0, 5);
    container.innerHTML = upcomingEvents.map(event => `
      <div class="event-item">
        <div class="event-title">${event.title}</div>
        <div class="event-time">${this.formatEventTime(event.start, event.end)}</div>
        <div class="event-course">${event.courseCode || 'General'}</div>
      </div>
    `).join('');
  }

  formatEventTime(start, end) {
    const startDate = new Date(start);
    const endDate = new Date(end);
    const dateStr = startDate.toLocaleDateString('en-NZ', { 
      month: 'short', 
      day: 'numeric' 
    });
    const startTime = startDate.toLocaleTimeString('en-NZ', { 
      hour: '2-digit', 
      minute: '2-digit' 
    });
    const endTime = endDate.toLocaleTimeString('en-NZ', { 
      hour: '2-digit', 
      minute: '2-digit' 
    });
    return `${dateStr} ${startTime} - ${endTime}`;
  }

  renderStudyTips() {
    const container = document.getElementById('studyTips');
    if (!container) return;
    
    container.innerHTML = this.studyTips.map(tip => `
      <div class="study-tip">${tip}</div>
    `).join('');
  }

  updateStats() {
    const totalEl = document.getElementById('totalAssignments');
    const completedEl = document.getElementById('completedAssignments');
    const avgEl = document.getElementById('averageProgress');
    const streakEl = document.getElementById('studyStreak');
    
    if (totalEl) totalEl.textContent = this.assignments.length;
    if (completedEl) completedEl.textContent = this.assignments.filter(a => a.progress === 100).length;
    if (avgEl) {
      const avg = this.assignments.length > 0 ? 
        Math.round(this.assignments.reduce((sum, a) => sum + a.progress, 0) / this.assignments.length) : 0;
      avgEl.textContent = `${avg}%`;
    }
    if (streakEl) streakEl.textContent = `${this.studyStats.streak} days`;
  }

  initPomodoro() {
    this.updatePomodoroDisplay();
  }

  updatePomodoroDisplay() {
    const timeEl = document.getElementById('timerTime');
    const sessionEl = document.getElementById('timerSession');
    const statsEl = document.getElementById('timerStats');
    
    if (timeEl) {
      const minutes = String(this.pomodoroState.minutes).padStart(2, '0');
      const seconds = String(this.pomodoroState.seconds).padStart(2, '0');
      timeEl.textContent = `${minutes}:${seconds}`;
    }
    if (sessionEl) {
      sessionEl.textContent = this.pomodoroState.isBreak ? 'Break Time' : 'Focus Session';
    }
    if (statsEl) {
      const hours = Math.floor(this.pomodoroState.dailyStudyMinutes / 60);
      const mins = this.pomodoroState.dailyStudyMinutes % 60;
      statsEl.innerHTML = `Today: **${hours}h ${mins}m**`;
    }
  }

  startPomodoro() {
    if (this.pomodoroState.isRunning) return;
    
    this.pomodoroState.isRunning = true;
    this.pomodoroInterval = setInterval(() => {
      if (this.pomodoroState.seconds > 0) {
        this.pomodoroState.seconds--;
      } else if (this.pomodoroState.minutes > 0) {
        this.pomodoroState.minutes--;
        this.pomodoroState.seconds = 59;
      } else {
        this.pomodoroFinished();
      }
      this.updatePomodoroDisplay();
    }, 1000);
  }

  pausePomodoro() {
    this.pomodoroState.isRunning = false;
    if (this.pomodoroInterval) {
      clearInterval(this.pomodoroInterval);
      this.pomodoroInterval = null;
    }
  }

  resetPomodoro() {
    this.pausePomodoro();
    this.pomodoroState.minutes = this.pomodoroState.isBreak ? 5 : 25;
    this.pomodoroState.seconds = 0;
    this.updatePomodoroDisplay();
  }

  pomodoroFinished() {
    this.pausePomodoro();
    
    if (this.pomodoroState.isBreak) {
      this.pomodoroState.isBreak = false;
      this.pomodoroState.minutes = 25;
      this.pomodoroState.seconds = 0;
      showToast('Break Complete!', 'Ready for your next focus session?', 'success');
    } else {
      this.pomodoroState.sessionCount++;
      this.pomodoroState.dailyStudyMinutes += 25;
      this.pomodoroState.isBreak = true;
      this.pomodoroState.minutes = 5;
      this.pomodoroState.seconds = 0;
      showToast('Focus Session Complete!', 'Time for a 5-minute break!', 'success');
    }
    
    this.updatePomodoroDisplay();
  }

  showAssignmentDetails(assignmentId) {
    const assignment = this.assignments.find(a => a.id === assignmentId);
    if (!assignment) return;
    
    const modal = document.getElementById('assignmentModal');
    const modalTitle = document.getElementById('modalTitle');
    const modalBody = document.getElementById('modalBody');
    
    modalTitle.textContent = assignment.title;
    modalBody.innerHTML = `
      <div class="assignment-details">
        <h4>Course: ${assignment.course}</h4>
        <p><strong>Due:</strong> ${this.formatDate(assignment.dueDate)} at ${assignment.dueTime}</p>
        <p><strong>Priority:</strong> ${assignment.priority}</p>
        <p><strong>Status:</strong> ${assignment.status}</p>
        <p><strong>Progress:</strong> ${assignment.progress}%</p>
        ${assignment.sourceUrl ? `<p><a href="${assignment.sourceUrl}" target="_blank" class="btn btn--primary">View in Canvas</a></p>` : ''}
      </div>
    `;
    modal.classList.remove('hidden');
  }

  bindEvents() {
    // Pomodoro controls
    const startBtn = document.getElementById('timerStart');
    const pauseBtn = document.getElementById('timerPause');
    const resetBtn = document.getElementById('timerReset');
    if (startBtn) startBtn.addEventListener('click', () => this.startPomodoro());
    if (pauseBtn) pauseBtn.addEventListener('click', () => this.pausePomodoro());
    if (resetBtn) resetBtn.addEventListener('click', () => this.resetPomodoro());

    // Canvas sync button (now just refreshes the page)
    const syncBtn = document.getElementById('syncCanvasBtn');
    if (syncBtn) {
      syncBtn.addEventListener('click', () => location.reload());
    }

    // Modal events
    const modal = document.getElementById('assignmentModal');
    const modalClose = document.getElementById('modalClose');
    const modalOverlay = modal?.querySelector('.modal-overlay');
    if (modalClose) {
      modalClose.addEventListener('click', () => modal.classList.add('hidden'));
    }
    if (modalOverlay) {
      modalOverlay.addEventListener('click', () => modal.classList.add('hidden'));
    }

    // Action buttons
    const exportBtn = document.getElementById('exportBtn');
    const printBtn = document.getElementById('printBtn');
    if (exportBtn) {
      exportBtn.addEventListener('click', () => {
        showToast('Export Started', 'Generating your progress report...', 'success');
      });
    }
    if (printBtn) {
      printBtn.addEventListener('click', () => {
        window.print();
      });
    }
  }
}

// Initialize the application
const hub = new WhitecliffeStudentHub();
window.hub = hub; // Make available globally for onclick handlers

// Start the app when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => hub.init());
} else {
  hub.init();
}
