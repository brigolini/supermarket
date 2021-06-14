import {BrowserRouter} from "react-router-dom";
import { Route, Switch } from "react-router";
import {
    QueryClient,
    QueryClientProvider,
} from 'react-query';
import ProductList from "./pages/ProductList/ProductList.page";
import ProductDetails from "./pages/ProductDetails/ProductDetails.page";

const queryClient = new QueryClient();
const App = () => {
    return (
        <BrowserRouter forceRefresh={false}>
            <QueryClientProvider client={queryClient}>
                <Switch>
                    <Route
                        key="ProductList"
                        exact
                        path="/list"
                        component={ProductList}
                    />
                    <Route
                        key="ProductDetails"
                        path="/details/:id"
                        component={ProductDetails}
                    />
                </Switch>

            </QueryClientProvider>
        </BrowserRouter>

)
;
};

export default App;
