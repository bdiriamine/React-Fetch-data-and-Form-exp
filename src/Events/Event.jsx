export default function Event() {
  const HandleEvent = () => {
    alert("boooù!!");
  };
  return (
    <div>
      <button onClick={HandleEvent}> Click Me </button>
    </div>
  );
}
