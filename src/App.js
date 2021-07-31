import React from 'react';
import './App.css';


// keep track of a variable showContent : <Boolean>
// function that we can trigger which  will set true/false
// call that function when the button is clicked

// condtionially render some content based on the new state variable

class App extends React.Component {

  state = {showContent: false}

  handleShowPage = () => {
    const {showContent} = this.state;
    this.setState({showContent: !showContent})
  }

  render(){
    const {showContent} = this.state;
    return (
      <div class="App">

        {showContent && <div class="content">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro at, itaque eos facere blanditiis unde similique laboriosam ipsa, delectus tempore magni corporis doloremque quia omnis velit enim totam atque dolor ut nulla, sit voluptas perspiciatis? Maiores voluptas non enim iure perferendis explicabo, quam odit praesentium facilis minima blanditiis placeat rem!
        </div>}
        <button onClick={this.handleShowPage}>Show/Hide</button>
      </div>
      );
  }
}
// function App() {
//   return (
//   <div class="App">

//     <div class="content">
//       Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro at, itaque eos facere blanditiis unde similique laboriosam ipsa, delectus tempore magni corporis doloremque quia omnis velit enim totam atque dolor ut nulla, sit voluptas perspiciatis? Maiores voluptas non enim iure perferendis explicabo, quam odit praesentium facilis minima blanditiis placeat rem!
//     </div>
//     <button>Show/Hide</button>
//   </div>
//   );
// }

export default App;
