Module['preRun'] = function() {
    FS.createDataFile('/', 'topic.xml', Module['intArrayFromString'](Module['xml']), true, false);
};
Module.arguments = ['topic.xml', 'html/docbook.xsl'];
Module['return'] = '';
Module['print'] = function(text) {
  Module['return'] += text + '\n';
};
