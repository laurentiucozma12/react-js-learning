function Button() {
  const styles = {
    backgroundColor: "hsl(200, 100%, 50%)",
    color: "white",
    padding: "10px 20px",
    borderRadius: "5px",
    border: "none",
    cursor: "pointer",
  };

  ////// Example 1
  // const handleClick2 = (name) => console.log(`${name} stop clicking me`);

  // You must add () => when you want to use click events, otherwise it will click it when page loads
  // return(<button style={styles} onClick={handleClick2("EGN")}>Click me 😎</button>);
  // return(<button style={styles} onClick={() => handleClick2("EGN")}>Click me 😎</button>);

  ////// Example 2
  // let count = 0;

  // const handleClick = (name) => {
  //     if (count < 3) {
  //         count++
  //         console.log(`${name} you clicked me ${count} times`)
  //     } else {
  //         console.log(`${name} stop clicking me`)
  //     }
  // };
  // return(<button style={styles} onClick={() => handleClick("EGN")}>Click me 😎</button>)

  ////// Example 3
  const handleClick = (e) => (e.target.textContent = "Ouch 🤕");

  return (
    <button style={styles} onDoubleClick={(e) => handleClick(e)}>
      Click me 😎
    </button>
  );
}
export default Button;
