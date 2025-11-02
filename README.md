# Reproduction Steps

1. pnpm install
2. pnpm dev
3. open http://localhost:5173
4. open console
5. click the autoplay button
6. see an uncaught promise error in the console

## Expected Behavior

The carousel should autoplay without throwing an uncaught promise error.

## Additional Information

The uncaught promise error is thrown after the setInterval time.

Removing the signal read in the object style property prevents the uncaught promise error.
