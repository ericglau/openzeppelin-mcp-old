import { CloseIcon } from "@/components/icons";
import { CursorConfig } from "@/components/client-config-instructions/CursorConfig";
import { VSCodeConfig } from "@/components/client-config-instructions/VSCodeConfig";
import { ClaudeDesktopConfig } from "@/components/client-config-instructions/ClaudeDesktopConfig";
import { ClaudeCodeConfig } from "@/components/client-config-instructions/ClaudeCodeConfig";

export function ConfigModal({ isOpen, onClose, mcp, currentTheme }) {
  if (!isOpen || !mcp) return null;
  // TODO Delete
  const configs = {
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
          <CursorConfig
            name={mcp.name}
            url={mcp.url}
            currentTheme={currentTheme}
          />
          {/* VSCode Config */}
          <VSCodeConfig name={mcp.name} url={mcp.url} />
          {/* Claude Desktop Config */}
          <ClaudeDesktopConfig name={mcp.name} url={mcp.url} />
          {/* Claude Code Config */}
          <ClaudeCodeConfig name={mcp.name} url={mcp.url} />
        </div>
      </div>
    </div>
  );
}
