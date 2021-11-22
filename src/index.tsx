import React, { ComponentProps } from 'react';
import styled from 'styled-components';
import type { StyledIcon } from '@styled-icons/styled-icon';

export const IconSpan: React.FC<{
    LeftIcon?: StyledIcon;
    RightIcon?: StyledIcon;
    color?: string;
    fontSize?: string;
}> = ({
    LeftIcon,
    RightIcon,
    color,
    fontSize,
    children,
}) => {
    const contents = <>
        {LeftIcon &&
            <LeftIcon
                size='1.2em'
                style={{
                    color,
                    verticalAlign: 'text-bottom',
                    marginRight: '0.1em',
                }}
            />
        }
        {children}
        {RightIcon &&
            <RightIcon
                size='1.2em'
                style={{
                    color,
                    verticalAlign: 'text-bottom',
                    marginLeft: '0.1em',
                }}
            />
        }
    </>;
    return (
        <span
            color={color}
            style={{
                fontSize,
            }}
        >
            {contents}
        </span>
    );
};

export const IconLink: React.FC<ComponentProps<typeof IconSpan> & {
    href?: string;
}> = props => {
    return (
        <a
            href={props.href}
            style={{
                color: props.color,
                fontSize: props.fontSize,
            }}
            {...!props.href?.startsWith('/') && {
                target: '_blank',
                rel: 'noreferrer noopener',
            }}
        >
            <IconSpan {...props}>
                {props.children}
            </IconSpan>
        </a>
    );
};

export const ColorfulSlider = styled.input.attrs({
    type: 'range',
})<{
    color: string;
    backgroundColor?: string;
    value: number;
}>`
    width: 100%;
    margin-top: 24px;
    outline: none;
    -webkit-appearance: none;
    background-color: transparent;
    &::-moz-range-track {
        background-color: ${props => props.backgroundColor || 'lightgray'};
        height: 8px;
        border-radius: 4px;
    }
    &::-moz-range-progress {
        background-color: ${props => props.color};
        height: 8px;
        border-radius: 4px;
    }
    &::-moz-range-thumb {
        background-color: ${props => props.color};
        width: 24px;
        height: 24px;
        border: none;
        border-radius: 12px;
        cursor: pointer;
    }
    &::-webkit-slider-runnable-track {
        -webkit-appearance: none;
        width: 100%;
        height: 8px;
        border-radius: 4px;
        background: ${props => `linear-gradient(to right, ${props.color} ${props.value * 50}%, lightgray ${props.value}% 100%)`};
    }
    &::-webkit-slider-thumb {
        -webkit-appearance: none;
        background-color: ${props => props.color};
        margin-top: -8px;
        width: 24px;
        height: 24px;
        border-radius: 12px;
        cursor: pointer;
    }
`;
