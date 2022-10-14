# Buildable libs and nx affected

This project was generated using [Nx](https://nx.dev).

It is a barebones repository which demonstrates an issue:

1. Foo app imports from buildable lib myLibrary
2. Running `nx affected --target=build -c test` fails

```
✖  nx run mylibrary:build:production
>  NX   'c' is not found in schema
```

This is because `c` (for the build configuration of Foo app) is not supported in the ng-packagr schema
