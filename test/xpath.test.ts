import {Describe, It} from "jasmine-cookies";
import {Xpath} from "../lib/xpath";
import {With} from "../lib";

declare let expect;

Describe('xpath', () => {
    const condition = With.exactAttribute('foo', 'bar');
    const conditions = [With.exactAttribute('foo', 'bar'), With.exactAttribute('bar', 'foo')];

    It('root', () => {
        expect(Xpath.root.build()).toBe('/.');
    });

    It('x', () => {
        expect(Xpath.x('div').build()).toBe('//div');
        expect(Xpath.x('div', condition).build())
            .toBe(`//div[@foo = 'bar']`);
        expect(Xpath.x('div', ...conditions).build())
            .toBe(`//div[@foo = 'bar'][@bar = 'foo']`);
    });

    It('descendant', () => {
        expect(Xpath.root.descendant('div').build())
            .toBe('/.//div');
        expect(Xpath.root.descendant('div', condition).build())
            .toBe(`/.//div[@foo = 'bar']`);
        expect(Xpath.root.descendant('div', ...conditions).build())
            .toBe(`/.//div[@foo = 'bar'][@bar = 'foo']`);
    });

    It('descendant or self', () => {
        expect(Xpath.root.descendantOrSelf('div').build())
            .toBe('/./descendant-or-self::div');
        expect(Xpath.root.descendantOrSelf('div', condition).build())
            .toBe(`/./descendant-or-self::div[@foo = 'bar']`);
        expect(Xpath.root.descendantOrSelf('div', ...conditions).build())
            .toBe(`/./descendant-or-self::div[@foo = 'bar'][@bar = 'foo']`);
    });

    It('child', () => {
        expect(Xpath.root.child('div').build())
            .toBe('/./div');
        expect(Xpath.root.child('div', condition).build())
            .toBe(`/./div[@foo = 'bar']`);
        expect(Xpath.root.child('div', ...conditions).build())
            .toBe(`/./div[@foo = 'bar'][@bar = 'foo']`);
    });

    It('parent', () => {
        expect(Xpath.root.child('div').parent().build())
            .toBe('/./div/../');
    });

    It('next', () => {
        expect(Xpath.root.next('div').build())
            .toBe(`/./following::div`);
        expect(Xpath.root.next('div', condition).build())
            .toBe(`/./following::div[@foo = 'bar']`);
        expect(Xpath.root.next('div', ...conditions).build())
            .toBe(`/./following::div[@foo = 'bar'][@bar = 'foo']`);
    });

    It('following', () => {
        expect(Xpath.root.following('div').build())
            .toBe(`/./following::div`);
        expect(Xpath.root.following('div', condition).build())
            .toBe(`/./following::div[@foo = 'bar']`);
        expect(Xpath.root.following('div', ...conditions).build())
            .toBe(`/./following::div[@foo = 'bar'][@bar = 'foo']`);
    });

    It('next sibling', () => {
        expect(Xpath.root.nextSibling('div').build())
            .toBe(`/./following-sibling::div`);
        expect(Xpath.root.nextSibling('div', condition).build())
            .toBe(`/./following-sibling::div[@foo = 'bar']`);
        expect(Xpath.root.nextSibling('div', ...conditions).build())
            .toBe(`/./following-sibling::div[@foo = 'bar'][@bar = 'foo']`);
    });

    It('following sibling', () => {
        expect(Xpath.root.followingSibling('div').build())
            .toBe(`/./following-sibling::div`);
        expect(Xpath.root.followingSibling('div', condition).build())
            .toBe(`/./following-sibling::div[@foo = 'bar']`);
        expect(Xpath.root.followingSibling('div', ...conditions).build())
            .toBe(`/./following-sibling::div[@foo = 'bar'][@bar = 'foo']`);
    });

    It('previous', () => {
        expect(Xpath.root.previous('div').build())
            .toBe(`/./preceding::div`);
        expect(Xpath.root.previous('div', condition).build())
            .toBe(`/./preceding::div[@foo = 'bar']`);
        expect(Xpath.root.previous('div', ...conditions).build())
            .toBe(`/./preceding::div[@foo = 'bar'][@bar = 'foo']`);
    });

    It('preceding', () => {
        expect(Xpath.root.preceding('div').build())
            .toBe(`/./preceding::div`);
        expect(Xpath.root.preceding('div', condition).build())
            .toBe(`/./preceding::div[@foo = 'bar']`);
        expect(Xpath.root.preceding('div', ...conditions).build())
            .toBe(`/./preceding::div[@foo = 'bar'][@bar = 'foo']`);
    });

    It('previous sibling', () => {
        expect(Xpath.root.previousSibling('div').build())
            .toBe(`/./preceding-sibling::div`);
        expect(Xpath.root.previousSibling('div', condition).build())
            .toBe(`/./preceding-sibling::div[@foo = 'bar']`);
        expect(Xpath.root.previousSibling('div', ...conditions).build())
            .toBe(`/./preceding-sibling::div[@foo = 'bar'][@bar = 'foo']`);
    });

    It('preceding sibling', () => {
        expect(Xpath.root.precedingSibling('div').build())
            .toBe(`/./preceding-sibling::div`);
        expect(Xpath.root.precedingSibling('div', condition).build())
            .toBe(`/./preceding-sibling::div[@foo = 'bar']`);
        expect(Xpath.root.precedingSibling('div', ...conditions).build())
            .toBe(`/./preceding-sibling::div[@foo = 'bar'][@bar = 'foo']`);
    });

    It('build and toString', () => {
       expect(Xpath.root.toString()).toBe(Xpath.root.build())
    });

});