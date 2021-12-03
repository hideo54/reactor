import React, { ComponentProps } from 'react';
import Link, { LinkProps } from 'next/link';
import type { StyledIcon } from '@styled-icons/styled-icon';

export const IconSpan: React.FC<{
    LeftIcon?: StyledIcon;
    RightIcon?: StyledIcon;
    color?: string;
    fontSize?: string;
    margin?: string;
}> = ({
    LeftIcon,
    RightIcon,
    color,
    fontSize,
    margin,
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
            style={{
                color,
                fontSize,
                margin,
            }}
        >
            {contents}
        </span>
    );
};

export const IconAnchor: React.FC<
    ComponentProps<typeof IconSpan> & {
        href?: string;
    }
> = props => (
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
    Omit<ComponentProps<typeof IconAnchor>, 'href'> & {
        href: LinkProps['href']; // string | UrlObject
    }
> = props => {
    const { href, ...propsWithoutHref } = props; // separates href from props, otherwise UrlObject could be passed into <a> by IconAnchor
    return (
        <Link href={href} passHref>
            <IconAnchor {...propsWithoutHref} />
        </Link>
    );
};

