import { observe } from '../utils/observer.js';

export function reactive(data) {
  return observe(data);
}
