import React from 'react';
import SuperInputText from '../../../n1-main/m1-ui/common/c1-SuperInputText/SuperInputText';
import SuperButton from '../../../n1-main/m1-ui/common/c2-SuperButton/SuperButton';
import SuperCheckbox from '../../../n1-main/m1-ui/common/c3-SuperCheckbox/SuperCheckbox';
import SuperEditableSpan from '../../../n1-main/m1-ui/common/c4-SuperEditableSpan/SuperEditableSpan';
import SuperSelect from '../../../n1-main/m1-ui/common/c5-SuperSelect/SuperSelect';
import SuperRadio from '../../../n1-main/m1-ui/common/c6-SuperRadio/SuperRadio';
import SuperRange from '../../../n1-main/m1-ui/common/c7-SuperRange/SuperRange';
import SuperDebouncedInput from '../../../n1-main/m1-ui/common/c8-SuperDebouncedInput/SuperDebouncedInput';
import SuperPagination from '../../../n1-main/m1-ui/common/c9-SuperPagination/SuperPagination';
import SuperSort from '../../../n1-main/m1-ui/common/c10-SuperSort/SuperSort';

const TestPage = () => {
    return (
        <div>
            <SuperInputText/>
            <SuperButton/>
            <SuperCheckbox/>
            <SuperEditableSpan/>
            <SuperSelect/>
            <SuperRadio/>
            <SuperRange/>
            <SuperDebouncedInput/>
            <SuperPagination page={1} itemsCountForPage={1} totalCount={1} onChange={() => {}}/>
            <SuperSort sort={''} value={''} onChange={() => {}}/>
        </div>
    );
};

export default TestPage;