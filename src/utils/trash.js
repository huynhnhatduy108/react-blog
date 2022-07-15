<Col xs={24} sm={24} md={24} lg={24} xl={24}>
<Row gutter={[16, 16]}>
    <Col
        xs={24}
        sm={24}
        md={24}
        lg={12}
        xl={12}
    >
        <Form.Item>
            <Form.Item
                noStyle
                name="title"
                rules={[
                    {
                        required: true,
                        message:
                            "Please input Title!",
                    },
                ]}
            >
                <label>{"1. Title"}</label>
                <Input placeholder="Title of post" />
            </Form.Item>
        </Form.Item>
    </Col>
    <Col
        xs={24}
        sm={24}
        md={24}
        lg={12}
        xl={12}
    >
        <Form.Item>
            <Form.Item
                name="parent"
                noStyle
                rules={[
                    {
                        required: false,
                        message:
                            "Please input Title!",
                    },
                ]}
            >
                <label>{"2. Parent"}</label>
                <Input placeholder="Parent of post" />
            </Form.Item>
        </Form.Item>
    </Col>
</Row>
<Row gutter={[16, 16]}>
    <Col
        xs={24}
        sm={24}
        md={24}
        lg={12}
        xl={12}
    >
        <Form.Item>
            <Form.Item
                name="meta_title"
                noStyle
                rules={[
                    {
                        required: false,
                        message:
                            "Please input meta_title!",
                    },
                ]}
            >
                <label>{"3. Meta-Title"}</label>
                <Input placeholder="Meta-Title of post" />
            </Form.Item>
        </Form.Item>
    </Col>
    <Col
        xs={24}
        sm={24}
        md={24}
        lg={12}
        xl={12}
    >
        <Form.Item>
            <Form.Item
                name="published"
                noStyle
                rules={[
                    {
                        required: false,
                        message:
                            "Please input published!",
                    },
                ]}
            >
                <label>
                    {"4. Published at"}
                </label>
                <Space
                    direction="vertical"
                    style={{ width: "100%" }}
                >
                    <DatePicker
                        showTime
                        defaultValue={moment(
                            new Date(),
                            dateFormat
                        )}
                        style={{
                            width: "100%",
                        }}
                        placeholder="Date published at of post"
                    />
                </Space>
            </Form.Item>
        </Form.Item>
    </Col>
</Row>
<Row gutter={[16, 16]}>
    <Col
        xs={24}
        sm={24}
        md={24}
        lg={12}
        xl={12}
    >
        <Form.Item>
            <Form.Item
                name="category"
                noStyle
                rules={[
                    {
                        required: false,
                        message:
                            "Please input category!",
                    },
                ]}
            >
                <label>{"5. Category"}</label>
                <Select placeholder="Category of post">
                    <Option value="jack">
                        Jack
                    </Option>
                    <Option value="lucy">
                        Lucy
                    </Option>
                    <Option value="Yiminghe">
                        yiminghe
                    </Option>
                </Select>
            </Form.Item>
        </Form.Item>

        <Form.Item>
            <Form.Item
                name="sumary"
                noStyle
                rules={[
                    {
                        required: false,
                        message:
                            "Please input sumary!",
                    },
                ]}
            >
                <label>{"7. Sumary"}</label>
                <TextArea
                    rows={7}
                    placeholder="Sumary of post"
                />
            </Form.Item>
        </Form.Item>
    </Col>
    <Col
        xs={24}
        sm={24}
        md={24}
        lg={12}
        xl={12}
    >
        <Form.Item>
            <Form.Item
                noStyle
                name="tag"
                rules={[
                    {
                        required: false,
                        message:
                            "Please input tag!",
                    },
                ]}
            >
                <label>{"6. Tag"}</label>
                <Select
                    mode="multiple"
                    placeholder="Tag of post"
                >
                    <Option value="jack">
                        Jack
                    </Option>
                    <Option value="lucy">
                        Lucy
                    </Option>
                    <Option value="Yiminghe">
                        yiminghe
                    </Option>
                </Select>
            </Form.Item>
        </Form.Item>
        <Form.Item>
            <Form.Item
                name="thumbnail"
                noStyle
                rules={[
                    {
                        required: false,
                        message:
                            "Please input thumbnail!",
                    },
                ]}
            >
                <label>{"8. thumbnail"}</label>
                <Upload
                    name="avatar"
                    listType="picture-card"
                    className="thumbnail-post-upload"
                    showUploadList={false}
                    beforeUpload={() => false}
                    onChange={handleUploadFile}
                >
                    {imageUrl ? (
                        <img
                            src={imageUrl}
                            alt="avatar"
                            style={{
                                width: "100%",
                                height: "100%",
                                objectFit:
                                    "cover",
                            }}
                        />
                    ) : (
                        uploadButton
                    )}
                </Upload>
            </Form.Item>
        </Form.Item>
    </Col>
</Row>
<Row gutter={[16, 16]}>
    <Col
        xs={24}
        sm={24}
        md={24}
        lg={24}
        xl={24}
    >
        <Form.Item>
            <Form.Item
                noStyle
                name="content"
                rules={[
                    {
                        required: false,
                        message:
                            "Please input content!",
                    },
                ]}
            >
                <label>{"9. Content"}</label>
                {/* <Editor
                onInit={(evt, editor) =>
                    (editorRef.current = editor)
                }

                apiKey="n1gm5s2923aec5q1x6xgk9hyq48eoabd7qtuwhkd357rr0xx"
                initialValue=""
                init={{
                    height: 500,
                    menubar: false,
                    plugins: [
                        "advlist autolink lists link image charmap print preview anchor",
                        "searchreplace visualblocks code fullscreen",
                        "insertdatetime media table paste code help wordcount",
                    ],
                    toolbar:
                        "undo redo | formatselect | " +
                        "bold italic backcolor | alignleft aligncenter " +
                        "alignright alignjustify | bullist numlist outdent indent | " +
                        "removeformat | help",
                    content_style:
                        "body { font-family:Helvetica,Arial,sans-serif; font-size:14px; color: rgba(0, 0, 0, 0.85);}",
                }}
            /> */}
                <ReactQuill
                    value={content}
                    // toolbar={[
                    //     [{ 'header': [1, 2, false] }, { 'font': [] }],
                    //     ['bold', 'italic', 'underline', 'strike', 'blockquote'],
                    //     [{'list': 'ordered'}, {'list': 'bullet'},
                    //     {'indent': '-1'}, {'indent': '+1'}],
                    //     ['link', 'image', 'video'],
                    //     ['clean']
                    // ]}
                    theme={"snow"}
                    placeholder={
                        "Write something..."
                    }
                    modules={{
                        toolbar: [
                            [
                                {
                                    header: [
                                        1,
                                        2,
                                        false,
                                    ],
                                },
                                { font: [] },
                            ],
                            [
                                "bold",
                                "italic",
                                "underline",
                                "strike",
                                "blockquote",
                            ],
                            [
                                {
                                    list: "ordered",
                                },
                                {
                                    list: "bullet",
                                },
                                {
                                    indent: "-1",
                                },
                                {
                                    indent: "+1",
                                },
                            ],
                            [
                                "link",
                                "image",
                                "video",
                            ],
                            ["clean"],
                        ],
                    }}
                    formats={[
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
                    ]}
                    // onChange={(value)=>setContent(value)}
                />
            </Form.Item>
        </Form.Item>
    </Col>
</Row>
</Col>