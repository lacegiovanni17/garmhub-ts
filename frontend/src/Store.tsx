import React from 'react'

type AppState = {
    mode: string
    cart: Cart
};

const initialState: AppState = {
    mode: localStorage.getItem("mode")
        ? localStorage.getItem("mode")!
        : window.matchMedia &&
            window.matchMedia("(prefers-color-scheme: dark)").matches
            ? "dark"
            : "light",
    cart: {
        cartItems: localStorage.getItem('cartItems')
            ? JSON.parse(localStorage.getItem('cartItems')!)
        : [],
        shippingAddress: localStorage.getItem('shippingAddress')
            ? JSON.parse(localStorage.getItem('shippingAddress')!)
        : {},
        paymentMethod: localStorage.getItem('paymentMethod')
            ? JSON.parse(localStorage.getItem('paymentMethod')!)
        : 'PayPal',
        itemsPrice: 0,
        shippingPrice: 0,
        taxPrice: 0,
        totalPrice: 0
    },
}

type Action = { type: 'SWITCH_MODE' }

function reducer(state: AppState, action: Action): AppState {
    switch (action.type) {
        case 'SWITCH_MODE':
            return { mode: state.mode === 'dark' ? 'light' : 'dark' }
        default:
            return state
    }
}

const defaultDispatch: React.Dispatch<Action> = () => initialState

const Store = React.createContext({
    state: initialState,
    dispatch: defaultDispatch,
})

function StoreProvider(props: React.PropsWithChildren<{}>) {
    const [state, dispatch] = React.useReducer<React.Reducer<AppState, Action>>(
        reducer,
        initialState
    )
    return <Store.Provider value={{state, dispatch}} {...props}/>
}

export { Store, StoreProvider }