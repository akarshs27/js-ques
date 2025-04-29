import React, { useEffect, useRef, useState } from "react";
import "./styles.css";
import { FeatureFlagProvider, useFeatureFlag } from "./useFeatureFlag";

import { createContext, useContext, useState } from "react";

const FeatureFlag = createContext({});

export const FeatureFlagProvider = ({ children }) => {
  const [features, setFeatures] = useState({
    isDarkMode: true,
    showGoogleIcon: false,
    showInstaIcon: true,
  });
  return (
    <FeatureFlag.Provider value={{ features }}>{children}</FeatureFlag.Provider>
  );
};

export function useFeatureFlag() {
  return useContext(FeatureFlag);
}

const Example = () => {
  return (
    <>
      <Feature feature="isDarkMode">Dark Mode is on</Feature>
      <Feature feature="showGoogleIcon">Google Icon</Feature>
      <Feature feature="showInstaIcon">Insta Icon</Feature>
    </>
  );
};

const Feature = ({ children, feature }) => {
  const { features } = useFeatureFlag();
  console.log("features", features);
  return features[feature] ? children : null;
};

export default function App() {
  return (
    <FeatureFlagProvider>
      <Example />
    </FeatureFlagProvider>
  );
}
