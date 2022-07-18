import React, { useState } from 'react';
import ReactQuill, { Quill } from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import ImageResize from 'quill-image-resize-module-react';
import './style.css';

Quill.register('modules/imageResize', ImageResize);

function Editor(props) {
  const {onChange, placeholder} = props;
  const [content, setContent] = useState('');

  const handleChangeContent =(html)=> {
    setContent(html);
    onChange && onChange(html);
  }

  return (
    <ReactQuill
      // theme={'snow'}
      onChange={handleChangeContent}
      value={content}
      modules={{
        toolbar: [
          [{ header: '1' }, { header: '2' }, { font: [] }],
          [{ size: [] }],
          ['bold', 'italic', 'underline', 'strike', 'blockquote'],
          [
            { list: 'ordered' },
            { list: 'bullet' },
            { indent: '-1' },
            { indent: '+1' }
          ],
          ['link', 'image', 'video'],
          ['clean']
        ],
        clipboard: {
          matchVisual: false
        },
        imageResize: {
          parchment: Quill.import('parchment'),
          modules: ['Resize', 'DisplaySize']
        }
      }}
      formats={[
        'header',
        'font',
        'size',
        'bold',
        'italic',
        'underline',
        'strike',
        'blockquote',
        'list',
        'bullet',
        'indent',
        'link',
        'image',
        'video'
      ]}
      bounds={'#root'}
      placeholder={placeholder}
  />
  )
}

export default Editor