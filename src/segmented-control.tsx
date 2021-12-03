import React, { useState } from 'react';
import styled from 'styled-components';

const RadioLabel = styled.label<{
    color: string;
}>`
    display: inline-block;
    margin-bottom: 0.5em;
    border: solid ${props => props.color};
    padding: 0.2em 1.8em;
    cursor: pointer;
    user-select: none;
    border-width: 2px 1px;
    &:first-of-type {
        border-left-width: 2px;
    }
    &:last-of-type {
        border-right-width: 2px;
    }
`;

const RadioInput = styled.input<{
    color: string;
    backgroundColor: string;
}>`
    display: none;
    &:checked + ${RadioLabel} {
        color: white;
        font-weight: bold;
        background-color: ${props => props.color};
    }
    &:focus-visible + ${RadioLabel} {
        outline: ${props => props.backgroundColor} solid 2px;
    }
`;

export const SegmentedControl: React.VFC<{
    id: string;
    value: string;
    options: {
        id: string;
        name: string;
    }[];
    color: string;
    backgroundColor?: string;
}> = props => {
    const [selectedOptionId, setSelectedOptionId] = useState(props.value);
    return (
        <div>
            {props.options.map(option => (
                <React.Fragment key={option.id}>
                    <RadioInput
                        type='radio'
                        name={props.id}
                        id={option.id}
                        checked={option.id === selectedOptionId}
                        color={props.color}
                        backgroundColor={props.backgroundColor || 'white'}
                        onChange={() => {
                            setSelectedOptionId(option.id);
                        }}
                    />
                    <RadioLabel
                        htmlFor={option.id}
                        color={props.color}
                    >
                        {option.name}
                    </RadioLabel>
                </React.Fragment>
            ))}
        </div>
    );
};
