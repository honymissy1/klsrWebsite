import '../assets/styles/style.scss'

import { EditorContent, FloatingMenu, BubbleMenu, useEditor } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import React, { useEffect, useRef } from 'react'
import Blockquote from '@tiptap/extension-blockquote'
import TextAlign from '@tiptap/extension-text-align'
const TextEditor = () => {

  const inputRef = useRef(null);

  const editor = useEditor({
    extensions: [
      StarterKit,
      TextAlign.configure({
        types: ['heading', 'paragraph'],
      }),

      Blockquote.configure({
        HTMLAttributes: {
          class: 'bg-green-100 p-2',
        },
      })
      
    ],
    content: `
      <h1>Bro watin happen</h1>
      <p>
        This is an example of a Medium-like editor. Enter a new line and some buttons will appear.
      </p>
      <p></p>
    `,
    // onUpdate: ({ editor }) => {
    //     const content = editor.getHTML();
    //     if (onUpdate) {
    //       onUpdate(content);
    //     }
    //   },
  })

  const addImageFromFile = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        editor.chain().focus().setImage({ src: reader.result }).run();
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <>
      <div className="control-group">
        
      </div>
      {editor && <FloatingMenu className='rounded w-full bg-blue-300' editor={editor} tippyOptions={{ duration: 100 }}>
        <div className="floating-menu">
            <div className='bg-blue-400'>
                    
            <button
                onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
                className={editor.isActive('heading', { level: 1 }) ? 'is-active' : ''}
            >
                H1
            </button>
            <button
                onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
                className={editor.isActive('heading', { level: 2 }) ? 'is-active' : ''}
            >
                H2
            </button>

            <button
                onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
                className={editor.isActive('heading', { level: 3 }) ? 'is-active' : ''}
            >
                H3
            </button>
            </div>
            <button
                onClick={() => editor.chain().focus().toggleBold().run()}
                className={editor?.isActive('bold') ? 'active' : ''}
            >
                B
            </button>
            <button
            onClick={() => editor.chain().focus().toggleItalic().run()}
            className={editor?.isActive('italic') ? 'is-active' : ''}
          >
            <i class="fa-solid fa-italic"></i>
          </button>
          <button
            onClick={() => editor.chain().focus().toggleStrike().run()}
            className={editor?.isActive('strike') ? 'is-active' : ''}
          >
            <i class="fa-solid fa-strikethrough"></i>
          </button>
            <button
                onClick={() => editor.chain().focus().toggleBulletList().run()}
                className={editor.isActive('bulletList') ? 'is-active' : ''}
            >
                <i class="fa-solid fa-list"></i>
            </button>

            <div className="button-group bg-blue-400">
          <button
            onClick={() => editor.chain().focus().setTextAlign('left').run()}
            className={editor?.isActive({ textAlign: 'left' }) ? 'is-active' : ''}
          >
            <i class="fa-solid fa-align-left"></i>
          </button>
          <button
            onClick={() => editor.chain().focus().setTextAlign('center').run()}
            className={editor?.isActive({ textAlign: 'center' }) ? 'is-active' : ''}
          >
            <i class="fa-solid fa-align-center"></i>
          </button>
          <button
            onClick={() => editor.chain().focus().setTextAlign('right').run()}
            className={editor?.isActive({ textAlign: 'right' }) ? 'is-active' : ''}
          >
            <i class="fa-solid fa-align-right"></i>
          </button>
         
        </div>

        <button
            onClick={() => editor.chain().focus().toggleBlockquote().run()}
            className={editor.isActive('blockquote') ? 'is-active' : ''}
          >
            <i class="fa-solid fa-quote-left"></i>
          </button>

           <input
                type="file"
                accept="image/*"
                ref={inputRef}
                style={{ display: 'none' }}
                onChange={addImageFromFile}
            />
        </div>
      </FloatingMenu>}
      <EditorContent className='border w-full' editor={editor} />
      <button onClick={() => inputRef?.current?.click()}>
          <i class="fa-regular fa-image"></i>
      </button>
    </>
  )
};


export default TextEditor;