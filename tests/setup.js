// import requestAnimationFrame from '../src/__tests__/tempPolyfills';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

global.fetch = require('jest-fetch-mock');
Enzyme.configure({ adapter: new Adapter(), disableLifecycleMethods: true });
