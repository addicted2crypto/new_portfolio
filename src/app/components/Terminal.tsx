"use client";
import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTerminal } from 'react-icons/fa';
import { IoClose } from 'react-icons/io5';
import toast from 'react-hot-toast';

const COMMANDS: Record<string, { action: string; description: string }> = {
  home: { action: 'navigate', description: 'Navigate to Home section' },
  about: { action: 'navigate', description: 'Navigate to About section' },
  projects: { action: 'navigate', description: 'Navigate to Projects section' },
  skills: { action: 'navigate', description: 'Navigate to Skills section' },
  experience: { action: 'navigate', description: 'Navigate to Experience section' },
  certifications: { action: 'navigate', description: 'Navigate to Certifications section' },
  contact: { action: 'navigate', description: 'Navigate to Contact section' },
  resume: { action: 'link', description: 'Open resume in new tab' },
  email: { action: 'copy', description: 'Copy email to clipboard' },
  phone: { action: 'copy', description: 'Copy phone to clipboard' },
  linkedin: { action: 'link', description: 'Open LinkedIn profile' },
  github: { action: 'link', description: 'Open GitHub profile' },
  help: { action: 'help', description: 'Show available commands' },
  clear: { action: 'clear', description: 'Clear terminal' },
  whoami: { action: 'easter', description: '' },
  ls: { action: 'easter', description: '' },
  'sudo hire me': { action: 'easter', description: 'You win, I will outwork everyone!' },
};

const CONTACT_INFO = {
  email: 'williampuyallup1010@gmail.com',
  phone: '(206) 743-8855',
  linkedin: 'https://www.linkedin.com/in/william360/',
  github: 'https://github.com/addicted2crypto/',
};

export default function Terminal() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [history, setHistory] = useState<{ type: 'input' | 'output'; text: string }[]>([
    { type: 'output', text: 'Welcome to William\'s Portfolio Terminal v1.0.0' },
    { type: 'output', text: 'Type "help" for available commands.' },
  ]);
  const [commandHistory, setCommandHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const inputRef = useRef<HTMLInputElement>(null);
  const terminalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [history]);

  const addOutput = (text: string) => {
    setHistory(prev => [...prev, { type: 'output', text }]);
  };

  const executeCommand = (cmd: string) => {
    const trimmedCmd = cmd.trim().toLowerCase();

    setHistory(prev => [...prev, { type: 'input', text: `$ ${cmd}` }]);
    setCommandHistory(prev => [...prev, cmd]);
    setHistoryIndex(-1);

    if (!trimmedCmd) return;

    // Check for exact command match first
    const command = COMMANDS[trimmedCmd];

    if (command) {
      switch (command.action) {
        case 'navigate':
          const sectionId = trimmedCmd === 'home' ? 'home' : trimmedCmd;
          const element = document.getElementById(sectionId);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            addOutput(`Navigating to ${trimmedCmd}...`);
            setTimeout(() => setIsOpen(false), 500);
          } else {
            addOutput(`Section "${trimmedCmd}" not found.`);
          }
          break;

        case 'link':
          if (trimmedCmd === 'resume') {
            window.open('/resume', '_blank');
            addOutput('Opening resume...');
          } else if (trimmedCmd === 'linkedin') {
            window.open(CONTACT_INFO.linkedin, '_blank');
            addOutput('Opening LinkedIn profile...');
          } else if (trimmedCmd === 'github') {
            window.open(CONTACT_INFO.github, '_blank');
            addOutput('Opening GitHub profile...');
          }
          break;

        case 'copy':
          if (trimmedCmd === 'email') {
            navigator.clipboard.writeText(CONTACT_INFO.email);
            addOutput(`Email copied: ${CONTACT_INFO.email}`);
            toast.success('Email copied to clipboard!');
          } else if (trimmedCmd === 'phone') {
            navigator.clipboard.writeText(CONTACT_INFO.phone);
            addOutput(`Phone copied: ${CONTACT_INFO.phone}`);
            toast.success('Phone number copied to clipboard!');
          }
          break;

        case 'help':
          addOutput('');
          addOutput('╔══════════════════════════════════════════════╗');
          addOutput('║          AVAILABLE COMMANDS                  ║');
          addOutput('╠══════════════════════════════════════════════╣');
          addOutput('║  NAVIGATION                                  ║');
          addOutput('║    home        - Go to Home section          ║');
          addOutput('║    about       - Go to About section         ║');
          addOutput('║    projects    - Go to Projects section      ║');
          addOutput('║    skills      - Go to Skills section        ║');
          addOutput('║    experience  - Go to Experience section    ║');
          addOutput('║    certifications - Go to Certs section      ║');
          addOutput('║    contact     - Go to Contact section       ║');
          addOutput('╠══════════════════════════════════════════════╣');
          addOutput('║  CONTACT INFO                                ║');
          addOutput('║    email       - Copy email to clipboard     ║');
          addOutput('║    phone       - Copy phone to clipboard     ║');
          addOutput('║    linkedin    - Open LinkedIn profile       ║');
          addOutput('║    github      - Open GitHub profile         ║');
          addOutput('║    resume      - Open resume in new tab      ║');
          addOutput('╠══════════════════════════════════════════════╣');
          addOutput('║  UTILITIES                                   ║');
          addOutput('║    help        - Show this help menu         ║');
          addOutput('║    clear       - Clear terminal              ║');
          addOutput('╚══════════════════════════════════════════════╝');
          break;

        case 'clear':
          setHistory([]);
          break;

        case 'easter':
          if (trimmedCmd === 'whoami') {
            addOutput('You are a recruiter/developer viewing William\'s portfolio.');
            addOutput('William is a Full-Stack Software Engineer specializing in AI & Web3.');
          } else if (trimmedCmd === 'ls') {
            addOutput('drwxr-xr-x  skills/');
            addOutput('drwxr-xr-x  projects/');
            addOutput('drwxr-xr-x  experience/');
            addOutput('-rw-r--r--  resume.pdf');
            addOutput('-rw-r--r--  security+.cert');
            addOutput('-rw-r--r--  contact.info');
          } else if (trimmedCmd === 'sudo hire me') {
            addOutput('');
            addOutput('🚀 HIRING PROTOCOL INITIATED...');
            addOutput('');
            addOutput('✓ Skills verified: Full-Stack, AI, Web3, Security+');
            addOutput('✓ Experience confirmed: DoD Contractor, SaaS Founder');
            addOutput('✓ Clearance: Ready for sensitive projects');
            addOutput('');
            addOutput('📧 Contact: addicted2crypto@protonmail.com');
            addOutput('📱 Phone: (206) 743-8855');
            addOutput('');
            addOutput('Permission granted. Let\'s build something amazing! 🫡');
          }
          break;
      }
    } else {
      addOutput(`Command not found: ${trimmedCmd}`);
      addOutput('Type "help" for available commands.');
    }

    setInput('');
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      executeCommand(input);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (commandHistory.length > 0) {
        const newIndex = historyIndex < commandHistory.length - 1 ? historyIndex + 1 : historyIndex;
        setHistoryIndex(newIndex);
        setInput(commandHistory[commandHistory.length - 1 - newIndex] || '');
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (historyIndex > 0) {
        const newIndex = historyIndex - 1;
        setHistoryIndex(newIndex);
        setInput(commandHistory[commandHistory.length - 1 - newIndex] || '');
      } else {
        setHistoryIndex(-1);
        setInput('');
      }
    } else if (e.key === 'Escape') {
      setIsOpen(false);
    }
  };

  return (
    <>
      {/* Floating Terminal Button */}
      <motion.button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-50 p-4 bg-gray-900 text-green-400 rounded-full shadow-lg
                   hover:bg-gray-800 hover:scale-110 transition-all duration-300
                   border border-green-500/30 hover:border-green-400/60
                   dark:bg-gray-800 dark:hover:bg-gray-700"
        whileHover={{ rotate: [0, -10, 10, 0] }}
        whileTap={{ scale: 0.95 }}
        aria-label="Open Terminal"
      >
        <FaTerminal size={24} />
      </motion.button>

      {/* Terminal Modal */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
            />

            {/* Terminal Window */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50
                         w-[90vw] max-w-2xl h-[70vh] max-h-[500px]
                         bg-gray-900 rounded-lg shadow-2xl overflow-hidden
                         border border-gray-700"
            >
              {/* Terminal Header */}
              <div className="flex items-center justify-between px-4 py-2 bg-gray-800 border-b border-gray-700">
                <div className="flex items-center gap-2">
                  <div className="flex gap-2">
                    <button
                      onClick={() => setIsOpen(false)}
                      className="w-3 h-3 rounded-full bg-red-500 hover:bg-red-400 transition-colors"
                    />
                    <div className="w-3 h-3 rounded-full bg-yellow-500" />
                    <div className="w-3 h-3 rounded-full bg-green-500" />
                  </div>
                  <span className="ml-4 text-gray-400 text-sm font-mono">william@portfolio:~</span>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <IoClose size={20} />
                </button>
              </div>

              {/* Terminal Content */}
              <div
                ref={terminalRef}
                className="h-[calc(100%-80px)] overflow-y-auto p-4 font-mono text-sm"
                onClick={() => inputRef.current?.focus()}
              >
                {history.map((line, i) => (
                  <div
                    key={i}
                    className={`${
                      line.type === 'input' ? 'text-green-400' : 'text-gray-300'
                    } whitespace-pre-wrap`}
                  >
                    {line.text}
                  </div>
                ))}

                {/* Input Line */}
                <div className="flex items-center text-green-400">
                  <span className="mr-2">$</span>
                  <input
                    ref={inputRef}
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={handleKeyDown}
                    className="flex-1 bg-transparent outline-none text-green-400 caret-green-400"
                    autoComplete="off"
                    spellCheck={false}
                  />
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
