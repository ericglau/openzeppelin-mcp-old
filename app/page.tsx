"use client";

import React, { useState, useEffect } from "react";
import "@/styles/landing.css";
import Image from "next/image";
import {
  GitHubIcon,
  CloseIcon,
  CursorIcon,
  VSCodeIcon,
  AddToCursor,
  ClaudeIcon,
  AddToVSCode,
} from "./components/icons";

function ConfigModal({ isOpen, onClose, mcp }) {
  if (!isOpen || !mcp) return null;

  const configs = {
    cursor: {
      filename: "~/.cursor/mcp.json",
      code: `{
  "mcpServers": {
    "openZeppelin${mcp.name.replace(/ /g, "")}": {
        "type": "streamable-http",
        "url": "${mcp.url}"
    }
  }
}`,
    },
    vscode: {
      filename: ".vscode/mcp.json",
      code: `{
  "servers": {
    "openZeppelin${mcp.name.replace(/ /g, "")}": {
        "type": "http",
        "url": "${mcp.url}"
    }
  }
}`,
    },
    claudeCode: {
      code: `claude mcp add -t http ${mcp.name.replace(/ /g, "")} ${mcp.url}`,
    },
    claudeDesktop: {
      filename: "claude_desktop_config.json",
      code: `{
  "mcpServers": {
    "openZeppelin${mcp.name.replace(/ /g, "")}": {
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
    "openZeppelin${mcp.name.replace(/ /g, "")}": {
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
          <h2>{mcp.name} MCP Setup Instructions</h2>
          <button className="modal-close" onClick={onClose}>
            <CloseIcon />
          </button>
        </div>
        <div className="modal-body">
          {/* Cursor Config */}
          <div className="config-section">
            <div className="section-header">
              <CursorIcon />
              <h2>Cursor</h2>
            </div>
            <div className="config-content">
              <p>For quick setup, use the button below:</p>
              <div className="cursor-quick-install">
                <AddToCursor
                  name={`openZeppelin${mcp.name.replace(/ /g, "")}`}
                  url={mcp.url}
                />
              </div>
              <p>For manual setup:</p>
              <ol className="installation-steps">
                <li>
                  <strong>Cmd + Shift + J</strong> to open Cursor Settings
                </li>
                <li>
                  Select <strong>Tools & Integrations</strong>
                </li>
                <li>
                  Click <strong>New MCP Server</strong>
                </li>
                <li>
                  Add to your <code>mcpServers</code> config
                </li>
              </ol>
            </div>
            <div className="code-window">
              <div className="code-header">
                <div className="code-dots">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
                <div className="code-filename">{configs.cursor.filename}</div>
              </div>
              <pre className="code-content">
                <code>{configs.cursor.code}</code>
              </pre>
            </div>
          </div>

          {/* VSCode Config */}
          <div className="config-section">
            <div className="section-header">
              <VSCodeIcon />
              <h2>VS Code</h2>
            </div>
            <div className="config-content">
              <p>For quick setup, use the button below:</p>
              <div className="cursor-quick-install">
                <AddToVSCode
                  name={`openZeppelin${mcp.name.replace(/ /g, "")}`}
                  url={mcp.url}
                />
              </div>
              <p>For manual setup:</p>
              <ol className="installation-steps">
                <li>
                  Follow VS Code documentation to{" "}
                  <strong>
                    <a
                      href="https://code.visualstudio.com/docs/copilot/chat/mcp-servers#_add-an-mcp-server-to-your-workspace"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Add an MCP server to your workspace{" "}
                    </a>
                  </strong>
                  using the given configuration
                </li>
                <li>
                  Start the MCP server according to{" "}
                  <strong>
                    <a
                      href="https://code.visualstudio.com/docs/copilot/chat/mcp-servers#_manage-mcp-servers"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Manage MCP servers
                    </a>
                  </strong>
                </li>
              </ol>
            </div>
            <div className="code-window">
              <div className="code-header">
                <div className="code-dots">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
                <div className="code-filename">{configs.vscode.filename}</div>
              </div>
              <pre className="code-content">
                <code>{configs.vscode.code}</code>
              </pre>
            </div>
          </div>

          {/* Claude Desktop Config */}
          <div className="config-section">
            <div className="section-header">
              <ClaudeIcon />
              <h2>Claude Desktop</h2>
            </div>
            <div className="config-content">
              <p>For manual setup:</p>
              <ol className="installation-steps">
                <li>
                  Go to <strong>Settings</strong>
                </li>
                <li>
                  Select <strong>Developer</strong>
                </li>
                <li>
                  Click <strong>Edit Config</strong>
                </li>
                <li>
                  Add to your <code>mcpServers</code> config
                </li>
              </ol>
            </div>
            <div className="code-window">
              <div className="code-header">
                <div className="code-dots">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
                <div className="code-filename">
                  {configs.claudeDesktop.filename}
                </div>
              </div>
              <pre className="code-content">
                <code>{configs.claudeDesktop.code}</code>
              </pre>
            </div>
          </div>

          {/* Claude Code Config */}
          <div className="config-section">
            <div className="section-header">
              <ClaudeIcon />
              <h2>Claude Code</h2>
            </div>
            <div className="config-content">
              <p>
                To add the MCP Server to your claude code run the following
                command:
              </p>
              <div className="code-window">
                <div className="code-header">
                  <div className="code-dots">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                  <div className="code-filename"></div>
                </div>
                <pre className="code-content">
                  <code>{configs.claudeCode.code}</code>
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
      <GitHubIcon />
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

  const BASE_URL =
    process.env.NODE_ENV === "development"
      ? "http://localhost:3000/"
      : "https://mcp.openzeppelin.com/";

  const AVAILABLE_MCPS = [
    {
      name: "Solidity Contracts",
      description:
        "Generate Solidity secure smart contracts based on OpenZeppelin templates",
      url: `${BASE_URL}contracts/solidity/mcp`,
    },
    {
      name: "Cairo Contracts",
      description:
        "Generate Cairo secure smart contracts based on OpenZeppelin templates",
      url: `${BASE_URL}contracts/cairo/mcp`,
    },
    {
      name: "Stellar Contracts",
      description:
        "Generate Stellar secure smart contracts based on OpenZeppelin templates",
      url: `${BASE_URL}contracts/stellar/mcp`,
    },
    {
      name: "Stylus Contracts",
      description:
        "Generate Stylus secure smart contracts based on OpenZeppelin templates",
      url: `${BASE_URL}contracts/stylus/mcp`,
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
            Model Context Protocol Servers Repository for OpenZeppelin Products
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
                      View Setup Instructions
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
