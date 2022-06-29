import React, { type MouseEventHandler, type ComponentProps, type ReactNode } from 'react';
import Link, { type LinkProps } from 'next/link';
import type { StyledIcon } from '@styled-icons/styled-icon';

export const IconSpan: React.FC<{
    LeftIcon?: StyledIcon;
    RightIcon?: StyledIcon;
    color?: string;
    size?: string;
    fontSize?: string;
    margin?: string;
    children?: ReactNode;
    onClick?: MouseEventHandler<HTMLAnchorElement>;
}> = ({
    LeftIcon,
    RightIcon,
    color,
    size,
    fontSize,
    margin,
    children,
    onClick,
}) => {
    const contents = <>
        {LeftIcon &&
            <LeftIcon
                size={size || '1.2em'}
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
                size={size || '1.2em'}
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
            style={{
                color,
                fontSize,
                margin,
            }}
            onClick={onClick}
        >
            {contents}
        </span>
    );
};

export const IconAnchor: React.FC<ComponentProps<typeof IconSpan> & {
    href?: string;
}> = props => (
    <a
        href={props.href}
        style={{
            color: props.color,
            fontSize: props.fontSize,
            margin: props.margin,
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

export const IconNextLink: React.FC<
    ComponentProps<typeof IconSpan> & {
        href: LinkProps['href']; // string | UrlObject
    }
> = props => {
    return (
        <Link href={props.href} passHref>
            <a style={{
                color: props.color,
                fontSize: props.fontSize,
                margin: props.margin,
            }}>
                <IconSpan {...props}>
                    {props.children}
                </IconSpan>
            </a>
        </Link>
    );
};
