type BoxProps = {
  title: string;
  color?: string;
};


export function Box({ title, color }: BoxProps) {
  return (
    <div className="box" style={{ background: color }}>
      <h1>Box {title}</h1>
    </div>
  );
}
