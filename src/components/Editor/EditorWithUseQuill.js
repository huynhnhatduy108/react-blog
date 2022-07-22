import { useEffect, useImperativeHandle, forwardRef,memo } from "react";
import { useQuill } from "react-quilljs";
import BlotFormatter from "quill-blot-formatter";
import "quill/dist/quill.snow.css";
import hljs from "highlight.js";
import "highlight.js/styles/tokyo-night-dark.css";
// import 'highlight.js/styles/darcula.css';
// import ImageResize from 'quill-image-resize-module';
import ImageResize from 'quill-image-resize-module-react';
import ImageCompress from 'quill-image-compress';

import "quill-emoji/dist/quill-emoji.css";
import "./style.css";
import quillEmoji from 'quill-emoji';
const { EmojiBlot, ShortNameEmoji, ToolbarEmoji, TextAreaEmoji } = quillEmoji;

const theme = "snow";
const placeholder = "Writting something...";
const modules = {
    blotFormatter: {},
    // handlers: {
    //   'color': function (value) {
    //     if (value == 'custom-color') value = window.prompt('Enter Hex Color Code');
    //     this.quill.format('color', value);
    //   }
    // },
    toolbar: [
        [{ header: [] }, { font: [] }],
        [{ size: [] }],
        ["bold", "italic", "underline", "strike", "blockquote"],
        [
            { align: "" },
            { align: "center" },
            { align: "right" },
            { align: "justify" },
        ],
        [
            { list: "ordered" },
            { list: "bullet" },
            {
                color: [
                    "#000000",
                    "#e60000",
                    "#ff9900",
                    "#ffff00",
                    "#008a00",
                    "#0066cc",
                    "#9933ff",
                    "#ffffff",
                    "#facccc",
                    "#ffebcc",
                    "#ffffcc",
                    "#cce8cc",
                    "#cce0f5",
                    "#ebd6ff",
                    "#bbbbbb",
                    "#f06666",
                    "#ffc266",
                    "#ffff66",
                    "#66b966",
                    "#66a3e0",
                    "#c285ff",
                    "#888888",
                    "#a10000",
                    "#b26b00",
                    "#b2b200",
                    "#006100",
                    "#0047b2",
                    "#6b24b2",
                    "#444444",
                    "#5c0000",
                    "#663d00",
                    "#666600",
                    "#003700",
                    "#002966",
                    "#3d1466",
                    "custom-color",
                ],
            },
            { background: [] },
            "link",
            "emoji",
        ],
        [
            { list: "ordered" },
            { list: "bullet" },
            { indent: "-1" },
            { indent: "+1" },
        ],
        ["link", "image", "video"],
        ["clean"],
        ["code-block"],
        ['emoji'],
    ],
    imageCompress: {
        quality: 0.9, // default
        maxWidth: 1000, // default
        maxHeight: 1000, // default
        imageType: 'image/jpeg', // default
        keepImageTypes:['image/jpeg', 'image/png', 'image/jpg'],
        debug: false, 
        suppressErrorLogging: false, // default
        insertIntoEditor: undefined, // default
    },
    imageResize:{
      handleStyles: {
          displaySize: true,
          backgroundColor: "black",
          border: "none",
          color: "white",
      },
    //   parchment: this.Quill.import('parchment'),
    modules: ["Resize", "DisplaySize", "Toolbar"],},
    'emoji-toolbar': true,
    // 'emoji-textarea': true,
    'emoji-shortname': true,
};
const formats = [
    "header",
    "font",
    "size",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "list",
    "bullet",
    "indent",
    "link",
    "image",
    "video",
    "code-block",
    "align",
    'background', 
    'color', 
    'emoji'
];

const Editor = (props, ref) => {
    const { value, onChange } = props;
    const { quill, quillRef, Quill } = useQuill({
        modules: modules,
        theme: theme,
        formats: formats,
        placeholder: placeholder,
    });

    hljs.configure({
        languages: [
            "javascript",
            "ruby",
            "python",
            "rust",
            "java",
            "html",
            "css",
        ],
    });



    if (Quill && !quill) {
        Quill.register({
          'formats/emoji': EmojiBlot,
          'modules/emoji-shortname': ShortNameEmoji,
          'modules/emoji-toolbar': ToolbarEmoji,
          'modules/emoji-textarea': TextAreaEmoji,
          "modules/blotFormatter":BlotFormatter,
          'modules/imageResize': ImageResize,
          'modules/imageCompress': ImageCompress,
        }, true);
    }
    

    useImperativeHandle(ref, () => ({
        getContents:()=>{
          return quill.root.innerHTML
        },
        setContents:(content)=>{
          if (quill) {
            quill.deleteText(0,quill.getLength())
            const delta = quill.clipboard.convert(content);
            quill.setContents(delta, "silent");
          }
        }
    }));

    useEffect(() => {
        if (quill) {            
            if (value){
              const delta = quill.clipboard.convert(value);
              quill.setContents(delta, "silent");
            }
            quill.on("text-change", (delta, oldContents) => {
              onChange && onChange(quill.root.innerHTM)
            });
        }
    }, [quill, Quill]);

    return (
        <div>
            <div ref={quillRef} />
        </div>
    );
};

export default memo(forwardRef(Editor));
