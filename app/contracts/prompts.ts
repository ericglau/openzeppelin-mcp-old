const TITLE_TEMPLATE = `OpenZeppelin {{LANGUAGE}} Contracts MCP Server`;
const INSTRUCTIONS_TEMPLATE = `An MCP server for generating secure {{LANGUAGE}} smart contracts using OpenZeppelin's battle-tested libraries.
Output format: Returns complete {{LANGUAGE}} source code as plain text.
All generated code uses OpenZeppelin's latest stable releases and follows established security conventions.`;

export function getTitleText(language: string): string {
  return TITLE_TEMPLATE.replace(/\{\{LANGUAGE\}\}/g, language);
}
export function getInstructionsText(language: string): string {
  return INSTRUCTIONS_TEMPLATE.replace(/\{\{LANGUAGE\}\}/g, language);
}
