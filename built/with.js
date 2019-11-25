"use strict";
// Copyright 2018 Knowledge Expert SA
//
// Licensed under the Apache License, Version 2.0 (the 'License');
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
// http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an 'AS IS' BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
Object.defineProperty(exports, "__esModule", { value: true });
const condition_1 = require("./condition");
var With;
(function (With) {
    function text(text) {
        return text.includes("'")
            ? new condition_1.Condition(`contains(normalize-space(.), "${text}")`)
            : new condition_1.Condition(`contains(normalize-space(.), '${text}')`);
    }
    With.text = text;
    function exactText(exactText) {
        return exactText.includes("'")
            ? new condition_1.Condition(`text() = "${exactText}"`)
            : new condition_1.Condition(`text() = '${exactText}'`);
    }
    With.exactText = exactText;
    function attribute(attributeName, attributeValue) {
        return attributeValue
            ? new condition_1.Condition(`contains(@${attributeName}, '${attributeValue}')`)
            : new condition_1.Condition(`@${attributeName}`);
    }
    With.attribute = attribute;
    function exactAttribute(attributeName, attributeValue) {
        return new condition_1.Condition(`@${attributeName} = '${attributeValue}'`);
    }
    With.exactAttribute = exactAttribute;
    function value(value) {
        return attribute('value', value);
    }
    With.value = value;
    function exactValue(value) {
        return exactAttribute('value', value);
    }
    With.exactValue = exactValue;
    function id(value) {
        return attribute('id', value);
    }
    With.id = id;
    function exactId(value) {
        return exactAttribute('id', value);
    }
    With.exactId = exactId;
    function name(value) {
        return attribute('name', value);
    }
    With.name = name;
    function exactName(value) {
        return exactAttribute('name', value);
    }
    With.exactName = exactName;
    function position(index) {
        return new condition_1.Condition(`${index}`);
    }
    With.position = position;
    function positionLast() {
        return new condition_1.Condition('last()');
    }
    With.positionLast = positionLast;
    function count(tag, count) {
        return new condition_1.Condition(`count(${tag}) = ${count}`);
    }
    With.count = count;
})(With = exports.With || (exports.With = {}));
//# sourceMappingURL=with.js.map