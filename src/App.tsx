import { useState } from 'react';
import './App.css';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import StraightIcon from '@mui/icons-material/Straight';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

function App() {
  const [cards] = useState([
    {
      title: 'You can buy ',
      text: ` you have here a buch of 
      options waiting for you . just buy
      and make yourself happy `
    },

    {
      title: 'What woud you like ',
      text: `you have here a buch of 
      options waiting for you . just buy
      and make yourself happy`
    },

    {
      title: 'Get yourself',
      text: `you have here a buch of 
      options waiting for you . just buy
      and make yourself happy`
    },

    {
      title: 'card-4',
      text: ` you have here a buch of 
      options waiting for you . just buy
      and make yourself happy`
    },

    {
      title: 'card-5',
      text: ` you have here a buch of 
      options waiting for you . just buy
      and make yourself happy`
    },

    {
      title: 'your chance ',
      text: ` you have here a buch of 
      options waiting for you . just buy
      and make yourself happy `
    },
  ])
  return (
    <div>
      <form className='box2'>
        <input id='input' type='text' placeholder='seach here' />
      </form>
      <form className='box'>
        <i className="fas fa-search"></i>
        &raquo;
        <div className='page'>
          <a href=''>&raquo;</a>
          <a href='#'>1</a>
          <a href='#'>2</a>
          <a href='#'>3</a>
          <a href='#'>4</a>
          <a href='#'>5</a>
          <a href='#'>6</a>
          <a href='#'>7</a>
          <a href=''>&raquo;</a>

        </div>

      </form>
      <section>
        <div className='container'>
          <h1> Learn cypress</h1>
          <div className='cards'>
            {cards.map((card, i) => (
              <div className='card'>

                {< ArrowForwardIcon sx={{ color: 'red', justifyItems: 'center', margen: 'auto', width: '420px' }} > </ArrowForwardIcon>}
                <div className='car2'>
                  <h4>there</h4>
                </div>
                <h3>{card.title}</h3>
                <p> {card.text} </p>
                <button id='bt' className='btn'>Share </button>
                {< StraightIcon sx={{ color: 'blue', float: 'right', position: "20px", top: "2px" }} />}
                {< NavigateNextIcon sx={{ color: 'brown', float: 'right', position: "20px", top: "2px" }} />}
                <p>Hello</p>
              </div>

            ))}

          </div>
        </div>
      </section>

    </div>
  );
}

export default App;