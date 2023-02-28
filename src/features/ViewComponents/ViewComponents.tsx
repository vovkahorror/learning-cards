import React from 'react';
import {SuperSelect} from "components/SuperSelect/SuperSelect";
import {SuperInputText} from "components/SuperInputText/SuperInputText";
import {SuperRadio} from "components/SuperRadio/SuperRadio";
import {SuperCheckbox} from "components/SuperCheckbox/SuperCheckbox";
import SuperEditableSpan from "components/SuperEditableSpan/SuperEditableSpan";
import {SuperButton} from "components/SuperButton/SuperButton";

const arrFromSelect = [
    {id: 1, value: 'one'},
    {id: 2, value: 'two'},
    {id: 3, value: 'three'},
] // value from select

export const ViewComponents = () => {
    return (
        <div>
            <div style={{margin: '20px'}}>
                <SuperSelect options={arrFromSelect}/>
            </div>

            <div style={{margin: '20px', display: 'flex'}}>
                <SuperInputText/>
                <SuperInputText error={'error'}/>
            </div>

            <div style={{margin: '20px'}}>
                <SuperRadio options={arrFromSelect} value={2}/>
            </div>

            <div style={{margin: '20px'}}>
                <SuperButton>Default Button</SuperButton>
                <SuperButton variant={'secondary'}>Secondary Button</SuperButton>
                <SuperButton variant={'red'}>Red Button</SuperButton>
                <SuperButton disabled>Disabled Button</SuperButton>
            </div>

            <div style={{margin: '20px'}}>
                <SuperCheckbox>Checkbox</SuperCheckbox>
            </div>

            <div style={{margin: '20px'}}>
                <SuperEditableSpan value={'123123123'}/>
            </div>
        </div>
    )
}
