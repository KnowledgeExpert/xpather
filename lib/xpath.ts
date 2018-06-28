import {Condition} from "./condition";


export class Xpath {
    private readonly xpathString: string;
    static readonly root = new Xpath('/.');

    static x(tag: string, ...conditions: Condition[]) {
        return new Xpath(`//${tag}`, ...conditions);
    }

    constructor(xpathString: string, ...conditions: Condition[]) {
        const conditionsString = conditions.length > 0 ? conditions.map(condition => `[${condition.toString()}]`).join('') : ''
        this.xpathString = xpathString + conditionsString;
    }

    descendant(xpathString: string, ...conditions: Condition[]): Xpath {
        return new Xpath(`${this.xpathString}//${xpathString}`, ...conditions);
    }

    descendantOrSelf(xpathString: string, ...conditions: Condition[]): Xpath {
        return new Xpath(`${this.xpathString}/descendant-or-self::${xpathString}`, ...conditions);
    }

    child(xpathString: string, ...conditions: Condition[]): Xpath {
        return new Xpath(`${this.xpathString}/${xpathString}`, ...conditions);
    }

    parent(): Xpath {
        return new Xpath(`${this.xpathString}/../`);
    }

    // all following elements (same level + deeper)
    following(xpathString: string, ...conditions: Condition[]): Xpath {
        return new Xpath(`${this.xpathString}/following::${xpathString}`, ...conditions);
    }

    next(xpathString: string, ...conditions: Condition[]): Xpath {
        return this.following(xpathString, ...conditions);
    }

    // all following elements (same level only)
    followingSibling(xpathString: string, ...conditions: Condition[]): Xpath {
        return new Xpath(`${this.xpathString}/following-sibling::${xpathString}`, ...conditions);
    }

    nextSibling(xpathString: string, ...conditions: Condition[]): Xpath {
        return this.followingSibling(xpathString, ...conditions);
    }

    // all preceding elements (same level + deeper)
    preceding(xpathString: string, ...conditions: Condition[]): Xpath {
        return new Xpath(`${this.xpathString}/preceding::${xpathString}`, ...conditions);
    }

    previous(xpathString: string, ...conditions: Condition[]): Xpath {
        return this.preceding(xpathString, ...conditions);
    }

    // all preceding elements (same level only)
    precedingSibling(xpathString: string, ...conditions: Condition[]): Xpath {
        return new Xpath(`${this.xpathString}/preceding-sibling::${xpathString}`, ...conditions);
    }

    previousSibling(xpathString: string, ...conditions: Condition[]): Xpath {
        return this.precedingSibling(xpathString, ...conditions);
    }

    build(): string {
        return this.toString();
    }

    toString(): string {
        return this.xpathString;
    }

}