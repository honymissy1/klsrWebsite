
import { Card, Input, Select, Button, message, Upload  } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
const { TextArea } = Input;
import ImgCrop from 'antd-img-crop';

import { useState, useEffect } from 'react';

import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

import supabase from '../supabaseClient';
import TextEditor from '../components/TextEditor';

const PostArticles = ({show}) =>{
    const [author, setAuthor] = useState();
    const [articleType, setArticleType] = useState();
    const [title, setTitle] = useState();
    // const [content, setContent] = useState();
    const [category, setCategory] = useState();
    const [uploading, setUploading] = useState(false);
    const [selectedFile, setSelectedFile] = useState();
    const [url, setUrl] = useState();

    const [fileList, setFileList] = useState([]);

    const admin = JSON.parse(sessionStorage.getItem('klsr'));

    const [editorHtml, setEditorHtml] = useState('');

    // const handleChange = (content, delta, source, editor) => {
    //   // console.log(editor.getContents());
    //     setEditorHtml(editor.getContents());
    // };

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

    


    const handleSubmit = async () => {
      if(editorHtml === '' || title === ''){
        alert('Fill up the content')
        return;
      }
        setUploading(true);
        if (fileList.length < 1) {
          const { data: poster  } = await supabase
            .from('articles')
            .insert([
              { 
                title: title, 
                content: editorHtml,
                type: articleType,
                category: category,
                author: author,
                img_url: "",
                creator: admin.name  
              },
            ])
            .select()
            setUploading(true);
            window.location.reload();
        }
    
        
    
        try {
          const fileName = `${Date.now()}-${selectedFile.name}`;
          const filePath = `article_images/${fileName}`; // Customize your folder path
    
          const { error } = await supabase
            .storage
            .from('klsr') // Replace with your bucket name
            .upload(filePath, selectedFile);
    
          if (error) {
            throw error;
          }
    
          const { data:pics } = await supabase
            .storage
            .from('klsr') // Same bucket name
            .getPublicUrl(filePath);
           
               const { data: poster  } = await supabase
             .from('articles')
             .insert([
               { 
                 title: title, 
                 content: editorHtml,
                 type: articleType,
                 category: category,
                 author: author,
                 img_url: pics.publicUrl,
                 creator: admin.name  
               },
             ])
             .select()
            
          message.success("File uploaded successfully!");
          window.location.reload();
    
          } catch (error) {
            console.log(error);
         } finally {
          setUploading(false);
        }
      };

      const handleDataFromChild = (childData) => {
        console.log(childData);
        setEditorHtml(childData);
      };
    

    return (
        <div className={`flex-1 ${show? '': 'hidden'} border md:p-5 md:block rounded-md px-3`}>
            <h1 className='font-extrabold text-md my-3'>Post Articles</h1>
            <div className="mb-3 border-l-green-400 border-l-4 bg-green-200 p-2">
             <p>If you're new to the editor here's a basic instruction on how to use</p>
             <ul className='list-disc p-2 text-xs'>
                <li className='mb-3'>When you click on the content textbox your text formatting tool will be displayed</li>
                <li>Highlight Text to get more format</li>
             </ul>
            </div>
            <div className='flex gap-5 flex-wrap'>
            <Select
            className="w-full"
            placeholder="Article Type"
            onChange={(e) => setArticleType(e)}
            options={[{ value: 'Devotion', label: <span>Devotion</span> },
                            { value: 'Review', label: <span className='text-red-600'>Book Review</span> },
                            { value: 'Article', label: <span>Article</span> },
                            { value: 'event', label: <span>Events / Programs</span> },

                            ]} />

            <Input onChange={(e) => setTitle(e.target.value)} className='flex-1 w-full ' placeholder="Title"/>
        {
            articleType == "Review" && (<Input onChange={(e) => setAuthor(e.target.value)} className='flex-1 max-w-[500px] min-w-[300px]' placeholder="Author"/>)
        }
        {/* <Upload

            beforeUpload={() => false}
            onChange={handleFileChange}
            onRemove={() => setSelectedFile(null)}
            multiple={false} 
            showUploadList={true} // Show the file list with progress
        >
            <Button className='!w-[]' icon={<UploadOutlined />}>Select cover Image</Button>
        </Upload> */}

        <Select
            className="w-full"
            placeholder="Category"
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

            {/* <ReactQuill
            theme="snow" // 'snow' is the default theme
            value={editorHtml}
            onChange={handleChange}
            modules={modules}
            formats={formats}
            className='w-full min-h-[200px] max-h-[500px]'
            placeholder='Type your article...'
            /> */}


            <TextEditor onData={handleDataFromChild} />

            <Button className='mt-1 w-full' type="primary" onClick={handleSubmit} loading={uploading}>
            {uploading ? "Uploading..." : "Submit"}
            </Button>
            </div>

            {/* Table that contain list of Articles */}

        </div>

    )
   }

   export default PostArticles