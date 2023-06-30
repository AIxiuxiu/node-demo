import md5 from 'md5';
import m from './module.js';

const before = m;
const after = md5(before)
console.log({ before, after });
