import "@testing-library/jest-dom";
import "isomorphic-fetch";
import fetch from "node-fetch";

global.fetch = fetch as unknown as (input: RequestInfo, init?: RequestInit) => Promise<Response>;