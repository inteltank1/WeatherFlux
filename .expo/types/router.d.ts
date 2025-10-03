/* eslint-disable */
import * as Router from 'expo-router';

export * from 'expo-router';

declare module 'expo-router' {
  export namespace ExpoRouter {
    export interface __routes<T extends string | object = string> {
      hrefInputParams: { pathname: Router.RelativePathString, params?: Router.UnknownInputParams } | { pathname: Router.ExternalPathString, params?: Router.UnknownInputParams } | { pathname: `/_sitemap`; params?: Router.UnknownInputParams; } | { pathname: `${'/(tabs)'}/map` | `/map`; params?: Router.UnknownInputParams; } | { pathname: `${'/(tabs)'}/rocket` | `/rocket`; params?: Router.UnknownInputParams; };
      hrefOutputParams: { pathname: Router.RelativePathString, params?: Router.UnknownOutputParams } | { pathname: Router.ExternalPathString, params?: Router.UnknownOutputParams } | { pathname: `/_sitemap`; params?: Router.UnknownOutputParams; } | { pathname: `${'/(tabs)'}/map` | `/map`; params?: Router.UnknownOutputParams; } | { pathname: `${'/(tabs)'}/rocket` | `/rocket`; params?: Router.UnknownOutputParams; };
      href: Router.RelativePathString | Router.ExternalPathString | `/_sitemap${`?${string}` | `#${string}` | ''}` | `${'/(tabs)'}/map${`?${string}` | `#${string}` | ''}` | `/map${`?${string}` | `#${string}` | ''}` | `${'/(tabs)'}/rocket${`?${string}` | `#${string}` | ''}` | `/rocket${`?${string}` | `#${string}` | ''}` | { pathname: Router.RelativePathString, params?: Router.UnknownInputParams } | { pathname: Router.ExternalPathString, params?: Router.UnknownInputParams } | { pathname: `/_sitemap`; params?: Router.UnknownInputParams; } | { pathname: `${'/(tabs)'}/map` | `/map`; params?: Router.UnknownInputParams; } | { pathname: `${'/(tabs)'}/rocket` | `/rocket`; params?: Router.UnknownInputParams; };
    }
  }
}
