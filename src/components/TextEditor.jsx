import '../assets/styles/style.scss'
import React, { useEffect, useRef, useState } from 'react'

import { EditorContent, FloatingMenu, BubbleMenu, useEditor } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import Blockquote from '@tiptap/extension-blockquote'
import TextAlign from '@tiptap/extension-text-align'
import Image from '@tiptap/extension-image'


const TextEditor = ({onData, content}) => {

  const [image, setImage] = useState(null)
  const editorRef = useRef(null);

  const editor = useEditor({
    extensions: [
      StarterKit,
        Image,
        Image.configure({
        inline: true,
        allowBase64: true,
      }),
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

   

  // const handleImageChange = async(event) => {
  //   alert('worked')
  //  try{
  //   const [fileHandle] = await window.showOpenFilePicker({
  //     types: [
  //       {
  //         description: 'Images',
  //         accept: {
  //           'image/*': ['png', 'jpg', 'jpeg', 'gif']
  //         }
  //       }
  //     ],
  //     multiple: false
  //   })

  //    const file = await fileHandle.getFile();
  //    const fileUrl = URL.createObjectURL(file);
  //    editor.chain().focus().setImage({src: fileUrl}).run()

  //  }catch(err){
  //   console.log('Error');
  //  }

  // };


  const inputEle = document.createElement('inoty')



  const handleFileUpload = (file) => {
    const reader = new FileReader();

    reader.onload = () => {
      const base64String = reader.result;
      alert(base64String)
      // editor.commands.setImage({ src: "https://placehold.co/800x400" });
    };

    reader.readAsDataURL(file);
  };

  return (
    <>
      <div className='rounded-md flex-wrap w-full'>
        <div className="relative">
          <div className="flex sticky z-10 w-full top-0 bg-[#ddd] flex-wrap p-3 gap-4">
              <button
                    onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
                    className={editor?.isActive('heading', { level: 1 }) ? 'is-active active font-extrabold text-green-600' : ''}
                >
                    H1
                </button>

                <div className="flex bg-[#ddd] p-3 gap-4">
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

                <button
                onClick={() => editor.chain().focus().toggleBlockquote().run()}
                className={editor?.isActive('blockquote') ? 'is-active active font-extrabold text-green-600' : ''}
              >
                <i class="fa-solid fa-quote-left"></i>
              </button>

            <button
                onClick={() => editor.chain().focus().undo().run()}
                disabled={!editor?.can().undo()}
              >
                <i class="fa-solid fa-rotate-left"></i>
              </button>
              <button
                onClick={() => editor.chain().focus().redo().run()}
                disabled={!editor?.can().redo()}
              >
                <i class="fa-solid fa-rotate-right"></i>
              </button>




            
               {/* <input type="file" onChange={handleFileUpload}/> */}
               {/* <button onClick={handleImageUpload}>Img</button> */}



              <button className='p-1 w-full border text-white bg-[#484040]'>+ More</button>

            </div>
            <EditorContent ref={editorRef} className='border !p-0' editor={editor} />

        </div>
      </div>

    </>
  )
};


export default TextEditor;