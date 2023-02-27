import React from 'react';
import downIcon from './assets/downIcon.svg';
import upIcon from './assets/upIcon.svg';
import noneIcon from './assets/noneIcon.svg';

// добавить в проект иконки и импортировать

export type SuperSortPropsType = {
    id?: string
    sort: string
    value: string
    onChange: (newSort: string) => void
}

export const pureChange = (sort: string, down: string, up: string) => {
    // пишет студент, sort: (click) => down (click) => up (click) => '' (click) => down ...
    sort = (sort === down) ? up :
        (sort === up) ? '' : down;

    return sort; // исправить
};

const SuperSort: React.FC<SuperSortPropsType> = (
    {
        sort, value, onChange, id = 'hw15',
    },
) => {
    const up = '0' + value;
    const down = '1' + value;

    const onChangeCallback = () => {
        onChange(pureChange(sort, down, up));
    };

    const icon = sort === down
        ? downIcon
        : sort === up
            ? upIcon
            : noneIcon;

    return (
        <span
            id={id + '-sort-' + value}
            onClick={onChangeCallback}
        >
            {/*сделать иконку*/}
            <img
                id={id + '-icon-' + sort}
                src={icon}
            />

        </span>
    );
};

export default SuperSort;
