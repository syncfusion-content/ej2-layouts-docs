---
layout: post
title: Getting started with ##Platform_Name## Dashboard layout control | Syncfusion
description:  Checkout and learn about Getting started with ##Platform_Name## Dashboard layout control of Syncfusion Essential JS 2 and more details.
platform: ej2-javascript
control: Getting started 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---
# Getting started in ##Platform_Name## Dashboard layout control

This section explains how to create a simple **DashboardLayout** component and configure its available functionalities, using the Essential JS 2 [quickstart](https://github.com/SyncfusionExamples/ej2-quickstart-webpack-) seed repository.

> This application is integrated with the `webpack.config.js` configuration and uses the latest version of the [webpack-cli](https://webpack.js.org/api/cli/#commands). It requires node `v14.15.0` or higher. For more information about webpack and its features, refer to the [webpack documentation](https://webpack.js.org/guides/getting-started/).

## Dependencies

The following list of dependencies is required to use the DashboardLayout component in your application.

```js
|-- @syncfusion/ej2-layouts
    |-- @syncfusion/ej2-base

```

## Set up development environment

Open the command prompt from the required directory, and run the following command to clone the Syncfusion JavaScript (Essential JS 2) quickstart project from [GitHub](https://github.com/SyncfusionExamples/ej2-quickstart-webpack-).

```
    git clone https://github.com/SyncfusionExamples/ej2-quickstart-webpack- ej2-quickstart
```

After cloning the application in the `ej2-quickstart` folder, run the following command line to navigate to the `ej2-quickstart` folder.

```
    cd ej2-quickstart
```

## Add Syncfusion JavaScript packages

Syncfusion JavaScript (Essential JS 2) packages are available on the [npmjs.com](https://www.npmjs.com/~syncfusionorg) public registry. You can install all Syncfusion JavaScript (Essential JS 2) controls in a single [@syncfusion/ej2](https://www.npmjs.com/package/@syncfusion/ej2) package or individual packages for each control.

The quickstart application is preconfigured with the dependent [@syncfusion/ej2](https://www.npmjs.com/package/@syncfusion/ej2) package in the `~/package.json` file. Use the following command to install the dependent npm packages from the command prompt.

```
    npm install
```

## Import the Syncfusion CSS styles

Syncfusion JavaScript controls come with [built-in themes](https://ej2.syncfusion.com/documentation/appearance/theme/), which are available in the installed packages. It's easy to adapt the Syncfusion JavaScript controls to match the style of your application by referring to one of the built-in themes.

The quickstart application is preconfigured to use the `Material` theme in the `~/src/styles/styles.css` file, as shown below: 

```
  @import "../../node_modules/@syncfusion/ej2/material.css";
```

> You can check out the [themes](https://ej2.syncfusion.com/documentation/appearance/theme/) section to know more about built-in themes and CSS reference for individual controls.

## Add DashboardLayout to the application

You can render the DashboardLayout component in the following two ways.

* Adding dashboard element and defining `panels` property as attributes in the HTML elements directly.
* Adding the dashboard element and defining the `panels` property through script.

## Defining panels property through HTML attributes

The `panels` of the Dashboard layout component can defined through HTML attributes by using the predefined class `.e-panel` to the component child elements and data attributes for defining the `sizeX`, `sizeY`, `row` and `column` properties for each panel.

The following sample demonstrates defining of `panels` by adding child elements within the root element.

`[src/index.html]`

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <title>Essential JS 2 DashboardLayout component</title>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no" />
    <meta name="description" content="Essential JS 2" />
</head>

<body>
    <div style="margin: 50px;">
        <!--element which is going to render the dashboardlayout-->
        <div id="dashboard_inline">
            <div id="one" class="e-panel" data-row="0" data-col="0" data-sizeX="1" data-sizeY="1">
                <div class="e-panel-container">
                    <div class="content">0</div>
                </div>
            </div>
            <div id="two" class="e-panel" data-row="0" data-col="1" data-sizeX="3" data-sizeY="2">
                <div class="e-panel-container">
                    <div class="content">1</div>
                </div>
            </div>
            <div id="three" class="e-panel" data-row="0" data-col="4" data-sizeX="1" data-sizeY="3">
                <div class="e-panel-container">
                    <div class="content">2</div>
                </div>
            </div>
            <div id="four" class="e-panel" data-row="1" data-col="0" data-sizeX="1" data-sizeY="1">
                <div class="e-panel-container">
                    <div class="content">3</div>
                </div>
            </div>
            <div id="five" class="e-panel" data-row="2" data-col="0" data-sizeX="2" data-sizeY="1">
                <div class="e-panel-container">
                    <div class="content">4</div>
                </div>
            </div>
            <div id="six" class="e-panel" data-row="2" data-col="2" data-sizeX="1" data-sizeY="1">
                <div class="e-panel-container">
                    <div class="content">5</div>
                </div>
            </div>
            <div id="seven" class="e-panel" data-row="2" data-col="3" data-sizeX="1" data-sizeY="1">
                <div class="e-panel-container">
                    <div class="content">6</div>
                </div>
            </div>
        </div>
</body>

</html>
```

Now, import the DashboardLayout component into your `app.ts` and append it to `#dashboard_inline`.

`[src/app/app.ts]`

```ts

import { DashboardLayout } from '@syncfusion/ej2-layouts';

// initialize dashboardlayout component
let dashboard: DashboardLayout  = new DashboardLayout ({
    columns: 5
});
// render initialized dashboardlayout
dashboard.appendTo('#dashboard_inline');

```

## Run the application

Now, use the `npm run start` command to run the application in the browser.

  ```
    npm run start
  ```

The below output can be achieved by following the steps mentioned above.

{% tabs %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/dashboard-layout/getting-started-panels-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/dashboard-layout/getting-started-panels-cs1" %}

## Defining panels properties through script

The panels can be defined simply during component initialization at the script section using the `panels` property of the component.

The following sample demonstrates defining panels property through script section. Here, the panels settings is defined using panels property with same settings as in HTML definition in the previous section.

`[src/app/app.ts]`

```ts

import { DashboardLayout } from '@syncfusion/ej2-layouts';

// initialize dashboardlayout component
let dashboard: DashboardLayout  = new DashboardLayout ({
    cellSpacing: [10, 10],
    columns: 5,
    panels: [{ "sizeX": 1, "sizeY": 1, "row": 0, "col": 0, content:'<div class="content">0</div>' },
    { "sizeX": 3, "sizeY": 2, "row": 0, "col": 1, content:'<div class="content">1</div>' },
    { "sizeX": 1, "sizeY": 3, "row": 0, "col": 4, content:'<div class="content">2</div>' },
    { "sizeX": 1, "sizeY": 1, "row": 1, "col": 0, content:'<div class="content">3</div>' },
    { "sizeX": 2, "sizeY": 1, "row": 2, "col": 0, content:'<div class="content">4</div>' },
    { "sizeX": 1, "sizeY": 1, "row": 2, "col": 2, content:'<div class="content">5</div>' },
    { "sizeX": 1, "sizeY": 1, "row": 2, "col": 3, content:'<div class="content">6</div>' }
    ]
});
// render initialized dashboardlayout
dashboard.appendTo('#dashboard_default');

```

The following example shows a basic DashboardLayout by defining the `panels` property through script.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/dashboard-layout/getting-started-cs4/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/dashboard-layout/getting-started-cs4/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/dashboard-layout/getting-started-cs4" %}

> You can refer to our [JavaScript Dashboard Layout](https://www.syncfusion.com/javascript-ui-controls/js-dashboard-layout) feature tour page for its groundbreaking feature representations. You can also explore our [JavaScript Dashboard Layout example](https://ej2.syncfusion.com/demos/#/material/dashboard-layout/default.html) to knows how to present and manipulate data.