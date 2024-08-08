export function Card(props: { children: React.ReactNode, padding: number }) {
    return (
        <div style={{ padding: `${props.padding}em` }}>{props.children}</div>
    )
}