// Generated by BUCKLESCRIPT, PLEASE EDIT WITH CARE

import * as React from "react";
import * as ReactDOMRe from "reason-react/src/ReactDOMRe.js";
import * as App$WildCards from "./App.bs.js";
import * as StewardAbiJson from "./steward-abi.json";
import * as UsdPriceProvider$WildCards from "./lib/UsdPriceProvider.bs.js";
import * as WildcardsProvider$WildCards from "./lib/WildcardsProvider.bs.js";

var stewardAbi = StewardAbiJson.default;

ReactDOMRe.renderToElementWithId(React.createElement(WildcardsProvider$WildCards.make, {
          graphEndpoint: "api.thegraph.com/subgraphs/name/wildcards-world/harberger-sample-graph",
          children: React.createElement(UsdPriceProvider$WildCards.make, {
                children: React.createElement(App$WildCards.make, { })
              }),
          stewardContractAddress: "0x4bE0Eab8f41c8109AA134509086Cbcb18b10C0fB",
          stewardAbi: stewardAbi
        }), "root");

export {
  stewardAbi ,
  
}
/* stewardAbi Not a pure module */
