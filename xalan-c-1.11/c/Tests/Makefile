#
# Copyright 1999-2004 The Apache Software Foundation.
#
# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at
#
#     http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.
#
#
###################################################################
#                    IMPORTANT NOTE                               #
###################################################################
# Before you try to run the Makefile, make sure you have two      #
# environment variables set.                                      #
#                                                                 #
# export XALANCROOT=<the directory where you installed XALAN-C>   #
# export XERCESCROOT=<the directory where you installed XERCES-C> #
#                                                                 #
###################################################################

INSTALL = /usr/bin/install -c
INSTALL_PROGRAM = ${INSTALL}
INSTALL_DATA = ${INSTALL} -m 644
INSTALL_SCRIPT = ${INSTALL}

# Output directories
OUTDIR = ..

ifndef XALANCROOT
noxalanroot:
	@echo XALANCROOT must be defined
endif

ifndef XERCESCROOT
noxercesroot:
	@echo XERCESCROOT must be defined
endif

include $(XALANCROOT)/version.incl
include ../Makefile.incl

PERFSOURCE = \
    $(wildcard $(TESTS_DIR)/Performance/*.cpp)

PERF_OBJECTS = \
    $(addprefix $(XSL_OBJ_DIR)/,$(addsuffix .o,$(basename $(notdir $(PERFSOURCE)))))

all: Tests

tests : ThreadTest Conf Perf

Tests: ThreadTest Conf Perf

ThreadTest:  prepare $(XSL_BIN_DIR)/ThreadTest

$(XSL_BIN_DIR)/ThreadTest: ${XSL_OBJ_DIR}/ThreadTest.o 
	${LINK} $(XSL_BUILD_OPTIONS) ${PLATFORM_LIB_LINK_OPTIONS}  \
	${EXTRA_LINK_OPTIONS}  $(XALAN_LIB) $(ALLLIBS) $(CXXFLAGS) $^ -o $@	 $(OTHER_LINK_PARAMETERS)
${XSL_OBJ_DIR}/%.o:$(TESTS_DIR)/Threads/%.cpp
	$(CC1) $(XSL_BUILD_OPTIONS) -c $(XSL_INCL) $(EXTRA_COMPILE_OPTIONS) -o $@ $<

Conf: prepare $(XSL_BIN_DIR)/Conf

$(XSL_BIN_DIR)/Conf: ${XSL_OBJ_DIR}/conf.o
	${LINK} $(XSL_BUILD_OPTIONS) ${PLATFORM_LIB_LINK_OPTIONS}  \
	${EXTRA_LINK_OPTIONS}  $(XALAN_LIB) $(ALLLIBS) $(CXXFLAGS) $^ -o $@	 $(OTHER_LINK_PARAMETERS)
${XSL_OBJ_DIR}/%.o:$(TESTS_DIR)/Conf/%.cpp
	$(CC1) $(XSL_BUILD_OPTIONS) -c $(XSL_INCL) $(EXTRA_COMPILE_OPTIONS) -o $@ $<

prepare:
	-${MKDIR} -p ${XSL_LIB_DIR}
	-${MKDIR} -p $(XSL_BIN_DIR)

install: Tests
	$(MKINSTALLDIRS) $(DESTDIR)/$(bindir)
	$(INSTALL_PROGRAM) $(XSL_BIN_DIR)/Conf$(EXT) $(DESTDIR)/$(bindir)
	$(INSTALL_PROGRAM) $(XSL_BIN_DIR)/ThreadTest$(EXT) $(DESTDIR)/$(bindir)
	$(INSTALL_PROGRAM) $(XSL_BIN_DIR)/Perf$(EXT) $(DESTDIR)/$(bindir)
	

install-extras:
	cp -r $(TESTS_DIR) $(DESTDIR)/$(prefix)

Perf: prepare $(XSL_BIN_DIR)/Perf

$(XSL_BIN_DIR)/Perf: $(PERF_OBJECTS)
	${LINK} $(XSL_BUILD_OPTIONS) ${PLATFORM_LIB_LINK_OPTIONS}  \
	${EXTRA_LINK_OPTIONS}  $(XALAN_LIB) $(ALLLIBS) $(CXXFLAGS) $^ -o $@	 $(OTHER_LINK_PARAMETERS)
	
${XSL_OBJ_DIR}/%.o:$(TESTS_DIR)/Performance/%.cpp
	$(CC1) $(XSL_BUILD_OPTIONS) -c $(XSL_INCL) $(EXTRA_COMPILE_OPTIONS) -o $@ $<
	
clean:
	rm -rf $(XSL_OBJ_DIR)/*.o
	rm -rf $(OUTDIR)/so_locations
	rm -rf $(XSL_BIN_DIR)/SunWS_cache
	rm -rf $(XSL_LIB_DIR)/SunWS_cache
	rm -f  $(XSL_BIN_DIR)/Conf$(EXT)
	rm -f  $(XSL_BIN_DIR)/ThreadTest$(EXT)
	rm -f  $(XSL_BIN_DIR)/Perf$(EXT)

