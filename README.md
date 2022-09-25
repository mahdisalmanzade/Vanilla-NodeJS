# Node.JS Modules

# Definition

Node.JS Modules can be a single or collections of files. There are 3 types of modules in Node.JS:

1. Built-in: These are modules comes along Node.JS installation, like like http, https, fs, path, os.
2. Custom Modules/Developer Defined Modules: These are modules written by developer.
3. Third Party Modules: There are many modules written by other developers and uploaded on npmjs.com which
   we can install them via Node Package Manager(NPM).

# Include a module

Including a module in the Node.JS files allows us to use the functions exposed by the module.

# Syntax of including a module

const http = require('<module_name>');
const fs = require('fs');
