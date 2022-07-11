import * as React from 'react';
import InformationTab_HTML from './InformationTab_HTML/InformationTab_HTML';
import { Label, Pivot, PivotItem } from '@fluentui/react';


export default function PivotBasicExample() {
    return (
        <Pivot>
            <PivotItem
                headerText="HTML"
                headerButtonProps={{
                    'data-order': 1,
                    'data-title': 'HTML',
                }}
            >
                <InformationTab_HTML />
            </PivotItem>
            <PivotItem headerText="CSS">
                CSS
            </PivotItem>
        </Pivot>
    );
};