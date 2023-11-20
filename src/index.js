import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));


window.watsonAssistantChatOptions = {
  integrationID: "0cd1e9e9-d7f2-4bdf-80f1-7563dd0ec589", // The ID of this integration.
  region: "us-south", // The region your integration is hosted in.
  serviceInstanceID: "bfa82d89-572b-43af-8ef9-3ae23c5190b8", // The ID of your service instance.
  onLoad: function (instance) {
    instance.render();
  },
};
setTimeout(function () {
  const t = document.createElement("script");
  t.src =
    "https://web-chat.global.assistant.watson.appdomain.cloud/versions/" +
    (window.watsonAssistantChatOptions.clientVersion || "latest") +
    "/WatsonAssistantChatEntry.js";
  document.head.appendChild(t);
});

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
