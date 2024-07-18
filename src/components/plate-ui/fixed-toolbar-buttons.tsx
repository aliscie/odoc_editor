import {useEditorReadOnly} from "@udecode/plate-common";

import {InsertDropdownMenu} from "./insert-dropdown-menu";
import {ModeDropdownMenu} from "./mode-dropdown-menu";
import {ToolbarGroup} from "./toolbar";

export function FixedToolbarButtons() {
  const readOnly = useEditorReadOnly();

  return (
    <div className="w-full overflow-hidden">
      <div
        className="flex flex-wrap"
        style={{
          transform: "translateX(calc(-1px))",
        }}
      >
        {!readOnly && (
          <>
            <ToolbarGroup noSeparator>
              <InsertDropdownMenu />
              {/*<TurnIntoDropdownMenu />*/}
            </ToolbarGroup>

            {/*<ToolbarGroup>*/}
            {/*  <MarkToolbarButton tooltip="Bold (⌘+B)" nodeType={MARK_BOLD}>*/}
            {/*    <Icons.bold />*/}
            {/*  </MarkToolbarButton>*/}
            {/*  <MarkToolbarButton tooltip="Italic (⌘+I)" nodeType={MARK_ITALIC}>*/}
            {/*    <Icons.italic />*/}
            {/*  </MarkToolbarButton>*/}
            {/*  <MarkToolbarButton*/}
            {/*    tooltip="Underline (⌘+U)"*/}
            {/*    nodeType={MARK_UNDERLINE}*/}
            {/*  >*/}
            {/*    <Icons.underline />*/}
            {/*  </MarkToolbarButton>*/}

            {/*  <MarkToolbarButton*/}
            {/*    tooltip="Strikethrough (⌘+⇧+M)"*/}
            {/*    nodeType={MARK_STRIKETHROUGH}*/}
            {/*  >*/}
            {/*    <Icons.strikethrough />*/}
            {/*  </MarkToolbarButton>*/}
            {/*  <MarkToolbarButton tooltip="Code (⌘+E)" nodeType={MARK_CODE}>*/}
            {/*    <Icons.code />*/}
            {/*  </MarkToolbarButton>*/}
            {/*</ToolbarGroup>*/}

            {/*<ToolbarGroup>*/}
            {/*  <MediaToolbarButton nodeType={ELEMENT_IMAGE} />*/}
            {/*  <TableDropdownMenu />*/}
            {/*  <EmojiDropdownMenu />*/}
            {/*  <CustomChart />*/}
            {/*</ToolbarGroup>*/}
          </>
        )}

        <div className="grow" />

        <ToolbarGroup noSeparator>
          <ModeDropdownMenu />
        </ToolbarGroup>
      </div>
    </div>
  );
}
