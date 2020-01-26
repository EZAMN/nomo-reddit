import '../../common';
import Throttle from '../../../components/Common/Throttle';


describe('Throttle', () => {
  let throttleIns;

  beforeEach(() => {
    throttleIns = new Throttle();
  });


  it('should only allow 1 change per second', () => {
    let count = 3;
    throttleIns.trigger(() => { count += 1; });
    throttleIns.trigger(() => { count += 1; });
    throttleIns.trigger(() => { count += 1; });
    count.should.be.equal(4);
  });

  it('should allow the next function call after 1 second', async () => {
    let count = 3;

    const timeout = () => new Promise((resolve) => setTimeout(() => { throttleIns.trigger(() => { count += 1; }); resolve(); }, 1001));

    await timeout();
    count.should.be.equal(4);
  });
});
