"use client";

import React, { useState, useEffect } from "react";
import "@/styles/landing.css";
import Image from "next/image";

function ConfigModal({ isOpen, onClose, mcp }) {
  const [activeTab, setActiveTab] = useState("claude-desktop");

  if (!isOpen || !mcp) return null;

  const configs = {
    "claude-desktop": {
      filename: "claude_desktop_config.json",
      code: `{
  "mcpServers": {
    "openzeppelinMcp": {
      "command": "npx",
      "args": ["mcp-remote", "${mcp.url}"]
    }
  }
}`,
    },
    cursor: {
      filename: "cursor_config.json",
      code: `{
  "mcpServers": {
    "openzeppelinMcp": {
      "command": "npx",
      "args": ["mcp-remote", "${mcp.url}"]
    }
  }
}`,
    },
    windsurf: {
      filename: "windsurf_config.json",
      code: `{
  "mcpServers": {
    "openzeppelinMcp": {
      "command": "npx",
      "args": ["mcp-remote", "${mcp.url}"]
    }
  }
}`,
    },
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h2>{mcp.name} Configuration</h2>
          <button className="modal-close" onClick={onClose}>
            ×
          </button>
        </div>

        <div className="modal-body">
          <div className="config-section">
            <h3>Client Configuration</h3>
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
                      className={`tab-button ${
                        activeTab === "claude-desktop" ? "active" : ""
                      }`}
                      onClick={() => setActiveTab("claude-desktop")}
                    >
                      Claude Desktop
                    </button>
                    <button
                      className={`tab-button ${
                        activeTab === "cursor" ? "active" : ""
                      }`}
                      onClick={() => setActiveTab("cursor")}
                    >
                      Cursor
                    </button>
                    <button
                      className={`tab-button ${
                        activeTab === "windsurf" ? "active" : ""
                      }`}
                      onClick={() => setActiveTab("windsurf")}
                    >
                      Windsurf
                    </button>
                  </div>
                  <div className="code-filename">
                    {configs[activeTab].filename}
                  </div>
                </div>
                <pre className="code-content">
                  <code>{configs[activeTab].code}</code>
                </pre>
              </div>
            </div>
          </div>

          <div className="config-section">
            <h3>Claude Code Configuration</h3>
            <p
              style={{
                fontSize: "0.9rem",
                color: "var(--text-muted)",
                marginBottom: "16px",
                lineHeight: "1.5",
              }}
            ></p>
            <div className="config-tabs">
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
                  <code>
                    claude mcp add -t http openzeppelin-
                    {mcp.name.toLowerCase().replace(" ", "-")} {mcp.url}
                  </code>
                </pre>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ThemeToggle({ onThemeChange }) {
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setTheme(savedTheme);
      applyTheme(savedTheme);
      onThemeChange(savedTheme);
    } else {
      // Fallback to system default on first render
      const systemPrefersDark = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;
      const systemTheme = systemPrefersDark ? "dark" : "light";
      setTheme(systemTheme);
      applyTheme(systemTheme);
      onThemeChange(systemTheme);
    }
  }, [onThemeChange]);

  const applyTheme = (newTheme) => {
    const root = document.documentElement;
    root.setAttribute("data-theme", newTheme);
  };

  const toggleTheme = () => {
    const nextTheme = theme === "dark" ? "light" : "dark";
    setTheme(nextTheme);
    localStorage.setItem("theme", nextTheme);
    applyTheme(nextTheme);
    onThemeChange(nextTheme);
  };

  const getThemeIcon = () => {
    return theme === "light" ? "☀️" : "🌙";
  };

  return (
    <button
      className="theme-toggle"
      onClick={toggleTheme}
      title={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
    >
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
        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
      </svg>
    </a>
  );
}

export default function HomePage() {
  const [currentTheme, setCurrentTheme] = useState("dark");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedMcp, setSelectedMcp] = useState(null);

  const handleThemeChange = (theme) => {
    setCurrentTheme(theme);
  };

  const getLogoSrc = () => {
    return currentTheme === "light"
      ? "/OZ-Logo-BlackBG.png"
      : "/OZ-Logo-WhiteBG.png";
  };

  const openModal = (mcp) => {
    setSelectedMcp(mcp);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedMcp(null);
  };

  const BASE_URL = "https://mcp.openzeppelin.com/";

  const AVAILABLE_MCPS = [
    {
      name: "Solidity Wizard",
      description:
        "Generate Solidity secure smart contracts based on OpenZeppelin templates",
      url: `${BASE_URL}wizard/solidity/mcp`,
    },
    {
      name: "Cairo Wizard",
      description:
        "Generate Cairo secure smart contracts based on OpenZeppelin templates",
      url: `${BASE_URL}wizard/cairo/mcp`,
    },
    {
      name: "Stellar Wizard",
      description:
        "Generate Stellar secure smart contracts based on OpenZeppelin templates",
      url: `${BASE_URL}wizard/stellar/mcp`,
    },
    {
      name: "Stylus Wizard",
      description:
        "Generate Stylus secure smart contracts based on OpenZeppelin templates",
      url: `${BASE_URL}wizard/stylus/mcp`,
    },
  ];

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
          <h1 className="minimal-title">OpenZeppelin MCP Servers</h1>
          <p className="minimal-subtitle">
            Model Context Protocol Servers Repository for OpenZeppelin products
          </p>

          <div className="features-section">
            <h2 className="code-title">Available MCP Servers</h2>
            <div className="feature-item">
              <div className="mcp-grid">
                {AVAILABLE_MCPS.map((mcp, index) => (
                  <div key={index} className="mcp-card">
                    <div className="mcp-content">
                      <h3 className="mcp-name">{mcp.name}</h3>
                      <p className="mcp-description">{mcp.description}</p>
                    </div>
                    <button
                      className="mcp-config-button"
                      onClick={() => openModal(mcp)}
                    >
                      View Configuration
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <ConfigModal
        isOpen={isModalOpen}
        onClose={closeModal}
        mcp={selectedMcp}
      />
    </div>
  );
}
