import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import store from './redux/store';
import App from './App';

test('renders correctly', () => {
  const tree = renderer
    .create(
      <Provider store={store}>
        <App />
      </Provider>,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
