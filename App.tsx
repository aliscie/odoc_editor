import "./App.css";
import OdocEditor from "@/components/pages/editor";
import createAmazingPlugin, {KEY_AMAZING} from "@/components/edtiro_compnents/amazing_com";
import {Icons} from "@/components/icons";
import {MyMentionItem} from "@/lib/plate/demo/values/mentionables";


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
    {key: '0', text: 'Aayla Secura'},
    {key: '1', text: 'Adi Gallia'},
    {
        key: '2',
        text: 'Admiral Dodd Rancit',
    },
    {
        key: '3',
        text: 'Test from app',
    },

];


function App() {
    // const initialValue = usePlaygroundValue(id);
    // const key = useInitialValueVersion(initialValue);

    let onInsertComponent = (component: any) => {
        console.log(component);
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
                    initialValue={initialValue} id="1"/>
            </div>
        </div>
    );
}

export default App;
