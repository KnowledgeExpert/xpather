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

    It('page', () => {
        expect(Xpath.page.build()).toBe('/.');
    });

    It('x', () => {
        expect(Xpath.x('div').build()).toBe('div');
        expect(Xpath.x('div', condition).build())
            .toBe(`div[@foo = 'bar']`);
        expect(Xpath.x('div', ...conditions).build())
            .toBe(`div[@foo = 'bar'][@bar = 'foo']`);
    });

    It('descendant', () => {
        expect(Xpath.page.descendant('div').build())
            .toBe('/.//div');
        expect(Xpath.page.descendant('div', condition).build())
            .toBe(`/.//div[@foo = 'bar']`);
        expect(Xpath.page.descendant('div', ...conditions).build())
            .toBe(`/.//div[@foo = 'bar'][@bar = 'foo']`);
    });

    It('descendant or self', () => {
        expect(Xpath.page.descendantOrSelf('div').build())
            .toBe('/./descendant-or-self::div');
        expect(Xpath.page.descendantOrSelf('div', condition).build())
            .toBe(`/./descendant-or-self::div[@foo = 'bar']`);
        expect(Xpath.page.descendantOrSelf('div', ...conditions).build())
            .toBe(`/./descendant-or-self::div[@foo = 'bar'][@bar = 'foo']`);
    });

    It('child', () => {
        expect(Xpath.page.child('div').build())
            .toBe('/./div');
        expect(Xpath.page.child('div', condition).build())
            .toBe(`/./div[@foo = 'bar']`);
        expect(Xpath.page.child('div', ...conditions).build())
            .toBe(`/./div[@foo = 'bar'][@bar = 'foo']`);
    });

    It('parent', () => {
        expect(Xpath.page.child('div').parent().build())
            .toBe('/./div/../');
    });

    It('next', () => {
        expect(Xpath.page.next('div').build())
            .toBe(`/./following::div`);
        expect(Xpath.page.next('div', condition).build())
            .toBe(`/./following::div[@foo = 'bar']`);
        expect(Xpath.page.next('div', ...conditions).build())
            .toBe(`/./following::div[@foo = 'bar'][@bar = 'foo']`);
    });

    It('following', () => {
        expect(Xpath.page.following('div').build())
            .toBe(`/./following::div`);
        expect(Xpath.page.following('div', condition).build())
            .toBe(`/./following::div[@foo = 'bar']`);
        expect(Xpath.page.following('div', ...conditions).build())
            .toBe(`/./following::div[@foo = 'bar'][@bar = 'foo']`);
    });

    It('next sibling', () => {
        expect(Xpath.page.nextSibling('div').build())
            .toBe(`/./following-sibling::div`);
        expect(Xpath.page.nextSibling('div', condition).build())
            .toBe(`/./following-sibling::div[@foo = 'bar']`);
        expect(Xpath.page.nextSibling('div', ...conditions).build())
            .toBe(`/./following-sibling::div[@foo = 'bar'][@bar = 'foo']`);
    });

    It('following sibling', () => {
        expect(Xpath.page.followingSibling('div').build())
            .toBe(`/./following-sibling::div`);
        expect(Xpath.page.followingSibling('div', condition).build())
            .toBe(`/./following-sibling::div[@foo = 'bar']`);
        expect(Xpath.page.followingSibling('div', ...conditions).build())
            .toBe(`/./following-sibling::div[@foo = 'bar'][@bar = 'foo']`);
    });

    It('previous', () => {
        expect(Xpath.page.previous('div').build())
            .toBe(`/./preceding::div`);
        expect(Xpath.page.previous('div', condition).build())
            .toBe(`/./preceding::div[@foo = 'bar']`);
        expect(Xpath.page.previous('div', ...conditions).build())
            .toBe(`/./preceding::div[@foo = 'bar'][@bar = 'foo']`);
    });

    It('preceding', () => {
        expect(Xpath.page.preceding('div').build())
            .toBe(`/./preceding::div`);
        expect(Xpath.page.preceding('div', condition).build())
            .toBe(`/./preceding::div[@foo = 'bar']`);
        expect(Xpath.page.preceding('div', ...conditions).build())
            .toBe(`/./preceding::div[@foo = 'bar'][@bar = 'foo']`);
    });

    It('previous sibling', () => {
        expect(Xpath.page.previousSibling('div').build())
            .toBe(`/./preceding-sibling::div`);
        expect(Xpath.page.previousSibling('div', condition).build())
            .toBe(`/./preceding-sibling::div[@foo = 'bar']`);
        expect(Xpath.page.previousSibling('div', ...conditions).build())
            .toBe(`/./preceding-sibling::div[@foo = 'bar'][@bar = 'foo']`);
    });

    It('preceding sibling', () => {
        expect(Xpath.page.precedingSibling('div').build())
            .toBe(`/./preceding-sibling::div`);
        expect(Xpath.page.precedingSibling('div', condition).build())
            .toBe(`/./preceding-sibling::div[@foo = 'bar']`);
        expect(Xpath.page.precedingSibling('div', ...conditions).build())
            .toBe(`/./preceding-sibling::div[@foo = 'bar'][@bar = 'foo']`);
    });

    It('build and toString', () => {
       expect(Xpath.root.toString()).toBe(Xpath.root.build())
    });

});