// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

// TODO - Part 2

// isPhoneNumber
test('correct phone number', () => {
  const phoneNum = '(583) 863-5963';
  expect(isPhoneNumber(phoneNum)).toBe(true);
});

test('without area code', () => {
  const phoneNum = '863-5963';
  expect(isPhoneNumber(phoneNum)).toBe(true);
});

test('phone number no format', () => {
  const phoneNum = '5838635963';
  expect(isPhoneNumber(phoneNum)).toBe(false);
});

test('too long to be a phone number', () => {
  const phoneNum = '44444448635963';
  expect(isPhoneNumber(phoneNum)).toBe(false);
});

// isEmail
test('correct email', () => {
  const email = 'blank@gmail.com';
  expect(isEmail(email)).toBe(true);
});

test('correct email - different', () => {
  const email = 'blank@ucsd.edu';
  expect(isEmail(email)).toBe(true);
});

test('incorrect link', () => {
  const email = 'blank@gmail.comm';
  expect(isEmail(email)).toBe(false);
});

test('normal website', () => {
  const email = 'google.com';
  expect(isEmail(email)).toBe(false);
});

// isStrongPassword
test('correct strong password', () => {
  const pass = 'a123';
  expect(isStrongPassword([pass])).toBe(true);
});

test('correct strong password', () => {
  const pass = 'testing123987';
  expect(isStrongPassword([pass])).toBe(true);
});

test('password less than 4 characters', () => {
  const pass = 'a12';
  expect(isStrongPassword([pass])).toBe(false);
});

test('password more than 15 characters', () => {
  const pass = 'a12332492943232924929';
  expect(isStrongPassword([pass])).toBe(false);
});

// isDate
test('correct date format', () => {
  const date = '5/6/2025';
  expect(isDate(date)).toBe(true);
});
2
test('correct date format, 2 digits used for month', () => {
  const date = '05/6/2025';
  expect(isDate(date)).toBe(true);
});

test('only 2 digits used for year', () => {
  const date = '5/6/25';
  expect(isDate(date)).toBe(false);
});

test('3 digits used for month', () => {
  const date = '005/6/2025';
  expect(isDate(date)).toBe(false);
});

// isHexColor
test('correct 6 character hex color', () => {
  const color = '#3cb360';
  expect(isHexColor(color)).toBe(true);
});

test('correct 3 character hex color', () => {
  const color = '#ABC';
  expect(isHexColor(color)).toBe(true);
});

test('4 characters used for hex color', () => {
  const color = '#3355';
  expect(isHexColor(color)).toBe(false);
});

test('more than 6 characters hex color', () => {
  const color = '3cb3602';
  expect(isHexColor(color)).toBe(false);
});

