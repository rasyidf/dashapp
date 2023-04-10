type AddProps = {
  num1: number;
  num2: number;
};

export function Add({ num1, num2 }: AddProps) {
  return (
    <div className="add">
      <h1>{num1 + num2}</h1>
    </div>
  );
}
