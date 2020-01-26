import 'jsdom-global/register';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

const chai = require('chai');

chai.should();
chai.config.includeStack = true;

process.env.NODE_ENV = 'test';
