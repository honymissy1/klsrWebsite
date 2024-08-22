import '../assets/styles/style.scss'
import React, { useEffect, useRef } from 'react'

import { EditorContent, FloatingMenu, BubbleMenu, useEditor } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import Blockquote from '@tiptap/extension-blockquote'
import TextAlign from '@tiptap/extension-text-align'

const TextEditor = ({onData, content}) => {

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
    content: content,
    onUpdate: ({editor}) => {
      // console.log(editor.getHTML());
      onData(editor.getHTML());
    }
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

{/* 
           <input
                type="file"
                accept="image/*"
                ref={inputRef}
                style={{ display: 'none' }}
                onChange={addImageFromFile}
            />
                  <button onClick={() => inputRef?.current?.click()}>
                <i class="fa-regular fa-image"></i>
            </button> */}
        </div>
      </FloatingMenu>}

      <div className='border rounded-md flex-wrap w-full'>
      <div className="flex bg-[#ddd] flex-wrap p-3 gap-5">
          <button
                onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
                className={editor?.isActive('heading', { level: 1 }) ? 'is-active active font-extrabold text-green-600' : ''}
            >
                H1
            </button>

            <div className="flex bg-[#ddd] p-3 gap-5">
                      <button
                          onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
                          className={editor?.isActive('heading', { level: 2 }) ? 'is-active active font-extrabold text-green-600' : ''}
                      >
                          H2
                      </button>
          
                      <button
                          onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
                          className={editor?.isActive('heading', { level: 3 }) ? 'is-active active font-extrabold text-green-600' : ''}
                      >
                          H3
                      </button>
                      </div>

            <div className="flex gap-5">
          <button
            onClick={() => editor.chain().focus().setTextAlign('left').run()}
            className={editor?.isActive({ textAlign: 'left' }) ? 'is-active active font-extrabold text-green-600' : ''}
          >
            <i class="fa-solid fa-align-left"></i>
          </button>
          <button
            onClick={() => editor.chain().focus().setTextAlign('center').run()}
            className={editor?.isActive({ textAlign: 'center' }) ? 'is-active active font-extrabold text-green-600' : ''}
          >
            <i class="fa-solid fa-align-center"></i>
          </button>
          <button
            onClick={() => editor.chain().focus().setTextAlign('right').run()}
            className={editor?.isActive({ textAlign: 'right' }) ? 'is-active active font-extrabold text-green-600' : ''}
          >
            <i class="fa-solid fa-align-right"></i>
          </button>
         
        </div>

        <button
                          onClick={() => editor.chain().focus().toggleBold().run()}
                          className={editor?.isActive('bold') ? 'active font-extrabold text-green-600' : ''}
                      >
                         <b>B</b>
                      </button>
                      <button
                      onClick={() => editor.chain().focus().toggleItalic().run()}
                      className={editor?.isActive('italic') ? 'is-active active font-extrabold text-green-600' : ''}
                    >
                      <i class="fa-solid fa-italic"></i>
                    </button>
                    <button
                      onClick={() => editor.chain().focus().toggleStrike().run()}
                      className={editor?.isActive('strike') ? 'is-active active font-extrabold text-green-600' : ''}
                    >
                      <i class="fa-solid fa-strikethrough"></i>
                    </button>

            <button
                onClick={() => editor.chain().focus().toggleBulletList().run()}
                className={editor?.isActive('bulletList') ? 'is-active active font-extrabold text-green-600' : ''}
            >
                <i class="fa-solid fa-list"></i>
            </button>

            <div className="button-group bg-blue-400">
        
         
        </div>

        <button
            onClick={() => editor.chain().focus().toggleBlockquote().run()}
            className={editor?.isActive('blockquote') ? 'is-active active font-extrabold text-green-600' : ''}
          >
            <i class="fa-solid fa-quote-left"></i>
          </button>

        </div>
        <EditorContent  editor={editor} />
      </div>

    </>
  )
};


export default TextEditor;