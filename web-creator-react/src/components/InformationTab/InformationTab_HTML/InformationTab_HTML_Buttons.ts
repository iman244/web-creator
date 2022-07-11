import { IContextualMenuProps } from '@fluentui/react';
import { DefaultButton } from "@fluentui/react";

const Text_menuProps =
    [
        {
            key: "p",
            text: "paragraph"
        },
        {
            key: "span",
            text: "span"
        },
    ]


const Container_menuProps = {
    items: [
        {
            key: "p",
            text: "paragraph"
        },
        {
            key: "span",
            text: "span"
        },
    ],
}


export default function HTMLButtons() {

    return (
        <div id="InformationTab_HTML_Buttons">
            <DefaultButton
                text="Text"
                split
                splitButtonAriaLabel="See 2 options"
                aria-roledescription="split button"
                menuProps={Text_menuProps}
                onClick={() => { console.log("Text is clicked!") }}
                disabled={false}
                checked={false}
            />

            <DefaultButton
                text="Container"
                split
                splitButtonAriaLabel="See 2 options"
                aria-roledescription="split button"
                menuProps={Container_menuProps}
                onClick={() => { console.log("Container is clicked!") }}
                disabled={false}
                checked={false}
            />
        </div>
    )
}