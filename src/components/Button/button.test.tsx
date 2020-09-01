import React from "react";
import {fireEvent, render} from '@testing-library/react';
import Button, {ButtonProps, ButtonSize, ButtonType} from './button';

const defaultProps = {
    onClick: jest.fn()
}

const testProps: ButtonProps = {
    btnType: ButtonType.Primary,
    size: ButtonSize.Large,
    className: 'asd'
}

const disabledProps: ButtonProps = {
    disabled: true,
    onClick: jest.fn()
}

test('our first test case', () => {
    const wrapper = render(
        <Button>Nice</Button>
    )
    const element = wrapper.queryByText('Nice')
    expect(element).toBeTruthy()
    expect(element).toBeInTheDocument()
})

describe('test Button component', () => {
    it('should render the correct default button', () => {
        const wrapper = render(
            <Button {...defaultProps}>Nice</Button>
        )
        const element = wrapper.getByText('Nice') as HTMLButtonElement
        expect(element).toBeInTheDocument()

        expect(element.tagName).toEqual('BUTTON')
        expect(element).toHaveClass('btn btn-default')

        // fireEvent(
        //     element,
        //     new MouseEvent('click', {
        //         bubbles: true,
        //         cancelable: true,
        //     })
        // )
        fireEvent.click(element)
        expect(defaultProps.onClick).toHaveBeenCalled();
        expect(element.disabled).toBeFalsy()
    })

    it('should render the correct component based on different props', () => {
        const wrapper = render(
            <Button {...testProps}>Nice</Button>
        )
        const element = wrapper.getByText('Nice')
        expect(element).toBeInTheDocument()

        expect(element).toHaveClass('btn-primary btn-lg asd')
    })

    it('should render a link wehen btnType  equals link and href is provided', () => {
        const wrapper = render(
            <Button btnType={ButtonType.Link} href="http://www.baidu.com">Link</Button>
        )
        const element = wrapper.getByText('Link')
        expect(element).toBeInTheDocument()
        expect(element.tagName).toEqual('A')
        expect(element).toHaveClass('btn btn-link')
    })
    it('should render disabled button when disabled set to true', () => {
        const wrapper = render(
            <Button {...disabledProps}>Nice</Button>
        )
        const element = wrapper.getByText('Nice') as HTMLButtonElement
        expect(element).toBeInTheDocument()
        expect(element.disabled).toBeTruthy()

        fireEvent.click(element)
        expect(disabledProps.onClick).not.toHaveBeenCalled() //onCLick事件没有被调用
    })
})