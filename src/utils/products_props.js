
import { shirtsLoaded, jacketsLoaded, accessoriesLoaded } from '../redux/reducers';

  export const shirtProps = {
    resourcePath: 'shirts',
    productSelector: state => state.products.shirts,
    eventDispatcher: shirtsLoaded
  };

  export const jacketProps = {
    resourcePath: 'jackets',
    productSelector: state => state.products.jackets,
    eventDispatcher: jacketsLoaded
  };

  export const accessoriesProps = {
    resourcePath: 'accessories',
    productSelector: state => state.products.accessories,
    eventDispatcher: accessoriesLoaded
  };

