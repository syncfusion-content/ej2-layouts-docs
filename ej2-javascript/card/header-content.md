---
layout: post
title: Header content in ##Platform_Name## Card control | Syncfusion
description: Learn here all about Header content in Syncfusion ##Platform_Name## Card control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Header content 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Header content in ##Platform_Name## Card control

## Header

The Card can be created with header title, sub title and images. For adding header you need to create `div` element with the class `e-card-header` added.

Card provides below elements and corresponding class definitions to include header.

Elements   | Description
------------ | -------------
Caption | It is the wrapper element to include title and sub-title.
Image | It supports to include header images with the specified dimensions.

Class   | Description
------------ | -------------
`e-card-header-caption` | To group the title and subtitle within the header which acts as wrapper.
`e-card-header-title` |  Main title text with in the header.
`e-card-sub-title` | A sub-title within the header.
`e-card-header-image` | To include heading image within the header.
`e-card-corner` | To add rounded corner for the image.

### Title and Subtitle

For adding header to the Card , you need to create wrapper `div` element with `e-card-header-caption` class.

* Place the `div` element with `e-card-header-title` class inside the header caption for adding main title.

* Place the div element with `e-card-sub-title` class inside the header caption element for adding sub-title.

### Image

Card header has an option for adding images in the header. It is aligned with either before or after the header based on the HTML element positioned in the header structure.

* The header image can be added by creating a `div` element with `e-card-header-image` class which can be placed before or after the header caption wrapper element.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/card/card-header-img-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/card/card-header-img-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/card/card-header-img-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/card/card-header-img-cs1" %}
{% endif %}

## Content

Content in Card holds texts, images, links and all possible HTML elements. Its adaptable within the Card root element.

* Create a `div` element with the class `e-card-content`.
* Place content `div` element in the Card root element or within any Card inner elements.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/card/card-content-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/card/card-content-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/card/card-content-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/card/card-content-cs1" %}
{% endif %}