/**
 * FitVerse AI Native Voice Assistant Speech Engine
 * Uses Web Speech API (SpeechRecognition & SpeechSynthesis)
 * for real-time speech commands, full web app analysis, and continuous multi-command voice control.
 */

export interface VoiceCommandHandlers {
  onNavigate?: (tab: 'dashboard' | 'workout' | 'diet' | 'avatar' | 'music' | 'analytics' | 'rewards' | 'settings' | 'notifications') => void;
  onLogWater?: () => void;
  onAddSteps?: () => void;
  onAddXp?: () => void;
  onToggleTheme?: () => void;
  onAnalyzeHealth?: () => void;
  onHypeTalk?: () => void;
  onFeedback?: (message: string) => void;
}

export class FitVerseVoiceEngine {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  private recognition: any = null;
  public isListening: boolean = false;
  private handlers: VoiceCommandHandlers = {};
  private lastCommandTime: number = 0;

  constructor(handlers: VoiceCommandHandlers) {
    this.handlers = handlers;
    this.initRecognition();
  }

  public updateHandlers(handlers: VoiceCommandHandlers) {
    this.handlers = { ...this.handlers, ...handlers };
  }

  private initRecognition() {
    if (typeof window === 'undefined') return;

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const SpeechRecognitionWindow = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;

    if (!SpeechRecognitionWindow) {
      console.warn('Web Speech API is not supported in this browser environment.');
      return;
    }

    this.recognition = new SpeechRecognitionWindow();
    this.recognition.continuous = true;
    this.recognition.interimResults = false;
    this.recognition.lang = typeof navigator !== 'undefined' ? (navigator.language || 'en-US') : 'en-US';

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    this.recognition.onresult = (event: any) => {
      const current = event.resultIndex;
      if (!event.results || !event.results[current]) return;

      const rawTranscript = event.results[current][0].transcript;
      const transcript = rawTranscript.toLowerCase().trim();
      console.log('Voice Command Received:', transcript);

      // Prevent duplicate rapid processing (600ms debounce)
      const now = Date.now();
      if (now - this.lastCommandTime < 600) return;
      this.lastCommandTime = now;

      if (transcript) {
        this.processCommand(transcript);
      }
    };

    // Auto-restart when browser recognition stream ends safely
    this.recognition.onend = () => {
      console.log('Voice recognition stream ended.');
      if (this.isListening) {
        setTimeout(() => {
          if (this.isListening) {
            try {
              this.recognition.start();
              console.log('Voice assistant auto-restarted listening.');
            } catch (err) {
              // Ignore if already active
            }
          }
        }, 600);
      }
    };

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    this.recognition.onerror = (event: any) => {
      if (event.error === 'not-allowed') {
        this.isListening = false;
        this.handlers.onFeedback?.('⚠️ Microphone permission denied.');
        return;
      }
      if (event.error === 'aborted') {
        // Ignore normal aborted events
        return;
      }
      console.warn('Voice Engine Notice:', event.error);
    };
  }

  public speak(text: string) {
    if (typeof window === 'undefined' || !window.speechSynthesis) return;

    window.speechSynthesis.cancel(); // Stop active speech
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.rate = 1.05;
    utterance.pitch = 1.0;

    // Pick crisp voice
    const voices = window.speechSynthesis.getVoices();
    const preferredVoice = voices.find((v) => v.name.includes('Google') || v.name.includes('Samantha') || v.lang.startsWith('en'));
    if (preferredVoice) {
      utterance.voice = preferredVoice;
    }

    window.speechSynthesis.speak(utterance);
  }

  public processCommand(rawCommand: string) {
    const cmd = rawCommand.toLowerCase();

    // 1. WORKOUTS & EXERCISES
    if (cmd.includes('workout') || cmd.includes('exercise') || cmd.includes('hologram') || cmd.includes('trainer') || cmd.includes('gym')) {
      this.speak('Navigating to Dynamic Workout & Video Guide Engine.');
      this.handlers.onNavigate?.('workout');
    }
    // 2. DIET & METABOLISM
    else if (cmd.includes('diet') || cmd.includes('food') || cmd.includes('meal') || cmd.includes('metabolism') || cmd.includes('recipe') || cmd.includes('khana')) {
      this.speak('Opening your AI Metabolic Diet and YouTube Recipe Engine.');
      this.handlers.onNavigate?.('diet');
    }
    // 3. WATER TRACKING
    else if (cmd.includes('water') || cmd.includes('drink') || cmd.includes('hydrate') || cmd.includes('pani')) {
      this.speak('Logging 250 milliliters of water in your hydration bottle.');
      this.handlers.onLogWater?.();
      this.handlers.onNavigate?.('diet');
    }
    // 4. AVATARS & GEAR
    else if (cmd.includes('avatar') || cmd.includes('character') || cmd.includes('morph') || cmd.includes('gear') || cmd.includes('shop') || cmd.includes('visor')) {
      this.speak('Opening 3D Avatar Evolution and Cybernetic Gear Studio.');
      this.handlers.onNavigate?.('avatar');
    }
    // 5. MUSIC PLAYER
    else if (cmd.includes('music') || cmd.includes('song') || cmd.includes('spotify') || cmd.includes('playlist') || cmd.includes('gaana') || cmd.includes('audio')) {
      this.speak('Opening Spotify-inspired Audio Player.');
      this.handlers.onNavigate?.('music');
    }
    // 6. ANALYTICS & TELEMETRY
    else if (cmd.includes('analytic') || cmd.includes('progress') || cmd.includes('chart') || cmd.includes('graph') || cmd.includes('stat') || cmd.includes('telemetry')) {
      this.speak('Opening 3D Quantum Analytics and Progress Telemetry.');
      this.handlers.onNavigate?.('analytics');
    }
    // 7. REWARDS & LEVEL UP
    else if (cmd.includes('reward') || cmd.includes('xp') || cmd.includes('coin') || cmd.includes('badge') || cmd.includes('level')) {
      this.speak('Opening FitVerse Rewards and Level Up Stage.');
      this.handlers.onNavigate?.('rewards');
    }
    // 8. SETTINGS & THEME
    else if (cmd.includes('setting') || cmd.includes('config') || cmd.includes('preference') || cmd.includes('theme') || cmd.includes('dark mode') || cmd.includes('light mode')) {
      this.speak('Opening System Configuration & Preferences.');
      this.handlers.onNavigate?.('settings');
    }
    // 9. DASHBOARD / HOME
    else if (cmd.includes('home') || cmd.includes('dashboard') || cmd.includes('overview') || cmd.includes('main')) {
      this.speak('Returning to main Neural Dashboard.');
      this.handlers.onNavigate?.('dashboard');
    }
    // 10. HEALTH ANALYSIS COMMAND
    else if (cmd.includes('analyze') || cmd.includes('health report') || cmd.includes('report')) {
      this.speak('Executing full metabolic telemetry analysis. Check your 3D Analytics tab.');
      this.handlers.onAnalyzeHealth?.();
      this.handlers.onNavigate?.('analytics');
    }
    // 11. HYPE / MOTIVATION COMMAND
    else if (cmd.includes('hype') || cmd.includes('motivate') || cmd.includes('iron man') || cmd.includes('jarvis')) {
      this.speak('Ascend beyond limits, Fighter! Every rep builds your neural potential. Stay disciplined!');
      this.handlers.onHypeTalk?.();
    }
    // FALLBACK
    else {
      this.speak(`Voice command processed: ${rawCommand}`);
    }

    this.handlers.onFeedback?.(`Voice Command Executed: "${rawCommand}"`);
  }

  public startListening() {
    if (this.recognition && !this.isListening) {
      try {
        this.isListening = true;
        this.recognition.start();
        this.speak('J.A.R.V.I.S Voice Control active. Command me anytime.');
        this.handlers.onFeedback?.('🎙️ Voice Assistant Active — Listening...');
      } catch (err) {
        console.warn('Recognition start notice:', err);
      }
    }
  }

  public stopListening() {
    if (this.recognition && this.isListening) {
      try {
        this.isListening = false;
        this.recognition.stop();
        this.speak('Voice assistant standby mode.');
        this.handlers.onFeedback?.('🔇 Voice Assistant Standby');
      } catch (err) {
        console.warn('Recognition stop notice:', err);
      }
    }
  }
}
