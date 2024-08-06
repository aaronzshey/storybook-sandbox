export function ReadTheDocs(props: {
  children: React.ReactNode;
  colorId: number;
}) {
  const textColor: string = props.colorId === 1 ? "#888" : "#890";
  return (
    <p
      style={{
        color: textColor,
      }}
    >
      {props.children}
    </p>
  );
}
