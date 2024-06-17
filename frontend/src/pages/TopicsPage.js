import React from 'react';
function TopicsPage(){
    return (
        <>
            <h2>Web Development Concepts</h2>
            <nav class="local">
                <a href="#webServers">Web Servers</a>
                <a href="#frontendDesign">Frontend Design</a>
                <a href="#optimizedImages">Optimized Images</a>
                <a href="#favicons">Favicons</a>
                <a href="#cascadingStylesheets">Cascading Stylesheets</a>
                <a href="#forms">Forms</a>
                <a href="#express">Express</a>
                <a href="#javascript">JavaScript</a>
            </nav>
            <article id="webServers">
                <h3>Web Servers</h3>
                <p>A designated home page is an index file that is <strong>the default page directed to by the server whenever a client accesses a website and sends a GET request for the /</strong>. In most cases, such as the <strong>Apache Web Server</strong> used by OSU, it is returned by the web server at the path <strong>/index.html</strong>. Other servers such as Microsoft .NET use default.html, whereas still others use index.js or index.php.</p>
                <p>When viewed locally, the file is accessed by a web browser through its location in the computer. When viewed through a web server, Oregon State Engineering’s remote server is used as a host. <strong>There are far more request and response headers displayed when viewed on the web server</strong>. This is because the client was able to request and receive information from the <strong>remote web server</strong>, whereas when viewed locally, there is no external web server to communicate with. For <strong>the Request URL header</strong>, the server side shows a <strong>link to a webpage hosted by the remote server</strong>, whereas the local side displays only the <strong>location of the file within the computer</strong>. <strong>Only the web server side has remote address</strong> details because the local computer side does not involve a remote web server. </p>
                <p>The favorites icon (favicon.ico) has a status 200 because it is <strong>automatically provided by the OSU server and has been successfully returned</strong> with site access. The main.css and main.js files have a status 404 because both files are <strong>not part of the OSU server</strong> that received the request.  </p>
                <p>Of my URL https://web.engr.oregonstate.edu/~chominj/a1-chominj/, 'https://' is the <strong>scheme</strong>, or the protocol used by the client to request the resource. ‘oregonstate.edu’ is the <strong>host domain</strong>, with ‘oregonstate’ being the name of the host or the server that hosts the website, and ‘edu’ being the domain extension. ‘web’ and ‘engr’ are <strong>subdomains</strong> that are part of the server. ‘~chominj/g1-chominj/‘ is the part that identifies the <strong>resources</strong> on this server. </p>            
            </article>
            <article id="frontendDesign">
                <h3>Frontend Design</h3>
                <p>Frontend design allows developers <strong>to provide the best experience for users</strong> using a web app, mobile app, or any user-operated device. It encompasses the <strong>visual design</strong>, <strong>graphical user interface (GUI)</strong>, and <strong>interactive experience</strong> of a page. Usually this requires consistent colors, font/typography, photography, icons, illustrations, and navigation methods throughout a web page. While <strong>usability and inclusivity</strong> are the standards for measuring a user's experience of frontend design, this module mainly discussed usability, specifically usability of web apps.</p>
                <dl>
                    <dt>Effective</dt>
                    <dd>The website should help the user <strong>achieve their goals</strong> and yield accurate results.</dd>
                    <dt>Efficient</dt>
                    <dd>The website should help the user perform tasks <strong>as easily as possible</strong> for quick results.</dd>
                    <dt>Easy to Navigate</dt>
                    <dd>The website should be <strong>easy to use</strong>, especially for newcomers, allowing them to instantly understand how to find items they need through clicks and searches. The user should also be able to remember how to do the same next time.</dd>
                    <dt>Error-free</dt>
                    <dd>The website should not throw or display errors to prevent <strong>accessibility and availability</strong> issues. Common errors that users run into frequently should be eliminated.</dd>
                    <dt>Enjoyable or Engaging</dt>
                    <dd>The website should have content and design that provides an overall experience <strong>appropriate and fitting to the needs</strong> of the target audience.</dd>
                </dl>
                <p>Page layout tags section content within a page in a way that <strong>helps machines</strong>, such as search engine robots and screen readers, to <strong>understand the page's structure and composition</strong>. The tags discussed in this module and used for the assignment were header, nav, main, section, articles, and footer. A <strong>header</strong> tag is used to identify the name, publisher, or marketing slogan of an app or site. A <strong>nav</strong> tag is used to allow users to navigate from page to page, such as in the form of a menu bar. A <strong>main</strong> tag is used to identify the content block of a page, and usually includes sections and articles. A <strong>section</strong> tag is used to group <strong>articles</strong> of interrelated content as a way of classification. An <strong>article</strong> is used to identify content on a certain topic and usually has ID selectors as destinations for internal navigation on a page. A <strong>footer</strong> tag is used to display legal info such as copyright statements or contact info and important links.</p>
                <ol>
                    <li>Anchors link from one content page to another content page using the <strong>navigational tag &lt;nav&gt;</strong> and the <strong>anchor tags &lt;a&gt;</strong>, and within a content page or html file using the &lt;a&gt; tags.</li>
                    <li><strong>External content</strong>: To link to an external element <strong>outside the current website</strong>, an <strong>absolute path</strong>, which is the full URL that includes the scheme, subdomains, domain, directory/folder, and file names, are included. The 'href' attribute should be used in the opening &lt;a&gt; tag to specify <strong>the website URL</strong>, and the description of the link should be provided between the opening and closing &lt;a&gt; tags. 
                    </li>
                    <li><strong>Internal Content</strong>: To link to an internal element <strong>within the same page</strong>, a <strong>relative path</strong> to access a file in the same directory can be used through just the name of the file or adding ./ before the name of the file. The 'href' attribute should be used in the opening &lt;a&gt; tag to specify the reference to the <strong>ID attribute</strong> of the text item being linked. The ID attribute can be specified in the tag of the item, and the anchor can reference it by <strong>adding a hashtag to the front of the ID selector</strong>. 
                    </li>
                    <li><strong>Page-to-Page</strong>: To link between pages, the 'href' attribute should be used in the opening &lt;a&gt; tag to specify the reference to an <strong>HTML file within the same folder</strong>. To allow movement between two pages without using backspace, one can <strong>add two anchors that link to both HTML files in each file</strong>, which creates a linked text for both the current page and the other page. </li>
                </ol>
            </article>
            <article id="optimizedImages">
                <h3>Optimized Images</h3>
                <p>The 6 major specifications of images for the web are <strong>descriptive file name, small file size, exact dimensions, correct file format, reduced resolution, and color mode</strong>. A <strong>descriptive file name</strong> is needed for <strong>Search Engine Optimization (SEO)</strong>, which allows search engine bots to guide users looking for similar images to this file. It should include as much information about the who, what, when, and where of the image as possible. A <strong>small file size</strong> allows the file to <strong>load as quickly as possible</strong>, as high resolution images can only be displayed in a timely manner in high resolution devices. Small file size with good quality resolution can be achieved using lossless compression. <strong>Preparing images in an exact dimension</strong> is convenient for having the images fit the dimensions of a web page. If a file is too wide for a web page’s space, it will load very slowly. A <strong>correct file format</strong> is required to fit the purpose of the image, with the most common ones being .jpg, .gif, and .png. An inappropriate file format may result in a suboptimal viewing experience for the user. A <strong>reduced resolution</strong> can help images render in lower-pixel monitors, with the older default resolution being 72ppi. However, providing multiple image sizes for monitors with different resolution is becoming standard procedure. Finally, <strong>color mode</strong> is needed to avoid amateur-looking design and provide consistently aesthetically-pleasing content for a user. While brands usually have a color mode that they prefer and provide them to web developers, for projects in which color mode is not specified, a color mode conversion tool can be used. Otherwise, one can refer to the site’s background photos or art to choose a color scheme from. </p>
                <p>File formats that are most appropriate for photos are <strong>JPG and WebP</strong>. JPG files are appropriate because they <strong>can be compressed to small sized files while still staying rectangular</strong>, preventing excessive load on the web server that must resize and compress a photo that is often multicolored, detailed, high-resolution, and too large for the web. However, with higher compression, the quality of the image may go down. WebP files are also appropriate because they can <strong>also be compressed small and stay rectangular</strong>, lessening the load on a web server. However, the image quality can go down with higher compression. File formats that are most appropriate for line art are <strong>GIF, SVG and PNG files</strong>. GIF files are most commonly used for line-art graphics because they can have <strong>8-bit transparency and can enable animation</strong>. PNG files are best for line art because they have <strong>true transparency</strong>, which means they can be overlaid on different colors without being distorted, and the background can be seen through blank or transparent parts. SVG are appropriate for line art because of the <strong>clearness and crispness of the images</strong> compared to other file formats. The graphics are scalable, derived mathematically, and marked with XML. 
                </p>
            </article>
            <article id="favicons">
                <h3>Favicons</h3>
                <p>Favicons are symbols or images set by a website, app, or company, <strong>typically to provide recognizability to the user</strong>. Favicons are developed and saved in multiple file formats appropriate for different browser and device environments. Favicons may be displayed next to the website’s name <strong>on a browser tab or a search engine result, or as an app icon</strong> on a smartwatch, cellphone, or large display. Favicons are typically saved in .gif, .png, .ico, and .svg formats.</p>
            </article>
            <article id="cascadingStylesheets">
                <h3>Cascading Stylesheets</h3>
                <p>A Cascading Style Sheet (CSS) can <strong>enhance the components of a website to be more usable, readable, legible, and consistent with brand requirements</strong>. It does so by overriding the styles defined by HTML using its own syntax, changing the look and behavior of a website’s structure, content, and components.</p>
                <p>There are 5 ways to incorporate styles in a website or app. The first is to <strong>link an external stylesheet file to the global &lt;head&gt; of a website</strong>, which is efficient because it can apply the style of that global stylesheet to all pages of that website. The second is to <strong>import stylesheets after the global.css file</strong>, which can be useful for applying styles to specific components. The first and second method, which externally link stylesheets, are considered the most efficient and liked methods. The third is <strong>embedding within a &lt;style&gt;&lt;style&gt; tag</strong>, and the fourth is <strong>inline within an element by defining an attribute and value</strong>. The fifth is <strong>manipulating the Document Object Model (DOM)</strong>. The third, fourth, and fifth methods are used to incorporate direct changes to the HTML and JavaScript files, but these methods are used primarily for one-off changes. They are also not allowed in this course. </p>
            </article>
            <article id="forms">
                <h3>Forms</h3>
                <p><strong>The 6 major goals of accessible forms</strong> are: <strong>(1) Write clear instructions</strong> for the responder about the form and its fields (labels) - placeholder values are not accessible to those without vision. <strong>(2) Notify the users of the reason</strong> why one is gathering this information, and which answers are required. <strong>(3) Autofocus to the first field</strong> which automatically sets the cursor to the first field, allowing the user to start typing right away without clicking. <strong>(4) Make sure each form control can be populated using keyboard only</strong> so that people who are unable to use mouses or trackpads are not inconvenienced. <strong>(5) Tab index complex forms</strong> to highlight the order the user should fill the forms in. <strong>(6) Use only screen-readable validation messages</strong> instead of only sending built-in browser HTML messages that are not screen reader-friendly.</p>
                <p>There are major tags that are often used in forms. <strong>The form tag</strong> is for adding a form to an HTML file and requires an opening/closing tag. Form tags cannot contain other forms in them but can include any other content, including the &lt;input&gt; element, the &lt;textarea&gt; control, and the &lt;fieldset&gt; grouping control. The form tag has two attributes of <strong>action and method</strong>. Action denotes where a form request is sent, can hold a value of a relative path or absolute URL. Without it, a form is sent to the same URL it was downloaded. Method denotes the HTTP method that will be used in the HTTP request for when the form is sent. A method's value is not case sensitives, the common values are GET or POST, and defaults to GET if attribute is not specified. In this assignment, we only used POST. <strong>The fieldset tag</strong> and <strong>legend tag</strong> are used for grouping the elements of the form, and can make forms more accessible to those who have visual disabilities. Fieldsets normally have a gray border with a <strong>legend</strong> on the top, which should be used to signify the meaning of the grouping. The <strong>label tag</strong> usually has a for="" attribute that is the same as the form control's id="", and can be used to notify users with a screen reader about the purpose of the data being collected. The <strong>input tag</strong> is the most common tag used for data entry, and its appearance and use can be greatly changed by the addition of attributes. It should have the type and name="" attributes, and can sometimes include the required attribute, which are mandatory. The <strong>select tag</strong> is used to display a drop-down menu that users can choose from. It includes the &lt;option&gt; tag to list choices, and has the selected attribute which auto-selects the Other option. The <strong>textarea tag</strong> is used for entry of multiple lines of writing from the user. Using the required attribute on this tag can ensure more feedback. Finally, the <strong>button</strong> tag can be activated via keyboard, mouse click, voice, or finger, and if performs a specified action="", such as submitting a form.</p>
                <p>The major form style recommendations to improve usability are the following: <strong>Changing the border</strong> color, type, and width of the fieldset, as well as <strong>adding margin and padding</strong>, can help separate the fieldsets from each other. <strong>Changing the font size and color of the legend</strong> can distinguish it from the labels, and <strong>showing legends above form controls</strong> can help readability. <strong>Upping font size and padding</strong> can make it more accessible for people who have issues with aim, and <strong>inheriting font-family</strong> can give an overall more consistent look.</p>
            </article>
            <article id="express">
                <h3>Express</h3>
                <p><strong>Node</strong> is a runtime environment used for developing server-side and networking apps, which can be written in JavaScript and run on Mac, Windows, and Linux within the Node.js runtime environment. Using Node.js <strong>can make developing web apps much simpler</strong>. <strong>npm</strong> is a package manager for Node that can install and control open source packages of programs that have already been developed by other developers. It is both an <strong>online storage</strong> for publishing Node packages, and a <strong>command-line utility</strong> to install packages from that online storage for user projects. <strong>Express</strong> is a popular framework that has been developed for building web apps on Node.js, which provides API (Application Programming Interface)s for tasks common to web apps. It allows developers to get, post, delete, and determine the routes for data. It can utilize static files (for example, from the public folder) for dynamic responses using that data. Also, it can be used to utilize middleware, for taking care of en-route requests by data. Using these three technologies can make web development much easier and simpler for developers by providing an environment fit for all operating systems (Node), decreasing the amount of work needed to develop an app (npm), and allowing for easier handling of data in web apps (Express).</p>
            </article>
            <article id="javascript">
                <h3>JavaScript</h3>
                <p>The main data types of JavaScript are number, boolean value (false or true), string, symbol, special values (undefined and null), and object. Other than the object type, all other types are called ‘primitive type’. For <strong>number</strong> type, JavaScript has only one number type - double-precision floating-point numbers. While JavaScript will automatically convert some strings to numbers in some arithmetic operations, we should follow Golden Rule 3 by knowing the data type and avoiding automatic type conversion, using functions such as parseFloat(), parseInt(), toString(), toLocaleString(), Math.trunc(), and Math.round(). For <strong>boolean</strong> type, we must also not rely on automatic conversion of different values into true/false values and apply the golden rule again to only use boolean values for conditions. For <strong>special values</strong> like null and undefined, we should always try to use undefined in our code and not null as this is recommended in the course. For <strong>strings</strong>, in JavaScript both double and single quote can be used. Strings the contain only characters are called string literals, and strings that contain expressions are called template literals, enclosed in backticks with expressions within `{'...'}`. We will not discuss symbol type in this course. <strong>Objects</strong> are name-value pair sets, where the name is also known as ‘property’. Objects can be CRUD (created, read, updated, or deleted) through our code. </p>
                <p><strong>Objects</strong> are used to create sets of name-value pairs where names (otherwise known as properties) are assigned values. The object can be accessed through CRUD (create, read, update, or delete). One can use Object.keys() to access all the names of all the properties of an object. An <strong>array</strong> is an object where the property names are numbers starting from 0 of the string data type, such as ‘0’, ‘1’, and ‘2’. However, its elements can be accessed using both a 0 based integer index (ex:[0]) or a string-based property name (ex:[‘0’]). The values can be of any type including objects, and when accessing an element that does not exist it returns ‘undefined’. One can use Array.isArray() to determine if a value is in an array or not, or use length to return the number of elements in the array. One can also use push() to add more elements to the end and pop() to remove and return the end element of the array. Using includes() can show if a value is part of the elements of the array. JSON (JavaScript Object Notation) is commonly used for exchanging data between applications, and is programming language independent, with libraries provided in JavaScript, Python, Java, C#, etc… With JSON, one can map a program object to a string in JSON format, and create a program object from string to the JSON format. The programming-language independent properties of JSON allows programs to exchange data even when they are written in different languages. JSON.stringify() can be used to turn a JavaScript object into a JSON string, and JSON.parse() can be used to turn a JSON string into a JavaScript object. </p>
                <p>In JavaScript, conditionals are used through if and switch statements, conditional operators, equality testing, comparison testing, and boolean operators. <strong>If</strong> statements are used through the basic if statement (executes when the expression evaluates to true), or the if-then-else statement (with additional else-if branches and the optional else branch if no other branch evaluates to true). <strong>Conditional operator</strong> (ternary operator) is a simple decision that evaluates a condition first toe value one of two expressions and return its value. <strong>Equality testing</strong> can be either <strong>strict</strong> or <strong>loose</strong>. Strict equality testing uses === or !== to check if two operands are strictly equal, and loose equality testing uses == or !== to check if two operands are loosely equal. The loose equality operators should not be used to follow Golden Rule 3. <strong>Comparison testing</strong> compares operands using the standard comparison operators of &lt;, &gt;, &lt;=, and &gt;=. Boolean operators can be combined using && (AND), || (or), or ! (Not). <strong>Loops</strong> can be used using while, do while, for, for of, and for in loops. Any while loop executes continually while the expression evaluates to true. Do while loops are while loops where the expression is evaluated after the body has been executed. For loops are continually executed while the loop condition in the initialization loop is evaluated to true. The for of loop iterates over the elements of an iterable value like a string or array. The for in loop iterates over properties of an object (although it cannot be assumed that the loop will follow any particular order during the iteration). </p>
                <p><strong>Object oriented programming</strong> is programming using an object that is expected to have an identity, state, and behavior. Objects are expected to have identity, which means they are distinct and not the same, state, which means they have their own state within the properties, and behavior, which means added properties whose values are functions. JavaScript uses prototypes to create many objects with common properties by declaring the common properties once before.</p>
                <p><strong>Functional programming</strong> is programming using functions, which are first class values that can be assigned to variables, can receive other functions as arguments (higher-order function), and can return functions. When an error occurs in a function, we can throw an exception, which can be caught by catch. Throwing exceptions can be done by ‘throw’ and catching exceptions can be done by ‘try’ and ‘catch’ - when the code inside a try block throws an exception, the catch block code is executed. A finally block is always executed regardless of an exception occurs or not, and is normally used to make sure that a resource acquired during the try block is released. 
                </p>
            </article>
</>
    );
}
export default TopicsPage;