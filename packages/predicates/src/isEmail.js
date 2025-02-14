import { test, both, either } from 'ramda';
import { isNilOrEmptyString } from 'ramda-extension';
import hasLengthMax from './hasLengthMax';

// Examples of what matches the regular expression:
// 'example@example.com'
// 'example.example@example.com'
// 'example@example.co.uk'
//
// Examples of what doesn't match the regular expression:
// 'example'
// 'example@'
// 'example.com'
//
// eslint-disable-next-line max-len
const emailRegExp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

/**
@alias module:predicates.isEmail
*/
export default either(isNilOrEmptyString, both(test(emailRegExp), hasLengthMax(200)));
