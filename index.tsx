import React, { ComponentProps } from 'react';
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
