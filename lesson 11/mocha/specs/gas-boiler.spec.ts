import { expect } from 'chai';
import { describe, it, beforeEach, afterEach } from 'mocha';
import { GasBoiler } from '../src/gas-boiler';

describe('GasBoiler', () => {
    let boiler: GasBoiler;
    const originalLog = console.log;
    let logs: string[] = [];

    beforeEach(() => {
        boiler = new GasBoiler('TestGasBoiler');
        logs = [];
        console.log = (...args: any[]) => {
            logs.push(args.join(' '));
        };
    });

    afterEach(() => {
        console.log = originalLog;
    });

    it('initializes with default values', () => {
        expect(boiler.name).to.equal('TestGasBoiler');
        expect(boiler.currentTemperature).to.equal(20);
        expect(boiler.desiredTemperature).to.equal(35);
        expect(boiler.powerState).to.equal(false);
    });

    it('turnOn sets powerState to true', () => {
        boiler.turnOn();
        expect(boiler.powerState).to.be.true;
    });

    it('turnOff sets powerState to false', () => {
        boiler.turnOn();
        expect(boiler.powerState).to.be.true;
        boiler.turnOff();
        expect(boiler.powerState).to.be.false;
    });

    it('setTemperature updates desiredTemperature and returns it', () => {
        const ret = boiler.setTemperature(50);
        expect(ret).to.equal(50);
        expect(boiler.desiredTemperature).to.equal(50);
    });

    it('heatWater does nothing when off and logs a warning', () => {
        const before = boiler.currentTemperature;
        boiler.heatWater();
        expect(boiler.currentTemperature).to.equal(before);
        const found = logs.some(l => l.includes('is not on!'));
        expect(found).to.be.true;
    });

    it('heatWater increases temperature when on until desiredTemperature', () => {
        boiler.currentTemperature = 20;
        boiler.setTemperature(23);
        boiler.turnOn();
        boiler.heatWater();
        expect(boiler.currentTemperature).to.equal(23);
        const burnMessages = logs.filter(l => l.includes('Gas is burning'));
        expect(burnMessages.length).to.equal(3);
    });

    it('heatWater does not lower the temperature when desiredTemperature is lower', () => {
        boiler.currentTemperature = 30;
        boiler.setTemperature(25);
        boiler.turnOn();
        boiler.heatWater();
        expect(boiler.currentTemperature).to.equal(30);
    });
});
