"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.requestMessage = void 0;
const moralis_1 = __importDefault(require("moralis"));
const DOMAIN = 'opensea.io';
const STATEMENT = 'Sign-in to your wallet.';
const URI = 'https://opensea.io';
const EXPIRATION_TIME = '2023-01-01T00:00:00.000Z';
const TIMEOUT = 15;
async function requestMessage({ address, chain, networkType, }) {
    const result = await moralis_1.default.Auth.requestMessage({
        address,
        chain,
        networkType,
        domain: DOMAIN,
        statement: STATEMENT,
        uri: URI,
        expirationTime: EXPIRATION_TIME,
        timeout: TIMEOUT,
    });
    const { message } = result.toJSON();
    return message;
}
exports.requestMessage = requestMessage;
//# sourceMappingURL=authService.js.map
