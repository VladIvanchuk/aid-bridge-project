import "@testing-library/jest-dom";
import { TextEncoder, TextDecoder } from "util";

// Polyfills for encoding/decoding
global.TextEncoder = TextEncoder;
global.TextDecoder = TextDecoder;
