// Now that you are expected to handle unexpected (user) input...
// you don't need to specify the different types this function expects.
//
// `unknown` tells the TS compiler not to assume anything about the input

export const stringify = (input: unknown): string => (
  '""'
);
