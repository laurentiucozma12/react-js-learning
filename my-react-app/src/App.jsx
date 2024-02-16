// import Header from './Header.jsx'
// import Food from './Food.jsx'
// import Card from './Card.jsx'
import Student from './Student.jsx'
// import Button from './Button.jsx'
// import Footer from './Footer.jsx'

function App() {
  
  return(
    <>
      {/* <Header/>
      <Food/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Button/>
      <Footer/> */}
      <Student name="Spongebob" age={30} isStudent={true}/>
      <Student name="Patrick" age={42} isStudent={false}/>
      <Student name="Squidward" age={50} isStudent={false}/>
      <Student name="Sandy" age={27} isStudent={true}/>

    </>
  );
}

export default App
