import './App.css';
import Navbar from './Components/navbar/Navbar'
import Header from './Components/header/Header'
import Dishes from './Components/dishes/Dishes'
import Description from './Components/description/Description';
import Footer from './Components/footer/Footer';
// import Form from './Components/form/Form'
import CommentList from './Components/commentList/CommentList'


function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Dishes />
      <Description />
      {/* <Form /> */}
      <CommentList />
      <Footer />
    </div>
  );
}


export default App;
