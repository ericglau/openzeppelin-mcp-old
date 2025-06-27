'use client';

import React, { useState, useEffect } from 'react';
import '@/styles/landing.css';
import Image from 'next/image'

function ConfigTabs() {
  const [activeTab, setActiveTab] = useState('claude-desktop');

  const configs = {
    'claude-desktop': {
      filename: 'claude_desktop_config.json',
      code: `{
  "mcpServers": {
    "openzeppelinMcp": {
      "command": "npx",
      "args": ["mcp-remote", "https://openzeppelin-mcp-server.vercel.app/mcp"]
    }
  }
}`
    },
    'cursor': {
      filename: 'cursor_config.json',
      code: `{
  "mcpServers": {
    "openzeppelinMcp": {
      "command": "npx",
      "args": ["mcp-remote", "https://openzeppelin-mcp-server.vercel.app/mcp"]
    }
  }
}`
    },
    'windsurf': {
      filename: 'windsurf_config.json',
      code: `{
  "mcpServers": {
    "openzeppelinMcp": {
      "command": "npx",
      "args": ["mcp-remote", "https://openzeppelin-mcp-server.vercel.app/mcp"]
    }
  }
}`
    }
  };

  return (
    <div className="config-tabs">
      <div className="code-window">
        <div className="code-header">
          <div className="code-dots">
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div className="tab-buttons">
            <button 
              className={`tab-button ${activeTab === 'claude-desktop' ? 'active' : ''}`}
              onClick={() => setActiveTab('claude-desktop')}
            >
              Claude Desktop
            </button>
            <button 
              className={`tab-button ${activeTab === 'cursor' ? 'active' : ''}`}
              onClick={() => setActiveTab('cursor')}
            >
              Cursor
            </button>
            <button 
              className={`tab-button ${activeTab === 'windsurf' ? 'active' : ''}`}
              onClick={() => setActiveTab('windsurf')}
            >
              Windsurf
            </button>
          </div>
          <div className="code-filename">{configs[activeTab].filename}</div>
        </div>
        <pre className="code-content">
          <code>{configs[activeTab].code}</code>
        </pre>
      </div>
    </div>
  );
}

function ThemeToggle({ onThemeChange }) {
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setTheme(savedTheme);
      applyTheme(savedTheme);
      onThemeChange(savedTheme);
    } else {
      // Fallback to system default on first render
      const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      const systemTheme = systemPrefersDark ? 'dark' : 'light';
      setTheme(systemTheme);
      applyTheme(systemTheme);
      onThemeChange(systemTheme);
    }
  }, [onThemeChange]);

  const applyTheme = (newTheme) => {
    const root = document.documentElement;
    root.setAttribute('data-theme', newTheme);
  };

  const toggleTheme = () => {
    const nextTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(nextTheme);
    localStorage.setItem('theme', nextTheme);
    applyTheme(nextTheme);
    onThemeChange(nextTheme);
  };

  const getThemeIcon = () => {
    return theme === 'light' ? '☀️' : '🌙';
  };

  return (
    <button className="theme-toggle" onClick={toggleTheme} title={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}>
      {getThemeIcon()}
    </button>
  );
}

function GitHubButton() {
  return (
    <a 
      href="https://github.com/OpenZeppelin/openzeppelin-mcp" 
      target="_blank" 
      rel="noopener noreferrer"
      className="github-button"
      title="View on GitHub"
    >
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
      </svg>
    </a>
  );
}

export default function HomePage() {
  const [currentTheme, setCurrentTheme] = useState('dark');

  const handleThemeChange = (theme) => {
    setCurrentTheme(theme);
  };

  const getLogoSrc = () => {
    return currentTheme === 'light' ? '/OZ-Logo-BlackBG.png' : '/OZ-Logo-WhiteBG.png';
  };

  return (
    <div className="page-container">
      <header className="page-header">
        <div className="header-content">
          <div className="header-left">
            <a 
              href="https://www.openzeppelin.com/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="logo-link"
            >
              <Image 
                src={getLogoSrc()}
                alt="OpenZeppelin Logo" 
                width={200} 
                height={36}
                className="header-logo"
              />
            </a>
          </div>
          <div className="header-right">
            <GitHubButton />
            <ThemeToggle onThemeChange={handleThemeChange} />
          </div>
        </div>
      </header>
      
      <div className="minimal-container">
        <div className="minimal-content">
          <h1 className="minimal-title">OpenZeppelin MCP Server</h1>
          <p className="minimal-subtitle">
            Model Context Protocol infrastructure for OpenZeppelin products
          </p>
          
          <div className="features-section">
            <h2 className="code-title">Available Functionalities</h2>
            <div className="feature-item">
              <ul className="feature-bullets">
                <li><strong>Solidity Contracts Wizard:</strong> Generate Solidity secure smart contracts based secure templates</li>
                <li>More funcitonalities on development...</li>
              </ul>
            </div>
          </div>
        
        <div className="code-section">
          <h2 className="code-title">Client Configuration</h2>
          <ConfigTabs />
        </div>

        <div className="code-section">
          <h2 className="code-title">Claude Code Configuration</h2>
          <p style={{fontSize: '0.9rem', color: 'var(--text-muted)', marginBottom: '16px', textAlign: 'center', lineHeight: '1.5'}}>
            To unleash the true power of Claude Code, use it with <code>--dangerously-skip-permissions</code> always sandboxed in a Docker container for security. The Claude team provides an easy-to-use <a href="https://github.com/anthropics/claude-code/tree/main/.devcontainer" target="_blank" rel="noopener noreferrer" style={{color: 'var(--text-primary)', textDecoration: 'underline'}}>devcontainer configuration in their repo</a>.
          </p>
          <div className="code-window">
            <div className="code-header">
              <div className="code-dots">
                <span></span>
                <span></span>
                <span></span>
              </div>
              <div className="code-filename">Terminal</div>
            </div>
            <pre className="code-content">
              <code>claude mcp add -t http openzeppelin-mcp https://openzeppelin-mcp-server.vercel.app/mcp</code>
            </pre>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}
