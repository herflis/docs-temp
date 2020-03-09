---
title: Upload
metaTitle: "sensenet API - Upload files"
metaDescription: "How to upload files"
---

You can uploads a stream or text to a content binary field (e.g. a file) with the action named `Upload`. An upload request is actually two requests, one for creating a new content in the repository and one for fill its Binary field with the stream or text. The upload requests should have a bunch of required and optional parameters in their body, let's see them one by one.

| name |||
|-|-|-|
| create | URL parameter, required in the first reques | this parameter should be added to the initial upload request |
| ContentType | string, optional | specific content type name for the uploaded content. If not provided, the system will try to determine it from the current environment: the upload content types configured in the web.config and the allowed content types in the particular folder. In most cases, this will be File. |
| FileName | string, required | name of the uploaded file. |
| Overwrite| boolean, optional, default value is `True` | determines whether the upload action should overwrite a content if it already exist with the same name. If false, a new file will be created with a similar name containing an incremental number (e.g. sample(2).docx). |
| UseChunk | boolean, optional, used in the first request, default is `False` | determines whether the system should start a chunk upload process instead of saving the file in one round. Usually this is determined by the size of the file.|
| PropertyName | string, optional, default value is 'Binary' | appoints the binary field of the content where the data should be saved. |
| ChunkToken | string, required only in the second request | the response of first request returns this token. It must be posted in all of the subsequent requests without modification. It is used for executing the chunk upload operation. |
| FileText | | in case you do not have the file as a real file in the file system but a text in the browser, you can provide the raw text in this parameter.

# Upload a file

<tab category="content-management" article="upload" example="uploadFile" />

# Create a file with raw text

<tab category="content-management" article="upload" example="uploadRawText" />

# Upload a folder

<tab category="content-management" article="upload" example="uploadFolder" />
