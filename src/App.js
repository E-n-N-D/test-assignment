import './App.css';
import PageBox from './components/page';
import Line from './components/line';
import Scroller from './components/scroller';
import SubmitButton from './components/submitButton';

function App() {
  const pages = Array.from({ length: 6 }, (_, index) => <PageBox key={index} pageText={`Page ${index + 1}`} />);
  return (
    <div className='frame'>
      <div className='page-container'>
        <PageBox pageText="All pages" />
        <Line />
        <Scroller pages={pages} />
        <Line />
        <SubmitButton />
      </div>
    </div>
  );
}

export default App;
