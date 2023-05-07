import { expect } from 'chai';
import proxyquire from 'proxyquire';
import sinon from 'sinon';
import Block from './Block';

const eventBusMock = {
  on: sinon.fake(),
  emit: sinon.fake(),
};

const { default: BlockMock } = proxyquire('./Block', {
  './EventBus': {
    EventBus: class {
      emit = eventBusMock.emit;

      on = eventBusMock.on;
    },
  },
}) as { default: typeof Block };

describe('Block', () => {
  class ComponentMock extends BlockMock {
  }

  it('should fire init event on initialization', () => {
    new ComponentMock({});

    expect(eventBusMock.emit.calledWith('init')).to.eq(false);
  });
});
