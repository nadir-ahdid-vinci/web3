import React, { useState } from "react";

const Context = React.createContext(null);

const ProviderWrapper = ({children}) => {




    const exposedValue = {

    }

    return <Context.Provider value={exposedValue}>{children}</Context.Provider>;
}

export { Context, ProviderWrapper}