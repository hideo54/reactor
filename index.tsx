import React, { ReactNode } from 'react';
import styled from 'styled-components';
import { StyledIcon } from '@styled-icons/styled-icon';

const A = styled.a<{
    color?: string;
    fontSize?: string;
}>`
    ${props => props.color ? `
        color: ${props.color};
    ` : ''}
    ${props => props.fontSize ? `
        font-size: ${props.fontSize};
    ` : ''}
`;

export const IconLink = ({
    LeftIcon,
    RightIcon,
    href,
    color,
    fontSize,
    alt,
    children,
}: {
    LeftIcon?: StyledIcon;
    RightIcon?: StyledIcon;
    href?: string;
    color?: string;
    fontSize?: string;
    alt?: string;
    children?: ReactNode;
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
        {children &&
            <span style={{
                color,
                lineHeight: '1.5em',
            }}>
                {children}
            </span>
        }
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
        <A
            href={href}
            aria-label={alt}
            color={color}
            fontSize={fontSize}
            {...!href?.startsWith('/') && {
                target: '_blank',
                rel: 'noreferrer noopener',
            }}
        >
            {contents}
        </A>
    );
};
