import styled from 'styled-components';

const describeBackgroundGradient = (props: {
    color: string;
    backgroundColor?: string;
    value: number;
    min: number;
    max: number;
}) => {
    const valuePercent = 100 * (props.value - props.min) / (props.max - props.min);
    const gradientElements = [
        'to right',
        `${props.color} ${valuePercent}%`,
        `${props.backgroundColor || 'lightgray'} 0% 100%`,
    ];
    return `linear-gradient(${gradientElements.join(', ')})`;
};

export const ColorfulSlider = styled.input.attrs({
    type: 'range',
})<{
    color: string;
    backgroundColor?: string;
    value: number;
    min: number;
    max: number;
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
        background: ${describeBackgroundGradient};
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
