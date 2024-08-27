import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import OdocEditor from "@/components/pages/editor";
import {expect} from "@storybook/test";

describe('OdocEditor component', () => {
    it('renders correctly', () => {
        const extraPlugins = [
            {plugin: jest.fn(), key: 'test', icon: jest.fn()}
        ];
        const mentions = [
            {key: '0', text: 'TEST ON E'},
            {key: '1', text: 'TEST 2'},
            {key: '2', text: 'TEST THREE'},
            {key: '3', text: 'My test from button'},
        ];
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
        ];
        render(
            <OdocEditor
                extraPlugins={extraPlugins}
                onChange={jest.fn()}
                userMentions={mentions}
                onInsertComponent={jest.fn()}
                initialValue={initialValue}
            />
        );
        // Replace 'element' with the actual element you want to check
        const element = screen.getByTestId('element');
        expect(element).toBeInTheDocument();
    });
});
