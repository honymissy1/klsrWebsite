import React, { useState, useEffect } from 'react';
import { Button, Drawer, Select, Card, Input,  notification, Upload } from 'antd';
import { EditFilled} from '@ant-design/icons';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { EditorContent, FloatingMenu, BubbleMenu, useEditor } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import Blockquote from '@tiptap/extension-blockquote'
import TextAlign from '@tiptap/extension-text-align'
import supabase from '../supabaseClient';
import TextEditor from './TextEditor';

const EditPost = ({id}) => {
  const [open, setOpen] = useState(false);
  const [author, setAuthor] = useState();
    const [articleType, setArticleType] = useState();
    const [title, setTitle] = useState();
    // const [content, setContent] = useState();
    const [category, setCategory] = useState();
    const [uploading, setUploading] = useState(false);
    const [selectedFile, setSelectedFile] = useState();
    const [url, setUrl] = useState();
    const [api, contextHolder] = notification.useNotification();

    const [article, setArticle] = useState();

    const [fileList, setFileList] = useState([]);

    const [editorHtml, setEditorHtml] = useState('');

 
  
    useEffect(() =>{

        const articles = async() =>{
          let { data: articles, error } = await supabase
          .from('articles')
          .select('*')
          .eq('id', id)
    
          setArticle(articles);
        }
    
        articles()
                  
      }, [])


  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };

  const handleChange = (html) => {
    console.log(html)
    setEditorHtml(html);
  };

  const onChange = ({fileList}) => {
    setFileList([...fileList]);
    if (fileList.length > 0) {
      fileList[0].status = 'done'
      setSelectedFile(fileList[0].originFileObj);
    } else {
      setSelectedFile(null);
    }
  };


  const onPreview = async (file) => {
    let src = file.url;
    if (!src) {
      src = await new Promise((resolve) => {
        const reader = new FileReader();
        reader.readAsDataURL(file.originFileObj);
        reader.onload = () => resolve(reader.result);
      });
    }


    const image = new Image();
    image.src = src;
    const imgWindow = window.open(src);
    imgWindow?.document.write(image.outerHTML);
  }

  const handleSubmit = async() =>{ 
    const fileName = `${Date.now()}-${selectedFile.name}`;
    const filePath = `article_images/${fileName}`; // Customize your folder path

    const {file, error: fileError } = await supabase
      .storage.from('klsr').upload(filePath, selectedFile);

      console.log(file);
        if (error) {
          throw error;
        }

        const { data:pics } = await supabase
        .storage
        .from('klsr') // Same bucket name
        .getPublicUrl(filePath);

        const { data, error } = await supabase
        .from('articles')
        .update({ title: title, content: editorHtml, type: articleType, img_url: fileList.length < 1 ? "Upload": "null", category: category })
        .eq('id', id)
        .select()
        
      if(error) {
        api.open({
            message: 'Error',
            description:
              'Could not update Blog article try again!',
            className: 'custom-class',
            style: {
              width: 600,
            },
          });
      }


      api.open({
        onClose: () =>{
            window.location.reload()
        },
        message: 'Update',
        description:
          'Article is successfully updated.',
        className: 'custom-class',
        style: {
          width: 600,
        },
      });

    

  }




  // const editor = useEditor({
  //   extensions: [
  //     StarterKit,
  //     TextAlign.configure({
  //       types: ['heading', 'paragraph'],
  //     }),

  //     Blockquote.configure({
  //       HTMLAttributes: {
  //         class: 'bg-green-100 p-2',
  //       },
  //     })
      
  //   ],
  //   content: article[0]?.content,
  //   onUpdate: ({editor}) => {
  //     console.log(editor.getHTML());
  //     // setEditorHtml(article[0]?.content);
  //   }

  // })


  const handleDataFromChild = (childData) => {
    // console.log(childData);
    setEditorHtml(childData);
  };

  return (
    <>
     {contextHolder}
      <div onClick={showDrawer}>
        <EditFilled />
      </div>
      <Drawer title="Edit Article" onClose={onClose} open={open}>
 
        {
            article && (
                <div className='flex-1 md:block'>
                <div className='flex gap-5 flex-wrap'>
                <Select
                className="w-full"
                placeholder="Article Type"
                onChange={(e) => setArticleType(e)}
                defaultValue={article[0]?.type}
                options={[{ value: 'Devotion', label: <span>Devotion</span> },
                          { value: 'Review', label: <span>Book Review</span> },
                          { value: 'Article', label: <span>Article</span> },
                          { value: 'event', label: <span>Events / Programs</span> },
    
                                ]} />
    
                <Input onChange={(e) => setTitle(e.target.value)} defaultValue={article[0].title} className='flex-1 max-w-[500px] min-w-[300px]' placeholder="Title"/>
            {
                articleType == "Review" && (<Input onChange={(e) => setAuthor(e.target.value)} className='flex-1 max-w-[500px] min-w-[300px]' placeholder="Author"/>)
            }
    
    
            <Select
                className="w-full"
                placeholder="Category"
                defaultValue={article[0].category}
                // value={}
                onChange={(e) => setCategory(e)}
                options={[{ value: 'Faith', label: <span>Faith</span> },
                            { value: 'Finance', label: <span className='text-red-600'>Finance</span> },
                            { value: 'Health', label: <span>Health</span> },
                                 { value: 'Ministry', label: <span>Ministry</span> },
                                { value: 'Relationship', label: <span>Relationship</span> },
                                { value: 'Education', label: <span>Education</span> },
                                { value: 'Business', label: <span>Business</span> },
                                { value: 'Others', label: <span>Others</span> }
                                ]} />
    


                <TextEditor onData={handleDataFromChild} content={article[0].content} />
                <ImgCrop rotationSlider>
                  <Upload
                      listType="picture-card"
                      fileList={fileList}
                      onChange={onChange}
                      onPreview={onPreview}
                      className='w-[300px]'
                  >
                      {fileList.length < 1 && '+ Upload cover image'}
                  </Upload>
                </ImgCrop>
    
                <Button className='mt-10 w-full' type="primary" onClick={handleSubmit} loading={uploading}>
                {uploading ? "Uploading..." : "Submit"}
                </Button>
                </div>
    
                {/* Table that contain list of Articles */}
    
            </div>
            )
        }

      </Drawer>
    </>
  );
};
export default EditPost;