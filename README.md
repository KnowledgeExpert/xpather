# Xpather

[![Build Status](https://travis-ci.com/KnowledgeExpert/xpather.svg?branch=master)](https://travis-ci.com/KnowledgeExpert/xpather)
[![Coverage Status](https://coveralls.io/repos/github/KnowledgeExpert/xpather/badge.svg?branch=master)](https://coveralls.io/github/KnowledgeExpert/xpather?branch=master)
![NPM version](https://img.shields.io/npm/v/xpather.svg)
![NPM downloads per month](https://img.shields.io/npm/dm/xpather.svg)


Xpather is a small module which provides simple and concise api for XPath generation.

## Installation

`npm i xpather --save`

## Example

`JavaScript`
```
const xpather = require('xpather');
const x = xpather.x;
const With = xpather.With;
const root = xpather.root;

root.descendant('div')
    .child('span', With.exactId('foo'))
    .build();

// returns "/.//div/span[@id = 'foo']"
```

`TypeScript`
```
import {With, x, root} from 'xpather';

x('pet', With.attribute('type', 'dog'))
    .child('data')
    .descendant('birthday', With.attribute('day', '3').or(With.attribute('month', 'feb')))
    .build()

// returns "//pet[contains(@type, 'dog')]/data//birthday[contains(@day, '3') or contains(@month, 'feb')]"
```

## API

Elements traversing:
 - `xpath.descendant(xpathString, conditions)`
 - `xpath.descendantOrSelf(xpathString, conditions)`
 - `xpath.parent()`
 - `xpath.following(xpathString, conditions)`
 - `xpath.next(xpathString, conditions)` // same as following
 - `xpath.followingSibling(xpathString, conditions)`
 - `xpath.nextSibling(xpathString, conditions)` // same as followingSibling
 - `xpath.preceding(xpathString, conditions)`
 - `xpath.previous(xpathString, conditions)` // same as preceding
 - `xpath.precedingSibling(xpathString, conditions)`
 - `xpath.previousSibling(xpathString, conditions)` // same as precedingSibling
 - `xpath.build()` or `xpath.build()` - returns an xpath as a string

Element Conditions:
 - `With.text`
 - `With.exactText`
 - `With.attribute`
 - `With.exactAttribute`
 - `With.value`
 - `With.exactValue`
 - `With.id`
 - `With.exactId`
 - `With.name`
 - `With.exactName`
 - `With.position`
 - `With.positionLast`
 - `With.count`
