import React from 'react'
import Button, {ButtonSize, ButtonType} from './components/Button/button'
import Menu from "./components/Menu/menu";
import MenuItem from "./components/Menu/menuItem";
import SubMenu from "./components/Menu/subMenu";
const App: React.FC = () => {
    return (
        <div className="App">
            <header className="App-header">
                <Menu defaultIndex={0} onSelect={(index) => {
                    // alert(index)
                }} mode="vertical">
                    <MenuItem>
                        link1
                    </MenuItem>
                    <MenuItem  disabled>
                        link2
                    </MenuItem>
                    <SubMenu title='dropdown'>
                        <MenuItem>
                            dropdown1
                        </MenuItem>
                        <MenuItem>
                            dropdown2
                        </MenuItem>
                    </SubMenu>
                    <MenuItem>
                        link3
                    </MenuItem>
                </Menu>


                {/*<Menu defaultIndex={0} mode="vertical">
                    <MenuItem index={0}>
                        link1
                    </MenuItem>
                    <MenuItem index={1} disabled>
                        link2
                    </MenuItem>
                    <MenuItem index={2}>
                        link3
                    </MenuItem>
                </Menu>*/}
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

                <Button loading btnType={ButtonType.Danger} size={ButtonSize.Small}>loading</Button>
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
