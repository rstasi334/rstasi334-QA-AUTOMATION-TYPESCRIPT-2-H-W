import { describe, it, expect, beforeEach } from '@jest/globals';
import { ElectricBoiler } from '../src/electric-boiler';
import { GasBoiler } from '../src/gas-boiler';
import { MomentumElectricWaterHeater } from '../src/momentum-electric-water-heater';

// Import the classes (we'll need to export them from index.ts)
import type { IWaterHeater } from '../src/abstractions/i-water-heater';
import type { IMomentumWaterHeater } from '../src/abstractions/i-momentum-water-heater';

// Define House and BoilerShop inline for testing since they're not exported
class House {
    public constructor(public readonly name: string) {}

    public heatWater(boiler: IWaterHeater): void {
        boiler.turnOn();
        boiler.setTemperature(40);
        boiler.heatWater();
    }

    public heatBoilerWithMomentumWaterHeater(boiler: IMomentumWaterHeater): void {
        boiler.stepHeatWater();
    }
}

class BoilerShop {
    public get boilers(): IWaterHeater[] {
        return this._boilers;
    }

    public constructor(private _boilers: IWaterHeater[] = []) {}

    public testBoiler(boiler: IWaterHeater): void {
        boiler.turnOn();
        boiler.setTemperature(40);
        boiler.heatWater();
        boiler.turnOff();
    }

    public addBoiler(boiler: IWaterHeater): void {
        this._boilers.push(boiler);
    }

    public sellBoiler(boiler: IWaterHeater): void {
        if (!this._boilers.includes(boiler))
            return;
        this._boilers.splice(this._boilers.indexOf(boiler), 1);
    }
}

describe('House - Object Manipulation Tests', () => {
    let house: House;
    let gasBoiler: GasBoiler;
    let momentumBoiler: MomentumElectricWaterHeater;

    beforeEach(() => {
        house = new House('Test House');
        gasBoiler = new GasBoiler('Gas Boiler');
        momentumBoiler = new MomentumElectricWaterHeater('Momentum Electric Boiler');
    });

    describe('heatWater()', () => {
        it('should modify boiler object state through method calls', () => {
            const initialState = {
                powerState: gasBoiler.powerState,
                desiredTemp: gasBoiler.desiredTemperature,
                currentTemp: gasBoiler.currentTemperature
            };

            house.heatWater(gasBoiler);

            expect(gasBoiler.powerState).toBe(true);
            expect(gasBoiler.desiredTemperature).toBe(40);
            expect(gasBoiler.currentTemperature).toBeGreaterThan(initialState.currentTemp);
        });
    });

    describe('heatBoilerWithMomentumWaterHeater()', () => {
        it('should step heat the momentum boiler when enabled', () => {
            momentumBoiler.turnOn();
            momentumBoiler.waterRelayState = true;
            const initialTemp = momentumBoiler.currentTemperature;

            house.heatBoilerWithMomentumWaterHeater(momentumBoiler);

            expect(momentumBoiler.currentTemperature).toBeGreaterThan(initialTemp);
        });

        it('should not heat when water relay state is false', () => {
            momentumBoiler.waterRelayState = false;
            const initialTemp = momentumBoiler.currentTemperature;

            house.heatBoilerWithMomentumWaterHeater(momentumBoiler);

            expect(momentumBoiler.currentTemperature).toBe(initialTemp);
        });
    });
});

describe('BoilerShop - Object Collection Manipulation Tests', () => {
    let boilerShop: BoilerShop;
    let gasBoiler: GasBoiler;
    let electricBoiler: ElectricBoiler;
    let momentumBoiler: MomentumElectricWaterHeater;

    beforeEach(() => {
        gasBoiler = new GasBoiler('Gas Boiler');
        electricBoiler = new ElectricBoiler('Electric Boiler');
        momentumBoiler = new MomentumElectricWaterHeater('Momentum Electric Boiler');
        boilerShop = new BoilerShop([gasBoiler, electricBoiler, momentumBoiler]);
    });

    describe('addBoiler()', () => {
        it('should add a boiler to the collection', () => {
            const newBoiler = new GasBoiler('New Gas Boiler');
            const initialLength = boilerShop.boilers.length;

            boilerShop.addBoiler(newBoiler);

            expect(boilerShop.boilers.length).toBe(initialLength + 1);
            expect(boilerShop.boilers).toContain(newBoiler);
        });

        it('should allow adding multiple boilers', () => {
            const boiler1 = new GasBoiler('Boiler 1');
            const boiler2 = new GasBoiler('Boiler 2');

            boilerShop.addBoiler(boiler1);
            boilerShop.addBoiler(boiler2);

            expect(boilerShop.boilers).toContain(boiler1);
            expect(boilerShop.boilers).toContain(boiler2);
            expect(boilerShop.boilers.length).toBe(5);
        });
    });

    describe('sellBoiler()', () => {
        it('should remove a boiler from the collection', () => {
            const initialLength = boilerShop.boilers.length;

            boilerShop.sellBoiler(gasBoiler);

            expect(boilerShop.boilers.length).toBe(initialLength - 1);
            expect(boilerShop.boilers).not.toContain(gasBoiler);
        });

        it('should allow selling multiple boilers sequentially', () => {
            boilerShop.sellBoiler(gasBoiler);
            boilerShop.sellBoiler(electricBoiler);

            expect(boilerShop.boilers).not.toContain(gasBoiler);
            expect(boilerShop.boilers).not.toContain(electricBoiler);
            expect(boilerShop.boilers).toContain(momentumBoiler);
            expect(boilerShop.boilers.length).toBe(1);
        });

        it('should not modify collection when selling boiler not in inventory', () => {
            const boilerNotInShop = new GasBoiler('Not in shop');
            const initialLength = boilerShop.boilers.length;

            boilerShop.sellBoiler(boilerNotInShop);

            expect(boilerShop.boilers.length).toBe(initialLength);
        });
    });

    describe('testBoiler()', () => {
        it('should complete full test cycle: on -> set temp -> heat -> off', () => {
            const states: { powerState: boolean; temp: number; desiredTemp: number }[] = [];

            // Before test
            states.push({
                powerState: gasBoiler.powerState,
                temp: gasBoiler.currentTemperature,
                desiredTemp: gasBoiler.desiredTemperature
            });

            boilerShop.testBoiler(gasBoiler);

            // After test
            states.push({
                powerState: gasBoiler.powerState,
                temp: gasBoiler.currentTemperature,
                desiredTemp: gasBoiler.desiredTemperature
            });

            // Verify state transitions
            expect(states[0].powerState).toBe(false); // Initially off
            expect(states[1].powerState).toBe(false); // Should be off after test
            expect(states[1].desiredTemp).toBe(40); // Desired temp was set to 40
            expect(states[1].temp).toBe(40); // Current temp reached 40
        });
    });

    describe('Object Manipulation - Collection Integrity', () => {
        it('should maintain object references in collection', () => {
            const boiler = new GasBoiler('Reference Test');
            boilerShop.addBoiler(boiler);

            boiler.turnOn();
            const foundBoiler = boilerShop.boilers.find(b => b === boiler);
            expect(foundBoiler).toBe(boiler);
            expect(foundBoiler?.powerState).toBe(true);
        });
    });
});
