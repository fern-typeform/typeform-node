# Typedream Node Library

[![npm shield](https://img.shields.io/npm/v/@fern-api/typedream)](https://www.npmjs.com/package/@fern-api/typedream)

The {Company} Node.js library provides access to the Typedream API from JavaScript/TypeScript.

## Documentation

API reference documentation is available [here](https://www.typeform.com/developers/create/).

## Usage

[![Try it out](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/edit/typescript-example-using-sdk-built-with-fern-hptevw?file=app.ts&view=editor)

```typescript
import { TypeformClient, TypeformEnvironment } from '@fern-api/typeform';

const client = new TypeformClient({
  environment: TypeformEnvironment.Production
});

const response = await client.responses.getFormById("my-form-id");

console.log('Received response from Typeform!', response);
```

## Beta status

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning the package version to a specific version in your package.json file. This way, you can install the same version each time without breaking changes unless you are intentionally looking for the latest version.

## Contributing

While we value open-source contributions to this SDK, this library is generated programmatically. Additions made directly to this library would have to be moved over to our generation code, otherwise they would be overwritten upon the next generated release. Feel free to open a PR as a proof of concept, but know that we will not be able to merge it as-is. We suggest [opening an issue](https://github.com/fern-typeform/typeform-node/issues) first to discuss with us!

On the other hand, contributions to the README are always very welcome!