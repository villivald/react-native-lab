import {Home} from './Home';
import {Settings} from './Settings';
import {Watch} from './Watch';

// interface View {
//     key: String;
//     symbol: String;
//     component: () => JSX.Element
// }

export default [
  {
    key: 'home',
    symbol: '🏠',
    component: Home,
  },
  {
    key: 'settings',
    symbol: '💻',
    component: Settings,
  },
  {
    key: 'time',
    symbol: '⏰',
    component: Watch,
  },
];
