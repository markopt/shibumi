import { SplitFactory } from '@splitsoftware/splitio';

const factory = SplitFactory({
  core: {
    authorizationKey: 'ae113gbct31lcuio6csm36o121r2rl4uqct0', // Replace with your client-side SDK key
    key: 'user_123' // Can be dynamic based on user
  }
});

const splitClient = factory.client();

export default splitClient;