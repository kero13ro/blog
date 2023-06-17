// import Amplify from "aws-amplify";
// import config from "./src/aws-exports"

// Amplify.use(config)
import Amplify from '@aws-amplify/core';
import config from './src/aws-exports';
Amplify.configure(config);