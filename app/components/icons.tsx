export function ThemeIcon({ size = 24, theme }) {
  if (theme === "light") {
    return (
      <svg
        width={size}
        height={size}
        viewBox={`0 0 ${size} ${size}`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M18.25 15.0314C17.7575 15.1436 17.2459 15.2027 16.7209 15.2027C12.8082 15.2027 9.63607 11.9185 9.63607 7.86709C9.63607 6.75253 9.87614 5.69603 10.3057 4.75C7.12795 5.47387 4.75 8.40659 4.75 11.9143C4.75 15.9657 7.9221 19.25 11.8348 19.25C14.6711 19.25 17.1182 17.5242 18.25 15.0314Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  } else {
    return (
      <svg
        width={size}
        height={size}
        viewBox={`0 0 ${size} ${size}`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M15.25 12C15.25 13.7949 13.7949 15.25 12 15.25C10.2051 15.25 8.75 13.7949 8.75 12C8.75 10.2051 10.2051 8.75 12 8.75C13.7949 8.75 15.25 10.2051 15.25 12Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M12 2.75V4.25"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M17.2501 6.75L16.0659 7.93417"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M21.25 12.0001L19.75 12.0001"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M17.2501 17.2501L16.0659 16.066"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M12 19.75V21.25"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M7.93414 16.0659L6.75 17.25"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M4.25 12.0001L2.75 12.0001"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M7.93402 7.93423L6.74988 6.75003"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }
}
export function GitHubIcon({ size = 24, className = "" }) {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
    </svg>
  );
}

export function CloseIcon({ size = 18, className = "" }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      className={className}
    >
      <line x1="18" y1="6" x2="6" y2="18"></line>
      <line x1="6" y1="6" x2="18" y2="18"></line>
    </svg>
  );
}

export function CursorIcon({ size = 24, className = "" }) {
  return (
    <svg
      height={size}
      width={size}
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <title>Cursor</title>
      <path
        d="M11.925 24l10.425-6-10.425-6L1.5 18l10.425 6z"
        fill="url(#lobe-icons-cursorundefined-fill-0)"
      />
      <path
        d="M22.35 18V6L11.925 0v12l10.425 6z"
        fill="url(#lobe-icons-cursorundefined-fill-1)"
      />
      <path
        d="M11.925 0L1.5 6v12l10.425-6V0z"
        fill="url(#lobe-icons-cursorundefined-fill-2)"
      />
      <path d="M22.35 6L11.925 24V12L22.35 6z" fill="#555" />
      <path d="M22.35 6l-10.425 6L1.5 6h20.85z" fill="#000" />
      <defs>
        <linearGradient
          gradientUnits="userSpaceOnUse"
          id="lobe-icons-cursorundefined-fill-0"
          x1="11.925"
          x2="11.925"
          y1="12"
          y2="24"
        >
          <stop offset=".16" stopColor="#000" stopOpacity=".39" />
          <stop offset=".658" stopColor="#000" stopOpacity=".8" />
        </linearGradient>
        <linearGradient
          gradientUnits="userSpaceOnUse"
          id="lobe-icons-cursorundefined-fill-1"
          x1="22.35"
          x2="11.925"
          y1="6.037"
          y2="12.15"
        >
          <stop offset=".182" stopColor="#000" stopOpacity=".31" />
          <stop offset=".715" stopColor="#000" stopOpacity="0" />
        </linearGradient>
        <linearGradient
          gradientUnits="userSpaceOnUse"
          id="lobe-icons-cursorundefined-fill-2"
          x1="11.925"
          x2="1.5"
          y1="0"
          y2="18"
        >
          <stop stopColor="#000" stopOpacity=".6" />
          <stop offset=".667" stopColor="#000" stopOpacity=".22" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export function AddToCursor({ size = 32, name, url, currentTheme = "light" }) {
  const configJson = {
    type: "streamable-http",
    url: url,
  };

  const encodedConfig = btoa(JSON.stringify(configJson));
  return (
    <a
      href={`https://cursor.com/install-mcp?name=${name}&config=${encodedConfig}`}
      target="_blank"
      rel="noopener noreferrer"
    >
      <img
        src={`https://cursor.com/deeplink/mcp-install-${
          currentTheme === "light" ? "dark" : "light"
        }.svg`}
        alt={`Add ${name} MCP server to Cursor`}
        height={size}
      />
    </a>
  );
}

export function VSCodeIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      width="24px"
      height="24px"
    >
      <linearGradient
        id="HjBUFHyNtcsDcBgnZBZ2Sa"
        x1="37.8"
        x2="37.8"
        y1="43.37"
        y2="7.42"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0" stopColor="#29b6f6" />
        <stop offset="1" stopColor="#13b2f6" />
      </linearGradient>
      <path
        fill="url(#HjBUFHyNtcsDcBgnZBZ2Sa)"
        d="M34.176,4.249c0.188,0.092,5.688,2.716,8.374,3.998C43.437,8.67,44,9.564,44,10.546v26.86 c0,0.981-0.559,1.874-1.443,2.299c-2.548,1.228-7.611,3.666-7.948,3.826C34.361,43.649,33.709,44,33.181,44 c-0.678,0-1.133-0.316-1.58-0.73L34,35.711V5.715l-2.254-1.135C32.228,4.109,32.896,4,33.291,4C33.653,4,33.948,4.138,34.176,4.249z"
      />
      <linearGradient
        id="HjBUFHyNtcsDcBgnZBZ2Sb"
        x1="6.085"
        x2="34.793"
        y1="34.801"
        y2="7.173"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset=".115" stopColor="#0076bb" />
        <stop offset=".257" stopColor="#0069b0" />
        <stop offset=".28" stopColor="#0069b0" />
        <stop offset=".424" stopColor="#0069b0" />
        <stop offset=".491" stopColor="#0072b7" />
        <stop offset=".577" stopColor="#0076bb" />
        <stop offset=".795" stopColor="#0076bb" />
        <stop offset="1" stopColor="#006eb9" />
      </linearGradient>
      <path
        fill="url(#HjBUFHyNtcsDcBgnZBZ2Sb)"
        d="M9,33.896l25-19.023V5.83c0-1.299-1.662-1.808-2.337-1.184 C31.008,5.25,4.658,29.239,4.658,29.239c-0.9,0.83-0.849,2.267,0.107,3.032c0,0,1.324,1.232,1.803,1.574 C7.304,34.37,8.271,34.43,9,33.896z"
      />
      <path
        fill="#0288d1"
        d="M9,14.104l25,19.054v8.771c0,1.198-1.42,2.193-2.399,1.341L4.658,18.761 c-0.9-0.83-0.849-2.267,0.107-3.032c0,0,1.324-1.232,1.803-1.574C7.304,13.63,8.271,13.57,9,14.104z"
      />
    </svg>
  );
}

export function AddToVSCode({ size = 32, name, url }) {
  const jsonConfig = {
    name: name,
    type: "http",
    url: url,
  };
  const encodedConfig = encodeURIComponent(JSON.stringify(jsonConfig));

  return (
    <a
      href={`vscode:mcp/install?${encodedConfig}`}
      target="_blank"
      rel="noopener noreferrer"
    >
      <img
        src="https://img.shields.io/badge/Visual%20Studio%20Code-0078d7.svg?style=for-the-badge&logo=visual-studio-code&logoColor=white"
        alt={`Add ${name} MCP server to VS Code`}
        height={size}
      />
    </a>
  );
}

export function ClaudeIcon({ size = 24, className = "" }) {
  return (
    <svg
      height={size}
      width={size}
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <title>Claude</title>
      <path
        d="M4.709 15.955l4.72-2.647.08-.23-.08-.128H9.2l-.79-.048-2.698-.073-2.339-.097-2.266-.122-.571-.121L0 11.784l.055-.352.48-.321.686.06 1.52.103 2.278.158 1.652.097 2.449.255h.389l.055-.157-.134-.098-.103-.097-2.358-1.596-2.552-1.688-1.336-.972-.724-.491-.364-.462-.158-1.008.656-.722.881.06.225.061.893.686 1.908 1.476 2.491 1.833.365.304.145-.103.019-.073-.164-.274-1.355-2.446-1.446-2.49-.644-1.032-.17-.619a2.97 2.97 0 01-.104-.729L6.283.134 6.696 0l.996.134.42.364.62 1.414 1.002 2.229 1.555 3.03.456.898.243.832.091.255h.158V9.01l.128-1.706.237-2.095.23-2.695.08-.76.376-.91.747-.492.584.28.48.685-.067.444-.286 1.851-.559 2.903-.364 1.942h.212l.243-.242.985-1.306 1.652-2.064.73-.82.85-.904.547-.431h1.033l.76 1.129-.34 1.166-1.064 1.347-.881 1.142-1.264 1.7-.79 1.36.073.11.188-.02 2.856-.606 1.543-.28 1.841-.315.833.388.091.395-.328.807-1.969.486-2.309.462-3.439.813-.042.03.049.061 1.549.146.662.036h1.622l3.02.225.79.522.474.638-.079.485-1.215.62-1.64-.389-3.829-.91-1.312-.329h-.182v.11l1.093 1.068 2.006 1.81 2.509 2.33.127.578-.322.455-.34-.049-2.205-1.657-.851-.747-1.926-1.62h-.128v.17l.444.649 2.345 3.521.122 1.08-.17.353-.608.213-.668-.122-1.374-1.925-1.415-2.167-1.143-1.943-.14.08-.674 7.254-.316.37-.729.28-.607-.461-.322-.747.322-1.476.389-1.924.315-1.53.286-1.9.17-.632-.012-.042-.14.018-1.434 1.967-2.18 2.945-1.726 1.845-.414.164-.717-.37.067-.662.401-.589 2.388-3.036 1.44-1.882.93-1.086-.006-.158h-.055L4.132 18.56l-1.13.146-.487-.456.061-.746.231-.243 1.908-1.312-.006.006z"
        fill="#D97757"
        fillRule="nonzero"
      />
    </svg>
  );
}
