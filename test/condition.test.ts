import { Describe, It } from 'jasmine-cookies';
import { Xpath } from '../lib/xpath';
import { With } from '../lib';

declare let expect;

Describe('condition', () => {

    It('and', () => {
        expect(Xpath.root.child('*', With.id('foo').and(With.name('bar'))).build())
            .toBe(`/./*[contains(@id, 'foo') and contains(@name, 'bar')]`);
    });

    It('or', () => {
        expect(Xpath.root.child('*', With.id('foo').or(With.name('bar'))).build())
            .toBe(`/./*[contains(@id, 'foo') or contains(@name, 'bar')]`);
    });

    It('text', () => {
        expect(Xpath.root.child('*', With.text('foo')).build())
            .toBe(`/./*[contains(normalize-space(.), 'foo')]`);
    });

    It('text with single quote', () => {
        expect(Xpath.root.child('*', With.text(`foo'`)).build())
            .toBe(`/./*[contains(normalize-space(.), "foo'")]`);
    });

    It('exact text', () => {
        expect(Xpath.root.child('*', With.exactText('foo')).build())
            .toBe(`/./*[text() = 'foo']`);
    });

    It('exact text with single quote', () => {
        expect(Xpath.root.child('*', With.exactText(`foo'`)).build())
            .toBe(`/./*[text() = "foo'"]`);
    });

    It('attribute', () => {
        expect(Xpath.root.child('*', With.attribute('foo')).build())
            .toBe(`/./*[@foo]`);
        expect(Xpath.root.child('*', With.attribute('foo', 'bar')).build())
            .toBe(`/./*[contains(@foo, 'bar')]`);
    });

    It('exact attribute', () => {
        expect(Xpath.root.child('*', With.exactAttribute('foo', 'bar')).build())
            .toBe(`/./*[@foo = 'bar']`);
    });

    It('value', () => {
        expect(Xpath.root.child('*', With.value('foo')).build())
            .toBe(`/./*[contains(@value, 'foo')]`);
    });

    It('exact value', () => {
        expect(Xpath.root.child('*', With.exactValue('foo')).build())
            .toBe(`/./*[@value = 'foo']`);
    });

    It('id', () => {
        expect(Xpath.root.child('*', With.id('foo')).build())
            .toBe(`/./*[contains(@id, 'foo')]`);
    });

    It('exact id', () => {
        expect(Xpath.root.child('*', With.exactId('foo')).build())
            .toBe(`/./*[@id = 'foo']`);
    });

    It('name', () => {
        expect(Xpath.root.child('*', With.name('foo')).build())
            .toBe(`/./*[contains(@name, 'foo')]`);
    });

    It('exact name', () => {
        expect(Xpath.root.child('*', With.exactName('foo')).build())
            .toBe(`/./*[@name = 'foo']`);
    });

    It('position', () => {
        expect(Xpath.root.child('*', With.position(5)).build())
            .toBe(`/./*[5]`);
    });

    It('last', () => {
        expect(Xpath.root.child('*', With.positionLast()).build())
            .toBe(`/./*[last()]`);
    });

    It('count', () => {
        expect(Xpath.root.child('*', With.count('div', 5)).build())
            .toBe(`/./*[count(div) = 5]`);
    });

});