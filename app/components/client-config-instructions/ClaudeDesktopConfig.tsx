export function ClaudeDesktopConfig({ name, url }) {
  const config = {
    filename: "claude_desktop_config.json",
    code: `{
  "mcpServers": {
    "OpenZeppelin${name.replace(/ /g, "")}": {
      "command": "npx",
      "args": ["mcp-remote", "${url}"]
    }
  }
}`,
  };

  return (
    <div className="config-section">
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
          <div className="code-filename">{config.filename}</div>
        </div>
        <pre className="code-content">
          <code>{config.code}</code>
        </pre>
      </div>
    </div>
  );
}
