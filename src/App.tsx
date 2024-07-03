import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/header';
import TabContent from './components/tabs.content';

function App() {

  return (
    <>
      <Header />
      <div style={{ maxWidth: '1800px', margin: 'auto' }}>
        <TabContent />
      </div >
    </>
  )
}

export default App
