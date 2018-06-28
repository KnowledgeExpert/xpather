"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Condition {
    constructor(condition) {
        this.condition = condition;
    }
    or(...conditions) {
        return new Condition(`${[this.condition, conditions].join(' or ')}`);
    }
    and(...conditions) {
        return new Condition(`${[this.condition, conditions].join(' and ')}`);
    }
    toString() {
        return this.condition;
    }
}
exports.Condition = Condition;
//# sourceMappingURL=condition.js.map