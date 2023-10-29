import nestJest from "next/jest.js";

const createJestConfig = nestJest({ dir: "./" });

const config = {
  testEnvironment: "jest-environment-jsdom",
};

export default createJestConfig(config);
