export class Condition {
    private readonly condition: string;

    constructor(condition: string) {
        this.condition = condition;
    }

    or(...conditions: Condition[]) {
        return new Condition(`${[this.condition, conditions].join(' or ')}`);
    }

    and(...conditions: Condition[]) {
        return new Condition(`${[this.condition, conditions].join(' and ')}`);
    }

    toString() {
        return this.condition;
    }
}