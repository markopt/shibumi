# Shibumi Bank React Demo

This is a demo banking app built with React to showcase feature flag toggling using Split by Harness. The app includes a dynamic chat widget that is remotely controlled using Harness's client-side SDK and configuration.

## Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/markopt/shibumi.git
cd shibumi-bank-demo
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Start the App

```bash
npm start
```

The app will start on `http://localhost:3000`.

## Feature Flag Setup (Split.io)

This project uses Split.io to remotely toggle a chat widget via a feature flag named `chat_widget`.

### Steps:

1. Log in to Split.io and create a workspace if needed.
2. Create a new feature flag named `chatWidget`.
3. Add two treatments:
   - `on`
   - `off` (set as default)
4. Under the `on` treatment, add the following dynamic config:

```json
{
  "position": "right",
  "placeholder": "Welcome to your personal banking agent! How can we assist you today?",
  "color": "#CD5C5C"
}
```

5. In the targeting rules, ensure your test user key (e.g., `"user_123"`) receives the `on` treatment.

## SDK Key Configuration

In `src/splitClient.js`, update the SDK configuration:

```js
const factory = SplitFactory({
  core: {
    authorizationKey: 'YOUR_CLIENT_SDK_KEY', // Replace this
    key: 'user_123' // Can be dynamically set per user
  }
});
```

Only use a client-side SDK key. Do not expose server-side keys in the frontend.

## Feature Behavior

- When `chatWidget` is set to `on`, a chat button appears in the bottom-right corner.
- Button appearance and text are controlled via Split's dynamic configuration.
- When the flag is `off`, the widget is not displayed.

## Coming Soon

- Mobile responsiveness
- Expanded chat functionality
- Authentication and dashboard support

## License

MIT – use and modify freely for demos and internal projects.
