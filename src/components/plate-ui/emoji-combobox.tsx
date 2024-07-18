"use client";
// import {ComboboxItemProps} from "@udecode/plate-combobox";
import {
    // EmojiItemData,
    KEY_EMOJI,
    // TEmojiCombobox,
    // useEmojiComboboxState,
} from "@udecode/plate-emoji";

import {Combobox} from "./combobox";

export function EmojiComboboxItem({item}: any) {
    const {
        data: {id, emoji},
    } = item;

    return (
        <div>
            {emoji} :{id}:
        </div>
    );
}

export function EmojiCombobox({
                                  pluginKey = KEY_EMOJI,
                                  id = pluginKey,
                                  ...props
                              }) {
    // const { trigger, onSelectItem } = useEmojiComboboxState({ pluginKey });

    return (
        <Combobox
            id={id}
            // trigger={trigger}
            controlled
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            // onSelectItem={onSelectItem as any}
            onRenderItem={EmojiComboboxItem}
            {...props}
        />
    );
}
