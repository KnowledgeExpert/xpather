import {Condition} from "./condition";


export namespace With {

    export function text(text: string): Condition {
        return new Condition(`contains(normalize-space(.), '${text}')`);
    }

    export function exactText(exactText: string): Condition {
        return new Condition(`text() = '${exactText}'`);
    }

    export function attribute(attributeName: string, attributeValue?: string): Condition {
        return attributeValue
            ? new Condition(`contains(@${attributeName}, '${attributeValue}')`)
            : new Condition(`@${attributeName}`) ;
    }

    export function exactAttribute(attributeName: string, attributeValue: string): Condition {
        return new Condition(`@${attributeName} = '${attributeValue}'`);
    }

    export function value(value: string): Condition {
        return attribute('value', value);
    }

    export function exactValue(value: string): Condition {
        return exactAttribute('value', value);
    }

    export function id(value: string): Condition {
        return attribute('id', value);
    }

    export function exactId(value: string): Condition {
        return exactAttribute('id', value);
    }

    export function name(value: string): Condition {
        return attribute('name', value);
    }

    export function exactName(value: string): Condition {
        return exactAttribute('name', value);
    }

    export function position(index: number): Condition {
        return new Condition(`${index}`);
    }

    export function positionLast(): Condition {
        return new Condition(`last()`);
    }

    export function count(tag: string, count: number): Condition {
        return new Condition(`count(${tag}) = ${count}`);
    }

}