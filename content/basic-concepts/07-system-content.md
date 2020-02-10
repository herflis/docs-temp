---
title: System Content
metaTitle: sensenet API - System Content
metaDescription: Accessing system content
---

# Accessing system content

Some of the contents in sensenet (e.g. SystemFolder, SystemFile) - mostly because they were created for technical reasons - are system contents, that means they can be usually seen only for administrators and they are not the part of the OData query reponses by default.

If `Autofilters` is on, result list will not contain system or deleted content. For example content of a system folder will not be returned. If you want to see these content in the results, switch the filter off:

<tab category="basic-concepts" article="system-content" example="autofilter" />

