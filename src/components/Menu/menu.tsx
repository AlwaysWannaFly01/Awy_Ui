import React, {createContext, useState} from "react";
import classNames from "classnames";
import {MenuItemProps} from './menuItem'

type MenuMode = 'horizontal' | 'vertical';

type SelectedCallback = (selectedIndex: number) => void

export interface MenuProps {
    defaultIndex?: number,
    className?: string,
    mode?: MenuMode;
    style?: React.CSSProperties; //加自定义的style
    onSelect?: SelectedCallback
}

interface IMenuContext {
    index: number;
    onSelect?: SelectedCallback
}

export const MenuContext = createContext<IMenuContext>({index: 0})

const Menu: React.FC<MenuProps> = props => {
    // console.log(props)
    const {className, mode, style, children, defaultIndex, onSelect} = props
    const [currentActive, setActive] = useState(defaultIndex)

    const classes = classNames('awy-menu', className, {
        'menu-vertical': mode === 'vertical'
    })

    const handleClick = (index: number) => {
        console.log(index)
        setActive(index);
        if (onSelect) {
            onSelect(index)
        }
    }
    const passedContext: IMenuContext = {
        index: currentActive ? currentActive : 0,
        onSelect: handleClick
    }
    const renderChildren = () => {
        return React.Children.map(children, (child, index) => {
            const childElement = child as React.FunctionComponentElement<MenuItemProps>
            const {displayName} = childElement.type
            if (displayName === 'MenuItem') {
                /*以element元素为样板克隆并返回新的React元素,第二个参数为想要复制的属性*/
                return React.cloneElement(childElement, {
                    index
                })
            } else {
                console.error('Warning:Mneu has a child which is not a MenuItem component')
            }
        })
    }
    return (
        <ul className={classes} style={style} data-testid='test-menu'>
            <MenuContext.Provider value={passedContext}>
                {renderChildren()}
            </MenuContext.Provider>
        </ul>
    )
}

Menu.defaultProps = {
    defaultIndex: 0,
    mode: 'horizontal'
}

export default Menu;