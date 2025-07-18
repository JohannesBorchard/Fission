import { cn } from "@/shared/lib/utils"
import { Button } from "@/shared/ui/Button"
import * as Popover from "@radix-ui/react-popover"
import type { EditorState, Transaction } from "@tiptap/pm/state"
import { ChevronDown, ChevronUp, Heading1, Heading2, Text } from "lucide-react"
import { useEffect, useState } from "react"

const blockTypes = [
  {
    label: "Text",
    level: null,
    icon: Text,
    isActive: (editor: any) => editor.isActive("paragraph"),
    command: (editor: any) => {
      editor
        .chain()
        .focus()
        .command(({ tr, state }: { tr: Transaction; state: EditorState }) => {
          const isEmpty = state.selection.$from.parent.content.size === 0
          if (isEmpty) {
            tr.setBlockType(state.selection.from, state.selection.to, state.schema.nodes.paragraph)

            return true
          }

          return editor.commands.setParagraph()
        })
        .run()
    }
  },
  {
    label: "Heading",
    level: 1,
    icon: Heading1,
    isActive: (editor: any) => editor.isActive("heading", { level: 1 }),
    command: (editor: any) => {
      editor
        .chain()
        .focus()
        .command(({ tr, state }: { tr: Transaction; state: EditorState }) => {
          const isEmpty = state.selection.$from.parent.content.size === 0
          if (isEmpty) {
            tr.setBlockType(state.selection.from, state.selection.to, state.schema.nodes.heading, {
              level: 1
            })

            return true
          }

          return editor.commands.toggleHeading({ level: 1 })
        })
        .run()
    }
  },
  {
    label: "Subheading",
    level: 2,
    icon: Heading2,
    isActive: (editor: any) => editor.isActive("heading", { level: 2 }),
    command: (editor: any) => {
      editor.commands.focus()
      const applied = editor.commands.toggleHeading({ level: 2 })
      // fallback: falls keine node verändert wurde
      if (!applied) {
        editor.commands.setNode("heading", { level: 2 })
      }
    }
  }
]

export function BlockTypeSelector({ editor }: { editor: any }) {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    if (!open) {
      setTimeout(() => {
        editor.commands.focus()
      }, 10)
    }
  }, [open])

  if (!editor) return null

  const active = blockTypes.find((t) => t.isActive(editor)) ?? blockTypes[0]

  return (
    <Popover.Root
      open={open}
      onOpenChange={(newOpen) => {
        setOpen(newOpen)
        // Fokus zurück zum Editor setzen, wenn Popover geschlossen wird
      }}
    >
      <Popover.Trigger asChild>
        <Button className="justify-start text-sm!" size="sm" variant="ghost">
          {active.label}
          {open ? (
            <ChevronUp className="text-muted-foreground mt-0.5 size-4" />
          ) : (
            <ChevronDown className="text-muted-foreground mt-0.5 size-4" />
          )}
        </Button>
      </Popover.Trigger>
      <Popover.Portal>
        <Popover.Content
          className="bg-popover text-popover-foreground z-50 w-48 rounded-md border p-1 shadow-md"
          sideOffset={8}
        >
          {blockTypes.map(({ label, icon: Icon, isActive, command }) => (
            <button
              key={label}
              className={cn(
                "hover:bg-accent hover:text-accent-foreground flex w-full items-center rounded-sm px-2 py-1.5 text-sm",
                isActive(editor) && "bg-accent text-accent-foreground"
              )}
              onClick={() => {
                command(editor)
                setOpen(false)
                // Zusätzlicher Fokus-Call hier ist nicht mehr nötig,
                // da er durch onOpenChange abgedeckt wird
              }}
            >
              <Icon className="mr-2 h-4 w-4" />
              {label}
            </button>
          ))}
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  )
}
