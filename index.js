
const spy = a => a+a

const receivesAFunction = spy => spy()

const returnsANamedFunction = () => spy

const returnsAnAnonymousFunction = () => (a,b) => a-b