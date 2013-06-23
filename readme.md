USING
=====

To see the library in action, download xalan.html and xalan.js.

COMPILING
=========

Compile Xalan using the native system tools. This is so we can get a working copy of MsgCreator.

GNU ICONV

Compile and make as normal

XERCES

	~/emscripten/emconfigure ./configure --disable-threads --disable-network --enable-transcoder-gnuiconv --disable-transcoder-iconv --enable-msgloader-inmemory CPPFLAGS="-I/home/matthew/Development/xerces.js/libiconv-1.14/include"
	~/emscripten/emmake make

XALAN

Edit runConfigure so that it calls *~/emscripten/emconfigure ./configure* instead of just configure.

	export XALANCROOT=/home/matthew/Development/xerces.js/xalan-c-1.11/c	
	./runConfigure -p linux -z -I/home/matthew/Development/xerces.js/xerces-c-3.1.1/src
	
Copy the native build of xalan-c-1.11/c/bin/MsgCreator to the emscripten build (otherwise you'll get errors like *can not execute MsgCreator*).

	export EMCC_CFLAGS=--ignore-dynamic-linking
	~/emscripten/emmake make
	./buildxalan.sh
