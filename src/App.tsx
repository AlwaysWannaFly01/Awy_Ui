import React from 'react'
import Button, {ButtonSize, ButtonType} from './components/Button/button'

const App: React.FC = () => {
    return (
        <div className="App">
            <header className="App-header">
                <Button onClick={(e) => {
                    e.preventDefault();
                    alert(44)
                }}
                className="custom"
                >Hello</Button>
                <Button disabled>Hello</Button>
                <Button btnType={ButtonType.Primary} size={ButtonSize.Large}>Hello</Button>
                <Button btnType={ButtonType.Primary} size={ButtonSize.Small}>Hello</Button>
                <Button btnType={ButtonType.Link} href="http://www.baidu.com" target="_blank">Baidu</Button>
                <Button btnType={ButtonType.Link} href="http://www.baidu.com" disabled>Baidu disabled</Button>
                <p>
                    Edit <code>src/App.tsx</code> and save to reload.
                </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer">
                    Learn React
                </a>
            </header>
        </div>
    )
}

export default App
