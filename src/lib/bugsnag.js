// Vendors
import Bugsnag from '@bugsnag/js';
import BugsnagPluginReact from '@bugsnag/plugin-react';
import * as React from 'react';

Bugsnag.start({
  apiKey: `${process.env.NEXT_PUBLIC_BUGSNAG_API_KEY}`,
  appVersion: `${process.env.NEXT_PUBLIC_BUGSNAG_VERSION}`,
  releaseStage: `${process.env.NEXT_PUBLIC_BUGSNAG_APP_STAGE}`,
  enabledReleaseStages: ['staging', 'production'],
  autoDetectErrors: false,
  // When autoDetectErrors is true, this option
  // sets which kinds of errors to detect
  enabledErrorTypes: {
    unhandledExceptions: false,
    unhandledRejections: false,
  },
  enabledBreadcrumbTypes: ['navigation', 'request', 'process', 'log', 'user', 'state', 'error', 'manual'],
  autoTrackSessions: false,
  // beforeSend callbacks have been renamed to onError
  // and now receive an event parameter rather than report
  onError: (event) => {
    try {
      // potentially buggy code goes here
      // for this example, we're just throwing an error explicitly, but you do not need this syntax in your try clause.
    } catch (event) {
      Bugsnag.notify(event, {
        context: 'Don’t worry - I handled it.',
      });
    }
  },
  redactedKeys: [],
  metadata: {},
  onSession: (session) => {
    // a callback to run each time a session is created
  },
  onBreadcrumb: (breadcrumb) => {
    // a callback to run each time a breadcrumb is created
  },
  // plugins must now be supplied in config rather than via client.use()
  plugins: [new BugsnagPluginReact()],
});

const ErrorBoundary = Bugsnag.getPlugin('react').createErrorBoundary(React);

export { ErrorBoundary };
