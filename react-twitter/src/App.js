import './App.css';
import Content from './components/Content';
import Header from './components/Header';
import ImageComp from './components/ImageComp';

function App() {
    const userInfo = [
        {
            userName: 'Suxrob',
            lastOnline: '4 hours ago',
            messege: 'My messege'
        }
    ]
    return (
        <div className="App">
            <div className="wrapper">
                <Header />
                <div className='content-wrapper'>
                    <ImageComp />
                    <Content userInfo={userInfo}/>
                </div>
            </div>
        </div>
    );
}

export default App;
