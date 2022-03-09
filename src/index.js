// If you want to use Reason-React uncomment the below line and remove the rest of the content of this file.
// import "./examplejAppInReasonML/Index.bs.js";

import { make as WildcardsProvider } from "./harberger-lib/components/WildcardsProvider.gen";
import { make as UsdPriceProvider } from "./harberger-lib/components/UsdPriceProvider.gen";
import App from "./App";
import React from "react";
import ReactDOM from "react-dom";

ReactDOM.render(
  <WildcardsProvider
    stewardContractAddress="0xa6CB4724b8F4ED7B77a2FF4D779F44780e9c57C3"
    graphEndpoint="api.thegraph.com/subgraphs/name/sturench/mtharberger"
  >
    <UsdPriceProvider>
      <App />
    </UsdPriceProvider>
  </WildcardsProvider>,
  document.getElementById("root")
);
