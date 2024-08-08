export function ReadTheDocs(props: {
  /**
   * The content of the button.
   */
  children: React.ReactNode;
  /**
   * The color of the button.
   * 1 is a grayish color, and 2 is a greenish color
   */
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
