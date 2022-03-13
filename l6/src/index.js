import {AppRegistry} from 'react-native';
import App from './App';

AppRegistry.registerComponent('App', () => App);

AppRegistry.runApplication('App', {
  rootTag: document.getElementById('react-root'),
});

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker
      .register('./service-worker.js')
      .then(registration => console.log('Success: ', registration.scope))
      .catch(registrationError => console.log('Error: ', registrationError));
  });
}
