export function Title(props: { children: React.ReactNode }) {
  return (
    <h1
      style={{
        fontSize: "3.2em",
        lineHeight: "1.1",
      }}
    >
      {props.children}
    </h1>
  );
}
