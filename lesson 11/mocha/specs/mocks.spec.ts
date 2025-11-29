import { expect } from 'chai';
import { describe, it, beforeEach, afterEach } from 'mocha';
import * as sinon from 'sinon';
import { GasBoiler } from '../src/gas-boiler';
import { ElectricBoiler } from '../src/electric-boiler';

describe('Mocks and Stubs Tests', () => {
    let sandbox: sinon.SinonSandbox;
    let gasBoiler: GasBoiler;
    let electricBoiler: ElectricBoiler;
    let consoleLogStub: sinon.SinonStub;

    beforeEach(() => {
        sandbox = sinon.createSandbox();
        gasBoiler = new GasBoiler('TestGasBoiler');
        electricBoiler = new ElectricBoiler('TestElectricBoiler');
        consoleLogStub = sandbox.stub(console, 'log');
    });

    afterEach(() => {
        sandbox.restore();
    });

    // Test 1: Stub console.log and verify it's called with specific arguments
    it('should stub console.log and verify heatWater logs gas burning message', () => {
        gasBoiler.turnOn();
        gasBoiler.setTemperature(22);
        gasBoiler.heatWater();

        expect(consoleLogStub.called).to.be.true;
        expect(consoleLogStub.callCount).to.equal(2);
        const firstCall = consoleLogStub.getCall(0);
        expect(firstCall.args[0]).to.include('Gas is burning');
    });

    // Test 2: Mock a function to replace its implementation
    it('should mock ElectricBoiler.getCurrentTemperature to return a specific value', () => {
        const getCurrentTemperatureMock = sandbox.mock(electricBoiler);
        getCurrentTemperatureMock.expects('getCurrentTemperature').once().returns(50);

        const temperature = electricBoiler.getCurrentTemperature();

        expect(temperature).to.equal(50);
        getCurrentTemperatureMock.verify();
    });

    // Test 3: Stub object methods to test behavior without side effects
    it('should stub turnOn and turnOff to verify they are called in sequence', () => {
        const turnOnSpy = sandbox.spy(gasBoiler, 'turnOn');
        const turnOffSpy = sandbox.spy(gasBoiler, 'turnOff');

        gasBoiler.turnOn();
        gasBoiler.setTemperature(25);
        gasBoiler.turnOff();

        expect(turnOnSpy.calledOnce).to.be.true;
        expect(turnOffSpy.calledOnce).to.be.true;
        expect(turnOnSpy.calledBefore(turnOffSpy)).to.be.true;
    });

    // Test 4: Create a spy to verify heatWater is called with correct context
    it('should track and verify method call arguments using spy', () => {
        const setTemperatureSpy = sandbox.spy(electricBoiler, 'setTemperature');

        electricBoiler.setTemperature(40);
        electricBoiler.setTemperature(50);

        expect(setTemperatureSpy.callCount).to.equal(2);
        expect(setTemperatureSpy.firstCall.calledWith(40)).to.be.true;
        expect(setTemperatureSpy.secondCall.calledWith(50)).to.be.true;
    });

    // Test 5: Mock heatWater to prevent side effects and verify it's called correctly
    it('should mock heatWater method to prevent logging and verify call chain', () => {
        const heatWaterStub = sandbox.stub(gasBoiler, 'heatWater');
        gasBoiler.turnOn();
        gasBoiler.setTemperature(30);
        gasBoiler.heatWater();

        expect(heatWaterStub.calledOnce).to.be.true;
        expect(gasBoiler.powerState).to.be.true;
        expect(gasBoiler.desiredTemperature).to.equal(30);
        // Verify console.log was NOT called since heatWater was stubbed
        expect(consoleLogStub.called).to.be.false;
    });
});
