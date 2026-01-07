import React from "react";
import CodeBlock from "../components/CodeBlock";
import Link from "next/link";

const examples = [
  `CASE INSENSITIVE SEARCH
const pattern = /cat/; //Finds first occurrence of "cat" in a string
const text = "The cat is on the roof.";

console.log(pattern.test(text)); // true`,
  `CASE SENSITIVE SEARCH
  const pattern = /Cat/; // capital "C" — case-sensitive
const text = "The cat is on the roof.";

console.log(pattern.test(text)); // false`,
  `GLOBAL SEARCH
  const pattern = /is/g; // global search for all "is" occurrences
const text = "Is this all there is?";

const result = text.match(pattern);

console.log(result); // ["is", "is"]`,
  `MATCH FIRST LETTERS, FIRST DIGITS or FIRST UNDERSCORES
  const pattern = /\\w/;
const text = "Hello!";

const result = pattern.test(text);

console.log(result); // true because first character is letter, digit, or underscore`,
  `MATCH DIGITS
  let text = "Give 100 %!";
const pattern = /\d/; // matches first digit from 0 to 9. If add "g" flag, matches all digits. 1, 0, 0 in this case.

let result = text.match(pattern);

console.log(result);
`,
  `MATCH WHITESPACE
  let text = "Give 100%!";
const pattern = /\\s/; // matches first whitespace character. If add "g" flag, matches all whitespace characters, but here there's only one, as search ignores the "g".

let result = text.search(pattern);

console.log(result);
// 4 — index of first whitespace character`,
  `MATCH ALPHANUMERIC CHARACTERS
  let text = "Give 100%!";
const pattern = /\\w/g; // matches all alphanumeric characters and underscores.

let result = text.match(pattern);

console.log(result);
// ["G", "i", "v", "e", "1", "0", "0"] `,
  `MATCH EXACTLY ONE 0
  let text = "1, 100 or 1000?";
const pattern = /10?/g;

let result = text.match(pattern);

console.log(result);
// ["1", "10", "100"] — matches "1" followed by zero or one "0"`,
  `MATCH ZERO OR MORE 0s
  let text = "1, 100 or 1000?";
const pattern = /10*/g;

let result = text.match(pattern);

console.log(result);
// ["1", "10", "100", "1000"] — matches "1" followed by zero or more "0"s`,
  `MATCH EXACTLY TWO 0s
  let text = "1, 100 or 1000?";
const pattern = /10{2}/g;

let result = text.match(pattern);

console.log(result);
// ["100"] — matches "1" followed by exactly two "0"s`,
  `BEGINNING OF STRING MATCH
const pattern = /^W3Schools/;
let text = "W3Schools tutorial";
let result = pattern.test(text);

console.log(result);
`,
  `END OF STRING MATCH
const pattern = /W3Schools$/;
let text = "Hello W3Schools";
let result = pattern.test(text);

console.log(result); // true because string ends with "W3Schools"`,
  `MATCH WHOLE WORD
const pattern = /W3Schools\\b/;
let text = "Hello W3Schools tutorial";
let result = pattern.test(text);

console.log(result); //W3Schools is matched because it is followed by a word boundary (space, punctuation, or the start/end of the string). This case space after W3Schools.
`,
  `MATCH DIGITS FROM 0 TO 9
  let text = "More than 1000 times";
let pattern = /[0-9]/g; //Without the "g" flag, only the first digit "1" would be matched.

let result = text.match(pattern);

console.log(result);
// ["1", "0", "0", "0"] — matches all digits from 0 to 9`,
  `MATCH EXACT LETTER
  let text = "More than 1000 times";
let pattern = /[e]/g; //Without the "g" flag, only the first letter "e" would be matched.

let result = text.match(pattern);

console.log(result);
// ["e", "e"] — matches all occurrences of the letter "e"`,
  `MATCH MULTIPLE LETTERS
  let text = "More than 1000 times";
let pattern = /[imes]/g; //Without the "g" flag, only the first letter "e" would be matched, as it first alphabetically.

let result = text.match(pattern);

console.log(result);
// ["i", "m", "e", "s"] — matches all occurrences of the letters "i", "m", "e", or "s"
`,
  `MATCH ALL LOWERCASE LETTERS FROM A TO Z 
let text = "More than 1000 times";
let pattern = /[a-z]/g; //Without the "g" flag, only the first letter "o" would be matched.

let result = text.match(pattern);

console.log(result);
// ["o", "r", "e", "t", "h", "a", "n", "t", "i", "m", "e", "s"] — matches all lowercase letters from a to z
// 'M' is not matched because it's uppercase.`,
  `MATCH EVERY SUB TEXT THAT STARTS OR ENDS WITH aa OR bb
  let text = "aaaabb";
let result = text.match(/(aa)(bb)/d);

console.log(result);
// ["aabb", "aa", "bb"] — full match is "aabb", first group "aa", second group "bb"`,
  `MULTILINE SEARCH
let text = \`Is this
all there
is\`;

let pattern = /^is/m;
let result = text.match(pattern);

console.log(result);
// ["is"] — matches "is" at the beginning of the second line due to the "m" (multiline) flag
// With m flag, ^ and $ match the start and end of each line, in a multiline string, in addition to the start and end of the entire string.
`,
  `MATCH ALL CHARACTERS INCLUDING DOT NEWLINES
let text = "Line\\nLine.";

let pattern = /Line./gs; 
let result = text.match(pattern);

console.log(result);
// ["Line\\n", "Line."] — matches "Line" followed by any character (including newline) due to the "s" (dotAll) flag
// With s flag, the dot (.) matches newline characters as well.`,
  `let text = "Hello 😄";

let pattern = /\\p{RGI_Emoji}/v;
let result = pattern.test(text);

console.log(result);
// true — matches the emoji character due to the "v" (Unicode property escapes) flag
// With v flag, Unicode property escapes like \\p{RGI_Emoji} can be used to match specific Unicode character properties.`,
];

const Regex = () => {
  return (
    <div className="max-w-4xl mx-auto py-8">
      <Link
        href="/"
        className="text-blue-600 hover:underline text-lg font-medium ml-5"
      >
        Home
      </Link>
      <div className="p-6 space-y-6">
        {examples.map((example, index) => (
          <CodeBlock key={index} code={example} /> //Here code refers to the code inside the component CodeBlock. I can name it anything but both has to be the same.
        ))}
      </div>
    </div>
  );
};

export default Regex;
