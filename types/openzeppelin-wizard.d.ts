declare module '@openzeppelin/wizard' {
  export interface AccountOptions {
    name: string;
    signatureValidation?: false | "ERC1271" | "ERC7739";
    ERC721Holder?: boolean;
    ERC1155Holder?: boolean;
    signer?: any;
    batchedExecution?: boolean;
    ERC7579Modules?: false | "AccountERC7579" | "AccountERC7579Hooked";
    access?: any;
    upgradeable?: any;
    info?: any;
  }

  export interface RoyaltyInfoOptions {
    enabled?: boolean;
    defaultRoyaltyFraction?: string;
    feeDenominator?: string;
  }
  
  // Re-export existing types
  export * from '@openzeppelin/wizard/dist/index';
}