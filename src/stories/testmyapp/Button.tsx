import {MyMentionItem} from "@/lib/plate/demo/values/THE_MENTIONABLES";
import createAmazingPlugin, {KEY_AMAZING} from "@/components/edtiro_compnents/amazing_com";
import {Icons} from "@/components/icons";
import OdocEditor from "@/components/pages/editor";


const initialValue = [
    {
        id: "lkdf",
        type: 'h1',
        children: [{text: "This is a paragraph."}]
    },
    {
        id: "98ryw",
        type: 'amazing',
        children: [{text: "Amaing"}],
        data: "test",

    }
]

const mentions: MyMentionItem[] = [
    {key: '0', text: 'TEST ON E'},
    {key: '1', text: 'TEST 2'},
    {
        key: '2',
        text: 'TEST THREE',
    },
    {
        key: '3',
        text: 'My test from button',
    },
];


export interface ButtonProps {
    /**
     * Is this the principal call to action on the page?
     */
    primary?: boolean;
    /**
     * What background color to use
     */
    backgroundColor?: string;
    /**
     * How large should the button be?
     */
    size?: 'small' | 'medium' | 'large';
    /**
     * Button contents
     */
    label: string;
    /**
     * Optional click handler
     */
    onClick?: () => void;
}

/**
 * Primary UI component for user interaction
 */
export const Button = ({
                           primary = false,
                           size = 'medium',
                           backgroundColor,
                           label,
                           ...props
                       }: ButtonProps) => {
    // const initialValue = usePlaygroundValue(id);
    // const key = useInitialValueVersion(initialValue);

    let onInsertComponent = (component: any, id: any) => {
        console.log("onInsertComponent", {component, id});
    };

    let onChange = (change: any) => {
        console.log({change});
    };

    let extraPlugins = [
        {plugin: createAmazingPlugin, key: KEY_AMAZING, icon: Icons.kbd}
    ];

    return (
        <div className="flex items-start justify-center h-screen">
            <div className="w-5/6">
                <OdocEditor
                    extraPlugins={extraPlugins}
                    onChange={onChange}
                    userMentions={mentions}
                    onInsertComponent={onInsertComponent}
                    initialValue={initialValue}
                    // id="1"
                />
            </div>
        </div>
    );
}

export default Button;
