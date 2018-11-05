/**
 * Represents a dictionary, implemented as javascript object. But TypeScript strongly suggests to use the syntax myDict['key'] to
 * interact with such a dictionary, when keys are not known statically in the model.
 * The usecase for the Dict is similar to a Map, with a simplified syntax (compatible with simple JavaScript objects).
 */
export interface Dict<T> {
  [key: string]: T;
}
