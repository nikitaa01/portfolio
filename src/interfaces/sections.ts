export default interface Section {
    symbol: Symbol
    path: string
    id: string
    name: string
    Component: () => JSX.Element
}