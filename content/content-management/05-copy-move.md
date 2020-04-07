---
title: Copy or move
metaTitle: "sensenet API - Copy and move content"
metaDescription: "How to copy and move content"
---

You can copy or move single or multiple content at once. With copy the system creates a new content, a copy of the chosen item(s) in a chosen target container and keeps the original one(s) as well. Using move lets you move a content(s) to another container.

<note severity="info">Always check the allowed child types set on the chosen target container, because it can result an unsuccessful copy or move.</note>
&nbsp;
<note severity="info">Another limitation is that a children of a content list cannot be copied or moved to another content list since there could be custom local fields added to the source lists that are not available on the target list and could cause data loss.</note>

## Copy a single content

Following example will copy the content that the action is called in to the given target container:

<tab category="content-management" article="copy-move" example="copyContent" />

## Copy multiple content

The next examples shows how to copy multiple documents into another folder:

<tab category="content-management" article="copy-move" example="copyMultiple" />

## Move a single content

Following example shows how to move a content to a given target folder:

<tab category="content-management" article="copy-move" example="moveContent" />

## Move multiple content

Next example shows how to move multiple documents into another target folder:

<tab category="content-management" article="copy-move" example="moveMultiple" />
