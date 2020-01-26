import '../../common';
import literals from '../../../config/literals';


describe('Literals', () => {
  it('should be an object', () => {
    literals.should.be.a('Object');
  });

  it('should have a header key', () => {
    literals.header.should.exist;
  });
});
